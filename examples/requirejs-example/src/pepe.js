/*!
 * fullPage 3.0.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function( root, window, document, factory, undefined) {
    if( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define( function() {
            root.fullpage = factory(window, document);
            return root.fullpage;
        } );
    } else if( typeof exports === 'object' ) {
        // Node. Does not work with strict CommonJS.
        module.exports = factory(window, document);
    } else {
        // Browser globals.
        window.fullpage = factory(window, document);
    }
}(this, window, document, function(window, document){
    'use strict';

    function initialise(){
        console.log("fullpage.js code....");
    }


    return initialise;
}));


console.log("_______________ has window.jQuery __________");
console.log(window.$);
/**
 * jQuery adapter for fullPage.js 3.0.0
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        console.log("using ADM...");
        define('fullpage.query', ['jquery', 'fullpage'], function($, fullpage) {
          return factory($, fullpage, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
          console.log("using common js...");
        module.exports = factory(require('jquery'), require('fullpage'), global, global.document, global.Math);
    } else {
        factory(jQuery, fullpage, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, fullpage, window, document, Math, undefined) {
    'use strict';

    console.log("voy a por jQuery....");

        // No jQuery No Go
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
