import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';
import { getOptions, getOriginals, setVariableState } from '../common/options.js';
import { setScrollingSpeed } from '../speed.js';

EventEmitter.on(events.onPerformMovement, onSlideOrScroll);
EventEmitter.on(events.afterSectionLoads, afterPanelLoad);
EventEmitter.on(events.onSlideLeave, onSlideOrScroll);
EventEmitter.on(events.afterSlideLoads, afterPanelLoad);

function onSlideOrScroll(params){
    var skipValue = getOptions().skipIntermediateItems;
    var scrollType = params.items.origin.isSection ? 'sections' : 'slides';
    var areConsecutivePanels = Math.abs(params.items.origin.index() - params.items.destination.index()) > 1;
    var doesApply = (skipValue === true ||  skipValue === scrollType) && areConsecutivePanels;

    if(doesApply){
        setScrollingSpeed (0, 'internal');
    }
}

function afterPanelLoad(params){
    if(getOptions().skipIntermediateItems){
        setVariableState('scrollingSpeed', getOriginals().scrollingSpeed, 'internal');
    }
}