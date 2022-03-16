import * as utils from '../common/utils.js';
import { getScrollSettings } from '../common/utilsFP.js';
import { getOptions } from '../common/options.js';
import { FP } from '../common/constants.js';
import { $htmlBody } from '../common/cache.js';
import { getState, setState } from '../common/state.js';
import { scrollTo } from '../common/scrollTo.js';

export function scrollBeyondFullPage(){
    var dtop = getDestinationOffset();
    var scrollSettings = getScrollSettings(dtop);
    FP.test.top = -dtop + 'px';

    utils.css(document.body, {'scroll-snap-type': 'none'});
    utils.css($htmlBody, {'scroll-behavior': 'unset'});

    setState({canScroll: false});
    scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function(){
        setTimeout(function(){
            setState({isBeyondFullpage: true});
            setState({canScroll: true});
        },30);
    });
}

function getDestinationOffset(){
    if(!getOptions().css3){
        return utils.getLast(getState().sections).item.offsetTop + utils.getLast(getState().sections).item.offsetHeight;
    }
    return utils.getScrollTop(getOptions()) +  utils.getWindowHeight();
}