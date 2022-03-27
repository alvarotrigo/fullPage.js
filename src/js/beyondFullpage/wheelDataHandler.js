
import { win } from '../common/constants.js';
import * as utils from '../common/utils.js';

export const wheelDataHandler = (function(){
    var _prevTime = new Date().getTime();
    var _scrollings = [];
    var isScrollingVertically;
    var direction;

    return {
        registerEvent: function(e){
            e = e || win.event;
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

            return _scrollings.length ? isAccelerating && isScrollingVertically : false;
        },

        getDirection: function(){
            return direction;
        }
    };
})();
