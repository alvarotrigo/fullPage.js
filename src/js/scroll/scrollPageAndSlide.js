import * as utils from '../common/utils.js';
import { state } from '../common/state.js';
import { scrollSlider } from '../slides/scrollSlider.js';
import { getSectionByAnchor } from '../common/getSectionByAnchor.js';
import { ACTIVE } from '../common/selectors.js';
import { scrollPage } from './scrollPage.js';

/**
* Scrolls to the given section and slide anchors
*/
export function scrollPageAndSlide(sectionAnchor, slideAnchor){
    var section = getSectionByAnchor(sectionAnchor);

    //do nothing if there's no section with the given anchor name
    if(section == null) return;

    var slideElem = getSlideByAnchor(slideAnchor, section);

    //we need to scroll to the section and then to the slide
    if ((!section.anchor || section.anchor !== state.lastScrolledDestiny) && !utils.hasClass(section.item, ACTIVE)){
        
        scrollPage(section, function(){
            scrollSlider(slideElem);
        });
    }
    //if we were already in the section
    else{
        scrollSlider(slideElem);
    }
}

/**
* Gets a slide inside a given section by its anchor / index
*/
function getSlideByAnchor(slideAnchor, section){
    var slide = section.slides.filter(slide => slide.anchor === slideAnchor)[0];
    if(slide == null){
        slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
        slide = section.slides[slideAnchor];
    }

    return slide ? slide.item : null;
}