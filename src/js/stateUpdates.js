import * as utils from './common/utils.js';
import { getOptions, getContainer, setVariableState } from './common/options.js';
import { getPanelByElement, Item } from './common/item.js';
import { ACTIVE, OVERFLOW } from './common/selectors.js';
import { getState, state } from './common/state.js';
import { silentScroll } from './common/silentScroll.js';
import { silentLandscapeScroll } from './slides/silentLandscapeScroll.js';

let g_prevActiveSectionIndex = null;
let g_prevActiveSlideIndex = null;

/** 
 * Updates the state of the app.
 */
export function updateState(){

    state.activeSection = null;
    state.sections.map(function(section){
        let isActive = utils.hasClass(section.item, ACTIVE);
        section.isActive = isActive;
        section.hasScroll = utils.hasClass(section.item, OVERFLOW);
        if(isActive){
            state.activeSection = section;
        }

        if(section.slides.length){
            section.activeSlide = null;
            section.slides.map(function(slide){
                let isActiveSlide = utils.hasClass(slide.item, ACTIVE);
                slide.hasScroll = utils.hasClass(slide.item, OVERFLOW);
                slide.isActive = isActiveSlide;
                if(isActiveSlide){
                    section.activeSlide = slide;
                }
            });
        }
    });

    scrollToNewActivePanel();
}

export function updateStructuralState(){
    var allSectionItems = utils.$(getOptions().sectionSelector, getContainer());
    var sectionsItems = utils.getVisible(allSectionItems);
    var allSections = Array.from(allSectionItems).map( item => new SectionPanel(item));
    var sections = allSections.filter( item => item.isVisible);
    var slides = sections.reduce(function(acc, section){
        return acc.concat(section.slides);
    }, []);

    // keeping track of the previously active section
    g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
    g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);

    state.numSections = sectionsItems.length;
    state.numSlides = sections.reduce( function(acc, section){
        return acc + section.slides.length;
    }, 0);
    state.sections = sections;

    state.sectionsIncludingHidden = allSections;
    state.slides = slides;
    state.panels = state.sections.concat(state.slides);
}

function getPrevActivePanelIndex(activePanel){
    if(!activePanel){
        return null;
    }
    var prevActivePanelItem = activePanel ? activePanel.item : null;
    var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;
    if(prevActivePanelItem){
        let panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
        return panel ? panel.index() : null;
    }
    return null;
}

/**
 * When changes in the DOM take place there's a change 
 * the active section is now hidden or removed. 
 * fullPage.js will scroll to the closest section nearby.
 */
function scrollToNewActivePanel(){
    var activeSection = state.activeSection;
    var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
    var activeSlide = state.activeSection ? state.activeSection.activeSlide : null;

    // Hidding / removing the active section ?
    if(!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex){
        var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);
        if(newActiveSection){
            state.activeSection = newActiveSection;
            state.activeSection.isActive = true;
            utils.addClass(state.activeSection.item, ACTIVE);
        }
        if(state.activeSection){
            silentScroll(state.activeSection.item.offsetTop);
        }
    }
    if(activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex){
        var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);
        if(newActiveSlide){
            state.activeSection.activeSlide = newActiveSlide;
            state.activeSection.activeSlide.isActive = true;
            utils.addClass(state.activeSection.activeSlide.item, ACTIVE);
        }
        if(state.activeSection.activeSlide){
            silentLandscapeScroll(state.activeSection.activeSlide.item, 'internal');
        }
    }
}

function getNewActivePanel(prevActivePanelIndex, siblings){
    let newActiveSection;
    let prevIndex = prevActivePanelIndex -1;
    let nextIndex = prevActivePanelIndex;
    do{
        newActiveSection = siblings[prevIndex] || siblings[nextIndex];
        if(newActiveSection){
            break;
        }
        prevIndex = prevIndex - 1;
        nextIndex = nextIndex + 1;
    }while(prevIndex >= 0 || nextIndex < siblings.length);

    return newActiveSection;
}

/**
* Section object
*/
export let SectionPanel = function(el){
    [].push.call(arguments, getOptions().sectionSelector);
    Item.apply(this, arguments);

    this.allSlidesItems = utils.$(getOptions().slideSelector, el);
    this.slidesIncludingHidden = Array.from(this.allSlidesItems).map( item => new SlidePanel(item, this));
    this.slides = this.slidesIncludingHidden.filter(slidePanel => slidePanel.isVisible);
    this.activeSlide = this.slides.length ? this.slides.filter(slide => slide.isActive)[0] || this.slides[0]: null;
};
SectionPanel.prototype = Item.prototype;
SectionPanel.prototype.constructor = SectionPanel;



/**
* Slide object
*/
let SlidePanel = function(el, section){
    this.parent = section;
    Item.call(this, el, getOptions().slideSelector);
};

SlidePanel.prototype = Item.prototype;
SlidePanel.prototype.constructor = SectionPanel;
