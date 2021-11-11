import * as utils from './common/utils.js';
import { getOptions, getContainer, setOptionsFromDOM } from './options.js';
import { updateState, updateStructuralState } from './stateUpdates.js';
import { setAllowScrolling } from './scroll.js';
import { setAutoScrolling } from './autoScrolling.js';
import { prepareDom, afterRenderActions } from './dom.js';
import { setMouseHijack } from './wheel.js';
import { responsive } from './responsive.js';
import { setBodyClass } from './stateClasses.js';
import { setKeyboardScrolling } from './keyboard.js';
import { toggleCssSnapsWhenPossible } from './fitToSection.js';
import { scrollToAnchor } from './scroll.js';
import { destroyStructure } from './dom.js';
import { support3d } from './common/constants.js';
import { DESTROYED } from './common/selectors.js';
import { FP } from './common/constants.js';
import { clearTimeouts } from './timeouts.js';

FP.destroy = destroy;

export function init(){
    //if css3 is not supported, it will use jQuery animations
    if(getOptions().css3){
        getOptions().css3 = support3d();
    }

    updateStructuralState();
    updateState();

    getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;

    setOptionsFromDOM();
    prepareDom();
    setAllowScrolling(true);
    setMouseHijack(true);
    setAutoScrolling(getOptions().autoScrolling, 'internal');
    responsive();
    toggleCssSnapsWhenPossible(true);
    
    //setting the class for the body element
    setBodyClass();

    if(document.readyState === 'complete'){
        scrollToAnchor();
    }
    window.addEventListener('load', scrollToAnchor);

    afterRenderActions();

    // Updating the state again with the new DOM
    updateStructuralState();
    updateState();
}

/*
* Destroys fullpage.js plugin events and optinally its html markup and styles
*/
export function destroy(all){
    setAutoScrolling(false, 'internal');
    setAllowScrolling(true);
    setMouseHijack(false);
    setKeyboardScrolling(false);
    utils.addClass(getContainer(), DESTROYED);

    clearTimeouts();

    utils.trigger('fp:onDestroy', {});

    //lets make a mess!
    if(all){
        destroyStructure();
    }
}