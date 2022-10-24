import * as utils from './common/utils.js';
import { getOptions } from './common/options.js'; 
import { 
    SLIDES_WRAPPER_SEL,
    SLIDES_ARROW,
    SLIDES_PREV,
    SLIDES_NEXT,
    SLIDES_ARROW_NEXT_SEL,
    SLIDES_ARROW_PREV_SEL,
    SLIDES_ARROW_SEL,
    SECTION_SEL, 
 } from './common/selectors.js';
import { getIsScrollAllowed } from './common/isScrollAllowed.js';
import { setState } from './common/state.js';
import { EventEmitter } from './common/eventEmitter.js';
import { events } from './common/events.js';

EventEmitter.on(events.onClickOrTouch, onClickOrTouch);

function onClickOrTouch(params){
    var target = params.target;
    if(utils.matches(target, SLIDES_ARROW_SEL) || utils.closest(target, SLIDES_ARROW_SEL)){
        slideArrowHandler.call(target, params);
    }
}


//Scrolling horizontally when clicking on the slider controls.
function slideArrowHandler(){
    /*jshint validthis:true */
    var section = utils.closest(this, SECTION_SEL);

    /*jshint validthis:true */
    if (utils.hasClass(this, SLIDES_PREV)) {
        if(getIsScrollAllowed().m.left){
            setState({scrollTrigger: 'slideArrow'});
            EventEmitter.emit(events.moveSlideLeft, {section: section});
        }
    } else {
        if(getIsScrollAllowed().m.right){
            setState({scrollTrigger: 'slideArrow'});
            EventEmitter.emit(events.moveSlideRight, {section: section});
        }
    }
}

/**
* Creates the control arrows for the given section
*/
export function createSlideArrows(section){
    var sectionElem = section.item;
    var arrows = [utils.createElementFromHTML(getOptions().controlArrowsHTML[0]), utils.createElementFromHTML(getOptions().controlArrowsHTML[1])];
    utils.after(utils.$(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
    utils.addClass(arrows, SLIDES_ARROW);
    utils.addClass(arrows[0], SLIDES_PREV);
    utils.addClass(arrows[1], SLIDES_NEXT);

    if(getOptions().controlArrowColor !== '#fff'){
        utils.css(utils.$(SLIDES_ARROW_NEXT_SEL, sectionElem), {'border-color': 'transparent transparent transparent '+getOptions().controlArrowColor});
        utils.css(utils.$(SLIDES_ARROW_PREV_SEL, sectionElem), {'border-color': 'transparent '+ getOptions().controlArrowColor + ' transparent transparent'});
    }

    if(!getOptions().loopHorizontal){
        utils.hide(utils.$(SLIDES_ARROW_PREV_SEL, sectionElem));
    }
}

export function toggleControlArrows(v){
    if(!getOptions().loopHorizontal && getOptions().controlArrows){
        //hidding it for the fist slide, showing for the rest
        utils.toggle(utils.$(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex!==0);

        //hidding it for the last slide, showing for the rest
        utils.toggle(utils.$(SLIDES_ARROW_NEXT_SEL, v.section), utils.next(v.destiny) != null);
    }
}