import * as utils from '../common/utils.js';
import { getOptions, getOriginals, setOption, setVariableState } from '../common/options.js';
import { getState, setState, state } from '../common/state.js';
import { doc, FP } from '../common/constants.js';
import { $html, $htmlBody } from '../common/cache.js';
import { transformContainer } from '../common/transformContainer.js';
import { scrollTo } from '../common/scrollTo.js';
import { getScrollSettings, getYmovement } from '../common/utilsFP.js';
import { createInfiniteSections } from '../infiniteScroll/createInfiniteSections.js';
import { continuousVerticalFixSectionOrder } from '../infiniteScroll/fixPosition.js';
import { stopMedia, playMedia} from '../media.js';
import { updateState } from '../stateUpdates.js';
import { lazyLoadPanels } from '../lazyLoad/lazyLoad.js';
import { lazyLoadOthers } from '../lazyLoad/lazyLoadOthers.js';
import { scrollOverflowHandler } from '../scrolloverflow.js';
import { setPageStatus } from '../anchors/setPageStatus.js';
import { activateMenuAndNav } from '../menu/activateMenuAndNav.js';
import { 
    AUTO_HEIGHT,
    COMPLETELY,
    ACTIVE,
    SECTION_ACTIVE_SEL
} from '../common/selectors.js';
import { fireCallbackOncePerScroll } from '../callbacks/fireCallbacksOncePerScroll.js';
import { fireCallback } from '../callbacks/fireCallback.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';

FP.moveTo = moveTo;
FP.getScrollY = function(){
    return state.scrollY;
};

let g_afterSectionLoadsId;
let g_transitionLapseId;

EventEmitter.on(events.onDestroy, onDestroy);

/**
* Scrolls the site to the given element and scrolls to the slide if a callback is given.
*/
export function scrollPage(section, callback, isMovementUp){
    var element = section.item;
    if(element == null){ return; } //there's no element to scroll, leaving the function

    var dtop = getDestinationPosition(element);
    var slideAnchorLink;
    var slideIndex;

    //local variables
    var v = {
        "element": element,
        "callback": callback,
        "isMovementUp": isMovementUp,
        "dtop": dtop,
        "yMovement": getYmovement(getState().activeSection, element),
        "anchorLink": section.anchor,
        "sectionIndex": section.index(),
        "activeSlide": section.activeSlide ? section.activeSlide.item : null,
        "leavingSection": getState().activeSection.index() + 1,

        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        "localIsResizing": state.isResizing,

        "items": {
            "origin": getState().activeSection,
            "destination": section
        },
        "direction": null
    };

    //quiting when destination scroll is the same as the current one
    if((getState().activeSection.item == element && !state.isResizing) || (getOptions().scrollBar && utils.getScrollTop() === v.dtop && !utils.hasClass(element, AUTO_HEIGHT) )){ 
        return; 
    }

    if(v.activeSlide != null){
        slideAnchorLink = utils.getAttr(v.activeSlide, 'data-anchor');
        slideIndex = utils.index(v.activeSlide, null);
    }

    //callback (onLeave) if the site is not just resizing and readjusting the slides
    if(!v.localIsResizing){
        var direction = v.yMovement;

        //required for continousVertical
        if(typeof isMovementUp !== 'undefined'){
            direction = isMovementUp ? 'up' : 'down';
        }

        //for the callback
        v.direction = direction;

        if(utils.isFunction( getOptions().beforeLeave )){
            
            if(fireCallbackOncePerScroll('beforeLeave', v) === false){
                return;
            }
        }

        if(utils.isFunction(getOptions().onLeave)){
            if(!fireCallback('onLeave', v)){
                return;
            }
        }
    }

    // If continuousVertical && we need to wrap around
    if (getOptions().autoScrolling && getOptions().continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
        ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
        (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

        v = createInfiniteSections(v);
    }

    //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
    if(!v.localIsResizing){
        stopMedia(getState().activeSection.item);
    }

    utils.addClass(element, ACTIVE);
    utils.removeClass(utils.siblings(element), ACTIVE);
    updateState();
    lazyLoadPanels(section);

    //preventing from activating the MouseWheelHandler event
    //more than once if the page is scrolling
    setState({canScroll: false || FP.test.isTesting});

    setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);

    EventEmitter.emit(events.onLeave, v);

    performMovement(v);

    //flag to avoid callingn `scrollPage()` twice in case of using anchor links
    setState({lastScrolledDestiny: v.anchorLink});

    //avoid firing it twice (as it does also on scroll)
    activateMenuAndNav(v.anchorLink, v.sectionIndex);
}

function onDestroy(){
    clearTimeout(g_afterSectionLoadsId);
    clearTimeout(g_transitionLapseId);
}


/**
* Returns the destination Y position based on the scrolling direction and
* the height of the section.
*/
export function getDestinationPosition(element){
    var elementHeight = element.offsetHeight;
    var elementTop = element.offsetTop;

    //top of the desination will be at the top of the viewport
    var position = elementTop;
    var isScrollingDown =  elementTop > state.previousDestTop;
    var sectionBottom = position - utils.getWindowHeight() + elementHeight;
    var bigSectionsDestination = getOptions().bigSectionsDestination;

    //is the destination element bigger than the viewport?
    if(elementHeight > utils.getWindowHeight()){
        //scrolling up?
        if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
            position = sectionBottom;
        }
    }

    //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
    else if(isScrollingDown || (state.isResizing && utils.next(element) == null) ){
        //The bottom of the destination will be at the bottom of the viewport
        position = sectionBottom;
    }

    /*
    Keeping record of the last scrolled position to determine the scrolling direction.
    No conventional methods can be used as the scroll bar might not be present
    AND the section might not be active if it is auto-height and didnt reach the middle
    of the viewport.
    */
    setState({previousDestTop: position});
    return position;
}

/**
* Performs the vertical movement (by CSS3 or by jQuery)
*/
function performMovement(v){
    setState({
        touchDirection: 'none',
        scrollY: Math.round(v.dtop)
    });

    EventEmitter.emit(events.onPerformMovement, v);

    var isFastSpeed = getOptions().scrollingSpeed < 700;
    var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed; 
    
    // using CSS3 translate functionality
    if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {

        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
        transformContainer(translate3d, true);

        //even when the scrollingSpeed is 0 there's a little delay, which might cause the
        //scrollingSpeed to change in case of using silentMoveTo();ç
        if(getOptions().scrollingSpeed){
            clearTimeout(g_afterSectionLoadsId);
            g_afterSectionLoadsId = setTimeout(function () {
                afterSectionLoads(v);

                //disabling canScroll when using fastSpeed
                setState({canScroll: !isFastSpeed || FP.test.isTesting});
            }, getOptions().scrollingSpeed);                   
        }else{
            afterSectionLoads(v);
        }
    }

    // using JS to animate
    else{
        var scrollSettings = getScrollSettings(v.dtop);
        FP.test.top = -v.dtop + 'px';

        clearTimeout(g_afterSectionLoadsId);

        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function(){
            if(getOptions().scrollBar){

                /* Hack!
                The timeout prevents setting the most dominant section in the viewport as "active" when the user
                scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                */
                g_afterSectionLoadsId = setTimeout(function(){
                    afterSectionLoads(v);
                },30);
            }else{
                
                afterSectionLoads(v);

                //disabling canScroll when using fastSpeed
                setState({canScroll: !isFastSpeed || FP.test.isTesting});
            }
        });
    }

    // enabling canScroll after the minimum transition laps
    if(isFastSpeed){
        clearTimeout(g_transitionLapseId);
        g_transitionLapseId = setTimeout(function(){
            setState({canScroll: true});
        }, transitionLapse);
    }
}

/**
* Actions to do once the section is loaded.
*/
function afterSectionLoads(v){    
    setState({isBeyondFullpage: false});
    continuousVerticalFixSectionOrder(v);

    //callback (afterLoad) if the site is not just resizing and readjusting the slides
    if(utils.isFunction(getOptions().afterLoad) && !v.localIsResizing){
        fireCallback('afterLoad', v);
    }

    updateState();

    if(!v.localIsResizing){
        playMedia(v.element);
    }

    utils.addClass(v.element, COMPLETELY);
    utils.removeClass(utils.siblings(v.element), COMPLETELY);

    lazyLoadOthers();

    setState({canScroll: true});

    EventEmitter.emit(events.afterSectionLoads, v);

    if(utils.isFunction(v.callback)){
        v.callback();
    }
}
