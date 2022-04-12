import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { getState, setState } from '../common/state.js';
import { $body } from '../common/cache.js';
import {
    ACTIVE,
    ACTIVE_SEL,
    SECTION_NAV_SEL,
    SECTION_NAV, 
    SECTION_NAV_TOOLTIP,
    SHOW_ACTIVE_TOOLTIP
} from '../common/selectors.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { getBulletLinkName } from './getBulletLinkName.js';
import { doc } from '../common/constants.js';

export function tooltipTextHandler(){
    /*jshint validthis:true */
    utils.trigger(utils.prev(this), 'click');
}

/**
* Activating the vertical navigation bullets according to the given slide name.
*/
export function activateNavDots(name, sectionIndex){
    var nav = utils.$(SECTION_NAV_SEL)[0];
    if(getOptions().navigation && nav != null && nav.style.display !== 'none'){
        utils.removeClass(utils.$(ACTIVE_SEL, nav), ACTIVE);
        if(name){
            utils.addClass( utils.$('a[href="#' + name + '"]', nav), ACTIVE);
        }else{
            utils.addClass(utils.$('a', utils.$('li', nav)[sectionIndex]), ACTIVE);
        }
    }
}

/**
* Creates a vertical navigation bar.
*/
export function addVerticalNavigation(){
    utils.remove(utils.$(SECTION_NAV_SEL));

    var navigation = doc.createElement('div');
    navigation.setAttribute('id', SECTION_NAV);

    var divUl = doc.createElement('ul');
    navigation.appendChild(divUl);

    utils.appendTo(navigation, $body);
    var nav = utils.$(SECTION_NAV_SEL)[0];

    utils.addClass(nav, 'fp-' + getOptions().navigationPosition);

    if(getOptions().showActiveTooltip){
        utils.addClass(nav, SHOW_ACTIVE_TOOLTIP);
    }

    var li = '';

    for (var i = 0; i < getState().sections.length; i++) {
        var section = getState().sections[i];
        var link = '';
        if (getOptions().anchors.length) {
            link = section.anchor;
        }

        li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), 'Section') + '</span><span></span></a>';

        // Only add tooltip if needed (defined by user)
        var tooltip = getOptions().navigationTooltips[section.index()];

        if (typeof tooltip !== 'undefined' && tooltip !== '') {
            li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + getOptions().navigationPosition + '">' + tooltip + '</div>';
        }

        li += '</li>';
    }
    utils.$('ul', nav)[0].innerHTML = li;
    
    //activating the current active section
    var bullet = utils.$('li', utils.$(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
    utils.addClass(utils.$('a', bullet), ACTIVE);
}


//Scrolls to the section when clicking the navigation bullet
export function sectionBulletHandler(e){
    if(e.preventDefault){
        utils.preventDefault(e);
    }

    setState({scrollTrigger: 'verticalNav'});

    /*jshint validthis:true */
    // @ts-ignore
    var indexBullet = utils.index(utils.closest(this, SECTION_NAV_SEL + ' li'));

    EventEmitter.emit('scrollPage', {
        destination: getState().sections[indexBullet]
    });
}
