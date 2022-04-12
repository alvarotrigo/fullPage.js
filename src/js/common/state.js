import * as utils from './utils.js';
import { win } from './constants.js';

export const state = {
    numSections: 0,
    numSlides: 0,
    slides: [],
    sections: [],
    activeSection: null,
    scrollTrigger: null,
    isBeyondFullpage: false,
    aboutToScrollToFullPage: false,
    slideMoving: false,
    isResizing: false,
    isScrolling: false,
    lastScrolledDestiny: undefined,
    lastScrolledSlide: undefined,
    activeAnimation: false,
    canScroll: true,
    touchDirection: 'none',
    wheelDirection: 'none',
    isGrabbing: false,
    isUsingWheel: false,
    isWindowFocused: true,
    previousDestTop: 0,
    windowsHeight: utils.getWindowHeight(),
    isDoingContinousVertical: false,
    timeouts: {},
    scrollY: 0,
    scrollX: 0
};
// @ts-ignore
win.state = state;

export function setState(props){
    Object.assign(state, props);
}

export function getState(){
    return state;
}

export function getActiveDefaultSection(sections){
    var section = sections.filter(section => section.isActive);

    if(!section.length){
        return sections[0];
    }
    return section[0];
}