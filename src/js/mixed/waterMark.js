import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';
import { getOptions } from '../common/options.js';
import { state } from '../common/state.js';
import { getLast } from '../common/utils.js';
import { WATERMARK } from '../common/selectors.js';

EventEmitter.on(events.bindEvents, init);

function init(){
    const position = getOptions().credits.position || 'right';
    const positionStyle = ['left', 'right'].indexOf(position) > -1 ? `${position}: 0;` : '';
    const waterMark = `
        <div class="${WATERMARK}" style="${positionStyle}">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    ${getOptions().credits.label || 'Made with fullPage.js'}
            </a>
        </div>
    `;
    const lastSection = getLast(state.sections);
    const shouldUseWaterMark =  !state.isValid || getOptions().credits.enabled;

    if(lastSection && lastSection.item && shouldUseWaterMark){
        lastSection.item.insertAdjacentHTML('beforeend', waterMark);
    }
}