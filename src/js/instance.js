import * as utils from './common/utils.js';
import { getOptions, getContainer, setOptionsFromDOM } from './common/options.js';
import { updateState, updateStructuralState } from './stateUpdates.js';
import { setAutoScrolling } from './autoScrolling.js';
import { setMouseHijack } from './mouse/wheel.js';
import { responsive } from './responsive.js';
import { setBodyClass } from './stateClasses.js';
import { setKeyboardScrolling } from './keyboard/setKeyboardScrolling.js';
import { DESTROYED } from './common/selectors.js';
import { doc, FP } from './common/constants.js';
import { EventEmitter } from './common/eventEmitter.js';
import { prepareDom } from './dom/prepareDom.js';
import { afterRenderActions } from './dom/afterRenderActions.js';
import { setAllowScrolling } from './scroll/setAllowScrolling.js';
import { scrollToAnchor } from './scroll/scrollToAnchor.js';
import { destroyStructure } from './dom/destroyStructure.js';

FP.destroy = destroy;

export function init(){
    updateStructuralState();
    updateState();

    getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;

    setOptionsFromDOM();
    prepareDom();
    setAllowScrolling(true);
    setMouseHijack(true);
    setAutoScrolling(getOptions().autoScrolling, 'internal');
    responsive();
    
    //setting the class for the body element
    setBodyClass();

    if(doc.readyState === 'complete'){
        scrollToAnchor();
    }
    utils.windowAddEvent('load', scrollToAnchor);

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

    EventEmitter.emit('onDestroy');

    //lets make a mess!
    if(all){
        destroyStructure();
    }
}