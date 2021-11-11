
const supportsPassiveEvents = (function(){
    //cheks for passive event support
    var g_supportsPassive = false;
    
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function() {
                g_supportsPassive = true;
            }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
    } catch (e) {

    }

    return function(){
        return g_supportsPassive;
    };
})();

export function getPassiveOptionsIfPossible(){
    return supportsPassiveEvents() ? { passive: false } : false;
}