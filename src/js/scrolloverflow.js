import * as utils from './common/utils.js';
import { getOptions } from './options.js';
import { getState, getStateVar } from './state.js';
import { fireCallback } from './callbacks.js';
import { isResponsiveMode } from './responsive.js';

import { isMacDevice, $body, isTouchDevice, isTouch } from './common/constants.js';
import { 
    AUTO_HEIGHT,
    AUTO_HEIGHT_RESPONSIVE,
    SLIDE_ACTIVE_SEL
} from './common/selectors.js';

export const scrollOverflowHandler = {
    focusedElem: null,

    timeBeforeReachingLimit: null,

    timeLastScroll: null,

    preventScrollWhileMoving: function(e){
        if(!getStateVar('canScroll')){
            utils.preventDefault(e);
            return false;
        }
    },

    afterSectionLoads: function(){
        
        // Unfocusing the scrollable element from the orgin section/slide
        if( document.activeElement === this.focusedElem){
            this.focusedElem.blur();
        }

        if(utils.$('.fp-overflow', getState().activeSection.item)[0]){
            this.focusedElem = utils.$('.fp-overflow', getState().activeSection.item)[0];
            this.focusedElem.focus();
        }
    },

    makeScrollable: function(){
        if(getOptions().scrollOverflowMacStyle && !isMacDevice){
            utils.addClass($body, 'fp-scroll-mac');
        }
        
        getState().panels.forEach(function(el){
            if(
                utils.hasClass(el.item, 'fp-noscroll')
                || utils.hasClass(el.item, AUTO_HEIGHT) 
                || utils.hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()
            ){
                return;
            }else{
                let panel = scrollOverflowHandler.scrollable(el.item);

                if(scrollOverflowHandler.shouldBeScrollable(el.item)){
                    utils.addClass(panel, 'fp-overflow');
                    panel.setAttribute('tabindex', '-1');
                }else{
                    utils.removeClass(panel, 'fp-overflow');
                    panel.removeAttribute('tabindex');
                }
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
        return item.scrollHeight > window.innerHeight;
    },

    isScrolled: function(direction, el){
        if(!getStateVar('canScroll')){
            return false;
        }
        if(!getOptions().scrollOverflow){
            return true;
        }
        var scrollableItem = this.scrollable(el);
        var positionY = scrollableItem.scrollTop;
        var isTopReached = direction === 'up' && positionY <=0;
        var isBottomReached = direction === 'down' && scrollableItem.scrollHeight <= scrollableItem.offsetHeight + positionY;
        var isScrolled = isTopReached || isBottomReached;

        if(!isScrolled){
            this.timeBeforeReachingLimit = new Date().getTime();
        }
        return isScrolled;
    },

    shouldMovePage: function(){
        this.timeLastScroll = new Date().getTime();
        var timeDiff = this.timeLastScroll - this.timeBeforeReachingLimit;
        var isUsingTouch = isTouchDevice || isTouch;
        var isGrabbing = isUsingTouch && getStateVar('isGrabbing');
        var isNotFirstTimeReachingLimit = !isUsingTouch && timeDiff > 600;
    
        return isGrabbing || isNotFirstTimeReachingLimit;
    },
    onPanelScroll: (function(){
        var prevPosition = 0;

        return function(e){
            var currentPosition = e.target.scrollTop;
            var direction = getStateVar('touchDirection') !== 'none' ? getStateVar('touchDirection') : prevPosition < currentPosition ? 'down' : 'up';
            prevPosition = currentPosition;
            
            if(utils.isFunction(getOptions().onScrollOverflow) ){
                fireCallback('onScrollOverflow', {
                    position: currentPosition
                });
            }

            if(utils.hasClass(e.target, 'fp-overflow') && getStateVar('canScroll')){
                if(
                    scrollOverflowHandler.isScrolled(direction, e.target) &&
                    scrollOverflowHandler.shouldMovePage()
                ){
                    utils.trigger('fp:onScrollOverflowScrolled', {scrollSection: scrollSection });
                }
            }
        };
    })()
};