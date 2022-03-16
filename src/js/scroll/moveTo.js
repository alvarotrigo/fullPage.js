import { getSectionByAnchor } from "../common/getSectionByAnchor.js";
import { scrollPage } from "./scrollPage.js";
import { scrollPageAndSlide } from "./scrollPageAndSlide.js";
import { FP } from '../common/constants';

FP.moveTo = moveTo;

/**
* Moves the page to the given section and slide.
* Anchors or index positions can be used as params.
*/
export function moveTo(sectionAnchor, slideAnchor){
    var destiny = getSectionByAnchor(sectionAnchor);

    if (typeof slideAnchor !== 'undefined'){
        scrollPageAndSlide(sectionAnchor, slideAnchor);
    }else if(destiny != null){
        scrollPage(destiny);
    }
}