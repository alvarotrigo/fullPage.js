//@ts-check
import * as utils from '../common/utils.js';
import { silentScroll } from '../common/silentScroll.js';
import { getState, setState } from '../common/state.js';
import { silentLandscapeScroll } from '../slides/silentLandscapeScroll.js';
import {
    SECTION_SEL,
    SLIDE_ACTIVE_SEL
} from '../common/selectors.js';
import { getYmovement } from '../common/utilsFP.js';


/**
* Adds sections before or after the current one to create the infinite effect.
*/
export function createInfiniteSections(v){
    setState({isDoingContinousVertical: true});
    
    // Scrolling down
    if (!v.isMovementUp) {
        // Move all previous sections to after the active section
        utils.after(getState().activeSection.item, utils.prevAll(v.activeSection, SECTION_SEL).reverse());
    }
    else { // Scrolling up
        // Move all next sections to before the active section
        utils.before(getState().activeSection.item, utils.nextAll(v.activeSection, SECTION_SEL));
    }

    // Maintain the displayed position (now that we changed the element order)
    silentScroll(getState().activeSection.item.offsetTop);

    // Maintain the active slides visible in the viewport
    keepSlidesPosition();

    // save for later the elements that still need to be reordered
    v.wrapAroundElements = v.activeSection;

    // Recalculate animation variables
    v.dtop = v.element.offsetTop;
    v.yMovement = getYmovement(getState().activeSection, v.element);

    return v;
}

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


