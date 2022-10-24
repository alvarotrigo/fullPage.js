import * as utils from './common/utils.js';
import { setMouseHijack } from './mouse/wheel.js';
import { getOptions } from './common/options.js';
import { FP } from './common/constants.js';
import { EventEmitter } from './common/eventEmitter.js';
import { events } from './common/events.js';

let g_canFireMouseEnterNormalScroll = true;

EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){
    /**
    * Applying normalScroll elements.
    * Ignoring the scrolls over the specified selectors.
    */
    if(getOptions().normalScrollElements){
        ['mouseenter', 'touchstart'].forEach(function(eventName){
            forMouseLeaveOrTouch(eventName, false);
        });

        ['mouseleave', 'touchend'].forEach(function(eventName){
            forMouseLeaveOrTouch(eventName, true);
        });
    }

    EventEmitter.on(events.onDestroy, onDestroy);
}

function onDestroy(){
    ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName){
        utils.docRemoveEvent(eventName, onMouseEnterOrLeave, true); //true is required!
    });
}

function forMouseLeaveOrTouch(eventName, allowScrolling){
    //a way to pass arguments to the onMouseEnterOrLeave function
    document['fp_' + eventName] = allowScrolling;
    utils.docAddEvent(eventName, onMouseEnterOrLeave, true); //capturing phase
}

function onMouseEnterOrLeave(e) {
    var type = e.type;
    var isInsideOneNormalScroll = false;

    //onMouseLeave will use the destination target, not the one we are moving away from
    var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target;

    //coming from closing a normalScrollElements modal or moving outside viewport?
    if(target == document || !target){
        setMouseHijack(true);

        return;
    }

    if(type === 'touchend'){
        g_canFireMouseEnterNormalScroll = false;
        setTimeout(function(){
            g_canFireMouseEnterNormalScroll = true;
        }, 800);
    }

    //preventing mouseenter event to do anything when coming from a touchEnd event
    //fixing issue #3576
    if(type === 'mouseenter' && !g_canFireMouseEnterNormalScroll){
        return;
    }

    var normalSelectors = getOptions().normalScrollElements.split(',');

    normalSelectors.forEach(function(normalSelector){
        if(!isInsideOneNormalScroll){
            var isNormalScrollTarget = utils.matches(target, normalSelector);

            //leaving a child inside the normalScoll element is not leaving the normalScroll #3661
            var isNormalScrollChildFocused = utils.closest(target, normalSelector);

            if(isNormalScrollTarget || isNormalScrollChildFocused){
                if(!FP.shared.isNormalScrollElement){
                    setMouseHijack(false);
                }
                FP.shared.isNormalScrollElement = true;
                isInsideOneNormalScroll = true;
            }
        }
    });

    //not inside a single normal scroll element anymore?
    if(!isInsideOneNormalScroll && FP.shared.isNormalScrollElement){
        setMouseHijack(true);

        FP.shared.isNormalScrollElement = false;
    }
}