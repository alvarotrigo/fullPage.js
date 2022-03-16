import { getIsScrollAllowed } from "../common/isScrollAllowed.js";
import { getOptions } from "../common/options.js";
import { getState } from "../common/state.js";
import { scrollOverflowHandler } from "../scrolloverflow.js";
import { moveSectionDown } from "./moveSectionDown.js";
import { moveSectionUp } from "./moveSectionUp.js";

/**
* Determines the way of scrolling up or down:
* by 'automatically' scrolling a section or by using the default and normal scrolling.
*/
export function scrolling(type){
    if (!getIsScrollAllowed().m[type]){
        return;
    }

    var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

    if(getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)){

        //is the scrollbar at the start/end of the scroll?
        if(scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && 
            scrollOverflowHandler.shouldMovePage()
        ){
            scrollSection();
        }
    }
    else{
        scrollSection();
    }
}