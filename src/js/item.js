import * as utils from './common/utils.js';
import { getOptions } from './options.js';
import { state } from './state.js';
import { 
    ACTIVE,
    SLIDES_CONTAINER_SEL,
    WRAPPER_SEL
 } from './common/selectors.js';
export const plainItem = function(panel){
    this.anchor = panel.anchor;
    this.item = panel.item;
    this.index = panel.index();
    this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length -1;
    this.isFirst = !this.index;
    this.isActive = panel.isActive;
};


/**
* Item. Slide or Section objects share the same properties.
*/
export const Item = function(el, selector){
    this.selector = selector;
    this.anchor = el.getAttribute('data-anchor') || getOptions().anchors[utils.index(el, getOptions().sectionSelector)];
    this.item = el;
    this.isVisible = utils.isVisible(el);
    this.isActive = utils.hasClass(el, ACTIVE);
    this.hasScroll = utils.hasClass(el, 'fp-overflow');
    this.isSection = selector === getOptions().sectionSelector;
    this.container = utils.closest(el, SLIDES_CONTAINER_SEL) || utils.closest(el, WRAPPER_SEL);
    this.index = function(){
        if(this.isSection){
            return state.sections.indexOf(this);
        }else if(this.parent.slides){
            return this.parent.slides.indexOf(this);
        } 
        return 0;
    };
};



Item.prototype.siblings = function(){
    return this.isSection ? state.sections : this.parent.slides;
};

Item.prototype.prev = function(){
    var siblings = this.siblings();
    var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
    var prevIndex = currentIndex - 1;
    if(prevIndex >= 0){
        return siblings[prevIndex];
    }
    return null;
};

Item.prototype.next = function(){
    var siblings = this.siblings();
    var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
    var nextIndex = currentIndex + 1;
    if(nextIndex < siblings.length){
        return siblings[nextIndex];
    }
    return null;            
};

Item.prototype.getSiblings = function(){
    if(this.isSection){
        return state.sections;
    }
    return state.panels;
};

export function getNodes(panels){
    return panels.map(panel => panel.item);
}

export function getPanelByElement(panels, el){
    return panels.find(function(panel){
        return panel.item === el;
    });
}

export const Section = function(el){
    plainItem.call(this, el);
};

export const Slide = function(el){
    plainItem.call(this, el);
};