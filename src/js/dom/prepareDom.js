import * as utils from '../common/utils.js';
import { $html, $body } from '../common/cache.js';
import { addTableClass } from '../common/addTableClass.js';
import { getState, setState } from '../common/state.js';
import { getOptions, getContainer } from '../common/options.js';
import { styleSection } from '../sections.js';
import { styleSlides } from '../slides/styleSlides.js';
import { styleMenu } from '../menu/styleMenu.js';
import { addVerticalNavigation } from '../nav/sections.js';
import { enableYoutubeAPI } from '../media.js';
import { scrollOverflowHandler } from '../scrolloverflow.js';
import { 
    WRAPPER,
    ENABLED,
    DESTROYED
} from '../common/selectors.js';
import { addInternalSelectors } from './addInternalSelectors.js';

/**
* Works over the DOM structure to set it up for the current fullpage getOptions().
*/
export function prepareDom(){
    
    utils.css(utils.getParentsUntil(getContainer(), 'body'), {
        'height': '100%',
        'position': 'relative'
    });

    //adding a class to recognize the container internally in the code
    utils.addClass(getContainer(), WRAPPER);
    utils.addClass($html, ENABLED);

    //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
    setState({windowsHeight: utils.getWindowHeight()});

    utils.removeClass(getContainer(), DESTROYED); //in case it was destroyed before initializing it again

    addInternalSelectors();

    var sections = getState().sectionsIncludingHidden;

    //styling the sections / slides / menu
    for(var i = 0; i<sections.length; i++){
        var sectionIndex = i;
        var section = sections[i];
        var slides = section.allSlidesItems;

        //caching the original styles to add them back on destroy('all')
        section.item.setAttribute('data-fp-styles', utils.getAttr(section.item, 'style'));

        styleSection(section);
        styleMenu(section);

        // if there's any slide
        if (slides.length > 0) {
            styleSlides(section);
        }
    }

    //fixed elements need to be moved out of the plugin container due to problems with CSS3.
    if(getOptions().fixedElements && getOptions().css3){
        utils.$(getOptions().fixedElements).forEach(function(item){
            $body.appendChild(item);
        });
    }

    //vertical centered of the navigation + active bullet
    if(getOptions().navigation){
        addVerticalNavigation();
    }

    enableYoutubeAPI();
}
