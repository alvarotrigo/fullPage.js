import { getOriginals } from "../common/options.js";
import { setScrollingSpeed } from "../speed.js";
import { FP } from '../common/constants';
import { moveTo } from './moveTo.js';

FP.silentMoveTo = silentMoveTo;

/**
* Moves the page to the given section and slide with no animation.
* Anchors or index positions can be used as params.
*/
export function silentMoveTo(sectionAnchor, slideAnchor){
    setScrollingSpeed (0, 'internal');
    moveTo(sectionAnchor, slideAnchor);
    setScrollingSpeed (getOriginals().scrollingSpeed, 'internal');
}
