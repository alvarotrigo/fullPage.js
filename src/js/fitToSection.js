import { setVariableState } from './common/options.js';
import { FP } from './common/constants.js';
import { setState, state } from './common/state.js';
import { scrollPage } from './scroll/scrollPage.js';

FP.setFitToSection = setFitToSection;
FP.fitToSection = fitToSection;

/**
* Sets fitToSection
*/
export function setFitToSection(value, type){
    setVariableState('fitToSection', value, type);
}

/**
* Fits the site to the nearest active section
*/
export function fitToSection(){
    //checking fitToSection again in case it was set to false before the timeout delay
    if(state.canScroll){
        //allows to scroll to an active section and
        //if the section is already active, we prevent firing callbacks
        setState({isResizing: true});

        scrollPage(state.activeSection);
        setState({isResizing: false});
    }
}