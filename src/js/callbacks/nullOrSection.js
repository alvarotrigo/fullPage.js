import { Section } from "../common/item.js";
import { SectionPanel } from "../stateUpdates.js";

/**
* Makes sure to only create a Panel object if the element exist
*/
export function nullOrSection(el){
    if(el && !el.item){
        return new Section(new SectionPanel(el));
    }
    return el ? new Section(el) : null;
}