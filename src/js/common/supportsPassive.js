import * as utils from './utils.js';

const supportsPassiveEvents = (function(){
    //cheks for passive event support
    var g_supportsPassive = false;
    
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function() {
                g_supportsPassive = true;
            }
        });
        utils.windowAddEvent("testPassive", null, opts);
        utils.windowRemoveEvent("testPassive", null, opts);
    } catch (e) {

    }

    return function(){
        return g_supportsPassive;
    };
})();

export function getPassiveOptionsIfPossible(){
    return supportsPassiveEvents() ? { passive: false } : false;
}