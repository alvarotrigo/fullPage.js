import { win } from "../common/constants.js";

//gets the URL anchors (section and slide)
export function getAnchorsURL(){
    var section;
    var slide;
    var hash = win.location.hash;

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