import * as utils from './utils.js';
import { getContainer, getOptions } from './options.js';
import { 
    SLIDE_ACTIVE_SEL, 
    WRAPPER_SEL, 
    SLIDES_WRAPPER,
    NO_TRANSITION,
    SECTION_SEL
} from './selectors.js';
import { doc } from './constants.js';
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

export function getSlideOrSectionPanel(panel){
    if(!panel){
        return null;
    }
    return panel.activeSlide ? panel.activeSlide : panel;
}

export function isFullPageAbove(){
    return getContainer().getBoundingClientRect().bottom >= 0;
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

/**
* Adds transition animations for the given element
*/
export function addAnimation(element){
    var transition = 'transform ' + getOptions().scrollingSpeed + 'ms ' + getOptions().easingcss3;

    utils.removeClass(element, NO_TRANSITION);
    return utils.css(element, {
        '-webkit-transition': transition,
        'transition': transition
    });
}

/**
* Retuns `up` or `down` depending on the scrolling movement to reach its destination
* from the current section.
*/
export function getYmovement(activeSection, destiny){
    var fromIndex = activeSection.index();
    var toIndex = utils.index(destiny, SECTION_SEL);
    if( fromIndex == toIndex){
        return 'none';
    }
    if(fromIndex > toIndex){
        return 'up';
    }
    return 'down';
}

/**
* Remove transition animations for the given element
*/
export function removeAnimation(element){
    return utils.addClass(element, NO_TRANSITION);
}

/**
* Returns the cross-browser transform string.
*/
export function getTransforms(translate3d){
    return {
        '-webkit-transform': translate3d,
        '-moz-transform': translate3d,
        '-ms-transform':translate3d,
        'transform': translate3d
    };
}