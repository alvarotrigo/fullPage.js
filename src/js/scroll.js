import * as utils from './common/utils.js';
import { getOptions, getOriginals } from './options.js';
import { fireCallbackOncePerScroll, fireCallback } from './callbacks.js';
import { createInfiniteSections, continuousVerticalFixSectionOrder } from './infiniteScroll.js';
import { stopMedia, playMedia} from './media.js';
import { updateState } from './stateUpdates.js';
import { getState, getStateVar, setState } from './state.js';
import { lazyLoad, lazyLoadOthers } from './lazyLoad';
import { scrollSlider } from './slides.js';
import { setScrollingSpeed } from './speed.js';
import { g_isCssSnapsSupported, fitToSection } from './fitToSection.js';
import { scrollBeyondFullPage } from './beyondFullpage.js';
import { scrollOverflowHandler } from './scrolloverflow.js';
import { getScrollSettings } from './utilsFP.js';
import { setPageStatus, getAnchorsURL } from './anchors.js';
import { activateMenuAndNav } from './menu.js';
import { $htmlBody, $body, FP } from './common/constants';
import { scrollTo } from './common/scrollTo.js';
import { getYmovement } from './common/getYMovement.js';
import { transformContainer } from './common/transformContainer.js';
import { getSectionByAnchor } from './common/getSectionByAnchor.js';
import { 
    AUTO_HEIGHT,
    COMPLETELY,
    ACTIVE
} from './common/selectors.js';

FP.setAllowScrolling = setAllowScrolling;
FP.moveSectionUp = moveSectionUp;
FP.moveSectionDown = moveSectionDown;
FP.silentMoveTo = silentMoveTo;
FP.moveTo = moveTo;

/**
* Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
* Optionally a second parameter can be used to specify the direction for which the action will be applied.
*
* @param directions string containing the direction or directions separated by comma.
*/
export function setAllowScrolling(value, directions){
    if(typeof directions !== 'undefined'){
        directions = directions.replace(/ /g,'').split(',');

        directions.forEach(function (direction){
            setIsScrollAllowed(value, direction, 'm');
        });
    }
    else{
        setIsScrollAllowed(value, 'all', 'm');
    }
}

/**
* Moves the page up one section.
*/
export function moveSectionUp(){
    var prev = getState().activeSection.prev();

    //looping to the bottom if there's no more sections above
    if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) {
        prev = utils.getLast(getState().sections);
    }

    if (prev != null) {
        scrollPage(prev, null, true);
    }
}


/**
* Moves the page down one section.
*/
export function moveSectionDown(){
    console.log(this);
    var next = getState().activeSection.next();

    //looping to the top if there's no more sections below
    if(!next &&
        (getOptions().loopBottom || getOptions().continuousVertical)){
        next = getState().sections[0];
    }

    if(next != null){
        scrollPage(next, null, false);
    }
    else{
        scrollBeyondFullPage();
    }
}



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
        element: element,
        callback: callback,
        isMovementUp: isMovementUp,
        dtop: dtop,
        yMovement: getYmovement(getState().activeSection, element),
        anchorLink: section.anchor,
        sectionIndex: section.index(),
        activeSlide: section.activeSlide ? section.activeSlide.item : null,
        activeSection: getState().activeSection.item,
        leavingSection: getState().activeSection.index() + 1,

        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: getStateVar('isResizing'),

        items: {
            origin: getState().activeSection,
            destination: section
        },
    };

    //quiting when destination scroll is the same as the current one
    if((v.activeSection == element && !getStateVar('isResizing')) || (getOptions().scrollBar && utils.getScrollTop(getOptions()) === v.dtop && !utils.hasClass(element, AUTO_HEIGHT) )){ return; }

    if(v.activeSlide != null){
        slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
        slideIndex = utils.index(v.activeSlide);
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
        setState('direction', direction);

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
        stopMedia(v.activeSection);
    }

    utils.addClass(element, ACTIVE);
    utils.removeClass(utils.siblings(element), ACTIVE);
    updateState();
    lazyLoad(element);

    //preventing from activating the MouseWheelHandler event
    //more than once if the page is scrolling
    setState('canScroll', false) || typeof FP.test.isTesting !== 'undefined';

    setPageStatus(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

    performMovement(v);

    //flag to avoid callingn `scrollPage()` twice in case of using anchor links
    setState('lastScrolledDestiny', v.anchorLink);

    //avoid firing it twice (as it does also on scroll)
    activateMenuAndNav(v.anchorLink, v.sectionIndex);
}

var previousDestTop = 0;
/**
* Returns the destination Y position based on the scrolling direction and
* the height of the section.
*/
function getDestinationPosition(element){
    var elementHeight = element.offsetHeight;
    var elementTop = element.offsetTop;

    //top of the desination will be at the top of the viewport
    var position = elementTop;
    var isScrollingDown =  elementTop > previousDestTop;
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
    else if(isScrollingDown || (getStateVar('isResizing') && utils.next(element) == null) ){
        //The bottom of the destination will be at the bottom of the viewport
        position = sectionBottom;
    }

    /*
    Keeping record of the last scrolled position to determine the scrolling direction.
    No conventional methods can be used as the scroll bar might not be present
    AND the section might not be active if it is auto-height and didnt reach the middle
    of the viewport.
    */
    previousDestTop = position;
    return position;
}



/**
* Performs the vertical movement (by CSS3 or by jQuery)
*/
function performMovement(v){
    var isFastSpeed = getOptions().scrollingSpeed < 700;
    var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed; 
    setState('touchDirection', 'none');

    // using CSS3 translate functionality
    if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {

        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
        transformContainer(translate3d, true);

        //even when the scrollingSpeed is 0 there's a little delay, which might cause the
        //scrollingSpeed to change in case of using silentMoveTo();
        if(getOptions().scrollingSpeed){
            clearTimeout(g_afterSectionLoadsId);
            g_afterSectionLoadsId = setTimeout(function () {
                afterSectionLoads(v);

                //disabling canScroll when using fastSpeed
                setState('canScroll', !isFastSpeed || FP.test.isTesting);
            }, getOptions().scrollingSpeed);                   
        }else{
            afterSectionLoads(v);
        }
    }

    // using JS to animate
    else{
        var scrollSettings = getScrollSettings(v.dtop);
        FP.test.top = -v.dtop + 'px';

        utils.css($htmlBody, {'scroll-behavior': 'unset'});

        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function(){
            if(getOptions().scrollBar){

                /* Hack!
                The timeout prevents setting the most dominant section in the viewport as "active" when the user
                scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                */
                setTimeout(function(){
                    afterSectionLoads(v);
                },30);
            }else{
                
                afterSectionLoads(v);

                //disabling canScroll when using fastSpeed
                setState('canScroll', !isFastSpeed || FP.test.isTesting);
            }
        });
    }

    // enabling canScroll after the minimum transition laps
    if(isFastSpeed){
        clearTimeout(g_transitionLapseId);
        g_transitionLapseId = setTimeout(function(){
            setState('canScroll', true);
        }, transitionLapse);
    }
}

/**
* Actions to do once the section is loaded.
*/
function afterSectionLoads(v){
    if(getOptions().fitToSection){
        utils.css(document.body, {'scroll-snap-type': 'y mandatory'});
    }
    
    setState('isBeyondFullpage', false);

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

    scrollOverflowHandler.afterSectionLoads();

    setState('canScroll', true);

    if(utils.isFunction(v.callback)){
        v.callback();
    }
}

/**
* Scrolls to the given section and slide anchors
*/
export function scrollPageAndSlide(e){
    var sectionAnchor = e.details.sectionAnchor;
    var slideAnchor = e.details.slideAnchor;
    var section = getSectionByAnchor(sectionAnchor);

    //do nothing if there's no section with the given anchor name
    if(section == null) return;

    var slideElem = getSlideByAnchor(slideAnchor, section);

    //we need to scroll to the section and then to the slide
    if (section.anchor !== getStateVar('lastScrolledDestiny') && !utils.hasClass(section.item, ACTIVE)){
        
        scrollPage(section, function(){
            scrollSlider(slideElem);
        });
    }
    //if we were already in the section
    else{
        scrollSlider(slideElem);
    }
}

/**
* Gets a slide inside a given section by its anchor / index
*/
function getSlideByAnchor(slideAnchor, section){
    var slide = section.slides.filter(slide => slide.anchor === slideAnchor)[0];
    if(slide == null){
        slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
        slide = section.slides[slideAnchor];
    }

    return slide ? slide.item : null;
}

/**
* Moves the page to the given section and slide with no animation.
* Anchors or index positions can be used as params.
*/
export function silentMoveTo(sectionAnchor, slideAnchor){
    setScrollingSpeed (0, 'internal');
    moveTo(sectionAnchor, slideAnchor);
    setScrollingSpeed (getOriginals().scrollingSpeed, 'internal');
}




/**
* Determines the way of scrolling up or down:
* by 'automatically' scrolling a section or by using the default and normal scrolling.
*/
export function scrolling(type){
    if (!isScrollAllowed.m[type]){
        return;
    }

    var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

    if(getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)){

        //is the scrollbar at the start/end of the scroll?
        if(scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && 
            scrollOverflowHandler.shouldMovePage()
        ){
            scrollSection();
        }
    }
    else{
        scrollSection();
    }
}


/**
* Moves the page to the given section and slide.
* Anchors or index positions can be used as params.
*/
export function moveTo(sectionAnchor, slideAnchor){
    var destiny = getSectionByAnchor(sectionAnchor);

    if (typeof slideAnchor !== 'undefined'){
        scrollPageAndSlide(sectionAnchor, slideAnchor);
    }else if(destiny != null){
        scrollPage(destiny);
    }
}


var lastScroll = 0;

//when scrolling...
export function scrollHandler(e){
    var currentSection;
    var currentSectionElem;

    if(getStateVar('isResizing') || !getState().activeSection){
        return;
    }

    var lastSection = utils.getLast(getState().sections);
    if(getState().isBeyondFullpage || getState().isAboutToScrollToFullPage){
        return;
    }
    
    if(!getOptions().autoScrolling || getOptions().scrollBar){
        var currentScroll = utils.getScrollTop(getOptions());
        var scrollDirection = getScrollDirection(currentScroll);
        var visibleSectionIndex = 0;
        var screen_mid = currentScroll + (utils.getWindowHeight() / 2.0);
        var isAtBottom = $body.scrollHeight - utils.getWindowHeight() === currentScroll;
        var sections =  getState().sections;

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
            setState('isScrolling', true);
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

            if(getStateVar('canScroll')){
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
                    setState('lastScrolledDestiny', anchorLink);
                }
                setPageStatus(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                updateState();
            }

            //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
            clearTimeout(g_scrollId);
            g_scrollId = setTimeout(function(){
                setState('isScrolling', false);
            }, 100);
        }

        if(getOptions().fitToSection && (!g_isCssSnapsSupported || getOptions().scrollBar)){
            //for the auto adjust of the viewport to fit a whole section
            clearTimeout(g_scrollId2);

            g_scrollId2 = setTimeout(function(){
                //checking it again in case it changed during the delay
                if(getOptions().fitToSection &&

                    //is the destination element bigger than the viewport?
                    getState().activeSection.item.offsetHeight <= getStateVar('windowsHeight')
                ){
                    fitToSection();
                }
            }, getOptions().fitToSectionDelay);
        }
    }
}

/**
* Determines whether the active section has seen in its whole or not.
*/
function isCompletelyInViewPort(movement){
    var top = getState().activeSection.item.offsetTop;
    var bottom = top + utils.getWindowHeight();

    if(movement == 'up'){
        return bottom >= (utils.getScrollTop(getOptions()) + utils.getWindowHeight());
    }
    return top <= utils.getScrollTop(getOptions());
}

/**
* Gets the directon of the the scrolling fired by the scroll event.
*/
function getScrollDirection(currentScroll){
    var direction = currentScroll > lastScroll ? 'down' : 'up';

    lastScroll = currentScroll;

    //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
    previousDestTop = currentScroll;

    return direction;
}

/**
* Scrolls to the anchor in the URL when loading the site
*/
export function scrollToAnchor(){
    var anchors = getAnchorsURL();
    var sectionAnchor = anchors.section;
    var slideAnchor = anchors.slide;

    if(sectionAnchor){  //if theres any #
        if(getOptions().animateAnchor){
            scrollPageAndSlide(sectionAnchor, slideAnchor);
        }else{
            silentMoveTo(sectionAnchor, slideAnchor);
        }
    }
}