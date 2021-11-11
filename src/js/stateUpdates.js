import * as utils from './common/utils.js';
import { getOptions, getContainer } from './options.js';
import { Item } from './item.js';
import {
    ACTIVE
} from './common/selectors.js';
import { state } from './state.js';

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

    // Hidding the active section ?
    if(!state.activeSection && state.sections.length && !getState().isBeyondFullpage){
        state.activeSection = state.sections[0];
        state.activeSection.isActive = true;
        utils.addClass(state.activeSection.item, ACTIVE);
        //scrollPage(state.activeSection);
    }
}

export function updateStructuralState(){
    var sectionsItems = utils.getVisible(utils.$(getOptions().sectionSelector, getContainer()));
    var allSections = Array.from(sectionsItems).map( item => new SectionPanel(item));
    var sections = allSections.filter( item => item.isVisible);
    var slides = sections.reduce(function(acc, section){
        return acc.concat(section.slides);
    }, []);

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
export let SlidePanel = function(el, section){
    this.parent = section;
    Item.call(this, el, getOptions().slideSelector);
};

SlidePanel.prototype = Item.prototype;
SlidePanel.prototype.constructor = SectionPanel;
