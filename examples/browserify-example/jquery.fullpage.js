/**
 * jQuery adapter for fullPage.js 3.0.0
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        console.log("using ADM...");
        define(['jquery', 'fullpage.js'], function($, fullpage) {
          return factory($, fullpage, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        console.log("using common js...");
        module.exports = factory(require('jquery'), require('./pepe'), global, global.document, global.Math);
    } else {
        factory(jQuery, fullpage, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, fullpage, window, document, Math, undefined) {
    'use strict';

    console.log("voy a por jQuery....");
        'use strict';

        // No jQuery No Go
        console.log($)
        console.log('ÑÑÑÑÑÑÑÑÑÑÑ');
        console.log(fullpage);
        if (!$ || !fullpage) {
            window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }

        $.fn.fullpage = function(options) {
            var FP = new fullpage('#' + $(this).attr('id'), options);

            //Static API
            Object.keys(FP).forEach(function (key) {
                $.fn.fullpage[key] = FP[key];
            });
        };
});