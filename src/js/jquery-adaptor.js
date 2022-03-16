import { FP } from "./common/constants.js";
import { getOptions } from "./common/options.js";
import * as utils from './common/utils.js';

/**
 * jQuery adapter for fullPage.js 3.0.0
 */
 // @ts-ignore
 if(window.jQuery && window.fullpage){
    (function ($, fullpage) {
        'use strict';

        // No jQuery No Go
        if (!$ || !fullpage) {
            // @ts-ignore
            utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }

        $.fn.fullpage = function(options) {
            options = $.extend({}, options, {'$': $});
            var instance = new fullpage(this[0], options);

            // Creating the $.fn.fullpage object
            Object.keys(FP).forEach(function (key) {    
                getOptions().$.fn.fullpage[key] = FP[key];   
            });
        };

       
    // @ts-ignore
    })(window.jQuery, window.fullpage);
}