import * as utils from './common/utils.js';
import { getOptions, getContainer, getOriginals} from './common/options.js';
import { setAutoScrolling } from './autoScrolling.js';
import { setFitToSection } from './fitToSection.js';
import { FP, win } from './common/constants.js';
import { $body } from './common/cache.js';
import { 
    SECTION_NAV_SEL,
    RESPONSIVE
} from './common/selectors.js';

FP.setResponsive = setResponsive;


/**
* Checks if the site needs to get responsive and disables autoScrolling if so.
* A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
*/
export function responsive(){
    var widthLimit = getOptions().responsive || getOptions().responsiveWidth; //backwards compatiblity
    var heightLimit = getOptions().responsiveHeight;

    //only calculating what we need. Remember its called on the resize event.
    var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
    var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;

    if(widthLimit && heightLimit){
        setResponsive(isBreakingPointWidth || isBreakingPointHeight);
    }
    else if(widthLimit){
        setResponsive(isBreakingPointWidth);
    }
    else if(heightLimit){
        setResponsive(isBreakingPointHeight);
    }
}

/**
* Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
* are smaller than the set limit values.
*/
function setResponsive(active){
    var isResponsive = isResponsiveMode();

    if(active){
        if(!isResponsive){
            setAutoScrolling(false, 'internal');
            setFitToSection(false, 'internal');
            utils.hide(utils.$(SECTION_NAV_SEL));
            utils.addClass($body, RESPONSIVE);
            if(utils.isFunction( getOptions().afterResponsive )){
                getOptions().afterResponsive.call( getContainer(), active);
            }

            //when on page load, we will remove scrolloverflow if necessary
            // if(getOptions().scrollOverflow){
            //     createScrollBarForAll();
            // }
        }
    }
    else if(isResponsive){
        setAutoScrolling(getOriginals().autoScrolling, 'internal');
        setFitToSection(getOriginals().autoScrolling, 'internal');
        utils.show(utils.$(SECTION_NAV_SEL));
        utils.removeClass($body, RESPONSIVE);
        if(utils.isFunction( getOptions().afterResponsive )){
            getOptions().afterResponsive.call( getContainer(), active);
        }
    }
}

/**
* Determines whether fullpage.js is in responsive mode or not.
*/
export function isResponsiveMode(){
    return utils.hasClass($body, RESPONSIVE);
}
 