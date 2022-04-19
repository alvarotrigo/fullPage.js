import { nullOrSlide } from '../callbacks/nullOrSlide.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { getState, state } from '../common/state.js';
import { landscapeScroll, onDestroy } from './landscapeScroll.js';
import { moveSlideLeft, moveSlideRight } from './moveSlide.js';
import { FP } from '../common/constants.js';

FP.getActiveSlide = getActiveSlide;
FP.getScrollX = function(){
    return state.scrollX;
};

EventEmitter.on('bindEvents', bindEvents);

function bindEvents(){
    EventEmitter.on('onDestroy', onDestroy);

    EventEmitter.on('landscapeScroll', function(params){
        landscapeScroll(params.slides, params.destination);
    });
    EventEmitter.on('moveSlideRight', function(params){
        moveSlideRight(params.section);
    });
    EventEmitter.on('moveSlideLeft', function(params){
        moveSlideLeft(params.section);
    });
}

/**
* Gets the active slide.
*/
export function getActiveSlide(){
    return nullOrSlide(getState().activeSection.activeSlide);
}
