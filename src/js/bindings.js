//@ts-check
import { getOptions } from './options.js';
import { state, focusHandler } from './state.js';
import * as utils from './common/utils.js';
import { forMouseLeaveOrTouch, onMouseEnterOrLeave } from './normalScrollElements.js';
import { 
    createObserver,
    setWrapperObserver,
    onContentChange,
    getWrapperObserver
} from './dynamic.js';
import { moveTo, moveSectionDown, moveSectionUp, scrollHandler, scrollPage, scrollPageAndSlide } from './scroll.js';
import { scrollOverflowHandler } from './scrolloverflow.js';
import { hashChangeHandler } from './anchors.js';
import { resizeHandler } from './resize.js';
import { blurHandler, keydownHandler, keyUpHandler } from './keyboard.js';
import { getNodes } from './item.js';
import { menuItemsHandler } from './menu.js';
import { slideBulletHandler, slideArrowHandler } from './slides.js';
import { 
    tooltipTextHandler, 
    sectionBulletHandler
} from './nav.js';

import { 
    WRAPPER_SEL, 
    SECTION_NAV_SEL, 
    SECTION_NAV_TOOLTIP_SEL,
    SLIDES_NAV_LINK_SEL,
    SLIDES_ARROW_SEL
} from './common/selectors.js';
import { wheelDataHandler } from './beyondFullpage.js';
import { getPassiveOptionsIfPossible } from './common/supportsPassive.js';

export function bindEvents(){

    //when scrolling...
    window.addEventListener('scroll', scrollHandler);
    document.body.addEventListener('scroll', scrollHandler);

    if(getOptions().scrollOverflow){
        getNodes(state.panels).forEach(function(el){
            el.addEventListener('scroll', scrollOverflowHandler.onPanelScroll);
            el.addEventListener('wheel', scrollOverflowHandler.preventScrollWhileMoving);
            el.addEventListener('keydown', scrollOverflowHandler.preventScrollWhileMoving);
            el.addEventListener('keydown', scrollOverflowHandler.blurFocusOnAfterLoad);
        });
    }

    document.addEventListener('wheel', wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());

    //detecting any change on the URL to scroll to the given anchor link
    //(a way to detect back history button as we play with the hashes on the URL)
    window.addEventListener('hashchange', hashChangeHandler);
    
    // on window focus
    window.addEventListener('focus', focusHandler);

    //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
    window.addEventListener('blur', blurHandler);

    //when resizing the site, we adjust the heights of the sections, slimScroll...
    window.addEventListener('resize', resizeHandler);

    //Sliding with arrow keys, both, vertical and horizontal
    document.addEventListener('keydown', keydownHandler);

    //to prevent scrolling while zooming
    document.addEventListener('keyup', keyUpHandler);

    if(getOptions().observer){
        setWrapperObserver(createObserver(utils.$(WRAPPER_SEL)[0], onContentChange, getWrapperObserver()));
    }

    //Scrolls to the section when clicking the navigation bullet
    //simulating the jQuery .on('click') event using delegation
    ['click', 'touchstart'].forEach(function(eventName){
        document.addEventListener(eventName, delegatedEvents);
    });

    /**
    * Applying normalScroll elements.
    * Ignoring the scrolls over the specified selectors.
    */
    if(getOptions().normalScrollElements){
        ['mouseenter', 'touchstart'].forEach(function(eventName){
            forMouseLeaveOrTouch(eventName, false);
        });

        ['mouseleave', 'touchend'].forEach(function(eventName){
           forMouseLeaveOrTouch(eventName, true);
        });
    }

    internalEvents();
}

function internalEvents(){
    document.addEventListener('onScrollPageAndSlide', scrollPageAndSlide);
    document.addEventListener('fp:onDestroy', onDestroy);
    document.addEventListener('fp:onMenuClick', function(e){
        moveTo(e.details.anchor);
    });
    document.addEventListener('fp:onScrollOverflowScrolled', function(e){
        var scrollSection = (e.details.direction === 'down') ? moveSectionDown : moveSectionUp;
        scrollSection();
    });
    document.addEventListener('fp:scrollPage', function(e){
        scrollPage(e.details.destination);
    });    
}

export function delegatedEvents(e){
    var target = e.target;

    if(target && utils.closest(target, SECTION_NAV_SEL + ' a')){
        sectionBulletHandler.call(target, e);
    }
    else if(utils.matches(target, SECTION_NAV_TOOLTIP_SEL)){
        tooltipTextHandler.call(target);
    }
    else if(utils.matches(target, SLIDES_ARROW_SEL)){
        slideArrowHandler.call(target, e);
    }
    else if(utils.matches(target, SLIDES_NAV_LINK_SEL) || utils.closest(target, SLIDES_NAV_LINK_SEL) != null){
        slideBulletHandler.call(target, e);
    }
    else if(utils.closest(target, getOptions().menu + ' [data-menuanchor]')){
        menuItemsHandler.call(target, e);
    }
}

export function onDestroy(){
    removeEvents();
    clearTimeouts();
}

function clearTimeouts(){
    
}

function removeEvents(){
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('hashchange', hashChangeHandler);
    window.removeEventListener('resize', resizeHandler);

    document.removeEventListener('keydown', keydownHandler);
    document.removeEventListener('keyup', keyUpHandler);

    ['click', 'touchstart'].forEach(function(eventName){
        document.removeEventListener(eventName, delegatedEvents);
    });

    ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName){
        document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!
    });
}