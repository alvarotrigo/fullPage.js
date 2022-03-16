import * as utils from '../common/utils.js';
import { SLIDES_WRAPPER_SEL } from "../common/selectors.js";
import { landscapeScroll } from './landscapeScroll.js';

/**
* Scrolls the slider to the given slide destination for the given section
*/
export function scrollSlider(slideElem){
    if(slideElem != null){
        landscapeScroll(utils.closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
    }
}