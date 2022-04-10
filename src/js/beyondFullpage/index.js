import * as utils from '../common/utils.js';
import { getPassiveOptionsIfPossible } from '../common/supportsPassive.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { onKeyDown, scrollBeyondFullPage } from '../beyondFullpage/scrollBeyondFullPage.js';
import { wheelDataHandler } from './wheelDataHandler.js';

EventEmitter.on('bindEvents', bindEvents);

function bindEvents(){
    utils.docAddEvent('wheel', wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
    EventEmitter.on('scrollBeyondFullpage', scrollBeyondFullPage);
    EventEmitter.on('onKeyDown', onKeyDown);

}

