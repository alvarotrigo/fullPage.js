import * as utils from './utils.js';
import { NO_TRANSITION } from './selectors.js';
import { getOptions } from '../options.js';
/**
* Adds transition animations for the given element
*/
export function addAnimation(element){
    var transition = 'transform ' + getOptions().scrollingSpeed + 'ms ' + getOptions().easingcss3;

    utils.removeClass(element, NO_TRANSITION);
    return utils.css(element, {
        '-webkit-transition': transition,
        'transition': transition
    });
}