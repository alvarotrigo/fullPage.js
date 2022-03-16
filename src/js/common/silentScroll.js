import * as utils from './utils.js';
import { getOptions, getContainer } from './options.js';
import { transformContainer } from './transformContainer.js';
import { FP } from './constants.js';
import { getScrollSettings, setScrolling } from './utilsFP.js';
/**
* Scrolls silently (with no animation) the page to the given Y position.
*/
export function silentScroll(top){
    // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
    // that's why we round it to 0.
    var roundedTop = Math.round(top);

    if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar){
        var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
        transformContainer(translate3d, false);
    }
    else if(getOptions().autoScrolling && !getOptions().scrollBar){
        utils.css(getContainer(), {'top': -roundedTop + 'px'});
        FP.test.top = -roundedTop + 'px';
    }
    else{
        var scrollSettings = getScrollSettings(roundedTop);
        setScrolling(scrollSettings.element, scrollSettings.options);
    }
}