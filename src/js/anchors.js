import * as utils from './common/utils.js';
import { getOptions } from './options.js';
import { setBodyClass } from './stateClasses.js';
import { getState, getStateVar } from './state.js';
import { isTouchDevice, isTouch } from './common/constants';
import { FP } from './common/constants.js';

let lastScrolledSlide;
FP.setLockAnchors = setLockAnchors;

export function getLastScrolledSlide(){
    return lastScrolledSlide;
}

/**
* Sets lockAnchors
*/
export function setLockAnchors(value){
    getOptions().lockAnchors = value;
}


//gets the URL anchors (section and slide)
export function getAnchorsURL(){
    var section;
    var slide;
    var hash = window.location.hash;

    if(hash.length){
        //getting the anchor link in the URL and deleting the `#`
        var anchorsParts =  hash.replace('#', '').split('/');

        //using / for visual reasons and not as a section/slide separator #2803
        var isFunkyAnchor = hash.indexOf('#/') > -1;

        section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);

        var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
        if(slideAnchor && slideAnchor.length){
            slide = decodeURIComponent(slideAnchor);
        }
    }

    return {
        section: section,
        slide: slide
    };
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

            lastScrolledSlide = slideAnchor;
            setUrlHash(sectionHash + '/' + slideAnchor);

        //first slide won't have slide anchor, just the section one
        }else if(slideIndex != null){
            lastScrolledSlide = slideAnchor;
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
            window.history.replaceState(undefined, undefined, '#' + url);
        }else{
            var baseUrl = window.location.href.split('#')[0];
            window.location.replace( baseUrl + '#' + url );
        }
    }
}

/**
* Detecting any change on the URL to scroll to the given anchor link
* (a way to detect back history button as we play with the hashes on the URL)
*/
export function hashChangeHandler(){
    if(!getStateVar('isScrolling') && !getOptions().lockAnchors){
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide;

        //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
        var isFirstSlideMove =  (typeof getStateVar('lastScrolledDestiny') === 'undefined');
        var isFirstScrollMove = (typeof getStateVar('lastScrolledDestiny') === 'undefined' && typeof slideAnchor === 'undefined' && !getState('slideMoving'));

        if(sectionAnchor && sectionAnchor.length){
            /*in order to call scrollpage() only once for each destination at a time
            It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
            event is fired on every scroll too.*/
            if ((sectionAnchor && sectionAnchor !== getStateVar('lastScrolledDestiny')) && !isFirstSlideMove || 
                isFirstScrollMove || 
                (!getStateVar('slideMoving') && lastScrolledSlide != slideAnchor )){
                    utils.trigger('onScrollPageAndSlide', {
                        sectionAnchor: sectionAnchor,
                        slideAnchor: slideAnchor
                    });
                // scrollPageAndSlide(sectionAnchor, slideAnchor);
            }
        }
    }
}