import * as utils from './utils.js';

export let $body = null;
export let $html = null;
export let $htmlBody = null;


// caching common elements
export function setCache(){
    $body = utils.$('body')[0];
    $html = utils.$('html')[0];
    $htmlBody = utils.$('html, body');
}