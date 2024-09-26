import * as utils from './common/utils.js';
import { getState } from './common/state.js';
import { $body } from './common/cache.js';
import { VIEWING_PREFIX } from './common/selectors.js';

/**
* Sets a class for the body of the page depending on the active section / slide
*/
export function setBodyClass(){
    var section = getState().activeSection.item;
    var slide = getState().activeSection.activeSlide;

    var sectionAnchor = getAnchor(section);
    var text = String(sectionAnchor);

    if(slide){
        var slideAnchor = getAnchor(slide.item);
        text = text + '-' + slideAnchor;
    }

    //changing slash for dash to make it a valid CSS style
    text = text.replace('/', '-').replace('#','').replace(/\s/g, '');

    //removing previous anchor classes
    var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
    $body.className = $body.className.replace(classRe, '');

    //adding the current anchor
    utils.addClass($body, VIEWING_PREFIX + '-' + text);
}

/**
* Gets the anchor for the given slide / section. Its index will be used if there's none.
*/
function getAnchor(element){
    if(!element){
        return null;
    }
    var anchor = utils.getAttr(element, 'data-anchor');
    var elementIndex = utils.index(element);

    //Slide without anchor link? We take the index instead.
    if(anchor == null){
        anchor = elementIndex;
    }

    return anchor;
}