//@ts-check
import * as utils from '../common/utils.js';
import { silentScroll } from '../common/silentScroll.js';
import { getState, setState } from '../common/state.js';
import { silentLandscapeScroll } from '../slides/silentLandscapeScroll.js';
import {
    SECTION_SEL,
    SLIDE_ACTIVE_SEL
} from '../common/selectors.js';

/**
* Maintains the active slides in the viewport
* (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
*/
function keepSlidesPosition(){
    var activeSlides = utils.$(SLIDE_ACTIVE_SEL);
    for( var i =0; i<activeSlides.length; i++){
        silentLandscapeScroll(activeSlides[i], 'internal');
    }
}

/**
* Fix section order after continuousVertical changes have been animated
*/
export function continuousVerticalFixSectionOrder (v) {
    // If continuousVertical is in effect (and autoScrolling would also be in effect then),
    // finish moving the elements around so the direct navigation will function more simply
    if (v.wrapAroundElements == null) {
        return;
    }

    if (v.isMovementUp) {
        utils.before(utils.$(SECTION_SEL)[0], v.wrapAroundElements);
    }
    else {
        utils.after(utils.$(SECTION_SEL)[getState().sections.length -1 ], v.wrapAroundElements);
    }

    silentScroll(getState().activeSection.item.offsetTop);

    // Maintain the active slides visible in the viewport
    keepSlidesPosition();

    setState({isDoingContinousVertical: false});
}