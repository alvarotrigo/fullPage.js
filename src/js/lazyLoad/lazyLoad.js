import * as utils from '../common/utils.js'; 
import { getSlideOrSection } from '../common/utilsFP.js';
import { getOptions } from '../common/options.js';
import { onMediaLoad } from '../media.js'; 
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
}