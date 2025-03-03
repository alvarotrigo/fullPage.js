import * as utils from '../common/utils.js'; 
import { getSlideOrSection } from '../common/utilsFP.js';
import { getOptions } from '../common/options.js';
import { onMediaLoad } from '../media.js'; 
import { LOADED } from '../common/selectors.js';

/**
* Lazy loads image, video and audio elements.
*/
export function lazyLoad(destiny){
    if (!getOptions().lazyLoading){
        return;
    }

    var panel = getSlideOrSection(destiny);

    utils.$('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element){
        ['src', 'srcset'].forEach(function(type){
            var attribute = utils.getAttr(element, 'data-' + type);
            if(attribute != null && attribute){
                utils.setSrc(element, type);
                element.addEventListener('load', function(){
                    onMediaLoad(destiny);
                });
            }
        });

        if(utils.matches(element, 'source')){
            var elementToPlay =  utils.closest(element, 'video, audio');
            if(elementToPlay){
                elementToPlay.load();
                elementToPlay.onloadeddata = function(){
                    onMediaLoad(destiny);
                };
            }
        }
    });

    // Add fp-loaded class to the panel after lazy loading
    utils.addClass(panel, LOADED);
}

export function lazyLoadPanels(panel){
    var lazyLoadThresold = getOptions().lazyLoadThreshold;

    lazyLoad(panel.item);
    if(lazyLoadThresold){
        lazyLoadDirection(panel, 'prev', lazyLoadThresold);
        lazyLoadDirection(panel, 'next', lazyLoadThresold);
    }
}

// Lazy load "count" number of panels in a specific direction
function lazyLoadDirection(startPanel, direction, count) {
    let currentPanel = startPanel;
    for (let i = 0; i < count && (currentPanel = currentPanel[direction]()); i++) {
        console.log(currentPanel.item);
        lazyLoad(currentPanel.item);
    }
}