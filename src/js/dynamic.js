import * as utils from './common/utils.js';
import { getContainer, getOptions, setOptionsFromDOM } from './common/options.js';
import { getState, state } from './common/state.js';
import { updateState, updateStructuralState } from './stateUpdates.js';
import { addInternalSelectors } from './dom/addInternalSelectors.js';
import { addVerticalNavigation } from './nav/sections.js';
import { styleSlides } from './slides/styleSlides.js';
import { 
    SECTION_NAV_SEL, 
    SLIDES_NAV_SEL,
    WRAPPER_SEL,
    SLIDES_ARROW_SEL
} from './common/selectors.js';
import { EventEmitter } from './common/eventEmitter.js';
import { FP } from './common/constants.js';
import { styleSection } from './sections.js';
import { events } from './common/events.js';

let g_wrapperObserver;
const g_wrapperObserveConfig = {
    attributes: false,
    subtree:true,
    childList: true,
    characterData: true
};

EventEmitter.on(events.bindEvents, bindEvents);

FP["render"] = onContentChange;

function bindEvents(){    
    if(getOptions().observer && 
        "MutationObserver" in window &&
        utils.$(WRAPPER_SEL)[0]){
        g_wrapperObserver = createObserver(utils.$(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
    }
    EventEmitter.on(events.contentChanged, onContentChange);
}

/**
 * Creates a Mutation observer.
 */
function createObserver(target, callback, config) {
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
    return observer;
}

function didSlidesChange(){
    return utils.getVisible(utils.$(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
}

function didSectionsChange(){
    return utils.getVisible(utils.$(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
}

function didSectionsOrSlidesChange(){
    return didSlidesChange() || didSectionsChange();
}

/**
 * Listen to changes on sections and fires reBuild
 * when those changes affect the section height.
 */
function onContentChange(mutations){
    var _didSlidesChange = didSlidesChange();

    if( didSectionsOrSlidesChange() && !state.isDoingContinousVertical){
        if(getOptions().observer && g_wrapperObserver){
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

        if(getOptions().navigation){
            addVerticalNavigation();
        }
        
        if(_didSlidesChange){
            utils.remove(utils.$(SLIDES_NAV_SEL));
            utils.remove(utils.$(SLIDES_ARROW_SEL));
        }

        getState().sections.forEach(function(section){
            if(section.slides.length){
                if(_didSlidesChange){
                    styleSlides(section);
                }
            }else{
                styleSection(section);
            }
        });
    }

    if(getOptions().observer && g_wrapperObserver && utils.$(WRAPPER_SEL)[0]){
        g_wrapperObserver.observe(utils.$(WRAPPER_SEL)[0], g_wrapperObserveConfig);
    }
}