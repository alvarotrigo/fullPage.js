import * as utils from '../common/utils.js';
import { getState, setState } from "../common/state.js";
import { setPrevTime } from '../common/tick.js';
import { wheelDataHandler } from './wheelDataHandler.js';
import { getScrollSettings } from '../common/utilsFP.js';
import { scrollUpToFullpage } from './scrollBeyondFullPage.js';

export function beyondFullPageHandler(container, e){
    var curTime = new Date().getTime();
    var pauseScroll = getState().isBeyondFullpage && container.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === 'up';
    var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;

    if(g_isAboutToScrollToFullPage){
        setPrevTime(curTime);
        utils.preventDefault(e);
        return false;
    }

    if(getState().isBeyondFullpage){
        if(!pauseScroll){
            keyframeTime('set', 'beyondFullpage', 1000);
        }
        else {
            var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime('isNewKeyframe', 'beyondFullpage') || !wheelDataHandler.isAccelerating() );
            var scrollSettings;
            if( shouldSetFixedPosition ){
                scrollSettings = getScrollSettings(utils.getLast(getState().sections).item.offsetTop + utils.getLast(getState().sections).item.offsetHeight);
                scrollSettings.element.scrollTo(0, scrollSettings.options);
                setState({isAboutToScrollToFullPage: false});

                utils.preventDefault(e);
                return false;
            }
            else if( wheelDataHandler.isAccelerating() ){
                pauseScroll = false;
                setState({isAboutToScrollToFullPage: true});
                setState({scrollTrigger: 'wheel'});

                scrollUpToFullpage();
                
                utils.preventDefault(e);
                return false;
            }
        }

        if(!g_isAboutToScrollToFullPage){

            // allow normal scrolling, but quitting
            if(!pauseScroll){
                return true;
            }
        }   
    }
}

var keyframeTime = (function(){
    let isNew = false;
    var frames = {};
    var timeframes = {};

    return function(action, name, timeframe){
        switch(action){
            case 'set':
                frames[name] = new Date().getTime();
                timeframes[name] = timeframe;
                break;
            case 'isNewKeyframe':
                const current = new Date().getTime();
                isNew = current - frames[name] > timeframes[name];
                break;
        }

        return isNew;
    };
})();