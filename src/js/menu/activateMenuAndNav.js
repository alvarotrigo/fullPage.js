import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { activateNavDots } from '../nav/sections.js';
import {
    ACTIVE,
    ACTIVE_SEL,
} from '../common/selectors.js';

/**
* Sets to active the current menu and vertical nav items.
*/
export function activateMenuAndNav(anchor, index){
    activateMenuElement(anchor);
    activateNavDots(anchor, index);
}

/**
* Activating the website main menu elements according to the given slide name.
*/
function activateMenuElement(name){
    if(getOptions().menu && getOptions().menu.length){
        utils.$(getOptions().menu).forEach(function(menu) {
            if(menu != null){
                utils.removeClass(utils.$(ACTIVE_SEL, menu), ACTIVE);
                utils.addClass(utils.$('[data-menuanchor="'+name+'"]', menu), ACTIVE);
            }
        });
    }
}