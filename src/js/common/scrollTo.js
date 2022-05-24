//@ts-check
import * as utils from './utils.js';
import { setScrolling } from './utilsFP.js';
import { state, setState } from "./state.js";
import { getOptions } from './options.js';
import { SLIDES_WRAPPER } from './selectors.js';
import { doc, win } from './constants.js';

/**
* Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
* http://stackoverflow.com/a/16136789/1081396
*/
export function scrollTo(element, to, duration, callback) {
    var start = getScrolledPosition(element);
    var change = to - start;
    var isCallbackFired = false;
    var startTime;

    setState({activeAnimation: true});

    // Making sure we can trigger a scroll animation
    // when css scroll snap is active. Temporally disabling it.
    if(element === doc.body){
        utils.css(doc.body, {'scroll-snap-type': 'none'});
    }

    var animateScroll = function(timestamp){
        if (!startTime){
            startTime = timestamp;
        }

        var currentTime = Math.floor(timestamp - startTime);

        if(state.activeAnimation){ //in order to stope it from other function whenever we want
            var val = to;

            if(duration){
                // @ts-ignore
                val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
            }

            if(currentTime <= duration) {
                setScrolling(element, val);
            }

            if(currentTime < duration) {
                window.requestAnimationFrame(animateScroll);
            }else if(typeof callback !== 'undefined' && !isCallbackFired){
                callback();
                isCallbackFired = true;
            }
        }else if (!isCallbackFired){
            callback();
            isCallbackFired = true;
        }
    };

    window.requestAnimationFrame(animateScroll);
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