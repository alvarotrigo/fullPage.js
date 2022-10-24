import * as utils from '../common/utils.js';
import { getOptions, setVariableState } from '../common/options.js';
import { state } from '../common/state.js';
import { FP } from '../common/constants.js';
import { getAnchorsURL } from '../anchors/getAnchorsURL.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';

FP.setLockAnchors = setLockAnchors;
EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    //detecting any change on the URL to scroll to the given anchor link
    //(a way to detect back history button as we play with the hashes on the URL)
    utils.windowAddEvent('hashchange', hashChangeHandler);
    EventEmitter.on(events.onDestroy, onDestroy);
}


function onDestroy(){
    utils.windowRemoveEvent('hashchange', hashChangeHandler);
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