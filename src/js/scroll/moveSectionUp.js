import * as utils from '../common/utils.js';
import { getOptions } from "../common/options.js";
import { getState } from "../common/state.js";
import { FP } from '../common/constants';
import { scrollPage } from './scrollPage.js';

FP.moveSectionUp = moveSectionUp;

/**
* Moves the page up one section.
*/
export function moveSectionUp(){
    var prev = getState().activeSection.prev();

    //looping to the bottom if there's no more sections above
    if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) {
        prev = utils.getLast(getState().sections);
    }

    if (prev != null) {
        scrollPage(prev, null, true);
    }
}
