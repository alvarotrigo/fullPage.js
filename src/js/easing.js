import * as utils from './common/utils.js';
import { win } from './common/constants.js';

//easeInOutCubic animation included in the plugin
// @ts-ignore
win.fp_easings = utils.deepExtend(win.fp_easings, {
    easeInOutCubic: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
    }
});