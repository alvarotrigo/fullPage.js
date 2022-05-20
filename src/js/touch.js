import * as utils from './common/utils.js';
import { getIsScrollAllowed } from './common/isScrollAllowed.js';
import { isTouchDevice, isTouch, win } from './common/constants.js';
import { $body } from './common/cache.js';
import { getOptions } from './common/options.js';
import { getState, setState, state } from './common/state.js';
import { 
    SECTION_SEL,
    SLIDES_WRAPPER_SEL
} from './common/selectors.js';
import { EventEmitter } from './common/eventEmitter.js';
import { scrolling } from './scroll/scrolling.js';
import { scrollOverflowHandler } from './scrolloverflow.js';

let touchStartY = 0;
let touchStartX = 0;
let touchEndY = 0;
let touchEndX = 0;
const MSPointer = getMSPointer();
const events = {
    touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer ? MSPointer.move : null,
    touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer ? MSPointer.down : null
};

/**
* Adds the possibility to auto scroll through sections on touch devices.
*/
export function addTouchHandler(){
    if(!events.touchmove){
        return;
    }
    if(isTouchDevice || isTouch){
        if(getOptions().autoScrolling){
            $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
            $body.addEventListener(events.touchmove, preventBouncing, {passive: false});
        }

        var touchWrapper = getOptions().touchWrapper;
        touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});

        touchWrapper.addEventListener(events.touchstart, touchStartHandler);
        touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {passive: false});
    }
}


/**
* Removes the auto scrolling for touch devices.
*/
export function removeTouchHandler(){
    if(!events.touchmove){
        return;
    }
    if(isTouchDevice || isTouch){
        // normalScrollElements requires it off #2691
        if(getOptions().autoScrolling){
            $body.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
            $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
        }

        var touchWrapper = getOptions().touchWrapper;
        touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
    }
}


/* Detecting touch events

* As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
* This way, the touchstart and the touch moves shows an small difference between them which is the
* used one to determine the direction.
*/
function touchMoveHandler(e){
    var activeSection = utils.closest(e.target, SECTION_SEL) || getState().activeSection.item;
    var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);
    
    if (isReallyTouch(e) ) {
        setState({
            isGrabbing: true,
            isUsingWheel: false
        });

        if(getOptions().autoScrolling){
            if(!hasActiveSectionOverflow || (hasActiveSectionOverflow && !state.canScroll)){

                //preventing the easing on iOS devices
                utils.preventDefault(e);
            }
        }

        var touchEvents = getEventsPage(e);

        touchEndY = touchEvents.y;
        touchEndX = touchEvents.x;

        var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > (win.innerHeight / 100 * getOptions().touchSensitivity);
        var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > (utils.getWindowWidth() / 100 * getOptions().touchSensitivity);
        var isHorizontalPredominantMove = utils.$(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY));
        var directionH = touchStartX > touchEndX ? 'right' : 'left';
        var directionV = touchStartY > touchEndY ? 'down' : 'up';
        var direction = isHorizontalPredominantMove ? directionH : directionV;

        setState({touchDirection: direction});

        //if movement in the X axys is greater than in the Y and the currect section has slides...
        if (isHorizontalPredominantMove) {

            //is the movement greater than the minimum resistance to scroll?
            if (!state.slideMoving && isHorizontalMovementEnough) {
                if (touchStartX > touchEndX) {
                    if(getIsScrollAllowed().m.right){
                        EventEmitter.emit('moveSlideRight', {section: activeSection});
                    }
                } else {
                    if(getIsScrollAllowed().m.left){
                        EventEmitter.emit('moveSlideLeft', {section: activeSection});
                    }
                }
            }
        }

        //vertical scrolling (only when autoScrolling is enabled)
        else if(getOptions().autoScrolling && state.canScroll){

            //is the movement greater than the minimum resistance to scroll?
            if (isVerticalMovementEnough) {
                scrolling(directionV);
            }
        }
    }
}

/**
* As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
* this way we make sure that is really a touch event what IE is detecting.
*/
function isReallyTouch(e){
    //if is not IE   ||  IE is detecting `touch` or `pen`
    return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
}

/**
* Handler for the touch start event.
*/
function touchStartHandler(e){

    //stopping the auto scroll to adjust to a section
    if(getOptions().fitToSection){
        setState({activeAnimation: false});
    }

    if(isReallyTouch(e)){
        var touchEvents = getEventsPage(e);
        touchStartY = touchEvents.y;
        touchStartX = touchEvents.x;
    }

    utils.windowAddEvent('touchend', touchEndHandler);
}

/**
* Handler for the touch end event.
*/
function touchEndHandler(){
    utils.windowRemoveEvent('touchend', touchEndHandler);
    setState({isGrabbing: false});
}

/**
* Gets the pageX and pageY properties depending on the browser.
* https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
*/
function getEventsPage(e){
    var events = {};

    events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
    events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

    //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
    if(isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== 'undefined'){
        events.y = e.touches[0].pageY;
        events.x = e.touches[0].pageX;
    }

    return events;
}

/*
* Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
* http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
*/
function getMSPointer(){
    var pointer;

    //IE >= 11 & rest of browsers
    if(win.PointerEvent){
        pointer = { down: 'pointerdown', move: 'pointermove'};
    }

    return pointer;
}

/*
* Preventing bouncing in iOS #2285
*/
function preventBouncing(e){
    if(getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up){
        //preventing the easing on iOS devices
        if(!state.canScroll){
            utils.preventDefault(e);
        }
    }
}