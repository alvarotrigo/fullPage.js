import * as utils from '../common/utils.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { scrollHandler } from './scrollHandler.js';
import { scrollPageAndSlide } from './scrollPageAndSlide.js';
import { moveTo } from './moveTo.js';
import { moveSectionDown } from './moveSectionDown.js';
import { moveSectionUp } from './moveSectionUp.js';
import { scrollPage } from './scrollPage.js';

EventEmitter.on('bindEvents', bindEvents);
EventEmitter.on('onDestroy', onDestroy);

function onDestroy(){
    utils.windowRemoveEvent('scroll', scrollHandler);
}

function bindEvents(){
    utils.windowAddEvent('scroll', scrollHandler);
    document.body.addEventListener('scroll', scrollHandler);
    console.log("adding... onScrollPageAndSlide ");
    EventEmitter.on('onScrollPageAndSlide', function(params){
        console.log("on onScrollPageAndSlide...");
        scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
    });

    EventEmitter.on('onMenuClick', function(params){
        moveTo(params.anchor, undefined);
    });

    EventEmitter.on('onScrollOverflowScrolled', function(params){
        var scrollSection = (params.direction === 'down') ? moveSectionDown : moveSectionUp;
        scrollSection();
    });

    EventEmitter.on('scrollPage', function(params){
        scrollPage(params.destination);
    });
}