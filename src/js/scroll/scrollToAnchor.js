import { getOptions } from '../common/options.js';
import { getAnchorsURL } from '../anchors/getAnchorsURL.js';
import { scrollPageAndSlide } from './scrollPageAndSlide.js';
import { silentMoveTo } from './silentMove.js';

/**
* Scrolls to the anchor in the URL when loading the site
*/
export function scrollToAnchor(){
    var anchors = getAnchorsURL();
    var sectionAnchor = anchors.section;
    var slideAnchor = anchors.slide;

    if(sectionAnchor){  //if theres any #
        if(getOptions().animateAnchor){
            scrollPageAndSlide(sectionAnchor, slideAnchor);
        }else{
            silentMoveTo(sectionAnchor, slideAnchor);
        }
    }
}