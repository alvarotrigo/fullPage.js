/**
* Returns the cross-browser transform string.
*/
export function getTransforms(translate3d){
    return {
        '-webkit-transform': translate3d,
        '-moz-transform': translate3d,
        '-ms-transform':translate3d,
        'transform': translate3d
    };
}