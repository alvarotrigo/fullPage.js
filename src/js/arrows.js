//@ts-check
import * as utils from './common/utils.js';
import { getOptions } from './options.js'; 
import { 
    SLIDES_WRAPPER_SEL,
    SLIDES_ARROW,
    SLIDES_PREV,
    SLIDES_NEXT,
    SLIDES_ARROW_NEXT_SEL,
    SLIDES_ARROW_PREV_SEL, 
 } from './common/selectors.js';

/**
* Creates the control arrows for the given section
*/
export function createSlideArrows(section){
    var sectionElem = section.item;
    var arrows = [utils.createElementFromHTML(getOptions().controlArrowsHTML[0]), utils.createElementFromHTML(getOptions().controlArrowsHTML[1])];
    utils.after(utils.$(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
    utils.addClass(arrows, SLIDES_ARROW);
    utils.addClass(arrows[0], SLIDES_PREV);
    utils.addClass(arrows[1], SLIDES_NEXT);

    if(getOptions().controlArrowColor !== '#fff'){
        utils.css(utils.$(SLIDES_ARROW_NEXT_SEL, sectionElem), {'border-color': 'transparent transparent transparent '+getOptions().controlArrowColor});
        utils.css(utils.$(SLIDES_ARROW_PREV_SEL, sectionElem), {'border-color': 'transparent '+ getOptions().controlArrowColor + ' transparent transparent'});
    }

    if(!getOptions().loopHorizontal){
        utils.hide(utils.$(SLIDES_ARROW_PREV_SEL, sectionElem));
    }
}