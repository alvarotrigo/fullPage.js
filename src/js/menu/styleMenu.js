import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { $body } from '../common/cache.js';
import { WRAPPER_SEL } from '../common/selectors.js';
import { activateMenuAndNav } from './activateMenuAndNav.js';

/**
* Sets the data-anchor attributes to the menu elements and activates the current one.
*/
export function styleMenu(section){
    var index = section.index();

    if (typeof getOptions().anchors[index] !== 'undefined') {
        //activating the menu / nav element on load
        if(section.isActive){
            activateMenuAndNav(getOptions().anchors[index], index);
        }
    }

    //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
    if(getOptions().menu && getOptions().css3 && utils.closest(utils.$(getOptions().menu)[0], WRAPPER_SEL) != null){
        utils.$(getOptions().menu).forEach(function(menu) {
            $body.appendChild(menu);
        });
    }
}