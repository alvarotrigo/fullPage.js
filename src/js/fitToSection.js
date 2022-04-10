import * as utils from './common/utils.js';
import { setVariableState } from './common/options.js';
import { getOptions } from './common/options.js';
import { $html } from './common/cache.js';
import { doc, FP } from './common/constants.js';
import {
    SNAPS
} from './common/selectors.js';

FP.setFitToSection = setFitToSection;
FP.fitToSection = fitToSection;

export const g_isCssSnapsSupported = (function(){
    return isCssSnapsSupported();
})();

/**
* Sets fitToSection
*/
export function setFitToSection(value, type){
    toggleCssSnapsWhenPossible(value);
    setVariableState('fitToSection', value, type);
}


/**
* Adds or removes CSS snaps scrolling behaviour depending on the given value.
*/
export function toggleCssSnapsWhenPossible(value){
    if(g_isCssSnapsSupported){
        var canAddSnaps = getOptions().fitToSection && (!getOptions().autoScrolling || getOptions().scrollBar) && value;
        var toggleFunction = canAddSnaps ? utils.addClass : utils.removeClass;
        toggleFunction($html, SNAPS);
    }
}

/**
* Checks for CSS scroll snaps support.
*/
function isCssSnapsSupported(){
    var style = doc.documentElement.style;
    
    return 'scrollSnapAlign' in style ||
    'webkitScrollSnapAlign' in style ||
    'msScrollSnapAlign' in style;
}

/**
* Fits the site to the nearest active section
*/
export function fitToSection(){
    // //checking fitToSection again in case it was set to false before the timeout delay
    // if(canScroll){
    //     //allows to scroll to an active section and
    //     //if the section is already active, we prevent firing callbacks
    //     isResizing = true;

    //     scrollPage(state.activeSection);
    //     isResizing = false;
    // }
}