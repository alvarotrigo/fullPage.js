let g_afterSlideLoadsId;
let g_afterSectionLoadsId;
let g_resizeId;
let g_scrollId;
let g_scrollId2;
let g_transitionLapseId;
let g_keydownId;
let g_animateScrollId;

export function clearTimeouts(){
    [
        g_afterSlideLoadsId, 
        g_afterSectionLoadsId,
        g_resizeId,
        g_scrollId,
        g_scrollId2,
        g_transitionLapseId,
        g_keydownId,
        g_animateScrollId
    ].forEach(function(timeoutId){
        clearTimeout(timeoutId);
    });
}