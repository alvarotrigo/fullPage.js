import * as utils from '../common/utils.js';
import { getState } from "../common/state.js";
import { getDestinationPosition } from "../scroll/scrollPage.js";
import { AUTO_HEIGHT } from '../common/selectors.js';

export function getTmpPosition(v){
    return utils.hasClass(getState().activeSection.item, AUTO_HEIGHT) 
        ? getDestinationPosition(getState().activeSection.item) 
        : getState().activeSection.item.offsetTop;
}

export function getDestinationPosForInfiniteScroll(v){
    // forcing the scroll to the bottom of the fp-auto-height section when scrolling up
    if(v.isMovementUp && utils.hasClass(v.element, AUTO_HEIGHT)){
        return getDestinationPosition(v.element) - utils.getWindowHeight() + v.element.offsetHeight;
    }
    
    return v.element.offsetTop;
}
