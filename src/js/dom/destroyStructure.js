import * as utils from '../common/utils.js';
import { removeAnimation } from '../common/utilsFP.js';
import { silentScroll } from '../common/silentScroll.js';
import { $html, $htmlBody, $body } from '../common/cache.js';
import { getState, resetState } from '../common/state.js';
import { getOptions, getContainer, getInitialAnchorsInDom } from '../common/options.js';
import { getNodes } from '../common/item.js';
import { 
    ENABLED,
    SECTION,
    SLIDE,
    COMPLETELY,
    SLIDES_NAV_SEL,
    RESPONSIVE,
    TABLE,
    ACTIVE,
    TABLE_CELL_SEL,
    VIEWING_PREFIX,
    SECTION_NAV_SEL,
    SLIDES_CONTAINER,
    SLIDES_CONTAINER_SEL,
    SLIDES_WRAPPER_SEL,
    SLIDES_ARROW_SEL,
    IS_OVERFLOW,
    SCROLLABLE,
    WRAPPER,
    WATERMARK_SEL,
    LOADED
} from '../common/selectors.js';
import { win } from '../common/constants.js';
import { scrollOverflowHandler } from '../scrolloverflow.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';

/*
* Removes inline styles added by fullpage.js
*/
export function destroyStructure(){
    //reseting the `top` or `translate` properties to 0
    silentScroll(0);

    //loading all the lazy load content
    utils.$('img[data-src], source[data-src], audio[data-src], iframe[data-src]', getContainer()).forEach(function(item){
        utils.setSrc(item, 'src');
    });

    utils.$('img[data-srcset]').forEach(function(item){
        utils.setSrc(item, 'srcset');
    });

    utils.remove(utils.$(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL + ', ' + WATERMARK_SEL));

    //removing inline styles
    utils.css(getNodes(getState().sections), {
        'height': '',
        'background-color' : '',
        'padding': ''
    });

    utils.css(getNodes(getState().slides), {
        'width': ''
    });

    utils.css(getContainer(), {
        'height': '',
        'position': '',
        '-ms-touch-action': '',
        'touch-action': ''
    });

    utils.css($htmlBody, {
        'overflow': '',
        'height': ''
    });

    // remove .fp-enabled class
    utils.removeClass($html, ENABLED);

    // remove .fp-responsive class & .fp-scrollable
    utils.removeClass($body, RESPONSIVE + ' ' + SCROLLABLE);

    // remove all of the .fp-viewing- classes
    $body.className.split(/\s+/).forEach(function (className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
            utils.removeClass($body, className);
        }
    });

    //removing added classes
    getNodes(getState().panels).forEach(function(item){
        if(getOptions().scrollOverflow){
            scrollOverflowHandler.destroyWrapper(item);
        }

        utils.removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY + ' ' + IS_OVERFLOW + ' ' + LOADED);
        var previousStyles = utils.getAttr(item, 'data-fp-styles');
        if(previousStyles){
            item.setAttribute('style', previousStyles);
        }

        //removing anchors if they were not set using the HTML markup
        if(utils.hasClass(item, SECTION) && !getInitialAnchorsInDom()){
            item.removeAttribute('data-anchor');
        }
    });

    //removing the applied transition from the fullpage wrapper
    removeAnimation(getContainer());

    //Unwrapping content
    [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL,SLIDES_WRAPPER_SEL].forEach(function(selector){
        utils.$(selector, getContainer()).forEach(function(item){
            //unwrap not being use in case there's no child element inside and its just text
            utils.unwrap(item);
        });
    });

    //removing the applied transition from the fullpage wrapper
    utils.css(getContainer(), {
        '-webkit-transition': 'none',
        'transition': 'none'
    });

    utils.removeClass(getContainer(), WRAPPER);

    //scrolling the page to the top with no animation
    win.scrollTo(0, 0);

    //removing selectors
    var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
    usedSelectors.forEach(function(item){
        utils.removeClass(utils.$('.' + item), item);
    });

    resetState();

    EventEmitter.emit(events.onDestroyAll);
}