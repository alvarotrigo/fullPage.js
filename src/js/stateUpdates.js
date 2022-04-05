import * as utils from './common/utils.js';
import { getOptions, getContainer } from './common/options.js';
import { getPanelByElement, Item } from './common/item.js';
import { ACTIVE } from './common/selectors.js';
import { getState, state } from './common/state.js';
import { silentScroll } from './common/silentScroll.js';

let g_prevActiveSectionIndex = null;

/** 
 * Updates the state of the app.
 */
export function updateState(){

    state.activeSection = null;
    state.sections.map(function(section){
        let isActive = utils.hasClass(section.item, ACTIVE);
        section.isActive = isActive;
        section.hasScroll = utils.hasClass(section.item, 'fp-overflow');
        if(isActive){
            state.activeSection = section;
        }

        if(section.slides.length){
            section.slides.map(function(slide){
                let isActiveSlide = utils.hasClass(slide.item, ACTIVE);
                slide.hasScroll = utils.hasClass(slide.item, 'fp-overflow');
                slide.isActive = isActiveSlide;
                if(isActiveSlide){
                    section.activeSlide = slide;
                }
            });

            // Hidding the active slide ?
            if(!section.activeSlide && section.slides.length){
                state.activeSlide = section.slides[0];
                state.activeSlide.isActive = true;
                utils.addClass(state.activeSlide.item, ACTIVE);
            }
        }
    });

    scrollToNewActiveSection();
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
    var prevActiveSectionItem = state.activeSection ? state.activeSection.item : null;
    if(prevActiveSectionItem){
        let panel = getPanelByElement(state.sectionsIncludingHidden, prevActiveSectionItem);
        g_prevActiveSectionIndex = panel ? panel.index() : 0;
    }

    state.numSections = sectionsItems.length;
    state.numSlides = sections.reduce( function(acc, section){
        return acc + section.slides.length;
    }, 0);
    state.sections = sections;

    state.sectionsIncludingHidden = allSections;
    state.slides = slides;
    state.panels = state.sections.concat(state.slides);
}

/**
 * When changes in the DOM take place there's a change 
 * the active section is now hidden or removed. 
 * fullPage.js will scroll to the closest section nearby.
 */
function scrollToNewActiveSection(){

    // Hidding / removing the active section ?
    if(!state.activeSection && state.sections.length && !getState().isBeyondFullpage){
        if(g_prevActiveSectionIndex != null){
            let newActiveSection;
            let prevIndex = g_prevActiveSectionIndex -1;
            let nextIndex = g_prevActiveSectionIndex +1;
            do{
                prevIndex = prevIndex - 1;
                nextIndex = nextIndex + 1;
                newActiveSection = state.sections[prevIndex] || state.sections[g_prevActiveSectionIndex + 1];
                if(newActiveSection){
                    break;
                }
            }while(prevIndex >= 0 || nextIndex < state.numSections);

            if(newActiveSection){
                state.activeSection = newActiveSection;  
                state.activeSection.isActive = true;
                utils.addClass(state.activeSection.item, ACTIVE);
            }           
        }
    }

    if(state.activeSection){
        silentScroll(state.activeSection.item.offsetTop);
    }
}


/**
* Section object
*/
export let SectionPanel = function(el){
    [].push.call(arguments, getOptions().sectionSelector);
    Item.apply(this, arguments);

    this.allSlidesItems = utils.$(getOptions().slideSelector, el);
    this.slides = Array.from(utils.getVisible(utils.$(getOptions().slideSelector, el))).map(item => new SlidePanel(item, this));
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
