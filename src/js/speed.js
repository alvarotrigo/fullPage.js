import { setVariableState } from './options.js';
import { FP } from './common/constants.js';

FP.setScrollingSpeed = setScrollingSpeed;

/**
* Defines the scrolling speed
*/
export function setScrollingSpeed(value, type){
    setVariableState('scrollingSpeed', value, type);
}