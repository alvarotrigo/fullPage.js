import * as utils from './utils.js';
import { NO_TRANSITION } from './selectors.js';
/**
* Remove transition animations for the given element
*/
export function removeAnimation(element){
    return utils.addClass(element, NO_TRANSITION);
}