import * as utils from './common/utils.js';
import { getOptions } from "./common/options.js";
import { ACTIVE } from './common/selectors.js';
import { updateState } from './stateUpdates.js';
import { getState } from './common/state.js';
import { FP } from './common/constants.js';
import { addTableClass } from './common/addTableClass.js';

let startingSection = null;
FP.getActiveSection = getActiveSection;

export function getStartingSection(){
    return startingSection;
}

/**
* Styling vertical sections
*/
export function styleSection(section){
    var sectionElem = section.item;
    var hasSlides = section.allSlidesItems.length;
    var index = section.index();

    //if no active section is defined, the 1st one will be the default one
    if(!getState().activeSection && section.isVisible) {
        utils.addClass(sectionElem, ACTIVE);
        updateState();
    }
    startingSection = getState().activeSection.item;

    if(getOptions().paddingTop){
        utils.css(sectionElem, {'padding-top': getOptions().paddingTop});
    }

    if(getOptions().paddingBottom){
        utils.css(sectionElem, {'padding-bottom': getOptions().paddingBottom});
    }

    if (typeof getOptions().sectionsColor[index] !==  'undefined') {
        utils.css(sectionElem, {'background-color': getOptions().sectionsColor[index]});
    }

    if (typeof getOptions().anchors[index] !== 'undefined') {
        sectionElem.setAttribute('data-anchor', section.anchor);
    }

    if(!hasSlides){
        addTableClass(section);
    }
}

/**
* Gets the active section.
*/
function getActiveSection(){
    return getState().activeSection;
}

export function getSectionFromPanel(panel){
    return panel.isSection ? panel : panel.parent;
}