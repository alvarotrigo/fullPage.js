import * as utils from './common/utils.js';
import { getOptions } from './common/options.js';
import { getState, state } from './common/state.js';
import { fireCallback } from './callbacks/fireCallback.js';
import { isResponsiveMode } from './responsive.js';
import { isMacDevice, isTouchDevice, isTouch, win, doc, isIE11 } from './common/constants.js';
import { $body } from './common/cache.js';
import { 
    AUTO_HEIGHT_RESPONSIVE,
    IS_OVERFLOW,
    OVERFLOW,
    OVERFLOW_SEL
} from './common/selectors.js';
import { EventEmitter } from './common/eventEmitter.js';
import { getSlideOrSection } from './common/utilsFP.js';
import { getSectionFromPanel } from './sections.js';

EventEmitter.on('bindEvents', bindEvents);

function bindEvents(){
    
    //after DOM and images are loaded
    win.addEventListener('load', function(){
        if(getOptions().scrollOverflow && !getOptions().scrollBar){
            scrollOverflowHandler.makeScrollable();
            scrollOverflowHandler.afterSectionLoads();
        }
    });
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
        var scrollableItem = scrollOverflowHandler.getScrollableItem(getState().activeSection.item);

        // On desktop we focus the scrollable to be able to use the mouse wheel
        // We avoid it on mobile due to a bug in iOS Safari
        if( scrollableItem && !isTouchDevice && !isTouch){
            this.focusedElem = scrollableItem;
            this.focusedElem.focus();
        }
    },

    makeScrollable: function(){
        if(getOptions().scrollOverflowMacStyle && !isMacDevice){
            utils.addClass($body, 'fp-scroll-mac');
        }
        
        getState().panels.forEach(function(el){
            if(el.slides && el.slides.length){
                return;
            }
            if(
                utils.hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()
            ){
                return;
            }else{
                let item = getSlideOrSection(el.item);
                const shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
                var section = getSectionFromPanel(el);

                if(isIE11){
                    var toggleAction = shouldBeScrollable ? 'addClass' : 'removeClass';
                    utils[toggleAction](section.item, IS_OVERFLOW); 
                    utils[toggleAction](el.item, IS_OVERFLOW);  
                }
                else{
                    utils.addClass(section.item, IS_OVERFLOW); 
                    utils.addClass(el.item, IS_OVERFLOW);  
                }
                
                if(!el.hasScroll){
                    scrollOverflowHandler.createWrapper(item);
                    scrollOverflowHandler.bindEvents(item);
                }

                // updating the state now in case 
                // this is executed on page load (after images load)
                el.hasScroll = true;
            }
        });
    },

    bindEvents: function(item){
        scrollOverflowHandler.getScrollableItem(item).addEventListener('scroll', scrollOverflowHandler.onPanelScroll);

        item.addEventListener('wheel', scrollOverflowHandler.preventScrollWhileMoving, {passive: false});
        item.addEventListener('keydown', scrollOverflowHandler.preventScrollWhileMoving, {passive: false});
    },

    createWrapper: function(item){
        var overflowWrapper = document.createElement('div');
        overflowWrapper.className = OVERFLOW;

        utils.wrapInner(item, overflowWrapper);
        overflowWrapper.setAttribute('tabindex', '-1');
    },

    destroyWrapper: function(item){
        var overflowWrapper = utils.$(OVERFLOW_SEL, item)[0];
        if(overflowWrapper){
            utils.unwrap(overflowWrapper);
            item.removeAttribute('tabindex');
        }
    },

    getScrollableItem: function(sectionItem){
        var panel = getSlideOrSection(sectionItem);

        return utils.$(OVERFLOW_SEL, panel)[0] || panel;
    },

    hasScroll: function(panelItem){
        return utils.hasClass(panelItem, OVERFLOW) || utils.$(OVERFLOW_SEL, panelItem)[0] != null;
    },

    isScrollable: function(panel){
        return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
    },

    shouldBeScrollable: function(item){
        var scrollable = scrollOverflowHandler.getScrollableItem(item);
        return scrollable.scrollHeight > win.innerHeight;
    },

    isScrolled: function(direction, el){
        if(!state.canScroll){
            return false;
        }

        var scrollableItem = scrollOverflowHandler.getScrollableItem(el);

        if(!getOptions().scrollOverflow || 
            !utils.hasClass(scrollableItem, OVERFLOW) ||
            utils.hasClass(getSlideOrSection(el), 'fp-noscroll')
        ){
            return true;
        }
        
        // ie11 wrongly calculates scrollHeight when using the CSS style
        // overflow: auto   It adds 1 more pixel compared to offsetHeight
        var ie11offset = isIE11 ? 1 : 0;

        var positionY = scrollableItem.scrollTop;
        var isTopReached = direction === 'up' && positionY <=0;
        var isBottomReached = direction === 'down' && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY) + ie11offset;
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