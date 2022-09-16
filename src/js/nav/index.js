import * as utils from '../common/utils.js';
import {
    SECTION_NAV_SEL,
    SECTION_NAV_TOOLTIP_SEL,
    SLIDES_NAV_LINK_SEL,
} from '../common/selectors.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { slideBulletHandler } from './slides.js';
import { sectionBulletHandler, tooltipTextHandler } from './sections.js';
import { events } from '../common/events.js';

EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    EventEmitter.on(events.onClickOrTouch, onClickOrTouch);
}

function onClickOrTouch(params){
    var target = params.target;
    
    if(target && utils.closest(target, SECTION_NAV_SEL + ' a')){
        sectionBulletHandler.call(target, params.e);
    }

    else if(utils.matches(target, SECTION_NAV_TOOLTIP_SEL)){
        tooltipTextHandler.call(target);
    }

    else if(utils.matches(target, SLIDES_NAV_LINK_SEL) || utils.closest(target, SLIDES_NAV_LINK_SEL) != null){
        slideBulletHandler.call(target, params.e);
    }
}