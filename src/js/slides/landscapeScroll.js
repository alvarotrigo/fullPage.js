import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { getState, setState, state } from '../common/state.js';
import { scrollTo } from '../common/scrollTo.js';
import { FP } from '../common/constants.js';
import { addAnimation, getTransforms } from '../common/utilsFP.js';
import {
    SECTION_SEL,
    SLIDES_NAV_SEL,
    SLIDES_CONTAINER_SEL,
    ACTIVE
} from '../common/selectors.js';
import { fireCallback } from '../callbacks/fireCallback.js';
import { updateState } from '../stateUpdates.js';
import { playMedia, stopMedia } from '../media.js';
import { lazyLoad } from '../lazyLoad/lazyLoad.js';
import { setPageStatus } from '../anchors/setPageStatus.js';
import { activeSlidesNavigation } from '../nav/slides.js';
import { toggleControlArrows } from '../arrows.js';
import { EventEmitter } from '../common/eventEmitter.js';

let g_afterSlideLoadsId;
FP.landscapeScroll = landscapeScroll;

EventEmitter.on('bindEvents', bindEvents);

function bindEvents(){
    EventEmitter.on('onPerformMovement', onPerformMovement);
}

function onPerformMovement(){
    clearTimeout(g_afterSlideLoadsId);
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
        "slides": slides,
        "destiny": destiny,
        "direction": direction,
        "destinyPos": {"left": destiny.offsetLeft},
        "slideIndex": slide.index(),
        "section": sectionElem,
        "sectionIndex": section.index(),
        "anchorLink": section.anchor,
        "slidesNav": utils.$(SLIDES_NAV_SEL, sectionElem)[0],
        "slideAnchor": slide.anchor,
        "prevSlide": section.activeSlide.item,
        "prevSlideIndex": section.activeSlide.index(),
        "items": {
            "section": section,
            "origin": section.activeSlide,
            "destination": slide
        },

        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        "localIsResizing": state.isResizing
    };
    v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
    v.direction = v.direction ? v.direction : v.xMovement;

    //important!! Only do it when not resizing
    if(!v.localIsResizing){
        //preventing from scrolling to the next/prev section when using scrollHorizontally
        setState({canScroll: false});
    }

    if(getOptions().onSlideLeave){

        //if the site is not just resizing and readjusting the slides
        if(!v.localIsResizing && v.xMovement!=='none'){
            if(utils.isFunction( getOptions().onSlideLeave )){
                if( fireCallback('onSlideLeave', v) === false){
                    setState({slideMoving: false});
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

    toggleControlArrows(v);

    //only changing the URL if the slides are in the current section (not for resize re-adjusting)
    if(section.isActive && !v.localIsResizing){
        setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
    }

    performHorizontalMove(slides, v, true);
}

/**
* Performs the horizontal movement. (CSS3 or jQuery)
*
* @param fireCallback {Boolean} - determines whether or not to fire the callback
*/
function performHorizontalMove(slides, v, fireCallback){
    var destinyPos = v.destinyPos;

    activeSlidesNavigation(v.slidesNav, v.slideIndex);
    setState({
        scrollX: Math.round(destinyPos.left)
    });

    if(getOptions().css3){
        var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

        FP.test.translate3dH[v.sectionIndex] = translate3d;
        utils.css(addAnimation(utils.$(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));

        clearTimeout(g_afterSlideLoadsId);
        g_afterSlideLoadsId = setTimeout(function(){
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

export function onDestroy(){
    clearTimeout(g_afterSlideLoadsId);
}

function afterSlideLoads(v){

    //if the site is not just resizing and readjusting the slides
    if(!v.localIsResizing){
        if(utils.isFunction( getOptions().afterSlideLoad )){
            fireCallback('afterSlideLoad', v);
        }

        //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
        //and to prevent double scroll right after a windows resize
        setState({canScroll: true});
        
        playMedia(v.destiny);
    }

    //letting them slide again
    setState({slideMoving: false});
}
