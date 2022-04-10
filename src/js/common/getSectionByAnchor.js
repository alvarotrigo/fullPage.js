import { getState } from "./state.js";

/**
* Gets a section by its anchor / index
*/
export function getSectionByAnchor(sectionAnchor){
    var section = getState().sections.filter(section => section.anchor === sectionAnchor)[0];
    if(!section){
        var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor -1 : 0;
        section = getState().sections[sectionIndex];
    }

    return section;
}