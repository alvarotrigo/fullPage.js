import * as utils from './common/utils.js';
import { getOptions, getContainer } from './options.js';
import { oncePerScroll } from './tick.js';
import { getState } from './state.js';
import { Slide, Section} from './item.js';

/**
* Fires the wheel event once per mouse wheel trigger.
*/
export function fireCallbackOncePerScroll(callbackName, params){
    if(!utils.isFunction( getOptions().beforeLeave)){
        return;
    }

    const result = oncePerScroll(getState().scrollTrigger, function(){
        return fireCallback(callbackName, params);
    });

    return result;
}

/**
* Dispatch events & callbacks making sure it does it on the right format, depending on
* whether v2compatible is being used or not.
*/
export function fireCallback(eventName, v){
    var eventData = getEventData(eventName, v);
    utils.trigger(getContainer(), eventName, eventData);

    if(getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], utils.toArray(eventData)) === false){
        return false;
    }
    return true;
}


/**
* Gets the event's data for the given event on the right format. Depending on whether
* v2compatible is being used or not.
*/
function getEventData(eventName, v){

    //using functions to run only the necessary bits within the object
    var paramsPerEvent = {
        afterRender: function(){
            return {
                section: nullOrSection(getState().activeSection),
                slide: nullOrSlide(getState().activeSection.activeSlide)
            };
        },
        onLeave: function(){
            return {
                origin: nullOrSection(v.items.origin),
                destination: nullOrSection(v.items.destination),
                direction: v.direction,
                trigger: getState().scrollTrigger
            };
        },

        afterLoad: function(){
            return paramsPerEvent.onLeave();
        },

        afterSlideLoad: function(){
            return {
                section: nullOrSection(v.items.section),
                origin: nullOrSection(v.items.origin),
                destination: nullOrSection(v.items.destination),
                direction: v.direction,
                trigger: getState().scrollTrigger
            };
        },

        onSlideLeave: function(){
            return paramsPerEvent.afterSlideLoad();
        },

        beforeLeave: function(){ 
            return paramsPerEvent.onLeave();
        },

        onScrollOverflow: function(){
            return {
                section: nullOrSection(getState().activeSection),
                slide: nullOrSlide(getState().activeSection.activeSlide),
                position: v.position
            };
        }
    };

    return paramsPerEvent[eventName]();
}

/**
* Makes sure to only create a Panel object if the element exist
*/
export function nullOrSection(el){
    return el ? new Section(el) : null;
}

export function nullOrSlide(el){
    return el ? new Slide(el) : null;
}