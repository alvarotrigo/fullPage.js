import * as utils from '../common/utils.js';
import { getOptions, getContainer } from '../common/options.js';
import { nullOrSection } from './nullOrSection.js';
import { nullOrSlide } from './nullOrSlide.js';
import { getState } from '../common/state.js';

/**
* Dispatch events & callbacks
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
* Gets the event's data for the given event on the right format.
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
                position: v.position,
                direction: v.direction
            };
        }
    };

    return paramsPerEvent[eventName]();
}
