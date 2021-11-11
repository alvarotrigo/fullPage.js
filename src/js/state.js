import * as utils from './common/utils.js';

export const state = {
    numSections: 0,
    numSlides: 0,
    sections: [],
    activeSection: null,
    scrollTrigger: null,
    isBeyondFullpage: false,
    aboutToScrollToFullPage: false,
    slideMoving: false,
    isResizing: false,
    isScrolling: false,
    lastScrolledDestiny: undefined,
    activeAnimation: false,
    canScroll: true,
    touchDirection: 'none',
    direction: 'none',
    isGrabbing: false,
    isWindowFocused: true,
    windowsHeight: utils.getWindowHeight()
};
window.state = state;


export function setState(property, value){
    state[property] = value;
}

export function getStateVar(property){
    return state[property];
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

// changing isWindowFocused to true on focus event
export function focusHandler(){
    setState('isWindowFocused', true);
}


