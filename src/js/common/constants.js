export const win = window;
export const doc = document;

export const isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
export const isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent);
// @ts-ignore
export const isTouch = (('ontouchstart' in win) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
export const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

// taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
export const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

// cache common elements
export const FP = {
    test: {},
    shared: {}
};

export const extensions = [
    'parallax',
    'scrollOverflowReset',
    'dragAndMove',
    'offsetSections',
    'fadingEffect',
    'responsiveSlides',
    'continuousHorizontal',
    'interlockedSlides',
    'scrollHorizontally',
    'resetSliders',
    'cards',
    'dropEffect',
    'waterEffect'
];