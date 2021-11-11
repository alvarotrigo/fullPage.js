import * as utils from './utils.js';

export const isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
export const isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(window.navigator.userAgent);
export const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

// taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
export const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

// cache common elements
export const $htmlBody = utils.$('html, body');
export const $html = utils.$('html')[0];
export const $body = utils.$('body')[0];
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

/**
* Checks for translate3d support
* @return boolean
* http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
*/
export function support3d() {
    var el = document.createElement('p'),
        has3d,
        transforms = {
            'webkitTransform':'-webkit-transform',
            'OTransform':'-o-transform',
            'msTransform':'-ms-transform',
            'MozTransform':'-moz-transform',
            'transform':'transform'
        };

    //preventing the style p:empty{display: none;} from returning the wrong result
    el.style.display = 'block';

    // Add it to the body to get the computed style.
    document.body.insertBefore(el, null);

    for (var t in transforms) {
        if (el.style[t] !== undefined) {
            el.style[t] = 'translate3d(1px,1px,1px)';
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
    }

    document.body.removeChild(el);

    return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
}