import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { state } from '../common/state.js';
import { addTableClass } from '../common/addTableClass.js';
import {
    SLIDES_WRAPPER_SEL,
    SLIDES_CONTAINER_SEL,
    ACTIVE, 
    SLIDES_WRAPPER,
    SLIDES_CONTAINER,
} from '../common/selectors.js';
import { addSlidesNavigation } from '../nav/slides.js';
import { createSlideArrows } from '../arrows.js';
import { silentLandscapeScroll } from './silentLandscapeScroll.js';
import { doc } from '../common/constants.js';

/**
* Styles the horizontal slides for a section.
*/
export function styleSlides(section){
    var numSlides = section.slides.length;
    var slidesElems = section.allSlidesItems;
    var slides = section.slides;
    var sliderWidth = numSlides * 100;
    var slideWidth = 100 / numSlides;

    if(!utils.$(SLIDES_WRAPPER_SEL, section.item)[0]){
        var slidesWrapper = doc.createElement('div');
        slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
        utils.wrapAll(slidesElems, slidesWrapper);

        var slidesContainer = doc.createElement('div');
        slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer
        utils.wrapAll(slidesElems, slidesContainer);
    }

    utils.css(utils.$(SLIDES_CONTAINER_SEL, section.item), {'width': sliderWidth + '%'});

    if(numSlides > 1){
        if(getOptions().controlArrows){
            createSlideArrows(section);
        }

        if(getOptions().slidesNavigation){
            addSlidesNavigation(section);
        }
    }

    slides.forEach(function(slide) {
        utils.css(slide.item, {'width': slideWidth + '%'});

        if(getOptions().verticalCentered){
            addTableClass(slide);
        }
    });

    var startingSlide = section.activeSlide || null;

    //if the slide won't be an starting point, the default will be the first one
    //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
    if( startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || (state.activeSection.index() === 0 && startingSlide.index() !== 0))){
        silentLandscapeScroll(startingSlide.item, 'internal');
    }else{
        utils.addClass(slidesElems[0], ACTIVE);
    }
}
