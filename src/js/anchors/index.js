import * as utils from '../common/utils.js';
import { getOptions, getContainer } from '../common/options.js';
import { state } from '../common/state.js';
import { FP } from '../common/constants.js';
import { getAnchorsURL } from '../anchors/getAnchorsURL.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';
import { OVERFLOW_SEL } from '../common/selectors.js';
import { getPanelByElement } from '../common/item.js';
import { moveTo } from '../scroll/moveTo.js';

FP.setLockAnchors = setLockAnchors;
EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    //detecting any change on the URL to scroll to the given anchor link
    //(a way to detect back history button as we play with the hashes on the URL)
    utils.windowAddEvent('hashchange', hashChangeHandler);
    
    // Handle clicks on anchor links that point to elements within sections/slides
    utils.docAddEvent('click', anchorLinkClickHandler);
    
    EventEmitter.on(events.onDestroy, onDestroy);
}


function onDestroy(){
    utils.windowRemoveEvent('hashchange', hashChangeHandler);
    utils.docRemoveEvent('click', anchorLinkClickHandler);
}

/**
* Sets lockAnchors
*/
function setLockAnchors(value){
    getOptions().lockAnchors = value;
}

/**
* Detecting any change on the URL to scroll to the given anchor link
* (a way to detect back history button as we play with the hashes on the URL)
*/
function hashChangeHandler(){
    if(!state.isScrolling && !getOptions().lockAnchors){
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide;

        //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
        var isFirstSlideMove = typeof state.lastScrolledDestiny === 'undefined';
        var isFirstScrollMove = (typeof state.lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !state.slideMoving);

        if(sectionAnchor && sectionAnchor.length){
            /*in order to call scrollpage() only once for each destination at a time
            It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
            event is fired on every scroll too.*/
            if ((sectionAnchor && sectionAnchor !== state.lastScrolledDestiny) && !isFirstSlideMove || 
                isFirstScrollMove || 
                (!state.slideMoving && state.lastScrolledSlide != slideAnchor )){
                    EventEmitter.emit(events.onScrollPageAndSlide, {
                        sectionAnchor: sectionAnchor,
                        slideAnchor: slideAnchor
                    });
            }
        }
    }
}

/**
* Handles clicks on anchor links (a[href^="#"]) that point to elements within 
* sections/slides.
* This allows navigation to specific elements within sections/slides.
*/
function anchorLinkClickHandler(e){
    var target = e.target;
    
    // Check if the clicked element is an anchor link or is inside one
    var link = utils.closest(target, 'a[href^="#"]');
    if(!link) return;
    
    var href = utils.getAttr(link, 'href');
    if(!href || href === '#') return;
    
    // Get the target element from the href
    var targetElement = utils.$(href)[0];
    if(!targetElement) return;
    
    // Only handle links within the fullPage container
    var container = getContainer();
    if(!container || !container.contains(targetElement)){
        return;
    }
    
    var sectionEl = utils.closest(targetElement, getOptions().sectionSelector);
    if(!sectionEl){
        return;
    }

    var section = getPanelByElement(state.sections, sectionEl);
    if(!section){
        return;
    }
    
    var slideEl = utils.closest(targetElement, getOptions().slideSelector);
    var slide = slideEl && sectionEl.contains(slideEl) ? getPanelByElement(section.slides, slideEl) : null;
    
    // Prevent default browser scroll behavior
    utils.preventDefault(e);
    
    moveTo(section.index() + 1, slide ? slide.index() : null);
    
    var scrollable = utils.$(OVERFLOW_SEL, slide ? slide.item : section.item)[0];
    if(scrollable){
        scrollable.scrollTo(0, targetElement.offsetTop);
    }
}