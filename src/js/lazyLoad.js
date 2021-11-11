import * as utils from './common/utils.js'; 
import { onMediaLoad } from './media.js'; 
import { getSlideOrSection } from './utilsFP.js';
import { isResponsiveMode } from './responsive.js';
import { getOptions } from './options.js';
import { 
    AUTO_HEIGHT_SEL,
    AUTO_HEIGHT_RESPONSIVE_SEL,
    SECTION_SEL,
    ACTIVE_SEL
} from './common/selectors.js';
import { getStateVar } from './state.js';
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
            var attribute = element.getAttribute('data-' + type);
            if(attribute != null && attribute){
                setSrc(element, type);
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

/**
* Sets the value for the given attribute from the `data-` attribute with the same suffix
* ie: data-srcset ==> srcset  |  data-src ==> src
*/
export function setSrc(element, attribute){
    element.setAttribute(attribute, element.getAttribute('data-' + attribute));
    element.removeAttribute('data-' + attribute);
}

/**
* Makes sure lazyload is done for other sections in the viewport that are not the
* active one. 
*/
export function lazyLoadOthers(){
    var hasAutoHeightSections = utils.$(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && utils.$(AUTO_HEIGHT_RESPONSIVE_SEL)[0];

    //quitting when it doesn't apply
    if (!getOptions().lazyLoading || !hasAutoHeightSections){
        return;
    }

    //making sure to lazy load auto-height sections that are in the viewport
    utils.$(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function(section){
        if(isSectionInViewport(section)){
            lazyLoad(section);
        }
    });
}


/**
* Determines whether a section is in the viewport or not.
*/
function isSectionInViewport (el) {
    var rect = el.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;

    //sometimes there's a 1px offset on the bottom of the screen even when the 
    //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
    //using this prevents from lazyLoading the section that is not yet visible 
    //(only 1 pixel offset is)
    var pixelOffset = 2;
    
    var isTopInView = top + pixelOffset < getStateVar('windowsHeight') && top > 0;
    var isBottomInView = bottom > pixelOffset && bottom < getStateVar('windowsHeight');

    return isTopInView || isBottomInView;
}
