import * as utils from './common/utils.js';
import { getScrollSettings } from './utilsFP.js';
import { getOptions } from './options.js';
import { FP, $htmlBody } from './common/constants.js';
import { setState, getState } from './state.js';
import { setPrevTime } from './tick.js';
import { scrollTo } from './common/scrollTo.js';

export const wheelDataHandler = (function(){
    var _prevTime = new Date().getTime();
    var _scrollings = [];
    var isScrollingVertically;
    var direction;

    return {
        registerEvent: function(e){
            e = e || window.event;
            var value = e.wheelDelta || -e.deltaY || -e.detail;
            var delta = Math.max(-1, Math.min(1, value));
            var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
            isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);
            var curTime = new Date().getTime();
            direction = delta < 0 ? 'down': 'up';

            //Limiting the array to 150 (lets not waste memory!)
            if(_scrollings.length > 149){
                _scrollings.shift();
            }

            //keeping record of the previous scrollings
            _scrollings.push(Math.abs(value));

            //time difference between the last scroll and the current one
            var timeDiff = curTime - _prevTime;
            _prevTime = curTime;

            //haven't they scrolled in a while?
            //(enough to be consider a different scrolling action to scroll another section)
            if(timeDiff > 200){
                //emptying the array, we dont care about old scrollings for our averages
                _scrollings = [];
            }  
        },
        isAccelerating: function(){
            var averageEnd = utils.getAverage(_scrollings, 10);
            var averageMiddle = utils.getAverage(_scrollings, 70);
            var isAccelerating = averageEnd >= averageMiddle;

            return isAccelerating && isScrollingVertically;
        },

        getDirection: function(){
            return direction;
        }
    };
})();

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
            
            if( shouldSetFixedPosition ){
                var scrollSettings = getScrollSettings(utils.getLast(getState().sections).item.offsetTop + utils.getLast(getState().sections).item.offsetHeight);
                scrollSettings.element.scrollTo(0, scrollSettings.options);
                setState('isAboutToScrollToFullPage', false);

                utils.preventDefault(e);
                return false;
            }
            else if( wheelDataHandler.isAccelerating() ){
                pauseScroll = false;
                setState('isAboutToScrollToFullPage', true);

                setState('scrollTrigger', 'wheel');

                var scrollSettings = getScrollSettings(utils.getLast(getState().sections).item.offsetTop);
                setState('canScroll', false);
                
                scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function(){
                    setState('canScroll', true);
                    setState('isBeyondFullpage', false);
                    setState('isAboutToScrollToFullPage', false);
                });
                
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
                console.warn("setting time frame...");
                break;
            case 'isNewKeyframe':
                const current = new Date().getTime();
                isNew = current - frames[name] > timeframes[name];
                break;
        }

        return isNew;
    };
})();


export function scrollBeyondFullPage(){
    var dtop = utils.getScrollTop(getOptions()) + utils.getWindowHeight();
    var scrollSettings = getScrollSettings(dtop);
    FP.test.top = -dtop + 'px';

    utils.css(document.body, {'scroll-snap-type': 'none'});
    utils.css($htmlBody, {'scroll-behavior': 'unset'});

    setState('canScroll', false);
    scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function(){
        setTimeout(function(){
            setState('isBeyondFullpage', true);
            setState('canScroll', true);
        },30);
    });
}