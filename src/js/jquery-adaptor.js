import { FP } from "./common/constants.js";
import { getOptions } from "./options.js";

//using jQuery initialization? Creating the $.fn.fullpage object
if(getOptions().$){
    Object.keys(FP).forEach(function (key) {    
        getOptions().$.fn.fullpage[key] = FP[key];   
    });
}

/**
 * jQuery adapter for fullPage.js 3.0.0
 */
 if(window.jQuery && window.fullpage){
    (function ($, fullpage) {
        'use strict';

        // No jQuery No Go
        if (!$ || !fullpage) {
            window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }

        $.fn.fullpage = function(options) {
            options = $.extend({}, options, {'$': $});
            var instance = new fullpage(this[0], options);
        };
    })(window.jQuery, window.fullpage);
}