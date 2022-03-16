import * as utils from '../common/utils.js';
import { getOptions, getContainer } from '../common/options.js';
import { 
    SECTION,
    SLIDE,
} from '../common/selectors.js';

/**
* Adds internal classes to be able to provide customizable selectors
* keeping the link with the style sheet.
*/
export function addInternalSelectors(){
    utils.addClass(utils.$(getOptions().sectionSelector, getContainer()), SECTION);
    utils.addClass(utils.$(getOptions().slideSelector, getContainer()), SLIDE);
}