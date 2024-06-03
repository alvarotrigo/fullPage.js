import * as utils from '../common/utils.js';
import { getOptions } from '../common/options.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { setState } from '../common/state.js';
import { events } from '../common/events.js';
import { closest } from '../common/utils.js';

EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    EventEmitter.on(events.onClickOrTouch, onClickOrTouch);
}

function onClickOrTouch(params){
    var target = params.target;
    
    if(utils.closest(target, getOptions().menu + ' [data-menuanchor]')){
        menuItemsHandler.call(target, params.e);
    }
}


//Menu item handler when not using anchors or using lockAnchors:true
function menuItemsHandler(e){
    setState({scrollTrigger: 'menu'});

    if(utils.$(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)){
        utils.preventDefault(e);

        const menuAnchorEl = closest(this, '[data-menuanchor]');

        /*jshint validthis:true */
        EventEmitter.emit(events.onMenuClick, {
            anchor: utils.getAttr(menuAnchorEl, 'data-menuanchor')
        });
    }
}
