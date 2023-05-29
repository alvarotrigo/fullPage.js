import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { getState, setState } from '../common/state.js';
import {
    ACTIVE,
    ACTIVE_SEL,
    SLIDES_NAV_SEL,
    SLIDES_NAV,
    SLIDE_SEL,
    SLIDES_WRAPPER_SEL,
    SECTION_SEL
} from '../common/selectors.js';
import { getPanelByElement } from '../common/item.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { getBulletLinkName } from './getBulletLinkName.js';
import { events } from '../common/events.js';

//Scrolls the slider to the given slide destination for the given section
export function slideBulletHandler(e){

    // not all events are cancellable 
    // https://www.uriports.com/blog/easy-fix-for-intervention-ignored-attempt-to-cancel-a-touchmove-event-with-cancelable-false/
    if(e.cancelable){
        utils.preventDefault(e);
    }

    setState({scrollTrigger: 'horizontalNav'});

    /*jshint validthis:true */
    var sectionElem = utils.closest(this, SECTION_SEL);
    var slides = utils.$(SLIDES_WRAPPER_SEL, utils.closest(this, SECTION_SEL))[0];
    var section = getPanelByElement(getState().sections, sectionElem);
    var destiny = section.slides[utils.index(utils.closest(this, 'li'))];

    EventEmitter.emit(events.landscapeScroll, {
        slides: slides, 
        destination: destiny.item
    });
}


/**
* Sets the state for the horizontal bullet navigations.
*/
export function activeSlidesNavigation(slidesNav, slideIndex){
    if(getOptions().slidesNavigation && slidesNav != null){
        utils.removeClass(utils.$(ACTIVE_SEL, slidesNav), ACTIVE);
        utils.addClass( utils.$('a', utils.$('li', slidesNav)[slideIndex] ), ACTIVE);
    }
}

/**
* Creates a landscape navigation bar with dots for horizontal sliders.
*/
export function addSlidesNavigation(section){
    var sectionElem = section.item;
    var numSlides = section.slides.length;
    utils.appendTo(utils.createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
    var nav = utils.$(SLIDES_NAV_SEL, sectionElem)[0];

    //top or bottom
    utils.addClass(nav, 'fp-' + getOptions().slidesNavPosition);

    for(var i=0; i< numSlides; i++){
        var slide = utils.$(SLIDE_SEL, sectionElem)[i];
        utils.appendTo(utils.createElementFromHTML('<li><a href="#"><span class="fp-sr-only">'+ getBulletLinkName(i, 'Slide', slide) +'</span><span></span></a></li>'), utils.$('ul', nav)[0] );
    }

    //centering it
    utils.css(nav, {'margin-left': '-' + (nav.innerWidth/2) + 'px'});

    var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
    utils.addClass(utils.$('a', utils.$('li', nav)[activeSlideIndex] ), ACTIVE);
}
