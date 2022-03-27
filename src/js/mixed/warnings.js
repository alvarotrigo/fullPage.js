import { doc } from '../common/constants.js';
import { EventEmitter } from '../common/eventEmitter.js';
import { state } from '../common/state.js';

EventEmitter.on('bindEvents', showLicenseWarning);

function showLicenseWarning(){
    const waterMark = `
        <div class="fp-warning" style="left: 0;">
            The license key for fullPage.js is missing or is not valid. 
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:underline; color: #104acc;">
                    Read More here.
            </a>
        </div>
    `;
    if(!state.isValid){
        doc.body.insertAdjacentHTML('beforeend', waterMark);
    }
}