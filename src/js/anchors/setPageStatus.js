import { isInsideIframe, isTouch, isTouchDevice, win } from "../common/constants.js";
import { getOptions } from "../common/options.js";
import { setState } from "../common/state.js";
import { setBodyClass } from "../stateClasses.js";
import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';

EventEmitter.on(events.onDestroyAll, onDestroyAll);

function onDestroyAll(){
    setUrlHash('');
}

/**
* Sets the state of the website depending on the active section/slide.
* It changes the URL hash when needed and updates the body class.
*/
export function setPageStatus(slideIndex, slideAnchor, anchorLink){
    var sectionHash = '';

    if(getOptions().anchors.length && !getOptions().lockAnchors){

        //isn't it the first slide?
        if(slideIndex){
            if(anchorLink != null){
                sectionHash = anchorLink;
            }

            //slide without anchor link? We take the index instead.
            if(slideAnchor == null){
                slideAnchor = slideIndex;
            }

            setState({lastScrolledSlide: slideAnchor});
            setUrlHash(sectionHash + '/' + slideAnchor);

        //first slide won't have slide anchor, just the section one
        }else if(slideIndex != null){
            setState({lastScrolledSlide: slideAnchor});
            setUrlHash(anchorLink);
        }

        //section without slides
        else{
            setUrlHash(anchorLink);
        }
    }

    setBodyClass();
}



/**
* Sets the URL hash.
*/
function setUrlHash(url){
    if(getOptions().recordHistory){
        location.hash = url;
    }
    else{
        win.history.replaceState(undefined, undefined, '#' + url);
    }
}