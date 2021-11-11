import * as utils from './common/utils.js';
import { getOptions } from './options.js';
import { getState, setState } from './state.js';
import { $body } from './common/constants.js';
import {
    ACTIVE,
    ACTIVE_SEL,
    SECTION_NAV_SEL,
    SECTION_NAV, 
    SECTION_NAV_TOOLTIP,
    SHOW_ACTIVE_TOOLTIP,
    SLIDES_NAV_SEL,
    SLIDES_NAV,
    SLIDE_SEL
} from './common/selectors.js';

/**
* Activating the vertical navigation bullets according to the given slide name.
*/
export function activateNavDots(name, sectionIndex){
    if(getOptions().navigation && utils.$(SECTION_NAV_SEL)[0] != null){
        utils.removeClass(utils.$(ACTIVE_SEL, utils.$(SECTION_NAV_SEL)[0]), ACTIVE);
        if(name){
            utils.addClass( utils.$('a[href="#' + name + '"]', utils.$(SECTION_NAV_SEL)[0]), ACTIVE);
        }else{
            utils.addClass(utils.$('a', utils.$('li', utils.$(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
        }
    }
}

/**
* Sets the state for the horizontal bullet navigations.
*/
export function activeSlidesNavigation(slidesNav, slideIndex){
    if(getOptions().slidesNavigation && slidesNav != null){
        utils.removeClass(utils.$(ACTIVE_SEL, slidesNav), ACTIVE);
        utils.addClass( utils.$('a', utils.$('li', slidesNav)[slideIndex] ), ACTIVE);
    }
}

/**
* Creates a vertical navigation bar.
*/
export function addVerticalNavigation(){
    utils.remove(utils.$(SECTION_NAV_SEL));

    var navigation = document.createElement('div');
    navigation.setAttribute('id', SECTION_NAV);

    var divUl = document.createElement('ul');
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

        li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), 'Section') + '</span><span></span></a>';

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

/**
* Gets the name for screen readers for a section/slide navigation bullet.
*/
function getBulletLinkName(i, defaultName, item){
    var anchor = defaultName === 'Section' ? getOptions().anchors[i] : item.getAttribute('data-anchor');
    return getOptions().navigationTooltips[i]
        || anchor
        || defaultName + ' ' + (i+1);
}

//Scrolls to the section when clicking the navigation bullet
export function sectionBulletHandler(e){
    utils.preventDefault(e);

    setState('scrollTrigger', 'verticalNav');

    /*jshint validthis:true */
    var indexBullet = utils.index(utils.closest(this, SECTION_NAV_SEL + ' li'));

    utils.trigger('fp:scrollPage', {destination: getState().sections[indexBullet]});
}


/**
* Creates a landscape navigation bar with dots for horizontal sliders.
*/
export function addSlidesNavigation(section){
    var sectionElem = section.item;
    var numSlides = section.slides.length;
    utils.appendTo(utils.createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
    var nav = utils.$(SLIDES_NAV_SEL, sectionElem)[0];

    //top or bottom
    utils.addClass(nav, 'fp-' + getOptions().slidesNavPosition);

    for(var i=0; i< numSlides; i++){
        var slide = utils.$(SLIDE_SEL, sectionElem)[i];
        utils.appendTo(utils.createElementFromHTML('<li><a href="#"><span class="fp-sr-only">'+ getBulletLinkName(i, 'Slide', slide) +'</span><span></span></a></li>'), utils.$('ul', nav)[0] );
    }

    //centering it
    utils.css(nav, {'margin-left': '-' + (nav.innerWidth/2) + 'px'});

    utils.addClass(utils.$('a', utils.$('li', nav)[0] ), ACTIVE);
}

export function tooltipTextHandler(){
    /*jshint validthis:true */
    utils.trigger(utils.prev(this), 'click');
}