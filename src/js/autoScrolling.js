import * as utils from './common/utils.js';
import { silentScroll } from './common/silentScroll.js';
import { getScrollSettings } from './common/utilsFP.js';
import { 
    setVariableState,
    getOptions,
    getOriginals,
    getContainer
} from './common/options.js';
import { getState } from './common/state.js';
import { FP } from './common/constants.js';
import { $body, $htmlBody } from './common/cache.js';
import { setRecordHistory } from './anchors/setRecordHistory.js';

FP.setAutoScrolling = setAutoScrolling;
FP.test.setAutoScrolling = setAutoScrolling;

/**
* Sets the autoScroll option.
* It changes the scroll bar visibility and the history of the site as a result.
*/
export function setAutoScrolling(value, type){
    //removing the transformation
    if(!value){
        silentScroll(0);
    }
    
    setVariableState('autoScrolling', value, type);

    var element = getState().activeSection.item;

    if(getOptions().autoScrolling && !getOptions().scrollBar){
        utils.css($htmlBody, {
            'overflow': 'hidden',
            'height': '100%'
        });

        utils.removeClass($body, 'fp-scrollable');
        setRecordHistory(getOriginals().recordHistory, 'internal');

        //for IE touch devices
        utils.css(getContainer(), {
            '-ms-touch-action': 'none',
            'touch-action': 'none'
        });

        if(element != null){
            //moving the container up
            silentScroll(element.offsetTop);
        }
    }else{
        utils.css($htmlBody, {
            'overflow' : 'visible',
            'height' : 'initial'
        });

        utils.addClass($body, 'fp-scrollable');

        var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
        setRecordHistory(recordHistory, 'internal');

        //for IE touch devices
        utils.css(getContainer(), {
            '-ms-touch-action': '',
            'touch-action': ''
        });

        //scrolling the page to the section with no animation
        if (element != null) {
            utils.css($htmlBody, {
                'scroll-behavior': 'unset'
            });

            var scrollSettings = getScrollSettings(element.offsetTop);
            scrollSettings.element.scrollTo(0, scrollSettings.options);
        }
    }
}