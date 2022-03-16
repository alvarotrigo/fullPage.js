import { Slide } from "../common/item.js";

export function nullOrSlide(el){
    return el ? new Slide(el) : null;
}