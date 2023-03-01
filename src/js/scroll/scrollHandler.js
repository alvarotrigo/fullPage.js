import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { stopMedia, playMedia} from '../media.js';
import { updateState } from '../stateUpdates.js';
import { getState, setState, state } from '../common/state.js';
import { lazyLoad } from '../lazyLoad/lazyLoad.js';
import { setPageStatus } from '../anchors/setPageStatus.js';
import { activateMenuAndNav } from '../menu/activateMenuAndNav.js';
import { $body } from '../common/cache.js';
import { getYmovement } from '../common/utilsFP.js';
import { 
    COMPLETELY,
    ACTIVE
} from '../common/selectors.js';
import { fireCallbackOncePerScroll } from '../callbacks/fireCallbacksOncePerScroll.js';
import { fireCallback } from '../callbacks/fireCallback.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { fitToSection } from '../fitToSection.js';
import { events } from '../common/events.js';

var lastScroll = 0;
let g_scrollId;
let g_scrollId2;

EventEmitter.on(events.onDestroy, onDestroy);

//when scrolling...
export function scrollHandler(e){
    var currentSection;
    var currentSectionElem;

    if(state.isResizing || !getState().activeSection){
        return;
    }

    var lastSection = utils.getLast(getState().sections);
    if(getState().isBeyondFullpage || getState().isAboutToScrollToFullPage){
        return;
    }
    
    if(!getOptions().autoScrolling || getOptions().scrollBar){
        var currentScroll = utils.getScrollTop();
        var scrollDirection = getScrollDirection(currentScroll);
        var visibleSectionIndex = 0;
        var screen_mid = currentScroll + (utils.getWindowHeight() / 2.0);
        var isAtBottom = $body.scrollHeight - utils.getWindowHeight() === currentScroll;
        var sections =  getState().sections;
        
        setState({scrollY: currentScroll});

        //when using `auto-height` for a small last section it won't be centered in the viewport
        if(isAtBottom){
            visibleSectionIndex = sections.length - 1;
        }
        //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
        else if(!currentScroll){
            visibleSectionIndex = 0;
        }

        //taking the section which is showing more content in the viewport
        else{
            for (var i = 0; i < sections.length; ++i) {
                var section = sections[i].item;

                // Pick the the last section which passes the middle line of the screen.
                if (section.offsetTop <= screen_mid)
                {
                    visibleSectionIndex = i;
                }
            }
        }

        if(isCompletelyInViewPort(scrollDirection)){
            if(!utils.hasClass(getState().activeSection.item, COMPLETELY)){
                utils.addClass(getState().activeSection.item, COMPLETELY);
                utils.removeClass(utils.siblings(getState().activeSection.item), COMPLETELY);
            }
        }

        //geting the last one, the current one on the screen
        currentSection = sections[visibleSectionIndex];
        currentSectionElem = currentSection.item;

        //setting the visible section as active when manually scrolling
        //executing only once the first time we reach the section
        if(!currentSection.isActive){
            setState({isScrolling: true});
            var leavingSection = getState().activeSection.item;
            var leavingSectionIndex = getState().activeSection.index() + 1;
            var yMovement = getYmovement(getState().activeSection, currentSectionElem);
            var anchorLink  = currentSection.anchor;
            var sectionIndex = currentSection.index() + 1;
            var activeSlide = currentSection.activeSlide;
            var slideIndex;
            var slideAnchorLink;
            var callbacksParams = {
                activeSection: leavingSection,
                sectionIndex: sectionIndex -1,
                anchorLink: anchorLink,
                element: currentSectionElem,
                leavingSection: leavingSectionIndex,
                direction: yMovement,

                items: {
                    origin: getState().activeSection,
                    destination: currentSection
                }
            };

            if(activeSlide){
                slideAnchorLink = activeSlide.anchor;
                slideIndex = activeSlide.index();
            }

            if(state.canScroll){
                utils.addClass(currentSectionElem, ACTIVE);
                utils.removeClass(utils.siblings(currentSectionElem), ACTIVE);

                if(utils.isFunction( getOptions().beforeLeave )){
                    fireCallbackOncePerScroll('beforeLeave', callbacksParams);
                }

                if(utils.isFunction( getOptions().onLeave )){
                    fireCallback('onLeave', callbacksParams);
                }
                if(utils.isFunction( getOptions().afterLoad )){
                    fireCallback('afterLoad', callbacksParams);
                }

                stopMedia(leavingSection);
                lazyLoad(currentSectionElem);
                playMedia(currentSectionElem);

                activateMenuAndNav(anchorLink, sectionIndex - 1);

                if(getOptions().anchors.length){
                    //needed to enter in hashChange event when using the menu with anchor links
                    setState({lastScrolledDestiny: anchorLink});
                }
                updateState();
                setPageStatus(slideIndex, slideAnchorLink, anchorLink);
            }

            //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
            clearTimeout(g_scrollId);
            g_scrollId = setTimeout(function(){
                setState({isScrolling: false});
            }, 100);

        }

            
        if(getOptions().fitToSection && state.canScroll){

            clearTimeout(g_scrollId2);
            g_scrollId2 = setTimeout(function(){

                var fixedSections = state.sections.filter(function(section){
                    var sectionValues = section.item.getBoundingClientRect();
                    return Math.round(sectionValues.bottom) === Math.round(utils.getWindowHeight()) ||
                        Math.round(sectionValues.top) === 0;
                });

                // No section is fitting the viewport? Let's fix that!
                if(!fixedSections.length){
                    fitToSection();
                }
            }, getOptions().fitToSectionDelay);   
        }
    }
}

function onDestroy(){
    clearTimeout(g_scrollId);
    clearTimeout(g_scrollId2);
}

/**
* Gets the directon of the the scrolling fired by the scroll event.
*/
function getScrollDirection(currentScroll){
    var direction = currentScroll > lastScroll ? 'down' : 'up';

    lastScroll = currentScroll;

    //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
    setState({previousDestTop: currentScroll});

    return direction;
}



/**
* Determines whether the active section has seen in its whole or not.
*/
function isCompletelyInViewPort(movement){
    var top = getState().activeSection.item.offsetTop;
    var bottom = top + utils.getWindowHeight();

    if(movement == 'up'){
        return bottom >= (utils.getScrollTop() + utils.getWindowHeight());
    }
    return top <= utils.getScrollTop();
}
