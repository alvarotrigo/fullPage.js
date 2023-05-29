/*!
* fullPage 4.0.20
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.fullpage = factory());
})(this, (function () { 'use strict';

    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    if (!Array.prototype.find) {
      Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
          // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

          var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


          var thisArg = arguments[1]; // 5. Let k be 0.

          var k = 0; // 6. Repeat, while k < len

          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return kValue.
            var kValue = o[k];

            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            } // e. Increase k by 1.


            k++;
          } // 7. Return undefined.


          return undefined;
        }
      });
    }

    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    if (!Array.from) {
      Array.from = function () {
        var toStr = Object.prototype.toString;

        var isCallable = function isCallable(fn) {
          return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };

        var toInteger = function toInteger(value) {
          var number = Number(value);

          if (isNaN(number)) {
            return 0;
          }

          if (number === 0 || !isFinite(number)) {
            return number;
          }

          return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };

        var maxSafeInteger = Math.pow(2, 53) - 1;

        var toLength = function toLength(value) {
          var len = toInteger(value);
          return Math.min(Math.max(len, 0), maxSafeInteger);
        }; // The length property of the from method is 1.


        return function from(arrayLike
        /*, mapFn, thisArg */
        ) {
          // 1. Let C be the this value.
          var C = this; // 2. Let items be ToObject(arrayLike).

          var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

          if (arrayLike == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          } // 4. If mapfn is undefined, then let mapping be false.


          var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
          var T;

          if (typeof mapFn !== 'undefined') {
            // 5. else
            // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
            if (!isCallable(mapFn)) {
              throw new TypeError('Array.from: when provided, the second argument must be a function');
            } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


            if (arguments.length > 2) {
              T = arguments[2];
            }
          } // 10. Let lenValue be Get(items, "length").
          // 11. Let len be ToLength(lenValue).


          var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
          // 13. a. Let A be the result of calling the [[Construct]] internal method
          // of C with an argument list containing the single item len.
          // 14. a. Else, Let A be ArrayCreate(len).

          var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

          var k = 0; // 17. Repeat, while k < len… (also steps a - h)

          var kValue;

          while (k < len) {
            kValue = items[k];

            if (mapFn) {
              A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }

            k += 1;
          } // 18. Let putStatus be Put(A, "length", len, true).


          A.length = len; // 20. Return A.

          return A;
        };
      }();
    }

    var win = window;
    var doc = document;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    var isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent); // @ts-ignore

    var isTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; // cache common elements

    var FP = {
      test: {},
      shared: {}
    };
    var extensions = ['parallax', 'scrollOverflowReset', 'dragAndMove', 'offsetSections', 'fadingEffect', 'responsiveSlides', 'continuousHorizontal', 'interlockedSlides', 'scrollHorizontally', 'resetSliders', 'cards', 'dropEffect', 'waterEffect'];

    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */

    if (win.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }

    if (typeof Object.assign != 'function') {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, 'assign', {
        value: function assign(target, varArgs) {

          if (target == null) {
            // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) {
              // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }

          return to;
        },
        writable: true,
        configurable: true
      });
    }

    // https://stackoverflow.com/questions/51719553/padstart-not-working-in-ie11
    // https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    if (!String.prototype.padStart) {
      String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;

        padString = String(typeof padString !== 'undefined' ? padString : ' ');

        if (this.length > targetLength) {
          return String(this);
        } else {
          targetLength = targetLength - this.length;

          if (targetLength > padString.length) {
            padString += Array.apply(null, Array(targetLength)).map(function () {
              return padString;
            }).join("");
          }

          return padString.slice(0, targetLength) + String(this);
        }
      };
    }

    //utils
    /**
    * Shows a message in the console of the given type.
    */

    function showError(type, text) {
      win.console && win.console[type] && win.console[type]('fullPage: ' + text);
    }
    function isVisible(el) {
      var style = win.getComputedStyle(el);
      return style.display !== 'none';
    }
    function getVisible(elements) {
      return Array.from(elements).filter(function (e) {
        return isVisible(e);
      });
    }
    /**
    * Equivalent of jQuery function $().
    */

    function $(selector, context) {
      context = arguments.length > 1 ? context : document;
      return context ? context.querySelectorAll(selector) : null;
    }
    /**
    * Extends a given Object properties and its childs.
    */

    function deepExtend(out) {
      out = out || {};

      for (var i = 1, len = arguments.length; i < len; ++i) {
        var obj = arguments[i];

        if (!obj) {
          continue;
        }

        for (var key in obj) {
          if (!obj.hasOwnProperty(key) || key == '__proto__' || key == 'constructor') {
            continue;
          } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


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

    function hasClass(el, className) {
      if (el == null) {
        return false;
      }

      return el.classList.contains(className);
    }
    /**
    * Gets the window height. Crossbrowser.
    */

    function getWindowHeight() {
      return 'innerHeight' in win ? win.innerHeight : doc.documentElement.offsetHeight;
    }
    /**
    * Gets the window width.
    */

    function getWindowWidth() {
      return win.innerWidth;
    }
    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement|Object} items
    * @param {Object} props css properties and values.
    */

    function css(items, props) {
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

    function prev(item) {
      return item.previousElementSibling;
    }
    /**
    * Gets the next element to the passed element.
    */

    function next(item) {
      return item.nextElementSibling;
    }
    /**
    * Gets the last element from the passed list of elements.
    */

    function last(item) {
      return item[item.length - 1];
    }
    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */

    function index(item, selector) {
      item = isArrayOrList(item) ? item[0] : item;
      var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
      var num = 0;

      for (var i = 0; i < children.length; i++) {
        if (children[i] == item) return num;
        if (children[i].nodeType == 1) num++;
      }

      return -1;
    }
    /**
    * Gets an iterable element for the passed element/s
    */

    function getList(item) {
      return !isArrayOrList(item) ? [item] : item;
    }
    /**
    * Adds the display=none property for the passed element/s
    */

    function hide(el) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'none';
      }

      return el;
    }
    /**
    * Adds the display=block property for the passed element/s
    */

    function show(el) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'block';
      }

      return el;
    }
    /**
    * Checks if the passed element is an iterable element or not
    */

    function isArrayOrList(el) {
      return Object.prototype.toString.call(el) === '[object Array]' || Object.prototype.toString.call(el) === '[object NodeList]';
    }
    /**
    * Adds the passed class to the passed element/s
    */

    function addClass(el, className) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        var item = el[i];
        item.classList.add(className);
      }

      return el;
    }
    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */

    function removeClass(el, className) {
      el = getList(el);
      var classNames = className.split(' ');

      for (var a = 0; a < classNames.length; a++) {
        className = classNames[a];

        for (var i = 0; i < el.length; i++) {
          var item = el[i];
          item.classList.remove(className);
        }
      }

      return el;
    }
    /**
    * Appends the given element ot the given parent.
    */

    function appendTo(el, parent) {
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

    function wrap(toWrap, wrapper, isWrapAll) {
      var newParent;
      wrapper = wrapper || doc.createElement('div');

      for (var i = 0; i < toWrap.length; i++) {
        var item = toWrap[i];

        if (isWrapAll && !i || !isWrapAll) {
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

    function wrapAll(toWrap, wrapper) {
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

    function wrapInner(parent, wrapper) {
      parent.appendChild(wrapper);

      while (parent.firstChild !== wrapper) {
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

    function unwrap(wrapper) {
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

    function closest(el, selector) {
      if (el && el.nodeType === 1) {
        if (matches(el, selector)) {
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

    function after(reference, el) {
      insertBefore(reference, reference.nextSibling, el);
    }
    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */

    function before(reference, el) {
      insertBefore(reference, reference, el);
    }
    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */

    function insertBefore(reference, beforeElement, el) {
      if (!isArrayOrList(el)) {
        if (typeof el == 'string') {
          el = createElementFromHTML(el);
        }

        el = [el];
      }

      for (var i = 0; i < el.length; i++) {
        reference.parentNode.insertBefore(el[i], beforeElement);
      }
    } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll

    function getScrollTop() {
      var docElement = doc.documentElement;
      return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
    }
    /**
    * Gets the siblings of the passed element
    */

    function siblings(el) {
      return Array.prototype.filter.call(el.parentNode.children, function (child) {
        return child !== el;
      });
    }
    function preventDefault(event) {
      event.preventDefault();
    }
    function getAttr(el, attr) {
      return el.getAttribute(attr);
    }
    function docAddEvent(event, callback, options) {
      doc.addEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function windowAddEvent(event, callback, options) {
      win.addEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function docRemoveEvent(event, callback, options) {
      doc.removeEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function windowRemoveEvent(event, callback, options) {
      win.removeEventListener(event, callback, options === 'undefined' ? null : options);
    }
    /**
    * Determines whether the passed item is of function type.
    */

    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }

      var type = Object.prototype.toString.call(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }
    /**
    * Trigger custom events
    */

    function trigger(el, eventName, data) {
      var event;
      data = typeof data === 'undefined' ? {} : data; // Native

      if (typeof win.CustomEvent === "function") {
        event = new CustomEvent(eventName, {
          detail: data
        });
      } else {
        event = doc.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
      }

      el.dispatchEvent(event);
    }
    /**
    * Polyfill of .matches()
    */

    function matches(el, selector) {
      return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }
    /**
    * Toggles the visibility of the passed element el.
    */

    function toggle(el, value) {
      if (typeof value === "boolean") {
        for (var i = 0; i < el.length; i++) {
          el[i].style.display = value ? 'block' : 'none';
        }
      } //we don't use it in other way, so no else :)


      return el;
    }
    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */

    function createElementFromHTML(htmlString) {
      var div = doc.createElement('div');
      div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

      return div.firstChild;
    }
    /**
    * Removes the passed item/s from the DOM.
    */

    function remove(items) {
      items = getList(items);

      for (var i = 0; i < items.length; i++) {
        var item = items[i];

        if (item && item.parentElement) {
          item.parentNode.removeChild(item);
        }
      }
    } //https://jsfiddle.net/w1rktecz/

    function untilAll(item, selector, fn) {
      var sibling = item[fn];
      var siblings = [];

      while (sibling) {
        if (matches(sibling, selector) || selector == null) {
          siblings.push(sibling);
        }

        sibling = sibling[fn];
      }

      return siblings;
    }
    /**
    * Gets all next elements matching the passed selector.
    */

    function nextAll(item, selector) {
      return untilAll(item, selector, 'nextElementSibling');
    }
    /**
    * Gets all previous elements matching the passed selector.
    */

    function prevAll(item, selector) {
      return untilAll(item, selector, 'previousElementSibling');
    }
    /**
    * Converts an object to an array.
    */

    function toArray(objectData) {
      return Object.keys(objectData).map(function (key) {
        return objectData[key];
      });
    }
    function getLast(items) {
      return items[items.length - 1];
    }
    /**
    * Gets the average of the last `number` elements of the given array.
    */

    function getAverage(elements, number) {
      var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

      var lastElements = elements.slice(Math.max(elements.length - number, 1));

      for (var i = 0; i < lastElements.length; i++) {
        sum = sum + lastElements[i];
      }

      return Math.ceil(sum / number);
    }
    /**
    * Sets the value for the given attribute from the `data-` attribute with the same suffix
    * ie: data-srcset ==> srcset  |  data-src ==> src
    */

    function setSrc(element, attribute) {
      element.setAttribute(attribute, getAttr(element, 'data-' + attribute));
      element.removeAttribute('data-' + attribute);
    }
    function getParentsUntil(item, topParentSelector) {
      var parents = [item];

      do {
        item = item.parentNode;
        parents.push(item);
      } while (!matches(item, topParentSelector));

      return parents;
    }
    function isInsideInput() {
      var activeElement = doc.activeElement;
      return matches(activeElement, 'textarea') || matches(activeElement, 'input') || matches(activeElement, 'select') || getAttr(activeElement, 'contentEditable') == "true" || getAttr(activeElement, 'contentEditable') == '';
    } //utils are public, so we can use it wherever we want
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

    var utils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        showError: showError,
        isVisible: isVisible,
        getVisible: getVisible,
        $: $,
        deepExtend: deepExtend,
        hasClass: hasClass,
        getWindowHeight: getWindowHeight,
        getWindowWidth: getWindowWidth,
        css: css,
        prev: prev,
        next: next,
        last: last,
        index: index,
        getList: getList,
        hide: hide,
        show: show,
        isArrayOrList: isArrayOrList,
        addClass: addClass,
        removeClass: removeClass,
        appendTo: appendTo,
        wrap: wrap,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        closest: closest,
        after: after,
        before: before,
        insertBefore: insertBefore,
        getScrollTop: getScrollTop,
        siblings: siblings,
        preventDefault: preventDefault,
        getAttr: getAttr,
        docAddEvent: docAddEvent,
        windowAddEvent: windowAddEvent,
        docRemoveEvent: docRemoveEvent,
        windowRemoveEvent: windowRemoveEvent,
        isFunction: isFunction,
        trigger: trigger,
        matches: matches,
        toggle: toggle,
        createElementFromHTML: createElementFromHTML,
        remove: remove,
        untilAll: untilAll,
        nextAll: nextAll,
        prevAll: prevAll,
        toArray: toArray,
        getLast: getLast,
        getAverage: getAverage,
        setSrc: setSrc,
        getParentsUntil: getParentsUntil,
        isInsideInput: isInsideInput
    });

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    var EventEmitter = {
      events: {},
      on: function on(event, listener) {
        var _this = this;

        if (_typeof(this.events[event]) !== 'object') {
          this.events[event] = [];
        }

        this.events[event].push(listener);
        return function () {
          return _this.removeListener(event, listener);
        };
      },
      removeListener: function removeListener(event, listener) {
        if (_typeof(this.events[event]) === 'object') {
          var idx = this.events[event].indexOf(listener);

          if (idx > -1) {
            this.events[event].splice(idx, 1);
          }
        }
      },
      emit: function emit(event) {
        var _this2 = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (_typeof(this.events[event]) === 'object') {
          this.events[event].forEach(function (listener) {
            return listener.apply(_this2, args);
          });
        }
      },
      once: function once(event, listener) {
        var _this3 = this;

        var remove = this.on(event, function () {
          remove();

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(_this3, args);
        });
      }
    };

    var state = {
      numSections: 0,
      numSlides: 0,
      slides: [],
      sections: [],
      activeSection: null,
      scrollTrigger: null,
      isBeyondFullpage: false,
      aboutToScrollToFullPage: false,
      slideMoving: false,
      isResizing: false,
      isScrolling: false,
      lastScrolledDestiny: undefined,
      lastScrolledSlide: undefined,
      activeAnimation: false,
      canScroll: true,
      touchDirection: 'none',
      wheelDirection: 'none',
      isGrabbing: false,
      isUsingWheel: false,
      isWindowFocused: true,
      previousDestTop: 0,
      windowsHeight: getWindowHeight(),
      isDoingContinousVertical: false,
      timeouts: {},
      scrollY: 0,
      scrollX: 0
    }; // @ts-ignore

    win.state = state;
    function setState(props) {
      Object.assign(state, props);
    }
    function getState() {
      return state;
    }
    function getActivePanel() {
      return state.activeSection && state.activeSection.activeSlide ? state.activeSection.activeSlide : state.activeSection;
    }

    var events = {
      onAfterRenderNoAnchor: 'onAfterRenderNoAnchor',
      onClickOrTouch: 'onClickOrTouch',
      moveSlideLeft: 'moveSlideLeft',
      moveSlideRight: 'moveSlideRight',
      onInitialise: 'onInitialise',
      beforeInit: 'beforeInit',
      bindEvents: 'bindEvents',
      onDestroy: 'onDestroy',
      contentChanged: 'contentChanged',
      onScrollOverflowScrolled: 'onScrollOverflowScrolled',
      onScrollPageAndSlide: 'onScrollPageAndSlide',
      onKeyDown: 'onKeyDown',
      onMenuClick: 'onMenuClick',
      scrollPage: 'scrollPage',
      landscapeScroll: 'landscapeScroll',
      scrollBeyondFullpage: 'scrollBeyondFullpage',
      onPerformMovement: 'onPerformMovement',
      onSlideLeave: 'onSlideLeave',
      onLeave: 'onLeave',
      afterSectionLoads: 'afterSectionLoads',
      afterSlideLoads: 'afterSlideLoads'
    };

    EventEmitter.on(events.bindEvents, bindEvents$c);

    function bindEvents$c() {
      //Scrolls to the section when clicking the navigation bullet
      //simulating the jQuery .on('click') event using delegation
      ['click', 'touchstart'].forEach(function (eventName) {
        docAddEvent(eventName, delegatedEvents);
      });
      windowAddEvent('focus', focusHandler);
      internalEvents();
    }

    function internalEvents() {
      EventEmitter.on(events.onDestroy, onDestroy$9);
    }

    function delegatedEvents(e) {
      EventEmitter.emit(events.onClickOrTouch, {
        e: e,
        target: e.target
      });
    }

    function onDestroy$9() {
      ['click', 'touchstart'].forEach(function (eventName) {
        docRemoveEvent(eventName, delegatedEvents);
      });
    } // changing isWindowFocused to true on focus event


    function focusHandler() {
      setState({
        isWindowFocused: true
      });
    }

    // keeping central set of classnames and selectors
    var WRAPPER = 'fullpage-wrapper';
    var WRAPPER_SEL = '.' + WRAPPER; // slimscroll

    var SCROLLABLE = 'fp-scrollable';

    var RESPONSIVE = 'fp-responsive';
    var NO_TRANSITION = 'fp-notransition';
    var DESTROYED = 'fp-destroyed';
    var ENABLED = 'fp-enabled';
    var VIEWING_PREFIX = 'fp-viewing';
    var ACTIVE = 'active';
    var ACTIVE_SEL = '.' + ACTIVE;
    var COMPLETELY = 'fp-completely';
    var COMPLETELY_SEL = '.' + COMPLETELY; // section

    var SECTION_DEFAULT_SEL = '.section';
    var SECTION = 'fp-section';
    var SECTION_SEL = '.' + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL = 'fp-tableCell';
    var TABLE_CELL_SEL = '.' + TABLE_CELL;
    var AUTO_HEIGHT = 'fp-auto-height';
    var AUTO_HEIGHT_SEL = '.' + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL = 'fp-normal-scroll';

    var SECTION_NAV = 'fp-nav';
    var SECTION_NAV_SEL = '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP = 'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; // slide

    var SLIDE_DEFAULT_SEL = '.slide';
    var SLIDE = 'fp-slide';
    var SLIDE_SEL = '.' + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = 'fp-slides';
    var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER = 'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
    var TABLE = 'fp-table';
    var OVERFLOW = 'fp-overflow';
    var OVERFLOW_SEL = '.' + OVERFLOW;
    var IS_OVERFLOW = 'fp-is-overflow'; // slide nav

    var SLIDES_NAV = 'fp-slidesNav';
    var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
    var SLIDES_STYLED_ARROW = 'fp-arrow';
    var SLIDES_ARROW = 'fp-controlArrow';
    var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
    var SLIDES_PREV = 'fp-prev';
    var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT = 'fp-next';
    var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var defaultOptions = {
      //navigation
      menu: false,
      anchors: [],
      lockAnchors: false,
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: [],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
      scrollBar: false,
      hybrid: false,
      licenseKey: '',
      credits: {
        "enabled": true,
        "label": 'Made with fullPage.js',
        "position": 'right'
      },
      //scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 600,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: null,
      scrollOverflow: true,
      scrollOverflowReset: false,
      touchSensitivity: 5,
      touchWrapper: null,
      bigSectionsDestination: null,
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
      allowCorrectDirection: false,
      //design
      scrollOverflowMacStyle: true,
      controlArrows: true,
      controlArrowsHTML: ['<div class="' + SLIDES_STYLED_ARROW + '"></div>', '<div class="' + SLIDES_STYLED_ARROW + '"></div>'],
      controlArrowColor: '#fff',
      verticalCentered: true,
      sectionsColor: [],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsive: 0,
      //backwards compabitility with responsiveWiddth
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
      },
      cards: false,
      cardsOptions: {
        perspective: 100,
        fadeContent: true,
        fadeBackground: true
      },
      //Custom selectors
      sectionSelector: SECTION_DEFAULT_SEL,
      slideSelector: SLIDE_DEFAULT_SEL,
      //events
      afterLoad: null,
      beforeLeave: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null,
      afterResponsive: null,
      onScrollOverflow: null,
      lazyLoading: true,
      observer: true,
      scrollBeyondFullpage: true
    };

    var container = null;
    var g_initialAnchorsInDom = false;
    var originals = deepExtend({}, defaultOptions); //deep copy

    var g_options = null;
    function getInitialAnchorsInDom() {
      return g_initialAnchorsInDom;
    }
    function setContainer(value) {
      container = value;
    }
    function getContainer(value) {
      return container;
    }
    function getOptions() {
      return g_options || defaultOptions;
    }
    function setOptions(options) {
      g_options = deepExtend({}, defaultOptions, options);
      originals = Object.assign({}, g_options);
    }
    function getOriginals() {
      return originals;
    }
    function setOption(name, value) {
      defaultOptions[name] = value;
    }
    /*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */

    function setVariableState(variable, value, type) {
      g_options[variable] = value;

      if (type !== 'internal') {
        originals[variable] = value;
      }
    }
    /**
    * Setting options from DOM elements if they are not provided.
    */

    function setOptionsFromDOM() {
      //no anchors option? Checking for them in the DOM attributes
      if (!getOptions().anchors.length) {
        var anchorsAttribute = '[data-anchor]';
        var anchors = $(getOptions().sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);

        if (anchors.length && anchors.length === $(getOptions().sectionSelector, container).length) {
          g_initialAnchorsInDom = true;
          anchors.forEach(function (item) {
            getOptions().anchors.push(getAttr(item, 'data-anchor').toString());
          });
        }
      } //no tooltips option? Checking for them in the DOM attributes


      if (!getOptions().navigationTooltips.length) {
        var tooltipsAttribute = '[data-tooltip]';
        var tooltips = $(getOptions().sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);

        if (tooltips.length) {
          tooltips.forEach(function (item) {
            getOptions().navigationTooltips.push(getAttr(item, 'data-tooltip').toString());
          });
        }
      }
    }

    var plainItem = function plainItem(panel) {
      this.anchor = panel.anchor;
      this.item = panel.item;
      this.index = panel.index();
      this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length - 1;
      this.isFirst = !this.index;
      this.isActive = panel.isActive;
    };
    /**
    * Item. Slide or Section objects share the same properties.
    */

    var Item = function Item(el, selector) {
      this.parent = this.parent || null;
      this.selector = selector;
      this.anchor = getAttr(el, 'data-anchor') || getOptions().anchors[index(el, getOptions().sectionSelector)];
      this.item = el;
      this.isVisible = isVisible(el);
      this.isActive = hasClass(el, ACTIVE);
      this.hasScroll = hasClass(el, OVERFLOW) || $(OVERFLOW_SEL, el)[0] != null;
      this.isSection = selector === getOptions().sectionSelector;
      this.container = closest(el, SLIDES_CONTAINER_SEL) || closest(el, WRAPPER_SEL);

      this.index = function () {
        return this.siblings().indexOf(this);
      };
    };

    Item.prototype.siblings = function () {
      if (this.isSection) {
        if (this.isVisible) {
          return state.sections;
        } else {
          return state.sectionsIncludingHidden;
        }
      }

      return this.parent ? this.parent.slides : 0;
    };

    Item.prototype.prev = function () {
      var siblings = this.siblings();
      var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
      var prevIndex = currentIndex - 1;

      if (prevIndex >= 0) {
        return siblings[prevIndex];
      }

      return null;
    };

    Item.prototype.next = function () {
      var siblings = this.siblings();
      var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
      var nextIndex = currentIndex + 1;

      if (nextIndex < siblings.length) {
        return siblings[nextIndex];
      }

      return null;
    };

    Item.prototype["prevPanel"] = function () {
      return this.prev() || (this.parent ? this.parent.prev() : null);
    };

    Item.prototype["nextPanel"] = function () {
      return this.next() || (this.parent ? this.parent.next() : null);
    };

    Item.prototype.getSiblings = function () {
      if (this.isSection) {
        return state.sections;
      }

      return state.panels;
    };

    function getNodes(panels) {
      return panels.map(function (panel) {
        return panel.item;
      });
    }
    function getPanelByElement(panels, el) {
      return panels.find(function (panel) {
        return panel.item === el;
      });
    }
    var Section = function Section(el) {
      plainItem.call(this, el);
    };
    var Slide = function Slide(el) {
      plainItem.call(this, el);
    };

    /**
    * Gets the active slide (or section) for the given section
    */

    function getSlideOrSection(destiny) {
      var slide = $(SLIDE_ACTIVE_SEL, destiny);

      if (slide.length) {
        destiny = slide[0];
      }

      return destiny;
    }
    function getSlideOrSectionPanel(panel) {
      if (!panel) {
        return null;
      }

      return panel.activeSlide ? panel.activeSlide : panel;
    }
    function isFullPageAbove() {
      return getContainer().getBoundingClientRect().bottom >= 0;
    }
    /**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */

    function getScrollSettings(top) {
      var options = getOptions();
      var position;
      var element; //top property animation

      if (options.autoScrolling && !options.scrollBar) {
        position = -top;
        element = $(WRAPPER_SEL)[0];
      } //window real scrolling
      else {
        position = top;
        element = window;
      }

      return {
        options: position,
        element: element
      };
    }
    /**
    * Scrolls the page / slider the given number of pixels.
    * It will do it one or another way dependiong on the library's config.
    */

    function setScrolling(element, val) {
      if (!getOptions().autoScrolling || getOptions().scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
        //scrolling horizontally through the slides?
        if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
          element.scrollLeft = val;
        } //vertical scroll
        else {
          element.scrollTo(0, val);
        }
      } else {
        element.style.top = val + 'px';
      }
    }
    /**
    * Adds transition animations for the given element
    */

    function addAnimation(element) {
      var transition = 'transform ' + getOptions().scrollingSpeed + 'ms ' + getOptions().easingcss3;
      removeClass(element, NO_TRANSITION);
      return css(element, {
        '-webkit-transition': transition,
        'transition': transition
      });
    }
    /**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */

    function getYmovement(activeSection, destiny) {
      var fromIndex = activeSection.index();
      var toIndex = index(destiny, SECTION_SEL);

      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'up';
      }

      return 'down';
    }
    /**
    * Remove transition animations for the given element
    */

    function removeAnimation(element) {
      return addClass(element, NO_TRANSITION);
    }
    /**
    * Returns the cross-browser transform string.
    */

    function getTransforms(translate3d) {
      return {
        '-webkit-transform': translate3d,
        '-moz-transform': translate3d,
        '-ms-transform': translate3d,
        'transform': translate3d
      };
    }

    var silentScrollId;
    /**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */

    function transformContainer(translate3d, animated) {
      if (animated) {
        addAnimation(getContainer());
      } else {
        removeAnimation(getContainer());
      }

      clearTimeout(silentScrollId);
      css(getContainer(), getTransforms(translate3d));
      FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applied.

      silentScrollId = setTimeout(function () {
        removeClass(getContainer(), NO_TRANSITION);
      }, 10);
    }

    /**
    * Scrolls silently (with no animation) the page to the given Y position.
    */

    function silentScroll(top) {
      // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
      // that's why we round it to 0.
      var roundedTop = Math.round(top);

      if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
        var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
        transformContainer(translate3d, false);
      } else if (getOptions().autoScrolling && !getOptions().scrollBar) {
        css(getContainer(), {
          'top': -roundedTop + 'px'
        });
        FP.test.top = -roundedTop + 'px';
      } else {
        var scrollSettings = getScrollSettings(roundedTop);
        setScrolling(scrollSettings.element, scrollSettings.options);
      }
    }

    FP.setScrollingSpeed = setScrollingSpeed;
    /**
    * Defines the scrolling speed
    */

    function setScrollingSpeed(value, type) {
      setVariableState('scrollingSpeed', value, type);
    }

    var $body = null;
    var $html = null;
    var $htmlBody = null; // caching common elements

    function setCache() {
      $body = $('body')[0];
      $html = $('html')[0];
      $htmlBody = $('html, body');
    }

    //@ts-check

    var _g_animateScroll;
    /**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */


    function scrollTo(element, to, duration, callback) {
      var start = getScrolledPosition(element);
      var change = to - start;
      var isCallbackFired = false;
      var startTime;
      var wasAnimationActive = state.activeAnimation;
      setState({
        activeAnimation: true
      }); // Cancelling any possible previous animations (io: clicking on nav dots very fast)

      if (_g_animateScroll) {
        window.cancelAnimationFrame(_g_animateScroll);
      }

      _g_animateScroll = function g_animateScroll(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        var currentTime = Math.floor(timestamp - startTime);

        if (state.activeAnimation) {
          //in order to stope it from other function whenever we want
          var val = to;

          if (duration) {
            // @ts-ignore
            val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
          }

          if (currentTime <= duration) {
            setScrolling(element, val);
          }

          if (currentTime < duration) {
            window.requestAnimationFrame(_g_animateScroll);
          } else if (typeof callback !== 'undefined' && !isCallbackFired) {
            callback();
            setState({
              activeAnimation: false
            });
            isCallbackFired = true;
          }
        } else if (!isCallbackFired && !wasAnimationActive) {
          callback();
          setState({
            activeAnimation: false
          });
          isCallbackFired = true;
        }
      };

      window.requestAnimationFrame(_g_animateScroll);
    }
    /**
    * Getting the position of the element to scroll when using jQuery animations
    */

    function getScrolledPosition(element) {
      var position; //is not the window element and is a slide?

      if (element.self != win && hasClass(element, SLIDES_WRAPPER)) {
        position = element.scrollLeft;
      } else if (!getOptions().autoScrolling || getOptions().scrollBar) {
        position = getScrollTop();
      } else {
        position = element.offsetTop;
      } //gets the top property of the wrapper


      return position;
    }

    /**
    * Makes sure to only create a Panel object if the element exist
    */

    function nullOrSection(el) {
      if (el && !el.item) {
        return new Section(new SectionPanel(el));
      }

      return el ? new Section(el) : null;
    }

    function nullOrSlide(el) {
      return el ? new Slide(el) : null;
    }

    /**
    * Dispatch events & callbacks
    */

    function fireCallback(eventName, v) {
      var eventData = getEventData(eventName, v);
      trigger(getContainer(), eventName, eventData);

      if (getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) {
        return false;
      }

      return true;
    }
    /**
    * Gets the event's data for the given event on the right format.
    */

    function getEventData(eventName, v) {
      //using functions to run only the necessary bits within the object
      var paramsPerEvent = {
        afterRender: function afterRender() {
          return {
            section: nullOrSection(getState().activeSection),
            slide: nullOrSlide(getState().activeSection.activeSlide)
          };
        },
        onLeave: function onLeave() {
          return {
            origin: nullOrSection(v.items.origin),
            destination: nullOrSection(v.items.destination),
            direction: v.direction,
            trigger: getState().scrollTrigger
          };
        },
        afterLoad: function afterLoad() {
          return paramsPerEvent.onLeave();
        },
        afterSlideLoad: function afterSlideLoad() {
          return {
            section: nullOrSection(v.items.section),
            origin: nullOrSection(v.items.origin),
            destination: nullOrSection(v.items.destination),
            direction: v.direction,
            trigger: getState().scrollTrigger
          };
        },
        onSlideLeave: function onSlideLeave() {
          return paramsPerEvent.afterSlideLoad();
        },
        beforeLeave: function beforeLeave() {
          return paramsPerEvent.onLeave();
        },
        onScrollOverflow: function onScrollOverflow() {
          return {
            section: nullOrSection(getState().activeSection),
            slide: nullOrSlide(getState().activeSection.activeSlide),
            position: v.position,
            direction: v.direction
          };
        }
      };
      return paramsPerEvent[eventName]();
    }

    /**
    * Plays video and audio elements.
    */

    function playMedia(destiny) {
      var panel = getSlideOrSection(destiny); //playing HTML5 media elements

      $('video, audio', panel).forEach(function (element) {
        if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
          element.play();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (element.hasAttribute('data-autoplay')) {
          playYoutube(element);
        } //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.


        element.onload = function () {
          if (element.hasAttribute('data-autoplay')) {
            playYoutube(element);
          }
        };
      });
    }
    /**
    * Plays a youtube video
    */

    function playYoutube(element) {
      element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    /**
    * Stops video and audio elements.
    */


    function stopMedia(destiny) {
      var panel = getSlideOrSection(destiny); //stopping HTML5 media elements

      $('video, audio', panel).forEach(function (element) {
        if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
          element.pause();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (/youtube\.com\/embed\//.test(getAttr(element, 'src')) && !element.hasAttribute('data-keepplaying')) {
          element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    }
    /*
    * Enables the Youtube videos API so we can control their flow if necessary.
    */

    function enableYoutubeAPI() {
      $('iframe[src*="youtube.com/embed/"]', getContainer()).forEach(function (item) {
        addURLParam(item, 'enablejsapi=1');
      });
    }
    /**
    * Adds a new parameter and its value to the `src` of a given element
    */

    function addURLParam(element, newParam) {
      var originalSrc = getAttr(element, 'src');
      element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
    }
    /*
    * Returns the prefix sign to use for a new parameter in an existen URL.
    *
    * @return {String}  ? | &
    */


    function getUrlParamSign(url) {
      return !/\?/.test(url) ? '?' : '&';
    }

    /**
    * Lazy loads image, video and audio elements.
    */

    function lazyLoad(destiny) {
      if (!getOptions().lazyLoading) {
        return;
      }

      var panel = getSlideOrSection(destiny);
      $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function (element) {
        ['src', 'srcset'].forEach(function (type) {
          var attribute = getAttr(element, 'data-' + type);

          if (attribute != null && attribute) {
            setSrc(element, type);
            element.addEventListener('load', function () {
            });
          }
        });

        if (matches(element, 'source')) {
          var elementToPlay = closest(element, 'video, audio');

          if (elementToPlay) {
            elementToPlay.load();

            elementToPlay.onloadeddata = function () {
            };
          }
        }
      });
    }

    /**
    * Sets a class for the body of the page depending on the active section / slide
    */

    function setBodyClass() {
      var section = getState().activeSection.item;
      var slide = getState().activeSection.activeSlide;
      var sectionAnchor = getAnchor(section);
      var text = String(sectionAnchor);

      if (slide) {
        var slideAnchor = getAnchor(slide.item);
        text = text + '-' + slideAnchor;
      } //changing slash for dash to make it a valid CSS style


      text = text.replace('/', '-').replace('#', ''); //removing previous anchor classes

      var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
      $body.className = $body.className.replace(classRe, ''); //adding the current anchor

      addClass($body, VIEWING_PREFIX + '-' + text);
    }
    /**
    * Gets the anchor for the given slide / section. Its index will be used if there's none.
    */

    function getAnchor(element) {
      if (!element) {
        return null;
      }

      var anchor = getAttr(element, 'data-anchor');
      var elementIndex = index(element); //Slide without anchor link? We take the index instead.

      if (anchor == null) {
        anchor = elementIndex;
      }

      return anchor;
    }

    /**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */

    function setPageStatus(slideIndex, slideAnchor, anchorLink) {
      var sectionHash = '';

      if (getOptions().anchors.length && !getOptions().lockAnchors) {
        //isn't it the first slide?
        if (slideIndex) {
          if (anchorLink != null) {
            sectionHash = anchorLink;
          } //slide without anchor link? We take the index instead.


          if (slideAnchor == null) {
            slideAnchor = slideIndex;
          }

          setState({
            lastScrolledSlide: slideAnchor
          });
          setUrlHash(sectionHash + '/' + slideAnchor); //first slide won't have slide anchor, just the section one
        } else if (slideIndex != null) {
          setState({
            lastScrolledSlide: slideAnchor
          });
          setUrlHash(anchorLink);
        } //section without slides
        else {
          setUrlHash(anchorLink);
        }
      }

      setBodyClass();
    }
    /**
    * Sets the URL hash.
    */

    function setUrlHash(url) {
      if (getOptions().recordHistory) {
        location.hash = url;
      } else {
        //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if (isTouchDevice || isTouch) {
          win.history.replaceState(undefined, undefined, '#' + url);
        } else {
          var baseUrl = win.location.href.split('#')[0];
          win.location.replace(baseUrl + '#' + url);
        }
      }
    }

    /**
    * Gets the name for screen readers for a section/slide navigation bullet.
    */

    function getBulletLinkName(i, defaultName, item) {
      var anchor = defaultName === 'Section' ? getOptions().anchors[i] : getAttr(item, 'data-anchor');
      return encodeURI(getOptions().navigationTooltips[i] || anchor || defaultName + ' ' + (i + 1));
    }

    function slideBulletHandler(e) {
      // not all events are cancellable 
      // https://www.uriports.com/blog/easy-fix-for-intervention-ignored-attempt-to-cancel-a-touchmove-event-with-cancelable-false/
      if (e.cancelable) {
        preventDefault(e);
      }

      setState({
        scrollTrigger: 'horizontalNav'
      });
      /*jshint validthis:true */

      var sectionElem = closest(this, SECTION_SEL);
      var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
      var section = getPanelByElement(getState().sections, sectionElem);
      var destiny = section.slides[index(closest(this, 'li'))];
      EventEmitter.emit(events.landscapeScroll, {
        slides: slides,
        destination: destiny.item
      });
    }
    /**
    * Sets the state for the horizontal bullet navigations.
    */

    function activeSlidesNavigation(slidesNav, slideIndex) {
      if (getOptions().slidesNavigation && slidesNav != null) {
        removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
        addClass($('a', $('li', slidesNav)[slideIndex]), ACTIVE);
      }
    }
    /**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */

    function addSlidesNavigation(section) {
      var sectionElem = section.item;
      var numSlides = section.slides.length;
      appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
      var nav = $(SLIDES_NAV_SEL, sectionElem)[0]; //top or bottom

      addClass(nav, 'fp-' + getOptions().slidesNavPosition);

      for (var i = 0; i < numSlides; i++) {
        var slide = $(SLIDE_SEL, sectionElem)[i];
        appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, 'Slide', slide) + '</span><span></span></a></li>'), $('ul', nav)[0]);
      } //centering it


      css(nav, {
        'margin-left': '-' + nav.innerWidth / 2 + 'px'
      });
      var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
      addClass($('a', $('li', nav)[activeSlideIndex]), ACTIVE);
    }

    var isScrollAllowed = {};
    isScrollAllowed.m = {
      'up': true,
      'down': true,
      'left': true,
      'right': true
    };
    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
    /**
    * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
    * @param type m (mouse) or k (keyboard)
    */

    function setIsScrollAllowed(value, direction, type) {
      //up, down, left, right
      if (direction !== 'all') {
        isScrollAllowed[type][direction] = value;
      } //all directions?
      else {
        Object.keys(isScrollAllowed[type]).forEach(function (key) {
          isScrollAllowed[type][key] = value;
        });
      }
    }
    function getIsScrollAllowed() {
      return isScrollAllowed;
    }

    EventEmitter.on(events.onClickOrTouch, onClickOrTouch$2);

    function onClickOrTouch$2(params) {
      var target = params.target;

      if (matches(target, SLIDES_ARROW_SEL) || closest(target, SLIDES_ARROW_SEL)) {
        slideArrowHandler.call(target, params);
      }
    } //Scrolling horizontally when clicking on the slider controls.


    function slideArrowHandler() {
      /*jshint validthis:true */
      var section = closest(this, SECTION_SEL);
      /*jshint validthis:true */

      if (hasClass(this, SLIDES_PREV)) {
        if (getIsScrollAllowed().m.left) {
          setState({
            scrollTrigger: 'slideArrow'
          });
          EventEmitter.emit(events.moveSlideLeft, {
            section: section
          });
        }
      } else {
        if (getIsScrollAllowed().m.right) {
          setState({
            scrollTrigger: 'slideArrow'
          });
          EventEmitter.emit(events.moveSlideRight, {
            section: section
          });
        }
      }
    }
    /**
    * Creates the control arrows for the given section
    */


    function createSlideArrows(section) {
      var sectionElem = section.item;
      var arrows = [createElementFromHTML(getOptions().controlArrowsHTML[0]), createElementFromHTML(getOptions().controlArrowsHTML[1])];
      after($(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
      addClass(arrows, SLIDES_ARROW);
      addClass(arrows[0], SLIDES_PREV);
      addClass(arrows[1], SLIDES_NEXT);

      if (getOptions().controlArrowColor !== '#fff') {
        css($(SLIDES_ARROW_NEXT_SEL, sectionElem), {
          'border-color': 'transparent transparent transparent ' + getOptions().controlArrowColor
        });
        css($(SLIDES_ARROW_PREV_SEL, sectionElem), {
          'border-color': 'transparent ' + getOptions().controlArrowColor + ' transparent transparent'
        });
      }

      if (!getOptions().loopHorizontal) {
        hide($(SLIDES_ARROW_PREV_SEL, sectionElem));
      }
    }
    function toggleControlArrows(v) {
      if (!getOptions().loopHorizontal && getOptions().controlArrows) {
        //hidding it for the fist slide, showing for the rest
        toggle($(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest

        toggle($(SLIDES_ARROW_NEXT_SEL, v.section), next(v.destiny) != null);
      }
    }

    FP.setRecordHistory = setRecordHistory;
    /**
    * Defines wheter to record the history for each hash change in the URL.
    */

    function setRecordHistory(value, type) {
      setVariableState('recordHistory', value, type);
    }

    FP.setAutoScrolling = setAutoScrolling;
    FP.test.setAutoScrolling = setAutoScrolling;
    /**
    * Sets the autoScroll option.
    * It changes the scroll bar visibility and the history of the site as a result.
    */

    function setAutoScrolling(value, type) {
      //removing the transformation
      if (!value) {
        silentScroll(0);
      }

      setVariableState('autoScrolling', value, type);
      var element = getState().activeSection.item;

      if (getOptions().autoScrolling && !getOptions().scrollBar) {
        css($htmlBody, {
          'overflow': 'hidden',
          'height': '100%'
        });
        removeClass($body, 'fp-scrollable');
        setRecordHistory(getOriginals().recordHistory, 'internal'); //for IE touch devices

        css(getContainer(), {
          '-ms-touch-action': 'none',
          'touch-action': 'none'
        });

        if (element != null) {
          //moving the container up
          silentScroll(element.offsetTop);
        }
      } else {
        css($htmlBody, {
          'overflow': 'visible',
          'height': 'initial'
        });
        addClass($body, 'fp-scrollable');
        var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
        setRecordHistory(recordHistory, 'internal'); //for IE touch devices

        css(getContainer(), {
          '-ms-touch-action': '',
          'touch-action': ''
        }); //scrolling the page to the section with no animation

        if (element != null) {
          var scrollSettings = getScrollSettings(element.offsetTop);
          scrollSettings.element.scrollTo(0, scrollSettings.options);
        }
      }
    }

    //@ts-check
    /**
    * Adds sections before or after the current one to create the infinite effect.
    */

    function createInfiniteSections(v) {
      setState({
        isDoingContinousVertical: true
      });
      var activeSectionItem = getState().activeSection.item; // Scrolling down

      if (!v.isMovementUp) {
        // Move all previous sections to after the active section
        after(activeSectionItem, prevAll(activeSectionItem, SECTION_SEL).reverse());
      } else {
        // Scrolling up
        // Move all next sections to before the active section
        before(activeSectionItem, nextAll(activeSectionItem, SECTION_SEL));
      } // Maintain the displayed position (now that we changed the element order)


      silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition$1(); // save for later the elements that still need to be reordered

      v.wrapAroundElements = activeSectionItem; // Recalculate animation variables

      v.dtop = v.element.offsetTop;
      v.yMovement = getYmovement(getState().activeSection, v.element);
      return v;
    }
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */

    function keepSlidesPosition$1() {
      var activeSlides = $(SLIDE_ACTIVE_SEL);

      for (var i = 0; i < activeSlides.length; i++) {
        silentLandscapeScroll(activeSlides[i], 'internal');
      }
    }

    //@ts-check
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */

    function keepSlidesPosition() {
      var activeSlides = $(SLIDE_ACTIVE_SEL);

      for (var i = 0; i < activeSlides.length; i++) {
        silentLandscapeScroll(activeSlides[i], 'internal');
      }
    }
    /**
    * Fix section order after continuousVertical changes have been animated
    */


    function continuousVerticalFixSectionOrder(v) {
      // If continuousVertical is in effect (and autoScrolling would also be in effect then),
      // finish moving the elements around so the direct navigation will function more simply
      if (v.wrapAroundElements == null) {
        return;
      }

      if (v.isMovementUp) {
        before($(SECTION_SEL)[0], v.wrapAroundElements);
      } else {
        after($(SECTION_SEL)[getState().sections.length - 1], v.wrapAroundElements);
      }

      silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition();
      setState({
        isDoingContinousVertical: false
      });
    }

    /**
    * Makes sure lazyload is done for other sections in the viewport that are not the
    * active one. 
    */

    function lazyLoadOthers() {
      var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply

      if (!getOptions().lazyLoading || !hasAutoHeightSections) {
        return;
      } //making sure to lazy load auto-height sections that are in the viewport


      $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function (section) {
        if (isSectionInViewport(section)) {
          lazyLoad(section);
        }
      });
    }
    /**
    * Determines whether a section is in the viewport or not.
    */

    function isSectionInViewport(el) {
      var rect = el.getBoundingClientRect();
      var top = rect.top;
      var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the 
      //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
      //using this prevents from lazyLoading the section that is not yet visible 
      //(only 1 pixel offset is)

      var pixelOffset = 2;
      var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
      var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;
      return isTopInView || isBottomInView;
    }

    function tooltipTextHandler() {
      /*jshint validthis:true */
      trigger(prev(this), 'click');
    }
    /**
    * Activating the vertical navigation bullets according to the given slide name.
    */

    function activateNavDots(name, sectionIndex) {
      var nav = $(SECTION_NAV_SEL)[0];

      if (getOptions().navigation && nav != null && nav.style.display !== 'none') {
        removeClass($(ACTIVE_SEL, nav), ACTIVE);

        if (name) {
          addClass($('a[href="#' + name + '"]', nav), ACTIVE);
        } else {
          addClass($('a', $('li', nav)[sectionIndex]), ACTIVE);
        }
      }
    }
    /**
    * Creates a vertical navigation bar.
    */

    function addVerticalNavigation() {
      remove($(SECTION_NAV_SEL));
      var navigation = doc.createElement('div');
      navigation.setAttribute('id', SECTION_NAV);
      var divUl = doc.createElement('ul');
      navigation.appendChild(divUl);
      appendTo(navigation, $body);
      var nav = $(SECTION_NAV_SEL)[0];
      addClass(nav, 'fp-' + getOptions().navigationPosition);

      if (getOptions().showActiveTooltip) {
        addClass(nav, SHOW_ACTIVE_TOOLTIP);
      }

      var li = '';

      for (var i = 0; i < getState().sections.length; i++) {
        var section = getState().sections[i];
        var link = '';

        if (getOptions().anchors.length) {
          link = section.anchor;
        }

        li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), 'Section') + '</span><span></span></a>'; // Only add tooltip if needed (defined by user)

        var tooltip = getOptions().navigationTooltips[section.index()];

        if (typeof tooltip !== 'undefined' && tooltip !== '') {
          li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + getOptions().navigationPosition + '">' + tooltip + '</div>';
        }

        li += '</li>';
      }

      $('ul', nav)[0].innerHTML = li; //activating the current active section

      var bullet = $('li', $(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
      addClass($('a', bullet), ACTIVE);
    } //Scrolls to the section when clicking the navigation bullet

    function sectionBulletHandler(e) {
      if (e.preventDefault) {
        preventDefault(e);
      }

      setState({
        scrollTrigger: 'verticalNav'
      });
      /*jshint validthis:true */
      // @ts-ignore

      var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
      EventEmitter.emit(events.scrollPage, {
        destination: getState().sections[indexBullet]
      });
    }

    /**
    * Sets to active the current menu and vertical nav items.
    */

    function activateMenuAndNav(anchor, index) {
      activateMenuElement(anchor);
      activateNavDots(anchor, index);
    }
    /**
    * Activating the website main menu elements according to the given slide name.
    */

    function activateMenuElement(name) {
      if (getOptions().menu && getOptions().menu.length) {
        $(getOptions().menu).forEach(function (menu) {
          if (menu != null) {
            removeClass($(ACTIVE_SEL, menu), ACTIVE);
            addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
          }
        });
      }
    }

    new Date().getTime();
    /**
     * Triggers the callback once per scroll wheel action.
     * Based on scrolling speed delay.
     */

    var oncePerScroll = function () {
      var canTriggerEvent = true;
      var prevWheelTime = new Date().getTime();
      var result;
      var isScrollingOnInit = !win.fullpage_api;
      return function (scrollTrigger, callback) {
        var currentTime = new Date().getTime();
        var timeThreshold = scrollTrigger === 'wheel' ? getOptions().scrollingSpeed : 100;
        canTriggerEvent = isScrollingOnInit || currentTime - prevWheelTime >= timeThreshold;
        isScrollingOnInit = !win.fullpage_api;

        if (canTriggerEvent) {
          result = callback();
          prevWheelTime = currentTime;
        }

        return typeof result !== 'undefined' ? result : true;
      };
    }();

    /**
    * Fires the wheel event once per mouse wheel trigger.
    */

    function fireCallbackOncePerScroll(callbackName, params) {
      if (!isFunction(getOptions().beforeLeave)) {
        return;
      }

      var result = oncePerScroll(getState().scrollTrigger, function () {
        return fireCallback(callbackName, params);
      });
      return result;
    }

    FP.moveTo = moveTo;

    FP.getScrollY = function () {
      return state.scrollY;
    };

    var g_afterSectionLoadsId;
    var g_transitionLapseId;
    EventEmitter.on(events.onDestroy, onDestroy$8);
    /**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */

    function scrollPage(section, callback, isMovementUp) {
      var element = section.item;

      if (element == null) {
        return;
      } //there's no element to scroll, leaving the function


      var dtop = getDestinationPosition(element);
      var slideAnchorLink;
      var slideIndex; //local variables

      var v = {
        "element": element,
        "callback": callback,
        "isMovementUp": isMovementUp,
        "dtop": dtop,
        "yMovement": getYmovement(getState().activeSection, element),
        "anchorLink": section.anchor,
        "sectionIndex": section.index(),
        "activeSlide": section.activeSlide ? section.activeSlide.item : null,
        "leavingSection": getState().activeSection.index() + 1,
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        "localIsResizing": state.isResizing,
        "items": {
          "origin": getState().activeSection,
          "destination": section
        },
        "direction": null
      }; //quiting when destination scroll is the same as the current one

      if (getState().activeSection.item == element && !state.isResizing || getOptions().scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) {
        return;
      }

      if (v.activeSlide != null) {
        slideAnchorLink = getAttr(v.activeSlide, 'data-anchor');
        slideIndex = index(v.activeSlide, null);
      } //callback (onLeave) if the site is not just resizing and readjusting the slides


      if (!v.localIsResizing) {
        var direction = v.yMovement; //required for continousVertical

        if (typeof isMovementUp !== 'undefined') {
          direction = isMovementUp ? 'up' : 'down';
        } //for the callback


        v.direction = direction;

        if (isFunction(getOptions().beforeLeave)) {
          if (fireCallbackOncePerScroll('beforeLeave', v) === false) {
            return;
          }
        }

        if (isFunction(getOptions().onLeave)) {
          if (!fireCallback('onLeave', v)) {
            return;
          }
        }
      } // If continuousVertical && we need to wrap around


      if (getOptions().autoScrolling && getOptions().continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
      v.isMovementUp && v.yMovement == 'down')) {
        // intending to scroll up but about to go down
        v = createInfiniteSections(v);
      } //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)


      if (!v.localIsResizing) {
        stopMedia(getState().activeSection.item);
      }

      addClass(element, ACTIVE);
      removeClass(siblings(element), ACTIVE);
      updateState();
      lazyLoad(element); //preventing from activating the MouseWheelHandler event
      //more than once if the page is scrolling

      setState({
        canScroll: FP.test.isTesting
      });
      setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);
      EventEmitter.emit(events.onLeave, v);
      performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links

      setState({
        lastScrolledDestiny: v.anchorLink
      }); //avoid firing it twice (as it does also on scroll)

      activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }

    function onDestroy$8() {
      clearTimeout(g_afterSectionLoadsId);
      clearTimeout(g_transitionLapseId);
    }
    /**
    * Returns the destination Y position based on the scrolling direction and
    * the height of the section.
    */


    function getDestinationPosition(element) {
      var elementHeight = element.offsetHeight;
      var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport

      var position = elementTop;
      var isScrollingDown = elementTop > state.previousDestTop;
      var sectionBottom = position - getWindowHeight() + elementHeight;
      var bigSectionsDestination = getOptions().bigSectionsDestination; //is the destination element bigger than the viewport?

      if (elementHeight > getWindowHeight()) {
        //scrolling up?
        if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
          position = sectionBottom;
        }
      } //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
      else if (isScrollingDown || state.isResizing && next(element) == null) {
        //The bottom of the destination will be at the bottom of the viewport
        position = sectionBottom;
      }
      /*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */


      setState({
        previousDestTop: position
      });
      return position;
    }
    /**
    * Performs the vertical movement (by CSS3 or by jQuery)
    */


    function performMovement(v) {
      var isFastSpeed = getOptions().scrollingSpeed < 700;
      var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed;
      setState({
        touchDirection: 'none',
        scrollY: Math.round(v.dtop)
      });
      EventEmitter.emit(events.onPerformMovement); // using CSS3 translate functionality

      if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
        transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
        //scrollingSpeed to change in case of using silentMoveTo();ç

        if (getOptions().scrollingSpeed) {
          clearTimeout(g_afterSectionLoadsId);
          g_afterSectionLoadsId = setTimeout(function () {
            afterSectionLoads$1(v); //disabling canScroll when using fastSpeed

            setState({
              canScroll: !isFastSpeed || FP.test.isTesting
            });
          }, getOptions().scrollingSpeed);
        } else {
          afterSectionLoads$1(v);
        }
      } // using JS to animate
      else {
        var scrollSettings = getScrollSettings(v.dtop);
        FP.test.top = -v.dtop + 'px';
        clearTimeout(g_afterSectionLoadsId);
        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
          if (getOptions().scrollBar) {
            /* Hack!
            The timeout prevents setting the most dominant section in the viewport as "active" when the user
            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
             When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
            */
            g_afterSectionLoadsId = setTimeout(function () {
              afterSectionLoads$1(v);
            }, 30);
          } else {
            afterSectionLoads$1(v); //disabling canScroll when using fastSpeed

            setState({
              canScroll: !isFastSpeed || FP.test.isTesting
            });
          }
        });
      } // enabling canScroll after the minimum transition laps


      if (isFastSpeed) {
        clearTimeout(g_transitionLapseId);
        g_transitionLapseId = setTimeout(function () {
          setState({
            canScroll: true
          });
        }, transitionLapse);
      }
    }
    /**
    * Actions to do once the section is loaded.
    */


    function afterSectionLoads$1(v) {
      setState({
        isBeyondFullpage: false
      });
      continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides

      if (isFunction(getOptions().afterLoad) && !v.localIsResizing) {
        fireCallback('afterLoad', v);
      }

      updateState();

      if (!v.localIsResizing) {
        playMedia(v.element);
      }

      addClass(v.element, COMPLETELY);
      removeClass(siblings(v.element), COMPLETELY);
      lazyLoadOthers();
      setState({
        canScroll: true
      });
      EventEmitter.emit(events.afterSectionLoads, v);

      if (isFunction(v.callback)) {
        v.callback();
      }
    }

    FP.setFitToSection = setFitToSection;
    FP.fitToSection = fitToSection;
    /**
    * Sets fitToSection
    */

    function setFitToSection(value, type) {
      setVariableState('fitToSection', value, type);
    }
    /**
    * Fits the site to the nearest active section
    */

    function fitToSection() {
      //checking fitToSection again in case it was set to false before the timeout delay
      if (state.canScroll) {
        //allows to scroll to an active section and
        //if the section is already active, we prevent firing callbacks
        setState({
          isResizing: true
        });
        scrollPage(state.activeSection);
        setState({
          isResizing: false
        });
      }
    }

    FP.setResponsive = setResponsive;
    /**
    * Checks if the site needs to get responsive and disables autoScrolling if so.
    * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
    */

    function responsive() {
      var widthLimit = getOptions().responsive || getOptions().responsiveWidth; //backwards compatiblity

      var heightLimit = getOptions().responsiveHeight; //only calculating what we need. Remember its called on the resize event.

      var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
      var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;

      if (widthLimit && heightLimit) {
        setResponsive(isBreakingPointWidth || isBreakingPointHeight);
      } else if (widthLimit) {
        setResponsive(isBreakingPointWidth);
      } else if (heightLimit) {
        setResponsive(isBreakingPointHeight);
      }
    }
    /**
    * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
    * are smaller than the set limit values.
    */

    function setResponsive(active) {
      var isResponsive = isResponsiveMode();

      if (active) {
        if (!isResponsive) {
          setAutoScrolling(false, 'internal');
          setFitToSection(false, 'internal');
          hide($(SECTION_NAV_SEL));
          addClass($body, RESPONSIVE);

          if (isFunction(getOptions().afterResponsive)) {
            getOptions().afterResponsive.call(getContainer(), active);
          }
        }
      } else if (isResponsive) {
        setAutoScrolling(getOriginals().autoScrolling, 'internal');
        setFitToSection(getOriginals().autoScrolling, 'internal');
        show($(SECTION_NAV_SEL));
        removeClass($body, RESPONSIVE);

        if (isFunction(getOptions().afterResponsive)) {
          getOptions().afterResponsive.call(getContainer(), active);
        }
      }
    }
    /**
    * Determines whether fullpage.js is in responsive mode or not.
    */


    function isResponsiveMode() {
      return hasClass($body, RESPONSIVE);
    }

    function addTableClass(element) {
      if (!getOptions().verticalCentered) {
        return;
      } // Overflowing sections when scrollOverflow is disabled will be autoHeight
      // and won't require vertical aligment


      if (!getOptions().scrollOverflow && scrollOverflowHandler.shouldBeScrollable(element.item)) {
        return;
      }

      if (!scrollOverflowHandler.isScrollable(element)) {
        //In case we are styling for the 2nd time as in with reponsiveSlides
        if (!hasClass(element.item, TABLE)) {
          addClass(element.item, TABLE);
        }
      }
    }

    var startingSection = null;
    FP.getActiveSection = getActiveSection;
    function getStartingSection() {
      return startingSection;
    }
    /**
    * Styling vertical sections
    */

    function styleSection(section) {
      var sectionElem = section.item;
      var hasSlides = section.allSlidesItems.length;
      var index = section.index(); //if no active section is defined, the 1st one will be the default one

      if (!getState().activeSection && section.isVisible) {
        addClass(sectionElem, ACTIVE);
        updateState();
        startingSection = getState().activeSection.item;
      }

      if (getOptions().paddingTop) {
        css(sectionElem, {
          'padding-top': getOptions().paddingTop
        });
      }

      if (getOptions().paddingBottom) {
        css(sectionElem, {
          'padding-bottom': getOptions().paddingBottom
        });
      }

      if (typeof getOptions().sectionsColor[index] !== 'undefined') {
        css(sectionElem, {
          'background-color': getOptions().sectionsColor[index]
        });
      }

      if (typeof getOptions().anchors[index] !== 'undefined') {
        sectionElem.setAttribute('data-anchor', section.anchor);
      }

      if (!hasSlides) {
        addTableClass(section);
      }
    }
    /**
    * Gets the active section.
    */

    function getActiveSection() {
      return getState().activeSection;
    }

    function getSectionFromPanel(panel) {
      return panel.isSection ? panel : panel.parent;
    }

    var g_focusScrollableId;
    EventEmitter.on(events.bindEvents, bindEvents$b);

    function bindEvents$b() {
      // We can't focus scrollOverflow before scrolling
      // to the anchor (if we need to)
      EventEmitter.on(events.onAfterRenderNoAnchor, afterRender);
      EventEmitter.on(events.onLeave, scrollOverflowHandler.onLeave);
      EventEmitter.on(events.onSlideLeave, scrollOverflowHandler.onLeave);
      EventEmitter.on(events.afterSlideLoads, scrollOverflowHandler.afterLoad);
      EventEmitter.on(events.afterSectionLoads, scrollOverflowHandler.afterLoad);
      EventEmitter.on(events.onDestroy, onDestroy$7);
      docAddEvent('keyup', scrollOverflowHandler.keyUpHandler);
    }

    function afterRender() {
      if (getOptions().scrollOverflow && !getOptions().scrollBar) {
        scrollOverflowHandler.makeScrollable();
        scrollOverflowHandler.focusScrollable();
      }
    }

    function onDestroy$7() {
      EventEmitter.removeListener(events.onAfterRenderNoAnchor, afterRender);
      docRemoveEvent('keyup', scrollOverflowHandler.keyUpHandler);
    }

    var scrollOverflowHandler = {
      focusedElem: null,
      shouldFocusScrollable: true,
      isInnerScrollAllowed: true,
      timeBeforeReachingLimit: null,
      timeLastScroll: null,
      preventScrollWithMouseWheel: function preventScrollWithMouseWheel(e) {
        if (!state.canScroll) {
          preventDefault(e);
          return false;
        }
      },
      preventScrollWithKeyboard: function preventScrollWithKeyboard(e) {
        if (!isInsideInput() && getOptions().keyboardScrolling) {
          var directionKeys = [38, 33, 32, 40, 34, 36, 35];

          if (directionKeys.indexOf(e.keyCode) > -1 && !scrollOverflowHandler.isInnerScrollAllowed) {
            preventDefault(e);
            return false;
          }
        }
      },
      keyUpHandler: function keyUpHandler() {
        scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
      },
      // Leaving sections or slides
      onLeave: function onLeave() {
        clearTimeout(g_focusScrollableId);
        scrollOverflowHandler.isInnerScrollAllowed = false;
      },
      // Loading sections or slides
      afterLoad: function afterLoad() {
        scrollOverflowHandler.isInnerScrollAllowed = false; // Delaying it to avoid issues on Safari when focusing elements #4484 & #4493

        clearTimeout(g_focusScrollableId);
        g_focusScrollableId = setTimeout(function () {
          scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
        }, 200);
      },
      // Unfocusing the scrollable element from the orgin section/slide
      unfocusScrollable: function unfocusScrollable() {
        if (doc.activeElement === this.focusedElem) {
          // @ts-ignore
          this.focusedElem.blur();
          scrollOverflowHandler.isInnerScrollAllowed = false;
        }
      },
      focusScrollable: function focusScrollable() {
        if (!getOptions().scrollOverflow || !scrollOverflowHandler.shouldFocusScrollable) {
          return;
        }

        scrollOverflowHandler.unfocusScrollable();
        var scrollableItem = scrollOverflowHandler.getScrollableItem(getState().activeSection.item); // On desktop we focus the scrollable to be able to use the mouse wheel
        // We avoid it on mobile due to a bug in iOS Safari

        if (scrollableItem && !isTouchDevice && !isTouch) {
          this.focusedElem = scrollableItem; // Forcing the focus on the next paint 
          // to avoid issue #4484 & #4493 on Safari

          requestAnimationFrame(function () {
            scrollableItem.focus();
            scrollOverflowHandler.isInnerScrollAllowed = true;
          });
        }

        scrollOverflowHandler.shouldFocusScrollable = false;
      },
      makeScrollable: function makeScrollable() {
        if (getOptions().scrollOverflowMacStyle && !isMacDevice) {
          addClass($body, 'fp-scroll-mac');
        }

        getState().panels.forEach(function (el) {
          if (el.slides && el.slides.length) {
            return;
          }

          if (hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()) {
            return;
          } else {
            var item = getSlideOrSection(el.item);
            var shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
            var section = getSectionFromPanel(el);

            if (isIE11) {
              var toggleAction = shouldBeScrollable ? 'addClass' : 'removeClass';
              utils[toggleAction](section.item, IS_OVERFLOW);
              utils[toggleAction](el.item, IS_OVERFLOW);
            } else {
              addClass(section.item, IS_OVERFLOW);
              addClass(el.item, IS_OVERFLOW);
            }

            if (!el.hasScroll) {
              scrollOverflowHandler.createWrapper(item);
              scrollOverflowHandler.bindEvents(item);
            } // updating the state now in case 
            // this is executed on page load (after images load)


            el.hasScroll = true;
          }
        });
      },
      bindEvents: function bindEvents(item) {
        scrollOverflowHandler.getScrollableItem(item).addEventListener('scroll', scrollOverflowHandler.onPanelScroll);
        item.addEventListener('wheel', scrollOverflowHandler.preventScrollWithMouseWheel, {
          passive: false
        });
        item.addEventListener('keydown', scrollOverflowHandler.preventScrollWithKeyboard, {
          passive: false
        });
      },
      createWrapper: function createWrapper(item) {
        var overflowWrapper = document.createElement('div');
        overflowWrapper.className = OVERFLOW;
        wrapInner(item, overflowWrapper);
        overflowWrapper.setAttribute('tabindex', '-1');
      },
      destroyWrapper: function destroyWrapper(item) {
        var overflowWrapper = $(OVERFLOW_SEL, item)[0];

        if (overflowWrapper) {
          unwrap(overflowWrapper);
          item.removeAttribute('tabindex');
        }
      },
      getScrollableItem: function getScrollableItem(sectionItem) {
        var panel = getSlideOrSection(sectionItem);
        return $(OVERFLOW_SEL, panel)[0] || panel;
      },
      hasScroll: function hasScroll(panelItem) {
        return hasClass(panelItem, OVERFLOW) || $(OVERFLOW_SEL, panelItem)[0] != null;
      },
      isScrollable: function isScrollable(panel) {
        return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
      },
      shouldBeScrollable: function shouldBeScrollable(item) {
        var scrollable = scrollOverflowHandler.getScrollableItem(item);
        return scrollable.scrollHeight > win.innerHeight;
      },
      isScrolled: function isScrolled(direction, el) {
        if (!state.canScroll) {
          return false;
        } // we won't allow scrolloverflow on scrollBar:true


        if (getOptions().scrollBar) {
          return true;
        }

        var scrollableItem = scrollOverflowHandler.getScrollableItem(el);

        if (!getOptions().scrollOverflow || !hasClass(scrollableItem, OVERFLOW) || // Checking the section first 
        // In case they apply to both section + slide #4505
        hasClass(el, 'fp-noscroll') || // Checking the slide (in case it has)
        hasClass(getSlideOrSection(el), 'fp-noscroll')) {
          return true;
        } // ie11 wrongly calculates scrollHeight when using the CSS style
        // overflow: auto   It adds 1 more pixel compared to offsetHeight


        var ie11offset = isIE11 ? 1 : 0;
        var positionY = scrollableItem.scrollTop;
        var isTopReached = direction === 'up' && positionY <= 0;
        var isBottomReached = direction === 'down' && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY) + ie11offset;
        var isScrolled = isTopReached || isBottomReached;

        if (!isScrolled) {
          this.timeBeforeReachingLimit = new Date().getTime();
        }

        return isScrolled;
      },
      shouldMovePage: function shouldMovePage() {
        this.timeLastScroll = new Date().getTime();
        var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
        var isUsingTouch = isTouchDevice || isTouch;
        var isGrabbing = isUsingTouch && state.isGrabbing;
        var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
        return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
      },
      onPanelScroll: function () {
        var prevPosition = 0;
        return function (e) {
          var currentPosition = e.target.scrollTop;
          var direction = state.touchDirection !== 'none' ? state.touchDirection : prevPosition < currentPosition ? 'down' : 'up';
          prevPosition = currentPosition;

          if (isFunction(getOptions().onScrollOverflow)) {
            fireCallback('onScrollOverflow', {
              position: currentPosition,
              direction: direction
            });
          }

          if (hasClass(e.target, OVERFLOW) && state.canScroll) {
            if (scrollOverflowHandler.isScrolled(direction, e.target) && scrollOverflowHandler.shouldMovePage()) {
              // Checking again if we have a scrollable content
              // To avoid issues like #4479 where the scroll event gets
              // triggered after removing/hidding content if this was scrolled
              if (scrollOverflowHandler.shouldBeScrollable(getState().activeSection.item)) {
                EventEmitter.emit(events.onScrollOverflowScrolled, {
                  direction: direction
                });
              }
            }
          }
        };
      }()
    };

    var g_afterSlideLoadsId;
    FP.landscapeScroll = landscapeScroll;
    EventEmitter.on(events.bindEvents, bindEvents$a);

    function bindEvents$a() {
      EventEmitter.on(events.onPerformMovement, onPerformMovement);
    }

    function onPerformMovement() {
      clearTimeout(g_afterSlideLoadsId);
      setState({
        slideMoving: false
      });
    }
    /**
    * Scrolls horizontal sliders.
    */


    function landscapeScroll(slides, destiny, direction) {
      var sectionElem = closest(slides, SECTION_SEL);
      var section = getState().sections.filter(function (section) {
        return section.item == sectionElem;
      })[0];
      var slide = section.slides.filter(function (slide) {
        return slide.item == destiny;
      })[0];
      var v = {
        "slides": slides,
        "destiny": destiny,
        "direction": direction,
        "destinyPos": {
          "left": destiny.offsetLeft
        },
        "slideIndex": slide.index(),
        "section": sectionElem,
        "sectionIndex": section.index(),
        "anchorLink": section.anchor,
        "slidesNav": $(SLIDES_NAV_SEL, sectionElem)[0],
        "slideAnchor": slide.anchor,
        "prevSlide": section.activeSlide.item,
        "prevSlideIndex": section.activeSlide.index(),
        "items": {
          "section": section,
          "origin": section.activeSlide,
          "destination": slide
        },
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        "localIsResizing": state.isResizing
      };
      v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
      v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing

      if (!v.localIsResizing) {
        //preventing from scrolling to the next/prev section when using scrollHorizontally
        setState({
          canScroll: false
        });
      }

      if (getOptions().onSlideLeave) {
        //if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing && v.xMovement !== 'none') {
          if (isFunction(getOptions().onSlideLeave)) {
            if (fireCallback('onSlideLeave', v) === false) {
              setState({
                slideMoving: false
              });
              return;
            }
          }
        }
      }

      addClass(destiny, ACTIVE);
      removeClass(siblings(destiny), ACTIVE);
      updateState();

      if (!v.localIsResizing) {
        stopMedia(v.prevSlide);
        lazyLoad(destiny);
      }

      toggleControlArrows(v); //only changing the URL if the slides are in the current section (not for resize re-adjusting)

      if (section.isActive && !v.localIsResizing) {
        setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
      }

      EventEmitter.emit(events.onSlideLeave, v);
      performHorizontalMove(slides, v, true);
    }
    /**
    * Performs the horizontal movement. (CSS3 or jQuery)
    *
    * @param fireCallback {Boolean} - determines whether or not to fire the callback
    */

    function performHorizontalMove(slides, v, fireCallback) {
      var destinyPos = v.destinyPos;
      activeSlidesNavigation(v.slidesNav, v.slideIndex);
      setState({
        scrollX: Math.round(destinyPos.left)
      });

      if (getOptions().css3) {
        var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
        FP.test.translate3dH[v.sectionIndex] = translate3d;
        css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
        clearTimeout(g_afterSlideLoadsId);
        g_afterSlideLoadsId = setTimeout(function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        }, getOptions().scrollingSpeed);
      } else {
        FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
        scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        });
      }
    }
    /**
    * Retuns `right` or `left` depending on the scrolling movement to reach its destination
    * from the current slide.
    */


    function getXmovement(fromIndex, toIndex) {
      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'left';
      }

      return 'right';
    }

    function onDestroy$6() {
      clearTimeout(g_afterSlideLoadsId);
    }

    function afterSlideLoads(v) {
      //if the site is not just resizing and readjusting the slides
      if (!v.localIsResizing) {
        if (isFunction(getOptions().afterSlideLoad)) {
          fireCallback('afterSlideLoad', v);
        } //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
        //and to prevent double scroll right after a windows resize


        setState({
          canScroll: true
        });
        playMedia(v.destiny);
        EventEmitter.emit(events.afterSlideLoads, v);
      } //letting them slide again


      setState({
        slideMoving: false
      });
    }

    /**
    * Slides silently (with no animation) the active slider to the given slide.
    * @param noCallback {bool} true or defined -> no callbacks
    */

    function silentLandscapeScroll(activeSlide, noCallbacks) {
      setScrollingSpeed(0, 'internal');

      if (typeof noCallbacks !== 'undefined') {
        //preventing firing callbacks afterSlideLoad etc.
        setState({
          isResizing: true
        });
      }

      landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

      if (typeof noCallbacks !== 'undefined') {
        setState({
          isResizing: false
        });
      }

      setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
    }

    var g_prevActiveSectionIndex = null;
    var g_prevActiveSlideIndex = null;
    /** 
     * Updates the state of the app.
     */

    function updateState() {
      state.activeSection = null;
      state.sections.map(function (section) {
        var isActive = hasClass(section.item, ACTIVE);
        section.isActive = isActive;
        section.hasScroll = scrollOverflowHandler.hasScroll(section.item);

        if (isActive) {
          state.activeSection = section;
        }

        if (section.slides.length) {
          section.activeSlide = null;
          section.slides.map(function (slide) {
            var isActiveSlide = hasClass(slide.item, ACTIVE);
            slide.hasScroll = scrollOverflowHandler.hasScroll(section.item);
            slide.isActive = isActiveSlide;

            if (isActiveSlide) {
              section.activeSlide = slide;
            }
          });
        }
      });
      scrollToNewActivePanel();
    }
    function updateStructuralState() {
      var allSectionItems = $(getOptions().sectionSelector, getContainer());
      var sectionsItems = getVisible(allSectionItems);
      var allSections = Array.from(allSectionItems).map(function (item) {
        return new SectionPanel(item);
      });
      var sections = allSections.filter(function (item) {
        return item.isVisible;
      });
      var slides = sections.reduce(function (acc, section) {
        return acc.concat(section.slides);
      }, []); // keeping track of the previously active section

      g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
      g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);
      state.numSections = sectionsItems.length;
      state.numSlides = sections.reduce(function (acc, section) {
        return acc + section.slides.length;
      }, 0);
      state.sections = sections;
      state.sectionsIncludingHidden = allSections;
      state.slides = slides;
      state.panels = state.sections.concat(state.slides);
    }

    function getPrevActivePanelIndex(activePanel) {
      if (!activePanel) {
        return null;
      }

      var prevActivePanelItem = activePanel ? activePanel.item : null;
      var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;

      if (prevActivePanelItem) {
        var panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
        return panel ? panel.index() : null;
      }

      return null;
    }
    /**
     * When changes in the DOM take place there's a change 
     * the active section is now hidden or removed. 
     * fullPage.js will scroll to the closest section nearby.
     */


    function scrollToNewActivePanel() {
      var activeSection = state.activeSection;
      var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
      var activeSlide = state.activeSection ? state.activeSection.activeSlide : null; // Hidding / removing the active section ?

      if (!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex) {
        var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);

        if (newActiveSection) {
          state.activeSection = newActiveSection;
          state.activeSection.isActive = true;
          addClass(state.activeSection.item, ACTIVE);
        }

        if (state.activeSection) {
          silentScroll(state.activeSection.item.offsetTop);
        }
      }

      if (activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex) {
        var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);

        if (newActiveSlide) {
          state.activeSection.activeSlide = newActiveSlide;
          state.activeSection.activeSlide.isActive = true;
          addClass(state.activeSection.activeSlide.item, ACTIVE);
        }

        if (state.activeSection.activeSlide) {
          silentLandscapeScroll(state.activeSection.activeSlide.item, 'internal');
        }
      }
    }

    function getNewActivePanel(prevActivePanelIndex, siblings) {
      var newActiveSection;
      var prevIndex = prevActivePanelIndex - 1;
      var nextIndex = prevActivePanelIndex;

      do {
        newActiveSection = siblings[prevIndex] || siblings[nextIndex];

        if (newActiveSection) {
          break;
        }

        prevIndex = prevIndex - 1;
        nextIndex = nextIndex + 1;
      } while (prevIndex >= 0 || nextIndex < siblings.length);

      return newActiveSection;
    }
    /**
    * Section object
    */


    var SectionPanel = function SectionPanel(el) {
      var _this = this;

      [].push.call(arguments, getOptions().sectionSelector);
      Item.apply(this, arguments);
      this.allSlidesItems = $(getOptions().slideSelector, el);
      this.slidesIncludingHidden = Array.from(this.allSlidesItems).map(function (item) {
        return new SlidePanel(item, _this);
      });
      this.slides = this.slidesIncludingHidden.filter(function (slidePanel) {
        return slidePanel.isVisible;
      });
      this.activeSlide = this.slides.length ? this.slides.filter(function (slide) {
        return slide.isActive;
      })[0] || this.slides[0] : null;
    };
    SectionPanel.prototype = Item.prototype;
    SectionPanel.prototype.constructor = SectionPanel;
    /**
    * Slide object
    */

    var SlidePanel = function SlidePanel(el, section) {
      this.parent = section;
      Item.call(this, el, getOptions().slideSelector);
    };

    SlidePanel.prototype = Item.prototype;
    SlidePanel.prototype.constructor = SectionPanel;

    /**
    * Adds internal classes to be able to provide customizable selectors
    * keeping the link with the style sheet.
    */

    function addInternalSelectors() {
      addClass($(getOptions().sectionSelector, getContainer()), SECTION);
      addClass($(getOptions().slideSelector, getContainer()), SLIDE);
    }

    /**
    * Styles the horizontal slides for a section.
    */

    function styleSlides(section) {
      var numSlides = section.slides.length;
      var slidesElems = section.allSlidesItems;
      var slides = section.slides;
      var sliderWidth = numSlides * 100;
      var slideWidth = 100 / numSlides;

      if (!$(SLIDES_WRAPPER_SEL, section.item)[0]) {
        var slidesWrapper = doc.createElement('div');
        slidesWrapper.className = SLIDES_WRAPPER; //fp-slides

        wrapAll(slidesElems, slidesWrapper);
        var slidesContainer = doc.createElement('div');
        slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer

        wrapAll(slidesElems, slidesContainer);
      }

      css($(SLIDES_CONTAINER_SEL, section.item), {
        'width': sliderWidth + '%'
      });

      if (numSlides > 1) {
        if (getOptions().controlArrows) {
          createSlideArrows(section);
        }

        if (getOptions().slidesNavigation) {
          addSlidesNavigation(section);
        }
      }

      slides.forEach(function (slide) {
        css(slide.item, {
          'width': slideWidth + '%'
        });

        if (getOptions().verticalCentered) {
          addTableClass(slide);
        }
      });
      var startingSlide = section.activeSlide || null; //if the slide won't be an starting point, the default will be the first one
      //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

      if (startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || state.activeSection.index() === 0 && startingSlide.index() !== 0)) {
        silentLandscapeScroll(startingSlide.item, 'internal');
      } else {
        addClass(slidesElems[0], ACTIVE);
      }
    }

    var g_wrapperObserver;
    var g_wrapperObserveConfig = {
      attributes: false,
      subtree: true,
      childList: true,
      characterData: true
    };
    EventEmitter.on(events.bindEvents, bindEvents$9);
    FP["render"] = onContentChange;

    function bindEvents$9() {
      if (getOptions().observer && "MutationObserver" in window && $(WRAPPER_SEL)[0]) {
        g_wrapperObserver = createObserver($(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
      }

      EventEmitter.on(events.contentChanged, onContentChange);
    }
    /**
     * Creates a Mutation observer.
     */


    function createObserver(target, callback, config) {
      var observer = new MutationObserver(callback);
      observer.observe(target, config);
      return observer;
    }

    function didSlidesChange() {
      return getVisible($(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
    }

    function didSectionsChange() {
      return getVisible($(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
    }

    function didSectionsOrSlidesChange() {
      return didSlidesChange() || didSectionsChange();
    }
    /**
     * Listen to changes on sections and fires reBuild
     * when those changes affect the section height.
     */


    function onContentChange(mutations) {
      var _didSlidesChange = didSlidesChange();

      if (didSectionsOrSlidesChange() && !state.isDoingContinousVertical) {
        if (getOptions().observer && g_wrapperObserver) {
          // Temporally disabling the observer while 
          // we modidy the DOM again
          g_wrapperObserver.disconnect();
        }

        updateStructuralState();
        updateState(); // Removing navs and anchors options

        getOptions().anchors = [];
        remove($(SECTION_NAV_SEL));
        addInternalSelectors();
        setOptionsFromDOM();

        if (getOptions().navigation) {
          addVerticalNavigation();
        }

        if (_didSlidesChange) {
          remove($(SLIDES_NAV_SEL));
          remove($(SLIDES_ARROW_SEL));
        }

        getState().sections.forEach(function (section) {
          if (section.slides.length) {
            if (_didSlidesChange) {
              styleSlides(section);
            }
          } else {
            styleSection(section);
          }
        });
      }

      if (getOptions().observer && g_wrapperObserver && $(WRAPPER_SEL)[0]) {
        g_wrapperObserver.observe($(WRAPPER_SEL)[0], g_wrapperObserveConfig);
      }
    }

    var supportsPassiveEvents = function () {
      //cheks for passive event support
      var g_supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            g_supportsPassive = true;
          }
        });
        windowAddEvent("testPassive", null, opts);
        windowRemoveEvent("testPassive", null, opts);
      } catch (e) {}

      return function () {
        return g_supportsPassive;
      };
    }();

    function getPassiveOptionsIfPossible() {
      return supportsPassiveEvents() ? {
        passive: false
      } : false;
    }

    var wheelDataHandler = function () {
      var _prevTime = new Date().getTime();

      var _scrollings = [];
      var isScrollingVertically;
      var direction;
      return {
        registerEvent: function registerEvent(e) {
          e = e || win.event;
          var value = e.wheelDelta || -e.deltaY || -e.detail;
          var delta = Math.max(-1, Math.min(1, value));
          var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
          isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
          var curTime = new Date().getTime();
          direction = delta < 0 ? 'down' : 'up'; //Limiting the array to 150 (lets not waste memory!)

          if (_scrollings.length > 149) {
            _scrollings.shift();
          } //keeping record of the previous scrollings


          _scrollings.push(Math.abs(value)); //time difference between the last scroll and the current one


          var timeDiff = curTime - _prevTime;
          _prevTime = curTime; //haven't they scrolled in a while?
          //(enough to be consider a different scrolling action to scroll another section)

          if (timeDiff > 200) {
            //emptying the array, we dont care about old scrollings for our averages
            _scrollings = [];
          }
        },
        isAccelerating: function isAccelerating() {
          var averageEnd = getAverage(_scrollings, 10);
          var averageMiddle = getAverage(_scrollings, 70);
          var isAccelerating = averageEnd >= averageMiddle;
          return _scrollings.length ? isAccelerating && isScrollingVertically : false;
        },
        getDirection: function getDirection() {
          return direction;
        }
      };
    }();

    function scrollBeyondFullPage() {
      var dtop = getDestinationOffset();
      var scrollSettings = getScrollSettings(dtop);
      FP.test.top = -dtop + 'px';
      setState({
        canScroll: false
      });
      scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
        setTimeout(function () {
          setState({
            isBeyondFullpage: true
          });
          setState({
            canScroll: true
          });
        }, 30);
      });
    }
    function onKeyDown() {
      if (!isFullPageAbove()) {
        return;
      } else {
        scrollUpToFullpage();
      }
    }
    function scrollUpToFullpage() {
      var scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop);
      setState({
        canScroll: false
      });
      scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
        setState({
          canScroll: true
        });
        setState({
          isBeyondFullpage: false
        });
        setState({
          isAboutToScrollToFullPage: false
        });
      });
    }

    function getDestinationOffset() {
      if (!getOptions().css3) {
        return getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight;
      }

      return getScrollTop() + getWindowHeight();
    }

    function beyondFullPageHandler(container, e) {
      new Date().getTime();
      var pauseScroll = getState().isBeyondFullpage && container.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === 'up';
      var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;

      if (g_isAboutToScrollToFullPage) {
        preventDefault(e);
        return false;
      }

      if (getState().isBeyondFullpage) {
        if (!pauseScroll) {
          keyframeTime('set', 'beyondFullpage', 1000);
        } else {
          var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime('isNewKeyframe', 'beyondFullpage') || !wheelDataHandler.isAccelerating());
          var scrollSettings;

          if (shouldSetFixedPosition) {
            scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight);
            scrollSettings.element.scrollTo(0, scrollSettings.options);
            setState({
              isAboutToScrollToFullPage: false
            });
            preventDefault(e);
            return false;
          } else if (wheelDataHandler.isAccelerating()) {
            pauseScroll = false;
            setState({
              isAboutToScrollToFullPage: true
            });
            setState({
              scrollTrigger: 'wheel'
            });
            scrollUpToFullpage();
            preventDefault(e);
            return false;
          }
        }

        if (!g_isAboutToScrollToFullPage) {
          // allow normal scrolling, but quitting
          if (!pauseScroll) {
            return true;
          }
        }
      }
    }

    var keyframeTime = function () {
      var isNew = false;
      var frames = {};
      var timeframes = {};
      return function (action, name, timeframe) {
        switch (action) {
          case 'set':
            frames[name] = new Date().getTime();
            timeframes[name] = timeframe;
            break;

          case 'isNewKeyframe':
            var current = new Date().getTime();
            isNew = current - frames[name] > timeframes[name];
            break;
        }

        return isNew;
      };
    }();

    FP.moveSectionDown = moveSectionDown;
    /**
    * Moves the page down one section.
    */

    function moveSectionDown() {
      var next = getState().activeSection.next(); //looping to the top if there's no more sections below

      if (!next && (getOptions().loopBottom || getOptions().continuousVertical)) {
        next = getState().sections[0];
      }

      if (next != null) {
        scrollPage(next, null, false);
      } else if (hasContentBeyondFullPage()) {
        EventEmitter.emit(events.scrollBeyondFullpage);
      }
    }

    function hasContentBeyondFullPage() {
      return getContainer().scrollHeight < $body.scrollHeight && getOptions().scrollBar && getOptions().scrollBeyondFullpage;
    }

    FP.moveSectionUp = moveSectionUp;
    /**
    * Moves the page up one section.
    */

    function moveSectionUp() {
      var prev = getState().activeSection.prev(); //looping to the bottom if there's no more sections above

      if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) {
        prev = getLast(getState().sections);
      }

      if (prev != null) {
        scrollPage(prev, null, true);
      }
    }

    var oldPageY = 0;
    /**
    * Detecting the direction of the mouse movement.
    * Used only for the middle button of the mouse.
    */

    function mouseMoveHandler(e) {
      if (!getOptions().autoScrolling) {
        return;
      }

      if (state.canScroll) {
        // moving up
        if (e.pageY < oldPageY && getIsScrollAllowed().m.up) {
          moveSectionUp();
        } // moving down
        else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) {
          moveSectionDown();
        }
      }

      oldPageY = e.pageY;
    }
    function setOldPageY(value) {
      oldPageY = value;
    }

    /**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */

    function scrolling(type) {
      if (!getIsScrollAllowed().m[type]) {
        return;
      }

      var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

      if (getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)) {
        //is the scrollbar at the start/end of the scroll?
        if (scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && scrollOverflowHandler.shouldMovePage()) {
          scrollSection();
        }
      } else {
        scrollSection();
      }
    }

    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;
    var MSPointer = getMSPointer();
    var pointers = {
      touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer ? MSPointer.move : null,
      touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer ? MSPointer.down : null
    };
    /**
    * Adds the possibility to auto scroll through sections on touch devices.
    */

    function addTouchHandler() {
      if (!pointers.touchmove) {
        return;
      }

      if (isTouchDevice || isTouch) {
        if (getOptions().autoScrolling) {
          $body.removeEventListener(pointers.touchmove, preventBouncing, {
            passive: false
          });
          $body.addEventListener(pointers.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = getOptions().touchWrapper;
        touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
          passive: false
        });
        touchWrapper.addEventListener(pointers.touchstart, touchStartHandler);
        touchWrapper.addEventListener(pointers.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /**
    * Removes the auto scrolling for touch devices.
    */

    function removeTouchHandler() {
      if (!pointers.touchmove) {
        return;
      }

      if (isTouchDevice || isTouch) {
        // normalScrollElements requires it off #2691
        if (getOptions().autoScrolling) {
          $body.removeEventListener(pointers.touchmove, touchMoveHandler, {
            passive: false
          });
          $body.removeEventListener(pointers.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = getOptions().touchWrapper;
        touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /* Detecting touch events

    * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */

    function touchMoveHandler(e) {
      var activeSection = closest(e.target, SECTION_SEL) || getState().activeSection.item;
      var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);

      if (isReallyTouch(e)) {
        setState({
          isGrabbing: true,
          isUsingWheel: false
        });

        if (getOptions().autoScrolling) {
          if (hasActiveSectionOverflow && !state.canScroll || getOptions().scrollBar) {
            //preventing the easing on iOS devices
            preventDefault(e);
          }
        }

        var touchEvents = getEventsPage(e);
        touchEndY = touchEvents.y;
        touchEndX = touchEvents.x;
        var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > win.innerHeight / 100 * getOptions().touchSensitivity;
        var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * getOptions().touchSensitivity;
        var isHorizontalPredominantMove = $(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY);
        var directionH = touchStartX > touchEndX ? 'right' : 'left';
        var directionV = touchStartY > touchEndY ? 'down' : 'up';
        var direction = isHorizontalPredominantMove ? directionH : directionV;
        setState({
          touchDirection: direction
        }); //if movement in the X axys is greater than in the Y and the currect section has slides...

        if (isHorizontalPredominantMove) {
          //is the movement greater than the minimum resistance to scroll?
          if (!state.slideMoving && isHorizontalMovementEnough) {
            if (touchStartX > touchEndX) {
              if (getIsScrollAllowed().m.right) {
                EventEmitter.emit(events.moveSlideRight, {
                  section: activeSection
                });
              }
            } else {
              if (getIsScrollAllowed().m.left) {
                EventEmitter.emit(events.moveSlideLeft, {
                  section: activeSection
                });
              }
            }
          }
        } //vertical scrolling (only when autoScrolling is enabled)
        else if (getOptions().autoScrolling && state.canScroll) {
          //is the movement greater than the minimum resistance to scroll?
          if (isVerticalMovementEnough) {
            scrolling(directionV);
          }
        }
      }
    }
    /**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */


    function isReallyTouch(e) {
      //if is not IE   ||  IE is detecting `touch` or `pen`
      return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
    }
    /**
    * Handler for the touch start event.
    */


    function touchStartHandler(e) {
      //stopping the auto scroll to adjust to a section
      if (getOptions().fitToSection) {
        setState({
          activeAnimation: false
        });
      }

      if (isReallyTouch(e)) {
        var touchEvents = getEventsPage(e);
        touchStartY = touchEvents.y;
        touchStartX = touchEvents.x;
      }

      windowAddEvent('touchend', touchEndHandler);
    }
    /**
    * Handler for the touch end event.
    */


    function touchEndHandler() {
      windowRemoveEvent('touchend', touchEndHandler);
      setState({
        isGrabbing: false
      });
    }
    /**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */


    function getEventsPage(e) {
      var events = {};
      events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
      events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008

      if (isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== 'undefined') {
        events.y = e.touches[0].pageY;
        events.x = e.touches[0].pageX;
      }

      return events;
    }
    /*
    * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
    * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
    */


    function getMSPointer() {
      var pointer; //IE >= 11 & rest of browsers

      if (win.PointerEvent) {
        pointer = {
          down: 'pointerdown',
          move: 'pointermove'
        };
      }

      return pointer;
    }
    /*
    * Preventing bouncing in iOS #2285
    */


    function preventBouncing(e) {
      if (getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up) {
        //preventing the easing on iOS devices
        if (!state.canScroll) {
          preventDefault(e);
        }
      }
    }

    FP.moveSlideLeft = moveSlideLeft;
    FP.moveSlideRight = moveSlideRight;
    /**
    * Slides a slider to the given direction.
    * Optional `section` param.
    */

    function moveSlide(direction, section) {
      var activeSectionItem = section == null ? getState().activeSection.item : section;
      var activeSection = getPanelByElement(state.sections, activeSectionItem);
      var slides = $(SLIDES_WRAPPER_SEL, activeSectionItem)[0]; // more than one slide needed and nothing should be sliding

      if (slides == null || state.slideMoving || activeSection.slides.length < 2) {
        return;
      }

      var currentSlide = activeSection.activeSlide;
      var destiny = direction === 'left' ? currentSlide.prev() : currentSlide.next(); //isn't there a next slide in the secuence?

      if (!destiny) {
        //respect loopHorizontal setting
        if (!getOptions().loopHorizontal) return;
        destiny = direction === 'left' ? getLast(activeSection.slides) : activeSection.slides[0];
      }

      setState({
        slideMoving: !FP.test.isTesting
      });
      landscapeScroll(slides, destiny.item, direction);
    }
    /**
    * Slides left the slider of the active section.
    * Optional `section` param.
    */

    function moveSlideLeft(section) {
      moveSlide('left', section);
    }
    /**
    * Slides right the slider of the active section.
    * Optional `section` param.
    */

    function moveSlideRight(section) {
      moveSlide('right', section);
    }

    /**
    * Gets a section by its anchor / index
    */

    function getSectionByAnchor(sectionAnchor) {
      var section = getState().sections.filter(function (section) {
        return section.anchor === sectionAnchor;
      })[0];

      if (!section) {
        var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
        section = getState().sections[sectionIndex];
      }

      return section;
    }

    /**
    * Scrolls the slider to the given slide destination for the given section
    */

    function scrollSlider(slideElem) {
      if (slideElem != null) {
        landscapeScroll(closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
      }
    }

    /**
    * Scrolls to the given section and slide anchors
    */

    function scrollPageAndSlide(sectionAnchor, slideAnchor) {
      var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name

      if (section == null) return;
      var slideElem = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide

      if ((!section.anchor || section.anchor !== state.lastScrolledDestiny) && !hasClass(section.item, ACTIVE)) {
        scrollPage(section, function () {
          scrollSlider(slideElem);
        });
      } //if we were already in the section
      else {
        scrollSlider(slideElem);
      }
    }
    /**
    * Gets a slide inside a given section by its anchor / index
    */

    function getSlideByAnchor(slideAnchor, section) {
      var slide = section.slides.filter(function (slide) {
        return slide.anchor === slideAnchor;
      })[0];

      if (slide == null) {
        slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
        slide = section.slides[slideAnchor];
      }

      return slide ? slide.item : null;
    }

    FP.moveTo = moveTo$1;
    /**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */

    function moveTo$1(sectionAnchor, slideAnchor) {
      var destiny = getSectionByAnchor(sectionAnchor);

      if (typeof slideAnchor !== 'undefined') {
        scrollPageAndSlide(sectionAnchor, slideAnchor);
      } else if (destiny != null) {
        scrollPage(destiny);
      }
    }

    //@ts-check
    var g_controlPressed;
    var g_keydownId;
    var g_elToFocus;
    EventEmitter.on(events.bindEvents, bindEvents$8);

    function bindEvents$8() {
      //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
      windowAddEvent('blur', blurHandler); //Sliding with arrow keys, both, vertical and horizontal

      docAddEvent('keydown', keydownHandler); //to prevent scrolling while zooming

      docAddEvent('keyup', keyUpHandler);
      EventEmitter.on(events.onDestroy, onDestroy$5);
      EventEmitter.on(events.afterSlideLoads, onAfterSlideLoads);
      EventEmitter.on(events.afterSectionLoads, afterSectionLoads);
    }

    function onDestroy$5() {
      clearTimeout(g_keydownId);
      docRemoveEvent('keydown', keydownHandler);
      docRemoveEvent('keyup', keyUpHandler);
    } //Sliding with arrow keys, both, vertical and horizontal


    function keydownHandler(e) {
      clearTimeout(g_keydownId);
      var keyCode = e.keyCode;
      var isPressingHorizontalArrows = [37, 39].indexOf(keyCode) > -1;
      var canScrollWithKeyboard = getOptions().autoScrolling || getOptions().fitToSection || isPressingHorizontalArrows; //tab?

      if (keyCode === 9) {
        onTab(e);
      } else if (!isInsideInput() && getOptions().keyboardScrolling && canScrollWithKeyboard) {
        g_controlPressed = e.ctrlKey;
        g_keydownId = setTimeout(function () {
          onkeydown(e);
        }, 0);
      }
    }
    /**
    * Keydown event
    */


    function onkeydown(e) {
      var shiftPressed = e.shiftKey;
      var activeElement = doc.activeElement;
      var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');
      var isScrolled = {
        up: scrollOverflowHandler.isScrolled('up', getState().activeSection.item),
        down: scrollOverflowHandler.isScrolled('down', getState().activeSection.item)
      };
      var isUsingHorizontalArrowKeys = [37, 39].indexOf(e.keyCode) > -1;
      cancelDirectionKeyEvents(e); //do nothing if we can not scroll or we are not using horizotnal key arrows.

      if (!state.canScroll && !isUsingHorizontalArrowKeys) {
        return;
      }

      setState({
        scrollTrigger: 'keydown'
      });

      switch (e.keyCode) {
        //up
        case 38:
        case 33:
          if (getIsScrollAllowed().k.up && isScrolled.up) {
            if (state.isBeyondFullpage) {
              EventEmitter.emit(events.onKeyDown, {
                e: e
              });
            } else {
              moveSectionUp();
            }
          } else {
            scrollOverflowHandler.focusScrollable();
          }

          break;
        //down

        case 32:
          //spacebar
          if (shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up) {
            moveSectionUp();
            break;
          }

        /* falls through */

        case 40:
        case 34:
          if (getIsScrollAllowed().k.down && isScrolled.down) {
            if (state.isBeyondFullpage) {
              return;
            } // space bar?


            if (e.keyCode !== 32 || !isMediaFocused) {
              moveSectionDown();
            }
          } else {
            scrollOverflowHandler.focusScrollable();
          }

          break;
        //Home

        case 36:
          if (getIsScrollAllowed().k.up) {
            moveTo$1(1);
          }

          break;
        //End

        case 35:
          if (getIsScrollAllowed().k.down) {
            moveTo$1(getState().sections.length);
          }

          break;
        //left

        case 37:
          if (getIsScrollAllowed().k.left) {
            moveSlideLeft();
          }

          break;
        //right

        case 39:
          if (getIsScrollAllowed().k.right) {
            moveSlideRight();
          }

          break;

        default:
          return;
        // exit this handler for other keys
      }
    } //to prevent scrolling while zooming


    function keyUpHandler(e) {
      if (state.isWindowFocused) {
        //the keyup gets fired on new tab ctrl + t in Firefox
        g_controlPressed = e.ctrlKey;
      }
    } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.


    function blurHandler() {
      setState({
        isWindowFocused: false
      });
      g_controlPressed = false;
    }
    /**
    * Makes sure the tab key will only focus elements within the current section/slide
    * preventing this way from breaking the page.
    * Based on "Modals and keyboard traps"
    * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    */


    function onTab(e) {
      var isShiftPressed = e.shiftKey;
      var activeElement = doc.activeElement;
      var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));

      function preventAndFocusFirst(e) {
        preventDefault(e);
        return focusableElements[0] ? focusableElements[0].focus() : null;
      } // deactivating tab while scrolling #4550


      if (!state.canScroll) {
        preventDefault(e);
        return;
      } //outside any section or slide? Let's not hijack the tab!


      if (isFocusOutside(e)) {
        return;
      } //is there an element with focus?


      if (activeElement) {
        if (closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null) {
          activeElement = preventAndFocusFirst(e);
        }
      } //no element if focused? Let's focus the first one of the section/slide
      else {
        preventAndFocusFirst(e);
      } //when reached the first or last focusable element of the section/slide
      //we prevent the tab action to keep it in the last focusable element


      var isFirstFocusableInSection = activeElement == focusableElements[0];
      var isLastFocusableInSection = activeElement == focusableElements[focusableElements.length - 1];
      var isNextItem = !isShiftPressed && isLastFocusableInSection;
      var isPrevItem = isShiftPressed && isFirstFocusableInSection;

      if (isPrevItem || isNextItem) {
        preventDefault(e);
        var focusInfo = getPanelWithFocusable(isPrevItem);
        var destinationPanel = focusInfo ? focusInfo.panel : null;

        if (destinationPanel) {
          var destinationSection = destinationPanel.isSection ? destinationPanel : destinationPanel.parent;
          EventEmitter.emit(events.onScrollPageAndSlide, {
            sectionAnchor: destinationSection.index() + 1,
            slideAnchor: destinationPanel.isSection ? 0 : destinationPanel.index()
          });
          g_elToFocus = focusInfo.itemToFocus;
          preventDefault(e);
        }
      }
    }

    function onAfterSlideLoads(v) {
      focusItem();
    }

    function afterSectionLoads(v) {
      if (!closest(g_elToFocus, SLIDE_SEL) || closest(g_elToFocus, SLIDE_ACTIVE_SEL)) {
        focusItem();
      }
    }

    function focusItem() {
      if (g_elToFocus) {
        g_elToFocus.focus();
        g_elToFocus = null;
      }
    }
    /**
     * Get's the panel containing the element to focus.
     *
     */


    function getPanelWithFocusable(isPrevItem) {
      var action = isPrevItem ? 'prevPanel' : 'nextPanel';
      var focusableElements = [];
      var panelWithFocusables;
      var currentPanel = getSlideOrSectionPanel(getActivePanel()[action]());

      do {
        focusableElements = getFocusables(currentPanel.item);

        if (focusableElements.length) {
          panelWithFocusables = {
            panel: currentPanel,
            itemToFocus: focusableElements[isPrevItem ? focusableElements.length - 1 : 0]
          };
        }

        currentPanel = getSlideOrSectionPanel(currentPanel[action]());
      } while (currentPanel && focusableElements.length === 0);

      return panelWithFocusables;
    }
    /**
    * Gets all the focusable elements inside the passed element.
    */


    function getFocusables(el) {
      return [].slice.call($(focusableElementsString, el)).filter(function (item) {
        return getAttr(item, 'tabindex') !== '-1' && //are also not hidden elements (or with hidden parents)
        item.offsetParent !== null;
      });
    }
    /**
    * Determines whether the focus is outside fullpage.js sections/slides or not.
    */


    function isFocusOutside(e) {
      var allFocusables = getFocusables(doc);
      var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
      var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
      var focusDestination = allFocusables[focusDestinationIndex];
      var destinationItemSlide = closest(focusDestination, SLIDE_SEL);
      var destinationItemSection = closest(focusDestination, SECTION_SEL);
      return !destinationItemSlide && !destinationItemSection;
    }

    function shouldCancelKeyboardNavigation(e) {
      // https://keycode.info/for/34
      // 40 = arrow down
      // 38 = arrow up
      // 32 = spacebar
      // 33  = PageUp
      // 34 = PageDown
      var keyControls = [40, 38, 32, 33, 34];
      return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
    } //preventing the scroll with arrow keys & spacebar & Page Up & Down keys


    function cancelDirectionKeyEvents(e) {
      if (shouldCancelKeyboardNavigation(e) && !closest(e.target, OVERFLOW_SEL)) {
        e.preventDefault();
      }
    }

    function getControlPressed() {
      return g_controlPressed;
    }

    var prevTime = new Date().getTime();
    var scrollings = [];
    FP.setMouseWheelScrolling = setMouseWheelScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
    */

    function setMouseWheelScrolling(value) {
      if (value) {
        addMouseWheelHandler();
        addMiddleWheelHandler();
      } else {
        removeMouseWheelHandler();
        removeMiddleWheelHandler();
      }
    }
    /**
    * Adds the auto scrolling action for the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements will scroll through sections
    * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
    */


    function addMouseWheelHandler() {
      var prefix = '';

      var _addEventListener;

      if (win.addEventListener) {
        _addEventListener = "addEventListener";
      } else {
        _addEventListener = "attachEvent";
        prefix = 'on';
      } // detect available wheel event


      var support = 'onwheel' in doc.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
      // @ts-ignore
      doc.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

      var passiveEvent = getPassiveOptionsIfPossible();

      if (support == 'DOMMouseScroll') {
        doc[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
      } //handle MozMousePixelScroll in older Firefox
      else {
        doc[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
      }
    }
    /**
    * Binding the mousemove when the mouse's middle button is pressed
    */


    function addMiddleWheelHandler() {
      getContainer().addEventListener('mousedown', mouseDownHandler);
      getContainer().addEventListener('mouseup', mouseUpHandler);
    }
    /**
    * Removes the auto scrolling action fired by the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
    */


    function removeMouseWheelHandler() {
      if (doc.addEventListener) {
        docRemoveEvent('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper

        docRemoveEvent('wheel', MouseWheelHandler, false); //Firefox

        docRemoveEvent('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
      } else {
        // @ts-ignore
        doc.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
      }
    }
    /**
    * Unbinding the mousemove when the mouse's middle button is released
    */


    function removeMiddleWheelHandler() {
      getContainer().removeEventListener('mousedown', mouseDownHandler);
      getContainer().removeEventListener('mouseup', mouseUpHandler);
    }
    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */


    function MouseWheelHandler(e) {
      var curTime = new Date().getTime();
      var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);
      var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);

      if (!state.isUsingWheel) {
        setState({
          isGrabbing: false,
          isUsingWheel: true,
          touchDirection: 'none'
        });
      } //is scroll allowed?


      if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
        preventDefault(e);
        return false;
      }

      if (isScrollAllowedBeyondFullPage) {
        return true;
      } else if (isScrollAllowedBeyondFullPage === false) {
        preventDefault(e);
        return false;
      } //autoscrolling and not zooming?


      if (getOptions().autoScrolling && !getControlPressed() && !isNormalScroll) {
        // cross-browser wheel delta
        e = e || win.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));
        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
        var direction = delta < 0 ? 'down' : delta > 0 ? 'up' : 'none'; //Limiting the array to 150 (lets not waste memory!)

        if (scrollings.length > 149) {
          scrollings.shift();
        } //keeping record of the previous scrollings


        scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

        if (getOptions().scrollBar) {
          preventDefault(e);
        } //time difference between the last scroll and the current one


        var timeDiff = curTime - prevTime;
        prevTime = curTime; //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)

        if (timeDiff > 200) {
          //emptying the array, we dont care about old scrollings for our averages
          scrollings = [];
        }

        setState({
          wheelDirection: direction
        });

        if (state.canScroll) {
          var averageEnd = getAverage(scrollings, 10);
          var averageMiddle = getAverage(scrollings, 70);
          var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

          if (isAccelerating && isScrollingVertically) {
            setState({
              scrollTrigger: 'wheel'
            }); //scrolling down?

            if (delta < 0) {
              scrolling('down');
            } //scrolling up?
            else {
              scrolling('up');
            }
          }
        }

        return false;
      }

      if (getOptions().fitToSection) {
        //stopping the auto scroll to adjust to a section
        setState({
          activeAnimation: false
        });
      }
    } //binding the mousemove when the mouse's middle button is released


    function mouseDownHandler(e) {
      //middle button
      if (e.which == 2) {
        setOldPageY(e.pageY);
        getContainer().addEventListener('mousemove', mouseMoveHandler);
      }
    } //unbinding the mousemove when the mouse's middle button is released


    function mouseUpHandler(e) {
      //middle button
      if (e.which == 2) {
        getContainer().removeEventListener('mousemove', mouseMoveHandler);
      }
    }
    /**
    * Adds or remove the mouse wheel hijacking
    */


    function setMouseHijack(value) {
      if (value) {
        setMouseWheelScrolling(true);
        addTouchHandler();
      } else {
        setMouseWheelScrolling(false);
        removeTouchHandler();
      }
    }

    var g_canFireMouseEnterNormalScroll = true;
    EventEmitter.on(events.bindEvents, bindEvents$7);

    function bindEvents$7() {
      /**
      * Applying normalScroll elements.
      * Ignoring the scrolls over the specified selectors.
      */
      if (getOptions().normalScrollElements) {
        ['mouseenter', 'touchstart'].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, false);
        });
        ['mouseleave', 'touchend'].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, true);
        });
      }

      EventEmitter.on(events.onDestroy, onDestroy$4);
    }

    function onDestroy$4() {
      ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function (eventName) {
        docRemoveEvent(eventName, onMouseEnterOrLeave, true); //true is required!
      });
    }

    function forMouseLeaveOrTouch(eventName, allowScrolling) {
      //a way to pass arguments to the onMouseEnterOrLeave function
      document['fp_' + eventName] = allowScrolling;
      docAddEvent(eventName, onMouseEnterOrLeave, true); //capturing phase
    }

    function onMouseEnterOrLeave(e) {
      var type = e.type;
      var isInsideOneNormalScroll = false; //onMouseLeave will use the destination target, not the one we are moving away from

      var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?

      if (target == document || !target) {
        setMouseHijack(true);
        return;
      }

      if (type === 'touchend') {
        g_canFireMouseEnterNormalScroll = false;
        setTimeout(function () {
          g_canFireMouseEnterNormalScroll = true;
        }, 800);
      } //preventing mouseenter event to do anything when coming from a touchEnd event
      //fixing issue #3576


      if (type === 'mouseenter' && !g_canFireMouseEnterNormalScroll) {
        return;
      }

      var normalSelectors = getOptions().normalScrollElements.split(',');
      normalSelectors.forEach(function (normalSelector) {
        if (!isInsideOneNormalScroll) {
          var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661

          var isNormalScrollChildFocused = closest(target, normalSelector);

          if (isNormalScrollTarget || isNormalScrollChildFocused) {
            if (!FP.shared.isNormalScrollElement) {
              setMouseHijack(false);
            }

            FP.shared.isNormalScrollElement = true;
            isInsideOneNormalScroll = true;
          }
        }
      }); //not inside a single normal scroll element anymore?

      if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
        setMouseHijack(true);
        FP.shared.isNormalScrollElement = false;
      }
    }

    FP.silentMoveTo = silentMoveTo;
    /**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */

    function silentMoveTo(sectionAnchor, slideAnchor) {
      setScrollingSpeed(0, 'internal');
      moveTo$1(sectionAnchor, slideAnchor);
      setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
    }

    var previousHeight = getWindowHeight();
    var windowsWidth = getWindowWidth();
    var g_resizeId;
    var g_isConsecutiveResize = false;
    var g_resizeMobileHandlerId;
    FP.reBuild = reBuild;
    EventEmitter.on(events.bindEvents, bindEvents$6);

    function bindEvents$6() {
      // Setting VH correctly in mobile devices
      resizeHandler(); //when resizing the site, we adjust the heights of the sections, slimScroll...

      windowAddEvent('resize', resizeHandler);
      EventEmitter.on(events.onDestroy, onDestroy$3);
    }

    function onDestroy$3() {
      clearTimeout(g_resizeId);
      clearTimeout(g_resizeMobileHandlerId);
      windowRemoveEvent('resize', resizeHandler);
    }
    /*
    * Resize event handler.
    */


    function resizeHandler() {
      if (!g_isConsecutiveResize) {
        if (getOptions().autoScrolling && !getOptions().scrollBar || !getOptions().fitToSection) {
          setSectionsHeight(getWindowHeight());
        }
      }

      fitToActiveSection();
      g_isConsecutiveResize = true; //in order to call the functions only when the resize is finished
      //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    

      clearTimeout(g_resizeId);
      g_resizeId = setTimeout(function () {
        //issue #3336 
        //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
        //so we check it 3 times with intervals in that case
        // for(var i = 0; i< 4; i++){
        resizeActions();
        g_isConsecutiveResize = false; // }
      }, 400);
    }

    function fitToActiveSection() {
      if (isTouchDevice) {
        // Issue #4393 and previously in v3, #3336
        // (some apps or browsers, like Chrome/Firefox will delay a bit to scroll 
        // to the focused input
        for (var i = 0; i < 4; i++) {
          g_resizeMobileHandlerId = setTimeout(function () {
            window.requestAnimationFrame(function () {
              // on Android devices the browser scrolls to the focused element
              // messing up the whole page structure. So we need to update the
              // translate3d value when the keyboard shows/hides
              if (getOptions().autoScrolling && !getOptions().scrollBar) {
                setState({
                  isResizing: true
                });
                silentMoveTo(state.activeSection.index() + 1);
                setState({
                  isResizing: false
                });
              }
            });
          }, 200 * i);
        }
      }
    }
    /**
    * When resizing the site, we adjust the heights of the sections, slimScroll...
    */


    function resizeActions() {
      setState({
        isResizing: true
      });
      setSectionsHeight('');

      if (!getOptions().autoScrolling && !state.isBeyondFullpage) {
        setVhUnits();
      }

      EventEmitter.emit(events.contentChanged);
      updateState(); //checking if it needs to get responsive

      responsive(); // rebuild immediately on touch devices

      if (isTouchDevice) {
        var activeElement = doc.activeElement; //if the keyboard is NOT visible

        if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
          var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

          if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
            reBuild(true);
            previousHeight = currentHeight;
          }
        }
      } else {
        adjustToNewViewport();
      }

      setState({
        isResizing: false
      });
    }
    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */


    function reBuild(resizing) {
      if (hasClass(getContainer(), DESTROYED)) {
        return;
      } //nothing to do if the plugin was destroyed
      //updating global vars


      setState({
        isResizing: true,
        windowsHeight: getWindowHeight(),
        windowsWidth: getWindowWidth()
      });
      var sections = getState().sections;

      for (var i = 0; i < sections.length; ++i) {
        var section = sections[i];
        var slidesWrap = $(SLIDES_WRAPPER_SEL, section.item)[0];
        var slides = section.slides; //adjusting the position fo the FULL WIDTH slides...

        if (slides.length > 1) {
          landscapeScroll(slidesWrap, section.activeSlide.item);
        }
      }

      if (getOptions().scrollOverflow) {
        scrollOverflowHandler.makeScrollable();
      }

      var sectionIndex = getState().activeSection.index();

      if (!state.isBeyondFullpage) {
        //isn't it the first section?
        if (sectionIndex) {
          //adjusting the position for the current section
          silentMoveTo(sectionIndex + 1);
        }
      }

      setState({
        isResizing: false
      });

      if (isFunction(getOptions().afterResize) && resizing) {
        getOptions().afterResize.call(getContainer(), win.innerWidth, win.innerHeight);
      }

      if (isFunction(getOptions().afterReBuild) && !resizing) {
        getOptions().afterReBuild.call(getContainer());
      }

      trigger(getContainer(), 'afterRebuild');
    }
    /**
    * Adjusts a section to the viewport if it has changed.
    */


    function adjustToNewViewport() {
      var newWindowHeight = getWindowHeight();
      var newWindowWidth = getWindowWidth();

      if (state.windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
        setState({
          windowsHeight: newWindowHeight
        });
        windowsWidth = newWindowWidth;
        reBuild(true);
      }
    }

    function setSectionsHeight(value) {
      var propertyValue = value === '' ? '' : value + 'px';
      getState().sections.forEach(function (section) {
        css(section.item, {
          'height': propertyValue
        });
      });
    }
    /**
     * Defining the value in px of a VH unit. (Used for autoScrolling: false)
     * To fix the height issue on mobile devices when using VH units.
     * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     */


    function setVhUnits() {
      if (!getOptions().autoScrolling || getOptions().scrollBar) {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        var vh = win.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

        doc.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      }
    }

    function getAnchorsURL() {
      var section;
      var slide;
      var hash = win.location.hash;

      if (hash.length) {
        //getting the anchor link in the URL and deleting the `#`
        var anchorsParts = hash.replace('#', '').split('/'); //using / for visual reasons and not as a section/slide separator #2803

        var isFunkyAnchor = hash.indexOf('#/') > -1;
        section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
        var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

        if (slideAnchor && slideAnchor.length) {
          slide = decodeURIComponent(slideAnchor);
        }
      }

      return {
        section: section,
        slide: slide
      };
    }

    FP.setLockAnchors = setLockAnchors;
    EventEmitter.on(events.bindEvents, bindEvents$5);

    function bindEvents$5() {
      //detecting any change on the URL to scroll to the given anchor link
      //(a way to detect back history button as we play with the hashes on the URL)
      windowAddEvent('hashchange', hashChangeHandler);
      EventEmitter.on(events.onDestroy, onDestroy$2);
    }

    function onDestroy$2() {
      windowRemoveEvent('hashchange', hashChangeHandler);
    }
    /**
    * Sets lockAnchors
    */


    function setLockAnchors(value) {
      getOptions().lockAnchors = value;
    }
    /**
    * Detecting any change on the URL to scroll to the given anchor link
    * (a way to detect back history button as we play with the hashes on the URL)
    */


    function hashChangeHandler() {
      if (!state.isScrolling && !getOptions().lockAnchors) {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

        var isFirstSlideMove = typeof state.lastScrolledDestiny === 'undefined';
        var isFirstScrollMove = typeof state.lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !state.slideMoving;

        if (sectionAnchor && sectionAnchor.length) {
          /*in order to call scrollpage() only once for each destination at a time
          It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
          event is fired on every scroll too.*/
          if (sectionAnchor && sectionAnchor !== state.lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !state.slideMoving && state.lastScrolledSlide != slideAnchor) {
            EventEmitter.emit(events.onScrollPageAndSlide, {
              sectionAnchor: sectionAnchor,
              slideAnchor: slideAnchor
            });
          }
        }
      }
    }

    EventEmitter.on(events.bindEvents, bindEvents$4);

    function bindEvents$4() {
      docAddEvent('wheel', wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
      EventEmitter.on(events.scrollBeyondFullpage, scrollBeyondFullPage);
      EventEmitter.on(events.onKeyDown, onKeyDown);
    }

    EventEmitter.on(events.bindEvents, bindEvents$3);

    function bindEvents$3() {
      EventEmitter.on(events.onClickOrTouch, onClickOrTouch$1);
    }

    function onClickOrTouch$1(params) {
      var target = params.target;

      if (closest(target, getOptions().menu + ' [data-menuanchor]')) {
        menuItemsHandler.call(target, params);
      }
    } //Menu item handler when not using anchors or using lockAnchors:true


    function menuItemsHandler(e) {
      setState({
        scrollTrigger: 'menu'
      });

      if ($(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)) {
        preventDefault(e);
        /*jshint validthis:true */

        EventEmitter.emit(events.onMenuClick, {
          anchor: getAttr(this, 'data-menuanchor')
        });
      }
    }

    EventEmitter.on(events.bindEvents, bindEvents$2);

    function bindEvents$2() {
      EventEmitter.on(events.onClickOrTouch, onClickOrTouch);
    }

    function onClickOrTouch(params) {
      var target = params.target;

      if (target && closest(target, SECTION_NAV_SEL + ' a')) {
        sectionBulletHandler.call(target, params.e);
      } else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) {
        tooltipTextHandler.call(target);
      } else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) {
        slideBulletHandler.call(target, params.e);
      }
    }

    var lastScroll = 0;
    var g_scrollId;
    var g_scrollId2;
    EventEmitter.on(events.onDestroy, onDestroy$1); //when scrolling...

    function scrollHandler(e) {
      var currentSection;
      var currentSectionElem;

      if (state.isResizing || !getState().activeSection) {
        return;
      }

      getLast(getState().sections);

      if (getState().isBeyondFullpage || getState().isAboutToScrollToFullPage) {
        return;
      }

      if (!getOptions().autoScrolling || getOptions().scrollBar) {
        var currentScroll = getScrollTop();
        var scrollDirection = getScrollDirection(currentScroll);
        var visibleSectionIndex = 0;
        var screen_mid = currentScroll + getWindowHeight() / 2.0;
        var isAtBottom = $body.scrollHeight - getWindowHeight() === currentScroll;
        var sections = getState().sections;
        setState({
          scrollY: currentScroll
        }); //when using `auto-height` for a small last section it won't be centered in the viewport

        if (isAtBottom) {
          visibleSectionIndex = sections.length - 1;
        } //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
        else if (!currentScroll) {
          visibleSectionIndex = 0;
        } //taking the section which is showing more content in the viewport
        else {
          for (var i = 0; i < sections.length; ++i) {
            var section = sections[i].item; // Pick the the last section which passes the middle line of the screen.

            if (section.offsetTop <= screen_mid) {
              visibleSectionIndex = i;
            }
          }
        }

        if (isCompletelyInViewPort(scrollDirection)) {
          if (!hasClass(getState().activeSection.item, COMPLETELY)) {
            addClass(getState().activeSection.item, COMPLETELY);
            removeClass(siblings(getState().activeSection.item), COMPLETELY);
          }
        } //geting the last one, the current one on the screen


        currentSection = sections[visibleSectionIndex];
        currentSectionElem = currentSection.item; //setting the visible section as active when manually scrolling
        //executing only once the first time we reach the section

        if (!currentSection.isActive) {
          setState({
            isScrolling: true
          });
          var leavingSection = getState().activeSection.item;
          var leavingSectionIndex = getState().activeSection.index() + 1;
          var yMovement = getYmovement(getState().activeSection, currentSectionElem);
          var anchorLink = currentSection.anchor;
          var sectionIndex = currentSection.index() + 1;
          var activeSlide = currentSection.activeSlide;
          var slideIndex;
          var slideAnchorLink;
          var callbacksParams = {
            activeSection: leavingSection,
            sectionIndex: sectionIndex - 1,
            anchorLink: anchorLink,
            element: currentSectionElem,
            leavingSection: leavingSectionIndex,
            direction: yMovement,
            items: {
              origin: getState().activeSection,
              destination: currentSection
            }
          };

          if (activeSlide) {
            slideAnchorLink = activeSlide.anchor;
            slideIndex = activeSlide.index();
          }

          if (state.canScroll) {
            addClass(currentSectionElem, ACTIVE);
            removeClass(siblings(currentSectionElem), ACTIVE);

            if (isFunction(getOptions().beforeLeave)) {
              fireCallbackOncePerScroll('beforeLeave', callbacksParams);
            }

            if (isFunction(getOptions().onLeave)) {
              fireCallback('onLeave', callbacksParams);
            }

            if (isFunction(getOptions().afterLoad)) {
              fireCallback('afterLoad', callbacksParams);
            }

            stopMedia(leavingSection);
            lazyLoad(currentSectionElem);
            playMedia(currentSectionElem);
            activateMenuAndNav(anchorLink, sectionIndex - 1);

            if (getOptions().anchors.length) {
              //needed to enter in hashChange event when using the menu with anchor links
              setState({
                lastScrolledDestiny: anchorLink
              });
            }

            updateState();
            setPageStatus(slideIndex, slideAnchorLink, anchorLink);
          } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet


          clearTimeout(g_scrollId);
          g_scrollId = setTimeout(function () {
            setState({
              isScrolling: false
            });
          }, 100);
        }

        if (getOptions().fitToSection && state.canScroll) {
          clearTimeout(g_scrollId2);
          g_scrollId2 = setTimeout(function () {
            var fixedSections = state.sections.filter(function (section) {
              var sectionValues = section.item.getBoundingClientRect();
              return Math.round(sectionValues.bottom) === Math.round(getWindowHeight()) || Math.round(sectionValues.top) === 0;
            }); // No section is fitting the viewport? Let's fix that!

            if (!fixedSections.length) {
              fitToSection();
            }
          }, getOptions().fitToSectionDelay);
        }
      }
    }

    function onDestroy$1() {
      clearTimeout(g_scrollId);
      clearTimeout(g_scrollId2);
    }
    /**
    * Gets the directon of the the scrolling fired by the scroll event.
    */


    function getScrollDirection(currentScroll) {
      var direction = currentScroll > lastScroll ? 'down' : 'up';
      lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination

      setState({
        previousDestTop: currentScroll
      });
      return direction;
    }
    /**
    * Determines whether the active section has seen in its whole or not.
    */


    function isCompletelyInViewPort(movement) {
      var top = getState().activeSection.item.offsetTop;
      var bottom = top + getWindowHeight();

      if (movement == 'up') {
        return bottom >= getScrollTop() + getWindowHeight();
      }

      return top <= getScrollTop();
    }

    EventEmitter.on(events.bindEvents, bindEvents$1);
    EventEmitter.on(events.onDestroy, onDestroy);

    function onDestroy() {
      windowRemoveEvent('scroll', scrollHandler);
    }

    function bindEvents$1() {
      windowAddEvent('scroll', scrollHandler);
      doc.body.addEventListener('scroll', scrollHandler);
      EventEmitter.on(events.onScrollPageAndSlide, function (params) {
        scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
      });
      EventEmitter.on(events.onMenuClick, function (params) {
        moveTo$1(params.anchor, undefined);
      });
      EventEmitter.on(events.onScrollOverflowScrolled, function (params) {
        var scrollSection = params.direction === 'down' ? moveSectionDown : moveSectionUp;
        scrollSection();
      });
      EventEmitter.on(events.scrollPage, function (params) {
        scrollPage(params.destination);
      });
    }

    FP.getActiveSlide = getActiveSlide;

    FP.getScrollX = function () {
      return state.scrollX;
    };

    EventEmitter.on(events.bindEvents, bindEvents);

    function bindEvents() {
      EventEmitter.on(events.onDestroy, onDestroy$6);
      EventEmitter.on(events.landscapeScroll, function (params) {
        landscapeScroll(params.slides, params.destination);
      });
      EventEmitter.on(events.moveSlideRight, function (params) {
        moveSlideRight(params.section);
      });
      EventEmitter.on(events.moveSlideLeft, function (params) {
        moveSlideLeft(params.section);
      });
    }
    /**
    * Gets the active slide.
    */


    function getActiveSlide() {
      return nullOrSlide(getState().activeSection.activeSlide);
    }

    EventEmitter.on(events.bindEvents, init$1);

    function init$1() {
      var position = getOptions().credits.position || 'right';
      var positionStyle = ['left', 'right'].indexOf(position) > -1 ? "".concat(position, ": 0;") : '';
      var waterMark = "\n        <div class=\"fp-watermark\" style=\"".concat(positionStyle, "\">\n            <a href=\"https://alvarotrigo.com/fullPage/\" \n                rel=\"nofollow noopener\" \n                target=\"_blank\" \n                style=\"text-decoration:none; color: #000;\">\n                    ").concat(getOptions().credits.label || 'Made with fullPage.js', "\n            </a>\n        </div>\n    ");
      var lastSection = getLast(state.sections);
      var shouldUseWaterMark = !state.isValid || getOptions().credits.enabled;

      if (lastSection && lastSection.item && shouldUseWaterMark) {
        lastSection.item.insertAdjacentHTML('beforeend', waterMark);
      }
    }

    !function () {
      EventEmitter.on(events.onInitialise, function () {
        var n, a, l;
        setState({
          isValid: (getOptions().licenseKey, n = getOptions().licenseKey, a = function (n) {
            var e = parseInt("\x35\x31\x34").toString(16);
            if (!n || n.length < 29 || 4 === n.split(t[0]).length) return null;
            var r = ["\x45\x61\x63\x68", "\x66\x6f\x72"][i()]().join(""),
                a = n[["\x73\x70\x6c\x69\x74"]]("-"),
                l = [];
            a[r](function (t, n) {
              if (n < 4) {
                var r = function (t) {
                  var n = t[t.length - 1],
                      e = ["\x4e\x61\x4e", "\x69\x73"][i()]().join("");
                  return window[e](n) ? o(n) : function (t) {
                    return t - ACTIVE.length;
                  }(n);
                }(t);

                l.push(r);
                var s = o(t[r]);

                if (1 === n) {
                  var a = ["\x70\x61", "\x64\x53", "\x74", "\x61\x72\x74"].join("");
                  s = s.toString()[a](2, "0");
                }

                e += s, 0 !== n && 1 !== n || (e += "-");
              }
            });
            var m = 0,
                f = "";
            return n.split("-").forEach(function (t, n) {
              if (n < 4) {
                var _i = 0;

                for (var e = 0; e < 4; e++) {
                  e !== l[n] && (_i += Math.abs(o(t[e])), isNaN(t[e]) || m++);
                }

                var r = s(_i);
                f += r;
              }
            }), f += s(m), {
              v: new Date(e + "T00:00"),
              o: e.split("-")[2] === 8 * (ACTIVE.length - 2) + "",
              l: f
            };
          }(n), l = function (t) {
            var n = r[i()]().join("");
            return t && 0 === n.indexOf(t) && t.length === n.length;
          }(n), (a || l) && (a && e <= a.v && a.l === n.split(t[0])[4] || l || a.o) || !1)
        });
      });
      var t = ["-"];
      var n = "\x32\x30\x32\x33\x2d\x34\x2d\x32\x39".split("-"),
          e = new Date(n[0], n[1], n[2]),
          r = ["se", "licen", "-", "v3", "l", "gp"];

      function i() {
        return [["\x72\x65", "\x76\x65\x72\x73\x65"].join("")]["".length];
      }

      function o(t) {
        return t ? isNaN(t) ? t.charCodeAt(0) - 72 : t : "";
      }

      function s(t) {
        var n = 72 + t;
        return n > 90 && n < 97 && (n += 15), String.fromCharCode(n).toUpperCase();
      }
    }();

    //@ts-check
    FP.setKeyboardScrolling = setKeyboardScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
    */

    function setKeyboardScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, 'k');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'k');
        getOptions().keyboardScrolling = value;
      }
    }

    /**
    * Sets the data-anchor attributes to the menu elements and activates the current one.
    */

    function styleMenu(section) {
      var index = section.index();

      if (typeof getOptions().anchors[index] !== 'undefined') {
        //activating the menu / nav element on load
        if (section.isActive) {
          activateMenuAndNav(getOptions().anchors[index], index);
        }
      } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)


      if (getOptions().menu && getOptions().css3 && closest($(getOptions().menu)[0], WRAPPER_SEL) != null) {
        $(getOptions().menu).forEach(function (menu) {
          $body.appendChild(menu);
        });
      }
    }

    /**
    * Works over the DOM structure to set it up for the current fullpage getOptions().
    */

    function prepareDom() {
      css(getParentsUntil(getContainer(), 'body'), {
        'height': '100%',
        'position': 'relative'
      }); //adding a class to recognize the container internally in the code

      addClass(getContainer(), WRAPPER);
      addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502

      setState({
        windowsHeight: getWindowHeight()
      });
      removeClass(getContainer(), DESTROYED); //in case it was destroyed before initializing it again

      addInternalSelectors();
      var sections = getState().sectionsIncludingHidden; //styling the sections / slides / menu

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var slides = section.allSlidesItems; //caching the original styles to add them back on destroy('all')

        var originalStyles = getAttr(section.item, 'style');

        if (originalStyles) {
          section.item.setAttribute('data-fp-styles', originalStyles);
        }

        styleSection(section);
        styleMenu(section); // if there's any slide

        if (slides.length > 0) {
          styleSlides(section);
        }
      } //fixed elements need to be moved out of the plugin container due to problems with CSS3.


      if (getOptions().fixedElements && getOptions().css3) {
        $(getOptions().fixedElements).forEach(function (item) {
          $body.appendChild(item);
        });
      } //vertical centered of the navigation + active bullet


      if (getOptions().navigation) {
        addVerticalNavigation();
      }

      enableYoutubeAPI();

      if (getOptions().scrollOverflow) {
        scrollOverflowHandler.makeScrollable();
      }
    }

    FP.shared.afterRenderActions = afterRenderActions;
    /**
    * Actions and callbacks to fire afterRender
    */

    function afterRenderActions() {
      var section = getState().activeSection;
      var sectionElem = getState().activeSection.item;
      addClass(sectionElem, COMPLETELY);
      lazyLoad(sectionElem);
      lazyLoadOthers();
      playMedia(sectionElem);

      if (isDestinyTheStartingSection() && isFunction(getOptions().afterLoad)) {
        fireCallback('afterLoad', {
          activeSection: sectionElem,
          element: sectionElem,
          direction: null,
          //for backwards compatibility callback (to be removed in a future!)
          anchorLink: section.anchor,
          sectionIndex: section.index(),
          items: {
            origin: getState().activeSection,
            destination: getState().activeSection
          }
        });
      }

      if (isFunction(getOptions().afterRender)) {
        fireCallback('afterRender');
      }
    }
    /**
    * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
    */

    function isDestinyTheStartingSection() {
      var anchor = getAnchorsURL();
      var destinationSection = getSectionByAnchor(anchor.section);
      return !anchor.section || !destinationSection || typeof destinationSection !== 'undefined' && destinationSection.index() === index(getStartingSection());
    }

    FP.setAllowScrolling = setAllowScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
    * Optionally a second parameter can be used to specify the direction for which the action will be applied.
    *
    * @param directions string containing the direction or directions separated by comma.
    */

    function setAllowScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, 'm');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'm');
      }
    }

    /**
    * Scrolls to the anchor in the URL when loading the site
    */

    function scrollToAnchor() {
      var anchors = getAnchorsURL();
      var sectionAnchor = anchors.section;
      var slideAnchor = anchors.slide;

      if (sectionAnchor) {
        //if theres any #
        if (getOptions().animateAnchor) {
          scrollPageAndSlide(sectionAnchor, slideAnchor);
        } else {
          silentMoveTo(sectionAnchor, slideAnchor);
        }
      } else {
        EventEmitter.emit(events.onAfterRenderNoAnchor, null);
      }
    }

    /*
    * Removes inline styles added by fullpage.js
    */

    function destroyStructure() {
      //reseting the `top` or `translate` properties to 0
      silentScroll(0); //loading all the lazy load content

      $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', getContainer()).forEach(function (item) {
        setSrc(item, 'src');
      });
      $('img[data-srcset]').forEach(function (item) {
        setSrc(item, 'srcset');
      });
      remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL)); //removing inline styles

      css(getNodes(getState().sections), {
        'height': '',
        'background-color': '',
        'padding': ''
      });
      css(getNodes(getState().slides), {
        'width': ''
      });
      css(getContainer(), {
        'height': '',
        'position': '',
        '-ms-touch-action': '',
        'touch-action': ''
      });
      css($htmlBody, {
        'overflow': '',
        'height': ''
      }); // remove .fp-enabled class

      removeClass($html, ENABLED); // remove .fp-responsive class & .fp-scrollable

      removeClass($body, RESPONSIVE + ' ' + SCROLLABLE); // remove all of the .fp-viewing- classes

      $body.className.split(/\s+/).forEach(function (className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
          removeClass($body, className);
        }
      }); //removing added classes

      getNodes(getState().panels).forEach(function (item) {
        if (getOptions().scrollOverflow) {
          scrollOverflowHandler.destroyWrapper(item);
        }

        removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY + ' ' + IS_OVERFLOW);
        var previousStyles = getAttr(item, 'data-fp-styles');

        if (previousStyles) {
          item.setAttribute('style', previousStyles);
        } //removing anchors if they were not set using the HTML markup


        if (hasClass(item, SECTION) && !getInitialAnchorsInDom()) {
          item.removeAttribute('data-anchor');
        }
      }); //removing the applied transition from the fullpage wrapper

      removeAnimation(getContainer()); //Unwrapping content

      [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL].forEach(function (selector) {
        $(selector, getContainer()).forEach(function (item) {
          //unwrap not being use in case there's no child element inside and its just text
          unwrap(item);
        });
      }); //removing the applied transition from the fullpage wrapper

      css(getContainer(), {
        '-webkit-transition': 'none',
        'transition': 'none'
      });
      removeClass(getContainer(), WRAPPER); //scrolling the page to the top with no animation

      win.scrollTo(0, 0); //removing selectors

      var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
      usedSelectors.forEach(function (item) {
        removeClass($('.' + item), item);
      });
    }

    FP.destroy = destroy;
    function init() {
      updateStructuralState();
      updateState();
      getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;
      setOptionsFromDOM();
      prepareDom();
      setAllowScrolling(true);
      setMouseHijack(true);
      setAutoScrolling(getOptions().autoScrolling, 'internal');
      responsive(); //setting the class for the body element

      setBodyClass();

      if (doc.readyState === 'complete') {
        scrollToAnchor();
      }

      windowAddEvent('load', scrollToAnchor);
      afterRenderActions(); // Updating the state again with the new DOM

      updateStructuralState();
      updateState();
    }
    /*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */

    function destroy(all) {
      setAutoScrolling(false, 'internal');
      setAllowScrolling(true);
      setMouseHijack(false);
      setKeyboardScrolling(false);
      addClass(getContainer(), DESTROYED);
      EventEmitter.emit(events.onDestroy); //lets make a mess!

      if (all) {
        destroyStructure();
      }
    }

    var isOK = function isOK() {
      return getOptions() && state.isValid || doc.domain.indexOf('al' + 'varotri' + 'go' + '.' + 'com') > -1;
    };
    /**
    * Displays warnings
    */


    function displayWarnings() {
      var l = getOptions()['li' + 'c' + 'enseK' + 'e' + 'y'];
      var msgStyle = 'font-size: 15px;background:yellow;';

      if (getOptions().licenseKey.trim() === '') {
        showError('error', 'Fullpage.js requires a `licenseKey` option. Read about it on the following URL:');
        showError('error', 'https://github.com/alvarotrigo/fullPage.js#options');
      } else if (!isOK()) {
        showError('error', 'Incorrect `licenseKey`. Get one for fullPage.js version 4 here:');
        showError('error', 'https://alvarotrigo.com/fullPage/pricing');
      } else if (l && l.length < 20) {
        console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
        console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
      }

      if (hasClass($html, ENABLED)) {
        showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
        return;
      } // Disable mutually exclusive settings


      if (getOptions().continuousVertical && (getOptions().loopTop || getOptions().loopBottom)) {
        getOptions().continuousVertical = false;
        showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      }

      if (getOptions().scrollOverflow && (getOptions().scrollBar || !getOptions().autoScrolling)) {
        showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
      }

      if (getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)) {
        getOptions().continuousVertical = false;
        showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      } //using extensions? Wrong file!


      extensions.forEach(function (extension) {
        //is the option set to true?
        if (getOptions()[extension]) {
          showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' + extension);
        }
      }); //anchors can not have the same value as any element ID or NAME

      getOptions().anchors.forEach(function (name) {
        //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
        var nameAttr = [].slice.call($('[name]')).filter(function (item) {
          return getAttr(item, 'name') && getAttr(item, 'name').toLowerCase() == name.toLowerCase();
        });
        var idAttr = [].slice.call($('[id]')).filter(function (item) {
          return getAttr(item, 'id') && getAttr(item, 'id').toLowerCase() == name.toLowerCase();
        });

        if (idAttr.length || nameAttr.length) {
          showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
          var propertyName = idAttr.length ? 'id' : 'name';

          if (idAttr.length || nameAttr.length) {
            showError('error', '"' + name + '" is is being used by another element `' + propertyName + '` property');
          }
        }
      });
    }

    function fullpage(containerSelector, options) {
      setCache(); //only once my friend!

      if (hasClass($html, ENABLED)) {
        displayWarnings();
        return;
      }

      setOption('touchWrapper', typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector); // Creating some defaults, extending them with any options that were provided

      setOptions(options);
      setContainer(typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector);
      EventEmitter.emit(events.onInitialise);
      displayWarnings();
      setAPI();

      if (getContainer()) {
        EventEmitter.emit(events.beforeInit);
        init();
        EventEmitter.emit(events.bindEvents);
      } // @ts-ignore


      return win.fullpage_api;
    }

    function setAPI() {
      FP.getFullpageData = function () {
        return {
          options: getOptions()
        };
      }; //public functions


      FP.version = '4.0.20';
      FP.test = Object.assign(FP.test, {
        top: '0px',
        translate3d: 'translate3d(0px, 0px, 0px)',
        translate3dH: function () {
          var a = [];

          for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
            a.push('translate3d(0px, 0px, 0px)');
          }

          return a;
        }(),
        left: function () {
          var a = [];

          for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
            a.push(0);
          }

          return a;
        }(),
        options: getOptions(),
        setAutoScrolling: null
      }); //functions we want to share across files but which are not
      //mean to be used on their own by developers

      FP.shared = Object.assign(FP.shared, {
        afterRenderActions: null,
        isNormalScrollElement: false
      }); // @ts-ignore

      win.fullpage_api = FP;
    }

    // @ts-ignore

    win.fp_easings = deepExtend(win.fp_easings, {
      easeInOutCubic: function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    });

    /**
     * jQuery adapter for fullPage.js 3.0.0
     */
    // @ts-ignore

    if (win.jQuery) {
      (function ($, fullpage) {

        if (!$ || !fullpage) {
          showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
          return;
        }

        $.fn.fullpage = function (options) {
          options = $.extend({}, options, {
            '$': $
          });
          new fullpage(this[0], options); // Creating the $.fn.fullpage object

          Object.keys(FP).forEach(function (key) {
            getOptions().$.fn.fullpage[key] = FP[key];
          });
        }; // @ts-ignore

      })(win.jQuery, fullpage);
    }

    return fullpage;

}));
