import * as utils from '../common/utils.js';
import { getOptions, getContainer } from '../common/options.js';
import { oncePerScroll } from '../common/tick.js';
import { getState } from '../common/state.js';
import { fireCallback } from './fireCallback.js';

/**
* Fires the wheel event once per mouse wheel trigger.
*/
export function fireCallbackOncePerScroll(callbackName, params){
    if(!utils.isFunction( getOptions().beforeLeave)){
        return;
    }

    const result = oncePerScroll(getState().scrollTrigger, function(){
        return fireCallback(callbackName, params);
    });

    return result;
}