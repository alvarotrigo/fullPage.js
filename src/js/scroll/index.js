import * as utils from '../common/utils.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { scrollHandler } from './scrollHandler.js';
import { scrollPageAndSlide } from './scrollPageAndSlide.js';
import { moveTo } from './moveTo.js';
import { moveSectionDown } from './moveSectionDown.js';
import { moveSectionUp } from './moveSectionUp.js';
import { scrollPage } from './scrollPage.js';
import { doc } from '../common/constants.js';
import { events } from '../common/events.js';

EventEmitter.on(events.bindEvents, bindEvents);
EventEmitter.on(events.onDestroy, onDestroy);

function onDestroy(){
    utils.windowRemoveEvent('scroll', scrollHandler);
}

function bindEvents(){
    utils.windowAddEvent('scroll', scrollHandler);
    doc.body.addEventListener('scroll', scrollHandler);

    EventEmitter.on(events.onScrollPageAndSlide, function(params){
        scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
    });

    EventEmitter.on(events.onMenuClick, function(params){
        moveTo(params.anchor, undefined);
    });

    EventEmitter.on(events.onScrollOverflowScrolled, function(params){
        var scrollSection = (params.direction === 'down') ? moveSectionDown : moveSectionUp;
        scrollSection();
    });

    EventEmitter.on(events.scrollPage, function(params){
        scrollPage(params.destination);
    });
}