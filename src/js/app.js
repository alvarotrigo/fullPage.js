import './jquery-adaptor.js';
import './timeouts.js';
import * as utils from './common/utils.js';
import { setOptions, setOption, getOptions } from './options.js';
import { setContainer, getContainer } from './options.js';
import { init } from './instance.js';
import { $html, FP } from './common/constants.js';
import { displayWarnings } from './console.js';
import { bindEvents } from './bindings.js';
import { ENABLED } from './common/selectors.js';

export default function initialise(containerSelector, options) {
    console.log(this);
    //only once my friend!
    if(utils.hasClass($html, ENABLED)){ displayWarnings(); return; }

    setOption('touchWrapper', typeof containerSelector === 'string' ? utils.$(containerSelector)[0] : containerSelector);

    // Creating some defaults, extending them with any options that were provided
    setOptions(options);

    setContainer(typeof containerSelector === 'string' ? utils.$(containerSelector)[0] : containerSelector);

    displayWarnings();

    if(getContainer()){
        init();
        bindEvents();
    }

    FP.getFullpageData = function(){ return getOptions(); };

    //public functions
    FP.version = '3.1.1';


    FP.test = Object.assign(FP.test, {
        top: '0px',
        translate3d: 'translate3d(0px, 0px, 0px)',
        translate3dH: (function(){
            var a = [];
            for(var i = 0; i < utils.$(getOptions().sectionSelector, getContainer()).length; i++){
                a.push('translate3d(0px, 0px, 0px)');
            }
            return a;
        })(),
        left: (function(){
            var a = [];
            for(var i = 0; i < utils.$(getOptions().sectionSelector, getContainer()).length; i++){
                a.push(0);
            }
            return a;
        })(),
        options: getOptions(),
        setAutoScrolling: null
    });

    //functions we want to share across files but which are not
    //mean to be used on their own by developers
    FP.shared = Object.assign(FP.shared, {
        afterRenderActions: null,
        isNormalScrollElement: false
    });

    window.fullpage_api = FP;


    return window.fullpage_api;
} //end of $.fn.fullpage