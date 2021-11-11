import { getIsScrollAllowed } from './common/isScrollAllowed.js';
import { getOptions } from './options.js';
import { moveSectionUp, moveSectionDown } from './scroll.js';
import { getStateVar } from './state.js';


let oldPageY = 0;

/**
* Detecting the direction of the mouse movement.
* Used only for the middle button of the mouse.
*/
export function mouseMoveHandler(e) {
    if (!getOptions().autoScrolling) {
        return;
    }
    if (getStateVar('canScroll')) {
        // moving up
        if (e.pageY < oldPageY && getIsScrollAllowed().m.up) {
            moveSectionUp();
        }

        // moving down
        else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) {
            moveSectionDown();
        }
    }
    oldPageY = e.pageY;
}

export function getOldPageY(){
    return oldPageY;
}

export function setOldPageY(value){
    oldPageY = value;
}