import * as utils from '../common/utils.js';
import { getOriginals } from '../common/options.js';
import { setState } from '../common/state.js';
import { SLIDES_WRAPPER_SEL } from '../common/selectors.js';
import { setScrollingSpeed } from '../speed.js';
import { landscapeScroll } from './landscapeScroll.js';

/**
* Slides silently (with no animation) the active slider to the given slide.
* @param noCallback {bool} true or defined -> no callbacks
*/
export function silentLandscapeScroll(activeSlide, noCallbacks){
    setScrollingSpeed(0, 'internal');

    if(typeof noCallbacks !== 'undefined'){
        //preventing firing callbacks afterSlideLoad etc.
        setState({isResizing: true});
    }

    landscapeScroll(utils.closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

    if(typeof noCallbacks !== 'undefined'){
        setState({isResizing: false});
    }

    setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
}