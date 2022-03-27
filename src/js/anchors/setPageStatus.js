import { isTouch, isTouchDevice, win } from "../common/constants.js";
import { getOptions } from "../common/options.js";
import { setState } from "../common/state.js";
import { setBodyClass } from "../stateClasses.js";

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
    }else{
        //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if(isTouchDevice || isTouch){
            win.history.replaceState(undefined, undefined, '#' + url);
        }else{
            var baseUrl = win.location.href.split('#')[0];
            win.location.replace( baseUrl + '#' + url );
        }
    }
}