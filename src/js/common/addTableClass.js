import * as utils from './utils.js';
import { getOptions } from "./options.js";
import { TABLE } from './selectors.js';
import { scrollOverflowHandler } from '../scrolloverflow.js';

export function addTableClass(element){

    if(!getOptions().verticalCentered){
        return;
    }

    // Overflowing sections when scrollOverflow is disabled will be autoHeight
    // and won't require vertical aligment
    if( !getOptions().scrollOverflow && 
        scrollOverflowHandler.shouldBeScrollable(element.item)
    ){
        return;
    }

    if(!scrollOverflowHandler.isScrollable(element)){

        //In case we are styling for the 2nd time as in with reponsiveSlides
        if(!utils.hasClass(element.item, TABLE)){
            utils.addClass(element.item, TABLE);
        }
    }
}