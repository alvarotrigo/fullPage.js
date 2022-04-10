import { setIsScrollAllowed } from "../common/isScrollAllowed.js";
import { FP } from '../common/constants';

FP.setAllowScrolling = setAllowScrolling;

/**
* Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
* Optionally a second parameter can be used to specify the direction for which the action will be applied.
*
* @param directions string containing the direction or directions separated by comma.
*/
export function setAllowScrolling(value, directions){
    if(typeof directions !== 'undefined'){
        directions = directions.replace(/ /g,'').split(',');

        directions.forEach(function (direction){
            setIsScrollAllowed(value, direction, 'm');
        });
    }
    else{
        setIsScrollAllowed(value, 'all', 'm');
    }
}