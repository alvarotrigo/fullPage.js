import * as utils from '../common/utils.js';
import { FP } from '../common/constants.js';
import { getState, state } from '../common/state.js';
import { getOptions} from '../common/options.js';
import { playMedia } from '../media.js';
import { fireCallback } from '../callbacks/fireCallback.js';
import { lazyLoadPanels } from '../lazyLoad/lazyLoad.js';
import { lazyLoadOthers } from '../lazyLoad/lazyLoadOthers.js';
import { 
    COMPLETELY,
} from '../common/selectors.js';
import { getAnchorsURL } from '../anchors/getAnchorsURL.js';
import { getStartingSection } from '../sections.js';
import { getSectionByAnchor } from '../common/getSectionByAnchor.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';

FP.shared.afterRenderActions = afterRenderActions;

/**
* Actions and callbacks to fire afterRender
*/
export function afterRenderActions(){
    var section = getState().activeSection;
    var sectionElem = getState().activeSection.item;

    utils.addClass(sectionElem, COMPLETELY);

    lazyLoadPanels(getState().activeSection);
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


/**
* Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
*/
function isDestinyTheStartingSection(){
    var anchor = getAnchorsURL();
    var destinationSection = getSectionByAnchor(anchor.section);
    return !anchor.section || !destinationSection || typeof destinationSection !=='undefined' && destinationSection.index() === utils.index(getStartingSection());
}