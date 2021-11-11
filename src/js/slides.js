import * as utils from './common/utils.js';
import { getOptions, getOriginals } from './options.js';
import { fireCallback, nullOrSlide } from './callbacks.js';
import { updateState } from './stateUpdates.js';
import { state, getState, setState, getStateVar } from './state.js';
import { stopMedia, playMedia } from './media.js';
import { lazyLoad } from './lazyLoad';
import { setPageStatus } from './anchors.js';
import { scrollTo } from './common/scrollTo.js';
import { addAnimation } from './common/addAnimation.js';
import { activeSlidesNavigation, addSlidesNavigation } from './nav.js';
import { FP } from './common/constants.js';
import { getTransforms } from './common/transforms.js';
import { createSlideArrows } from './arrows.js';
import {
    SLIDES_WRAPPER_SEL,
    SECTION_SEL,
    SLIDES_NAV_SEL,
    SLIDES_ARROW_PREV_SEL,
    SLIDES_ARROW_NEXT_SEL,
    SLIDES_CONTAINER_SEL,
    ACTIVE, 
    SLIDES_WRAPPER,
    SLIDES_CONTAINER,
    SLIDES_PREV
} from './common/selectors.js';
import { getPanelByElement } from './item.js';
import { setScrollingSpeed } from './speed.js';
import { getIsScrollAllowed } from './common/isScrollAllowed.js';
import { addTableClass } from './common/addTableClass.js';

FP.moveSlideRight = moveSlideRight;
FP.moveSlideLeft = moveSlideLeft;
FP.getActiveSlide = getActiveSlide;


/**
* Scrolls the slider to the given slide destination for the given section
*/
export function scrollSlider(slideElem){
    if(slideElem != null){
        landscapeScroll(utils.closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
    }
}

/**
* Scrolls horizontal sliders.
*/
export function landscapeScroll(slides, destiny, direction){
    var sectionElem = utils.closest(slides, SECTION_SEL);
    var section = getState().sections.filter(section => {
        return section.item == sectionElem;
    })[0];

    var slide = section.slides.filter(function(slide){
        return slide.item == destiny;
    })[0];
    var v = {
        slides: slides,
        destiny: destiny,
        direction: direction,
        destinyPos: {left: destiny.offsetLeft},
        slideIndex: slide.index(),
        section: sectionElem,
        sectionIndex: section.index(),
        anchorLink: section.anchor,
        slidesNav: utils.$(SLIDES_NAV_SEL, sectionElem)[0],
        slideAnchor: slide.anchor,
        prevSlide: section.activeSlide.item,
        prevSlideIndex: section.activeSlide.index(),
        items: {
            section: section,
            origin: section.activeSlide,
            destination: slide
        },

        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: getStateVar('isResizing')
    };
    v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
    v.direction = v.direction ? v.direction : v.xMovement;

    //important!! Only do it when not resizing
    if(!v.localIsResizing){
        //preventing from scrolling to the next/prev section when using scrollHorizontally
        setState('canScroll', false);
    }

    if(getOptions().onSlideLeave){

        //if the site is not just resizing and readjusting the slides
        if(!v.localIsResizing && v.xMovement!=='none'){
            if(utils.isFunction( getOptions().onSlideLeave )){
                if( fireCallback('onSlideLeave', v) === false){
                    setState('slideMoving', false);
                    return;
                }
            }
        }
    }

    utils.addClass(destiny, ACTIVE);
    utils.removeClass(utils.siblings(destiny), ACTIVE);
    updateState();

    if(!v.localIsResizing){
        stopMedia(v.prevSlide);
        lazyLoad(destiny);
    }

    if(!getOptions().loopHorizontal && getOptions().controlArrows){
        
        //hidding it for the fist slide, showing for the rest
        utils.toggle(utils.$(SLIDES_ARROW_PREV_SEL, sectionElem), v.slideIndex!==0);

        //hidding it for the last slide, showing for the rest
        utils.toggle(utils.$(SLIDES_ARROW_NEXT_SEL, sectionElem), slide.next() != null);
    }

    //only changing the URL if the slides are in the current section (not for resize re-adjusting)
    if(section.isActive && !v.localIsResizing){
        setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
    }

    performHorizontalMove(slides, v, true);
}


/**
* Retuns `right` or `left` depending on the scrolling movement to reach its destination
* from the current slide.
*/
function getXmovement(fromIndex, toIndex){
    if( fromIndex == toIndex){
        return 'none';
    }
    if(fromIndex > toIndex){
        return 'left';
    }
    return 'right';
}

/**
* Performs the horizontal movement. (CSS3 or jQuery)
*
* @param fireCallback {Bool} - determines whether or not to fire the callback
*/
function performHorizontalMove(slides, v, fireCallback){
    var destinyPos = v.destinyPos;

    if(getOptions().css3){
        var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

        FP.test.translate3dH[v.sectionIndex] = translate3d;
        utils.css(addAnimation(utils.$(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));

        afterSlideLoadsId = setTimeout(function(){
            if(fireCallback){
                afterSlideLoads(v);
            }
        }, getOptions().scrollingSpeed);
    }else{
        FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);

        scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, function(){
            if(fireCallback){
                afterSlideLoads(v);
            }
        });
    }
}

function afterSlideLoads(v){
    activeSlidesNavigation(v.slidesNav, v.slideIndex);

    //if the site is not just resizing and readjusting the slides
    if(!v.localIsResizing){
        if(utils.isFunction( getOptions().afterSlideLoad )){
            fireCallback('afterSlideLoad', v);
        }

        //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
        //and to prevent double scroll right after a windows resize
        setState('canScroll', true);
        
        playMedia(v.destiny);
    }

    //letting them slide again
    setState('slideMoving', false);
}

//Scrolls the slider to the given slide destination for the given section
export function slideBulletHandler(e){
    utils.preventDefault(e);

    setState('scrollTrigger', 'horizontalNav');

    /*jshint validthis:true */
    var sectionElem = utils.closest(this, SECTION_SEL);
    var slides = utils.$(SLIDES_WRAPPER_SEL, utils.closest(this, SECTION_SEL))[0];
    var section = getPanelByElement(getState().sections, sectionElem);
    var destiny = section.slides[utils.index(utils.closest(this, 'li'))];

    landscapeScroll(slides, destiny.item);
}


/**
* Slides right the slider of the active section.
* Optional `section` param.
*/
export function moveSlideRight(section){
    moveSlide('right', section);
}


/**
* Slides left the slider of the active section.
* Optional `section` param.
*/
export function moveSlideLeft(section){
    moveSlide('left', section);
}

/**
* Slides a slider to the given direction.
* Optional `section` param.
*/
function moveSlide(direction, section){
    var activeSection = section == null ? getState().activeSection.item : section;
    var slides = utils.$(SLIDES_WRAPPER_SEL, activeSection)[0];

    // more than one slide needed and nothing should be sliding
    if (slides == null || getStateVar('slideMoving') || getState().activeSection.slides.length < 2) {
        return;
    }

    var currentSlide = getState().activeSection.activeSlide;
    var destiny = direction === 'left' ? currentSlide.prev() : currentSlide.next();

    //isn't there a next slide in the secuence?
    if(!destiny){
        //respect loopHorizontal setting
        if (!getOptions().loopHorizontal) return;

        destiny = direction === 'left' ? utils.getLast(getState().activeSection.slides) : getState().activeSection.slides[0];
    }

    setState('slideMoving', true && !FP.test.isTesting);
    landscapeScroll(slides, destiny.item, direction);
}



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
        var slidesWrapper = document.createElement('div');
        slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
        utils.wrapAll(slidesElems, slidesWrapper);

        var slidesContainer = document.createElement('div');
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
            addTableClass(slide.item);
        }
    });

    var startingSlide = section.activeSlide || null;

    //if the slide won't be an starting point, the default will be the first one
    //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
    if( startingSlide != null && (getState().activeSection.index() !== 0 || (getState().activeSection.index() === 0 && startingSlide.index() !== 0))){
        silentLandscapeScroll(startingSlide.item, 'internal');
    }else{
        utils.addClass(slidesElems[0], ACTIVE);
    }
}

/**
* Gets the active slide.
*/
export function getActiveSlide(){
    return nullOrSlide(state.activeSection.activeSlide.item, state.activeSection);
}


/**
* Slides silently (with no animation) the active slider to the given slide.
* @param noCallback {bool} true or defined -> no callbacks
*/
export function silentLandscapeScroll(activeSlide, noCallbacks){
    setScrollingSpeed(0, 'internal');

    if(typeof noCallbacks !== 'undefined'){
        //preventing firing callbacks afterSlideLoad etc.
        setState('isResizing', true);
    }

    landscapeScroll(utils.closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

    if(typeof noCallbacks !== 'undefined'){
        setState('isResizing', false);
    }

    setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
}

//Scrolling horizontally when clicking on the slider controls.
export function slideArrowHandler(){
    /*jshint validthis:true */
    var section = utils.closest(this, SECTION_SEL);

    /*jshint validthis:true */
    if (utils.hasClass(this, SLIDES_PREV)) {
        if(getIsScrollAllowed().m.left){
            setState('scrollTrigger', 'slideArrow');
            moveSlideLeft(section);
        }
    } else {
        if(getIsScrollAllowed().m.right){
            setState('scrollTrigger', 'slideArrow');
            moveSlideRight(section);
        }
    }
}