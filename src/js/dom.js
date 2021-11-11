import * as utils from './common/utils.js';
import { getSectionByAnchor } from './common/getSectionByAnchor.js';
import { silentScroll } from './common/silentScroll.js';
import { $html, $htmlBody, $body, FP } from './common/constants.js';
import { removeAnimation } from './common/removeAnimation.js';
import { addTableClass } from './common/addTableClass.js';
import { getState, setState } from './state.js';
import { getOptions, getContainer } from './options.js';
import { styleSection, getStartingSection } from './sections.js';
import { styleSlides } from './slides.js';
import { styleMenu } from './menu.js';
import { addVerticalNavigation } from './nav.js';
import { enableYoutubeAPI, playMedia } from './media.js';
import { scrollOverflowHandler } from './scrolloverflow.js';
import { getAnchorsURL} from './anchors.js';
import { fireCallback } from './callbacks.js';
import { setSrc, lazyLoad, lazyLoadOthers } from './lazyLoad.js';
import { getNodes } from './item.js';
import { 
    WRAPPER,
    ENABLED,
    DESTROYED,
    SECTION,
    SLIDE,
    COMPLETELY,
    SLIDES_NAV_SEL,
    RESPONSIVE,
    TABLE,
    ACTIVE,
    TABLE_CELL_SEL,
    VIEWING_PREFIX,
    SECTION_NAV_SEL,
    SLIDES_CONTAINER,
    SLIDES_CONTAINER_SEL,
    SLIDES_WRAPPER_SEL,
    SLIDES_ARROW_SEL
} from './common/selectors.js';

FP.shared.afterRenderActions = afterRenderActions;

/**
* Works over the DOM structure to set it up for the current fullpage getOptions().
*/
export function prepareDom(){
    utils.css(getContainer(), {
        'height': '100%',
        'position': 'relative'
    });

    //adding a class to recognize the container internally in the code
    utils.addClass(getContainer(), WRAPPER);
    utils.addClass($html, ENABLED);

    //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
    setState('windowsHeight', utils.getWindowHeight());

    utils.removeClass(getContainer(), DESTROYED); //in case it was destroyed before initializing it again

    addInternalSelectors();

    var sections = getState().sectionsIncludingHidden;

    //styling the sections / slides / menu
    for(var i = 0; i<sections.length; i++){
        var sectionIndex = i;
        var section = sections[i];
        var slides = section.allSlidesItems;

        //caching the original styles to add them back on destroy('all')
        section.item.setAttribute('data-fp-styles', section.item.getAttribute('style'));

        styleSection(section);
        styleMenu(section);

        // if there's any slide
        if (slides.length > 0) {
            styleSlides(section);
        }else{
            addTableClass(section);
        }
    }

    //fixed elements need to be moved out of the plugin container due to problems with CSS3.
    if(getOptions().fixedElements && getOptions().css3){
        utils.$(getOptions().fixedElements).forEach(function(item){
            $body.appendChild(item);
        });
    }

    //vertical centered of the navigation + active bullet
    if(getOptions().navigation){
        addVerticalNavigation();
    }

    enableYoutubeAPI();

    if(getOptions().scrollOverflow){
        scrollOverflowHandler.makeScrollable();
    }
}


/**
* Adds internal classes to be able to provide customizable selectors
* keeping the link with the style sheet.
*/
export function addInternalSelectors(){
    utils.addClass(utils.$(getOptions().sectionSelector, getContainer()), SECTION);
    utils.addClass(utils.$(getOptions().slideSelector, getContainer()), SLIDE);
}


/**
* Actions and callbacks to fire afterRender
*/
export function afterRenderActions(){
    var section = getState().activeSection;
    var sectionElem = getState().activeSection.item;

    utils.addClass(sectionElem, COMPLETELY);

    lazyLoad(sectionElem);
    lazyLoadOthers();
    playMedia(sectionElem);

    if(isDestinyTheStartingSection() && utils.isFunction(getOptions().afterLoad) ){
        fireCallback('afterLoad', {
            activeSection: sectionElem,
            element: sectionElem,
            direction: null,

            //for backwards compatibility callback (to be removed in a future!)
            anchorLink: section.anchor,
            sectionIndex: section.index(),

            items: {
                origin: getState().activeSection,
                destination: getState().activeSection
            }
        });
    }

    if(utils.isFunction(getOptions().afterRender)){
        fireCallback('afterRender');
    }
}

/*
* Removes inline styles added by fullpage.js
*/
export function destroyStructure(){
    //reseting the `top` or `translate` properties to 0
    silentScroll(0);

    //loading all the lazy load content
    utils.$('img[data-src], source[data-src], audio[data-src], iframe[data-src]', getContainer()).forEach(function(item){
        setSrc(item, 'src');
    });

    utils.$('img[data-srcset]').forEach(function(item){
        setSrc(item, 'srcset');
    });

    utils.remove(utils.$(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL));

    //removing inline styles
    utils.css(getNodes(getState().sections), {
        'height': '',
        'background-color' : '',
        'padding': ''
    });

    utils.css(getNodes(getState().slides), {
        'width': ''
    });

    utils.css(getContainer(), {
        'height': '',
        'position': '',
        '-ms-touch-action': '',
        'touch-action': ''
    });

    utils.css($htmlBody, {
        'overflow': '',
        'height': ''
    });

    // remove .fp-enabled class
    utils.removeClass($html, ENABLED);

    // remove .fp-responsive class
    utils.removeClass($body, RESPONSIVE);

    // remove all of the .fp-viewing- classes
    $body.className.split(/\s+/).forEach(function (className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
            utils.removeClass($body, className);
        }
    });

    //removing added classes
    getNodes(getState().panels).forEach(function(item){
        if(getOptions().scrollOverflow){
            utils.removeClass(item, 'fp-overflow');
        }
        utils.removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
        var previousStyles = item.getAttribute('data-fp-styles');
        if(previousStyles){
            item.setAttribute('style', item.getAttribute('data-fp-styles'));
        }

        //removing anchors if they were not set using the HTML markup
        if(utils.hasClass(item, SECTION) && !g_initialAnchorsInDom){
            item.removeAttribute('data-anchor');
        }
    });

    //removing the applied transition from the fullpage wrapper
    removeAnimation(getContainer());

    //Unwrapping content
    [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL,SLIDES_WRAPPER_SEL].forEach(function(selector){
        utils.$(selector, getContainer()).forEach(function(item){
            //unwrap not being use in case there's no child element inside and its just text
            utils.unwrap(item);
        });
    });

    //removing the applied transition from the fullpage wrapper
    utils.css(getContainer(), {
        '-webkit-transition': 'none',
        'transition': 'none'
    });

    //scrolling the page to the top with no animation
    window.scrollTo(0, 0);

    //removing selectors
    var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
    usedSelectors.forEach(function(item){
        utils.removeClass(utils.$('.' + item), item);
    });
}

/**
* Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
*/
function isDestinyTheStartingSection(){
    var anchor = getAnchorsURL();
    var destinationSection = getSectionByAnchor(anchor.section);
    return !anchor.section || !destinationSection || typeof destinationSection !=='undefined' && destinationSection.index() === utils.index(getStartingSection());
}