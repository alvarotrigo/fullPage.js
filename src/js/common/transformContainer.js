import * as utils from './utils.js';
import { FP } from './constants.js';
import { NO_TRANSITION } from './selectors.js';
import { getContainer } from "./options.js";
import { addAnimation, removeAnimation, getTransforms } from './utilsFP.js';

let silentScrollId;

/**
* Adds a css3 transform property to the container class with or without animation depending on the animated param.
*/
export function transformContainer(translate3d, animated){
    if(animated){
        addAnimation(getContainer());
    }else{
        removeAnimation(getContainer());
    }

    clearTimeout(silentScrollId);
    utils.css(getContainer(), getTransforms(translate3d));
    FP.test.translate3d = translate3d;

    //syncronously removing the class after the animation has been applied.
    silentScrollId = setTimeout(function(){
        utils.removeClass(getContainer(), NO_TRANSITION);
    },10);
}