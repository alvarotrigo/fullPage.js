import * as utils from './common/utils.js';
import { getOptions } from './options.js';
import { SLIDE_ACTIVE_SEL } from './common/selectors.js';
/**
* Gets the active slide (or section) for the given section
*/
export function getSlideOrSection(destiny){
    var slide = utils.$(SLIDE_ACTIVE_SEL, destiny);
    if( slide.length ) {
        destiny = slide[0];
    }

    return destiny;
}


/**
* Gets the scrolling settings depending on the plugin autoScrolling option
*/
export function getScrollSettings(top){
    var options = getOptions();
    var position;
    var element;

    //top property animation
    if(options.autoScrolling && !options.scrollBar){
        position = -top;
        element = utils.$(WRAPPER_SEL)[0];
    }

    else if(options.fitToSection){
        position = top;
        element = document.body;
    }

    //window real scrolling
    else{
        position = top;
        element = window;
    }

    return {
        options: position,
        element: element
    };
}
