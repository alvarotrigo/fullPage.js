import * as utils from './utils.js';
import { SECTION_SEL } from './selectors.js';

/**
* Retuns `up` or `down` depending on the scrolling movement to reach its destination
* from the current section.
*/
export function getYmovement(activeSection, destiny){
    var fromIndex = activeSection.index();
    var toIndex = utils.index(destiny, SECTION_SEL);
    if( fromIndex == toIndex){
        return 'none';
    }
    if(fromIndex > toIndex){
        return 'up';
    }
    return 'down';
}
