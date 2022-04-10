import * as utils from './utils.js';

let isScrollAllowed = {};
isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
isScrollAllowed.k = utils.deepExtend({}, isScrollAllowed.m);

/**
* Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
* @param type m (mouse) or k (keyboard)
*/
export function setIsScrollAllowed(value, direction, type){
    //up, down, left, right
    if(direction !== 'all'){
        isScrollAllowed[type][direction] = value;
    }

    //all directions?
    else{
        Object.keys(isScrollAllowed[type]).forEach(function(key){
            isScrollAllowed[type][key] = value;
        });
    }
}

export function getIsScrollAllowed(){
    return isScrollAllowed;
}