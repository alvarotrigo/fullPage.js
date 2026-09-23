import * as utils from '../common/utils.js';
import { getState } from "../common/state.js";
import { setPrevTime } from '../common/tick.js';
import { wheelDataHandler } from './wheelDataHandler.js';
import { scrollUpToFullpage } from './scrollBeyondFullPage.js';

export function beyondFullPageHandler(container, e){
    var curTime = new Date().getTime();
    var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;
    // Register the event and get current mousewheel scrolling direction
    wheelDataHandler.registerEvent(e);
    var scrollWheelDirection = wheelDataHandler.getDirection();

    if (g_isAboutToScrollToFullPage) {
        setPrevTime(curTime);
        utils.preventDefault(e);
        return false;
    }

    if (getState().isBeyondFullpage) {
        // If user is beyound the fullpage, let's check fullpage container position.
        // The scrolling direction we already got by "getDirection".
        var containerBounding = container.getBoundingClientRect();
        if (containerBounding.bottom >= 0 && scrollWheelDirection === 'up') {
            // move to the fullpage container only if user scrolls up and fullpage container is in the viewport
            scrollUpToFullpage();
            utils.preventDefault(e);
            return false;
        }
        if (!g_isAboutToScrollToFullPage) {
            // allow normal scrolling, but quitting
            return true;
        }   
    }
}