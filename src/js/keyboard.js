//@ts-check
import * as utils from './common/utils.js';
import { getOptions } from './options';
import {
    moveSectionDown,
    moveSectionUp,
} from './scroll.js';
import { FP, focusableElementsString } from './common/constants.js';
import { moveSlideLeft, moveSlideRight } from './slides.js';
import { getSlideOrSection } from './utilsFP.js';
import { 
    SECTION_ACTIVE_SEL,
    SLIDE_ACTIVE_SEL,
    SLIDE_SEL,
    SECTION_SEL
} from './common/selectors.js';
import { getState, setState, getStateVar } from './state.js';
import { scrollOverflowHandler } from './scrolloverflow.js';
import { getIsScrollAllowed, setIsScrollAllowed } from './common/isScrollAllowed.js';

let controlPressed;
FP.setKeyboardScrolling = setKeyboardScrolling;

/**
* Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
*/
export function setKeyboardScrolling(value, directions){
    if(typeof directions !== 'undefined'){
        directions = directions.replace(/ /g,'').split(',');

        directions.forEach(function(direction){
            setIsScrollAllowed(value, direction, 'k');
        });
    }else{
        setIsScrollAllowed(value, 'all', 'k');
        getOptions().keyboardScrolling = value;
    }
}

export function getControlPressed(){
    return controlPressed;
}



//Sliding with arrow keys, both, vertical and horizontal
export function keydownHandler(e) {
    clearTimeout(g_keydownId);

    var activeElement = document.activeElement;
    var keyCode = e.keyCode;
    var isPressingHorizontalArrows = [37,39].indexOf(keyCode) > -1;
    var canScrollWithKeyboard = getOptions().autoScrolling || isPressingHorizontalArrows;
    
    //tab?
    if(keyCode === 9){
        onTab(e);
    }

    else if(!utils.matches(activeElement, 'textarea') && 
        !utils.matches(activeElement, 'input') && 
        !utils.matches(activeElement, 'select') &&
        activeElement.getAttribute('contentEditable') !== "true" && 
        activeElement.getAttribute('contentEditable') !== '' &&
        getOptions().keyboardScrolling && 
        canScrollWithKeyboard){

        controlPressed = e.ctrlKey;

        g_keydownId = setTimeout(function(){
            onkeydown(e);
        },0);
    }
}

/**
* Keydown event
*/
function onkeydown(e){
    var shiftPressed = e.shiftKey;
    var activeElement = document.activeElement;
    var isMediaFocused = utils.matches(activeElement, 'video') || utils.matches(activeElement, 'audio');
    var isScrolled = {
        up: scrollOverflowHandler.isScrolled('up', getState().activeSection.item),
        down: scrollOverflowHandler.isScrolled('down', getState().activeSection.item)
    };

    var isUsingHorizontalArrowKeys = [37,39].indexOf(e.keyCode) > -1;
    
    //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
    if(shouldCancelKeyboardNavigation(e)){
        utils.preventDefault(e);
    }
    
    //do nothing if we can not scroll or we are not using horizotnal key arrows.
    if(!getStateVar('canScroll') && !isUsingHorizontalArrowKeys){
        return;
    }

    setState('scrollTrigger', 'keydown');

    switch (e.keyCode) {
        //up
        case 38:
        case 33:
            if(getIsScrollAllowed().k.up && isScrolled.up){
                moveSectionUp();
            }
            break;

        //down
        case 32: //spacebar
            if(shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up){
                moveSectionUp();
                break;
            }
        /* falls through */
        case 40:
        case 34:
            if(getIsScrollAllowed().k.down && isScrolled.down){
                // space bar?
                if(e.keyCode !== 32 || !isMediaFocused){
                    moveSectionDown();
                }
            }
            break;

        //Home
        case 36:
            if(getIsScrollAllowed().k.up){
                moveTo(1);
            }
            break;

        //End
        case 35:
             if(getIsScrollAllowed().k.down){
                moveTo( getState().sections.length );
            }
            break;

        //left
        case 37:
            if(getIsScrollAllowed().k.left){
                moveSlideLeft();
            }
            break;

        //right
        case 39:
            if(getIsScrollAllowed().k.right){
                moveSlideRight();
            }
            break;

        default:
            return; // exit this handler for other keys
    }
}    


//to prevent scrolling while zooming
export function keyUpHandler(e){
    if(getStateVar('isWindowFocused')){ //the keyup gets fired on new tab ctrl + t in Firefox
        controlPressed = e.ctrlKey;
    }
}


//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
export function blurHandler(){
    setState('isWindowFocused', false);
    controlPressed = false;
}


/**
* Makes sure the tab key will only focus elements within the current section/slide
* preventing this way from breaking the page.
* Based on "Modals and keyboard traps"
* from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
*/
function onTab(e){
    var isShiftPressed = e.shiftKey;
    var activeElement = document.activeElement;
    var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));

    function preventAndFocusFirst(e){
        utils.preventDefault(e);
        return focusableElements[0] ? focusableElements[0].focus() : null;
    }

    //outside any section or slide? Let's not hijack the tab!
    if(isFocusOutside(e)){
        return;
    }

    //is there an element with focus?
    if(activeElement){
        if(utils.closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null){
            activeElement = preventAndFocusFirst(e);
        }
    }

    //no element if focused? Let's focus the first one of the section/slide
    else{
        preventAndFocusFirst(e);
    }

    //when reached the first or last focusable element of the section/slide
    //we prevent the tab action to keep it in the last focusable element
    if(!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] ||
        isShiftPressed && activeElement == focusableElements[0]
    ){
        utils.preventDefault(e);
    }
}


/**
* Gets all the focusable elements inside the passed element.
*/
    function getFocusables(el){
    return [].slice.call(utils.$(focusableElementsString, el)).filter(function(item) {
            return item.getAttribute('tabindex') !== '-1' &&
            //are also not hidden elements (or with hidden parents)
            item.offsetParent !== null;
    });
}


/**
* Determines whether the focus is outside fullpage.js sections/slides or not.
*/
function isFocusOutside(e){
    var allFocusables = getFocusables(document);
    var currentFocusIndex = allFocusables.indexOf(document.activeElement);
    var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
    var focusDestination = allFocusables[focusDestinationIndex];
    var destinationItemSlide = utils.closest(focusDestination, SLIDE_SEL);
    var destinationItemSection = utils.closest(focusDestination, SECTION_SEL);
    
    return !destinationItemSlide && !destinationItemSection;
}

function shouldCancelKeyboardNavigation(e){
    var keyControls = [40, 38, 32, 33, 34];
    return keyControls.indexOf(e.keyCode) > -1;
}