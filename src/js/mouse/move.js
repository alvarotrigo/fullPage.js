import { getIsScrollAllowed } from '../common/isScrollAllowed.js';
import { getOptions } from '../common/options.js';
import { moveSectionDown } from '../scroll/moveSectionDown.js';
import { moveSectionUp } from '../scroll/moveSectionUp.js';
import { state } from '../common/state.js';

let oldPageY = 0;

/**
* Detecting the direction of the mouse movement.
* Used only for the middle button of the mouse.
*/
export function mouseMoveHandler(e) {
    if (!getOptions().autoScrolling) {
        return;
    }
    if (state.canScroll) {
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

export function setOldPageY(value){
    oldPageY = value;
}