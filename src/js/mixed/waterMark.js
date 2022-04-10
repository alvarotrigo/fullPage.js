import { EventEmitter } from '../common/eventEmitter.js';
import { getOptions } from '../common/options.js';
import { state } from '../common/state.js';
import { getLast } from '../common/utils.js';

EventEmitter.on('bindEvents', init);

function init(){
    const position = getOptions().credits.position;
    const positionStyle = ['left', 'right'].indexOf(position) > -1 ? `${position}: 0;` : '';
    const waterMark = `
        <div class="fp-watermark" style="${positionStyle}">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    ${getOptions().credits.label}
            </a>
        </div>
    `;
    const lastSection = getLast(state.sections);
    const shouldUseWaterMark =  getOptions().credits.enabled && !state.isValid;

    if(lastSection && lastSection.item && shouldUseWaterMark){
        lastSection.item.insertAdjacentHTML('beforeend', waterMark);
    }
}