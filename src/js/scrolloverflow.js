import * as utils from './common/utils.js';
import { getOptions } from './common/options.js';
import { getState, state } from './common/state.js';
import { fireCallback } from './callbacks/fireCallback.js';
import { isResponsiveMode } from './responsive.js';
import { isMacDevice, isTouchDevice, isTouch, win, doc, isIE11, isInsideIframe } from './common/constants.js';
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
import { events } from './common/events.js';
import { isInsideInput } from './common/utils.js';

let g_focusScrollableId;

EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    // We can't focus scrollOverflow before scrolling
    // to the anchor (if we need to)
    EventEmitter.on(events.onAfterRenderNoAnchor, afterRender);

    EventEmitter.on(events.onLeave, scrollOverflowHandler.onLeave);
    EventEmitter.on(events.onSlideLeave, scrollOverflowHandler.onLeave);
    EventEmitter.on(events.afterSlideLoads, scrollOverflowHandler.afterLoad);
    EventEmitter.on(events.afterSectionLoads, scrollOverflowHandler.afterLoad);
    EventEmitter.on(events.onDestroy, onDestroy);

    utils.docAddEvent('keyup', scrollOverflowHandler.keyUpHandler);
}

function afterRender(){
    if(getOptions().scrollOverflow && !getOptions().scrollBar){
        scrollOverflowHandler.makeScrollable();
        scrollOverflowHandler.focusScrollable();
    }
}

function onDestroy(){
    EventEmitter.removeListener(events.onAfterRenderNoAnchor, afterRender);
    utils.docRemoveEvent('keyup', scrollOverflowHandler.keyUpHandler);
}

export const scrollOverflowHandler = {
    focusedElem: null,

    shouldFocusScrollable: true,

    isInnerScrollAllowed: true,

    timeBeforeReachingLimit: null,

    timeLastScroll: null,

    preventScrollWithMouseWheel: function(e){
        var activeSection = getState().activeSection;

        if(!state.canScroll || (
            isInsideIframe()
            && getOptions().scrollOverflow 
            && scrollOverflowHandler.isScrollable(activeSection)
            && scrollOverflowHandler.isScrolled(getState().wheelDirection, activeSection.item)
        )){
            utils.preventDefault(e);
            return false;
        }
    },

    preventScrollWithKeyboard: function(e){
        if( !isInsideInput() && getOptions().keyboardScrolling ){
            var directionKeys = [38, 33, 32, 40, 34, 36, 35];
            if( directionKeys.indexOf(e.keyCode) > -1 && !scrollOverflowHandler.isInnerScrollAllowed){
                utils.preventDefault(e);
                return false;
            }
        }
    },

    keyUpHandler: function(){
        scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
    },

    // Leaving sections or slides
    onLeave: function(){
        clearTimeout(g_focusScrollableId);
        scrollOverflowHandler.isInnerScrollAllowed = false;
    },

    // Loading sections or slides
    afterLoad: function(){
        scrollOverflowHandler.isInnerScrollAllowed = false;

        // Delaying it to avoid issues on Safari when focusing elements #4484 & #4493
        clearTimeout(g_focusScrollableId);
        g_focusScrollableId = setTimeout(function(){
            scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
        }, 200);
    },

    // Unfocusing the scrollable element from the orgin section/slide
    unfocusScrollable: function(){
         if( doc.activeElement === this.focusedElem){
            // @ts-ignore
            this.focusedElem.blur();

            scrollOverflowHandler.isInnerScrollAllowed = false;
        }
    },

    focusScrollable: function(){

        if(!getOptions().scrollOverflow || !scrollOverflowHandler.shouldFocusScrollable){
            return;
        }
        
        scrollOverflowHandler.unfocusScrollable();
       
        var scrollableItem = scrollOverflowHandler.getScrollableItem(getState().activeSection.item);

        // On desktop we focus the scrollable to be able to use the mouse wheel
        // We avoid it on mobile due to a bug in iOS Safari
        if( scrollableItem && !isTouchDevice && !isTouch){
            this.focusedElem = scrollableItem;

            // Forcing the focus on the next paint 
            // to avoid issue #4484 & #4493 on Safari
            requestAnimationFrame(function(){
                scrollableItem.focus({preventScroll: true});
                scrollOverflowHandler.isInnerScrollAllowed = true;
            });
        }

        scrollOverflowHandler.shouldFocusScrollable = false;
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

        item.addEventListener('wheel', scrollOverflowHandler.preventScrollWithMouseWheel, {passive: false});
        item.addEventListener('keydown', scrollOverflowHandler.preventScrollWithKeyboard, {passive: false});
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

        // we won't allow scrolloverflow on scrollBar:true
        if(getOptions().scrollBar){
            return true;
        }

        var scrollableItem = scrollOverflowHandler.getScrollableItem(el);

        if(!getOptions().scrollOverflow || 
            !utils.hasClass(scrollableItem, OVERFLOW) ||

            // Checking the section first 
            // In case they apply to both section + slide #4505
            utils.hasClass(el, 'fp-noscroll') || 

            // Checking the slide (in case it has)
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

        if(!isScrolled && direction !== 'none'){
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
                    // Checking again if we have a scrollable content
                    // To avoid issues like #4479 where the scroll event gets
                    // triggered after removing/hidding content if this was scrolled
                    if(scrollOverflowHandler.shouldBeScrollable(getState().activeSection.item)){

                        EventEmitter.emit(events.onScrollOverflowScrolled, {
                            direction: direction
                        });
                    }
                }
            }
        };
    })()
};