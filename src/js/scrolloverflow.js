import * as utils from './common/utils.js';
import { getOptions } from './common/options.js';
import { getState, state } from './common/state.js';
import { fireCallback } from './callbacks/fireCallback.js';
import { isResponsiveMode } from './responsive.js';
import { isMacDevice, isTouchDevice, isTouch, win, doc } from './common/constants.js';
import { $body } from './common/cache.js';
import { 
    ACTIVE_SEL,
    AUTO_HEIGHT,
    AUTO_HEIGHT_RESPONSIVE,
    OVERFLOW,
    OVERFLOW_SEL,
    SLIDE_ACTIVE_SEL
} from './common/selectors.js';
import { getNodes } from './common/item.js';
import { EventEmitter } from './common/eventEmitter.js';

EventEmitter.on('bindEvents', bindEvents);

function bindEvents(){
    
    //after DOM and images are loaded
    win.addEventListener('load', function(){
        if(getOptions().scrollOverflow && !getOptions().scrollBar){
            scrollOverflowHandler.makeScrollable();
            scrollOverflowHandler.afterSectionLoads();
        }
    });

    if(getOptions().scrollOverflow){
        getNodes(getState().panels).forEach(function(el){
            el.addEventListener('scroll', scrollOverflowHandler.onPanelScroll);
            el.addEventListener('wheel', scrollOverflowHandler.preventScrollWhileMoving);
            el.addEventListener('keydown', scrollOverflowHandler.preventScrollWhileMoving);
            el.addEventListener('keydown', scrollOverflowHandler.blurFocusOnAfterLoad);
        });
    }
}

export const scrollOverflowHandler = {
    focusedElem: null,

    timeBeforeReachingLimit: null,

    timeLastScroll: null,

    preventScrollWhileMoving: function(e){
        if(!state.canScroll){
            utils.preventDefault(e);
            return false;
        }
    },

    afterSectionLoads: function(){
        
        // Unfocusing the scrollable element from the orgin section/slide
        if( doc.activeElement === this.focusedElem){
            // @ts-ignore
            this.focusedElem.blur();
        }

        if(utils.$(OVERFLOW_SEL + ACTIVE_SEL, getState().activeSection.item)[0]){
            this.focusedElem = utils.$(OVERFLOW_SEL, getState().activeSection.item)[0];
            this.focusedElem.focus();
        }
    },

    makeScrollable: function(){
        if(getOptions().scrollOverflowMacStyle && !isMacDevice){
            utils.addClass($body, 'fp-scroll-mac');
        }
        
        getState().panels.forEach(function(el){
            if(
                utils.hasClass(el.item, 'fp-noscroll') || 
                utils.hasClass(el.item, AUTO_HEIGHT) ||
                utils.hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()
            ){
                return;
            }else{
                let item = scrollOverflowHandler.scrollable(el.item);
                const shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
                if(shouldBeScrollable){
                    utils.addClass(item, OVERFLOW);
                    item.setAttribute('tabindex', '-1');
                }else{
                    utils.removeClass(item, OVERFLOW);
                    item.removeAttribute('tabindex');
                }

                // updating the state now in case 
                // this is executed on page load (after images load)
                el.hasScroll = shouldBeScrollable;
            }
        });
    },

    scrollable: function(sectionItem){
        return utils.$(SLIDE_ACTIVE_SEL, sectionItem)[0] || sectionItem;
    },

    isScrollable: function(panel){
        return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
    },

    shouldBeScrollable: function(item){
        return item.scrollHeight > win.innerHeight;
    },

    isScrolled: function(direction, el){
        if(!state.canScroll){
            return false;
        }
        if(!getOptions().scrollOverflow){
            return true;
        }
        var scrollableItem = scrollOverflowHandler.scrollable(el);
        var positionY = scrollableItem.scrollTop;
        var isTopReached = direction === 'up' && positionY <=0;
        var isBottomReached = direction === 'down' && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY);
        var isScrolled = isTopReached || isBottomReached;

        if(!isScrolled){
            this.timeBeforeReachingLimit = new Date().getTime();
        }
        return isScrolled;
    },

    shouldMovePage: function(){
        this.timeLastScroll = new Date().getTime();
        var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
        var isUsingTouch = isTouchDevice || isTouch;
        var isGrabbing = isUsingTouch && state.isGrabbing;
        var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
    
        return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
    },
    onPanelScroll: (function(){
        var prevPosition = 0;

        return function(e){
            var currentPosition = e.target.scrollTop;
            var direction = state.touchDirection !== 'none' ? state.touchDirection : prevPosition < currentPosition ? 'down' : 'up';
            prevPosition = currentPosition;
            
            if(utils.isFunction(getOptions().onScrollOverflow) ){
                fireCallback('onScrollOverflow', {
                    position: currentPosition,
                    direction: direction
                });
            }

            if(utils.hasClass(e.target, OVERFLOW) && state.canScroll){
                if(
                    scrollOverflowHandler.isScrolled(direction, e.target) &&
                    scrollOverflowHandler.shouldMovePage()
                ){
                    EventEmitter.emit('onScrollOverflowScrolled', {
                        direction: direction
                    });
                }
            }
        };
    })()
};