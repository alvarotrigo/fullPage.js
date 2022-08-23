import * as utils from './utils.js';
import { getOptions } from "./options.js";
import { AUTO_HEIGHT, TABLE } from './selectors.js';
import { scrollOverflowHandler } from '../scrolloverflow.js';

export function addTableClass(element){

    if( !getOptions().verticalCentered){
        return;
    }

    // overflowing sections when scrollOverflow is disabled will be autoHeight
    if(!getOptions().scrollOverflow && scrollOverflowHandler.shouldBeScrollable(element.item)){
        utils.addClass(element.item, AUTO_HEIGHT);
        return;
    }

    if(!scrollOverflowHandler.isScrollable(element)){
        //In case we are styling for the 2nd time as in with reponsiveSlides
        if(!utils.hasClass(element.item, TABLE)){
            utils.addClass(element.item, TABLE);
        }
    }
}