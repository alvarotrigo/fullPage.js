import * as utils from './utils.js';
import { getOptions } from "../options.js";
import { SLIDES_WRAPPER } from './selectors.js';

/**
* Scrolls the page / slider the given number of pixels.
* It will do it one or another way dependiong on the library's config.
*/
export function setScrolling(element, val){
    if(!getOptions().autoScrolling || getOptions().scrollBar || (element.self != window && utils.hasClass(element, SLIDES_WRAPPER))){

        //scrolling horizontally through the slides?
        if(element.self != window  && utils.hasClass(element, SLIDES_WRAPPER)){
            element.scrollLeft = val;
        }
        //vertical scroll
        else{   
            element.scrollTo(0, val);
        }
    }else{
         element.style.top = val + 'px';
    }
}