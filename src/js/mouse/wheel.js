import * as utils from '../common/utils.js';
import { getIsScrollAllowed } from '../common/isScrollAllowed.js';
import { getPassiveOptionsIfPossible } from '../common/supportsPassive.js';
import { getOptions, getContainer } from '../common/options.js';
import { beyondFullPageHandler } from '../beyondFullpage/beyondFullPageHandler.js';
import { state, setState } from '../common/state.js';
import { setOldPageY, mouseMoveHandler } from '../mouse/move.js';
import { addTouchHandler, removeTouchHandler } from '../touch';
import { scrolling } from '../scroll/scrolling.js';
import { getControlPressed } from '../keyboard/index.js';
import { doc, FP, win } from '../common/constants.js';
import {
    COMPLETELY_SEL,
    NORMAL_SCROLL
} from '../common/selectors.js';

let prevTime = new Date().getTime();
let scrollings = [];
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

    //is scroll allowed?
    if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
        utils.preventDefault(e);
        return false;
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
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));

        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);
        var direction = delta < 0 ? 'down': delta > 0 ? 'up' : 'none';

        //Limiting the array to 150 (lets not waste memory!)
        if(scrollings.length > 149){
            scrollings.shift();
        }

        //keeping record of the previous scrollings
        scrollings.push(Math.abs(value));

        //preventing to scroll the site on mouse wheel when scrollbar is present
        if(getOptions().scrollBar){
            utils.preventDefault(e);
        }

        //time difference between the last scroll and the current one
        var timeDiff = curTime-prevTime;
        prevTime = curTime;

        //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)
        if(timeDiff > 200){
            //emptying the array, we dont care about old scrollings for our averages
            scrollings = [];
        }

        setState({wheelDirection: direction});

        if(state.canScroll){
            var averageEnd = utils.getAverage(scrollings, 10);
            var averageMiddle = utils.getAverage(scrollings, 70);
            var isAccelerating = averageEnd >= averageMiddle;

            //to avoid double swipes...
            if(isAccelerating && isScrollingVertically){

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