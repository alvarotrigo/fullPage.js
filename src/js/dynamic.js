import * as utils from './common/utils.js';
import { getOptions, setOptionsFromDOM } from './options.js';
import { updateState, updateStructuralState } from './stateUpdates.js';
import { getState } from './state.js';
import {  addInternalSelectors } from './dom.js';
import { addVerticalNavigation } from './nav.js';
import { styleSlides } from './slides.js';
import { 
    SECTION_NAV_SEL, 
    SLIDES_NAV_SEL,
    WRAPPER_SEL,
    SLIDES_ARROW_SEL
} from './common/selectors.js';

let g_wrapperObserver;
const g_wrapperObserveConfig = {
    attributes: false,
    subtree:true,
    childList: true,
    characterData: true
};

export function setWrapperObserver(value){
    g_wrapperObserver = value;
}

export function getWrapperObserver(){
    return g_wrapperObserveConfig;
}

/**
 * Creates a Mutation observer.
 */
export function createObserver(target, callback, config) {
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
    return observer;
}

function didSlidesChange(){
    return utils.getVisible(utils.$(getOptions().slideSelector)).length !== getState().numSlides;
}

function didSectionsChange(){
    return utils.getVisible(utils.$(getOptions().sectionSelector)).length !== getState().numSections;
}

function didSectionsOrSlidesChange(){
    return didSlidesChange() || didSectionsChange();
}

/**
 * Listen to changes on sections and fires reBuild
 * when those changes affect the section height.
 */
export function onContentChange(mutations){
    var _didSlidesChange = didSlidesChange();

    if( didSectionsOrSlidesChange()){
        if(getOptions().observer){
            // Temporally disabling the observer while 
            // we modidy the DOM again
            g_wrapperObserver.disconnect();
        }
        updateStructuralState();
        updateState();

        // Removing navs and anchors options
        getOptions().anchors = [];
        utils.remove(utils.$(SECTION_NAV_SEL));

        addInternalSelectors();
        setOptionsFromDOM();
        addVerticalNavigation();
        
        if(_didSlidesChange){
            utils.remove(utils.$(SLIDES_NAV_SEL));
            utils.remove(utils.$(SLIDES_ARROW_SEL));

            getState().sections.forEach(function(section){
                if(section.slides.length){
                    styleSlides(section);
                }
            });
        }
    }

    if(getOptions().observer){
        g_wrapperObserver.observe(utils.$(WRAPPER_SEL)[0], g_wrapperObserveConfig);
    }
}