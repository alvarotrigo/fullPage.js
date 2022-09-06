//utils

import { doc, win } from "./constants.js";

/**
* Shows a message in the console of the given type.
*/
export function showError(type, text){
    win.console && win.console[type] && win.console[type]('fullPage: ' + text);
}

export function isVisible(el){
    var style = win.getComputedStyle(el);

    return (style.display !== 'none');
}

export function getVisible(elements){
    return Array.from(elements).filter(function(e){
        return isVisible(e);
    });
}

/**
* Equivalent of jQuery function $().
*/
export function $(selector, context){
    context = arguments.length > 1 ? context : document;
    return context ? context.querySelectorAll(selector) : null;
}

/**
* Extends a given Object properties and its childs.
*/
export function deepExtend(out) {
    out = out || {};
    for (var i = 1, len = arguments.length; i < len; ++i) {
      var obj = arguments[i];
  
      if (!obj) {
        continue;
      }
  
      for (var key in obj) {
        if (!obj.hasOwnProperty(key) || key == '__proto__' || key == 'constructor') {
          continue;
        }
  
        // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
        if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
          out[key] = deepExtend(out[key], obj[key]);
          continue;
        }
  
        out[key] = obj[key];
      }
    }
    return out;
}

/**
* Checks if the passed element contains the passed class.
*/
export function hasClass(el, className){
    if(el == null){
        return false;
    }
    return el.classList.contains(className);
}

/**
* Gets the window height. Crossbrowser.
*/
export function getWindowHeight(){
    return 'innerHeight' in win ? win.innerHeight : doc.documentElement.offsetHeight;
}

/**
* Gets the window width.
*/
export function getWindowWidth(){
    return win.innerWidth;
}

/**
* Set's the CSS properties for the passed item/s.
* @param {NodeList|HTMLElement|Object} items
* @param {Object} props css properties and values.
*/
export function css(items, props) {
    items = getList(items);

    var key;
    for (key in props) {
        if (props.hasOwnProperty(key)) {
            if (key !== null) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    item.style[key] = props[key];
                }
            }
        }
    }

    return items;
}

/**
* Gets the previous element to the passed element.
*/
export function prev(item){
    return item.previousElementSibling;
}

/**
* Gets the next element to the passed element.
*/
export function next(item){
    return item.nextElementSibling;
}

/**
* Gets the last element from the passed list of elements.
*/
export function last(item){
    return item[item.length-1];
}

/**
* Gets index from the passed element.
* @param {String} selector is optional.
*/
export function index(item, selector) {
    item = isArrayOrList(item) ? item[0] : item;
    var children = selector != null? $(selector, item.parentNode) : item.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
            if (children[i] == item) return num;
            if (children[i].nodeType==1) num++;
    }
    return -1;
}

/**
* Gets an iterable element for the passed element/s
*/
export function getList(item){
    return !isArrayOrList(item) ? [item] : item;
}

/**
* Adds the display=none property for the passed element/s
*/
export function hide(el){
    el = getList(el);

    for(var i = 0; i<el.length; i++){
        el[i].style.display = 'none';
    }
    return el;
}

/**
* Adds the display=block property for the passed element/s
*/
export function show(el){
    el = getList(el);

    for(var i = 0; i<el.length; i++){
        el[i].style.display = 'block';
    }
    return el;
}

/**
* Checks if the passed element is an iterable element or not
*/
export function isArrayOrList(el){
    return Object.prototype.toString.call( el ) === '[object Array]' ||
        Object.prototype.toString.call( el ) === '[object NodeList]';
}

/**
* Adds the passed class to the passed element/s
*/
export function addClass(el, className) {
    el = getList(el);

    for(var i = 0; i<el.length; i++){
        var item = el[i];
        item.classList.add(className);
    }
    return el;
}

/**
* Removes the passed class to the passed element/s
* @param {String} `className` can be multiple classnames separated by whitespace
*/
export function removeClass(el, className){
    el = getList(el);

    var classNames = className.split(' ');

    for(var a = 0; a<classNames.length; a++){
        className = classNames[a];
        for(var i = 0; i<el.length; i++){
            var item = el[i];
            item.classList.remove(className);            
        }
    }
    return el;
}

/**
* Appends the given element ot the given parent.
*/
export function appendTo(el, parent){
    parent.appendChild(el);
}

/**
Usage:

var wrapper = document.createElement('div');
wrapper.className = 'fp-slides';
wrap($('.slide'), wrapper);

https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
*/
export function wrap(toWrap, wrapper, isWrapAll) {
    var newParent;
    wrapper = wrapper || doc.createElement('div');
    for(var i = 0; i < toWrap.length; i++){
        var item = toWrap[i];
        if(isWrapAll && !i || !isWrapAll){
            newParent = wrapper.cloneNode(true);
            item.parentNode.insertBefore(newParent, item);
        }
        newParent.appendChild(item);
    }
    return toWrap;
}

/**
Usage:
var wrapper = document.createElement('div');
wrapper.className = 'fp-slides';
wrap($('.slide'), wrapper);

https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
*/
export function wrapAll(toWrap, wrapper) {
    wrap(toWrap, wrapper, true);
}

/**
* Usage:
* wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
* wrapInner(document.querySelector('#pepe'), element);
*
* https://jsfiddle.net/zexxz0tw/6/
*
* https://stackoverflow.com/a/21817590/1081396
*/
export function wrapInner(parent, wrapper) {
    parent.appendChild(wrapper);

    while(parent.firstChild !== wrapper){
        wrapper.appendChild(parent.firstChild);
    }
}

/**
* Usage:
* unwrap(document.querySelector('#pepe'));
* unwrap(element);
*
* https://jsfiddle.net/szjt0hxq/1/
*
*/
export function unwrap(wrapper) {
    var wrapperContent = doc.createDocumentFragment();
    while (wrapper.firstChild) {
        wrapperContent.appendChild(wrapper.firstChild);
    }

    wrapper.parentNode.replaceChild(wrapperContent, wrapper);
}

/**
* http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
* Returns the element or `false` if there's none
*/
export function closest(el, selector) {
    if(el && el.nodeType === 1){
        if(matches(el, selector)){
            return el;
        }
        return closest(el.parentNode, selector);
    }
    return null;
}

/**
* Places one element (rel) after another one or group of them (reference).
* @param {HTMLElement} reference
* @param {HTMLElement|NodeList|String|Array} el
* https://jsfiddle.net/9s97hhzv/1/
*/
export function after(reference, el) {
    insertBefore(reference, reference.nextSibling, el);
}

/**
* Places one element (rel) before another one or group of them (reference).
* @param {HTMLElement} reference
* @param {HTMLElement|NodeList|String|Array} el
* https://jsfiddle.net/9s97hhzv/1/
*/
export function before(reference, el) {
    insertBefore(reference, reference, el);
}

/**
* Based in https://stackoverflow.com/a/19316024/1081396
* and https://stackoverflow.com/a/4793630/1081396
*/
export function insertBefore(reference, beforeElement, el){
    if(!isArrayOrList(el)){
        if(typeof el == 'string'){
            el = createElementFromHTML(el);
        }
        el = [el];
    }

    for(var i = 0; i<el.length; i++){
        reference.parentNode.insertBefore(el[i], beforeElement);
    }
}

//http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
export function getScrollTop(){
    var docElement = doc.documentElement;
    return (win.pageYOffset || docElement.scrollTop)  - (docElement.clientTop || 0);
}

/**
* Gets the siblings of the passed element
*/
export function siblings(el){
    return Array.prototype.filter.call(el.parentNode.children, function(child){
        return child !== el;
    });
}

export function preventDefault(event){
    event.preventDefault();
}

export function getAttr(el, attr){
    return el.getAttribute(attr);
}

export function docAddEvent(event, callback, options){
    doc.addEventListener(event, callback, options === 'undefined' ? null : options);
}

export function windowAddEvent(event, callback, options){
    win.addEventListener(event, callback, options === 'undefined' ? null : options);
}

export function docRemoveEvent(event, callback, options){
    doc.removeEventListener(event, callback, options === 'undefined' ? null : options);
}

export function windowRemoveEvent(event, callback, options){
    win.removeEventListener(event, callback, options === 'undefined' ? null : options);
}

/**
* Determines whether the passed item is of function type.
*/
export function isFunction(item) {
    if (typeof item === 'function') {
        return true;
    }
    var type = Object.prototype.toString.call(item);
    return type === '[object Function]' || type === '[object GeneratorFunction]';
}

/**
* Trigger custom events
*/
export function trigger(el, eventName, data){
    var event;
    data = typeof data === 'undefined' ? {} : data;

    // Native
    if(typeof win.CustomEvent === "function" ){
        event = new CustomEvent(eventName, {detail: data});
    }
    else{
        event = doc.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
    }

    el.dispatchEvent(event);
}

/**
* Polyfill of .matches()
*/
export function matches(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
}

/**
* Toggles the visibility of the passed element el.
*/
export function toggle(el, value){
    if(typeof value === "boolean"){
        for(var i = 0; i<el.length; i++){
            el[i].style.display = value ? 'block' : 'none';
        }
    }
    //we don't use it in other way, so no else :)

    return el;
}

/**
* Creates a HTMLElement from the passed HTML string.
* https://stackoverflow.com/a/494348/1081396
*/
export function createElementFromHTML(htmlString) {
    var div = doc.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

/**
* Removes the passed item/s from the DOM.
*/
export function remove(items){
    items = getList(items);
    for(var i = 0; i<items.length; i++){
        var item = items[i];
        if(item && item.parentElement) {
            item.parentNode.removeChild(item);
        }
    }
}

//https://jsfiddle.net/w1rktecz/
export function untilAll(item, selector, fn){
    var sibling = item[fn];
    var siblings = [];
    while(sibling){
        if(matches(sibling, selector) || selector == null) {
            siblings.push(sibling);
        }
        sibling = sibling[fn];
    }

    return siblings;
}

/**
* Gets all next elements matching the passed selector.
*/
export function nextAll(item, selector){
    return untilAll(item, selector, 'nextElementSibling');
}

/**
* Gets all previous elements matching the passed selector.
*/
export function prevAll(item, selector){
    return untilAll(item, selector, 'previousElementSibling');
}

/**
* Converts an object to an array.
*/
export function toArray(objectData){
    return Object.keys(objectData).map(function(key) {
        return objectData[key];
    });
}

export function getLast(items){
    return items[items.length-1];
}

/**
* Gets the average of the last `number` elements of the given array.
*/
export function getAverage(elements, number){
    var sum = 0;

    //taking `number` elements from the end to make the average, if there are not enought, 1
    var lastElements = elements.slice(Math.max(elements.length - number, 1));

    for(var i = 0; i < lastElements.length; i++){
        sum = sum + lastElements[i];
    }

    return Math.ceil(sum/number);
}

/**
* Sets the value for the given attribute from the `data-` attribute with the same suffix
* ie: data-srcset ==> srcset  |  data-src ==> src
*/
export function setSrc(element, attribute){
    element.setAttribute(attribute, getAttr(element, 'data-' + attribute));
    element.removeAttribute('data-' + attribute);
}

export function getParentsUntil(item, topParentSelector){
    var parents = [item];

    do{
        item = item.parentNode;
        parents.push(item);
    }while(!matches(item, topParentSelector));

    return parents;
}

//utils are public, so we can use it wherever we want
// @ts-ignore
window["fp_utils"] = {
    "$": $,
    "deepExtend": deepExtend,
    "hasClass": hasClass,
    "getWindowHeight": getWindowHeight,
    "css": css,
    "prev": prev,
    "next": next,
    "last": last,
    "index": index,
    "getList": getList,
    "hide": hide,
    "show": show,
    "isArrayOrList": isArrayOrList,
    "addClass": addClass,
    "removeClass": removeClass,
    "appendTo": appendTo,
    "wrap": wrap,
    "wrapAll": wrapAll,
    "unwrap": unwrap,
    "closest": closest,
    "after": after,
    "before": before,
    "insertBefore": insertBefore,
    "getScrollTop": getScrollTop,
    "siblings": siblings,
    "preventDefault": preventDefault,
    "isFunction": isFunction,
    "trigger": trigger,
    "matches": matches,
    "toggle": toggle,
    "createElementFromHTML": createElementFromHTML,
    "remove": remove,
    // "filter": filter,
    "untilAll": untilAll,
    "nextAll": nextAll,
    "prevAll": prevAll,
    "showError": showError
};