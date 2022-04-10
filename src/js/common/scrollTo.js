//@ts-check
import * as utils from './utils.js';
import { setScrolling } from './utilsFP.js';
import { state, setState } from "./state.js";
import { getOptions } from './options.js';
import { SLIDES_WRAPPER } from './selectors.js';
import { EventEmitter } from './eventEmitter.js';
import { doc, win } from './constants.js';

let g_animateScrollId;

EventEmitter.on('bindEvents', bindEvents);

function bindEvents(){
    EventEmitter.on('onDestroy', onDestroy);
}

function onDestroy(){
    clearTimeout(g_animateScrollId);
}


/**
* Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
* http://stackoverflow.com/a/16136789/1081396
*/
export function scrollTo(element, to, duration, callback) {
    var start = getScrolledPosition(element);
    var change = to - start;
    var currentTime = 0;
    var increment = 20;
    setState({activeAnimation: true});
    var isCallbackFired = false;

    // Making sure we can trigger a scroll animation
    // when css scroll snap is active. Temporally disabling it.
    if(element === doc.body){
        utils.css(doc.body, {'scroll-snap-type': 'none'});
    }

    var animateScroll = function(){
        if(state.activeAnimation){ //in order to stope it from other function whenever we want
            var val = to;

            currentTime += increment;

            if(duration){
                // @ts-ignore
                val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
            }

            setScrolling(element, val);

            if(currentTime < duration) {
                clearTimeout(g_animateScrollId);
                g_animateScrollId = setTimeout(animateScroll, increment);
            }else if(typeof callback !== 'undefined' && !isCallbackFired){
                callback();
                isCallbackFired = true;
            }
        }else if (currentTime < duration && !isCallbackFired){
            callback();
            isCallbackFired = true;
        }
    };

    animateScroll();
}


/**
* Getting the position of the element to scroll when using jQuery animations
*/
function getScrolledPosition(element){
    var position;

    //is not the window element and is a slide?
    if(element.self != win && utils.hasClass(element, SLIDES_WRAPPER)){
        position = element.scrollLeft;
    }
    else if(!getOptions().autoScrolling || getOptions().scrollBar){
        position = utils.getScrollTop(getOptions());
    }
    else{
        position = element.offsetTop;
    }

    //gets the top property of the wrapper
    return position;
}