//@ts-check
import * as utils from '../common/utils.js';
import { getOptions } from '../common/options';
import { focusableElementsString, doc } from '../common/constants.js';
import { getSlideOrSection, getSlideOrSectionPanel } from '../common/utilsFP.js';
import { getIsScrollAllowed } from '../common/isScrollAllowed.js';
import { 
    SECTION_ACTIVE_SEL,
    SLIDE_ACTIVE_SEL,
    SLIDE_SEL,
    SECTION_SEL,
    OVERFLOW_SEL
} from '../common/selectors.js';
import { getActivePanel, getState, setState, state } from '../common/state.js';
import { moveSlideLeft, moveSlideRight } from '../slides/moveSlide.js';
import { scrollOverflowHandler } from '../scrolloverflow.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { moveSectionUp } from '../scroll/moveSectionUp.js';
import { moveSectionDown } from '../scroll/moveSectionDown.js';
import { moveTo } from '../scroll/moveTo.js';
import { events } from '../common/events.js';
import { isInsideInput } from '../common/utils.js';

let g_controlPressed;
let g_keydownId;
let g_elToFocus;

EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
    utils.windowAddEvent('blur', blurHandler);

    //Sliding with arrow keys, both, vertical and horizontal
    utils.docAddEvent('keydown', keydownHandler);

    //to prevent scrolling while zooming
    utils.docAddEvent('keyup', keyUpHandler);

    EventEmitter.on(events.onDestroy, onDestroy);

    EventEmitter.on(events.afterSlideLoads, onAfterSlideLoads);
    EventEmitter.on(events.afterSectionLoads, afterSectionLoads);
}


function onDestroy(){
    clearTimeout(g_keydownId);
    utils.docRemoveEvent('keydown', keydownHandler);
    utils.docRemoveEvent('keyup', keyUpHandler);
}

//Sliding with arrow keys, both, vertical and horizontal
function keydownHandler(e) {
    clearTimeout(g_keydownId);

    var keyCode = e.keyCode;
    var isPressingHorizontalArrows = [37,39].indexOf(keyCode) > -1;
    var canScrollWithKeyboard = getOptions().autoScrolling || getOptions().fitToSection || isPressingHorizontalArrows;
    
    //tab?
    if(keyCode === 9){
        onTab(e);
    }

    else if( !isInsideInput() &&
        getOptions().keyboardScrolling && 
        canScrollWithKeyboard){

        g_controlPressed = e.ctrlKey;

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
    var activeElement = doc.activeElement;
    var isMediaFocused = utils.matches(activeElement, 'video') || utils.matches(activeElement, 'audio');
    var isScrolled = {
        up: scrollOverflowHandler.isScrolled('up', getState().activeSection.item),
        down: scrollOverflowHandler.isScrolled('down', getState().activeSection.item)
    };

    var isUsingHorizontalArrowKeys = [37,39].indexOf(e.keyCode) > -1;
    
    cancelDirectionKeyEvents(e);
    
    //do nothing if we can not scroll or we are not using horizotnal key arrows.
    if(!state.canScroll && !isUsingHorizontalArrowKeys){
        return;
    }

    setState({scrollTrigger: 'keydown'});

    switch (e.keyCode) {
        //up
        case 38:
        case 33:
            if(getIsScrollAllowed().k.up && isScrolled.up){
                if( state.isBeyondFullpage ){
                    EventEmitter.emit(events.onKeyDown, {e: e});
                }else{
                    moveSectionUp();
                }
            }
            else{
                scrollOverflowHandler.focusScrollable();
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
                if( state.isBeyondFullpage ){
                    return;
                }
                
                // space bar?
                if(e.keyCode !== 32 || !isMediaFocused){
                    moveSectionDown();
                }
            }
            else{
                scrollOverflowHandler.focusScrollable();
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
function keyUpHandler(e){
    if(state.isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
        g_controlPressed = e.ctrlKey;
    }
}


//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
function blurHandler(){
    setState({isWindowFocused: false});
    g_controlPressed = false;
}


/**
* Makes sure the tab key will only focus elements within the current section/slide
* preventing this way from breaking the page.
* Based on "Modals and keyboard traps"
* from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
*/
function onTab(e){
    var isShiftPressed = e.shiftKey;
    var activeElement = doc.activeElement;
    var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));

    function preventAndFocusFirst(e){
        utils.preventDefault(e);
        return focusableElements[0] ? focusableElements[0].focus() : null;
    }

    // deactivating tab while scrolling #4550
    if(!state.canScroll){
        utils.preventDefault(e);
        return;
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
    const isFirstFocusableInSection = activeElement == focusableElements[0];
    const isLastFocusableInSection = activeElement == focusableElements[focusableElements.length - 1];
    const isNextItem = !isShiftPressed && isLastFocusableInSection;
    const isPrevItem = isShiftPressed && isFirstFocusableInSection;

    if( isPrevItem || isNextItem ){
        utils.preventDefault(e);

        var focusInfo = getPanelWithFocusable(isPrevItem);
        var destinationPanel = focusInfo ? focusInfo.panel : null;

        if(destinationPanel){
            var destinationSection = destinationPanel.isSection ? destinationPanel : destinationPanel.parent;

            EventEmitter.emit(events.onScrollPageAndSlide, {
                sectionAnchor: destinationSection.index() + 1,
                slideAnchor: destinationPanel.isSection ? 0 : destinationPanel.index()
            });
            g_elToFocus = focusInfo.itemToFocus;
            utils.preventDefault(e);
        }
    }
}

function onAfterSlideLoads(v){
    focusItem();
}

function afterSectionLoads(v){
    if(!utils.closest(g_elToFocus, SLIDE_SEL) || utils.closest(g_elToFocus, SLIDE_ACTIVE_SEL)){
        focusItem();
    }
}

function focusItem(){
    if(g_elToFocus){
        g_elToFocus.focus();
        g_elToFocus = null;
    }
}

/**
 * Get's the panel containing the element to focus.
 *
 */
function getPanelWithFocusable(isPrevItem){
    var action = isPrevItem ? 'prevPanel' : 'nextPanel';
    var focusableElements = [];
    var panelWithFocusables;
    var currentPanel = getSlideOrSectionPanel(getActivePanel()[action]());
    
    do{
        focusableElements = getFocusables(currentPanel.item);

        if(focusableElements.length){
            panelWithFocusables = {
                panel: currentPanel,
                itemToFocus: focusableElements[isPrevItem ? focusableElements.length -1 : 0]
            };
        }
        currentPanel = getSlideOrSectionPanel(currentPanel[action]());

    }while(currentPanel && focusableElements.length === 0);

    return panelWithFocusables;
}


/**
* Gets all the focusable elements inside the passed element.
*/
function getFocusables(el){
    return [].slice.call(utils.$(focusableElementsString, el)).filter(function(item) {
            return utils.getAttr(item, 'tabindex') !== '-1' &&
            //are also not hidden elements (or with hidden parents)
            item.offsetParent !== null;
    });
}


/**
* Determines whether the focus is outside fullpage.js sections/slides or not.
*/
function isFocusOutside(e){
    var allFocusables = getFocusables(doc);
    var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
    var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
    var focusDestination = allFocusables[focusDestinationIndex];
    var destinationItemSlide = utils.closest(focusDestination, SLIDE_SEL);
    var destinationItemSection = utils.closest(focusDestination, SECTION_SEL);
    
    return !destinationItemSlide && !destinationItemSection;
}

function shouldCancelKeyboardNavigation(e){
    // https://keycode.info/for/34
    // 40 = arrow down
    // 38 = arrow up
    // 32 = spacebar
    // 33  = PageUp
    // 34 = PageDown
    var keyControls = [40, 38, 32, 33, 34];
    return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
}

//preventing the scroll with arrow keys & spacebar & Page Up & Down keys
function cancelDirectionKeyEvents(e){
    if(shouldCancelKeyboardNavigation(e) && !utils.closest(e.target, OVERFLOW_SEL)){
        e.preventDefault();
    }
}

export function getControlPressed(){
    return g_controlPressed;
}