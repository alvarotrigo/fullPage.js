import * as utils from './common/utils.js';
import { getOptions } from './options.js';
import { activateNavDots } from './nav.js';
import { $body } from './common/constants.js';
import {
    ACTIVE,
    ACTIVE_SEL,
    WRAPPER_SEL
} from './common/selectors.js';

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
    utils.$(getOptions().menu).forEach(function(menu) {
        if(getOptions().menu && menu != null){
            utils.removeClass(utils.$(ACTIVE_SEL, menu), ACTIVE);
            utils.addClass(utils.$('[data-menuanchor="'+name+'"]', menu), ACTIVE);
        }
    });
}

//Menu item handler when not using anchors or using lockAnchors:true
export function menuItemsHandler(e){
    if(utils.$(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)){
        utils.preventDefault(e);
        /*jshint validthis:true */
        utils.trigger('fp:onMenuClick', {anchor: this.getAttribute('data-menuanchor')});

    }
}

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