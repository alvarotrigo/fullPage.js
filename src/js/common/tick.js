import { win } from './constants.js';
import { getOptions } from './options.js';

let prevTime = new Date().getTime();

export function setPrevTime(value){
    prevTime = value;
}

export function getPrevTime(value){
    return prevTime;
}

/**
 * Triggers the callback once per scroll wheel action.
 * Based on scrolling speed delay.
 */
export const oncePerScroll = (function() {
    var canTriggerEvent = true;
    var prevWheelTime = new Date().getTime();
    var result;
    var isScrollingOnInit = !win.fullpage_api;
    
    return function(scrollTrigger, callback){
        var currentTime = new Date().getTime();
        var timeThreshold = scrollTrigger === 'wheel' ? getOptions().scrollingSpeed : 100;
        canTriggerEvent = isScrollingOnInit || currentTime - prevWheelTime >= timeThreshold;
        isScrollingOnInit = !win.fullpage_api;
        
        if(canTriggerEvent){
            result = callback();
            prevWheelTime = currentTime;
        }
        return typeof result !== 'undefined' ? result : true;              
    };
})();