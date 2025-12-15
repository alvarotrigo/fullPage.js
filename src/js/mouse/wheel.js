import * as utils from '../common/utils.js';
import { getIsScrollAllowed } from '../common/isScrollAllowed.js';
import { getPassiveOptionsIfPossible } from '../common/supportsPassive.js';
import { getOptions, getContainer } from '../common/options.js';
import { beyondFullPageHandler } from '../beyondFullpage/beyondFullPageHandler.js';
import { state, setState } from '../common/state.js';
import { setOldPageY, mouseMoveHandler } from '../mouse/move.js';
import { addTouchHandler, removeTouchHandler } from '../touch';
import { scrolling } from '../scroll/scrolling.js';
import { moveSlideLeft, moveSlideRight } from '../slides/moveSlide.js';
import { getControlPressed } from '../keyboard/index.js';
import { doc, FP, win } from '../common/constants.js';
import {
    COMPLETELY_SEL,
    NORMAL_SCROLL
} from '../common/selectors.js';

let prevTime = new Date().getTime();
let prevHorizontalTime = new Date().getTime();
let scrollings = [];
let horizontalScrollings = [];

FP.setMouseWheelScrolling = setMouseWheelScrolling;

/**
* Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
*/
function setMouseWheelScrolling(value){
    if(value){
        addMouseWheelHandler();
        addMiddleWheelHandler();
    }else{
        removeMouseWheelHandler();
        removeMiddleWheelHandler();
    }
}

/**
* Adds the auto scrolling action for the mouse wheel and trackpad.
* After this function is called, the mousewheel and trackpad movements will scroll through sections
* https://developer.mozilla.org/en-US/docs/Web/Events/wheel
*/
function addMouseWheelHandler(){
    var prefix = '';
    var _addEventListener;

    if (win.addEventListener){
        _addEventListener = "addEventListener";
    }else{
        _addEventListener = "attachEvent";
        prefix = 'on';
    }

    // detect available wheel event
    var support = 'onwheel' in doc.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                // @ts-ignore
                doc.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
    var passiveEvent = getPassiveOptionsIfPossible();

    if(support == 'DOMMouseScroll'){
        doc[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
    }

    //handle MozMousePixelScroll in older Firefox
    else{
        doc[ _addEventListener ](prefix + support, MouseWheelHandler, passiveEvent);
    }
}


/**
* Binding the mousemove when the mouse's middle button is pressed
*/
function addMiddleWheelHandler(){
    getContainer().addEventListener('mousedown', mouseDownHandler);
    getContainer().addEventListener('mouseup', mouseUpHandler);
}


/**
* Removes the auto scrolling action fired by the mouse wheel and trackpad.
* After this function is called, the mousewheel and trackpad movements won't scroll through sections.
*/
function removeMouseWheelHandler(){
    if (doc.addEventListener) {
        utils.docRemoveEvent('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
        utils.docRemoveEvent('wheel', MouseWheelHandler, false); //Firefox
        utils.docRemoveEvent('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
    } else {
        // @ts-ignore
        doc.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
    }
}

/**
* Unbinding the mousemove when the mouse's middle button is released
*/
function removeMiddleWheelHandler(){
    getContainer().removeEventListener('mousedown', mouseDownHandler);
    getContainer().removeEventListener('mouseup', mouseUpHandler);
}

/**
 * Determines if the wheel movement should trigger scrolling based on acceleration
 * @param {Array} scrollings - Array of scroll values
 * @returns {boolean} - True if accelerating
 */
function isAccelerating(scrollings) {    
    var averageEnd = utils.getAverage(scrollings, 10);
    var averageMiddle = utils.getAverage(scrollings, 70);
    return averageEnd >= averageMiddle;
}

/**
 * Detecting mousewheel scrolling
 *
 * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
 * http://www.sitepoint.com/html5-javascript-mouse-wheel/
 */

function MouseWheelHandler(e) {
    var curTime = new Date().getTime();
    var isNormalScroll = utils.hasClass(utils.$(COMPLETELY_SEL)[0], NORMAL_SCROLL);
    var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);

    if(!state.isUsingWheel){
        setState({
            isGrabbing: false,
            isUsingWheel: true,
            touchDirection: 'none'
        });
    }

    if(isScrollAllowedBeyondFullPage){
        return true;
    }
    else if (isScrollAllowedBeyondFullPage === false){
        utils.preventDefault(e);
        return false;
    }

    //autoscrolling and not zooming?
    if(getOptions().autoScrolling && !getControlPressed() && !isNormalScroll){
        // cross-browser wheel delta
        e = e || win.event;
        // @ts-ignore - cross-browser compatibility
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));

        // @ts-ignore - cross-browser compatibility
        var horizontalValue = e.wheelDeltaX || -e.deltaX || 0;
        // @ts-ignore - cross-browser compatibility
        var deltaY = e.deltaY || 0;
        // @ts-ignore - cross-browser compatibility
        var deltaX = e.deltaX || 0;
        
        // Detect horizontal scrolling: SHIFT key pressed OR horizontal delta is larger than vertical
        // @ts-ignore - cross-browser compatibility
        var isShiftPressed = e.shiftKey || false;
        var horizontalDetection = Math.abs(horizontalValue) > 0 || Math.abs(deltaX) > 0;
        // @ts-ignore - cross-browser compatibility
        var isScrollingVertically = !isShiftPressed && (Math.abs(deltaX) < Math.abs(deltaY) || !horizontalDetection);
        var isScrollingHorizontally = isShiftPressed || (!isScrollingVertically && horizontalDetection && Math.abs(deltaX) > Math.abs(deltaY));
        
        var direction = delta < 0 ? 'down': delta > 0 ? 'up' : 'none';
        
        // Get horizontal delta for horizontal scrolling
        // For SHIFT+wheel, use the vertical delta as horizontal
        var horizontalDelta = isShiftPressed ? delta : Math.max(-1, Math.min(1, horizontalValue));
        var horizontalDirection = isScrollingHorizontally ? (horizontalDelta < 0 ? 'right' : horizontalDelta > 0 ? 'left' : 'none') : 'none';
        
        //is scroll allowed for the detected direction?
        if(isScrollingVertically && !getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
            return false;
        }
        if(isScrollingHorizontally && horizontalDirection === 'left' && !getIsScrollAllowed().m.left) {
            return false;
        }
        if(isScrollingHorizontally && horizontalDirection === 'right' && !getIsScrollAllowed().m.right) {
            return false;
        }

        //Limiting the arrays to 150 (lets not waste memory!)
        if(scrollings.length > 149){
            scrollings.shift();
        }
        if(horizontalScrollings.length > 149){
            horizontalScrollings.shift();
        }

        //keeping record of the previous scrollings
        if(isScrollingVertically) {
            scrollings.push(Math.abs(value));
        } 
        else if(isScrollingHorizontally) {
            // For SHIFT+wheel, use the vertical value as horizontal
            var horizontalScrollValue = isShiftPressed ? Math.abs(value) : Math.abs(horizontalValue);
            horizontalScrollings.push(horizontalScrollValue);
        }

        //preventing to scroll the site on mouse wheel when scrollbar is present
        if(getOptions().scrollBar || !getOptions().scrollOverflow){
            utils.preventDefault(e);
        }

        //time difference between the last scroll and the current one
        var timeDiff = curTime-prevTime;
        var horizontalTimeDiff = curTime-prevHorizontalTime;
        
        if(isScrollingVertically) {
            prevTime = curTime;
        } else if(isScrollingHorizontally) {
            prevHorizontalTime = curTime;
        }

        //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)
        if(timeDiff > 200){
            //emptying the arrays, we dont care about old scrollings for our averages
            scrollings = [];
        }
        if(horizontalTimeDiff > 200){
            horizontalScrollings = [];
        }

        setState({wheelDirection: direction});

        if(state.canScroll){
            // Handle vertical scrolling
            if(isScrollingVertically && isAccelerating(scrollings)){
                setState({scrollTrigger: 'wheel'});

                //scrolling down?
                if (delta < 0) {
                    scrolling('down');
                }

                //scrolling up?
                else {
                    scrolling('up');
                }
            }
            // Handle horizontal scrolling
            // SHIFT+wheel doesn't require acceleration (intentional gesture)
            else if(isScrollingHorizontally && (isShiftPressed || isAccelerating(horizontalScrollings))){
                setState({scrollTrigger: 'wheel'});
                
                if(horizontalDirection === 'left'){
                    moveSlideLeft();
                } else if(horizontalDirection === 'right'){
                    moveSlideRight();
                }
            }
        }

        return false;
    }

    if(getOptions().fitToSection){
        //stopping the auto scroll to adjust to a section
        setState({activeAnimation: false});
    }
}

//binding the mousemove when the mouse's middle button is released
function mouseDownHandler(e){
    //middle button
    if (e.which == 2){
        setOldPageY(e.pageY);
        getContainer().addEventListener('mousemove', mouseMoveHandler);
    }
}


//unbinding the mousemove when the mouse's middle button is released
function mouseUpHandler(e){
    //middle button
    if (e.which == 2){
        getContainer().removeEventListener('mousemove', mouseMoveHandler);
    }
}


/**
* Adds or remove the mouse wheel hijacking
*/
export function setMouseHijack(value){
    if(value){
        setMouseWheelScrolling(true);
        addTouchHandler();
    }else{
        setMouseWheelScrolling(false);
        removeTouchHandler();
    }
}