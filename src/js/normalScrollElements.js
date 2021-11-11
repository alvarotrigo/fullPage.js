import * as utils from './common/utils.js';
import { setMouseHijack } from './wheel.js';
import { getOptions } from './options.js';
import { FP } from './common/constants.js';

let g_canFireMouseEnterNormalScroll = true;

export function forMouseLeaveOrTouch(eventName, allowScrolling){
    //a way to pass arguments to the onMouseEnterOrLeave function
    document['fp_' + eventName] = allowScrolling;
    document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
}

export function onMouseEnterOrLeave(e) {
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