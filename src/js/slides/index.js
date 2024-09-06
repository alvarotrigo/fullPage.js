import { nullOrSlide } from '../callbacks/nullOrSlide.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { getState, setState, state } from '../common/state.js';
import { landscapeScroll, onDestroy } from './landscapeScroll.js';
import { moveSlideLeft, moveSlideRight } from './moveSlide.js';
import { FP } from '../common/constants.js';
import { events } from '../common/events.js';

FP.getActiveSlide = getActiveSlide;
FP.getScrollX = function(){
    return state.scrollX;
};

EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    EventEmitter.on(events.onDestroy, onDestroy);

    EventEmitter.on(events.landscapeScroll, function(params){
        landscapeScroll(params.slides, params.destination);
    });
    EventEmitter.on(events.moveSlideRight, function(params){
        moveSlideRight(params.section);
    });
    EventEmitter.on(events.moveSlideLeft, function(params){
        moveSlideLeft(params.section);
    });
    EventEmitter.on(events.afterSectionLoads, updateScrollX);
}

function updateScrollX(params){
    var activeSlide = params.items.destination.activeSlide;
    var scrollX = activeSlide ? Math.round(activeSlide.offsetLeft) : 0;
    
    setState({
        scrollX: scrollX
    });
}

/**
* Gets the active slide.
*/
export function getActiveSlide(){
    return nullOrSlide(getState().activeSection.activeSlide);
}
