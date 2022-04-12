import * as utils from '../common/utils.js';
import { getOptions } from "../common/options.js";

/**
* Gets the name for screen readers for a section/slide navigation bullet.
*/
export function getBulletLinkName(i, defaultName, item){
    var anchor = defaultName === 'Section' ? getOptions().anchors[i] : utils.getAttr(item, 'data-anchor');
    return encodeURI(getOptions().navigationTooltips[i] || 
        anchor || 
        defaultName + ' ' + (i+1));
}