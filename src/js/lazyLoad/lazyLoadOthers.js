import * as utils from '../common/utils.js'; 
import { getOptions } from '../common/options.js';
import { 
    AUTO_HEIGHT_SEL,
    AUTO_HEIGHT_RESPONSIVE_SEL,
    SECTION_SEL,
    ACTIVE_SEL
} from '../common/selectors.js';
import { getState, state } from '../common/state.js';
import { isResponsiveMode } from '../responsive.js';
import { lazyLoadPanels } from './lazyLoad.js';
import { getPanelByElement } from '../common/item.js';

/**
* Makes sure lazyload is done for other sections in the viewport that are not the
* active one. 
*/
export function lazyLoadOthers(){
    var hasAutoHeightSections = utils.$(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && utils.$(AUTO_HEIGHT_RESPONSIVE_SEL)[0];

    //quitting when it doesn't apply
    if (!getOptions().lazyLoading || !hasAutoHeightSections){
        return;
    }

    //making sure to lazy load auto-height sections that are in the viewport
    utils.$(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function(section){
        if(isSectionInViewport(section)){
            lazyLoadPanels(getPanelByElement(getState().sections, section));
        }
    });
}


/**
* Determines whether a section is in the viewport or not.
*/
function isSectionInViewport (el) {
    var rect = el.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;

    //sometimes there's a 1px offset on the bottom of the screen even when the 
    //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
    //using this prevents from lazyLoading the section that is not yet visible 
    //(only 1 pixel offset is)
    var pixelOffset = 2;
    
    var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
    var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;

    return isTopInView || isBottomInView;
}
