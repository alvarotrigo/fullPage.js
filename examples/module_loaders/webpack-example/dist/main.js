/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fullpage.js/dist/fullpage.js":
/*!***************************************************!*\
  !*** ./node_modules/fullpage.js/dist/fullpage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
     true ? module.exports = factory() :
    undefined;
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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fullpage.js */ "./node_modules/fullpage.js/dist/fullpage.js");
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fullpage_js__WEBPACK_IMPORTED_MODULE_0__);
// Optional. When using fullPage extensions
//import scrollHorizontally from './fullpage.scrollHorizontally.min';

// Optional. When using scrollOverflow:true
//import IScroll from 'fullpage.js/vendors/scrolloverflow';

// Importing fullpage.js


// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
var fullPageInstance = new fullpage_js__WEBPACK_IMPORTED_MODULE_0___default.a('#myFullpage', {
    navigation: true,
    sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
});

// Calling methods
// fullpage_api.moveSectionDown();
// Or
// fullPageInstance.moveSectionDown();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBNEQ7QUFDaEUsSUFBSSxTQUN1RztBQUMzRyxDQUFDLHNCQUFzQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9CLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBLFdBQVcsaURBQWlEOzs7QUFHNUQscUNBQXFDOztBQUVyQyxvQkFBb0I7O0FBRXBCO0FBQ0E7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsOEZBQThGLGFBQWE7QUFDM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdGQUFnRixlQUFlO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0Isa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9B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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsc0RBQXNEO0FBQ3RELFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEOztBQUVBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvR0FBb0c7QUFDcEc7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU8sTUFBTTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGOztBQUVyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtB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QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNkNBQTZDOztBQUU3QztBQUNBLHdEQUF3RDs7QUFFeEQscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBLDRDQUE0Qzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxT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QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4qIGZ1bGxQYWdlIDQuMC4yMFxuKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcbipcbiogQGxpY2Vuc2UgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZSBvbmx5XG4qIG9yIEZ1bGxwYWdlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiogaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZS9wcmljaW5nL1xuKlxuKiBDb3B5cmlnaHQgKEMpIDIwMTggaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmZ1bGxwYWdlID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4gICAgaWYgKCFBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgJ2ZpbmQnLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShwcmVkaWNhdGUpIHtcbiAgICAgICAgICAvLyAxLiBMZXQgTyBiZSA/IFRvT2JqZWN0KHRoaXMgdmFsdWUpLlxuICAgICAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbyA9IE9iamVjdCh0aGlzKTsgLy8gMi4gTGV0IGxlbiBiZSA/IFRvTGVuZ3RoKD8gR2V0KE8sIFwibGVuZ3RoXCIpKS5cblxuICAgICAgICAgIHZhciBsZW4gPSBvLmxlbmd0aCA+Pj4gMDsgLy8gMy4gSWYgSXNDYWxsYWJsZShwcmVkaWNhdGUpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG5cbiAgICAgICAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICAgIH0gLy8gNC4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuXG5cbiAgICAgICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTsgLy8gNS4gTGV0IGsgYmUgMC5cblxuICAgICAgICAgIHZhciBrID0gMDsgLy8gNi4gUmVwZWF0LCB3aGlsZSBrIDwgbGVuXG5cbiAgICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgLy8gYS4gTGV0IFBrIGJlICEgVG9TdHJpbmcoaykuXG4gICAgICAgICAgICAvLyBiLiBMZXQga1ZhbHVlIGJlID8gR2V0KE8sIFBrKS5cbiAgICAgICAgICAgIC8vIGMuIExldCB0ZXN0UmVzdWx0IGJlIFRvQm9vbGVhbig/IENhbGwocHJlZGljYXRlLCBULCDCqyBrVmFsdWUsIGssIE8gwrspKS5cbiAgICAgICAgICAgIC8vIGQuIElmIHRlc3RSZXN1bHQgaXMgdHJ1ZSwgcmV0dXJuIGtWYWx1ZS5cbiAgICAgICAgICAgIHZhciBrVmFsdWUgPSBvW2tdO1xuXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlLmNhbGwodGhpc0FyZywga1ZhbHVlLCBrLCBvKSkge1xuICAgICAgICAgICAgICByZXR1cm4ga1ZhbHVlO1xuICAgICAgICAgICAgfSAvLyBlLiBJbmNyZWFzZSBrIGJ5IDEuXG5cblxuICAgICAgICAgICAgaysrO1xuICAgICAgICAgIH0gLy8gNy4gUmV0dXJuIHVuZGVmaW5lZC5cblxuXG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuICAgIGlmICghQXJyYXkuZnJvbSkge1xuICAgICAgQXJyYXkuZnJvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICAgICAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUoZm4pIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgICAgICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbiAgICAgICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gdG9MZW5ndGgodmFsdWUpIHtcbiAgICAgICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpO1xuICAgICAgICB9OyAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlXG4gICAgICAgIC8qLCBtYXBGbiwgdGhpc0FyZyAqL1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgICAgICB2YXIgQyA9IHRoaXM7IC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuXG4gICAgICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSk7IC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cblxuICAgICAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH0gLy8gNC4gSWYgbWFwZm4gaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBtYXBwaW5nIGJlIGZhbHNlLlxuXG5cbiAgICAgICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgICAgIHZhciBUO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH0gLy8gNS4gYi4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuXG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICBUID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgICAgIC8vIDExLiBMZXQgbGVuIGJlIFRvTGVuZ3RoKGxlblZhbHVlKS5cblxuXG4gICAgICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7IC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgICAgICAvLyAxMy4gYS4gTGV0IEEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZFxuICAgICAgICAgIC8vIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgICAgICAvLyAxNC4gYS4gRWxzZSwgTGV0IEEgYmUgQXJyYXlDcmVhdGUobGVuKS5cblxuICAgICAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pOyAvLyAxNi4gTGV0IGsgYmUgMC5cblxuICAgICAgICAgIHZhciBrID0gMDsgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcblxuICAgICAgICAgIHZhciBrVmFsdWU7XG5cbiAgICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAga1ZhbHVlID0gaXRlbXNba107XG5cbiAgICAgICAgICAgIGlmIChtYXBGbikge1xuICAgICAgICAgICAgICBBW2tdID0gdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oa1ZhbHVlLCBrKSA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIEFba10gPSBrVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgKz0gMTtcbiAgICAgICAgICB9IC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuXG5cbiAgICAgICAgICBBLmxlbmd0aCA9IGxlbjsgLy8gMjAuIFJldHVybiBBLlxuXG4gICAgICAgICAgcmV0dXJuIEE7XG4gICAgICAgIH07XG4gICAgICB9KCk7XG4gICAgfVxuXG4gICAgdmFyIHdpbiA9IHdpbmRvdztcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gICAgdmFyIGlzVG91Y2hEZXZpY2UgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfHBsYXlib29rfHNpbGt8QmxhY2tCZXJyeXxCQjEwfFdpbmRvd3MgUGhvbmV8VGl6ZW58QmFkYXx3ZWJPU3xJRU1vYmlsZXxPcGVyYSBNaW5pKS8pO1xuICAgIHZhciBpc01hY0RldmljZSA9IC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdCh3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIEB0cy1pZ25vcmVcblxuICAgIHZhciBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luIHx8IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG4gICAgdmFyIGlzSUUxMSA9ICEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlOyAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS91ZGFjaXR5L3VkODkxL2Jsb2IvZ2gtcGFnZXMvbGVzc29uMi1mb2N1cy8wNy1tb2RhbHMtYW5kLWtleWJvYXJkLXRyYXBzL3NvbHV0aW9uL21vZGFsLmpzXG5cbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0nOyAvLyBjYWNoZSBjb21tb24gZWxlbWVudHNcblxuICAgIHZhciBGUCA9IHtcbiAgICAgIHRlc3Q6IHt9LFxuICAgICAgc2hhcmVkOiB7fVxuICAgIH07XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBbJ3BhcmFsbGF4JywgJ3Njcm9sbE92ZXJmbG93UmVzZXQnLCAnZHJhZ0FuZE1vdmUnLCAnb2Zmc2V0U2VjdGlvbnMnLCAnZmFkaW5nRWZmZWN0JywgJ3Jlc3BvbnNpdmVTbGlkZXMnLCAnY29udGludW91c0hvcml6b250YWwnLCAnaW50ZXJsb2NrZWRTbGlkZXMnLCAnc2Nyb2xsSG9yaXpvbnRhbGx5JywgJ3Jlc2V0U2xpZGVycycsICdjYXJkcycsICdkcm9wRWZmZWN0JywgJ3dhdGVyRWZmZWN0J107XG5cbiAgICAvKipcbiAgICAqIGZvckVhY2ggcG9seWZpbGwgZm9yIElFXG4gICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZUxpc3QvZm9yRWFjaCNCcm93c2VyX0NvbXBhdGliaWxpdHlcbiAgICAqL1xuXG4gICAgaWYgKHdpbi5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBNdXN0IGJlIHdyaXRhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnYXNzaWduJywge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgdmFyQXJncykge1xuXG4gICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBUeXBlRXJyb3IgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBTa2lwIG92ZXIgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgYnVncyB3aGVuIGhhc093blByb3BlcnR5IGlzIHNoYWRvd2VkXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTE3MTk1NTMvcGFkc3RhcnQtbm90LXdvcmtpbmctaW4taWUxMVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZWhuYW1tb2RpL3BvbHlmaWxsL2Jsb2IvbWFzdGVyL3N0cmluZy5wb2x5ZmlsbC5qc1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9wYWRTdGFydFxuICAgIGlmICghU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCkge1xuICAgICAgU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCA9IGZ1bmN0aW9uIHBhZFN0YXJ0KHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKSB7XG4gICAgICAgIHRhcmdldExlbmd0aCA9IHRhcmdldExlbmd0aCA+PiAwOyAvL3RydW5jYXRlIGlmIG51bWJlciBvciBjb252ZXJ0IG5vbi1udW1iZXIgdG8gMDtcblxuICAgICAgICBwYWRTdHJpbmcgPSBTdHJpbmcodHlwZW9mIHBhZFN0cmluZyAhPT0gJ3VuZGVmaW5lZCcgPyBwYWRTdHJpbmcgOiAnICcpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IHRhcmdldExlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0TGVuZ3RoID0gdGFyZ2V0TGVuZ3RoIC0gdGhpcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0TGVuZ3RoID4gcGFkU3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFkU3RyaW5nICs9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHRhcmdldExlbmd0aCkpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYWRTdHJpbmc7XG4gICAgICAgICAgICB9KS5qb2luKFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYWRTdHJpbmcuc2xpY2UoMCwgdGFyZ2V0TGVuZ3RoKSArIFN0cmluZyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvL3V0aWxzXG4gICAgLyoqXG4gICAgKiBTaG93cyBhIG1lc3NhZ2UgaW4gdGhlIGNvbnNvbGUgb2YgdGhlIGdpdmVuIHR5cGUuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNob3dFcnJvcih0eXBlLCB0ZXh0KSB7XG4gICAgICB3aW4uY29uc29sZSAmJiB3aW4uY29uc29sZVt0eXBlXSAmJiB3aW4uY29uc29sZVt0eXBlXSgnZnVsbFBhZ2U6ICcgKyB0ZXh0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gICAgICB2YXIgc3R5bGUgPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgICByZXR1cm4gc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRWaXNpYmxlKGVsZW1lbnRzKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50cykuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBpc1Zpc2libGUoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBFcXVpdmFsZW50IG9mIGpRdWVyeSBmdW5jdGlvbiAkKCkuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGNvbnRleHQgOiBkb2N1bWVudDtcbiAgICAgIHJldHVybiBjb250ZXh0ID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICogRXh0ZW5kcyBhIGdpdmVuIE9iamVjdCBwcm9wZXJ0aWVzIGFuZCBpdHMgY2hpbGRzLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBkZWVwRXh0ZW5kKG91dCkge1xuICAgICAgb3V0ID0gb3V0IHx8IHt9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGtleSA9PSAnX19wcm90b19fJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSAvLyBiYXNlZCBvbiBodHRwczovL2phdmFzY3JpcHR3ZWJsb2cud29yZHByZXNzLmNvbS8yMDExLzA4LzA4L2ZpeGluZy10aGUtamF2YXNjcmlwdC10eXBlb2Ytb3BlcmF0b3IvXG5cblxuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2tleV0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgICAgb3V0W2tleV0gPSBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgZWxlbWVudCBjb250YWlucyB0aGUgcGFzc2VkIGNsYXNzLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoZWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSB3aW5kb3cgaGVpZ2h0LiBDcm9zc2Jyb3dzZXIuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcbiAgICAgIHJldHVybiAnaW5uZXJIZWlnaHQnIGluIHdpbiA/IHdpbi5pbm5lckhlaWdodCA6IGRvYy5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIHdpbmRvdyB3aWR0aC5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93V2lkdGgoKSB7XG4gICAgICByZXR1cm4gd2luLmlubmVyV2lkdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICogU2V0J3MgdGhlIENTUyBwcm9wZXJ0aWVzIGZvciB0aGUgcGFzc2VkIGl0ZW0vcy5cbiAgICAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTEVsZW1lbnR8T2JqZWN0fSBpdGVtc1xuICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIGNzcyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGNzcyhpdGVtcywgcHJvcHMpIHtcbiAgICAgIGl0ZW1zID0gZ2V0TGlzdChpdGVtcyk7XG4gICAgICB2YXIga2V5O1xuXG4gICAgICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmIChrZXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgaXRlbS5zdHlsZVtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIHByZXZpb3VzIGVsZW1lbnQgdG8gdGhlIHBhc3NlZCBlbGVtZW50LlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBwcmV2KGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgbmV4dCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudC5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gbmV4dChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIHBhc3NlZCBsaXN0IG9mIGVsZW1lbnRzLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBsYXN0KGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtW2l0ZW0ubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIC8qKlxuICAgICogR2V0cyBpbmRleCBmcm9tIHRoZSBwYXNzZWQgZWxlbWVudC5cbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBpcyBvcHRpb25hbC5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gaW5kZXgoaXRlbSwgc2VsZWN0b3IpIHtcbiAgICAgIGl0ZW0gPSBpc0FycmF5T3JMaXN0KGl0ZW0pID8gaXRlbVswXSA6IGl0ZW07XG4gICAgICB2YXIgY2hpbGRyZW4gPSBzZWxlY3RvciAhPSBudWxsID8gJChzZWxlY3RvciwgaXRlbS5wYXJlbnROb2RlKSA6IGl0ZW0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgICAgdmFyIG51bSA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldID09IGl0ZW0pIHJldHVybiBudW07XG4gICAgICAgIGlmIChjaGlsZHJlbltpXS5ub2RlVHlwZSA9PSAxKSBudW0rKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgYW4gaXRlcmFibGUgZWxlbWVudCBmb3IgdGhlIHBhc3NlZCBlbGVtZW50L3NcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0TGlzdChpdGVtKSB7XG4gICAgICByZXR1cm4gIWlzQXJyYXlPckxpc3QoaXRlbSkgPyBbaXRlbV0gOiBpdGVtO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEFkZHMgdGhlIGRpc3BsYXk9bm9uZSBwcm9wZXJ0eSBmb3IgdGhlIHBhc3NlZCBlbGVtZW50L3NcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gaGlkZShlbCkge1xuICAgICAgZWwgPSBnZXRMaXN0KGVsKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIC8qKlxuICAgICogQWRkcyB0aGUgZGlzcGxheT1ibG9jayBwcm9wZXJ0eSBmb3IgdGhlIHBhc3NlZCBlbGVtZW50L3NcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2hvdyhlbCkge1xuICAgICAgZWwgPSBnZXRMaXN0KGVsKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENoZWNrcyBpZiB0aGUgcGFzc2VkIGVsZW1lbnQgaXMgYW4gaXRlcmFibGUgZWxlbWVudCBvciBub3RcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gaXNBcnJheU9yTGlzdChlbCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbCkgPT09ICdbb2JqZWN0IEFycmF5XScgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsKSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJztcbiAgICB9XG4gICAgLyoqXG4gICAgKiBBZGRzIHRoZSBwYXNzZWQgY2xhc3MgdG8gdGhlIHBhc3NlZCBlbGVtZW50L3NcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgZWwgPSBnZXRMaXN0KGVsKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IGVsW2ldO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgdGhlIHBhc3NlZCBjbGFzcyB0byB0aGUgcGFzc2VkIGVsZW1lbnQvc1xuICAgICogQHBhcmFtIHtTdHJpbmd9IGBjbGFzc05hbWVgIGNhbiBiZSBtdWx0aXBsZSBjbGFzc25hbWVzIHNlcGFyYXRlZCBieSB3aGl0ZXNwYWNlXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgIGVsID0gZ2V0TGlzdChlbCk7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG4gICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGNsYXNzTmFtZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lc1thXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBlbFtpXTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIC8qKlxuICAgICogQXBwZW5kcyB0aGUgZ2l2ZW4gZWxlbWVudCBvdCB0aGUgZ2l2ZW4gcGFyZW50LlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhlbCwgcGFyZW50KSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICAvKipcbiAgICBVc2FnZTpcblxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnZnAtc2xpZGVzJztcbiAgICB3cmFwKCQoJy5zbGlkZScpLCB3cmFwcGVyKTtcblxuICAgIGh0dHBzOi8vanNmaWRkbGUubmV0L3F3emM3b3kzLzE1LyAodmFuaWxsYSlcbiAgICBodHRwczovL2pzZmlkZGxlLm5ldC9veWE2bmRrYS8xLyAoanF1ZXJ5IGVxdWl2YWxlbnQpXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHdyYXAodG9XcmFwLCB3cmFwcGVyLCBpc1dyYXBBbGwpIHtcbiAgICAgIHZhciBuZXdQYXJlbnQ7XG4gICAgICB3cmFwcGVyID0gd3JhcHBlciB8fCBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9XcmFwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gdG9XcmFwW2ldO1xuXG4gICAgICAgIGlmIChpc1dyYXBBbGwgJiYgIWkgfHwgIWlzV3JhcEFsbCkge1xuICAgICAgICAgIG5ld1BhcmVudCA9IHdyYXBwZXIuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3UGFyZW50LCBpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1BhcmVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvV3JhcDtcbiAgICB9XG4gICAgLyoqXG4gICAgVXNhZ2U6XG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdmcC1zbGlkZXMnO1xuICAgIHdyYXAoJCgnLnNsaWRlJyksIHdyYXBwZXIpO1xuXG4gICAgaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvcXd6YzdveTMvMjcvICh2YW5pbGxhKVxuICAgIGh0dHBzOi8vanNmaWRkbGUubmV0L295YTZuZGthLzQvIChqcXVlcnkgZXF1aXZhbGVudClcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gd3JhcEFsbCh0b1dyYXAsIHdyYXBwZXIpIHtcbiAgICAgIHdyYXAodG9XcmFwLCB3cmFwcGVyLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBVc2FnZTpcbiAgICAqIHdyYXBJbm5lcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVwZScpLCAnPGRpdiBjbGFzcz1cInRlc3RcIj5hZmRhczwvZGl2PicpO1xuICAgICogd3JhcElubmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXBlJyksIGVsZW1lbnQpO1xuICAgICpcbiAgICAqIGh0dHBzOi8vanNmaWRkbGUubmV0L3pleHh6MHR3LzYvXG4gICAgKlxuICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxODE3NTkwLzEwODEzOTZcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gd3JhcElubmVyKHBhcmVudCwgd3JhcHBlcikge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQgIT09IHdyYXBwZXIpIHtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogVXNhZ2U6XG4gICAgKiB1bndyYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcGUnKSk7XG4gICAgKiB1bndyYXAoZWxlbWVudCk7XG4gICAgKlxuICAgICogaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvc3pqdDBoeHEvMS9cbiAgICAqXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHVud3JhcCh3cmFwcGVyKSB7XG4gICAgICB2YXIgd3JhcHBlckNvbnRlbnQgPSBkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgIHdyYXBwZXJDb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlckNvbnRlbnQsIHdyYXBwZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjIxMDA4NTMvZG9tLXB1cmUtamF2YXNjcmlwdC1zb2x1dGlvbi10by1qcXVlcnktY2xvc2VzdC1pbXBsZW1lbnRhdGlvblxuICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBvciBgZmFsc2VgIGlmIHRoZXJlJ3Mgbm9uZVxuICAgICovXG5cbiAgICBmdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvcikge1xuICAgICAgaWYgKGVsICYmIGVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvc2VzdChlbC5wYXJlbnROb2RlLCBzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFBsYWNlcyBvbmUgZWxlbWVudCAocmVsKSBhZnRlciBhbm90aGVyIG9uZSBvciBncm91cCBvZiB0aGVtIChyZWZlcmVuY2UpLlxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fE5vZGVMaXN0fFN0cmluZ3xBcnJheX0gZWxcbiAgICAqIGh0dHBzOi8vanNmaWRkbGUubmV0LzlzOTdoaHp2LzEvXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGFmdGVyKHJlZmVyZW5jZSwgZWwpIHtcbiAgICAgIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIHJlZmVyZW5jZS5uZXh0U2libGluZywgZWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFBsYWNlcyBvbmUgZWxlbWVudCAocmVsKSBiZWZvcmUgYW5vdGhlciBvbmUgb3IgZ3JvdXAgb2YgdGhlbSAocmVmZXJlbmNlKS5cbiAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxOb2RlTGlzdHxTdHJpbmd8QXJyYXl9IGVsXG4gICAgKiBodHRwczovL2pzZmlkZGxlLm5ldC85czk3aGh6di8xL1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBiZWZvcmUocmVmZXJlbmNlLCBlbCkge1xuICAgICAgaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBlbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQmFzZWQgaW4gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE5MzE2MDI0LzEwODEzOTZcbiAgICAqIGFuZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc5MzYzMC8xMDgxMzk2XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIGJlZm9yZUVsZW1lbnQsIGVsKSB7XG4gICAgICBpZiAoIWlzQXJyYXlPckxpc3QoZWwpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWwgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlbCA9IGNyZWF0ZUVsZW1lbnRGcm9tSFRNTChlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbCA9IFtlbF07XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVmZXJlbmNlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsW2ldLCBiZWZvcmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9IC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNDY0ODc2L2phdmFzY3JpcHQtZ2V0LXdpbmRvdy14LXktcG9zaXRpb24tZm9yLXNjcm9sbFxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuICAgICAgdmFyIGRvY0VsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgcmV0dXJuICh3aW4ucGFnZVlPZmZzZXQgfHwgZG9jRWxlbWVudC5zY3JvbGxUb3ApIC0gKGRvY0VsZW1lbnQuY2xpZW50VG9wIHx8IDApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBwYXNzZWQgZWxlbWVudFxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzaWJsaW5ncyhlbCkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbC5wYXJlbnROb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkICE9PSBlbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QXR0cihlbCwgYXR0cikge1xuICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG9jQWRkRXZlbnQoZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG9wdGlvbnMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3aW5kb3dBZGRFdmVudChldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogb3B0aW9ucyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRvY1JlbW92ZUV2ZW50KGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBvcHRpb25zKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2luZG93UmVtb3ZlRXZlbnQoZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIGl0ZW0gaXMgb2YgZnVuY3Rpb24gdHlwZS5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pO1xuICAgICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUcmlnZ2VyIGN1c3RvbSBldmVudHNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gdHJpZ2dlcihlbCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB2YXIgZXZlbnQ7XG4gICAgICBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8ge30gOiBkYXRhOyAvLyBOYXRpdmVcblxuICAgICAgaWYgKHR5cGVvZiB3aW4uQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgICAgICBkZXRhaWw6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudCA9IGRvYy5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFBvbHlmaWxsIG9mIC5tYXRjaGVzKClcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiAoZWwubWF0Y2hlcyB8fCBlbC5tYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbC5vTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKGVsLCBzZWxlY3Rvcik7XG4gICAgfVxuICAgIC8qKlxuICAgICogVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcGFzc2VkIGVsZW1lbnQgZWwuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZShlbCwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlbFtpXS5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9IC8vd2UgZG9uJ3QgdXNlIGl0IGluIG90aGVyIHdheSwgc28gbm8gZWxzZSA6KVxuXG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgSFRNTEVsZW1lbnQgZnJvbSB0aGUgcGFzc2VkIEhUTUwgc3RyaW5nLlxuICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ5NDM0OC8xMDgxMzk2XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTChodG1sU3RyaW5nKSB7XG4gICAgICB2YXIgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpOyAvLyBDaGFuZ2UgdGhpcyB0byBkaXYuY2hpbGROb2RlcyB0byBzdXBwb3J0IG11bHRpcGxlIHRvcC1sZXZlbCBub2Rlc1xuXG4gICAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogUmVtb3ZlcyB0aGUgcGFzc2VkIGl0ZW0vcyBmcm9tIHRoZSBET00uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShpdGVtcykge1xuICAgICAgaXRlbXMgPSBnZXRMaXN0KGl0ZW1zKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy9odHRwczovL2pzZmlkZGxlLm5ldC93MXJrdGVjei9cblxuICAgIGZ1bmN0aW9uIHVudGlsQWxsKGl0ZW0sIHNlbGVjdG9yLCBmbikge1xuICAgICAgdmFyIHNpYmxpbmcgPSBpdGVtW2ZuXTtcbiAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xuXG4gICAgICB3aGlsZSAoc2libGluZykge1xuICAgICAgICBpZiAobWF0Y2hlcyhzaWJsaW5nLCBzZWxlY3RvcikgfHwgc2VsZWN0b3IgPT0gbnVsbCkge1xuICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzaWJsaW5nID0gc2libGluZ1tmbl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaWJsaW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgKiBHZXRzIGFsbCBuZXh0IGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBwYXNzZWQgc2VsZWN0b3IuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIG5leHRBbGwoaXRlbSwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiB1bnRpbEFsbChpdGVtLCBzZWxlY3RvciwgJ25leHRFbGVtZW50U2libGluZycpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgYWxsIHByZXZpb3VzIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBwYXNzZWQgc2VsZWN0b3IuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHByZXZBbGwoaXRlbSwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiB1bnRpbEFsbChpdGVtLCBzZWxlY3RvciwgJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDb252ZXJ0cyBhbiBvYmplY3QgdG8gYW4gYXJyYXkuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHRvQXJyYXkob2JqZWN0RGF0YSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdERhdGEpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBvYmplY3REYXRhW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TGFzdChpdGVtcykge1xuICAgICAgcmV0dXJuIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGxhc3QgYG51bWJlcmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGFycmF5LlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBnZXRBdmVyYWdlKGVsZW1lbnRzLCBudW1iZXIpIHtcbiAgICAgIHZhciBzdW0gPSAwOyAvL3Rha2luZyBgbnVtYmVyYCBlbGVtZW50cyBmcm9tIHRoZSBlbmQgdG8gbWFrZSB0aGUgYXZlcmFnZSwgaWYgdGhlcmUgYXJlIG5vdCBlbm91Z2h0LCAxXG5cbiAgICAgIHZhciBsYXN0RWxlbWVudHMgPSBlbGVtZW50cy5zbGljZShNYXRoLm1heChlbGVtZW50cy5sZW5ndGggLSBudW1iZXIsIDEpKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3VtID0gc3VtICsgbGFzdEVsZW1lbnRzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHN1bSAvIG51bWJlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICogU2V0cyB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgZnJvbSB0aGUgYGRhdGEtYCBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSBzdWZmaXhcbiAgICAqIGllOiBkYXRhLXNyY3NldCA9PT4gc3Jjc2V0ICB8ICBkYXRhLXNyYyA9PT4gc3JjXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNldFNyYyhlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgZ2V0QXR0cihlbGVtZW50LCAnZGF0YS0nICsgYXR0cmlidXRlKSk7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS0nICsgYXR0cmlidXRlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50c1VudGlsKGl0ZW0sIHRvcFBhcmVudFNlbGVjdG9yKSB7XG4gICAgICB2YXIgcGFyZW50cyA9IFtpdGVtXTtcblxuICAgICAgZG8ge1xuICAgICAgICBpdGVtID0gaXRlbS5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnRzLnB1c2goaXRlbSk7XG4gICAgICB9IHdoaWxlICghbWF0Y2hlcyhpdGVtLCB0b3BQYXJlbnRTZWxlY3RvcikpO1xuXG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJbnNpZGVJbnB1dCgpIHtcbiAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICByZXR1cm4gbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAndGV4dGFyZWEnKSB8fCBtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdpbnB1dCcpIHx8IG1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ3NlbGVjdCcpIHx8IGdldEF0dHIoYWN0aXZlRWxlbWVudCwgJ2NvbnRlbnRFZGl0YWJsZScpID09IFwidHJ1ZVwiIHx8IGdldEF0dHIoYWN0aXZlRWxlbWVudCwgJ2NvbnRlbnRFZGl0YWJsZScpID09ICcnO1xuICAgIH0gLy91dGlscyBhcmUgcHVibGljLCBzbyB3ZSBjYW4gdXNlIGl0IHdoZXJldmVyIHdlIHdhbnRcbiAgICAvLyBAdHMtaWdub3JlXG5cbiAgICB3aW5kb3dbXCJmcF91dGlsc1wiXSA9IHtcbiAgICAgIFwiJFwiOiAkLFxuICAgICAgXCJkZWVwRXh0ZW5kXCI6IGRlZXBFeHRlbmQsXG4gICAgICBcImhhc0NsYXNzXCI6IGhhc0NsYXNzLFxuICAgICAgXCJnZXRXaW5kb3dIZWlnaHRcIjogZ2V0V2luZG93SGVpZ2h0LFxuICAgICAgXCJjc3NcIjogY3NzLFxuICAgICAgXCJwcmV2XCI6IHByZXYsXG4gICAgICBcIm5leHRcIjogbmV4dCxcbiAgICAgIFwibGFzdFwiOiBsYXN0LFxuICAgICAgXCJpbmRleFwiOiBpbmRleCxcbiAgICAgIFwiZ2V0TGlzdFwiOiBnZXRMaXN0LFxuICAgICAgXCJoaWRlXCI6IGhpZGUsXG4gICAgICBcInNob3dcIjogc2hvdyxcbiAgICAgIFwiaXNBcnJheU9yTGlzdFwiOiBpc0FycmF5T3JMaXN0LFxuICAgICAgXCJhZGRDbGFzc1wiOiBhZGRDbGFzcyxcbiAgICAgIFwicmVtb3ZlQ2xhc3NcIjogcmVtb3ZlQ2xhc3MsXG4gICAgICBcImFwcGVuZFRvXCI6IGFwcGVuZFRvLFxuICAgICAgXCJ3cmFwXCI6IHdyYXAsXG4gICAgICBcIndyYXBBbGxcIjogd3JhcEFsbCxcbiAgICAgIFwidW53cmFwXCI6IHVud3JhcCxcbiAgICAgIFwiY2xvc2VzdFwiOiBjbG9zZXN0LFxuICAgICAgXCJhZnRlclwiOiBhZnRlcixcbiAgICAgIFwiYmVmb3JlXCI6IGJlZm9yZSxcbiAgICAgIFwiaW5zZXJ0QmVmb3JlXCI6IGluc2VydEJlZm9yZSxcbiAgICAgIFwiZ2V0U2Nyb2xsVG9wXCI6IGdldFNjcm9sbFRvcCxcbiAgICAgIFwic2libGluZ3NcIjogc2libGluZ3MsXG4gICAgICBcInByZXZlbnREZWZhdWx0XCI6IHByZXZlbnREZWZhdWx0LFxuICAgICAgXCJpc0Z1bmN0aW9uXCI6IGlzRnVuY3Rpb24sXG4gICAgICBcInRyaWdnZXJcIjogdHJpZ2dlcixcbiAgICAgIFwibWF0Y2hlc1wiOiBtYXRjaGVzLFxuICAgICAgXCJ0b2dnbGVcIjogdG9nZ2xlLFxuICAgICAgXCJjcmVhdGVFbGVtZW50RnJvbUhUTUxcIjogY3JlYXRlRWxlbWVudEZyb21IVE1MLFxuICAgICAgXCJyZW1vdmVcIjogcmVtb3ZlLFxuICAgICAgLy8gXCJmaWx0ZXJcIjogZmlsdGVyLFxuICAgICAgXCJ1bnRpbEFsbFwiOiB1bnRpbEFsbCxcbiAgICAgIFwibmV4dEFsbFwiOiBuZXh0QWxsLFxuICAgICAgXCJwcmV2QWxsXCI6IHByZXZBbGwsXG4gICAgICBcInNob3dFcnJvclwiOiBzaG93RXJyb3JcbiAgICB9O1xuXG4gICAgdmFyIHV0aWxzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICAgIHNob3dFcnJvcjogc2hvd0Vycm9yLFxuICAgICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICAgICAgZ2V0VmlzaWJsZTogZ2V0VmlzaWJsZSxcbiAgICAgICAgJDogJCxcbiAgICAgICAgZGVlcEV4dGVuZDogZGVlcEV4dGVuZCxcbiAgICAgICAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICAgICAgICBnZXRXaW5kb3dIZWlnaHQ6IGdldFdpbmRvd0hlaWdodCxcbiAgICAgICAgZ2V0V2luZG93V2lkdGg6IGdldFdpbmRvd1dpZHRoLFxuICAgICAgICBjc3M6IGNzcyxcbiAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgbmV4dDogbmV4dCxcbiAgICAgICAgbGFzdDogbGFzdCxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBnZXRMaXN0OiBnZXRMaXN0LFxuICAgICAgICBoaWRlOiBoaWRlLFxuICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICBpc0FycmF5T3JMaXN0OiBpc0FycmF5T3JMaXN0LFxuICAgICAgICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gICAgICAgIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgICB3cmFwOiB3cmFwLFxuICAgICAgICB3cmFwQWxsOiB3cmFwQWxsLFxuICAgICAgICB3cmFwSW5uZXI6IHdyYXBJbm5lcixcbiAgICAgICAgdW53cmFwOiB1bndyYXAsXG4gICAgICAgIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gICAgICAgIGFmdGVyOiBhZnRlcixcbiAgICAgICAgYmVmb3JlOiBiZWZvcmUsXG4gICAgICAgIGluc2VydEJlZm9yZTogaW5zZXJ0QmVmb3JlLFxuICAgICAgICBnZXRTY3JvbGxUb3A6IGdldFNjcm9sbFRvcCxcbiAgICAgICAgc2libGluZ3M6IHNpYmxpbmdzLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogcHJldmVudERlZmF1bHQsXG4gICAgICAgIGdldEF0dHI6IGdldEF0dHIsXG4gICAgICAgIGRvY0FkZEV2ZW50OiBkb2NBZGRFdmVudCxcbiAgICAgICAgd2luZG93QWRkRXZlbnQ6IHdpbmRvd0FkZEV2ZW50LFxuICAgICAgICBkb2NSZW1vdmVFdmVudDogZG9jUmVtb3ZlRXZlbnQsXG4gICAgICAgIHdpbmRvd1JlbW92ZUV2ZW50OiB3aW5kb3dSZW1vdmVFdmVudCxcbiAgICAgICAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTDogY3JlYXRlRWxlbWVudEZyb21IVE1MLFxuICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgdW50aWxBbGw6IHVudGlsQWxsLFxuICAgICAgICBuZXh0QWxsOiBuZXh0QWxsLFxuICAgICAgICBwcmV2QWxsOiBwcmV2QWxsLFxuICAgICAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgICAgICBnZXRMYXN0OiBnZXRMYXN0LFxuICAgICAgICBnZXRBdmVyYWdlOiBnZXRBdmVyYWdlLFxuICAgICAgICBzZXRTcmM6IHNldFNyYyxcbiAgICAgICAgZ2V0UGFyZW50c1VudGlsOiBnZXRQYXJlbnRzVW50aWwsXG4gICAgICAgIGlzSW5zaWRlSW5wdXQ6IGlzSW5zaWRlSW5wdXRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbiAgICB9XG5cbiAgICB2YXIgRXZlbnRFbWl0dGVyID0ge1xuICAgICAgZXZlbnRzOiB7fSxcbiAgICAgIG9uOiBmdW5jdGlvbiBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoX3R5cGVvZih0aGlzLmV2ZW50c1tldmVudF0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKF90eXBlb2YodGhpcy5ldmVudHNbZXZlbnRdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YXIgaWR4ID0gdGhpcy5ldmVudHNbZXZlbnRdLmluZGV4T2YobGlzdGVuZXIpO1xuXG4gICAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW1pdDogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3R5cGVvZih0aGlzLmV2ZW50c1tldmVudF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KF90aGlzMiwgYXJncyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbmNlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgcmVtb3ZlID0gdGhpcy5vbihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlbW92ZSgpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXIuYXBwbHkoX3RoaXMzLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIG51bVNlY3Rpb25zOiAwLFxuICAgICAgbnVtU2xpZGVzOiAwLFxuICAgICAgc2xpZGVzOiBbXSxcbiAgICAgIHNlY3Rpb25zOiBbXSxcbiAgICAgIGFjdGl2ZVNlY3Rpb246IG51bGwsXG4gICAgICBzY3JvbGxUcmlnZ2VyOiBudWxsLFxuICAgICAgaXNCZXlvbmRGdWxscGFnZTogZmFsc2UsXG4gICAgICBhYm91dFRvU2Nyb2xsVG9GdWxsUGFnZTogZmFsc2UsXG4gICAgICBzbGlkZU1vdmluZzogZmFsc2UsXG4gICAgICBpc1Jlc2l6aW5nOiBmYWxzZSxcbiAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgIGxhc3RTY3JvbGxlZERlc3Rpbnk6IHVuZGVmaW5lZCxcbiAgICAgIGxhc3RTY3JvbGxlZFNsaWRlOiB1bmRlZmluZWQsXG4gICAgICBhY3RpdmVBbmltYXRpb246IGZhbHNlLFxuICAgICAgY2FuU2Nyb2xsOiB0cnVlLFxuICAgICAgdG91Y2hEaXJlY3Rpb246ICdub25lJyxcbiAgICAgIHdoZWVsRGlyZWN0aW9uOiAnbm9uZScsXG4gICAgICBpc0dyYWJiaW5nOiBmYWxzZSxcbiAgICAgIGlzVXNpbmdXaGVlbDogZmFsc2UsXG4gICAgICBpc1dpbmRvd0ZvY3VzZWQ6IHRydWUsXG4gICAgICBwcmV2aW91c0Rlc3RUb3A6IDAsXG4gICAgICB3aW5kb3dzSGVpZ2h0OiBnZXRXaW5kb3dIZWlnaHQoKSxcbiAgICAgIGlzRG9pbmdDb250aW5vdXNWZXJ0aWNhbDogZmFsc2UsXG4gICAgICB0aW1lb3V0czoge30sXG4gICAgICBzY3JvbGxZOiAwLFxuICAgICAgc2Nyb2xsWDogMFxuICAgIH07IC8vIEB0cy1pZ25vcmVcblxuICAgIHdpbi5zdGF0ZSA9IHN0YXRlO1xuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHByb3BzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLCBwcm9wcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVQYW5lbCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5hY3RpdmVTZWN0aW9uICYmIHN0YXRlLmFjdGl2ZVNlY3Rpb24uYWN0aXZlU2xpZGUgPyBzdGF0ZS5hY3RpdmVTZWN0aW9uLmFjdGl2ZVNsaWRlIDogc3RhdGUuYWN0aXZlU2VjdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgZXZlbnRzID0ge1xuICAgICAgb25BZnRlclJlbmRlck5vQW5jaG9yOiAnb25BZnRlclJlbmRlck5vQW5jaG9yJyxcbiAgICAgIG9uQ2xpY2tPclRvdWNoOiAnb25DbGlja09yVG91Y2gnLFxuICAgICAgbW92ZVNsaWRlTGVmdDogJ21vdmVTbGlkZUxlZnQnLFxuICAgICAgbW92ZVNsaWRlUmlnaHQ6ICdtb3ZlU2xpZGVSaWdodCcsXG4gICAgICBvbkluaXRpYWxpc2U6ICdvbkluaXRpYWxpc2UnLFxuICAgICAgYmVmb3JlSW5pdDogJ2JlZm9yZUluaXQnLFxuICAgICAgYmluZEV2ZW50czogJ2JpbmRFdmVudHMnLFxuICAgICAgb25EZXN0cm95OiAnb25EZXN0cm95JyxcbiAgICAgIGNvbnRlbnRDaGFuZ2VkOiAnY29udGVudENoYW5nZWQnLFxuICAgICAgb25TY3JvbGxPdmVyZmxvd1Njcm9sbGVkOiAnb25TY3JvbGxPdmVyZmxvd1Njcm9sbGVkJyxcbiAgICAgIG9uU2Nyb2xsUGFnZUFuZFNsaWRlOiAnb25TY3JvbGxQYWdlQW5kU2xpZGUnLFxuICAgICAgb25LZXlEb3duOiAnb25LZXlEb3duJyxcbiAgICAgIG9uTWVudUNsaWNrOiAnb25NZW51Q2xpY2snLFxuICAgICAgc2Nyb2xsUGFnZTogJ3Njcm9sbFBhZ2UnLFxuICAgICAgbGFuZHNjYXBlU2Nyb2xsOiAnbGFuZHNjYXBlU2Nyb2xsJyxcbiAgICAgIHNjcm9sbEJleW9uZEZ1bGxwYWdlOiAnc2Nyb2xsQmV5b25kRnVsbHBhZ2UnLFxuICAgICAgb25QZXJmb3JtTW92ZW1lbnQ6ICdvblBlcmZvcm1Nb3ZlbWVudCcsXG4gICAgICBvblNsaWRlTGVhdmU6ICdvblNsaWRlTGVhdmUnLFxuICAgICAgb25MZWF2ZTogJ29uTGVhdmUnLFxuICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHM6ICdhZnRlclNlY3Rpb25Mb2FkcycsXG4gICAgICBhZnRlclNsaWRlTG9hZHM6ICdhZnRlclNsaWRlTG9hZHMnXG4gICAgfTtcblxuICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYmluZEV2ZW50cywgYmluZEV2ZW50cyRjKTtcblxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMkYygpIHtcbiAgICAgIC8vU2Nyb2xscyB0byB0aGUgc2VjdGlvbiB3aGVuIGNsaWNraW5nIHRoZSBuYXZpZ2F0aW9uIGJ1bGxldFxuICAgICAgLy9zaW11bGF0aW5nIHRoZSBqUXVlcnkgLm9uKCdjbGljaycpIGV2ZW50IHVzaW5nIGRlbGVnYXRpb25cbiAgICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICBkb2NBZGRFdmVudChldmVudE5hbWUsIGRlbGVnYXRlZEV2ZW50cyk7XG4gICAgICB9KTtcbiAgICAgIHdpbmRvd0FkZEV2ZW50KCdmb2N1cycsIGZvY3VzSGFuZGxlcik7XG4gICAgICBpbnRlcm5hbEV2ZW50cygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludGVybmFsRXZlbnRzKCkge1xuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkRlc3Ryb3ksIG9uRGVzdHJveSQ5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxlZ2F0ZWRFdmVudHMoZSkge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm9uQ2xpY2tPclRvdWNoLCB7XG4gICAgICAgIGU6IGUsXG4gICAgICAgIHRhcmdldDogZS50YXJnZXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVzdHJveSQ5KCkge1xuICAgICAgWydjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIGRvY1JlbW92ZUV2ZW50KGV2ZW50TmFtZSwgZGVsZWdhdGVkRXZlbnRzKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gY2hhbmdpbmcgaXNXaW5kb3dGb2N1c2VkIHRvIHRydWUgb24gZm9jdXMgZXZlbnRcblxuXG4gICAgZnVuY3Rpb24gZm9jdXNIYW5kbGVyKCkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBpc1dpbmRvd0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGtlZXBpbmcgY2VudHJhbCBzZXQgb2YgY2xhc3NuYW1lcyBhbmQgc2VsZWN0b3JzXG4gICAgdmFyIFdSQVBQRVIgPSAnZnVsbHBhZ2Utd3JhcHBlcic7XG4gICAgdmFyIFdSQVBQRVJfU0VMID0gJy4nICsgV1JBUFBFUjsgLy8gc2xpbXNjcm9sbFxuXG4gICAgdmFyIFNDUk9MTEFCTEUgPSAnZnAtc2Nyb2xsYWJsZSc7XG5cbiAgICB2YXIgUkVTUE9OU0lWRSA9ICdmcC1yZXNwb25zaXZlJztcbiAgICB2YXIgTk9fVFJBTlNJVElPTiA9ICdmcC1ub3RyYW5zaXRpb24nO1xuICAgIHZhciBERVNUUk9ZRUQgPSAnZnAtZGVzdHJveWVkJztcbiAgICB2YXIgRU5BQkxFRCA9ICdmcC1lbmFibGVkJztcbiAgICB2YXIgVklFV0lOR19QUkVGSVggPSAnZnAtdmlld2luZyc7XG4gICAgdmFyIEFDVElWRSA9ICdhY3RpdmUnO1xuICAgIHZhciBBQ1RJVkVfU0VMID0gJy4nICsgQUNUSVZFO1xuICAgIHZhciBDT01QTEVURUxZID0gJ2ZwLWNvbXBsZXRlbHknO1xuICAgIHZhciBDT01QTEVURUxZX1NFTCA9ICcuJyArIENPTVBMRVRFTFk7IC8vIHNlY3Rpb25cblxuICAgIHZhciBTRUNUSU9OX0RFRkFVTFRfU0VMID0gJy5zZWN0aW9uJztcbiAgICB2YXIgU0VDVElPTiA9ICdmcC1zZWN0aW9uJztcbiAgICB2YXIgU0VDVElPTl9TRUwgPSAnLicgKyBTRUNUSU9OO1xuICAgIHZhciBTRUNUSU9OX0FDVElWRV9TRUwgPSBTRUNUSU9OX1NFTCArIEFDVElWRV9TRUw7XG4gICAgdmFyIFRBQkxFX0NFTEwgPSAnZnAtdGFibGVDZWxsJztcbiAgICB2YXIgVEFCTEVfQ0VMTF9TRUwgPSAnLicgKyBUQUJMRV9DRUxMO1xuICAgIHZhciBBVVRPX0hFSUdIVCA9ICdmcC1hdXRvLWhlaWdodCc7XG4gICAgdmFyIEFVVE9fSEVJR0hUX1NFTCA9ICcuJyArIEFVVE9fSEVJR0hUO1xuICAgIHZhciBBVVRPX0hFSUdIVF9SRVNQT05TSVZFID0gJ2ZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUnO1xuICAgIHZhciBBVVRPX0hFSUdIVF9SRVNQT05TSVZFX1NFTCA9ICcuJyArIEFVVE9fSEVJR0hUX1JFU1BPTlNJVkU7XG4gICAgdmFyIE5PUk1BTF9TQ1JPTEwgPSAnZnAtbm9ybWFsLXNjcm9sbCc7XG5cbiAgICB2YXIgU0VDVElPTl9OQVYgPSAnZnAtbmF2JztcbiAgICB2YXIgU0VDVElPTl9OQVZfU0VMID0gJyMnICsgU0VDVElPTl9OQVY7XG4gICAgdmFyIFNFQ1RJT05fTkFWX1RPT0xUSVAgPSAnZnAtdG9vbHRpcCc7XG4gICAgdmFyIFNFQ1RJT05fTkFWX1RPT0xUSVBfU0VMID0gJy4nICsgU0VDVElPTl9OQVZfVE9PTFRJUDtcbiAgICB2YXIgU0hPV19BQ1RJVkVfVE9PTFRJUCA9ICdmcC1zaG93LWFjdGl2ZSc7IC8vIHNsaWRlXG5cbiAgICB2YXIgU0xJREVfREVGQVVMVF9TRUwgPSAnLnNsaWRlJztcbiAgICB2YXIgU0xJREUgPSAnZnAtc2xpZGUnO1xuICAgIHZhciBTTElERV9TRUwgPSAnLicgKyBTTElERTtcbiAgICB2YXIgU0xJREVfQUNUSVZFX1NFTCA9IFNMSURFX1NFTCArIEFDVElWRV9TRUw7XG4gICAgdmFyIFNMSURFU19XUkFQUEVSID0gJ2ZwLXNsaWRlcyc7XG4gICAgdmFyIFNMSURFU19XUkFQUEVSX1NFTCA9ICcuJyArIFNMSURFU19XUkFQUEVSO1xuICAgIHZhciBTTElERVNfQ09OVEFJTkVSID0gJ2ZwLXNsaWRlc0NvbnRhaW5lcic7XG4gICAgdmFyIFNMSURFU19DT05UQUlORVJfU0VMID0gJy4nICsgU0xJREVTX0NPTlRBSU5FUjtcbiAgICB2YXIgVEFCTEUgPSAnZnAtdGFibGUnO1xuICAgIHZhciBPVkVSRkxPVyA9ICdmcC1vdmVyZmxvdyc7XG4gICAgdmFyIE9WRVJGTE9XX1NFTCA9ICcuJyArIE9WRVJGTE9XO1xuICAgIHZhciBJU19PVkVSRkxPVyA9ICdmcC1pcy1vdmVyZmxvdyc7IC8vIHNsaWRlIG5hdlxuXG4gICAgdmFyIFNMSURFU19OQVYgPSAnZnAtc2xpZGVzTmF2JztcbiAgICB2YXIgU0xJREVTX05BVl9TRUwgPSAnLicgKyBTTElERVNfTkFWO1xuICAgIHZhciBTTElERVNfTkFWX0xJTktfU0VMID0gU0xJREVTX05BVl9TRUwgKyAnIGEnO1xuICAgIHZhciBTTElERVNfU1RZTEVEX0FSUk9XID0gJ2ZwLWFycm93JztcbiAgICB2YXIgU0xJREVTX0FSUk9XID0gJ2ZwLWNvbnRyb2xBcnJvdyc7XG4gICAgdmFyIFNMSURFU19BUlJPV19TRUwgPSAnLicgKyBTTElERVNfQVJST1c7XG4gICAgdmFyIFNMSURFU19QUkVWID0gJ2ZwLXByZXYnO1xuICAgIHZhciBTTElERVNfUFJFVl9TRUwgPSAnLicgKyBTTElERVNfUFJFVjtcbiAgICB2YXIgU0xJREVTX0FSUk9XX1BSRVZfU0VMID0gU0xJREVTX0FSUk9XX1NFTCArIFNMSURFU19QUkVWX1NFTDtcbiAgICB2YXIgU0xJREVTX05FWFQgPSAnZnAtbmV4dCc7XG4gICAgdmFyIFNMSURFU19ORVhUX1NFTCA9ICcuJyArIFNMSURFU19ORVhUO1xuICAgIHZhciBTTElERVNfQVJST1dfTkVYVF9TRUwgPSBTTElERVNfQVJST1dfU0VMICsgU0xJREVTX05FWFRfU0VMO1xuXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy9uYXZpZ2F0aW9uXG4gICAgICBtZW51OiBmYWxzZSxcbiAgICAgIGFuY2hvcnM6IFtdLFxuICAgICAgbG9ja0FuY2hvcnM6IGZhbHNlLFxuICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXG4gICAgICBuYXZpZ2F0aW9uUG9zaXRpb246ICdyaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uVG9vbHRpcHM6IFtdLFxuICAgICAgc2hvd0FjdGl2ZVRvb2x0aXA6IGZhbHNlLFxuICAgICAgc2xpZGVzTmF2aWdhdGlvbjogZmFsc2UsXG4gICAgICBzbGlkZXNOYXZQb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBzY3JvbGxCYXI6IGZhbHNlLFxuICAgICAgaHlicmlkOiBmYWxzZSxcbiAgICAgIGxpY2Vuc2VLZXk6ICcnLFxuICAgICAgY3JlZGl0czoge1xuICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJsYWJlbFwiOiAnTWFkZSB3aXRoIGZ1bGxQYWdlLmpzJyxcbiAgICAgICAgXCJwb3NpdGlvblwiOiAncmlnaHQnXG4gICAgICB9LFxuICAgICAgLy9zY3JvbGxpbmdcbiAgICAgIGNzczM6IHRydWUsXG4gICAgICBzY3JvbGxpbmdTcGVlZDogNzAwLFxuICAgICAgYXV0b1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgIGZpdFRvU2VjdGlvbjogdHJ1ZSxcbiAgICAgIGZpdFRvU2VjdGlvbkRlbGF5OiA2MDAsXG4gICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsXG4gICAgICBlYXNpbmdjc3MzOiAnZWFzZScsXG4gICAgICBsb29wQm90dG9tOiBmYWxzZSxcbiAgICAgIGxvb3BUb3A6IGZhbHNlLFxuICAgICAgbG9vcEhvcml6b250YWw6IHRydWUsXG4gICAgICBjb250aW51b3VzVmVydGljYWw6IGZhbHNlLFxuICAgICAgY29udGludW91c0hvcml6b250YWw6IGZhbHNlLFxuICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5OiBmYWxzZSxcbiAgICAgIGludGVybG9ja2VkU2xpZGVzOiBmYWxzZSxcbiAgICAgIGRyYWdBbmRNb3ZlOiBmYWxzZSxcbiAgICAgIG9mZnNldFNlY3Rpb25zOiBmYWxzZSxcbiAgICAgIHJlc2V0U2xpZGVyczogZmFsc2UsXG4gICAgICBmYWRpbmdFZmZlY3Q6IGZhbHNlLFxuICAgICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6IG51bGwsXG4gICAgICBzY3JvbGxPdmVyZmxvdzogdHJ1ZSxcbiAgICAgIHNjcm9sbE92ZXJmbG93UmVzZXQ6IGZhbHNlLFxuICAgICAgdG91Y2hTZW5zaXRpdml0eTogNSxcbiAgICAgIHRvdWNoV3JhcHBlcjogbnVsbCxcbiAgICAgIGJpZ1NlY3Rpb25zRGVzdGluYXRpb246IG51bGwsXG4gICAgICAvL0FjY2Vzc2liaWxpdHlcbiAgICAgIGtleWJvYXJkU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgYW5pbWF0ZUFuY2hvcjogdHJ1ZSxcbiAgICAgIHJlY29yZEhpc3Rvcnk6IHRydWUsXG4gICAgICBhbGxvd0NvcnJlY3REaXJlY3Rpb246IGZhbHNlLFxuICAgICAgLy9kZXNpZ25cbiAgICAgIHNjcm9sbE92ZXJmbG93TWFjU3R5bGU6IHRydWUsXG4gICAgICBjb250cm9sQXJyb3dzOiB0cnVlLFxuICAgICAgY29udHJvbEFycm93c0hUTUw6IFsnPGRpdiBjbGFzcz1cIicgKyBTTElERVNfU1RZTEVEX0FSUk9XICsgJ1wiPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19TVFlMRURfQVJST1cgKyAnXCI+PC9kaXY+J10sXG4gICAgICBjb250cm9sQXJyb3dDb2xvcjogJyNmZmYnLFxuICAgICAgdmVydGljYWxDZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNlY3Rpb25zQ29sb3I6IFtdLFxuICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICBmaXhlZEVsZW1lbnRzOiBudWxsLFxuICAgICAgcmVzcG9uc2l2ZTogMCxcbiAgICAgIC8vYmFja3dhcmRzIGNvbXBhYml0aWxpdHkgd2l0aCByZXNwb25zaXZlV2lkZHRoXG4gICAgICByZXNwb25zaXZlV2lkdGg6IDAsXG4gICAgICByZXNwb25zaXZlSGVpZ2h0OiAwLFxuICAgICAgcmVzcG9uc2l2ZVNsaWRlczogZmFsc2UsXG4gICAgICBwYXJhbGxheDogZmFsc2UsXG4gICAgICBwYXJhbGxheE9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ3JldmVhbCcsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDYyLFxuICAgICAgICBwcm9wZXJ0eTogJ3RyYW5zbGF0ZSdcbiAgICAgIH0sXG4gICAgICBjYXJkczogZmFsc2UsXG4gICAgICBjYXJkc09wdGlvbnM6IHtcbiAgICAgICAgcGVyc3BlY3RpdmU6IDEwMCxcbiAgICAgICAgZmFkZUNvbnRlbnQ6IHRydWUsXG4gICAgICAgIGZhZGVCYWNrZ3JvdW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy9DdXN0b20gc2VsZWN0b3JzXG4gICAgICBzZWN0aW9uU2VsZWN0b3I6IFNFQ1RJT05fREVGQVVMVF9TRUwsXG4gICAgICBzbGlkZVNlbGVjdG9yOiBTTElERV9ERUZBVUxUX1NFTCxcbiAgICAgIC8vZXZlbnRzXG4gICAgICBhZnRlckxvYWQ6IG51bGwsXG4gICAgICBiZWZvcmVMZWF2ZTogbnVsbCxcbiAgICAgIG9uTGVhdmU6IG51bGwsXG4gICAgICBhZnRlclJlbmRlcjogbnVsbCxcbiAgICAgIGFmdGVyUmVzaXplOiBudWxsLFxuICAgICAgYWZ0ZXJSZUJ1aWxkOiBudWxsLFxuICAgICAgYWZ0ZXJTbGlkZUxvYWQ6IG51bGwsXG4gICAgICBvblNsaWRlTGVhdmU6IG51bGwsXG4gICAgICBhZnRlclJlc3BvbnNpdmU6IG51bGwsXG4gICAgICBvblNjcm9sbE92ZXJmbG93OiBudWxsLFxuICAgICAgbGF6eUxvYWRpbmc6IHRydWUsXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICAgIHNjcm9sbEJleW9uZEZ1bGxwYWdlOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBjb250YWluZXIgPSBudWxsO1xuICAgIHZhciBnX2luaXRpYWxBbmNob3JzSW5Eb20gPSBmYWxzZTtcbiAgICB2YXIgb3JpZ2luYWxzID0gZGVlcEV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMpOyAvL2RlZXAgY29weVxuXG4gICAgdmFyIGdfb3B0aW9ucyA9IG51bGw7XG4gICAgZnVuY3Rpb24gZ2V0SW5pdGlhbEFuY2hvcnNJbkRvbSgpIHtcbiAgICAgIHJldHVybiBnX2luaXRpYWxBbmNob3JzSW5Eb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldENvbnRhaW5lcih2YWx1ZSkge1xuICAgICAgY29udGFpbmVyID0gdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbnRhaW5lcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgICAgIHJldHVybiBnX29wdGlvbnMgfHwgZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgZ19vcHRpb25zID0gZGVlcEV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgb3JpZ2luYWxzID0gT2JqZWN0LmFzc2lnbih7fSwgZ19vcHRpb25zKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0T3JpZ2luYWxzKCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFscztcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0T3B0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICBkZWZhdWx0T3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKlxuICAgICogU2V0cyB0aGUgc3RhdGUgZm9yIGEgdmFyaWFibGUgd2l0aCBtdWx0aXBsZSBzdGF0ZXMgKG9yaWdpbmFsLCBhbmQgdGVtcG9yYWwpXG4gICAgKiBTb21lIHZhcmlhYmxlcyBzdWNoIGFzIGBhdXRvU2Nyb2xsaW5nYCBvciBgcmVjb3JkSGlzdG9yeWAgbWlnaHQgY2hhbmdlIGF1dG9tYXRpY2FsbHkgaXRzIHN0YXRlIHdoZW4gdXNpbmcgYHJlc3BvbnNpdmVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYC5cbiAgICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGJvdGggc3RhdGVzLCB0aGUgb3JpZ2luYWwgYW5kIHRoZSB0ZW1wb3JhbCBvbmUuXG4gICAgKiBJZiB0eXBlIGlzIG5vdCAnaW50ZXJuYWwnLCB0aGVuIHdlIGFzc3VtZSB0aGUgdXNlciBpcyBnbG9iYWxseSBjaGFuZ2luZyB0aGUgdmFyaWFibGUuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNldFZhcmlhYmxlU3RhdGUodmFyaWFibGUsIHZhbHVlLCB0eXBlKSB7XG4gICAgICBnX29wdGlvbnNbdmFyaWFibGVdID0gdmFsdWU7XG5cbiAgICAgIGlmICh0eXBlICE9PSAnaW50ZXJuYWwnKSB7XG4gICAgICAgIG9yaWdpbmFsc1t2YXJpYWJsZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgKiBTZXR0aW5nIG9wdGlvbnMgZnJvbSBET00gZWxlbWVudHMgaWYgdGhleSBhcmUgbm90IHByb3ZpZGVkLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzZXRPcHRpb25zRnJvbURPTSgpIHtcbiAgICAgIC8vbm8gYW5jaG9ycyBvcHRpb24/IENoZWNraW5nIGZvciB0aGVtIGluIHRoZSBET00gYXR0cmlidXRlc1xuICAgICAgaWYgKCFnZXRPcHRpb25zKCkuYW5jaG9ycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGFuY2hvcnNBdHRyaWJ1dGUgPSAnW2RhdGEtYW5jaG9yXSc7XG4gICAgICAgIHZhciBhbmNob3JzID0gJChnZXRPcHRpb25zKCkuc2VjdGlvblNlbGVjdG9yLnNwbGl0KCcsJykuam9pbihhbmNob3JzQXR0cmlidXRlICsgJywnKSArIGFuY2hvcnNBdHRyaWJ1dGUsIGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGFuY2hvcnMubGVuZ3RoICYmIGFuY2hvcnMubGVuZ3RoID09PSAkKGdldE9wdGlvbnMoKS5zZWN0aW9uU2VsZWN0b3IsIGNvbnRhaW5lcikubGVuZ3RoKSB7XG4gICAgICAgICAgZ19pbml0aWFsQW5jaG9yc0luRG9tID0gdHJ1ZTtcbiAgICAgICAgICBhbmNob3JzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGdldE9wdGlvbnMoKS5hbmNob3JzLnB1c2goZ2V0QXR0cihpdGVtLCAnZGF0YS1hbmNob3InKS50b1N0cmluZygpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvL25vIHRvb2x0aXBzIG9wdGlvbj8gQ2hlY2tpbmcgZm9yIHRoZW0gaW4gdGhlIERPTSBhdHRyaWJ1dGVzXG5cblxuICAgICAgaWYgKCFnZXRPcHRpb25zKCkubmF2aWdhdGlvblRvb2x0aXBzLmxlbmd0aCkge1xuICAgICAgICB2YXIgdG9vbHRpcHNBdHRyaWJ1dGUgPSAnW2RhdGEtdG9vbHRpcF0nO1xuICAgICAgICB2YXIgdG9vbHRpcHMgPSAkKGdldE9wdGlvbnMoKS5zZWN0aW9uU2VsZWN0b3Iuc3BsaXQoJywnKS5qb2luKHRvb2x0aXBzQXR0cmlidXRlICsgJywnKSArIHRvb2x0aXBzQXR0cmlidXRlLCBjb250YWluZXIpO1xuXG4gICAgICAgIGlmICh0b29sdGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICB0b29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBnZXRPcHRpb25zKCkubmF2aWdhdGlvblRvb2x0aXBzLnB1c2goZ2V0QXR0cihpdGVtLCAnZGF0YS10b29sdGlwJykudG9TdHJpbmcoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGxhaW5JdGVtID0gZnVuY3Rpb24gcGxhaW5JdGVtKHBhbmVsKSB7XG4gICAgICB0aGlzLmFuY2hvciA9IHBhbmVsLmFuY2hvcjtcbiAgICAgIHRoaXMuaXRlbSA9IHBhbmVsLml0ZW07XG4gICAgICB0aGlzLmluZGV4ID0gcGFuZWwuaW5kZXgoKTtcbiAgICAgIHRoaXMuaXNMYXN0ID0gdGhpcy5pbmRleCA9PT0gcGFuZWwuaXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGFuZWwuc2VsZWN0b3IpLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLmlzRmlyc3QgPSAhdGhpcy5pbmRleDtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBwYW5lbC5pc0FjdGl2ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICogSXRlbS4gU2xpZGUgb3IgU2VjdGlvbiBvYmplY3RzIHNoYXJlIHRoZSBzYW1lIHByb3BlcnRpZXMuXG4gICAgKi9cblxuICAgIHZhciBJdGVtID0gZnVuY3Rpb24gSXRlbShlbCwgc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgbnVsbDtcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgIHRoaXMuYW5jaG9yID0gZ2V0QXR0cihlbCwgJ2RhdGEtYW5jaG9yJykgfHwgZ2V0T3B0aW9ucygpLmFuY2hvcnNbaW5kZXgoZWwsIGdldE9wdGlvbnMoKS5zZWN0aW9uU2VsZWN0b3IpXTtcbiAgICAgIHRoaXMuaXRlbSA9IGVsO1xuICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGUoZWwpO1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGhhc0NsYXNzKGVsLCBBQ1RJVkUpO1xuICAgICAgdGhpcy5oYXNTY3JvbGwgPSBoYXNDbGFzcyhlbCwgT1ZFUkZMT1cpIHx8ICQoT1ZFUkZMT1dfU0VMLCBlbClbMF0gIT0gbnVsbDtcbiAgICAgIHRoaXMuaXNTZWN0aW9uID0gc2VsZWN0b3IgPT09IGdldE9wdGlvbnMoKS5zZWN0aW9uU2VsZWN0b3I7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNsb3Nlc3QoZWwsIFNMSURFU19DT05UQUlORVJfU0VMKSB8fCBjbG9zZXN0KGVsLCBXUkFQUEVSX1NFTCk7XG5cbiAgICAgIHRoaXMuaW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpYmxpbmdzKCkuaW5kZXhPZih0aGlzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIEl0ZW0ucHJvdG90eXBlLnNpYmxpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuaXNTZWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5zZWN0aW9ucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUuc2VjdGlvbnNJbmNsdWRpbmdIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuc2xpZGVzIDogMDtcbiAgICB9O1xuXG4gICAgSXRlbS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzaWJsaW5ncyA9IHRoaXMuc2libGluZ3MoKTtcbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmlzU2VjdGlvbiA/IHNpYmxpbmdzLmluZGV4T2YodGhpcykgOiB0aGlzLnBhcmVudC5zbGlkZXMuaW5kZXhPZih0aGlzKTtcbiAgICAgIHZhciBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuXG4gICAgICBpZiAocHJldkluZGV4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzW3ByZXZJbmRleF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBJdGVtLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNpYmxpbmdzID0gdGhpcy5zaWJsaW5ncygpO1xuICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuaXNTZWN0aW9uID8gc2libGluZ3MuaW5kZXhPZih0aGlzKSA6IHRoaXMucGFyZW50LnNsaWRlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgdmFyIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG5cbiAgICAgIGlmIChuZXh0SW5kZXggPCBzaWJsaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzW25leHRJbmRleF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBJdGVtLnByb3RvdHlwZVtcInByZXZQYW5lbFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXYoKSB8fCAodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5wcmV2KCkgOiBudWxsKTtcbiAgICB9O1xuXG4gICAgSXRlbS5wcm90b3R5cGVbXCJuZXh0UGFuZWxcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXh0KCkgfHwgKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubmV4dCgpIDogbnVsbCk7XG4gICAgfTtcblxuICAgIEl0ZW0ucHJvdG90eXBlLmdldFNpYmxpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuaXNTZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5zZWN0aW9ucztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlLnBhbmVscztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0Tm9kZXMocGFuZWxzKSB7XG4gICAgICByZXR1cm4gcGFuZWxzLm1hcChmdW5jdGlvbiAocGFuZWwpIHtcbiAgICAgICAgcmV0dXJuIHBhbmVsLml0ZW07XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UGFuZWxCeUVsZW1lbnQocGFuZWxzLCBlbCkge1xuICAgICAgcmV0dXJuIHBhbmVscy5maW5kKGZ1bmN0aW9uIChwYW5lbCkge1xuICAgICAgICByZXR1cm4gcGFuZWwuaXRlbSA9PT0gZWw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIFNlY3Rpb24gPSBmdW5jdGlvbiBTZWN0aW9uKGVsKSB7XG4gICAgICBwbGFpbkl0ZW0uY2FsbCh0aGlzLCBlbCk7XG4gICAgfTtcbiAgICB2YXIgU2xpZGUgPSBmdW5jdGlvbiBTbGlkZShlbCkge1xuICAgICAgcGxhaW5JdGVtLmNhbGwodGhpcywgZWwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIGFjdGl2ZSBzbGlkZSAob3Igc2VjdGlvbikgZm9yIHRoZSBnaXZlbiBzZWN0aW9uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGdldFNsaWRlT3JTZWN0aW9uKGRlc3RpbnkpIHtcbiAgICAgIHZhciBzbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgZGVzdGlueSk7XG5cbiAgICAgIGlmIChzbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgZGVzdGlueSA9IHNsaWRlWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdGlueTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2xpZGVPclNlY3Rpb25QYW5lbChwYW5lbCkge1xuICAgICAgaWYgKCFwYW5lbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhbmVsLmFjdGl2ZVNsaWRlID8gcGFuZWwuYWN0aXZlU2xpZGUgOiBwYW5lbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNGdWxsUGFnZUFib3ZlKCkge1xuICAgICAgcmV0dXJuIGdldENvbnRhaW5lcigpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+PSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIHNjcm9sbGluZyBzZXR0aW5ncyBkZXBlbmRpbmcgb24gdGhlIHBsdWdpbiBhdXRvU2Nyb2xsaW5nIG9wdGlvblxuICAgICovXG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxTZXR0aW5ncyh0b3ApIHtcbiAgICAgIHZhciBvcHRpb25zID0gZ2V0T3B0aW9ucygpO1xuICAgICAgdmFyIHBvc2l0aW9uO1xuICAgICAgdmFyIGVsZW1lbnQ7IC8vdG9wIHByb3BlcnR5IGFuaW1hdGlvblxuXG4gICAgICBpZiAob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcikge1xuICAgICAgICBwb3NpdGlvbiA9IC10b3A7XG4gICAgICAgIGVsZW1lbnQgPSAkKFdSQVBQRVJfU0VMKVswXTtcbiAgICAgIH0gLy93aW5kb3cgcmVhbCBzY3JvbGxpbmdcbiAgICAgIGVsc2Uge1xuICAgICAgICBwb3NpdGlvbiA9IHRvcDtcbiAgICAgICAgZWxlbWVudCA9IHdpbmRvdztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogcG9zaXRpb24sXG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICogU2Nyb2xscyB0aGUgcGFnZSAvIHNsaWRlciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHBpeGVscy5cbiAgICAqIEl0IHdpbGwgZG8gaXQgb25lIG9yIGFub3RoZXIgd2F5IGRlcGVuZGlvbmcgb24gdGhlIGxpYnJhcnkncyBjb25maWcuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbGluZyhlbGVtZW50LCB2YWwpIHtcbiAgICAgIGlmICghZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgfHwgZ2V0T3B0aW9ucygpLnNjcm9sbEJhciB8fCBlbGVtZW50LnNlbGYgIT0gd2luZG93ICYmIGhhc0NsYXNzKGVsZW1lbnQsIFNMSURFU19XUkFQUEVSKSkge1xuICAgICAgICAvL3Njcm9sbGluZyBob3Jpem9udGFsbHkgdGhyb3VnaCB0aGUgc2xpZGVzP1xuICAgICAgICBpZiAoZWxlbWVudC5zZWxmICE9IHdpbmRvdyAmJiBoYXNDbGFzcyhlbGVtZW50LCBTTElERVNfV1JBUFBFUikpIHtcbiAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB2YWw7XG4gICAgICAgIH0gLy92ZXJ0aWNhbCBzY3JvbGxcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5zY3JvbGxUbygwLCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHZhbCArICdweCc7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogQWRkcyB0cmFuc2l0aW9uIGFuaW1hdGlvbnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gJyArIGdldE9wdGlvbnMoKS5zY3JvbGxpbmdTcGVlZCArICdtcyAnICsgZ2V0T3B0aW9ucygpLmVhc2luZ2NzczM7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBOT19UUkFOU0lUSU9OKTtcbiAgICAgIHJldHVybiBjc3MoZWxlbWVudCwge1xuICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogdHJhbnNpdGlvbixcbiAgICAgICAgJ3RyYW5zaXRpb24nOiB0cmFuc2l0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBSZXR1bnMgYHVwYCBvciBgZG93bmAgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGxpbmcgbW92ZW1lbnQgdG8gcmVhY2ggaXRzIGRlc3RpbmF0aW9uXG4gICAgKiBmcm9tIHRoZSBjdXJyZW50IHNlY3Rpb24uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGdldFltb3ZlbWVudChhY3RpdmVTZWN0aW9uLCBkZXN0aW55KSB7XG4gICAgICB2YXIgZnJvbUluZGV4ID0gYWN0aXZlU2VjdGlvbi5pbmRleCgpO1xuICAgICAgdmFyIHRvSW5kZXggPSBpbmRleChkZXN0aW55LCBTRUNUSU9OX1NFTCk7XG5cbiAgICAgIGlmIChmcm9tSW5kZXggPT0gdG9JbmRleCkge1xuICAgICAgICByZXR1cm4gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnJvbUluZGV4ID4gdG9JbmRleCkge1xuICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICdkb3duJztcbiAgICB9XG4gICAgLyoqXG4gICAgKiBSZW1vdmUgdHJhbnNpdGlvbiBhbmltYXRpb25zIGZvciB0aGUgZ2l2ZW4gZWxlbWVudFxuICAgICovXG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbmltYXRpb24oZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGFkZENsYXNzKGVsZW1lbnQsIE5PX1RSQU5TSVRJT04pO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGNyb3NzLWJyb3dzZXIgdHJhbnNmb3JtIHN0cmluZy5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNsYXRlM2QsXG4gICAgICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkLFxuICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkLFxuICAgICAgICAndHJhbnNmb3JtJzogdHJhbnNsYXRlM2RcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHNpbGVudFNjcm9sbElkO1xuICAgIC8qKlxuICAgICogQWRkcyBhIGNzczMgdHJhbnNmb3JtIHByb3BlcnR5IHRvIHRoZSBjb250YWluZXIgY2xhc3Mgd2l0aCBvciB3aXRob3V0IGFuaW1hdGlvbiBkZXBlbmRpbmcgb24gdGhlIGFuaW1hdGVkIHBhcmFtLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIGFuaW1hdGVkKSB7XG4gICAgICBpZiAoYW5pbWF0ZWQpIHtcbiAgICAgICAgYWRkQW5pbWF0aW9uKGdldENvbnRhaW5lcigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUFuaW1hdGlvbihnZXRDb250YWluZXIoKSk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChzaWxlbnRTY3JvbGxJZCk7XG4gICAgICBjc3MoZ2V0Q29udGFpbmVyKCksIGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2QpKTtcbiAgICAgIEZQLnRlc3QudHJhbnNsYXRlM2QgPSB0cmFuc2xhdGUzZDsgLy9zeW5jcm9ub3VzbHkgcmVtb3ZpbmcgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGJlZW4gYXBwbGllZC5cblxuICAgICAgc2lsZW50U2Nyb2xsSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZ2V0Q29udGFpbmVyKCksIE5PX1RSQU5TSVRJT04pO1xuICAgICAgfSwgMTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogU2Nyb2xscyBzaWxlbnRseSAod2l0aCBubyBhbmltYXRpb24pIHRoZSBwYWdlIHRvIHRoZSBnaXZlbiBZIHBvc2l0aW9uLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzaWxlbnRTY3JvbGwodG9wKSB7XG4gICAgICAvLyBUaGUgZmlyc3Qgc2VjdGlvbiBjYW4gaGF2ZSBhIG5lZ2F0aXZlIHZhbHVlIGluIGlPUyAxMC4gTm90IHF1aXRlIHN1cmUgd2h5OiAtMC4wMTQyODIyMjY1NjI1XG4gICAgICAvLyB0aGF0J3Mgd2h5IHdlIHJvdW5kIGl0IHRvIDAuXG4gICAgICB2YXIgcm91bmRlZFRvcCA9IE1hdGgucm91bmQodG9wKTtcblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5jc3MzICYmIGdldE9wdGlvbnMoKS5hdXRvU2Nyb2xsaW5nICYmICFnZXRPcHRpb25zKCkuc2Nyb2xsQmFyKSB7XG4gICAgICAgIHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgwcHgsIC0nICsgcm91bmRlZFRvcCArICdweCwgMHB4KSc7XG4gICAgICAgIHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZyAmJiAhZ2V0T3B0aW9ucygpLnNjcm9sbEJhcikge1xuICAgICAgICBjc3MoZ2V0Q29udGFpbmVyKCksIHtcbiAgICAgICAgICAndG9wJzogLXJvdW5kZWRUb3AgKyAncHgnXG4gICAgICAgIH0pO1xuICAgICAgICBGUC50ZXN0LnRvcCA9IC1yb3VuZGVkVG9wICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY3JvbGxTZXR0aW5ncyA9IGdldFNjcm9sbFNldHRpbmdzKHJvdW5kZWRUb3ApO1xuICAgICAgICBzZXRTY3JvbGxpbmcoc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRlAuc2V0U2Nyb2xsaW5nU3BlZWQgPSBzZXRTY3JvbGxpbmdTcGVlZDtcbiAgICAvKipcbiAgICAqIERlZmluZXMgdGhlIHNjcm9sbGluZyBzcGVlZFxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxpbmdTcGVlZCh2YWx1ZSwgdHlwZSkge1xuICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnc2Nyb2xsaW5nU3BlZWQnLCB2YWx1ZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgdmFyICRib2R5ID0gbnVsbDtcbiAgICB2YXIgJGh0bWwgPSBudWxsO1xuICAgIHZhciAkaHRtbEJvZHkgPSBudWxsOyAvLyBjYWNoaW5nIGNvbW1vbiBlbGVtZW50c1xuXG4gICAgZnVuY3Rpb24gc2V0Q2FjaGUoKSB7XG4gICAgICAkYm9keSA9ICQoJ2JvZHknKVswXTtcbiAgICAgICRodG1sID0gJCgnaHRtbCcpWzBdO1xuICAgICAgJGh0bWxCb2R5ID0gJCgnaHRtbCwgYm9keScpO1xuICAgIH1cblxuICAgIC8vQHRzLWNoZWNrXG5cbiAgICB2YXIgX2dfYW5pbWF0ZVNjcm9sbDtcbiAgICAvKipcbiAgICAqIFNpbXVsYXRlcyB0aGUgYW5pbWF0ZWQgc2Nyb2xsVG9wIG9mIGpRdWVyeS4gVXNlZCB3aGVuIGNzczM6ZmFsc2Ugb3Igc2Nyb2xsQmFyOnRydWUgb3IgYXV0b1Njcm9sbGluZzpmYWxzZVxuICAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYxMzY3ODkvMTA4MTM5NlxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBzdGFydCA9IGdldFNjcm9sbGVkUG9zaXRpb24oZWxlbWVudCk7XG4gICAgICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgICAgIHZhciBpc0NhbGxiYWNrRmlyZWQgPSBmYWxzZTtcbiAgICAgIHZhciBzdGFydFRpbWU7XG4gICAgICB2YXIgd2FzQW5pbWF0aW9uQWN0aXZlID0gc3RhdGUuYWN0aXZlQW5pbWF0aW9uO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVBbmltYXRpb246IHRydWVcbiAgICAgIH0pOyAvLyBDYW5jZWxsaW5nIGFueSBwb3NzaWJsZSBwcmV2aW91cyBhbmltYXRpb25zIChpbzogY2xpY2tpbmcgb24gbmF2IGRvdHMgdmVyeSBmYXN0KVxuXG4gICAgICBpZiAoX2dfYW5pbWF0ZVNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoX2dfYW5pbWF0ZVNjcm9sbCk7XG4gICAgICB9XG5cbiAgICAgIF9nX2FuaW1hdGVTY3JvbGwgPSBmdW5jdGlvbiBnX2FuaW1hdGVTY3JvbGwodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghc3RhcnRUaW1lKSB7XG4gICAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcih0aW1lc3RhbXAgLSBzdGFydFRpbWUpO1xuXG4gICAgICAgIGlmIChzdGF0ZS5hY3RpdmVBbmltYXRpb24pIHtcbiAgICAgICAgICAvL2luIG9yZGVyIHRvIHN0b3BlIGl0IGZyb20gb3RoZXIgZnVuY3Rpb24gd2hlbmV2ZXIgd2Ugd2FudFxuICAgICAgICAgIHZhciB2YWwgPSB0bztcblxuICAgICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsID0gd2luLmZwX2Vhc2luZ3NbZ2V0T3B0aW9ucygpLmVhc2luZ10oY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPD0gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHNldFNjcm9sbGluZyhlbGVtZW50LCB2YWwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9nX2FuaW1hdGVTY3JvbGwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyAmJiAhaXNDYWxsYmFja0ZpcmVkKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBhY3RpdmVBbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlzQ2FsbGJhY2tGaXJlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFpc0NhbGxiYWNrRmlyZWQgJiYgIXdhc0FuaW1hdGlvbkFjdGl2ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlQW5pbWF0aW9uOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlzQ2FsbGJhY2tGaXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2dfYW5pbWF0ZVNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogR2V0dGluZyB0aGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHdoZW4gdXNpbmcgalF1ZXJ5IGFuaW1hdGlvbnNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsZWRQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgcG9zaXRpb247IC8vaXMgbm90IHRoZSB3aW5kb3cgZWxlbWVudCBhbmQgaXMgYSBzbGlkZT9cblxuICAgICAgaWYgKGVsZW1lbnQuc2VsZiAhPSB3aW4gJiYgaGFzQ2xhc3MoZWxlbWVudCwgU0xJREVTX1dSQVBQRVIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgfSBlbHNlIGlmICghZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgfHwgZ2V0T3B0aW9ucygpLnNjcm9sbEJhcikge1xuICAgICAgICBwb3NpdGlvbiA9IGdldFNjcm9sbFRvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24gPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIH0gLy9nZXRzIHRoZSB0b3AgcHJvcGVydHkgb2YgdGhlIHdyYXBwZXJcblxuXG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBNYWtlcyBzdXJlIHRvIG9ubHkgY3JlYXRlIGEgUGFuZWwgb2JqZWN0IGlmIHRoZSBlbGVtZW50IGV4aXN0XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIG51bGxPclNlY3Rpb24oZWwpIHtcbiAgICAgIGlmIChlbCAmJiAhZWwuaXRlbSkge1xuICAgICAgICByZXR1cm4gbmV3IFNlY3Rpb24obmV3IFNlY3Rpb25QYW5lbChlbCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWwgPyBuZXcgU2VjdGlvbihlbCkgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG51bGxPclNsaWRlKGVsKSB7XG4gICAgICByZXR1cm4gZWwgPyBuZXcgU2xpZGUoZWwpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIERpc3BhdGNoIGV2ZW50cyAmIGNhbGxiYWNrc1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBmaXJlQ2FsbGJhY2soZXZlbnROYW1lLCB2KSB7XG4gICAgICB2YXIgZXZlbnREYXRhID0gZ2V0RXZlbnREYXRhKGV2ZW50TmFtZSwgdik7XG4gICAgICB0cmlnZ2VyKGdldENvbnRhaW5lcigpLCBldmVudE5hbWUsIGV2ZW50RGF0YSk7XG5cbiAgICAgIGlmIChnZXRPcHRpb25zKClbZXZlbnROYW1lXS5hcHBseShldmVudERhdGFbT2JqZWN0LmtleXMoZXZlbnREYXRhKVswXV0sIHRvQXJyYXkoZXZlbnREYXRhKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgZXZlbnQncyBkYXRhIGZvciB0aGUgZ2l2ZW4gZXZlbnQgb24gdGhlIHJpZ2h0IGZvcm1hdC5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0RXZlbnREYXRhKGV2ZW50TmFtZSwgdikge1xuICAgICAgLy91c2luZyBmdW5jdGlvbnMgdG8gcnVuIG9ubHkgdGhlIG5lY2Vzc2FyeSBiaXRzIHdpdGhpbiB0aGUgb2JqZWN0XG4gICAgICB2YXIgcGFyYW1zUGVyRXZlbnQgPSB7XG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiBhZnRlclJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VjdGlvbjogbnVsbE9yU2VjdGlvbihnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24pLFxuICAgICAgICAgICAgc2xpZGU6IG51bGxPclNsaWRlKGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5hY3RpdmVTbGlkZSlcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvbkxlYXZlOiBmdW5jdGlvbiBvbkxlYXZlKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmlnaW46IG51bGxPclNlY3Rpb24odi5pdGVtcy5vcmlnaW4pLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IG51bGxPclNlY3Rpb24odi5pdGVtcy5kZXN0aW5hdGlvbiksXG4gICAgICAgICAgICBkaXJlY3Rpb246IHYuZGlyZWN0aW9uLFxuICAgICAgICAgICAgdHJpZ2dlcjogZ2V0U3RhdGUoKS5zY3JvbGxUcmlnZ2VyXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbiBhZnRlckxvYWQoKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtc1BlckV2ZW50Lm9uTGVhdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJTbGlkZUxvYWQ6IGZ1bmN0aW9uIGFmdGVyU2xpZGVMb2FkKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWN0aW9uOiBudWxsT3JTZWN0aW9uKHYuaXRlbXMuc2VjdGlvbiksXG4gICAgICAgICAgICBvcmlnaW46IG51bGxPclNlY3Rpb24odi5pdGVtcy5vcmlnaW4pLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IG51bGxPclNlY3Rpb24odi5pdGVtcy5kZXN0aW5hdGlvbiksXG4gICAgICAgICAgICBkaXJlY3Rpb246IHYuZGlyZWN0aW9uLFxuICAgICAgICAgICAgdHJpZ2dlcjogZ2V0U3RhdGUoKS5zY3JvbGxUcmlnZ2VyXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TbGlkZUxlYXZlOiBmdW5jdGlvbiBvblNsaWRlTGVhdmUoKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtc1BlckV2ZW50LmFmdGVyU2xpZGVMb2FkKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUxlYXZlOiBmdW5jdGlvbiBiZWZvcmVMZWF2ZSgpIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1zUGVyRXZlbnQub25MZWF2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvblNjcm9sbE92ZXJmbG93OiBmdW5jdGlvbiBvblNjcm9sbE92ZXJmbG93KCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWN0aW9uOiBudWxsT3JTZWN0aW9uKGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbiksXG4gICAgICAgICAgICBzbGlkZTogbnVsbE9yU2xpZGUoZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLmFjdGl2ZVNsaWRlKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2LnBvc2l0aW9uLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB2LmRpcmVjdGlvblxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gcGFyYW1zUGVyRXZlbnRbZXZlbnROYW1lXSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUGxheXMgdmlkZW8gYW5kIGF1ZGlvIGVsZW1lbnRzLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBwbGF5TWVkaWEoZGVzdGlueSkge1xuICAgICAgdmFyIHBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7IC8vcGxheWluZyBIVE1MNSBtZWRpYSBlbGVtZW50c1xuXG4gICAgICAkKCd2aWRlbywgYXVkaW8nLCBwYW5lbCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXknKSAmJiB0eXBlb2YgZWxlbWVudC5wbGF5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZWxlbWVudC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvL3lvdXR1YmUgdmlkZW9zXG5cbiAgICAgICQoJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJywgcGFuZWwpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykpIHtcbiAgICAgICAgICBwbGF5WW91dHViZShlbGVtZW50KTtcbiAgICAgICAgfSAvL2luIGNhc2UgdGhlIFVSTCB3YXMgbm90IGxvYWRlZCB5ZXQuIE9uIHBhZ2UgbG9hZCB3ZSBuZWVkIHRpbWUgZm9yIHRoZSBuZXcgVVJMICh3aXRoIHRoZSBBUEkgc3RyaW5nKSB0byBsb2FkLlxuXG5cbiAgICAgICAgZWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykpIHtcbiAgICAgICAgICAgIHBsYXlZb3V0dWJlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFBsYXlzIGEgeW91dHViZSB2aWRlb1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBwbGF5WW91dHViZShlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwbGF5VmlkZW9cIixcImFyZ3NcIjpcIlwifScsICcqJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICogU3RvcHMgdmlkZW8gYW5kIGF1ZGlvIGVsZW1lbnRzLlxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHN0b3BNZWRpYShkZXN0aW55KSB7XG4gICAgICB2YXIgcGFuZWwgPSBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KTsgLy9zdG9wcGluZyBIVE1MNSBtZWRpYSBlbGVtZW50c1xuXG4gICAgICAkKCd2aWRlbywgYXVkaW8nLCBwYW5lbCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWtlZXBwbGF5aW5nJykgJiYgdHlwZW9mIGVsZW1lbnQucGF1c2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBlbGVtZW50LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvL3lvdXR1YmUgdmlkZW9zXG5cbiAgICAgICQoJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJywgcGFuZWwpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKC95b3V0dWJlXFwuY29tXFwvZW1iZWRcXC8vLnRlc3QoZ2V0QXR0cihlbGVtZW50LCAnc3JjJykpICYmICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rZWVwcGxheWluZycpKSB7XG4gICAgICAgICAgZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qXG4gICAgKiBFbmFibGVzIHRoZSBZb3V0dWJlIHZpZGVvcyBBUEkgc28gd2UgY2FuIGNvbnRyb2wgdGhlaXIgZmxvdyBpZiBuZWNlc3NhcnkuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGVuYWJsZVlvdXR1YmVBUEkoKSB7XG4gICAgICAkKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScsIGdldENvbnRhaW5lcigpKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGFkZFVSTFBhcmFtKGl0ZW0sICdlbmFibGVqc2FwaT0xJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBBZGRzIGEgbmV3IHBhcmFtZXRlciBhbmQgaXRzIHZhbHVlIHRvIHRoZSBgc3JjYCBvZiBhIGdpdmVuIGVsZW1lbnRcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gYWRkVVJMUGFyYW0oZWxlbWVudCwgbmV3UGFyYW0pIHtcbiAgICAgIHZhciBvcmlnaW5hbFNyYyA9IGdldEF0dHIoZWxlbWVudCwgJ3NyYycpO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9yaWdpbmFsU3JjICsgZ2V0VXJsUGFyYW1TaWduKG9yaWdpbmFsU3JjKSArIG5ld1BhcmFtKTtcbiAgICB9XG4gICAgLypcbiAgICAqIFJldHVybnMgdGhlIHByZWZpeCBzaWduIHRvIHVzZSBmb3IgYSBuZXcgcGFyYW1ldGVyIGluIGFuIGV4aXN0ZW4gVVJMLlxuICAgICpcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gID8gfCAmXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZ2V0VXJsUGFyYW1TaWduKHVybCkge1xuICAgICAgcmV0dXJuICEvXFw/Ly50ZXN0KHVybCkgPyAnPycgOiAnJic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBMYXp5IGxvYWRzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGxhenlMb2FkKGRlc3RpbnkpIHtcbiAgICAgIGlmICghZ2V0T3B0aW9ucygpLmxhenlMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7XG4gICAgICAkKCdpbWdbZGF0YS1zcmNdLCBpbWdbZGF0YS1zcmNzZXRdLCBzb3VyY2VbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNzZXRdLCB2aWRlb1tkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXSwgaWZyYW1lW2RhdGEtc3JjXScsIHBhbmVsKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIFsnc3JjJywgJ3NyY3NldCddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICB2YXIgYXR0cmlidXRlID0gZ2V0QXR0cihlbGVtZW50LCAnZGF0YS0nICsgdHlwZSk7XG5cbiAgICAgICAgICBpZiAoYXR0cmlidXRlICE9IG51bGwgJiYgYXR0cmlidXRlKSB7XG4gICAgICAgICAgICBzZXRTcmMoZWxlbWVudCwgdHlwZSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKGVsZW1lbnQsICdzb3VyY2UnKSkge1xuICAgICAgICAgIHZhciBlbGVtZW50VG9QbGF5ID0gY2xvc2VzdChlbGVtZW50LCAndmlkZW8sIGF1ZGlvJyk7XG5cbiAgICAgICAgICBpZiAoZWxlbWVudFRvUGxheSkge1xuICAgICAgICAgICAgZWxlbWVudFRvUGxheS5sb2FkKCk7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUb1BsYXkub25sb2FkZWRkYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogU2V0cyBhIGNsYXNzIGZvciB0aGUgYm9keSBvZiB0aGUgcGFnZSBkZXBlbmRpbmcgb24gdGhlIGFjdGl2ZSBzZWN0aW9uIC8gc2xpZGVcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2V0Qm9keUNsYXNzKCkge1xuICAgICAgdmFyIHNlY3Rpb24gPSBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaXRlbTtcbiAgICAgIHZhciBzbGlkZSA9IGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5hY3RpdmVTbGlkZTtcbiAgICAgIHZhciBzZWN0aW9uQW5jaG9yID0gZ2V0QW5jaG9yKHNlY3Rpb24pO1xuICAgICAgdmFyIHRleHQgPSBTdHJpbmcoc2VjdGlvbkFuY2hvcik7XG5cbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBnZXRBbmNob3Ioc2xpZGUuaXRlbSk7XG4gICAgICAgIHRleHQgPSB0ZXh0ICsgJy0nICsgc2xpZGVBbmNob3I7XG4gICAgICB9IC8vY2hhbmdpbmcgc2xhc2ggZm9yIGRhc2ggdG8gbWFrZSBpdCBhIHZhbGlkIENTUyBzdHlsZVxuXG5cbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoJy8nLCAnLScpLnJlcGxhY2UoJyMnLCAnJyk7IC8vcmVtb3ZpbmcgcHJldmlvdXMgYW5jaG9yIGNsYXNzZXNcblxuICAgICAgdmFyIGNsYXNzUmUgPSBuZXcgUmVnRXhwKCdcXFxcYlxcXFxzPycgKyBWSUVXSU5HX1BSRUZJWCArICctW15cXFxcc10rXFxcXGInLCBcImdcIik7XG4gICAgICAkYm9keS5jbGFzc05hbWUgPSAkYm9keS5jbGFzc05hbWUucmVwbGFjZShjbGFzc1JlLCAnJyk7IC8vYWRkaW5nIHRoZSBjdXJyZW50IGFuY2hvclxuXG4gICAgICBhZGRDbGFzcygkYm9keSwgVklFV0lOR19QUkVGSVggKyAnLScgKyB0ZXh0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBhbmNob3IgZm9yIHRoZSBnaXZlbiBzbGlkZSAvIHNlY3Rpb24uIEl0cyBpbmRleCB3aWxsIGJlIHVzZWQgaWYgdGhlcmUncyBub25lLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBnZXRBbmNob3IoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYW5jaG9yID0gZ2V0QXR0cihlbGVtZW50LCAnZGF0YS1hbmNob3InKTtcbiAgICAgIHZhciBlbGVtZW50SW5kZXggPSBpbmRleChlbGVtZW50KTsgLy9TbGlkZSB3aXRob3V0IGFuY2hvciBsaW5rPyBXZSB0YWtlIHRoZSBpbmRleCBpbnN0ZWFkLlxuXG4gICAgICBpZiAoYW5jaG9yID09IG51bGwpIHtcbiAgICAgICAgYW5jaG9yID0gZWxlbWVudEluZGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYW5jaG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogU2V0cyB0aGUgc3RhdGUgb2YgdGhlIHdlYnNpdGUgZGVwZW5kaW5nIG9uIHRoZSBhY3RpdmUgc2VjdGlvbi9zbGlkZS5cbiAgICAqIEl0IGNoYW5nZXMgdGhlIFVSTCBoYXNoIHdoZW4gbmVlZGVkIGFuZCB1cGRhdGVzIHRoZSBib2R5IGNsYXNzLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzZXRQYWdlU3RhdHVzKHNsaWRlSW5kZXgsIHNsaWRlQW5jaG9yLCBhbmNob3JMaW5rKSB7XG4gICAgICB2YXIgc2VjdGlvbkhhc2ggPSAnJztcblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5hbmNob3JzLmxlbmd0aCAmJiAhZ2V0T3B0aW9ucygpLmxvY2tBbmNob3JzKSB7XG4gICAgICAgIC8vaXNuJ3QgaXQgdGhlIGZpcnN0IHNsaWRlP1xuICAgICAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgICAgIGlmIChhbmNob3JMaW5rICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNlY3Rpb25IYXNoID0gYW5jaG9yTGluaztcbiAgICAgICAgICB9IC8vc2xpZGUgd2l0aG91dCBhbmNob3IgbGluaz8gV2UgdGFrZSB0aGUgaW5kZXggaW5zdGVhZC5cblxuXG4gICAgICAgICAgaWYgKHNsaWRlQW5jaG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHNsaWRlQW5jaG9yID0gc2xpZGVJbmRleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBsYXN0U2Nyb2xsZWRTbGlkZTogc2xpZGVBbmNob3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRVcmxIYXNoKHNlY3Rpb25IYXNoICsgJy8nICsgc2xpZGVBbmNob3IpOyAvL2ZpcnN0IHNsaWRlIHdvbid0IGhhdmUgc2xpZGUgYW5jaG9yLCBqdXN0IHRoZSBzZWN0aW9uIG9uZVxuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGxhc3RTY3JvbGxlZFNsaWRlOiBzbGlkZUFuY2hvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XG4gICAgICAgIH0gLy9zZWN0aW9uIHdpdGhvdXQgc2xpZGVzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0Qm9keUNsYXNzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogU2V0cyB0aGUgVVJMIGhhc2guXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNldFVybEhhc2godXJsKSB7XG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLnJlY29yZEhpc3RvcnkpIHtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vTW9iaWxlIENocm9tZSBkb2Vzbid0IHdvcmsgdGhlIG5vcm1hbCB3YXksIHNvLi4uIGxldHMgdXNlIEhUTUw1IGZvciBwaG9uZXMgOilcbiAgICAgICAgaWYgKGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaCkge1xuICAgICAgICAgIHdpbi5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJyMnICsgdXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYmFzZVVybCA9IHdpbi5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XG4gICAgICAgICAgd2luLmxvY2F0aW9uLnJlcGxhY2UoYmFzZVVybCArICcjJyArIHVybCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIG5hbWUgZm9yIHNjcmVlbiByZWFkZXJzIGZvciBhIHNlY3Rpb24vc2xpZGUgbmF2aWdhdGlvbiBidWxsZXQuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGdldEJ1bGxldExpbmtOYW1lKGksIGRlZmF1bHROYW1lLCBpdGVtKSB7XG4gICAgICB2YXIgYW5jaG9yID0gZGVmYXVsdE5hbWUgPT09ICdTZWN0aW9uJyA/IGdldE9wdGlvbnMoKS5hbmNob3JzW2ldIDogZ2V0QXR0cihpdGVtLCAnZGF0YS1hbmNob3InKTtcbiAgICAgIHJldHVybiBlbmNvZGVVUkkoZ2V0T3B0aW9ucygpLm5hdmlnYXRpb25Ub29sdGlwc1tpXSB8fCBhbmNob3IgfHwgZGVmYXVsdE5hbWUgKyAnICcgKyAoaSArIDEpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGlkZUJ1bGxldEhhbmRsZXIoZSkge1xuICAgICAgLy8gbm90IGFsbCBldmVudHMgYXJlIGNhbmNlbGxhYmxlIFxuICAgICAgLy8gaHR0cHM6Ly93d3cudXJpcG9ydHMuY29tL2Jsb2cvZWFzeS1maXgtZm9yLWludGVydmVudGlvbi1pZ25vcmVkLWF0dGVtcHQtdG8tY2FuY2VsLWEtdG91Y2htb3ZlLWV2ZW50LXdpdGgtY2FuY2VsYWJsZS1mYWxzZS9cbiAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjogJ2hvcml6b250YWxOYXYnXG4gICAgICB9KTtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cbiAgICAgIHZhciBzZWN0aW9uRWxlbSA9IGNsb3Nlc3QodGhpcywgU0VDVElPTl9TRUwpO1xuICAgICAgdmFyIHNsaWRlcyA9ICQoU0xJREVTX1dSQVBQRVJfU0VMLCBjbG9zZXN0KHRoaXMsIFNFQ1RJT05fU0VMKSlbMF07XG4gICAgICB2YXIgc2VjdGlvbiA9IGdldFBhbmVsQnlFbGVtZW50KGdldFN0YXRlKCkuc2VjdGlvbnMsIHNlY3Rpb25FbGVtKTtcbiAgICAgIHZhciBkZXN0aW55ID0gc2VjdGlvbi5zbGlkZXNbaW5kZXgoY2xvc2VzdCh0aGlzLCAnbGknKSldO1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLmxhbmRzY2FwZVNjcm9sbCwge1xuICAgICAgICBzbGlkZXM6IHNsaWRlcyxcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbnkuaXRlbVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICogU2V0cyB0aGUgc3RhdGUgZm9yIHRoZSBob3Jpem9udGFsIGJ1bGxldCBuYXZpZ2F0aW9ucy5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gYWN0aXZlU2xpZGVzTmF2aWdhdGlvbihzbGlkZXNOYXYsIHNsaWRlSW5kZXgpIHtcbiAgICAgIGlmIChnZXRPcHRpb25zKCkuc2xpZGVzTmF2aWdhdGlvbiAmJiBzbGlkZXNOYXYgIT0gbnVsbCkge1xuICAgICAgICByZW1vdmVDbGFzcygkKEFDVElWRV9TRUwsIHNsaWRlc05hdiksIEFDVElWRSk7XG4gICAgICAgIGFkZENsYXNzKCQoJ2EnLCAkKCdsaScsIHNsaWRlc05hdilbc2xpZGVJbmRleF0pLCBBQ1RJVkUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBsYW5kc2NhcGUgbmF2aWdhdGlvbiBiYXIgd2l0aCBkb3RzIGZvciBob3Jpem9udGFsIHNsaWRlcnMuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGFkZFNsaWRlc05hdmlnYXRpb24oc2VjdGlvbikge1xuICAgICAgdmFyIHNlY3Rpb25FbGVtID0gc2VjdGlvbi5pdGVtO1xuICAgICAgdmFyIG51bVNsaWRlcyA9IHNlY3Rpb24uc2xpZGVzLmxlbmd0aDtcbiAgICAgIGFwcGVuZFRvKGNyZWF0ZUVsZW1lbnRGcm9tSFRNTCgnPGRpdiBjbGFzcz1cIicgKyBTTElERVNfTkFWICsgJ1wiPjx1bD48L3VsPjwvZGl2PicpLCBzZWN0aW9uRWxlbSk7XG4gICAgICB2YXIgbmF2ID0gJChTTElERVNfTkFWX1NFTCwgc2VjdGlvbkVsZW0pWzBdOyAvL3RvcCBvciBib3R0b21cblxuICAgICAgYWRkQ2xhc3MobmF2LCAnZnAtJyArIGdldE9wdGlvbnMoKS5zbGlkZXNOYXZQb3NpdGlvbik7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtU2xpZGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHNsaWRlID0gJChTTElERV9TRUwsIHNlY3Rpb25FbGVtKVtpXTtcbiAgICAgICAgYXBwZW5kVG8oY3JlYXRlRWxlbWVudEZyb21IVE1MKCc8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImZwLXNyLW9ubHlcIj4nICsgZ2V0QnVsbGV0TGlua05hbWUoaSwgJ1NsaWRlJywgc2xpZGUpICsgJzwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPjwvbGk+JyksICQoJ3VsJywgbmF2KVswXSk7XG4gICAgICB9IC8vY2VudGVyaW5nIGl0XG5cblxuICAgICAgY3NzKG5hdiwge1xuICAgICAgICAnbWFyZ2luLWxlZnQnOiAnLScgKyBuYXYuaW5uZXJXaWR0aCAvIDIgKyAncHgnXG4gICAgICB9KTtcbiAgICAgIHZhciBhY3RpdmVTbGlkZUluZGV4ID0gc2VjdGlvbi5hY3RpdmVTbGlkZSA/IHNlY3Rpb24uYWN0aXZlU2xpZGUuaW5kZXgoKSA6IDA7XG4gICAgICBhZGRDbGFzcygkKCdhJywgJCgnbGknLCBuYXYpW2FjdGl2ZVNsaWRlSW5kZXhdKSwgQUNUSVZFKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTY3JvbGxBbGxvd2VkID0ge307XG4gICAgaXNTY3JvbGxBbGxvd2VkLm0gPSB7XG4gICAgICAndXAnOiB0cnVlLFxuICAgICAgJ2Rvd24nOiB0cnVlLFxuICAgICAgJ2xlZnQnOiB0cnVlLFxuICAgICAgJ3JpZ2h0JzogdHJ1ZVxuICAgIH07XG4gICAgaXNTY3JvbGxBbGxvd2VkLmsgPSBkZWVwRXh0ZW5kKHt9LCBpc1Njcm9sbEFsbG93ZWQubSk7XG4gICAgLyoqXG4gICAgKiBBbGxvd2luZyBvciBkaXNhbGxvd2luZyB0aGUgbW91c2Uvc3dpcGUgc2Nyb2xsIGluIGEgZ2l2ZW4gZGlyZWN0aW9uLiAobm90IGZvciBrZXlib2FyZClcbiAgICAqIEBwYXJhbSB0eXBlIG0gKG1vdXNlKSBvciBrIChrZXlib2FyZClcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIC8vdXAsIGRvd24sIGxlZnQsIHJpZ2h0XG4gICAgICBpZiAoZGlyZWN0aW9uICE9PSAnYWxsJykge1xuICAgICAgICBpc1Njcm9sbEFsbG93ZWRbdHlwZV1bZGlyZWN0aW9uXSA9IHZhbHVlO1xuICAgICAgfSAvL2FsbCBkaXJlY3Rpb25zP1xuICAgICAgZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGlzU2Nyb2xsQWxsb3dlZFt0eXBlXSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaXNTY3JvbGxBbGxvd2VkW3R5cGVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldElzU2Nyb2xsQWxsb3dlZCgpIHtcbiAgICAgIHJldHVybiBpc1Njcm9sbEFsbG93ZWQ7XG4gICAgfVxuXG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkNsaWNrT3JUb3VjaCwgb25DbGlja09yVG91Y2gkMik7XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrT3JUb3VjaCQyKHBhcmFtcykge1xuICAgICAgdmFyIHRhcmdldCA9IHBhcmFtcy50YXJnZXQ7XG5cbiAgICAgIGlmIChtYXRjaGVzKHRhcmdldCwgU0xJREVTX0FSUk9XX1NFTCkgfHwgY2xvc2VzdCh0YXJnZXQsIFNMSURFU19BUlJPV19TRUwpKSB7XG4gICAgICAgIHNsaWRlQXJyb3dIYW5kbGVyLmNhbGwodGFyZ2V0LCBwYXJhbXMpO1xuICAgICAgfVxuICAgIH0gLy9TY3JvbGxpbmcgaG9yaXpvbnRhbGx5IHdoZW4gY2xpY2tpbmcgb24gdGhlIHNsaWRlciBjb250cm9scy5cblxuXG4gICAgZnVuY3Rpb24gc2xpZGVBcnJvd0hhbmRsZXIoKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIHNlY3Rpb24gPSBjbG9zZXN0KHRoaXMsIFNFQ1RJT05fU0VMKTtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cbiAgICAgIGlmIChoYXNDbGFzcyh0aGlzLCBTTElERVNfUFJFVikpIHtcbiAgICAgICAgaWYgKGdldElzU2Nyb2xsQWxsb3dlZCgpLm0ubGVmdCkge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6ICdzbGlkZUFycm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5tb3ZlU2xpZGVMZWZ0LCB7XG4gICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChnZXRJc1Njcm9sbEFsbG93ZWQoKS5tLnJpZ2h0KSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjogJ3NsaWRlQXJyb3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm1vdmVTbGlkZVJpZ2h0LCB7XG4gICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIHRoZSBjb250cm9sIGFycm93cyBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTbGlkZUFycm93cyhzZWN0aW9uKSB7XG4gICAgICB2YXIgc2VjdGlvbkVsZW0gPSBzZWN0aW9uLml0ZW07XG4gICAgICB2YXIgYXJyb3dzID0gW2NyZWF0ZUVsZW1lbnRGcm9tSFRNTChnZXRPcHRpb25zKCkuY29udHJvbEFycm93c0hUTUxbMF0pLCBjcmVhdGVFbGVtZW50RnJvbUhUTUwoZ2V0T3B0aW9ucygpLmNvbnRyb2xBcnJvd3NIVE1MWzFdKV07XG4gICAgICBhZnRlcigkKFNMSURFU19XUkFQUEVSX1NFTCwgc2VjdGlvbkVsZW0pWzBdLCBhcnJvd3MpO1xuICAgICAgYWRkQ2xhc3MoYXJyb3dzLCBTTElERVNfQVJST1cpO1xuICAgICAgYWRkQ2xhc3MoYXJyb3dzWzBdLCBTTElERVNfUFJFVik7XG4gICAgICBhZGRDbGFzcyhhcnJvd3NbMV0sIFNMSURFU19ORVhUKTtcblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5jb250cm9sQXJyb3dDb2xvciAhPT0gJyNmZmYnKSB7XG4gICAgICAgIGNzcygkKFNMSURFU19BUlJPV19ORVhUX1NFTCwgc2VjdGlvbkVsZW0pLCB7XG4gICAgICAgICAgJ2JvcmRlci1jb2xvcic6ICd0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAnICsgZ2V0T3B0aW9ucygpLmNvbnRyb2xBcnJvd0NvbG9yXG4gICAgICAgIH0pO1xuICAgICAgICBjc3MoJChTTElERVNfQVJST1dfUFJFVl9TRUwsIHNlY3Rpb25FbGVtKSwge1xuICAgICAgICAgICdib3JkZXItY29sb3InOiAndHJhbnNwYXJlbnQgJyArIGdldE9wdGlvbnMoKS5jb250cm9sQXJyb3dDb2xvciArICcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWdldE9wdGlvbnMoKS5sb29wSG9yaXpvbnRhbCkge1xuICAgICAgICBoaWRlKCQoU0xJREVTX0FSUk9XX1BSRVZfU0VMLCBzZWN0aW9uRWxlbSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVDb250cm9sQXJyb3dzKHYpIHtcbiAgICAgIGlmICghZ2V0T3B0aW9ucygpLmxvb3BIb3Jpem9udGFsICYmIGdldE9wdGlvbnMoKS5jb250cm9sQXJyb3dzKSB7XG4gICAgICAgIC8vaGlkZGluZyBpdCBmb3IgdGhlIGZpc3Qgc2xpZGUsIHNob3dpbmcgZm9yIHRoZSByZXN0XG4gICAgICAgIHRvZ2dsZSgkKFNMSURFU19BUlJPV19QUkVWX1NFTCwgdi5zZWN0aW9uKSwgdi5zbGlkZUluZGV4ICE9PSAwKTsgLy9oaWRkaW5nIGl0IGZvciB0aGUgbGFzdCBzbGlkZSwgc2hvd2luZyBmb3IgdGhlIHJlc3RcblxuICAgICAgICB0b2dnbGUoJChTTElERVNfQVJST1dfTkVYVF9TRUwsIHYuc2VjdGlvbiksIG5leHQodi5kZXN0aW55KSAhPSBudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBGUC5zZXRSZWNvcmRIaXN0b3J5ID0gc2V0UmVjb3JkSGlzdG9yeTtcbiAgICAvKipcbiAgICAqIERlZmluZXMgd2hldGVyIHRvIHJlY29yZCB0aGUgaGlzdG9yeSBmb3IgZWFjaCBoYXNoIGNoYW5nZSBpbiB0aGUgVVJMLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzZXRSZWNvcmRIaXN0b3J5KHZhbHVlLCB0eXBlKSB7XG4gICAgICBzZXRWYXJpYWJsZVN0YXRlKCdyZWNvcmRIaXN0b3J5JywgdmFsdWUsIHR5cGUpO1xuICAgIH1cblxuICAgIEZQLnNldEF1dG9TY3JvbGxpbmcgPSBzZXRBdXRvU2Nyb2xsaW5nO1xuICAgIEZQLnRlc3Quc2V0QXV0b1Njcm9sbGluZyA9IHNldEF1dG9TY3JvbGxpbmc7XG4gICAgLyoqXG4gICAgKiBTZXRzIHRoZSBhdXRvU2Nyb2xsIG9wdGlvbi5cbiAgICAqIEl0IGNoYW5nZXMgdGhlIHNjcm9sbCBiYXIgdmlzaWJpbGl0eSBhbmQgdGhlIGhpc3Rvcnkgb2YgdGhlIHNpdGUgYXMgYSByZXN1bHQuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNldEF1dG9TY3JvbGxpbmcodmFsdWUsIHR5cGUpIHtcbiAgICAgIC8vcmVtb3ZpbmcgdGhlIHRyYW5zZm9ybWF0aW9uXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHNpbGVudFNjcm9sbCgwKTtcbiAgICAgIH1cblxuICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnYXV0b1Njcm9sbGluZycsIHZhbHVlLCB0eXBlKTtcbiAgICAgIHZhciBlbGVtZW50ID0gZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW07XG5cbiAgICAgIGlmIChnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZyAmJiAhZ2V0T3B0aW9ucygpLnNjcm9sbEJhcikge1xuICAgICAgICBjc3MoJGh0bWxCb2R5LCB7XG4gICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgICAgICAgJ2hlaWdodCc6ICcxMDAlJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJGJvZHksICdmcC1zY3JvbGxhYmxlJyk7XG4gICAgICAgIHNldFJlY29yZEhpc3RvcnkoZ2V0T3JpZ2luYWxzKCkucmVjb3JkSGlzdG9yeSwgJ2ludGVybmFsJyk7IC8vZm9yIElFIHRvdWNoIGRldmljZXNcblxuICAgICAgICBjc3MoZ2V0Q29udGFpbmVyKCksIHtcbiAgICAgICAgICAnLW1zLXRvdWNoLWFjdGlvbic6ICdub25lJyxcbiAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAvL21vdmluZyB0aGUgY29udGFpbmVyIHVwXG4gICAgICAgICAgc2lsZW50U2Nyb2xsKGVsZW1lbnQub2Zmc2V0VG9wKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzKCRodG1sQm9keSwge1xuICAgICAgICAgICdvdmVyZmxvdyc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAnaGVpZ2h0JzogJ2luaXRpYWwnXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRDbGFzcygkYm9keSwgJ2ZwLXNjcm9sbGFibGUnKTtcbiAgICAgICAgdmFyIHJlY29yZEhpc3RvcnkgPSAhZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgPyBmYWxzZSA6IGdldE9yaWdpbmFscygpLnJlY29yZEhpc3Rvcnk7XG4gICAgICAgIHNldFJlY29yZEhpc3RvcnkocmVjb3JkSGlzdG9yeSwgJ2ludGVybmFsJyk7IC8vZm9yIElFIHRvdWNoIGRldmljZXNcblxuICAgICAgICBjc3MoZ2V0Q29udGFpbmVyKCksIHtcbiAgICAgICAgICAnLW1zLXRvdWNoLWFjdGlvbic6ICcnLFxuICAgICAgICAgICd0b3VjaC1hY3Rpb24nOiAnJ1xuICAgICAgICB9KTsgLy9zY3JvbGxpbmcgdGhlIHBhZ2UgdG8gdGhlIHNlY3Rpb24gd2l0aCBubyBhbmltYXRpb25cblxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3MoZWxlbWVudC5vZmZzZXRUb3ApO1xuICAgICAgICAgIHNjcm9sbFNldHRpbmdzLmVsZW1lbnQuc2Nyb2xsVG8oMCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL0B0cy1jaGVja1xuICAgIC8qKlxuICAgICogQWRkcyBzZWN0aW9ucyBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgb25lIHRvIGNyZWF0ZSB0aGUgaW5maW5pdGUgZWZmZWN0LlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbmZpbml0ZVNlY3Rpb25zKHYpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgaXNEb2luZ0NvbnRpbm91c1ZlcnRpY2FsOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHZhciBhY3RpdmVTZWN0aW9uSXRlbSA9IGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5pdGVtOyAvLyBTY3JvbGxpbmcgZG93blxuXG4gICAgICBpZiAoIXYuaXNNb3ZlbWVudFVwKSB7XG4gICAgICAgIC8vIE1vdmUgYWxsIHByZXZpb3VzIHNlY3Rpb25zIHRvIGFmdGVyIHRoZSBhY3RpdmUgc2VjdGlvblxuICAgICAgICBhZnRlcihhY3RpdmVTZWN0aW9uSXRlbSwgcHJldkFsbChhY3RpdmVTZWN0aW9uSXRlbSwgU0VDVElPTl9TRUwpLnJldmVyc2UoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTY3JvbGxpbmcgdXBcbiAgICAgICAgLy8gTW92ZSBhbGwgbmV4dCBzZWN0aW9ucyB0byBiZWZvcmUgdGhlIGFjdGl2ZSBzZWN0aW9uXG4gICAgICAgIGJlZm9yZShhY3RpdmVTZWN0aW9uSXRlbSwgbmV4dEFsbChhY3RpdmVTZWN0aW9uSXRlbSwgU0VDVElPTl9TRUwpKTtcbiAgICAgIH0gLy8gTWFpbnRhaW4gdGhlIGRpc3BsYXllZCBwb3NpdGlvbiAobm93IHRoYXQgd2UgY2hhbmdlZCB0aGUgZWxlbWVudCBvcmRlcilcblxuXG4gICAgICBzaWxlbnRTY3JvbGwoZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW0ub2Zmc2V0VG9wKTsgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcblxuICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uJDEoKTsgLy8gc2F2ZSBmb3IgbGF0ZXIgdGhlIGVsZW1lbnRzIHRoYXQgc3RpbGwgbmVlZCB0byBiZSByZW9yZGVyZWRcblxuICAgICAgdi53cmFwQXJvdW5kRWxlbWVudHMgPSBhY3RpdmVTZWN0aW9uSXRlbTsgLy8gUmVjYWxjdWxhdGUgYW5pbWF0aW9uIHZhcmlhYmxlc1xuXG4gICAgICB2LmR0b3AgPSB2LmVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgdi55TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQoZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLCB2LmVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIC8qKlxuICAgICogTWFpbnRhaW5zIHRoZSBhY3RpdmUgc2xpZGVzIGluIHRoZSB2aWV3cG9ydFxuICAgICogKEJlY2F1c2UgdGhlIGBzY3JvbGxgIGFuaW1hdGlvbiBtaWdodCBnZXQgbG9zdCB3aXRoIHNvbWUgYWN0aW9ucywgc3VjaCBhcyB3aGVuIHVzaW5nIGNvbnRpbnVvdXNWZXJ0aWNhbClcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24ga2VlcFNsaWRlc1Bvc2l0aW9uJDEoKSB7XG4gICAgICB2YXIgYWN0aXZlU2xpZGVzID0gJChTTElERV9BQ1RJVkVfU0VMKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKGFjdGl2ZVNsaWRlc1tpXSwgJ2ludGVybmFsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9AdHMtY2hlY2tcbiAgICAvKipcbiAgICAqIE1haW50YWlucyB0aGUgYWN0aXZlIHNsaWRlcyBpbiB0aGUgdmlld3BvcnRcbiAgICAqIChCZWNhdXNlIHRoZSBgc2Nyb2xsYCBhbmltYXRpb24gbWlnaHQgZ2V0IGxvc3Qgd2l0aCBzb21lIGFjdGlvbnMsIHN1Y2ggYXMgd2hlbiB1c2luZyBjb250aW51b3VzVmVydGljYWwpXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGtlZXBTbGlkZXNQb3NpdGlvbigpIHtcbiAgICAgIHZhciBhY3RpdmVTbGlkZXMgPSAkKFNMSURFX0FDVElWRV9TRUwpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZVNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoYWN0aXZlU2xpZGVzW2ldLCAnaW50ZXJuYWwnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgKiBGaXggc2VjdGlvbiBvcmRlciBhZnRlciBjb250aW51b3VzVmVydGljYWwgY2hhbmdlcyBoYXZlIGJlZW4gYW5pbWF0ZWRcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb250aW51b3VzVmVydGljYWxGaXhTZWN0aW9uT3JkZXIodikge1xuICAgICAgLy8gSWYgY29udGludW91c1ZlcnRpY2FsIGlzIGluIGVmZmVjdCAoYW5kIGF1dG9TY3JvbGxpbmcgd291bGQgYWxzbyBiZSBpbiBlZmZlY3QgdGhlbiksXG4gICAgICAvLyBmaW5pc2ggbW92aW5nIHRoZSBlbGVtZW50cyBhcm91bmQgc28gdGhlIGRpcmVjdCBuYXZpZ2F0aW9uIHdpbGwgZnVuY3Rpb24gbW9yZSBzaW1wbHlcbiAgICAgIGlmICh2LndyYXBBcm91bmRFbGVtZW50cyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHYuaXNNb3ZlbWVudFVwKSB7XG4gICAgICAgIGJlZm9yZSgkKFNFQ1RJT05fU0VMKVswXSwgdi53cmFwQXJvdW5kRWxlbWVudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWZ0ZXIoJChTRUNUSU9OX1NFTClbZ2V0U3RhdGUoKS5zZWN0aW9ucy5sZW5ndGggLSAxXSwgdi53cmFwQXJvdW5kRWxlbWVudHMpO1xuICAgICAgfVxuXG4gICAgICBzaWxlbnRTY3JvbGwoZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW0ub2Zmc2V0VG9wKTsgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcblxuICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uKCk7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGlzRG9pbmdDb250aW5vdXNWZXJ0aWNhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogTWFrZXMgc3VyZSBsYXp5bG9hZCBpcyBkb25lIGZvciBvdGhlciBzZWN0aW9ucyBpbiB0aGUgdmlld3BvcnQgdGhhdCBhcmUgbm90IHRoZVxuICAgICogYWN0aXZlIG9uZS4gXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGxhenlMb2FkT3RoZXJzKCkge1xuICAgICAgdmFyIGhhc0F1dG9IZWlnaHRTZWN0aW9ucyA9ICQoQVVUT19IRUlHSFRfU0VMKVswXSB8fCBpc1Jlc3BvbnNpdmVNb2RlKCkgJiYgJChBVVRPX0hFSUdIVF9SRVNQT05TSVZFX1NFTClbMF07IC8vcXVpdHRpbmcgd2hlbiBpdCBkb2Vzbid0IGFwcGx5XG5cbiAgICAgIGlmICghZ2V0T3B0aW9ucygpLmxhenlMb2FkaW5nIHx8ICFoYXNBdXRvSGVpZ2h0U2VjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvL21ha2luZyBzdXJlIHRvIGxhenkgbG9hZCBhdXRvLWhlaWdodCBzZWN0aW9ucyB0aGF0IGFyZSBpbiB0aGUgdmlld3BvcnRcblxuXG4gICAgICAkKFNFQ1RJT05fU0VMICsgJzpub3QoJyArIEFDVElWRV9TRUwgKyAnKScpLmZvckVhY2goZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgaWYgKGlzU2VjdGlvbkluVmlld3BvcnQoc2VjdGlvbikpIHtcbiAgICAgICAgICBsYXp5TG9hZChzZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgc2VjdGlvbiBpcyBpbiB0aGUgdmlld3BvcnQgb3Igbm90LlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBpc1NlY3Rpb25JblZpZXdwb3J0KGVsKSB7XG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHRvcCA9IHJlY3QudG9wO1xuICAgICAgdmFyIGJvdHRvbSA9IHJlY3QuYm90dG9tOyAvL3NvbWV0aW1lcyB0aGVyZSdzIGEgMXB4IG9mZnNldCBvbiB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gZXZlbiB3aGVuIHRoZSBcbiAgICAgIC8vc2VjdGlvbidzIGhlaWdodCBpcyB0aGUgd2luZG93LmlubmVySGVpZ2h0IG9uZS4gSSBndWVzcyBiZWNhdXNlIHBpeGVscyB3b24ndCBhbGxvdyBkZWNpbWFscy5cbiAgICAgIC8vdXNpbmcgdGhpcyBwcmV2ZW50cyBmcm9tIGxhenlMb2FkaW5nIHRoZSBzZWN0aW9uIHRoYXQgaXMgbm90IHlldCB2aXNpYmxlIFxuICAgICAgLy8ob25seSAxIHBpeGVsIG9mZnNldCBpcylcblxuICAgICAgdmFyIHBpeGVsT2Zmc2V0ID0gMjtcbiAgICAgIHZhciBpc1RvcEluVmlldyA9IHRvcCArIHBpeGVsT2Zmc2V0IDwgc3RhdGUud2luZG93c0hlaWdodCAmJiB0b3AgPiAwO1xuICAgICAgdmFyIGlzQm90dG9tSW5WaWV3ID0gYm90dG9tID4gcGl4ZWxPZmZzZXQgJiYgYm90dG9tIDwgc3RhdGUud2luZG93c0hlaWdodDtcbiAgICAgIHJldHVybiBpc1RvcEluVmlldyB8fCBpc0JvdHRvbUluVmlldztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b29sdGlwVGV4dEhhbmRsZXIoKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdHJpZ2dlcihwcmV2KHRoaXMpLCAnY2xpY2snKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBBY3RpdmF0aW5nIHRoZSB2ZXJ0aWNhbCBuYXZpZ2F0aW9uIGJ1bGxldHMgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzbGlkZSBuYW1lLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZU5hdkRvdHMobmFtZSwgc2VjdGlvbkluZGV4KSB7XG4gICAgICB2YXIgbmF2ID0gJChTRUNUSU9OX05BVl9TRUwpWzBdO1xuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLm5hdmlnYXRpb24gJiYgbmF2ICE9IG51bGwgJiYgbmF2LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICByZW1vdmVDbGFzcygkKEFDVElWRV9TRUwsIG5hdiksIEFDVElWRSk7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICBhZGRDbGFzcygkKCdhW2hyZWY9XCIjJyArIG5hbWUgKyAnXCJdJywgbmF2KSwgQUNUSVZFKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDbGFzcygkKCdhJywgJCgnbGknLCBuYXYpW3NlY3Rpb25JbmRleF0pLCBBQ1RJVkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIHZlcnRpY2FsIG5hdmlnYXRpb24gYmFyLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBhZGRWZXJ0aWNhbE5hdmlnYXRpb24oKSB7XG4gICAgICByZW1vdmUoJChTRUNUSU9OX05BVl9TRUwpKTtcbiAgICAgIHZhciBuYXZpZ2F0aW9uID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbmF2aWdhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgU0VDVElPTl9OQVYpO1xuICAgICAgdmFyIGRpdlVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGRpdlVsKTtcbiAgICAgIGFwcGVuZFRvKG5hdmlnYXRpb24sICRib2R5KTtcbiAgICAgIHZhciBuYXYgPSAkKFNFQ1RJT05fTkFWX1NFTClbMF07XG4gICAgICBhZGRDbGFzcyhuYXYsICdmcC0nICsgZ2V0T3B0aW9ucygpLm5hdmlnYXRpb25Qb3NpdGlvbik7XG5cbiAgICAgIGlmIChnZXRPcHRpb25zKCkuc2hvd0FjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgYWRkQ2xhc3MobmF2LCBTSE9XX0FDVElWRV9UT09MVElQKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2V0U3RhdGUoKS5zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc2VjdGlvbiA9IGdldFN0YXRlKCkuc2VjdGlvbnNbaV07XG4gICAgICAgIHZhciBsaW5rID0gJyc7XG5cbiAgICAgICAgaWYgKGdldE9wdGlvbnMoKS5hbmNob3JzLmxlbmd0aCkge1xuICAgICAgICAgIGxpbmsgPSBzZWN0aW9uLmFuY2hvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpICs9ICc8bGk+PGEgaHJlZj1cIiMnICsgZW5jb2RlVVJJKGxpbmspICsgJ1wiPjxzcGFuIGNsYXNzPVwiZnAtc3Itb25seVwiPicgKyBnZXRCdWxsZXRMaW5rTmFtZShzZWN0aW9uLmluZGV4KCksICdTZWN0aW9uJykgKyAnPC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+JzsgLy8gT25seSBhZGQgdG9vbHRpcCBpZiBuZWVkZWQgKGRlZmluZWQgYnkgdXNlcilcblxuICAgICAgICB2YXIgdG9vbHRpcCA9IGdldE9wdGlvbnMoKS5uYXZpZ2F0aW9uVG9vbHRpcHNbc2VjdGlvbi5pbmRleCgpXTtcblxuICAgICAgICBpZiAodHlwZW9mIHRvb2x0aXAgIT09ICd1bmRlZmluZWQnICYmIHRvb2x0aXAgIT09ICcnKSB7XG4gICAgICAgICAgbGkgKz0gJzxkaXYgY2xhc3M9XCInICsgU0VDVElPTl9OQVZfVE9PTFRJUCArICcgZnAtJyArIGdldE9wdGlvbnMoKS5uYXZpZ2F0aW9uUG9zaXRpb24gKyAnXCI+JyArIHRvb2x0aXAgKyAnPC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpICs9ICc8L2xpPic7XG4gICAgICB9XG5cbiAgICAgICQoJ3VsJywgbmF2KVswXS5pbm5lckhUTUwgPSBsaTsgLy9hY3RpdmF0aW5nIHRoZSBjdXJyZW50IGFjdGl2ZSBzZWN0aW9uXG5cbiAgICAgIHZhciBidWxsZXQgPSAkKCdsaScsICQoU0VDVElPTl9OQVZfU0VMKVswXSlbZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLmluZGV4KCldO1xuICAgICAgYWRkQ2xhc3MoJCgnYScsIGJ1bGxldCksIEFDVElWRSk7XG4gICAgfSAvL1Njcm9sbHMgdG8gdGhlIHNlY3Rpb24gd2hlbiBjbGlja2luZyB0aGUgbmF2aWdhdGlvbiBidWxsZXRcblxuICAgIGZ1bmN0aW9uIHNlY3Rpb25CdWxsZXRIYW5kbGVyKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgfVxuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6ICd2ZXJ0aWNhbE5hdidcbiAgICAgIH0pO1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIC8vIEB0cy1pZ25vcmVcblxuICAgICAgdmFyIGluZGV4QnVsbGV0ID0gaW5kZXgoY2xvc2VzdCh0aGlzLCBTRUNUSU9OX05BVl9TRUwgKyAnIGxpJykpO1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLnNjcm9sbFBhZ2UsIHtcbiAgICAgICAgZGVzdGluYXRpb246IGdldFN0YXRlKCkuc2VjdGlvbnNbaW5kZXhCdWxsZXRdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFNldHMgdG8gYWN0aXZlIHRoZSBjdXJyZW50IG1lbnUgYW5kIHZlcnRpY2FsIG5hdiBpdGVtcy5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVNZW51QW5kTmF2KGFuY2hvciwgaW5kZXgpIHtcbiAgICAgIGFjdGl2YXRlTWVudUVsZW1lbnQoYW5jaG9yKTtcbiAgICAgIGFjdGl2YXRlTmF2RG90cyhhbmNob3IsIGluZGV4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBBY3RpdmF0aW5nIHRoZSB3ZWJzaXRlIG1haW4gbWVudSBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIHNsaWRlIG5hbWUuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlTWVudUVsZW1lbnQobmFtZSkge1xuICAgICAgaWYgKGdldE9wdGlvbnMoKS5tZW51ICYmIGdldE9wdGlvbnMoKS5tZW51Lmxlbmd0aCkge1xuICAgICAgICAkKGdldE9wdGlvbnMoKS5tZW51KS5mb3JFYWNoKGZ1bmN0aW9uIChtZW51KSB7XG4gICAgICAgICAgaWYgKG1lbnUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJChBQ1RJVkVfU0VMLCBtZW51KSwgQUNUSVZFKTtcbiAgICAgICAgICAgIGFkZENsYXNzKCQoJ1tkYXRhLW1lbnVhbmNob3I9XCInICsgbmFtZSArICdcIl0nLCBtZW51KSwgQUNUSVZFKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHRoZSBjYWxsYmFjayBvbmNlIHBlciBzY3JvbGwgd2hlZWwgYWN0aW9uLlxuICAgICAqIEJhc2VkIG9uIHNjcm9sbGluZyBzcGVlZCBkZWxheS5cbiAgICAgKi9cblxuICAgIHZhciBvbmNlUGVyU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhblRyaWdnZXJFdmVudCA9IHRydWU7XG4gICAgICB2YXIgcHJldldoZWVsVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHZhciBpc1Njcm9sbGluZ09uSW5pdCA9ICF3aW4uZnVsbHBhZ2VfYXBpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzY3JvbGxUcmlnZ2VyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWVUaHJlc2hvbGQgPSBzY3JvbGxUcmlnZ2VyID09PSAnd2hlZWwnID8gZ2V0T3B0aW9ucygpLnNjcm9sbGluZ1NwZWVkIDogMTAwO1xuICAgICAgICBjYW5UcmlnZ2VyRXZlbnQgPSBpc1Njcm9sbGluZ09uSW5pdCB8fCBjdXJyZW50VGltZSAtIHByZXZXaGVlbFRpbWUgPj0gdGltZVRocmVzaG9sZDtcbiAgICAgICAgaXNTY3JvbGxpbmdPbkluaXQgPSAhd2luLmZ1bGxwYWdlX2FwaTtcblxuICAgICAgICBpZiAoY2FuVHJpZ2dlckV2ZW50KSB7XG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgICAgICAgICBwcmV2V2hlZWxUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcgPyByZXN1bHQgOiB0cnVlO1xuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAqIEZpcmVzIHRoZSB3aGVlbCBldmVudCBvbmNlIHBlciBtb3VzZSB3aGVlbCB0cmlnZ2VyLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBmaXJlQ2FsbGJhY2tPbmNlUGVyU2Nyb2xsKGNhbGxiYWNrTmFtZSwgcGFyYW1zKSB7XG4gICAgICBpZiAoIWlzRnVuY3Rpb24oZ2V0T3B0aW9ucygpLmJlZm9yZUxlYXZlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSBvbmNlUGVyU2Nyb2xsKGdldFN0YXRlKCkuc2Nyb2xsVHJpZ2dlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmlyZUNhbGxiYWNrKGNhbGxiYWNrTmFtZSwgcGFyYW1zKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBGUC5tb3ZlVG8gPSBtb3ZlVG87XG5cbiAgICBGUC5nZXRTY3JvbGxZID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnNjcm9sbFk7XG4gICAgfTtcblxuICAgIHZhciBnX2FmdGVyU2VjdGlvbkxvYWRzSWQ7XG4gICAgdmFyIGdfdHJhbnNpdGlvbkxhcHNlSWQ7XG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkRlc3Ryb3ksIG9uRGVzdHJveSQ4KTtcbiAgICAvKipcbiAgICAqIFNjcm9sbHMgdGhlIHNpdGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHNjcm9sbHMgdG8gdGhlIHNsaWRlIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFBhZ2Uoc2VjdGlvbiwgY2FsbGJhY2ssIGlzTW92ZW1lbnRVcCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzZWN0aW9uLml0ZW07XG5cbiAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvL3RoZXJlJ3Mgbm8gZWxlbWVudCB0byBzY3JvbGwsIGxlYXZpbmcgdGhlIGZ1bmN0aW9uXG5cblxuICAgICAgdmFyIGR0b3AgPSBnZXREZXN0aW5hdGlvblBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgdmFyIHNsaWRlQW5jaG9yTGluaztcbiAgICAgIHZhciBzbGlkZUluZGV4OyAvL2xvY2FsIHZhcmlhYmxlc1xuXG4gICAgICB2YXIgdiA9IHtcbiAgICAgICAgXCJlbGVtZW50XCI6IGVsZW1lbnQsXG4gICAgICAgIFwiY2FsbGJhY2tcIjogY2FsbGJhY2ssXG4gICAgICAgIFwiaXNNb3ZlbWVudFVwXCI6IGlzTW92ZW1lbnRVcCxcbiAgICAgICAgXCJkdG9wXCI6IGR0b3AsXG4gICAgICAgIFwieU1vdmVtZW50XCI6IGdldFltb3ZlbWVudChnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24sIGVsZW1lbnQpLFxuICAgICAgICBcImFuY2hvckxpbmtcIjogc2VjdGlvbi5hbmNob3IsXG4gICAgICAgIFwic2VjdGlvbkluZGV4XCI6IHNlY3Rpb24uaW5kZXgoKSxcbiAgICAgICAgXCJhY3RpdmVTbGlkZVwiOiBzZWN0aW9uLmFjdGl2ZVNsaWRlID8gc2VjdGlvbi5hY3RpdmVTbGlkZS5pdGVtIDogbnVsbCxcbiAgICAgICAgXCJsZWF2aW5nU2VjdGlvblwiOiBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaW5kZXgoKSArIDEsXG4gICAgICAgIC8vY2FjaGluZyB0aGUgdmFsdWUgb2YgaXNSZXNpemluZyBhdCB0aGUgbW9tbWVudCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkXG4gICAgICAgIC8vYmVjYXVzZSBpdCB3aWxsIGJlIGNoZWNrZWQgbGF0ZXIgaW5zaWRlIGEgc2V0VGltZW91dCBhbmQgdGhlIHZhbHVlIG1pZ2h0IGNoYW5nZVxuICAgICAgICBcImxvY2FsSXNSZXNpemluZ1wiOiBzdGF0ZS5pc1Jlc2l6aW5nLFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcIm9yaWdpblwiOiBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24sXG4gICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBzZWN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IG51bGxcbiAgICAgIH07IC8vcXVpdGluZyB3aGVuIGRlc3RpbmF0aW9uIHNjcm9sbCBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCBvbmVcblxuICAgICAgaWYgKGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5pdGVtID09IGVsZW1lbnQgJiYgIXN0YXRlLmlzUmVzaXppbmcgfHwgZ2V0T3B0aW9ucygpLnNjcm9sbEJhciAmJiBnZXRTY3JvbGxUb3AoKSA9PT0gdi5kdG9wICYmICFoYXNDbGFzcyhlbGVtZW50LCBBVVRPX0hFSUdIVCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodi5hY3RpdmVTbGlkZSAhPSBudWxsKSB7XG4gICAgICAgIHNsaWRlQW5jaG9yTGluayA9IGdldEF0dHIodi5hY3RpdmVTbGlkZSwgJ2RhdGEtYW5jaG9yJyk7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpbmRleCh2LmFjdGl2ZVNsaWRlLCBudWxsKTtcbiAgICAgIH0gLy9jYWxsYmFjayAob25MZWF2ZSkgaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcblxuXG4gICAgICBpZiAoIXYubG9jYWxJc1Jlc2l6aW5nKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB2LnlNb3ZlbWVudDsgLy9yZXF1aXJlZCBmb3IgY29udGlub3VzVmVydGljYWxcblxuICAgICAgICBpZiAodHlwZW9mIGlzTW92ZW1lbnRVcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSBpc01vdmVtZW50VXAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgICB9IC8vZm9yIHRoZSBjYWxsYmFja1xuXG5cbiAgICAgICAgdi5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oZ2V0T3B0aW9ucygpLmJlZm9yZUxlYXZlKSkge1xuICAgICAgICAgIGlmIChmaXJlQ2FsbGJhY2tPbmNlUGVyU2Nyb2xsKCdiZWZvcmVMZWF2ZScsIHYpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGdldE9wdGlvbnMoKS5vbkxlYXZlKSkge1xuICAgICAgICAgIGlmICghZmlyZUNhbGxiYWNrKCdvbkxlYXZlJywgdikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSWYgY29udGludW91c1ZlcnRpY2FsICYmIHdlIG5lZWQgdG8gd3JhcCBhcm91bmRcblxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgJiYgZ2V0T3B0aW9ucygpLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJiB0eXBlb2Ygdi5pc01vdmVtZW50VXAgIT09IFwidW5kZWZpbmVkXCIgJiYgKCF2LmlzTW92ZW1lbnRVcCAmJiB2LnlNb3ZlbWVudCA9PSAndXAnIHx8IC8vIEludGVuZGluZyB0byBzY3JvbGwgZG93biBidXQgYWJvdXQgdG8gZ28gdXAgb3JcbiAgICAgIHYuaXNNb3ZlbWVudFVwICYmIHYueU1vdmVtZW50ID09ICdkb3duJykpIHtcbiAgICAgICAgLy8gaW50ZW5kaW5nIHRvIHNjcm9sbCB1cCBidXQgYWJvdXQgdG8gZ28gZG93blxuICAgICAgICB2ID0gY3JlYXRlSW5maW5pdGVTZWN0aW9ucyh2KTtcbiAgICAgIH0gLy9wYXVzaW5nIG1lZGlhIG9mIHRoZSBsZWF2aW5nIHNlY3Rpb24gKGlmIHdlIGFyZSBub3QganVzdCByZXNpemluZywgYXMgZGVzdGluYXRpbm8gd2lsbCBiZSB0aGUgc2FtZSBvbmUpXG5cblxuICAgICAgaWYgKCF2LmxvY2FsSXNSZXNpemluZykge1xuICAgICAgICBzdG9wTWVkaWEoZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW0pO1xuICAgICAgfVxuXG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBBQ1RJVkUpO1xuICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3MoZWxlbWVudCksIEFDVElWRSk7XG4gICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgbGF6eUxvYWQoZWxlbWVudCk7IC8vcHJldmVudGluZyBmcm9tIGFjdGl2YXRpbmcgdGhlIE1vdXNlV2hlZWxIYW5kbGVyIGV2ZW50XG4gICAgICAvL21vcmUgdGhhbiBvbmNlIGlmIHRoZSBwYWdlIGlzIHNjcm9sbGluZ1xuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGNhblNjcm9sbDogRlAudGVzdC5pc1Rlc3RpbmdcbiAgICAgIH0pO1xuICAgICAgc2V0UGFnZVN0YXR1cyhzbGlkZUluZGV4LCBzbGlkZUFuY2hvckxpbmssIHYuYW5jaG9yTGluayk7XG4gICAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudHMub25MZWF2ZSwgdik7XG4gICAgICBwZXJmb3JtTW92ZW1lbnQodik7IC8vZmxhZyB0byBhdm9pZCBjYWxsaW5nbiBgc2Nyb2xsUGFnZSgpYCB0d2ljZSBpbiBjYXNlIG9mIHVzaW5nIGFuY2hvciBsaW5rc1xuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGxhc3RTY3JvbGxlZERlc3Rpbnk6IHYuYW5jaG9yTGlua1xuICAgICAgfSk7IC8vYXZvaWQgZmlyaW5nIGl0IHR3aWNlIChhcyBpdCBkb2VzIGFsc28gb24gc2Nyb2xsKVxuXG4gICAgICBhY3RpdmF0ZU1lbnVBbmROYXYodi5hbmNob3JMaW5rLCB2LnNlY3Rpb25JbmRleCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EZXN0cm95JDgoKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ19hZnRlclNlY3Rpb25Mb2Fkc0lkKTtcbiAgICAgIGNsZWFyVGltZW91dChnX3RyYW5zaXRpb25MYXBzZUlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBkZXN0aW5hdGlvbiBZIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uIGFuZFxuICAgICogdGhlIGhlaWdodCBvZiB0aGUgc2VjdGlvbi5cbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBnZXREZXN0aW5hdGlvblBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgZWxlbWVudFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wOyAvL3RvcCBvZiB0aGUgZGVzaW5hdGlvbiB3aWxsIGJlIGF0IHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0XG5cbiAgICAgIHZhciBwb3NpdGlvbiA9IGVsZW1lbnRUb3A7XG4gICAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gZWxlbWVudFRvcCA+IHN0YXRlLnByZXZpb3VzRGVzdFRvcDtcbiAgICAgIHZhciBzZWN0aW9uQm90dG9tID0gcG9zaXRpb24gLSBnZXRXaW5kb3dIZWlnaHQoKSArIGVsZW1lbnRIZWlnaHQ7XG4gICAgICB2YXIgYmlnU2VjdGlvbnNEZXN0aW5hdGlvbiA9IGdldE9wdGlvbnMoKS5iaWdTZWN0aW9uc0Rlc3RpbmF0aW9uOyAvL2lzIHRoZSBkZXN0aW5hdGlvbiBlbGVtZW50IGJpZ2dlciB0aGFuIHRoZSB2aWV3cG9ydD9cblxuICAgICAgaWYgKGVsZW1lbnRIZWlnaHQgPiBnZXRXaW5kb3dIZWlnaHQoKSkge1xuICAgICAgICAvL3Njcm9sbGluZyB1cD9cbiAgICAgICAgaWYgKCFpc1Njcm9sbGluZ0Rvd24gJiYgIWJpZ1NlY3Rpb25zRGVzdGluYXRpb24gfHwgYmlnU2VjdGlvbnNEZXN0aW5hdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IHNlY3Rpb25Cb3R0b207XG4gICAgICAgIH1cbiAgICAgIH0gLy9zZWN0aW9ucyBlcXVhbCBvciBzbWFsbGVyIHRoYW4gdGhlIHZpZXdwb3J0IGhlaWdodCAmJiBzY3JvbGxpbmcgZG93bj8gfHwgIGlzIHJlc2l6aW5nIGFuZCBpdHMgaW4gdGhlIGxhc3Qgc2VjdGlvblxuICAgICAgZWxzZSBpZiAoaXNTY3JvbGxpbmdEb3duIHx8IHN0YXRlLmlzUmVzaXppbmcgJiYgbmV4dChlbGVtZW50KSA9PSBudWxsKSB7XG4gICAgICAgIC8vVGhlIGJvdHRvbSBvZiB0aGUgZGVzdGluYXRpb24gd2lsbCBiZSBhdCB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgICBwb3NpdGlvbiA9IHNlY3Rpb25Cb3R0b207XG4gICAgICB9XG4gICAgICAvKlxuICAgICAgS2VlcGluZyByZWNvcmQgb2YgdGhlIGxhc3Qgc2Nyb2xsZWQgcG9zaXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLlxuICAgICAgTm8gY29udmVudGlvbmFsIG1ldGhvZHMgY2FuIGJlIHVzZWQgYXMgdGhlIHNjcm9sbCBiYXIgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgIEFORCB0aGUgc2VjdGlvbiBtaWdodCBub3QgYmUgYWN0aXZlIGlmIGl0IGlzIGF1dG8taGVpZ2h0IGFuZCBkaWRudCByZWFjaCB0aGUgbWlkZGxlXG4gICAgICBvZiB0aGUgdmlld3BvcnQuXG4gICAgICAqL1xuXG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgcHJldmlvdXNEZXN0VG9wOiBwb3NpdGlvblxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICogUGVyZm9ybXMgdGhlIHZlcnRpY2FsIG1vdmVtZW50IChieSBDU1MzIG9yIGJ5IGpRdWVyeSlcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBwZXJmb3JtTW92ZW1lbnQodikge1xuICAgICAgdmFyIGlzRmFzdFNwZWVkID0gZ2V0T3B0aW9ucygpLnNjcm9sbGluZ1NwZWVkIDwgNzAwO1xuICAgICAgdmFyIHRyYW5zaXRpb25MYXBzZSA9IGlzRmFzdFNwZWVkID8gNzAwIDogZ2V0T3B0aW9ucygpLnNjcm9sbGluZ1NwZWVkO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaERpcmVjdGlvbjogJ25vbmUnLFxuICAgICAgICBzY3JvbGxZOiBNYXRoLnJvdW5kKHYuZHRvcClcbiAgICAgIH0pO1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm9uUGVyZm9ybU1vdmVtZW50KTsgLy8gdXNpbmcgQ1NTMyB0cmFuc2xhdGUgZnVuY3Rpb25hbGl0eVxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLmNzczMgJiYgZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgJiYgIWdldE9wdGlvbnMoKS5zY3JvbGxCYXIpIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHNlY3Rpb24gY2FuIGhhdmUgYSBuZWdhdGl2ZSB2YWx1ZSBpbiBpT1MgMTAuIE5vdCBxdWl0ZSBzdXJlIHdoeTogLTAuMDE0MjgyMjI2NTYyNVxuICAgICAgICAvLyB0aGF0J3Mgd2h5IHdlIHJvdW5kIGl0IHRvIDAuXG4gICAgICAgIHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgwcHgsIC0nICsgTWF0aC5yb3VuZCh2LmR0b3ApICsgJ3B4LCAwcHgpJztcbiAgICAgICAgdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCB0cnVlKTsgLy9ldmVuIHdoZW4gdGhlIHNjcm9sbGluZ1NwZWVkIGlzIDAgdGhlcmUncyBhIGxpdHRsZSBkZWxheSwgd2hpY2ggbWlnaHQgY2F1c2UgdGhlXG4gICAgICAgIC8vc2Nyb2xsaW5nU3BlZWQgdG8gY2hhbmdlIGluIGNhc2Ugb2YgdXNpbmcgc2lsZW50TW92ZVRvKCk7w6dcblxuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLnNjcm9sbGluZ1NwZWVkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGdfYWZ0ZXJTZWN0aW9uTG9hZHNJZCk7XG4gICAgICAgICAgZ19hZnRlclNlY3Rpb25Mb2Fkc0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2FkcyQxKHYpOyAvL2Rpc2FibGluZyBjYW5TY3JvbGwgd2hlbiB1c2luZyBmYXN0U3BlZWRcblxuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjYW5TY3JvbGw6ICFpc0Zhc3RTcGVlZCB8fCBGUC50ZXN0LmlzVGVzdGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgZ2V0T3B0aW9ucygpLnNjcm9sbGluZ1NwZWVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZnRlclNlY3Rpb25Mb2FkcyQxKHYpO1xuICAgICAgICB9XG4gICAgICB9IC8vIHVzaW5nIEpTIHRvIGFuaW1hdGVcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgc2Nyb2xsU2V0dGluZ3MgPSBnZXRTY3JvbGxTZXR0aW5ncyh2LmR0b3ApO1xuICAgICAgICBGUC50ZXN0LnRvcCA9IC12LmR0b3AgKyAncHgnO1xuICAgICAgICBjbGVhclRpbWVvdXQoZ19hZnRlclNlY3Rpb25Mb2Fkc0lkKTtcbiAgICAgICAgc2Nyb2xsVG8oc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucywgZ2V0T3B0aW9ucygpLnNjcm9sbGluZ1NwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGdldE9wdGlvbnMoKS5zY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIC8qIEhhY2shXG4gICAgICAgICAgICBUaGUgdGltZW91dCBwcmV2ZW50cyBzZXR0aW5nIHRoZSBtb3N0IGRvbWluYW50IHNlY3Rpb24gaW4gdGhlIHZpZXdwb3J0IGFzIFwiYWN0aXZlXCIgd2hlbiB0aGUgdXNlclxuICAgICAgICAgICAgc2Nyb2xsZWQgdG8gYSBzbWFsbGVyIHNlY3Rpb24gYnkgdXNpbmcgdGhlIG1vdXNld2hlZWwgKGF1dG8gc2Nyb2xsaW5nKSByYXRoZXIgdGhhbiBkcmFnaW5nIHRoZSBzY3JvbGwgYmFyLlxuICAgICAgICAgICAgIFdoZW4gdXNpbmcgc2Nyb2xsQmFyOnRydWUgSXQgc2VlbXMgbGlrZSB0aGUgc2Nyb2xsIGV2ZW50cyBzdGlsbCBnZXR0aW5nIHByb3BhZ2F0ZWQgZXZlbiBhZnRlciB0aGUgc2Nyb2xsaW5nIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ19hZnRlclNlY3Rpb25Mb2Fkc0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzJDEodik7XG4gICAgICAgICAgICB9LCAzMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzJDEodik7IC8vZGlzYWJsaW5nIGNhblNjcm9sbCB3aGVuIHVzaW5nIGZhc3RTcGVlZFxuXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGNhblNjcm9sbDogIWlzRmFzdFNwZWVkIHx8IEZQLnRlc3QuaXNUZXN0aW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBlbmFibGluZyBjYW5TY3JvbGwgYWZ0ZXIgdGhlIG1pbmltdW0gdHJhbnNpdGlvbiBsYXBzXG5cblxuICAgICAgaWYgKGlzRmFzdFNwZWVkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChnX3RyYW5zaXRpb25MYXBzZUlkKTtcbiAgICAgICAgZ190cmFuc2l0aW9uTGFwc2VJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhblNjcm9sbDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0cmFuc2l0aW9uTGFwc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIEFjdGlvbnMgdG8gZG8gb25jZSB0aGUgc2VjdGlvbiBpcyBsb2FkZWQuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gYWZ0ZXJTZWN0aW9uTG9hZHMkMSh2KSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGlzQmV5b25kRnVsbHBhZ2U6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlcih2KTsgLy9jYWxsYmFjayAoYWZ0ZXJMb2FkKSBpZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihnZXRPcHRpb25zKCkuYWZ0ZXJMb2FkKSAmJiAhdi5sb2NhbElzUmVzaXppbmcpIHtcbiAgICAgICAgZmlyZUNhbGxiYWNrKCdhZnRlckxvYWQnLCB2KTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlU3RhdGUoKTtcblxuICAgICAgaWYgKCF2LmxvY2FsSXNSZXNpemluZykge1xuICAgICAgICBwbGF5TWVkaWEodi5lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYWRkQ2xhc3Modi5lbGVtZW50LCBDT01QTEVURUxZKTtcbiAgICAgIHJlbW92ZUNsYXNzKHNpYmxpbmdzKHYuZWxlbWVudCksIENPTVBMRVRFTFkpO1xuICAgICAgbGF6eUxvYWRPdGhlcnMoKTtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgY2FuU2Nyb2xsOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5hZnRlclNlY3Rpb25Mb2Fkcywgdik7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHYuY2FsbGJhY2spKSB7XG4gICAgICAgIHYuY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBGUC5zZXRGaXRUb1NlY3Rpb24gPSBzZXRGaXRUb1NlY3Rpb247XG4gICAgRlAuZml0VG9TZWN0aW9uID0gZml0VG9TZWN0aW9uO1xuICAgIC8qKlxuICAgICogU2V0cyBmaXRUb1NlY3Rpb25cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2V0Rml0VG9TZWN0aW9uKHZhbHVlLCB0eXBlKSB7XG4gICAgICBzZXRWYXJpYWJsZVN0YXRlKCdmaXRUb1NlY3Rpb24nLCB2YWx1ZSwgdHlwZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICogRml0cyB0aGUgc2l0ZSB0byB0aGUgbmVhcmVzdCBhY3RpdmUgc2VjdGlvblxuICAgICovXG5cbiAgICBmdW5jdGlvbiBmaXRUb1NlY3Rpb24oKSB7XG4gICAgICAvL2NoZWNraW5nIGZpdFRvU2VjdGlvbiBhZ2FpbiBpbiBjYXNlIGl0IHdhcyBzZXQgdG8gZmFsc2UgYmVmb3JlIHRoZSB0aW1lb3V0IGRlbGF5XG4gICAgICBpZiAoc3RhdGUuY2FuU2Nyb2xsKSB7XG4gICAgICAgIC8vYWxsb3dzIHRvIHNjcm9sbCB0byBhbiBhY3RpdmUgc2VjdGlvbiBhbmRcbiAgICAgICAgLy9pZiB0aGUgc2VjdGlvbiBpcyBhbHJlYWR5IGFjdGl2ZSwgd2UgcHJldmVudCBmaXJpbmcgY2FsbGJhY2tzXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBpc1Jlc2l6aW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBzY3JvbGxQYWdlKHN0YXRlLmFjdGl2ZVNlY3Rpb24pO1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgaXNSZXNpemluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRlAuc2V0UmVzcG9uc2l2ZSA9IHNldFJlc3BvbnNpdmU7XG4gICAgLyoqXG4gICAgKiBDaGVja3MgaWYgdGhlIHNpdGUgbmVlZHMgdG8gZ2V0IHJlc3BvbnNpdmUgYW5kIGRpc2FibGVzIGF1dG9TY3JvbGxpbmcgaWYgc28uXG4gICAgKiBBIGNsYXNzIGBmcC1yZXNwb25zaXZlYCBpcyBhZGRlZCB0byB0aGUgcGx1Z2luJ3MgY29udGFpbmVyIGluIGNhc2UgdGhlIHVzZXIgd2FudHMgdG8gdXNlIGl0IGZvciBoaXMgb3duIHJlc3BvbnNpdmUgQ1NTLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiByZXNwb25zaXZlKCkge1xuICAgICAgdmFyIHdpZHRoTGltaXQgPSBnZXRPcHRpb25zKCkucmVzcG9uc2l2ZSB8fCBnZXRPcHRpb25zKCkucmVzcG9uc2l2ZVdpZHRoOyAvL2JhY2t3YXJkcyBjb21wYXRpYmxpdHlcblxuICAgICAgdmFyIGhlaWdodExpbWl0ID0gZ2V0T3B0aW9ucygpLnJlc3BvbnNpdmVIZWlnaHQ7IC8vb25seSBjYWxjdWxhdGluZyB3aGF0IHdlIG5lZWQuIFJlbWVtYmVyIGl0cyBjYWxsZWQgb24gdGhlIHJlc2l6ZSBldmVudC5cblxuICAgICAgdmFyIGlzQnJlYWtpbmdQb2ludFdpZHRoID0gd2lkdGhMaW1pdCAmJiB3aW4uaW5uZXJXaWR0aCA8IHdpZHRoTGltaXQ7XG4gICAgICB2YXIgaXNCcmVha2luZ1BvaW50SGVpZ2h0ID0gaGVpZ2h0TGltaXQgJiYgd2luLmlubmVySGVpZ2h0IDwgaGVpZ2h0TGltaXQ7XG5cbiAgICAgIGlmICh3aWR0aExpbWl0ICYmIGhlaWdodExpbWl0KSB7XG4gICAgICAgIHNldFJlc3BvbnNpdmUoaXNCcmVha2luZ1BvaW50V2lkdGggfHwgaXNCcmVha2luZ1BvaW50SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAod2lkdGhMaW1pdCkge1xuICAgICAgICBzZXRSZXNwb25zaXZlKGlzQnJlYWtpbmdQb2ludFdpZHRoKTtcbiAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0TGltaXQpIHtcbiAgICAgICAgc2V0UmVzcG9uc2l2ZShpc0JyZWFraW5nUG9pbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIFR1cm5zIGZ1bGxQYWdlLmpzIHRvIG5vcm1hbCBzY3JvbGxpbmcgbW9kZSB3aGVuIHRoZSB2aWV3cG9ydCBgd2lkdGhgIG9yIGBoZWlnaHRgXG4gICAgKiBhcmUgc21hbGxlciB0aGFuIHRoZSBzZXQgbGltaXQgdmFsdWVzLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzZXRSZXNwb25zaXZlKGFjdGl2ZSkge1xuICAgICAgdmFyIGlzUmVzcG9uc2l2ZSA9IGlzUmVzcG9uc2l2ZU1vZGUoKTtcblxuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBpZiAoIWlzUmVzcG9uc2l2ZSkge1xuICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xuICAgICAgICAgIHNldEZpdFRvU2VjdGlvbihmYWxzZSwgJ2ludGVybmFsJyk7XG4gICAgICAgICAgaGlkZSgkKFNFQ1RJT05fTkFWX1NFTCkpO1xuICAgICAgICAgIGFkZENsYXNzKCRib2R5LCBSRVNQT05TSVZFKTtcblxuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGdldE9wdGlvbnMoKS5hZnRlclJlc3BvbnNpdmUpKSB7XG4gICAgICAgICAgICBnZXRPcHRpb25zKCkuYWZ0ZXJSZXNwb25zaXZlLmNhbGwoZ2V0Q29udGFpbmVyKCksIGFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUmVzcG9uc2l2ZSkge1xuICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nKGdldE9yaWdpbmFscygpLmF1dG9TY3JvbGxpbmcsICdpbnRlcm5hbCcpO1xuICAgICAgICBzZXRGaXRUb1NlY3Rpb24oZ2V0T3JpZ2luYWxzKCkuYXV0b1Njcm9sbGluZywgJ2ludGVybmFsJyk7XG4gICAgICAgIHNob3coJChTRUNUSU9OX05BVl9TRUwpKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJGJvZHksIFJFU1BPTlNJVkUpO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGdldE9wdGlvbnMoKS5hZnRlclJlc3BvbnNpdmUpKSB7XG4gICAgICAgICAgZ2V0T3B0aW9ucygpLmFmdGVyUmVzcG9uc2l2ZS5jYWxsKGdldENvbnRhaW5lcigpLCBhY3RpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGZ1bGxwYWdlLmpzIGlzIGluIHJlc3BvbnNpdmUgbW9kZSBvciBub3QuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gaXNSZXNwb25zaXZlTW9kZSgpIHtcbiAgICAgIHJldHVybiBoYXNDbGFzcygkYm9keSwgUkVTUE9OU0lWRSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFibGVDbGFzcyhlbGVtZW50KSB7XG4gICAgICBpZiAoIWdldE9wdGlvbnMoKS52ZXJ0aWNhbENlbnRlcmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gT3ZlcmZsb3dpbmcgc2VjdGlvbnMgd2hlbiBzY3JvbGxPdmVyZmxvdyBpcyBkaXNhYmxlZCB3aWxsIGJlIGF1dG9IZWlnaHRcbiAgICAgIC8vIGFuZCB3b24ndCByZXF1aXJlIHZlcnRpY2FsIGFsaWdtZW50XG5cblxuICAgICAgaWYgKCFnZXRPcHRpb25zKCkuc2Nyb2xsT3ZlcmZsb3cgJiYgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNob3VsZEJlU2Nyb2xsYWJsZShlbGVtZW50Lml0ZW0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNTY3JvbGxhYmxlKGVsZW1lbnQpKSB7XG4gICAgICAgIC8vSW4gY2FzZSB3ZSBhcmUgc3R5bGluZyBmb3IgdGhlIDJuZCB0aW1lIGFzIGluIHdpdGggcmVwb25zaXZlU2xpZGVzXG4gICAgICAgIGlmICghaGFzQ2xhc3MoZWxlbWVudC5pdGVtLCBUQUJMRSkpIHtcbiAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50Lml0ZW0sIFRBQkxFKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdGFydGluZ1NlY3Rpb24gPSBudWxsO1xuICAgIEZQLmdldEFjdGl2ZVNlY3Rpb24gPSBnZXRBY3RpdmVTZWN0aW9uO1xuICAgIGZ1bmN0aW9uIGdldFN0YXJ0aW5nU2VjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGFydGluZ1NlY3Rpb247XG4gICAgfVxuICAgIC8qKlxuICAgICogU3R5bGluZyB2ZXJ0aWNhbCBzZWN0aW9uc1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBzdHlsZVNlY3Rpb24oc2VjdGlvbikge1xuICAgICAgdmFyIHNlY3Rpb25FbGVtID0gc2VjdGlvbi5pdGVtO1xuICAgICAgdmFyIGhhc1NsaWRlcyA9IHNlY3Rpb24uYWxsU2xpZGVzSXRlbXMubGVuZ3RoO1xuICAgICAgdmFyIGluZGV4ID0gc2VjdGlvbi5pbmRleCgpOyAvL2lmIG5vIGFjdGl2ZSBzZWN0aW9uIGlzIGRlZmluZWQsIHRoZSAxc3Qgb25lIHdpbGwgYmUgdGhlIGRlZmF1bHQgb25lXG5cbiAgICAgIGlmICghZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uICYmIHNlY3Rpb24uaXNWaXNpYmxlKSB7XG4gICAgICAgIGFkZENsYXNzKHNlY3Rpb25FbGVtLCBBQ1RJVkUpO1xuICAgICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgICBzdGFydGluZ1NlY3Rpb24gPSBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaXRlbTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5wYWRkaW5nVG9wKSB7XG4gICAgICAgIGNzcyhzZWN0aW9uRWxlbSwge1xuICAgICAgICAgICdwYWRkaW5nLXRvcCc6IGdldE9wdGlvbnMoKS5wYWRkaW5nVG9wXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLnBhZGRpbmdCb3R0b20pIHtcbiAgICAgICAgY3NzKHNlY3Rpb25FbGVtLCB7XG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogZ2V0T3B0aW9ucygpLnBhZGRpbmdCb3R0b21cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZ2V0T3B0aW9ucygpLnNlY3Rpb25zQ29sb3JbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjc3Moc2VjdGlvbkVsZW0sIHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGdldE9wdGlvbnMoKS5zZWN0aW9uc0NvbG9yW2luZGV4XVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBnZXRPcHRpb25zKCkuYW5jaG9yc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlY3Rpb25FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InLCBzZWN0aW9uLmFuY2hvcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFzU2xpZGVzKSB7XG4gICAgICAgIGFkZFRhYmxlQ2xhc3Moc2VjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgYWN0aXZlIHNlY3Rpb24uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVNlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlY3Rpb25Gcm9tUGFuZWwocGFuZWwpIHtcbiAgICAgIHJldHVybiBwYW5lbC5pc1NlY3Rpb24gPyBwYW5lbCA6IHBhbmVsLnBhcmVudDtcbiAgICB9XG5cbiAgICB2YXIgZ19mb2N1c1Njcm9sbGFibGVJZDtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLmJpbmRFdmVudHMsIGJpbmRFdmVudHMkYik7XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzJGIoKSB7XG4gICAgICAvLyBXZSBjYW4ndCBmb2N1cyBzY3JvbGxPdmVyZmxvdyBiZWZvcmUgc2Nyb2xsaW5nXG4gICAgICAvLyB0byB0aGUgYW5jaG9yIChpZiB3ZSBuZWVkIHRvKVxuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkFmdGVyUmVuZGVyTm9BbmNob3IsIGFmdGVyUmVuZGVyKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMub25MZWF2ZSwgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLm9uTGVhdmUpO1xuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vblNsaWRlTGVhdmUsIHNjcm9sbE92ZXJmbG93SGFuZGxlci5vbkxlYXZlKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYWZ0ZXJTbGlkZUxvYWRzLCBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuYWZ0ZXJMb2FkKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYWZ0ZXJTZWN0aW9uTG9hZHMsIHNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlckxvYWQpO1xuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkRlc3Ryb3ksIG9uRGVzdHJveSQ3KTtcbiAgICAgIGRvY0FkZEV2ZW50KCdrZXl1cCcsIHNjcm9sbE92ZXJmbG93SGFuZGxlci5rZXlVcEhhbmRsZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFmdGVyUmVuZGVyKCkge1xuICAgICAgaWYgKGdldE9wdGlvbnMoKS5zY3JvbGxPdmVyZmxvdyAmJiAhZ2V0T3B0aW9ucygpLnNjcm9sbEJhcikge1xuICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIubWFrZVNjcm9sbGFibGUoKTtcbiAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmZvY3VzU2Nyb2xsYWJsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVzdHJveSQ3KCkge1xuICAgICAgRXZlbnRFbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50cy5vbkFmdGVyUmVuZGVyTm9BbmNob3IsIGFmdGVyUmVuZGVyKTtcbiAgICAgIGRvY1JlbW92ZUV2ZW50KCdrZXl1cCcsIHNjcm9sbE92ZXJmbG93SGFuZGxlci5rZXlVcEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHZhciBzY3JvbGxPdmVyZmxvd0hhbmRsZXIgPSB7XG4gICAgICBmb2N1c2VkRWxlbTogbnVsbCxcbiAgICAgIHNob3VsZEZvY3VzU2Nyb2xsYWJsZTogdHJ1ZSxcbiAgICAgIGlzSW5uZXJTY3JvbGxBbGxvd2VkOiB0cnVlLFxuICAgICAgdGltZUJlZm9yZVJlYWNoaW5nTGltaXQ6IG51bGwsXG4gICAgICB0aW1lTGFzdFNjcm9sbDogbnVsbCxcbiAgICAgIHByZXZlbnRTY3JvbGxXaXRoTW91c2VXaGVlbDogZnVuY3Rpb24gcHJldmVudFNjcm9sbFdpdGhNb3VzZVdoZWVsKGUpIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5jYW5TY3JvbGwpIHtcbiAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmV2ZW50U2Nyb2xsV2l0aEtleWJvYXJkOiBmdW5jdGlvbiBwcmV2ZW50U2Nyb2xsV2l0aEtleWJvYXJkKGUpIHtcbiAgICAgICAgaWYgKCFpc0luc2lkZUlucHV0KCkgJiYgZ2V0T3B0aW9ucygpLmtleWJvYXJkU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgdmFyIGRpcmVjdGlvbktleXMgPSBbMzgsIDMzLCAzMiwgNDAsIDM0LCAzNiwgMzVdO1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbktleXMuaW5kZXhPZihlLmtleUNvZGUpID4gLTEgJiYgIXNjcm9sbE92ZXJmbG93SGFuZGxlci5pc0lubmVyU2Nyb2xsQWxsb3dlZCkge1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAga2V5VXBIYW5kbGVyOiBmdW5jdGlvbiBrZXlVcEhhbmRsZXIoKSB7XG4gICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci5zaG91bGRGb2N1c1Njcm9sbGFibGUgPSBzdGF0ZS5jYW5TY3JvbGw7XG4gICAgICB9LFxuICAgICAgLy8gTGVhdmluZyBzZWN0aW9ucyBvciBzbGlkZXNcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uIG9uTGVhdmUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChnX2ZvY3VzU2Nyb2xsYWJsZUlkKTtcbiAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmlzSW5uZXJTY3JvbGxBbGxvd2VkID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgLy8gTG9hZGluZyBzZWN0aW9ucyBvciBzbGlkZXNcbiAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24gYWZ0ZXJMb2FkKCkge1xuICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNJbm5lclNjcm9sbEFsbG93ZWQgPSBmYWxzZTsgLy8gRGVsYXlpbmcgaXQgdG8gYXZvaWQgaXNzdWVzIG9uIFNhZmFyaSB3aGVuIGZvY3VzaW5nIGVsZW1lbnRzICM0NDg0ICYgIzQ0OTNcblxuICAgICAgICBjbGVhclRpbWVvdXQoZ19mb2N1c1Njcm9sbGFibGVJZCk7XG4gICAgICAgIGdfZm9jdXNTY3JvbGxhYmxlSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2hvdWxkRm9jdXNTY3JvbGxhYmxlID0gc3RhdGUuY2FuU2Nyb2xsO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSxcbiAgICAgIC8vIFVuZm9jdXNpbmcgdGhlIHNjcm9sbGFibGUgZWxlbWVudCBmcm9tIHRoZSBvcmdpbiBzZWN0aW9uL3NsaWRlXG4gICAgICB1bmZvY3VzU2Nyb2xsYWJsZTogZnVuY3Rpb24gdW5mb2N1c1Njcm9sbGFibGUoKSB7XG4gICAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5mb2N1c2VkRWxlbSkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtLmJsdXIoKTtcbiAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNJbm5lclNjcm9sbEFsbG93ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvY3VzU2Nyb2xsYWJsZTogZnVuY3Rpb24gZm9jdXNTY3JvbGxhYmxlKCkge1xuICAgICAgICBpZiAoIWdldE9wdGlvbnMoKS5zY3JvbGxPdmVyZmxvdyB8fCAhc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNob3VsZEZvY3VzU2Nyb2xsYWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci51bmZvY3VzU2Nyb2xsYWJsZSgpO1xuICAgICAgICB2YXIgc2Nyb2xsYWJsZUl0ZW0gPSBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuZ2V0U2Nyb2xsYWJsZUl0ZW0oZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW0pOyAvLyBPbiBkZXNrdG9wIHdlIGZvY3VzIHRoZSBzY3JvbGxhYmxlIHRvIGJlIGFibGUgdG8gdXNlIHRoZSBtb3VzZSB3aGVlbFxuICAgICAgICAvLyBXZSBhdm9pZCBpdCBvbiBtb2JpbGUgZHVlIHRvIGEgYnVnIGluIGlPUyBTYWZhcmlcblxuICAgICAgICBpZiAoc2Nyb2xsYWJsZUl0ZW0gJiYgIWlzVG91Y2hEZXZpY2UgJiYgIWlzVG91Y2gpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtID0gc2Nyb2xsYWJsZUl0ZW07IC8vIEZvcmNpbmcgdGhlIGZvY3VzIG9uIHRoZSBuZXh0IHBhaW50IFxuICAgICAgICAgIC8vIHRvIGF2b2lkIGlzc3VlICM0NDg0ICYgIzQ0OTMgb24gU2FmYXJpXG5cbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2Nyb2xsYWJsZUl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci5pc0lubmVyU2Nyb2xsQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2hvdWxkRm9jdXNTY3JvbGxhYmxlID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgbWFrZVNjcm9sbGFibGU6IGZ1bmN0aW9uIG1ha2VTY3JvbGxhYmxlKCkge1xuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLnNjcm9sbE92ZXJmbG93TWFjU3R5bGUgJiYgIWlzTWFjRGV2aWNlKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJGJvZHksICdmcC1zY3JvbGwtbWFjJyk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRTdGF0ZSgpLnBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGlmIChlbC5zbGlkZXMgJiYgZWwuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChoYXNDbGFzcyhlbC5pdGVtLCBBVVRPX0hFSUdIVF9SRVNQT05TSVZFKSAmJiBpc1Jlc3BvbnNpdmVNb2RlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRTbGlkZU9yU2VjdGlvbihlbC5pdGVtKTtcbiAgICAgICAgICAgIHZhciBzaG91bGRCZVNjcm9sbGFibGUgPSBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2hvdWxkQmVTY3JvbGxhYmxlKGVsLml0ZW0pO1xuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBnZXRTZWN0aW9uRnJvbVBhbmVsKGVsKTtcblxuICAgICAgICAgICAgaWYgKGlzSUUxMSkge1xuICAgICAgICAgICAgICB2YXIgdG9nZ2xlQWN0aW9uID0gc2hvdWxkQmVTY3JvbGxhYmxlID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgICAgICAgIHV0aWxzW3RvZ2dsZUFjdGlvbl0oc2VjdGlvbi5pdGVtLCBJU19PVkVSRkxPVyk7XG4gICAgICAgICAgICAgIHV0aWxzW3RvZ2dsZUFjdGlvbl0oZWwuaXRlbSwgSVNfT1ZFUkZMT1cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3Moc2VjdGlvbi5pdGVtLCBJU19PVkVSRkxPVyk7XG4gICAgICAgICAgICAgIGFkZENsYXNzKGVsLml0ZW0sIElTX09WRVJGTE9XKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFlbC5oYXNTY3JvbGwpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmNyZWF0ZVdyYXBwZXIoaXRlbSk7XG4gICAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci5iaW5kRXZlbnRzKGl0ZW0pO1xuICAgICAgICAgICAgfSAvLyB1cGRhdGluZyB0aGUgc3RhdGUgbm93IGluIGNhc2UgXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGV4ZWN1dGVkIG9uIHBhZ2UgbG9hZCAoYWZ0ZXIgaW1hZ2VzIGxvYWQpXG5cblxuICAgICAgICAgICAgZWwuaGFzU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGJpbmRFdmVudHM6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaXRlbSkge1xuICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuZ2V0U2Nyb2xsYWJsZUl0ZW0oaXRlbSkuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLm9uUGFuZWxTY3JvbGwpO1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnByZXZlbnRTY3JvbGxXaXRoTW91c2VXaGVlbCwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzY3JvbGxPdmVyZmxvd0hhbmRsZXIucHJldmVudFNjcm9sbFdpdGhLZXlib2FyZCwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZVdyYXBwZXI6IGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXIoaXRlbSkge1xuICAgICAgICB2YXIgb3ZlcmZsb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG92ZXJmbG93V3JhcHBlci5jbGFzc05hbWUgPSBPVkVSRkxPVztcbiAgICAgICAgd3JhcElubmVyKGl0ZW0sIG92ZXJmbG93V3JhcHBlcik7XG4gICAgICAgIG92ZXJmbG93V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB9LFxuICAgICAgZGVzdHJveVdyYXBwZXI6IGZ1bmN0aW9uIGRlc3Ryb3lXcmFwcGVyKGl0ZW0pIHtcbiAgICAgICAgdmFyIG92ZXJmbG93V3JhcHBlciA9ICQoT1ZFUkZMT1dfU0VMLCBpdGVtKVswXTtcblxuICAgICAgICBpZiAob3ZlcmZsb3dXcmFwcGVyKSB7XG4gICAgICAgICAgdW53cmFwKG92ZXJmbG93V3JhcHBlcik7XG4gICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRTY3JvbGxhYmxlSXRlbTogZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUl0ZW0oc2VjdGlvbkl0ZW0pIHtcbiAgICAgICAgdmFyIHBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb24oc2VjdGlvbkl0ZW0pO1xuICAgICAgICByZXR1cm4gJChPVkVSRkxPV19TRUwsIHBhbmVsKVswXSB8fCBwYW5lbDtcbiAgICAgIH0sXG4gICAgICBoYXNTY3JvbGw6IGZ1bmN0aW9uIGhhc1Njcm9sbChwYW5lbEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGhhc0NsYXNzKHBhbmVsSXRlbSwgT1ZFUkZMT1cpIHx8ICQoT1ZFUkZMT1dfU0VMLCBwYW5lbEl0ZW0pWzBdICE9IG51bGw7XG4gICAgICB9LFxuICAgICAgaXNTY3JvbGxhYmxlOiBmdW5jdGlvbiBpc1Njcm9sbGFibGUocGFuZWwpIHtcbiAgICAgICAgcmV0dXJuIHBhbmVsLmlzU2VjdGlvbiAmJiBwYW5lbC5hY3RpdmVTbGlkZSA/IHBhbmVsLmFjdGl2ZVNsaWRlLmhhc1Njcm9sbCA6IHBhbmVsLmhhc1Njcm9sbDtcbiAgICAgIH0sXG4gICAgICBzaG91bGRCZVNjcm9sbGFibGU6IGZ1bmN0aW9uIHNob3VsZEJlU2Nyb2xsYWJsZShpdGVtKSB7XG4gICAgICAgIHZhciBzY3JvbGxhYmxlID0gc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmdldFNjcm9sbGFibGVJdGVtKGl0ZW0pO1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZS5zY3JvbGxIZWlnaHQgPiB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgICB9LFxuICAgICAgaXNTY3JvbGxlZDogZnVuY3Rpb24gaXNTY3JvbGxlZChkaXJlY3Rpb24sIGVsKSB7XG4gICAgICAgIGlmICghc3RhdGUuY2FuU2Nyb2xsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IC8vIHdlIHdvbid0IGFsbG93IHNjcm9sbG92ZXJmbG93IG9uIHNjcm9sbEJhcjp0cnVlXG5cblxuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLnNjcm9sbEJhcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjcm9sbGFibGVJdGVtID0gc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmdldFNjcm9sbGFibGVJdGVtKGVsKTtcblxuICAgICAgICBpZiAoIWdldE9wdGlvbnMoKS5zY3JvbGxPdmVyZmxvdyB8fCAhaGFzQ2xhc3Moc2Nyb2xsYWJsZUl0ZW0sIE9WRVJGTE9XKSB8fCAvLyBDaGVja2luZyB0aGUgc2VjdGlvbiBmaXJzdCBcbiAgICAgICAgLy8gSW4gY2FzZSB0aGV5IGFwcGx5IHRvIGJvdGggc2VjdGlvbiArIHNsaWRlICM0NTA1XG4gICAgICAgIGhhc0NsYXNzKGVsLCAnZnAtbm9zY3JvbGwnKSB8fCAvLyBDaGVja2luZyB0aGUgc2xpZGUgKGluIGNhc2UgaXQgaGFzKVxuICAgICAgICBoYXNDbGFzcyhnZXRTbGlkZU9yU2VjdGlvbihlbCksICdmcC1ub3Njcm9sbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gaWUxMSB3cm9uZ2x5IGNhbGN1bGF0ZXMgc2Nyb2xsSGVpZ2h0IHdoZW4gdXNpbmcgdGhlIENTUyBzdHlsZVxuICAgICAgICAvLyBvdmVyZmxvdzogYXV0byAgIEl0IGFkZHMgMSBtb3JlIHBpeGVsIGNvbXBhcmVkIHRvIG9mZnNldEhlaWdodFxuXG5cbiAgICAgICAgdmFyIGllMTFvZmZzZXQgPSBpc0lFMTEgPyAxIDogMDtcbiAgICAgICAgdmFyIHBvc2l0aW9uWSA9IHNjcm9sbGFibGVJdGVtLnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIGlzVG9wUmVhY2hlZCA9IGRpcmVjdGlvbiA9PT0gJ3VwJyAmJiBwb3NpdGlvblkgPD0gMDtcbiAgICAgICAgdmFyIGlzQm90dG9tUmVhY2hlZCA9IGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHNjcm9sbGFibGVJdGVtLnNjcm9sbEhlaWdodCA8PSBNYXRoLmNlaWwoc2Nyb2xsYWJsZUl0ZW0ub2Zmc2V0SGVpZ2h0ICsgcG9zaXRpb25ZKSArIGllMTFvZmZzZXQ7XG4gICAgICAgIHZhciBpc1Njcm9sbGVkID0gaXNUb3BSZWFjaGVkIHx8IGlzQm90dG9tUmVhY2hlZDtcblxuICAgICAgICBpZiAoIWlzU2Nyb2xsZWQpIHtcbiAgICAgICAgICB0aGlzLnRpbWVCZWZvcmVSZWFjaGluZ0xpbWl0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNTY3JvbGxlZDtcbiAgICAgIH0sXG4gICAgICBzaG91bGRNb3ZlUGFnZTogZnVuY3Rpb24gc2hvdWxkTW92ZVBhZ2UoKSB7XG4gICAgICAgIHRoaXMudGltZUxhc3RTY3JvbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWVEaWZmID0gdGhpcy50aW1lTGFzdFNjcm9sbCAtIHNjcm9sbE92ZXJmbG93SGFuZGxlci50aW1lQmVmb3JlUmVhY2hpbmdMaW1pdDtcbiAgICAgICAgdmFyIGlzVXNpbmdUb3VjaCA9IGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaDtcbiAgICAgICAgdmFyIGlzR3JhYmJpbmcgPSBpc1VzaW5nVG91Y2ggJiYgc3RhdGUuaXNHcmFiYmluZztcbiAgICAgICAgdmFyIGlzTm90Rmlyc3RUaW1lUmVhY2hpbmdMaW1pdCA9IHN0YXRlLmlzVXNpbmdXaGVlbCAmJiB0aW1lRGlmZiA+IDYwMDtcbiAgICAgICAgcmV0dXJuIGlzR3JhYmJpbmcgJiYgdGltZURpZmYgPiA0MDAgfHwgaXNOb3RGaXJzdFRpbWVSZWFjaGluZ0xpbWl0O1xuICAgICAgfSxcbiAgICAgIG9uUGFuZWxTY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByZXZQb3NpdGlvbiA9IDA7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSBlLnRhcmdldC5zY3JvbGxUb3A7XG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHN0YXRlLnRvdWNoRGlyZWN0aW9uICE9PSAnbm9uZScgPyBzdGF0ZS50b3VjaERpcmVjdGlvbiA6IHByZXZQb3NpdGlvbiA8IGN1cnJlbnRQb3NpdGlvbiA/ICdkb3duJyA6ICd1cCc7XG4gICAgICAgICAgcHJldlBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZ2V0T3B0aW9ucygpLm9uU2Nyb2xsT3ZlcmZsb3cpKSB7XG4gICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ29uU2Nyb2xsT3ZlcmZsb3cnLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBjdXJyZW50UG9zaXRpb24sXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaGFzQ2xhc3MoZS50YXJnZXQsIE9WRVJGTE9XKSAmJiBzdGF0ZS5jYW5TY3JvbGwpIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNTY3JvbGxlZChkaXJlY3Rpb24sIGUudGFyZ2V0KSAmJiBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2hvdWxkTW92ZVBhZ2UoKSkge1xuICAgICAgICAgICAgICAvLyBDaGVja2luZyBhZ2FpbiBpZiB3ZSBoYXZlIGEgc2Nyb2xsYWJsZSBjb250ZW50XG4gICAgICAgICAgICAgIC8vIFRvIGF2b2lkIGlzc3VlcyBsaWtlICM0NDc5IHdoZXJlIHRoZSBzY3JvbGwgZXZlbnQgZ2V0c1xuICAgICAgICAgICAgICAvLyB0cmlnZ2VyZWQgYWZ0ZXIgcmVtb3ZpbmcvaGlkZGluZyBjb250ZW50IGlmIHRoaXMgd2FzIHNjcm9sbGVkXG4gICAgICAgICAgICAgIGlmIChzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2hvdWxkQmVTY3JvbGxhYmxlKGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5pdGVtKSkge1xuICAgICAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5vblNjcm9sbE92ZXJmbG93U2Nyb2xsZWQsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KClcbiAgICB9O1xuXG4gICAgdmFyIGdfYWZ0ZXJTbGlkZUxvYWRzSWQ7XG4gICAgRlAubGFuZHNjYXBlU2Nyb2xsID0gbGFuZHNjYXBlU2Nyb2xsO1xuICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYmluZEV2ZW50cywgYmluZEV2ZW50cyRhKTtcblxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMkYSgpIHtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMub25QZXJmb3JtTW92ZW1lbnQsIG9uUGVyZm9ybU1vdmVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBlcmZvcm1Nb3ZlbWVudCgpIHtcbiAgICAgIGNsZWFyVGltZW91dChnX2FmdGVyU2xpZGVMb2Fkc0lkKTtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgc2xpZGVNb3Zpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBTY3JvbGxzIGhvcml6b250YWwgc2xpZGVycy5cbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBkZXN0aW55LCBkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBzZWN0aW9uRWxlbSA9IGNsb3Nlc3Qoc2xpZGVzLCBTRUNUSU9OX1NFTCk7XG4gICAgICB2YXIgc2VjdGlvbiA9IGdldFN0YXRlKCkuc2VjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWN0aW9uLml0ZW0gPT0gc2VjdGlvbkVsZW07XG4gICAgICB9KVswXTtcbiAgICAgIHZhciBzbGlkZSA9IHNlY3Rpb24uc2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlLml0ZW0gPT0gZGVzdGlueTtcbiAgICAgIH0pWzBdO1xuICAgICAgdmFyIHYgPSB7XG4gICAgICAgIFwic2xpZGVzXCI6IHNsaWRlcyxcbiAgICAgICAgXCJkZXN0aW55XCI6IGRlc3RpbnksXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IGRpcmVjdGlvbixcbiAgICAgICAgXCJkZXN0aW55UG9zXCI6IHtcbiAgICAgICAgICBcImxlZnRcIjogZGVzdGlueS5vZmZzZXRMZWZ0XG4gICAgICAgIH0sXG4gICAgICAgIFwic2xpZGVJbmRleFwiOiBzbGlkZS5pbmRleCgpLFxuICAgICAgICBcInNlY3Rpb25cIjogc2VjdGlvbkVsZW0sXG4gICAgICAgIFwic2VjdGlvbkluZGV4XCI6IHNlY3Rpb24uaW5kZXgoKSxcbiAgICAgICAgXCJhbmNob3JMaW5rXCI6IHNlY3Rpb24uYW5jaG9yLFxuICAgICAgICBcInNsaWRlc05hdlwiOiAkKFNMSURFU19OQVZfU0VMLCBzZWN0aW9uRWxlbSlbMF0sXG4gICAgICAgIFwic2xpZGVBbmNob3JcIjogc2xpZGUuYW5jaG9yLFxuICAgICAgICBcInByZXZTbGlkZVwiOiBzZWN0aW9uLmFjdGl2ZVNsaWRlLml0ZW0sXG4gICAgICAgIFwicHJldlNsaWRlSW5kZXhcIjogc2VjdGlvbi5hY3RpdmVTbGlkZS5pbmRleCgpLFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcInNlY3Rpb25cIjogc2VjdGlvbixcbiAgICAgICAgICBcIm9yaWdpblwiOiBzZWN0aW9uLmFjdGl2ZVNsaWRlLFxuICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogc2xpZGVcbiAgICAgICAgfSxcbiAgICAgICAgLy9jYWNoaW5nIHRoZSB2YWx1ZSBvZiBpc1Jlc2l6aW5nIGF0IHRoZSBtb21tZW50IHRoZSBmdW5jdGlvbiBpcyBjYWxsZWRcbiAgICAgICAgLy9iZWNhdXNlIGl0IHdpbGwgYmUgY2hlY2tlZCBsYXRlciBpbnNpZGUgYSBzZXRUaW1lb3V0IGFuZCB0aGUgdmFsdWUgbWlnaHQgY2hhbmdlXG4gICAgICAgIFwibG9jYWxJc1Jlc2l6aW5nXCI6IHN0YXRlLmlzUmVzaXppbmdcbiAgICAgIH07XG4gICAgICB2LnhNb3ZlbWVudCA9IGdldFhtb3ZlbWVudCh2LnByZXZTbGlkZUluZGV4LCB2LnNsaWRlSW5kZXgpO1xuICAgICAgdi5kaXJlY3Rpb24gPSB2LmRpcmVjdGlvbiA/IHYuZGlyZWN0aW9uIDogdi54TW92ZW1lbnQ7IC8vaW1wb3J0YW50ISEgT25seSBkbyBpdCB3aGVuIG5vdCByZXNpemluZ1xuXG4gICAgICBpZiAoIXYubG9jYWxJc1Jlc2l6aW5nKSB7XG4gICAgICAgIC8vcHJldmVudGluZyBmcm9tIHNjcm9sbGluZyB0byB0aGUgbmV4dC9wcmV2IHNlY3Rpb24gd2hlbiB1c2luZyBzY3JvbGxIb3Jpem9udGFsbHlcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGNhblNjcm9sbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnZXRPcHRpb25zKCkub25TbGlkZUxlYXZlKSB7XG4gICAgICAgIC8vaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcbiAgICAgICAgaWYgKCF2LmxvY2FsSXNSZXNpemluZyAmJiB2LnhNb3ZlbWVudCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZ2V0T3B0aW9ucygpLm9uU2xpZGVMZWF2ZSkpIHtcbiAgICAgICAgICAgIGlmIChmaXJlQ2FsbGJhY2soJ29uU2xpZGVMZWF2ZScsIHYpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2xpZGVNb3Zpbmc6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFkZENsYXNzKGRlc3RpbnksIEFDVElWRSk7XG4gICAgICByZW1vdmVDbGFzcyhzaWJsaW5ncyhkZXN0aW55KSwgQUNUSVZFKTtcbiAgICAgIHVwZGF0ZVN0YXRlKCk7XG5cbiAgICAgIGlmICghdi5sb2NhbElzUmVzaXppbmcpIHtcbiAgICAgICAgc3RvcE1lZGlhKHYucHJldlNsaWRlKTtcbiAgICAgICAgbGF6eUxvYWQoZGVzdGlueSk7XG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZUNvbnRyb2xBcnJvd3Modik7IC8vb25seSBjaGFuZ2luZyB0aGUgVVJMIGlmIHRoZSBzbGlkZXMgYXJlIGluIHRoZSBjdXJyZW50IHNlY3Rpb24gKG5vdCBmb3IgcmVzaXplIHJlLWFkanVzdGluZylcblxuICAgICAgaWYgKHNlY3Rpb24uaXNBY3RpdmUgJiYgIXYubG9jYWxJc1Jlc2l6aW5nKSB7XG4gICAgICAgIHNldFBhZ2VTdGF0dXModi5zbGlkZUluZGV4LCB2LnNsaWRlQW5jaG9yLCB2LmFuY2hvckxpbmspO1xuICAgICAgfVxuXG4gICAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudHMub25TbGlkZUxlYXZlLCB2KTtcbiAgICAgIHBlcmZvcm1Ib3Jpem9udGFsTW92ZShzbGlkZXMsIHYsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFBlcmZvcm1zIHRoZSBob3Jpem9udGFsIG1vdmVtZW50LiAoQ1NTMyBvciBqUXVlcnkpXG4gICAgKlxuICAgICogQHBhcmFtIGZpcmVDYWxsYmFjayB7Qm9vbGVhbn0gLSBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGZpcmUgdGhlIGNhbGxiYWNrXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHBlcmZvcm1Ib3Jpem9udGFsTW92ZShzbGlkZXMsIHYsIGZpcmVDYWxsYmFjaykge1xuICAgICAgdmFyIGRlc3RpbnlQb3MgPSB2LmRlc3RpbnlQb3M7XG4gICAgICBhY3RpdmVTbGlkZXNOYXZpZ2F0aW9uKHYuc2xpZGVzTmF2LCB2LnNsaWRlSW5kZXgpO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBzY3JvbGxYOiBNYXRoLnJvdW5kKGRlc3RpbnlQb3MubGVmdClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLmNzczMpIHtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZTNkID0gJ3RyYW5zbGF0ZTNkKC0nICsgTWF0aC5yb3VuZChkZXN0aW55UG9zLmxlZnQpICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICBGUC50ZXN0LnRyYW5zbGF0ZTNkSFt2LnNlY3Rpb25JbmRleF0gPSB0cmFuc2xhdGUzZDtcbiAgICAgICAgY3NzKGFkZEFuaW1hdGlvbigkKFNMSURFU19DT05UQUlORVJfU0VMLCBzbGlkZXMpKSwgZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCkpO1xuICAgICAgICBjbGVhclRpbWVvdXQoZ19hZnRlclNsaWRlTG9hZHNJZCk7XG4gICAgICAgIGdfYWZ0ZXJTbGlkZUxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZmlyZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICBhZnRlclNsaWRlTG9hZHModik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBnZXRPcHRpb25zKCkuc2Nyb2xsaW5nU3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRlAudGVzdC5sZWZ0W3Yuc2VjdGlvbkluZGV4XSA9IE1hdGgucm91bmQoZGVzdGlueVBvcy5sZWZ0KTtcbiAgICAgICAgc2Nyb2xsVG8oc2xpZGVzLCBNYXRoLnJvdW5kKGRlc3RpbnlQb3MubGVmdCksIGdldE9wdGlvbnMoKS5zY3JvbGxpbmdTcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChmaXJlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFmdGVyU2xpZGVMb2Fkcyh2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIFJldHVucyBgcmlnaHRgIG9yIGBsZWZ0YCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbGluZyBtb3ZlbWVudCB0byByZWFjaCBpdHMgZGVzdGluYXRpb25cbiAgICAqIGZyb20gdGhlIGN1cnJlbnQgc2xpZGUuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZ2V0WG1vdmVtZW50KGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgICAgaWYgKGZyb21JbmRleCA9PSB0b0luZGV4KSB7XG4gICAgICAgIHJldHVybiAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChmcm9tSW5kZXggPiB0b0luZGV4KSB7XG4gICAgICAgIHJldHVybiAnbGVmdCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVzdHJveSQ2KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGdfYWZ0ZXJTbGlkZUxvYWRzSWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFmdGVyU2xpZGVMb2Fkcyh2KSB7XG4gICAgICAvL2lmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXG4gICAgICBpZiAoIXYubG9jYWxJc1Jlc2l6aW5nKSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGdldE9wdGlvbnMoKS5hZnRlclNsaWRlTG9hZCkpIHtcbiAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyU2xpZGVMb2FkJywgdik7XG4gICAgICAgIH0gLy9uZWVkcyB0byBiZSBpbnNpZGUgdGhlIGNvbmRpdGlvbiB0byBwcmV2ZW50IHByb2JsZW1zIHdpdGggY29udGludW91c1ZlcnRpY2FsIGFuZCBzY3JvbGxIb3Jpem9udGFsbHlcbiAgICAgICAgLy9hbmQgdG8gcHJldmVudCBkb3VibGUgc2Nyb2xsIHJpZ2h0IGFmdGVyIGEgd2luZG93cyByZXNpemVcblxuXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBjYW5TY3JvbGw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXlNZWRpYSh2LmRlc3RpbnkpO1xuICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudHMuYWZ0ZXJTbGlkZUxvYWRzLCB2KTtcbiAgICAgIH0gLy9sZXR0aW5nIHRoZW0gc2xpZGUgYWdhaW5cblxuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIHNsaWRlTW92aW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTbGlkZXMgc2lsZW50bHkgKHdpdGggbm8gYW5pbWF0aW9uKSB0aGUgYWN0aXZlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUuXG4gICAgKiBAcGFyYW0gbm9DYWxsYmFjayB7Ym9vbH0gdHJ1ZSBvciBkZWZpbmVkIC0+IG5vIGNhbGxiYWNrc1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoYWN0aXZlU2xpZGUsIG5vQ2FsbGJhY2tzKSB7XG4gICAgICBzZXRTY3JvbGxpbmdTcGVlZCgwLCAnaW50ZXJuYWwnKTtcblxuICAgICAgaWYgKHR5cGVvZiBub0NhbGxiYWNrcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy9wcmV2ZW50aW5nIGZpcmluZyBjYWxsYmFja3MgYWZ0ZXJTbGlkZUxvYWQgZXRjLlxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgaXNSZXNpemluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbGFuZHNjYXBlU2Nyb2xsKGNsb3Nlc3QoYWN0aXZlU2xpZGUsIFNMSURFU19XUkFQUEVSX1NFTCksIGFjdGl2ZVNsaWRlKTtcblxuICAgICAgaWYgKHR5cGVvZiBub0NhbGxiYWNrcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGlzUmVzaXppbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXRTY3JvbGxpbmdTcGVlZChnZXRPcmlnaW5hbHMoKS5zY3JvbGxpbmdTcGVlZCwgJ2ludGVybmFsJyk7XG4gICAgfVxuXG4gICAgdmFyIGdfcHJldkFjdGl2ZVNlY3Rpb25JbmRleCA9IG51bGw7XG4gICAgdmFyIGdfcHJldkFjdGl2ZVNsaWRlSW5kZXggPSBudWxsO1xuICAgIC8qKiBcbiAgICAgKiBVcGRhdGVzIHRoZSBzdGF0ZSBvZiB0aGUgYXBwLlxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoKSB7XG4gICAgICBzdGF0ZS5hY3RpdmVTZWN0aW9uID0gbnVsbDtcbiAgICAgIHN0YXRlLnNlY3Rpb25zLm1hcChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICB2YXIgaXNBY3RpdmUgPSBoYXNDbGFzcyhzZWN0aW9uLml0ZW0sIEFDVElWRSk7XG4gICAgICAgIHNlY3Rpb24uaXNBY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgc2VjdGlvbi5oYXNTY3JvbGwgPSBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaGFzU2Nyb2xsKHNlY3Rpb24uaXRlbSk7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgc3RhdGUuYWN0aXZlU2VjdGlvbiA9IHNlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdGlvbi5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VjdGlvbi5hY3RpdmVTbGlkZSA9IG51bGw7XG4gICAgICAgICAgc2VjdGlvbi5zbGlkZXMubWFwKGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgICAgICAgdmFyIGlzQWN0aXZlU2xpZGUgPSBoYXNDbGFzcyhzbGlkZS5pdGVtLCBBQ1RJVkUpO1xuICAgICAgICAgICAgc2xpZGUuaGFzU2Nyb2xsID0gc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmhhc1Njcm9sbChzZWN0aW9uLml0ZW0pO1xuICAgICAgICAgICAgc2xpZGUuaXNBY3RpdmUgPSBpc0FjdGl2ZVNsaWRlO1xuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmVTbGlkZSkge1xuICAgICAgICAgICAgICBzZWN0aW9uLmFjdGl2ZVNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2Nyb2xsVG9OZXdBY3RpdmVQYW5lbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVTdHJ1Y3R1cmFsU3RhdGUoKSB7XG4gICAgICB2YXIgYWxsU2VjdGlvbkl0ZW1zID0gJChnZXRPcHRpb25zKCkuc2VjdGlvblNlbGVjdG9yLCBnZXRDb250YWluZXIoKSk7XG4gICAgICB2YXIgc2VjdGlvbnNJdGVtcyA9IGdldFZpc2libGUoYWxsU2VjdGlvbkl0ZW1zKTtcbiAgICAgIHZhciBhbGxTZWN0aW9ucyA9IEFycmF5LmZyb20oYWxsU2VjdGlvbkl0ZW1zKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWN0aW9uUGFuZWwoaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzZWN0aW9ucyA9IGFsbFNlY3Rpb25zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5pc1Zpc2libGU7XG4gICAgICB9KTtcbiAgICAgIHZhciBzbGlkZXMgPSBzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc2VjdGlvbikge1xuICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChzZWN0aW9uLnNsaWRlcyk7XG4gICAgICB9LCBbXSk7IC8vIGtlZXBpbmcgdHJhY2sgb2YgdGhlIHByZXZpb3VzbHkgYWN0aXZlIHNlY3Rpb25cblxuICAgICAgZ19wcmV2QWN0aXZlU2VjdGlvbkluZGV4ID0gZ2V0UHJldkFjdGl2ZVBhbmVsSW5kZXgoc3RhdGUuYWN0aXZlU2VjdGlvbik7XG4gICAgICBnX3ByZXZBY3RpdmVTbGlkZUluZGV4ID0gZ2V0UHJldkFjdGl2ZVBhbmVsSW5kZXgoc3RhdGUuYWN0aXZlU2VjdGlvbiA/IHN0YXRlLmFjdGl2ZVNlY3Rpb24uYWN0aXZlU2xpZGUgOiBudWxsKTtcbiAgICAgIHN0YXRlLm51bVNlY3Rpb25zID0gc2VjdGlvbnNJdGVtcy5sZW5ndGg7XG4gICAgICBzdGF0ZS5udW1TbGlkZXMgPSBzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc2VjdGlvbikge1xuICAgICAgICByZXR1cm4gYWNjICsgc2VjdGlvbi5zbGlkZXMubGVuZ3RoO1xuICAgICAgfSwgMCk7XG4gICAgICBzdGF0ZS5zZWN0aW9ucyA9IHNlY3Rpb25zO1xuICAgICAgc3RhdGUuc2VjdGlvbnNJbmNsdWRpbmdIaWRkZW4gPSBhbGxTZWN0aW9ucztcbiAgICAgIHN0YXRlLnNsaWRlcyA9IHNsaWRlcztcbiAgICAgIHN0YXRlLnBhbmVscyA9IHN0YXRlLnNlY3Rpb25zLmNvbmNhdChzdGF0ZS5zbGlkZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXZBY3RpdmVQYW5lbEluZGV4KGFjdGl2ZVBhbmVsKSB7XG4gICAgICBpZiAoIWFjdGl2ZVBhbmVsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkFjdGl2ZVBhbmVsSXRlbSA9IGFjdGl2ZVBhbmVsID8gYWN0aXZlUGFuZWwuaXRlbSA6IG51bGw7XG4gICAgICB2YXIgaGlkZGVuUGFuZWxzID0gYWN0aXZlUGFuZWwuaXNTZWN0aW9uID8gc3RhdGUuc2VjdGlvbnNJbmNsdWRpbmdIaWRkZW4gOiBzdGF0ZS5hY3RpdmVTZWN0aW9uLnNsaWRlc0luY2x1ZGluZ0hpZGRlbjtcblxuICAgICAgaWYgKHByZXZBY3RpdmVQYW5lbEl0ZW0pIHtcbiAgICAgICAgdmFyIHBhbmVsID0gZ2V0UGFuZWxCeUVsZW1lbnQoaGlkZGVuUGFuZWxzLCBwcmV2QWN0aXZlUGFuZWxJdGVtKTtcbiAgICAgICAgcmV0dXJuIHBhbmVsID8gcGFuZWwuaW5kZXgoKSA6IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIGNoYW5nZXMgaW4gdGhlIERPTSB0YWtlIHBsYWNlIHRoZXJlJ3MgYSBjaGFuZ2UgXG4gICAgICogdGhlIGFjdGl2ZSBzZWN0aW9uIGlzIG5vdyBoaWRkZW4gb3IgcmVtb3ZlZC4gXG4gICAgICogZnVsbFBhZ2UuanMgd2lsbCBzY3JvbGwgdG8gdGhlIGNsb3Nlc3Qgc2VjdGlvbiBuZWFyYnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvTmV3QWN0aXZlUGFuZWwoKSB7XG4gICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9IHN0YXRlLmFjdGl2ZVNlY3Rpb247XG4gICAgICB2YXIgYWN0aXZlU2VjdGlvbkhhc1NsaWRlcyA9IHN0YXRlLmFjdGl2ZVNlY3Rpb24gPyBzdGF0ZS5hY3RpdmVTZWN0aW9uLnNsaWRlcy5sZW5ndGggOiBmYWxzZTtcbiAgICAgIHZhciBhY3RpdmVTbGlkZSA9IHN0YXRlLmFjdGl2ZVNlY3Rpb24gPyBzdGF0ZS5hY3RpdmVTZWN0aW9uLmFjdGl2ZVNsaWRlIDogbnVsbDsgLy8gSGlkZGluZyAvIHJlbW92aW5nIHRoZSBhY3RpdmUgc2VjdGlvbiA/XG5cbiAgICAgIGlmICghYWN0aXZlU2VjdGlvbiAmJiBzdGF0ZS5zZWN0aW9ucy5sZW5ndGggJiYgIWdldFN0YXRlKCkuaXNCZXlvbmRGdWxscGFnZSAmJiBnX3ByZXZBY3RpdmVTZWN0aW9uSW5kZXgpIHtcbiAgICAgICAgdmFyIG5ld0FjdGl2ZVNlY3Rpb24gPSBnZXROZXdBY3RpdmVQYW5lbChnX3ByZXZBY3RpdmVTZWN0aW9uSW5kZXgsIHN0YXRlLnNlY3Rpb25zKTtcblxuICAgICAgICBpZiAobmV3QWN0aXZlU2VjdGlvbikge1xuICAgICAgICAgIHN0YXRlLmFjdGl2ZVNlY3Rpb24gPSBuZXdBY3RpdmVTZWN0aW9uO1xuICAgICAgICAgIHN0YXRlLmFjdGl2ZVNlY3Rpb24uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGFkZENsYXNzKHN0YXRlLmFjdGl2ZVNlY3Rpb24uaXRlbSwgQUNUSVZFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5hY3RpdmVTZWN0aW9uKSB7XG4gICAgICAgICAgc2lsZW50U2Nyb2xsKHN0YXRlLmFjdGl2ZVNlY3Rpb24uaXRlbS5vZmZzZXRUb3ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVTZWN0aW9uSGFzU2xpZGVzICYmICFhY3RpdmVTbGlkZSAmJiBnX3ByZXZBY3RpdmVTbGlkZUluZGV4KSB7XG4gICAgICAgIHZhciBuZXdBY3RpdmVTbGlkZSA9IGdldE5ld0FjdGl2ZVBhbmVsKGdfcHJldkFjdGl2ZVNsaWRlSW5kZXgsIHN0YXRlLmFjdGl2ZVNlY3Rpb24uc2xpZGVzKTtcblxuICAgICAgICBpZiAobmV3QWN0aXZlU2xpZGUpIHtcbiAgICAgICAgICBzdGF0ZS5hY3RpdmVTZWN0aW9uLmFjdGl2ZVNsaWRlID0gbmV3QWN0aXZlU2xpZGU7XG4gICAgICAgICAgc3RhdGUuYWN0aXZlU2VjdGlvbi5hY3RpdmVTbGlkZS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgYWRkQ2xhc3Moc3RhdGUuYWN0aXZlU2VjdGlvbi5hY3RpdmVTbGlkZS5pdGVtLCBBQ1RJVkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGl2ZVNlY3Rpb24uYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgICBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoc3RhdGUuYWN0aXZlU2VjdGlvbi5hY3RpdmVTbGlkZS5pdGVtLCAnaW50ZXJuYWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5ld0FjdGl2ZVBhbmVsKHByZXZBY3RpdmVQYW5lbEluZGV4LCBzaWJsaW5ncykge1xuICAgICAgdmFyIG5ld0FjdGl2ZVNlY3Rpb247XG4gICAgICB2YXIgcHJldkluZGV4ID0gcHJldkFjdGl2ZVBhbmVsSW5kZXggLSAxO1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZBY3RpdmVQYW5lbEluZGV4O1xuXG4gICAgICBkbyB7XG4gICAgICAgIG5ld0FjdGl2ZVNlY3Rpb24gPSBzaWJsaW5nc1twcmV2SW5kZXhdIHx8IHNpYmxpbmdzW25leHRJbmRleF07XG5cbiAgICAgICAgaWYgKG5ld0FjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJbmRleCA9IHByZXZJbmRleCAtIDE7XG4gICAgICAgIG5leHRJbmRleCA9IG5leHRJbmRleCArIDE7XG4gICAgICB9IHdoaWxlIChwcmV2SW5kZXggPj0gMCB8fCBuZXh0SW5kZXggPCBzaWJsaW5ncy5sZW5ndGgpO1xuXG4gICAgICByZXR1cm4gbmV3QWN0aXZlU2VjdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBTZWN0aW9uIG9iamVjdFxuICAgICovXG5cblxuICAgIHZhciBTZWN0aW9uUGFuZWwgPSBmdW5jdGlvbiBTZWN0aW9uUGFuZWwoZWwpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFtdLnB1c2guY2FsbChhcmd1bWVudHMsIGdldE9wdGlvbnMoKS5zZWN0aW9uU2VsZWN0b3IpO1xuICAgICAgSXRlbS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGhpcy5hbGxTbGlkZXNJdGVtcyA9ICQoZ2V0T3B0aW9ucygpLnNsaWRlU2VsZWN0b3IsIGVsKTtcbiAgICAgIHRoaXMuc2xpZGVzSW5jbHVkaW5nSGlkZGVuID0gQXJyYXkuZnJvbSh0aGlzLmFsbFNsaWRlc0l0ZW1zKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbGlkZVBhbmVsKGl0ZW0sIF90aGlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLnNsaWRlc0luY2x1ZGluZ0hpZGRlbi5maWx0ZXIoZnVuY3Rpb24gKHNsaWRlUGFuZWwpIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlUGFuZWwuaXNWaXNpYmxlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5zbGlkZXMubGVuZ3RoID8gdGhpcy5zbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgICByZXR1cm4gc2xpZGUuaXNBY3RpdmU7XG4gICAgICB9KVswXSB8fCB0aGlzLnNsaWRlc1swXSA6IG51bGw7XG4gICAgfTtcbiAgICBTZWN0aW9uUGFuZWwucHJvdG90eXBlID0gSXRlbS5wcm90b3R5cGU7XG4gICAgU2VjdGlvblBhbmVsLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNlY3Rpb25QYW5lbDtcbiAgICAvKipcbiAgICAqIFNsaWRlIG9iamVjdFxuICAgICovXG5cbiAgICB2YXIgU2xpZGVQYW5lbCA9IGZ1bmN0aW9uIFNsaWRlUGFuZWwoZWwsIHNlY3Rpb24pIHtcbiAgICAgIHRoaXMucGFyZW50ID0gc2VjdGlvbjtcbiAgICAgIEl0ZW0uY2FsbCh0aGlzLCBlbCwgZ2V0T3B0aW9ucygpLnNsaWRlU2VsZWN0b3IpO1xuICAgIH07XG5cbiAgICBTbGlkZVBhbmVsLnByb3RvdHlwZSA9IEl0ZW0ucHJvdG90eXBlO1xuICAgIFNsaWRlUGFuZWwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2VjdGlvblBhbmVsO1xuXG4gICAgLyoqXG4gICAgKiBBZGRzIGludGVybmFsIGNsYXNzZXMgdG8gYmUgYWJsZSB0byBwcm92aWRlIGN1c3RvbWl6YWJsZSBzZWxlY3RvcnNcbiAgICAqIGtlZXBpbmcgdGhlIGxpbmsgd2l0aCB0aGUgc3R5bGUgc2hlZXQuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGFkZEludGVybmFsU2VsZWN0b3JzKCkge1xuICAgICAgYWRkQ2xhc3MoJChnZXRPcHRpb25zKCkuc2VjdGlvblNlbGVjdG9yLCBnZXRDb250YWluZXIoKSksIFNFQ1RJT04pO1xuICAgICAgYWRkQ2xhc3MoJChnZXRPcHRpb25zKCkuc2xpZGVTZWxlY3RvciwgZ2V0Q29udGFpbmVyKCkpLCBTTElERSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdHlsZXMgdGhlIGhvcml6b250YWwgc2xpZGVzIGZvciBhIHNlY3Rpb24uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHN0eWxlU2xpZGVzKHNlY3Rpb24pIHtcbiAgICAgIHZhciBudW1TbGlkZXMgPSBzZWN0aW9uLnNsaWRlcy5sZW5ndGg7XG4gICAgICB2YXIgc2xpZGVzRWxlbXMgPSBzZWN0aW9uLmFsbFNsaWRlc0l0ZW1zO1xuICAgICAgdmFyIHNsaWRlcyA9IHNlY3Rpb24uc2xpZGVzO1xuICAgICAgdmFyIHNsaWRlcldpZHRoID0gbnVtU2xpZGVzICogMTAwO1xuICAgICAgdmFyIHNsaWRlV2lkdGggPSAxMDAgLyBudW1TbGlkZXM7XG5cbiAgICAgIGlmICghJChTTElERVNfV1JBUFBFUl9TRUwsIHNlY3Rpb24uaXRlbSlbMF0pIHtcbiAgICAgICAgdmFyIHNsaWRlc1dyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNsaWRlc1dyYXBwZXIuY2xhc3NOYW1lID0gU0xJREVTX1dSQVBQRVI7IC8vZnAtc2xpZGVzXG5cbiAgICAgICAgd3JhcEFsbChzbGlkZXNFbGVtcywgc2xpZGVzV3JhcHBlcik7XG4gICAgICAgIHZhciBzbGlkZXNDb250YWluZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNsaWRlc0NvbnRhaW5lci5jbGFzc05hbWUgPSBTTElERVNfQ09OVEFJTkVSOyAvL2ZwLXNsaWRlc0NvbnRhaW5lclxuXG4gICAgICAgIHdyYXBBbGwoc2xpZGVzRWxlbXMsIHNsaWRlc0NvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGNzcygkKFNMSURFU19DT05UQUlORVJfU0VMLCBzZWN0aW9uLml0ZW0pLCB7XG4gICAgICAgICd3aWR0aCc6IHNsaWRlcldpZHRoICsgJyUnXG4gICAgICB9KTtcblxuICAgICAgaWYgKG51bVNsaWRlcyA+IDEpIHtcbiAgICAgICAgaWYgKGdldE9wdGlvbnMoKS5jb250cm9sQXJyb3dzKSB7XG4gICAgICAgICAgY3JlYXRlU2xpZGVBcnJvd3Moc2VjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLnNsaWRlc05hdmlnYXRpb24pIHtcbiAgICAgICAgICBhZGRTbGlkZXNOYXZpZ2F0aW9uKHNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgICBjc3Moc2xpZGUuaXRlbSwge1xuICAgICAgICAgICd3aWR0aCc6IHNsaWRlV2lkdGggKyAnJSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGdldE9wdGlvbnMoKS52ZXJ0aWNhbENlbnRlcmVkKSB7XG4gICAgICAgICAgYWRkVGFibGVDbGFzcyhzbGlkZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHN0YXJ0aW5nU2xpZGUgPSBzZWN0aW9uLmFjdGl2ZVNsaWRlIHx8IG51bGw7IC8vaWYgdGhlIHNsaWRlIHdvbid0IGJlIGFuIHN0YXJ0aW5nIHBvaW50LCB0aGUgZGVmYXVsdCB3aWxsIGJlIHRoZSBmaXJzdCBvbmVcbiAgICAgIC8vdGhlIGFjdGl2ZSBzZWN0aW9uIGlzbid0IHRoZSBmaXJzdCBvbmU/IElzIG5vdCB0aGUgZmlyc3Qgc2xpZGUgb2YgdGhlIGZpcnN0IHNlY3Rpb24/IFRoZW4gd2UgbG9hZCB0aGF0IHNlY3Rpb24vc2xpZGUgYnkgZGVmYXVsdC5cblxuICAgICAgaWYgKHN0YXJ0aW5nU2xpZGUgIT0gbnVsbCAmJiBzdGF0ZS5hY3RpdmVTZWN0aW9uICYmIChzdGF0ZS5hY3RpdmVTZWN0aW9uLmluZGV4KCkgIT09IDAgfHwgc3RhdGUuYWN0aXZlU2VjdGlvbi5pbmRleCgpID09PSAwICYmIHN0YXJ0aW5nU2xpZGUuaW5kZXgoKSAhPT0gMCkpIHtcbiAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKHN0YXJ0aW5nU2xpZGUuaXRlbSwgJ2ludGVybmFsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyhzbGlkZXNFbGVtc1swXSwgQUNUSVZFKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ193cmFwcGVyT2JzZXJ2ZXI7XG4gICAgdmFyIGdfd3JhcHBlck9ic2VydmVDb25maWcgPSB7XG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLmJpbmRFdmVudHMsIGJpbmRFdmVudHMkOSk7XG4gICAgRlBbXCJyZW5kZXJcIl0gPSBvbkNvbnRlbnRDaGFuZ2U7XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzJDkoKSB7XG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLm9ic2VydmVyICYmIFwiTXV0YXRpb25PYnNlcnZlclwiIGluIHdpbmRvdyAmJiAkKFdSQVBQRVJfU0VMKVswXSkge1xuICAgICAgICBnX3dyYXBwZXJPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKCQoV1JBUFBFUl9TRUwpWzBdLCBvbkNvbnRlbnRDaGFuZ2UsIGdfd3JhcHBlck9ic2VydmVDb25maWcpO1xuICAgICAgfVxuXG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLmNvbnRlbnRDaGFuZ2VkLCBvbkNvbnRlbnRDaGFuZ2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTXV0YXRpb24gb2JzZXJ2ZXIuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHRhcmdldCwgY2FsbGJhY2ssIGNvbmZpZykge1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlkU2xpZGVzQ2hhbmdlKCkge1xuICAgICAgcmV0dXJuIGdldFZpc2libGUoJChnZXRPcHRpb25zKCkuc2xpZGVTZWxlY3RvciwgZ2V0Q29udGFpbmVyKCkpKS5sZW5ndGggIT09IGdldFN0YXRlKCkubnVtU2xpZGVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpZFNlY3Rpb25zQ2hhbmdlKCkge1xuICAgICAgcmV0dXJuIGdldFZpc2libGUoJChnZXRPcHRpb25zKCkuc2VjdGlvblNlbGVjdG9yLCBnZXRDb250YWluZXIoKSkpLmxlbmd0aCAhPT0gZ2V0U3RhdGUoKS5udW1TZWN0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWRTZWN0aW9uc09yU2xpZGVzQ2hhbmdlKCkge1xuICAgICAgcmV0dXJuIGRpZFNsaWRlc0NoYW5nZSgpIHx8IGRpZFNlY3Rpb25zQ2hhbmdlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBjaGFuZ2VzIG9uIHNlY3Rpb25zIGFuZCBmaXJlcyByZUJ1aWxkXG4gICAgICogd2hlbiB0aG9zZSBjaGFuZ2VzIGFmZmVjdCB0aGUgc2VjdGlvbiBoZWlnaHQuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIG9uQ29udGVudENoYW5nZShtdXRhdGlvbnMpIHtcbiAgICAgIHZhciBfZGlkU2xpZGVzQ2hhbmdlID0gZGlkU2xpZGVzQ2hhbmdlKCk7XG5cbiAgICAgIGlmIChkaWRTZWN0aW9uc09yU2xpZGVzQ2hhbmdlKCkgJiYgIXN0YXRlLmlzRG9pbmdDb250aW5vdXNWZXJ0aWNhbCkge1xuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLm9ic2VydmVyICYmIGdfd3JhcHBlck9ic2VydmVyKSB7XG4gICAgICAgICAgLy8gVGVtcG9yYWxseSBkaXNhYmxpbmcgdGhlIG9ic2VydmVyIHdoaWxlIFxuICAgICAgICAgIC8vIHdlIG1vZGlkeSB0aGUgRE9NIGFnYWluXG4gICAgICAgICAgZ193cmFwcGVyT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlU3RydWN0dXJhbFN0YXRlKCk7XG4gICAgICAgIHVwZGF0ZVN0YXRlKCk7IC8vIFJlbW92aW5nIG5hdnMgYW5kIGFuY2hvcnMgb3B0aW9uc1xuXG4gICAgICAgIGdldE9wdGlvbnMoKS5hbmNob3JzID0gW107XG4gICAgICAgIHJlbW92ZSgkKFNFQ1RJT05fTkFWX1NFTCkpO1xuICAgICAgICBhZGRJbnRlcm5hbFNlbGVjdG9ycygpO1xuICAgICAgICBzZXRPcHRpb25zRnJvbURPTSgpO1xuXG4gICAgICAgIGlmIChnZXRPcHRpb25zKCkubmF2aWdhdGlvbikge1xuICAgICAgICAgIGFkZFZlcnRpY2FsTmF2aWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9kaWRTbGlkZXNDaGFuZ2UpIHtcbiAgICAgICAgICByZW1vdmUoJChTTElERVNfTkFWX1NFTCkpO1xuICAgICAgICAgIHJlbW92ZSgkKFNMSURFU19BUlJPV19TRUwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFN0YXRlKCkuc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICAgIGlmIChzZWN0aW9uLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChfZGlkU2xpZGVzQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIHN0eWxlU2xpZGVzKHNlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZVNlY3Rpb24oc2VjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5vYnNlcnZlciAmJiBnX3dyYXBwZXJPYnNlcnZlciAmJiAkKFdSQVBQRVJfU0VMKVswXSkge1xuICAgICAgICBnX3dyYXBwZXJPYnNlcnZlci5vYnNlcnZlKCQoV1JBUFBFUl9TRUwpWzBdLCBnX3dyYXBwZXJPYnNlcnZlQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3VwcG9ydHNQYXNzaXZlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy9jaGVrcyBmb3IgcGFzc2l2ZSBldmVudCBzdXBwb3J0XG4gICAgICB2YXIgZ19zdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgZ19zdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvd0FkZEV2ZW50KFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgb3B0cyk7XG4gICAgICAgIHdpbmRvd1JlbW92ZUV2ZW50KFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgb3B0cyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ19zdXBwb3J0c1Bhc3NpdmU7XG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIGZ1bmN0aW9uIGdldFBhc3NpdmVPcHRpb25zSWZQb3NzaWJsZSgpIHtcbiAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVFdmVudHMoKSA/IHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0gOiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgd2hlZWxEYXRhSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcHJldlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIF9zY3JvbGxpbmdzID0gW107XG4gICAgICB2YXIgaXNTY3JvbGxpbmdWZXJ0aWNhbGx5O1xuICAgICAgdmFyIGRpcmVjdGlvbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZ2lzdGVyRXZlbnQ6IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnQoZSkge1xuICAgICAgICAgIGUgPSBlIHx8IHdpbi5ldmVudDtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZIHx8IC1lLmRldGFpbDtcbiAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICAgICAgICB2YXIgaG9yaXpvbnRhbERldGVjdGlvbiA9IHR5cGVvZiBlLndoZWVsRGVsdGFYICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZS5kZWx0YVggIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgIGlzU2Nyb2xsaW5nVmVydGljYWxseSA9IE1hdGguYWJzKGUud2hlZWxEZWx0YVgpIDwgTWF0aC5hYnMoZS53aGVlbERlbHRhKSB8fCBNYXRoLmFicyhlLmRlbHRhWCkgPCBNYXRoLmFicyhlLmRlbHRhWSkgfHwgIWhvcml6b250YWxEZXRlY3Rpb247XG4gICAgICAgICAgdmFyIGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICBkaXJlY3Rpb24gPSBkZWx0YSA8IDAgPyAnZG93bicgOiAndXAnOyAvL0xpbWl0aW5nIHRoZSBhcnJheSB0byAxNTAgKGxldHMgbm90IHdhc3RlIG1lbW9yeSEpXG5cbiAgICAgICAgICBpZiAoX3Njcm9sbGluZ3MubGVuZ3RoID4gMTQ5KSB7XG4gICAgICAgICAgICBfc2Nyb2xsaW5ncy5zaGlmdCgpO1xuICAgICAgICAgIH0gLy9rZWVwaW5nIHJlY29yZCBvZiB0aGUgcHJldmlvdXMgc2Nyb2xsaW5nc1xuXG5cbiAgICAgICAgICBfc2Nyb2xsaW5ncy5wdXNoKE1hdGguYWJzKHZhbHVlKSk7IC8vdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGxhc3Qgc2Nyb2xsIGFuZCB0aGUgY3VycmVudCBvbmVcblxuXG4gICAgICAgICAgdmFyIHRpbWVEaWZmID0gY3VyVGltZSAtIF9wcmV2VGltZTtcbiAgICAgICAgICBfcHJldlRpbWUgPSBjdXJUaW1lOyAvL2hhdmVuJ3QgdGhleSBzY3JvbGxlZCBpbiBhIHdoaWxlP1xuICAgICAgICAgIC8vKGVub3VnaCB0byBiZSBjb25zaWRlciBhIGRpZmZlcmVudCBzY3JvbGxpbmcgYWN0aW9uIHRvIHNjcm9sbCBhbm90aGVyIHNlY3Rpb24pXG5cbiAgICAgICAgICBpZiAodGltZURpZmYgPiAyMDApIHtcbiAgICAgICAgICAgIC8vZW1wdHlpbmcgdGhlIGFycmF5LCB3ZSBkb250IGNhcmUgYWJvdXQgb2xkIHNjcm9sbGluZ3MgZm9yIG91ciBhdmVyYWdlc1xuICAgICAgICAgICAgX3Njcm9sbGluZ3MgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzQWNjZWxlcmF0aW5nOiBmdW5jdGlvbiBpc0FjY2VsZXJhdGluZygpIHtcbiAgICAgICAgICB2YXIgYXZlcmFnZUVuZCA9IGdldEF2ZXJhZ2UoX3Njcm9sbGluZ3MsIDEwKTtcbiAgICAgICAgICB2YXIgYXZlcmFnZU1pZGRsZSA9IGdldEF2ZXJhZ2UoX3Njcm9sbGluZ3MsIDcwKTtcbiAgICAgICAgICB2YXIgaXNBY2NlbGVyYXRpbmcgPSBhdmVyYWdlRW5kID49IGF2ZXJhZ2VNaWRkbGU7XG4gICAgICAgICAgcmV0dXJuIF9zY3JvbGxpbmdzLmxlbmd0aCA/IGlzQWNjZWxlcmF0aW5nICYmIGlzU2Nyb2xsaW5nVmVydGljYWxseSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBnZXREaXJlY3Rpb246IGZ1bmN0aW9uIGdldERpcmVjdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIGZ1bmN0aW9uIHNjcm9sbEJleW9uZEZ1bGxQYWdlKCkge1xuICAgICAgdmFyIGR0b3AgPSBnZXREZXN0aW5hdGlvbk9mZnNldCgpO1xuICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3MoZHRvcCk7XG4gICAgICBGUC50ZXN0LnRvcCA9IC1kdG9wICsgJ3B4JztcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgY2FuU2Nyb2xsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBzY3JvbGxUbyhzY3JvbGxTZXR0aW5ncy5lbGVtZW50LCBzY3JvbGxTZXR0aW5ncy5vcHRpb25zLCBnZXRPcHRpb25zKCkuc2Nyb2xsaW5nU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNCZXlvbmRGdWxscGFnZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhblNjcm9sbDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25LZXlEb3duKCkge1xuICAgICAgaWYgKCFpc0Z1bGxQYWdlQWJvdmUoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxVcFRvRnVsbHBhZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nyb2xsVXBUb0Z1bGxwYWdlKCkge1xuICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3MoZ2V0TGFzdChnZXRTdGF0ZSgpLnNlY3Rpb25zKS5pdGVtLm9mZnNldFRvcCk7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGNhblNjcm9sbDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgc2Nyb2xsVG8oc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucywgZ2V0T3B0aW9ucygpLnNjcm9sbGluZ1NwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBjYW5TY3JvbGw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBpc0JleW9uZEZ1bGxwYWdlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGlzQWJvdXRUb1Njcm9sbFRvRnVsbFBhZ2U6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVzdGluYXRpb25PZmZzZXQoKSB7XG4gICAgICBpZiAoIWdldE9wdGlvbnMoKS5jc3MzKSB7XG4gICAgICAgIHJldHVybiBnZXRMYXN0KGdldFN0YXRlKCkuc2VjdGlvbnMpLml0ZW0ub2Zmc2V0VG9wICsgZ2V0TGFzdChnZXRTdGF0ZSgpLnNlY3Rpb25zKS5pdGVtLm9mZnNldEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFNjcm9sbFRvcCgpICsgZ2V0V2luZG93SGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmV5b25kRnVsbFBhZ2VIYW5kbGVyKGNvbnRhaW5lciwgZSkge1xuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgcGF1c2VTY3JvbGwgPSBnZXRTdGF0ZSgpLmlzQmV5b25kRnVsbHBhZ2UgJiYgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+PSAwICYmIHdoZWVsRGF0YUhhbmRsZXIuZ2V0RGlyZWN0aW9uKCkgPT09ICd1cCc7XG4gICAgICB2YXIgZ19pc0Fib3V0VG9TY3JvbGxUb0Z1bGxQYWdlID0gZ2V0U3RhdGUoKS5pc0Fib3V0VG9TY3JvbGxUb0Z1bGxQYWdlO1xuXG4gICAgICBpZiAoZ19pc0Fib3V0VG9TY3JvbGxUb0Z1bGxQYWdlKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmlzQmV5b25kRnVsbHBhZ2UpIHtcbiAgICAgICAgaWYgKCFwYXVzZVNjcm9sbCkge1xuICAgICAgICAgIGtleWZyYW1lVGltZSgnc2V0JywgJ2JleW9uZEZ1bGxwYWdlJywgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNob3VsZFNldEZpeGVkUG9zaXRpb24gPSAhZ19pc0Fib3V0VG9TY3JvbGxUb0Z1bGxQYWdlICYmICgha2V5ZnJhbWVUaW1lKCdpc05ld0tleWZyYW1lJywgJ2JleW9uZEZ1bGxwYWdlJykgfHwgIXdoZWVsRGF0YUhhbmRsZXIuaXNBY2NlbGVyYXRpbmcoKSk7XG4gICAgICAgICAgdmFyIHNjcm9sbFNldHRpbmdzO1xuXG4gICAgICAgICAgaWYgKHNob3VsZFNldEZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3MoZ2V0TGFzdChnZXRTdGF0ZSgpLnNlY3Rpb25zKS5pdGVtLm9mZnNldFRvcCArIGdldExhc3QoZ2V0U3RhdGUoKS5zZWN0aW9ucykuaXRlbS5vZmZzZXRIZWlnaHQpO1xuICAgICAgICAgICAgc2Nyb2xsU2V0dGluZ3MuZWxlbWVudC5zY3JvbGxUbygwLCBzY3JvbGxTZXR0aW5ncy5vcHRpb25zKTtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaXNBYm91dFRvU2Nyb2xsVG9GdWxsUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmICh3aGVlbERhdGFIYW5kbGVyLmlzQWNjZWxlcmF0aW5nKCkpIHtcbiAgICAgICAgICAgIHBhdXNlU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGlzQWJvdXRUb1Njcm9sbFRvRnVsbFBhZ2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiAnd2hlZWwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjcm9sbFVwVG9GdWxscGFnZSgpO1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFnX2lzQWJvdXRUb1Njcm9sbFRvRnVsbFBhZ2UpIHtcbiAgICAgICAgICAvLyBhbGxvdyBub3JtYWwgc2Nyb2xsaW5nLCBidXQgcXVpdHRpbmdcbiAgICAgICAgICBpZiAoIXBhdXNlU2Nyb2xsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5ZnJhbWVUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlzTmV3ID0gZmFsc2U7XG4gICAgICB2YXIgZnJhbWVzID0ge307XG4gICAgICB2YXIgdGltZWZyYW1lcyA9IHt9O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24sIG5hbWUsIHRpbWVmcmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3NldCc6XG4gICAgICAgICAgICBmcmFtZXNbbmFtZV0gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHRpbWVmcmFtZXNbbmFtZV0gPSB0aW1lZnJhbWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2lzTmV3S2V5ZnJhbWUnOlxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlzTmV3ID0gY3VycmVudCAtIGZyYW1lc1tuYW1lXSA+IHRpbWVmcmFtZXNbbmFtZV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc05ldztcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgRlAubW92ZVNlY3Rpb25Eb3duID0gbW92ZVNlY3Rpb25Eb3duO1xuICAgIC8qKlxuICAgICogTW92ZXMgdGhlIHBhZ2UgZG93biBvbmUgc2VjdGlvbi5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gbW92ZVNlY3Rpb25Eb3duKCkge1xuICAgICAgdmFyIG5leHQgPSBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24ubmV4dCgpOyAvL2xvb3BpbmcgdG8gdGhlIHRvcCBpZiB0aGVyZSdzIG5vIG1vcmUgc2VjdGlvbnMgYmVsb3dcblxuICAgICAgaWYgKCFuZXh0ICYmIChnZXRPcHRpb25zKCkubG9vcEJvdHRvbSB8fCBnZXRPcHRpb25zKCkuY29udGludW91c1ZlcnRpY2FsKSkge1xuICAgICAgICBuZXh0ID0gZ2V0U3RhdGUoKS5zZWN0aW9uc1swXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHQgIT0gbnVsbCkge1xuICAgICAgICBzY3JvbGxQYWdlKG5leHQsIG51bGwsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ29udGVudEJleW9uZEZ1bGxQYWdlKCkpIHtcbiAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLnNjcm9sbEJleW9uZEZ1bGxwYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNDb250ZW50QmV5b25kRnVsbFBhZ2UoKSB7XG4gICAgICByZXR1cm4gZ2V0Q29udGFpbmVyKCkuc2Nyb2xsSGVpZ2h0IDwgJGJvZHkuc2Nyb2xsSGVpZ2h0ICYmIGdldE9wdGlvbnMoKS5zY3JvbGxCYXIgJiYgZ2V0T3B0aW9ucygpLnNjcm9sbEJleW9uZEZ1bGxwYWdlO1xuICAgIH1cblxuICAgIEZQLm1vdmVTZWN0aW9uVXAgPSBtb3ZlU2VjdGlvblVwO1xuICAgIC8qKlxuICAgICogTW92ZXMgdGhlIHBhZ2UgdXAgb25lIHNlY3Rpb24uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIG1vdmVTZWN0aW9uVXAoKSB7XG4gICAgICB2YXIgcHJldiA9IGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5wcmV2KCk7IC8vbG9vcGluZyB0byB0aGUgYm90dG9tIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzZWN0aW9ucyBhYm92ZVxuXG4gICAgICBpZiAoIXByZXYgJiYgKGdldE9wdGlvbnMoKS5sb29wVG9wIHx8IGdldE9wdGlvbnMoKS5jb250aW51b3VzVmVydGljYWwpKSB7XG4gICAgICAgIHByZXYgPSBnZXRMYXN0KGdldFN0YXRlKCkuc2VjdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldiAhPSBudWxsKSB7XG4gICAgICAgIHNjcm9sbFBhZ2UocHJldiwgbnVsbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG9sZFBhZ2VZID0gMDtcbiAgICAvKipcbiAgICAqIERldGVjdGluZyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBtb3VzZSBtb3ZlbWVudC5cbiAgICAqIFVzZWQgb25seSBmb3IgdGhlIG1pZGRsZSBidXR0b24gb2YgdGhlIG1vdXNlLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICAgIGlmICghZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuY2FuU2Nyb2xsKSB7XG4gICAgICAgIC8vIG1vdmluZyB1cFxuICAgICAgICBpZiAoZS5wYWdlWSA8IG9sZFBhZ2VZICYmIGdldElzU2Nyb2xsQWxsb3dlZCgpLm0udXApIHtcbiAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XG4gICAgICAgIH0gLy8gbW92aW5nIGRvd25cbiAgICAgICAgZWxzZSBpZiAoZS5wYWdlWSA+IG9sZFBhZ2VZICYmIGdldElzU2Nyb2xsQWxsb3dlZCgpLm0uZG93bikge1xuICAgICAgICAgIG1vdmVTZWN0aW9uRG93bigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0T2xkUGFnZVkodmFsdWUpIHtcbiAgICAgIG9sZFBhZ2VZID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmVzIHRoZSB3YXkgb2Ygc2Nyb2xsaW5nIHVwIG9yIGRvd246XG4gICAgKiBieSAnYXV0b21hdGljYWxseScgc2Nyb2xsaW5nIGEgc2VjdGlvbiBvciBieSB1c2luZyB0aGUgZGVmYXVsdCBhbmQgbm9ybWFsIHNjcm9sbGluZy5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2Nyb2xsaW5nKHR5cGUpIHtcbiAgICAgIGlmICghZ2V0SXNTY3JvbGxBbGxvd2VkKCkubVt0eXBlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzY3JvbGxTZWN0aW9uID0gdHlwZSA9PT0gJ2Rvd24nID8gbW92ZVNlY3Rpb25Eb3duIDogbW92ZVNlY3Rpb25VcDtcblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5zY3JvbGxPdmVyZmxvdyAmJiBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNTY3JvbGxhYmxlKGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbikpIHtcbiAgICAgICAgLy9pcyB0aGUgc2Nyb2xsYmFyIGF0IHRoZSBzdGFydC9lbmQgb2YgdGhlIHNjcm9sbD9cbiAgICAgICAgaWYgKHNjcm9sbE92ZXJmbG93SGFuZGxlci5pc1Njcm9sbGVkKHR5cGUsIGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5pdGVtKSAmJiBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2hvdWxkTW92ZVBhZ2UoKSkge1xuICAgICAgICAgIHNjcm9sbFNlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0b3VjaFN0YXJ0WSA9IDA7XG4gICAgdmFyIHRvdWNoU3RhcnRYID0gMDtcbiAgICB2YXIgdG91Y2hFbmRZID0gMDtcbiAgICB2YXIgdG91Y2hFbmRYID0gMDtcbiAgICB2YXIgTVNQb2ludGVyID0gZ2V0TVNQb2ludGVyKCk7XG4gICAgdmFyIHBvaW50ZXJzID0ge1xuICAgICAgdG91Y2htb3ZlOiAnb250b3VjaG1vdmUnIGluIHdpbmRvdyA/ICd0b3VjaG1vdmUnIDogTVNQb2ludGVyID8gTVNQb2ludGVyLm1vdmUgOiBudWxsLFxuICAgICAgdG91Y2hzdGFydDogJ29udG91Y2hzdGFydCcgaW4gd2luZG93ID8gJ3RvdWNoc3RhcnQnIDogTVNQb2ludGVyID8gTVNQb2ludGVyLmRvd24gOiBudWxsXG4gICAgfTtcbiAgICAvKipcbiAgICAqIEFkZHMgdGhlIHBvc3NpYmlsaXR5IHRvIGF1dG8gc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnMgb24gdG91Y2ggZGV2aWNlcy5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gYWRkVG91Y2hIYW5kbGVyKCkge1xuICAgICAgaWYgKCFwb2ludGVycy50b3VjaG1vdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNUb3VjaERldmljZSB8fCBpc1RvdWNoKSB7XG4gICAgICAgIGlmIChnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZykge1xuICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIocG9pbnRlcnMudG91Y2htb3ZlLCBwcmV2ZW50Qm91bmNpbmcsIHtcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihwb2ludGVycy50b3VjaG1vdmUsIHByZXZlbnRCb3VuY2luZywge1xuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b3VjaFdyYXBwZXIgPSBnZXRPcHRpb25zKCkudG91Y2hXcmFwcGVyO1xuICAgICAgICB0b3VjaFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihwb2ludGVycy50b3VjaHN0YXJ0LCB0b3VjaFN0YXJ0SGFuZGxlcik7XG4gICAgICAgIHRvdWNoV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKHBvaW50ZXJzLnRvdWNobW92ZSwgdG91Y2hNb3ZlSGFuZGxlciwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0b3VjaFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihwb2ludGVycy50b3VjaHN0YXJ0LCB0b3VjaFN0YXJ0SGFuZGxlcik7XG4gICAgICAgIHRvdWNoV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKHBvaW50ZXJzLnRvdWNobW92ZSwgdG91Y2hNb3ZlSGFuZGxlciwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgdGhlIGF1dG8gc2Nyb2xsaW5nIGZvciB0b3VjaCBkZXZpY2VzLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiByZW1vdmVUb3VjaEhhbmRsZXIoKSB7XG4gICAgICBpZiAoIXBvaW50ZXJzLnRvdWNobW92ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpIHtcbiAgICAgICAgLy8gbm9ybWFsU2Nyb2xsRWxlbWVudHMgcmVxdWlyZXMgaXQgb2ZmICMyNjkxXG4gICAgICAgIGlmIChnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZykge1xuICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIocG9pbnRlcnMudG91Y2htb3ZlLCB0b3VjaE1vdmVIYW5kbGVyLCB7XG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIocG9pbnRlcnMudG91Y2htb3ZlLCBwcmV2ZW50Qm91bmNpbmcsIHtcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG91Y2hXcmFwcGVyID0gZ2V0T3B0aW9ucygpLnRvdWNoV3JhcHBlcjtcbiAgICAgICAgdG91Y2hXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIocG9pbnRlcnMudG91Y2hzdGFydCwgdG91Y2hTdGFydEhhbmRsZXIpO1xuICAgICAgICB0b3VjaFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihwb2ludGVycy50b3VjaG1vdmUsIHRvdWNoTW92ZUhhbmRsZXIsIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogRGV0ZWN0aW5nIHRvdWNoIGV2ZW50c1xuXG4gICAgKiBBcyB3ZSBhcmUgY2hhbmdpbmcgdGhlIHRvcCBwcm9wZXJ0eSBvZiB0aGUgcGFnZSBvbiBzY3JvbGxpbmcsIHdlIGNhbiBub3QgdXNlIHRoZSB0cmFkaXRpb25hbCB3YXkgdG8gZGV0ZWN0IGl0LlxuICAgICogVGhpcyB3YXksIHRoZSB0b3VjaHN0YXJ0IGFuZCB0aGUgdG91Y2ggbW92ZXMgc2hvd3MgYW4gc21hbGwgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZW0gd2hpY2ggaXMgdGhlXG4gICAgKiB1c2VkIG9uZSB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbi5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihlKSB7XG4gICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9IGNsb3Nlc3QoZS50YXJnZXQsIFNFQ1RJT05fU0VMKSB8fCBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaXRlbTtcbiAgICAgIHZhciBoYXNBY3RpdmVTZWN0aW9uT3ZlcmZsb3cgPSBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNTY3JvbGxhYmxlKGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbik7XG5cbiAgICAgIGlmIChpc1JlYWxseVRvdWNoKGUpKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBpc0dyYWJiaW5nOiB0cnVlLFxuICAgICAgICAgIGlzVXNpbmdXaGVlbDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGdldE9wdGlvbnMoKS5hdXRvU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgaWYgKGhhc0FjdGl2ZVNlY3Rpb25PdmVyZmxvdyAmJiAhc3RhdGUuY2FuU2Nyb2xsIHx8IGdldE9wdGlvbnMoKS5zY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgZWFzaW5nIG9uIGlPUyBkZXZpY2VzXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudHNQYWdlKGUpO1xuICAgICAgICB0b3VjaEVuZFkgPSB0b3VjaEV2ZW50cy55O1xuICAgICAgICB0b3VjaEVuZFggPSB0b3VjaEV2ZW50cy54O1xuICAgICAgICB2YXIgaXNWZXJ0aWNhbE1vdmVtZW50RW5vdWdoID0gTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpID4gd2luLmlubmVySGVpZ2h0IC8gMTAwICogZ2V0T3B0aW9ucygpLnRvdWNoU2Vuc2l0aXZpdHk7XG4gICAgICAgIHZhciBpc0hvcml6b250YWxNb3ZlbWVudEVub3VnaCA9IE1hdGguYWJzKHRvdWNoU3RhcnRYIC0gdG91Y2hFbmRYKSA+IGdldFdpbmRvd1dpZHRoKCkgLyAxMDAgKiBnZXRPcHRpb25zKCkudG91Y2hTZW5zaXRpdml0eTtcbiAgICAgICAgdmFyIGlzSG9yaXpvbnRhbFByZWRvbWluYW50TW92ZSA9ICQoU0xJREVTX1dSQVBQRVJfU0VMLCBhY3RpdmVTZWN0aW9uKS5sZW5ndGggJiYgTWF0aC5hYnModG91Y2hTdGFydFggLSB0b3VjaEVuZFgpID4gTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uSCA9IHRvdWNoU3RhcnRYID4gdG91Y2hFbmRYID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgdmFyIGRpcmVjdGlvblYgPSB0b3VjaFN0YXJ0WSA+IHRvdWNoRW5kWSA/ICdkb3duJyA6ICd1cCc7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0hvcml6b250YWxQcmVkb21pbmFudE1vdmUgPyBkaXJlY3Rpb25IIDogZGlyZWN0aW9uVjtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIHRvdWNoRGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgfSk7IC8vaWYgbW92ZW1lbnQgaW4gdGhlIFggYXh5cyBpcyBncmVhdGVyIHRoYW4gaW4gdGhlIFkgYW5kIHRoZSBjdXJyZWN0IHNlY3Rpb24gaGFzIHNsaWRlcy4uLlxuXG4gICAgICAgIGlmIChpc0hvcml6b250YWxQcmVkb21pbmFudE1vdmUpIHtcbiAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XG4gICAgICAgICAgaWYgKCFzdGF0ZS5zbGlkZU1vdmluZyAmJiBpc0hvcml6b250YWxNb3ZlbWVudEVub3VnaCkge1xuICAgICAgICAgICAgaWYgKHRvdWNoU3RhcnRYID4gdG91Y2hFbmRYKSB7XG4gICAgICAgICAgICAgIGlmIChnZXRJc1Njcm9sbEFsbG93ZWQoKS5tLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm1vdmVTbGlkZVJpZ2h0LCB7XG4gICAgICAgICAgICAgICAgICBzZWN0aW9uOiBhY3RpdmVTZWN0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChnZXRJc1Njcm9sbEFsbG93ZWQoKS5tLmxlZnQpIHtcbiAgICAgICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudHMubW92ZVNsaWRlTGVmdCwge1xuICAgICAgICAgICAgICAgICAgc2VjdGlvbjogYWN0aXZlU2VjdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vdmVydGljYWwgc2Nyb2xsaW5nIChvbmx5IHdoZW4gYXV0b1Njcm9sbGluZyBpcyBlbmFibGVkKVxuICAgICAgICBlbHNlIGlmIChnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZyAmJiBzdGF0ZS5jYW5TY3JvbGwpIHtcbiAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XG4gICAgICAgICAgaWYgKGlzVmVydGljYWxNb3ZlbWVudEVub3VnaCkge1xuICAgICAgICAgICAgc2Nyb2xsaW5nKGRpcmVjdGlvblYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIEFzIElFID49IDEwIGZpcmVzIGJvdGggdG91Y2ggYW5kIG1vdXNlIGV2ZW50cyB3aGVuIHVzaW5nIGEgbW91c2UgaW4gYSB0b3VjaHNjcmVlblxuICAgICogdGhpcyB3YXkgd2UgbWFrZSBzdXJlIHRoYXQgaXMgcmVhbGx5IGEgdG91Y2ggZXZlbnQgd2hhdCBJRSBpcyBkZXRlY3RpbmcuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gaXNSZWFsbHlUb3VjaChlKSB7XG4gICAgICAvL2lmIGlzIG5vdCBJRSAgIHx8ICBJRSBpcyBkZXRlY3RpbmcgYHRvdWNoYCBvciBgcGVuYFxuICAgICAgcmV0dXJuIHR5cGVvZiBlLnBvaW50ZXJUeXBlID09PSAndW5kZWZpbmVkJyB8fCBlLnBvaW50ZXJUeXBlICE9ICdtb3VzZSc7XG4gICAgfVxuICAgIC8qKlxuICAgICogSGFuZGxlciBmb3IgdGhlIHRvdWNoIHN0YXJ0IGV2ZW50LlxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGUpIHtcbiAgICAgIC8vc3RvcHBpbmcgdGhlIGF1dG8gc2Nyb2xsIHRvIGFkanVzdCB0byBhIHNlY3Rpb25cbiAgICAgIGlmIChnZXRPcHRpb25zKCkuZml0VG9TZWN0aW9uKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmVBbmltYXRpb246IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNSZWFsbHlUb3VjaChlKSkge1xuICAgICAgICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudHNQYWdlKGUpO1xuICAgICAgICB0b3VjaFN0YXJ0WSA9IHRvdWNoRXZlbnRzLnk7XG4gICAgICAgIHRvdWNoU3RhcnRYID0gdG91Y2hFdmVudHMueDtcbiAgICAgIH1cblxuICAgICAgd2luZG93QWRkRXZlbnQoJ3RvdWNoZW5kJywgdG91Y2hFbmRIYW5kbGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIYW5kbGVyIGZvciB0aGUgdG91Y2ggZW5kIGV2ZW50LlxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcigpIHtcbiAgICAgIHdpbmRvd1JlbW92ZUV2ZW50KCd0b3VjaGVuZCcsIHRvdWNoRW5kSGFuZGxlcik7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGlzR3JhYmJpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBwYWdlWCBhbmQgcGFnZVkgcHJvcGVydGllcyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXG4gICAgKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE5NCNpc3N1ZWNvbW1lbnQtMzQwNjk4NTRcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBnZXRFdmVudHNQYWdlKGUpIHtcbiAgICAgIHZhciBldmVudHMgPSB7fTtcbiAgICAgIGV2ZW50cy55ID0gdHlwZW9mIGUucGFnZVkgIT09ICd1bmRlZmluZWQnICYmIChlLnBhZ2VZIHx8IGUucGFnZVgpID8gZS5wYWdlWSA6IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgIGV2ZW50cy54ID0gdHlwZW9mIGUucGFnZVggIT09ICd1bmRlZmluZWQnICYmIChlLnBhZ2VZIHx8IGUucGFnZVgpID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5wYWdlWDsgLy9pbiB0b3VjaCBkZXZpY2VzIHdpdGggc2Nyb2xsQmFyOnRydWUsIGUucGFnZVkgaXMgZGV0ZWN0ZWQsIGJ1dCB3ZSBoYXZlIHRvIGRlYWwgd2l0aCB0b3VjaCBldmVudHMuICMxMDA4XG5cbiAgICAgIGlmIChpc1RvdWNoICYmIGlzUmVhbGx5VG91Y2goZSkgJiYgZ2V0T3B0aW9ucygpLnNjcm9sbEJhciAmJiB0eXBlb2YgZS50b3VjaGVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBldmVudHMueSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgZXZlbnRzLnggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudHM7XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZXR1cm5zIGFuZCBvYmplY3Qgd2l0aCBNaWNyb3NvZnQgcG9pbnRlcnMgKGZvciBJRTwxMSBhbmQgZm9yIElFID49IDExKVxuICAgICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2RuMzA0ODg2KHY9dnMuODUpLmFzcHhcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBnZXRNU1BvaW50ZXIoKSB7XG4gICAgICB2YXIgcG9pbnRlcjsgLy9JRSA+PSAxMSAmIHJlc3Qgb2YgYnJvd3NlcnNcblxuICAgICAgaWYgKHdpbi5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgcG9pbnRlciA9IHtcbiAgICAgICAgICBkb3duOiAncG9pbnRlcmRvd24nLFxuICAgICAgICAgIG1vdmU6ICdwb2ludGVybW92ZSdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvaW50ZXI7XG4gICAgfVxuICAgIC8qXG4gICAgKiBQcmV2ZW50aW5nIGJvdW5jaW5nIGluIGlPUyAjMjI4NVxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHByZXZlbnRCb3VuY2luZyhlKSB7XG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgJiYgaXNSZWFsbHlUb3VjaChlKSAmJiBnZXRJc1Njcm9sbEFsbG93ZWQoKS5tLnVwKSB7XG4gICAgICAgIC8vcHJldmVudGluZyB0aGUgZWFzaW5nIG9uIGlPUyBkZXZpY2VzXG4gICAgICAgIGlmICghc3RhdGUuY2FuU2Nyb2xsKSB7XG4gICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBGUC5tb3ZlU2xpZGVMZWZ0ID0gbW92ZVNsaWRlTGVmdDtcbiAgICBGUC5tb3ZlU2xpZGVSaWdodCA9IG1vdmVTbGlkZVJpZ2h0O1xuICAgIC8qKlxuICAgICogU2xpZGVzIGEgc2xpZGVyIHRvIHRoZSBnaXZlbiBkaXJlY3Rpb24uXG4gICAgKiBPcHRpb25hbCBgc2VjdGlvbmAgcGFyYW0uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZShkaXJlY3Rpb24sIHNlY3Rpb24pIHtcbiAgICAgIHZhciBhY3RpdmVTZWN0aW9uSXRlbSA9IHNlY3Rpb24gPT0gbnVsbCA/IGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5pdGVtIDogc2VjdGlvbjtcbiAgICAgIHZhciBhY3RpdmVTZWN0aW9uID0gZ2V0UGFuZWxCeUVsZW1lbnQoc3RhdGUuc2VjdGlvbnMsIGFjdGl2ZVNlY3Rpb25JdGVtKTtcbiAgICAgIHZhciBzbGlkZXMgPSAkKFNMSURFU19XUkFQUEVSX1NFTCwgYWN0aXZlU2VjdGlvbkl0ZW0pWzBdOyAvLyBtb3JlIHRoYW4gb25lIHNsaWRlIG5lZWRlZCBhbmQgbm90aGluZyBzaG91bGQgYmUgc2xpZGluZ1xuXG4gICAgICBpZiAoc2xpZGVzID09IG51bGwgfHwgc3RhdGUuc2xpZGVNb3ZpbmcgfHwgYWN0aXZlU2VjdGlvbi5zbGlkZXMubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50U2xpZGUgPSBhY3RpdmVTZWN0aW9uLmFjdGl2ZVNsaWRlO1xuICAgICAgdmFyIGRlc3RpbnkgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IGN1cnJlbnRTbGlkZS5wcmV2KCkgOiBjdXJyZW50U2xpZGUubmV4dCgpOyAvL2lzbid0IHRoZXJlIGEgbmV4dCBzbGlkZSBpbiB0aGUgc2VjdWVuY2U/XG5cbiAgICAgIGlmICghZGVzdGlueSkge1xuICAgICAgICAvL3Jlc3BlY3QgbG9vcEhvcml6b250YWwgc2V0dGluZ1xuICAgICAgICBpZiAoIWdldE9wdGlvbnMoKS5sb29wSG9yaXpvbnRhbCkgcmV0dXJuO1xuICAgICAgICBkZXN0aW55ID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyBnZXRMYXN0KGFjdGl2ZVNlY3Rpb24uc2xpZGVzKSA6IGFjdGl2ZVNlY3Rpb24uc2xpZGVzWzBdO1xuICAgICAgfVxuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIHNsaWRlTW92aW5nOiAhRlAudGVzdC5pc1Rlc3RpbmdcbiAgICAgIH0pO1xuICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueS5pdGVtLCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFNsaWRlcyBsZWZ0IHRoZSBzbGlkZXIgb2YgdGhlIGFjdGl2ZSBzZWN0aW9uLlxuICAgICogT3B0aW9uYWwgYHNlY3Rpb25gIHBhcmFtLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVMZWZ0KHNlY3Rpb24pIHtcbiAgICAgIG1vdmVTbGlkZSgnbGVmdCcsIHNlY3Rpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFNsaWRlcyByaWdodCB0aGUgc2xpZGVyIG9mIHRoZSBhY3RpdmUgc2VjdGlvbi5cbiAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlUmlnaHQoc2VjdGlvbikge1xuICAgICAgbW92ZVNsaWRlKCdyaWdodCcsIHNlY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0cyBhIHNlY3Rpb24gYnkgaXRzIGFuY2hvciAvIGluZGV4XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGdldFNlY3Rpb25CeUFuY2hvcihzZWN0aW9uQW5jaG9yKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IGdldFN0YXRlKCkuc2VjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWN0aW9uLmFuY2hvciA9PT0gc2VjdGlvbkFuY2hvcjtcbiAgICAgIH0pWzBdO1xuXG4gICAgICBpZiAoIXNlY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IHR5cGVvZiBzZWN0aW9uQW5jaG9yICE9PSAndW5kZWZpbmVkJyA/IHNlY3Rpb25BbmNob3IgLSAxIDogMDtcbiAgICAgICAgc2VjdGlvbiA9IGdldFN0YXRlKCkuc2VjdGlvbnNbc2VjdGlvbkluZGV4XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTY3JvbGxzIHRoZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlIGRlc3RpbmF0aW9uIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzY3JvbGxTbGlkZXIoc2xpZGVFbGVtKSB7XG4gICAgICBpZiAoc2xpZGVFbGVtICE9IG51bGwpIHtcbiAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKGNsb3Nlc3Qoc2xpZGVFbGVtLCBTTElERVNfV1JBUFBFUl9TRUwpLCBzbGlkZUVsZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUgYW5jaG9yc1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpIHtcbiAgICAgIHZhciBzZWN0aW9uID0gZ2V0U2VjdGlvbkJ5QW5jaG9yKHNlY3Rpb25BbmNob3IpOyAvL2RvIG5vdGhpbmcgaWYgdGhlcmUncyBubyBzZWN0aW9uIHdpdGggdGhlIGdpdmVuIGFuY2hvciBuYW1lXG5cbiAgICAgIGlmIChzZWN0aW9uID09IG51bGwpIHJldHVybjtcbiAgICAgIHZhciBzbGlkZUVsZW0gPSBnZXRTbGlkZUJ5QW5jaG9yKHNsaWRlQW5jaG9yLCBzZWN0aW9uKTsgLy93ZSBuZWVkIHRvIHNjcm9sbCB0byB0aGUgc2VjdGlvbiBhbmQgdGhlbiB0byB0aGUgc2xpZGVcblxuICAgICAgaWYgKCghc2VjdGlvbi5hbmNob3IgfHwgc2VjdGlvbi5hbmNob3IgIT09IHN0YXRlLmxhc3RTY3JvbGxlZERlc3RpbnkpICYmICFoYXNDbGFzcyhzZWN0aW9uLml0ZW0sIEFDVElWRSkpIHtcbiAgICAgICAgc2Nyb2xsUGFnZShzZWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2Nyb2xsU2xpZGVyKHNsaWRlRWxlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvL2lmIHdlIHdlcmUgYWxyZWFkeSBpbiB0aGUgc2VjdGlvblxuICAgICAgZWxzZSB7XG4gICAgICAgIHNjcm9sbFNsaWRlcihzbGlkZUVsZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgYSBzbGlkZSBpbnNpZGUgYSBnaXZlbiBzZWN0aW9uIGJ5IGl0cyBhbmNob3IgLyBpbmRleFxuICAgICovXG5cbiAgICBmdW5jdGlvbiBnZXRTbGlkZUJ5QW5jaG9yKHNsaWRlQW5jaG9yLCBzZWN0aW9uKSB7XG4gICAgICB2YXIgc2xpZGUgPSBzZWN0aW9uLnNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiBzbGlkZS5hbmNob3IgPT09IHNsaWRlQW5jaG9yO1xuICAgICAgfSlbMF07XG5cbiAgICAgIGlmIChzbGlkZSA9PSBudWxsKSB7XG4gICAgICAgIHNsaWRlQW5jaG9yID0gdHlwZW9mIHNsaWRlQW5jaG9yICE9PSAndW5kZWZpbmVkJyA/IHNsaWRlQW5jaG9yIDogMDtcbiAgICAgICAgc2xpZGUgPSBzZWN0aW9uLnNsaWRlc1tzbGlkZUFuY2hvcl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzbGlkZSA/IHNsaWRlLml0ZW0gOiBudWxsO1xuICAgIH1cblxuICAgIEZQLm1vdmVUbyA9IG1vdmVUbyQxO1xuICAgIC8qKlxuICAgICogTW92ZXMgdGhlIHBhZ2UgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlLlxuICAgICogQW5jaG9ycyBvciBpbmRleCBwb3NpdGlvbnMgY2FuIGJlIHVzZWQgYXMgcGFyYW1zLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBtb3ZlVG8kMShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcikge1xuICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTZWN0aW9uQnlBbmNob3Ioc2VjdGlvbkFuY2hvcik7XG5cbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVBbmNob3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XG4gICAgICB9IGVsc2UgaWYgKGRlc3RpbnkgIT0gbnVsbCkge1xuICAgICAgICBzY3JvbGxQYWdlKGRlc3RpbnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vQHRzLWNoZWNrXG4gICAgdmFyIGdfY29udHJvbFByZXNzZWQ7XG4gICAgdmFyIGdfa2V5ZG93bklkO1xuICAgIHZhciBnX2VsVG9Gb2N1cztcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLmJpbmRFdmVudHMsIGJpbmRFdmVudHMkOCk7XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzJDgoKSB7XG4gICAgICAvL3doZW4gb3BlbmluZyBhIG5ldyB0YWIgKGN0cmwgKyB0KSwgYGNvbnRyb2xgIHdvbid0IGJlIHByZXNzZWQgd2hlbiBjb21pbmcgYmFjay5cbiAgICAgIHdpbmRvd0FkZEV2ZW50KCdibHVyJywgYmx1ckhhbmRsZXIpOyAvL1NsaWRpbmcgd2l0aCBhcnJvdyBrZXlzLCBib3RoLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxuXG4gICAgICBkb2NBZGRFdmVudCgna2V5ZG93bicsIGtleWRvd25IYW5kbGVyKTsgLy90byBwcmV2ZW50IHNjcm9sbGluZyB3aGlsZSB6b29taW5nXG5cbiAgICAgIGRvY0FkZEV2ZW50KCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLm9uRGVzdHJveSwgb25EZXN0cm95JDUpO1xuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5hZnRlclNsaWRlTG9hZHMsIG9uQWZ0ZXJTbGlkZUxvYWRzKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYWZ0ZXJTZWN0aW9uTG9hZHMsIGFmdGVyU2VjdGlvbkxvYWRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRlc3Ryb3kkNSgpIHtcbiAgICAgIGNsZWFyVGltZW91dChnX2tleWRvd25JZCk7XG4gICAgICBkb2NSZW1vdmVFdmVudCgna2V5ZG93bicsIGtleWRvd25IYW5kbGVyKTtcbiAgICAgIGRvY1JlbW92ZUV2ZW50KCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gICAgfSAvL1NsaWRpbmcgd2l0aCBhcnJvdyBrZXlzLCBib3RoLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxuXG5cbiAgICBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ19rZXlkb3duSWQpO1xuICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICB2YXIgaXNQcmVzc2luZ0hvcml6b250YWxBcnJvd3MgPSBbMzcsIDM5XS5pbmRleE9mKGtleUNvZGUpID4gLTE7XG4gICAgICB2YXIgY2FuU2Nyb2xsV2l0aEtleWJvYXJkID0gZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgfHwgZ2V0T3B0aW9ucygpLmZpdFRvU2VjdGlvbiB8fCBpc1ByZXNzaW5nSG9yaXpvbnRhbEFycm93czsgLy90YWI/XG5cbiAgICAgIGlmIChrZXlDb2RlID09PSA5KSB7XG4gICAgICAgIG9uVGFiKGUpO1xuICAgICAgfSBlbHNlIGlmICghaXNJbnNpZGVJbnB1dCgpICYmIGdldE9wdGlvbnMoKS5rZXlib2FyZFNjcm9sbGluZyAmJiBjYW5TY3JvbGxXaXRoS2V5Ym9hcmQpIHtcbiAgICAgICAgZ19jb250cm9sUHJlc3NlZCA9IGUuY3RybEtleTtcbiAgICAgICAgZ19rZXlkb3duSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvbmtleWRvd24oZSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIEtleWRvd24gZXZlbnRcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBvbmtleWRvd24oZSkge1xuICAgICAgdmFyIHNoaWZ0UHJlc3NlZCA9IGUuc2hpZnRLZXk7XG4gICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgdmFyIGlzTWVkaWFGb2N1c2VkID0gbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAndmlkZW8nKSB8fCBtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdhdWRpbycpO1xuICAgICAgdmFyIGlzU2Nyb2xsZWQgPSB7XG4gICAgICAgIHVwOiBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNTY3JvbGxlZCgndXAnLCBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaXRlbSksXG4gICAgICAgIGRvd246IHNjcm9sbE92ZXJmbG93SGFuZGxlci5pc1Njcm9sbGVkKCdkb3duJywgZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW0pXG4gICAgICB9O1xuICAgICAgdmFyIGlzVXNpbmdIb3Jpem9udGFsQXJyb3dLZXlzID0gWzM3LCAzOV0uaW5kZXhPZihlLmtleUNvZGUpID4gLTE7XG4gICAgICBjYW5jZWxEaXJlY3Rpb25LZXlFdmVudHMoZSk7IC8vZG8gbm90aGluZyBpZiB3ZSBjYW4gbm90IHNjcm9sbCBvciB3ZSBhcmUgbm90IHVzaW5nIGhvcml6b3RuYWwga2V5IGFycm93cy5cblxuICAgICAgaWYgKCFzdGF0ZS5jYW5TY3JvbGwgJiYgIWlzVXNpbmdIb3Jpem9udGFsQXJyb3dLZXlzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiAna2V5ZG93bidcbiAgICAgIH0pO1xuXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAvL3VwXG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgaWYgKGdldElzU2Nyb2xsQWxsb3dlZCgpLmsudXAgJiYgaXNTY3JvbGxlZC51cCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmlzQmV5b25kRnVsbHBhZ2UpIHtcbiAgICAgICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm9uS2V5RG93biwge1xuICAgICAgICAgICAgICAgIGU6IGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci5mb2N1c1Njcm9sbGFibGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy9kb3duXG5cbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAvL3NwYWNlYmFyXG4gICAgICAgICAgaWYgKHNoaWZ0UHJlc3NlZCAmJiBnZXRJc1Njcm9sbEFsbG93ZWQoKS5rLnVwICYmICFpc01lZGlhRm9jdXNlZCAmJiBpc1Njcm9sbGVkLnVwKSB7XG4gICAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuXG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgaWYgKGdldElzU2Nyb2xsQWxsb3dlZCgpLmsuZG93biAmJiBpc1Njcm9sbGVkLmRvd24pIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pc0JleW9uZEZ1bGxwYWdlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gLy8gc3BhY2UgYmFyP1xuXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgIT09IDMyIHx8ICFpc01lZGlhRm9jdXNlZCkge1xuICAgICAgICAgICAgICBtb3ZlU2VjdGlvbkRvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmZvY3VzU2Nyb2xsYWJsZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvL0hvbWVcblxuICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgIGlmIChnZXRJc1Njcm9sbEFsbG93ZWQoKS5rLnVwKSB7XG4gICAgICAgICAgICBtb3ZlVG8kMSgxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy9FbmRcblxuICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgIGlmIChnZXRJc1Njcm9sbEFsbG93ZWQoKS5rLmRvd24pIHtcbiAgICAgICAgICAgIG1vdmVUbyQxKGdldFN0YXRlKCkuc2VjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy9sZWZ0XG5cbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBpZiAoZ2V0SXNTY3JvbGxBbGxvd2VkKCkuay5sZWZ0KSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVMZWZ0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vcmlnaHRcblxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGlmIChnZXRJc1Njcm9sbEFsbG93ZWQoKS5rLnJpZ2h0KSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVSaWdodCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBleGl0IHRoaXMgaGFuZGxlciBmb3Igb3RoZXIga2V5c1xuICAgICAgfVxuICAgIH0gLy90byBwcmV2ZW50IHNjcm9sbGluZyB3aGlsZSB6b29taW5nXG5cblxuICAgIGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgICBpZiAoc3RhdGUuaXNXaW5kb3dGb2N1c2VkKSB7XG4gICAgICAgIC8vdGhlIGtleXVwIGdldHMgZmlyZWQgb24gbmV3IHRhYiBjdHJsICsgdCBpbiBGaXJlZm94XG4gICAgICAgIGdfY29udHJvbFByZXNzZWQgPSBlLmN0cmxLZXk7XG4gICAgICB9XG4gICAgfSAvL3doZW4gb3BlbmluZyBhIG5ldyB0YWIgKGN0cmwgKyB0KSwgYGNvbnRyb2xgIHdvbid0IGJlIHByZXNzZWQgd2hlbiBjb21pbmcgYmFjay5cblxuXG4gICAgZnVuY3Rpb24gYmx1ckhhbmRsZXIoKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGlzV2luZG93Rm9jdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgZ19jb250cm9sUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAqIE1ha2VzIHN1cmUgdGhlIHRhYiBrZXkgd2lsbCBvbmx5IGZvY3VzIGVsZW1lbnRzIHdpdGhpbiB0aGUgY3VycmVudCBzZWN0aW9uL3NsaWRlXG4gICAgKiBwcmV2ZW50aW5nIHRoaXMgd2F5IGZyb20gYnJlYWtpbmcgdGhlIHBhZ2UuXG4gICAgKiBCYXNlZCBvbiBcIk1vZGFscyBhbmQga2V5Ym9hcmQgdHJhcHNcIlxuICAgICogZnJvbSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2FjY2Vzc2liaWxpdHkvZm9jdXMvdXNpbmctdGFiaW5kZXhcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBvblRhYihlKSB7XG4gICAgICB2YXIgaXNTaGlmdFByZXNzZWQgPSBlLnNoaWZ0S2V5O1xuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZXMoZ2V0U2xpZGVPclNlY3Rpb24oZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW0pKTtcblxuICAgICAgZnVuY3Rpb24gcHJldmVudEFuZEZvY3VzRmlyc3QoZSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzWzBdID8gZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKSA6IG51bGw7XG4gICAgICB9IC8vIGRlYWN0aXZhdGluZyB0YWIgd2hpbGUgc2Nyb2xsaW5nICM0NTUwXG5cblxuICAgICAgaWYgKCFzdGF0ZS5jYW5TY3JvbGwpIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy9vdXRzaWRlIGFueSBzZWN0aW9uIG9yIHNsaWRlPyBMZXQncyBub3QgaGlqYWNrIHRoZSB0YWIhXG5cblxuICAgICAgaWYgKGlzRm9jdXNPdXRzaWRlKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy9pcyB0aGVyZSBhbiBlbGVtZW50IHdpdGggZm9jdXM/XG5cblxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGNsb3Nlc3QoYWN0aXZlRWxlbWVudCwgU0VDVElPTl9BQ1RJVkVfU0VMICsgJywnICsgU0VDVElPTl9BQ1RJVkVfU0VMICsgJyAnICsgU0xJREVfQUNUSVZFX1NFTCkgPT0gbnVsbCkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBwcmV2ZW50QW5kRm9jdXNGaXJzdChlKTtcbiAgICAgICAgfVxuICAgICAgfSAvL25vIGVsZW1lbnQgaWYgZm9jdXNlZD8gTGV0J3MgZm9jdXMgdGhlIGZpcnN0IG9uZSBvZiB0aGUgc2VjdGlvbi9zbGlkZVxuICAgICAgZWxzZSB7XG4gICAgICAgIHByZXZlbnRBbmRGb2N1c0ZpcnN0KGUpO1xuICAgICAgfSAvL3doZW4gcmVhY2hlZCB0aGUgZmlyc3Qgb3IgbGFzdCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgc2VjdGlvbi9zbGlkZVxuICAgICAgLy93ZSBwcmV2ZW50IHRoZSB0YWIgYWN0aW9uIHRvIGtlZXAgaXQgaW4gdGhlIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnRcblxuXG4gICAgICB2YXIgaXNGaXJzdEZvY3VzYWJsZUluU2VjdGlvbiA9IGFjdGl2ZUVsZW1lbnQgPT0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgICB2YXIgaXNMYXN0Rm9jdXNhYmxlSW5TZWN0aW9uID0gYWN0aXZlRWxlbWVudCA9PSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBpc05leHRJdGVtID0gIWlzU2hpZnRQcmVzc2VkICYmIGlzTGFzdEZvY3VzYWJsZUluU2VjdGlvbjtcbiAgICAgIHZhciBpc1ByZXZJdGVtID0gaXNTaGlmdFByZXNzZWQgJiYgaXNGaXJzdEZvY3VzYWJsZUluU2VjdGlvbjtcblxuICAgICAgaWYgKGlzUHJldkl0ZW0gfHwgaXNOZXh0SXRlbSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgdmFyIGZvY3VzSW5mbyA9IGdldFBhbmVsV2l0aEZvY3VzYWJsZShpc1ByZXZJdGVtKTtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uUGFuZWwgPSBmb2N1c0luZm8gPyBmb2N1c0luZm8ucGFuZWwgOiBudWxsO1xuXG4gICAgICAgIGlmIChkZXN0aW5hdGlvblBhbmVsKSB7XG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uU2VjdGlvbiA9IGRlc3RpbmF0aW9uUGFuZWwuaXNTZWN0aW9uID8gZGVzdGluYXRpb25QYW5lbCA6IGRlc3RpbmF0aW9uUGFuZWwucGFyZW50O1xuICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5vblNjcm9sbFBhZ2VBbmRTbGlkZSwge1xuICAgICAgICAgICAgc2VjdGlvbkFuY2hvcjogZGVzdGluYXRpb25TZWN0aW9uLmluZGV4KCkgKyAxLFxuICAgICAgICAgICAgc2xpZGVBbmNob3I6IGRlc3RpbmF0aW9uUGFuZWwuaXNTZWN0aW9uID8gMCA6IGRlc3RpbmF0aW9uUGFuZWwuaW5kZXgoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdfZWxUb0ZvY3VzID0gZm9jdXNJbmZvLml0ZW1Ub0ZvY3VzO1xuICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25BZnRlclNsaWRlTG9hZHModikge1xuICAgICAgZm9jdXNJdGVtKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWZ0ZXJTZWN0aW9uTG9hZHModikge1xuICAgICAgaWYgKCFjbG9zZXN0KGdfZWxUb0ZvY3VzLCBTTElERV9TRUwpIHx8IGNsb3Nlc3QoZ19lbFRvRm9jdXMsIFNMSURFX0FDVElWRV9TRUwpKSB7XG4gICAgICAgIGZvY3VzSXRlbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzSXRlbSgpIHtcbiAgICAgIGlmIChnX2VsVG9Gb2N1cykge1xuICAgICAgICBnX2VsVG9Gb2N1cy5mb2N1cygpO1xuICAgICAgICBnX2VsVG9Gb2N1cyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCdzIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBlbGVtZW50IHRvIGZvY3VzLlxuICAgICAqXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGdldFBhbmVsV2l0aEZvY3VzYWJsZShpc1ByZXZJdGVtKSB7XG4gICAgICB2YXIgYWN0aW9uID0gaXNQcmV2SXRlbSA/ICdwcmV2UGFuZWwnIDogJ25leHRQYW5lbCc7XG4gICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBbXTtcbiAgICAgIHZhciBwYW5lbFdpdGhGb2N1c2FibGVzO1xuICAgICAgdmFyIGN1cnJlbnRQYW5lbCA9IGdldFNsaWRlT3JTZWN0aW9uUGFuZWwoZ2V0QWN0aXZlUGFuZWwoKVthY3Rpb25dKCkpO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlcyhjdXJyZW50UGFuZWwuaXRlbSk7XG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHBhbmVsV2l0aEZvY3VzYWJsZXMgPSB7XG4gICAgICAgICAgICBwYW5lbDogY3VycmVudFBhbmVsLFxuICAgICAgICAgICAgaXRlbVRvRm9jdXM6IGZvY3VzYWJsZUVsZW1lbnRzW2lzUHJldkl0ZW0gPyBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxIDogMF1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb25QYW5lbChjdXJyZW50UGFuZWxbYWN0aW9uXSgpKTtcbiAgICAgIH0gd2hpbGUgKGN1cnJlbnRQYW5lbCAmJiBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gcGFuZWxXaXRoRm9jdXNhYmxlcztcbiAgICB9XG4gICAgLyoqXG4gICAgKiBHZXRzIGFsbCB0aGUgZm9jdXNhYmxlIGVsZW1lbnRzIGluc2lkZSB0aGUgcGFzc2VkIGVsZW1lbnQuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlcyhlbCkge1xuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoJChmb2N1c2FibGVFbGVtZW50c1N0cmluZywgZWwpKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGdldEF0dHIoaXRlbSwgJ3RhYmluZGV4JykgIT09ICctMScgJiYgLy9hcmUgYWxzbyBub3QgaGlkZGVuIGVsZW1lbnRzIChvciB3aXRoIGhpZGRlbiBwYXJlbnRzKVxuICAgICAgICBpdGVtLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZm9jdXMgaXMgb3V0c2lkZSBmdWxscGFnZS5qcyBzZWN0aW9ucy9zbGlkZXMgb3Igbm90LlxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGlzRm9jdXNPdXRzaWRlKGUpIHtcbiAgICAgIHZhciBhbGxGb2N1c2FibGVzID0gZ2V0Rm9jdXNhYmxlcyhkb2MpO1xuICAgICAgdmFyIGN1cnJlbnRGb2N1c0luZGV4ID0gYWxsRm9jdXNhYmxlcy5pbmRleE9mKGRvYy5hY3RpdmVFbGVtZW50KTtcbiAgICAgIHZhciBmb2N1c0Rlc3RpbmF0aW9uSW5kZXggPSBlLnNoaWZ0S2V5ID8gY3VycmVudEZvY3VzSW5kZXggLSAxIDogY3VycmVudEZvY3VzSW5kZXggKyAxO1xuICAgICAgdmFyIGZvY3VzRGVzdGluYXRpb24gPSBhbGxGb2N1c2FibGVzW2ZvY3VzRGVzdGluYXRpb25JbmRleF07XG4gICAgICB2YXIgZGVzdGluYXRpb25JdGVtU2xpZGUgPSBjbG9zZXN0KGZvY3VzRGVzdGluYXRpb24sIFNMSURFX1NFTCk7XG4gICAgICB2YXIgZGVzdGluYXRpb25JdGVtU2VjdGlvbiA9IGNsb3Nlc3QoZm9jdXNEZXN0aW5hdGlvbiwgU0VDVElPTl9TRUwpO1xuICAgICAgcmV0dXJuICFkZXN0aW5hdGlvbkl0ZW1TbGlkZSAmJiAhZGVzdGluYXRpb25JdGVtU2VjdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG91bGRDYW5jZWxLZXlib2FyZE5hdmlnYXRpb24oZSkge1xuICAgICAgLy8gaHR0cHM6Ly9rZXljb2RlLmluZm8vZm9yLzM0XG4gICAgICAvLyA0MCA9IGFycm93IGRvd25cbiAgICAgIC8vIDM4ID0gYXJyb3cgdXBcbiAgICAgIC8vIDMyID0gc3BhY2ViYXJcbiAgICAgIC8vIDMzICA9IFBhZ2VVcFxuICAgICAgLy8gMzQgPSBQYWdlRG93blxuICAgICAgdmFyIGtleUNvbnRyb2xzID0gWzQwLCAzOCwgMzIsIDMzLCAzNF07XG4gICAgICByZXR1cm4ga2V5Q29udHJvbHMuaW5kZXhPZihlLmtleUNvZGUpID4gLTEgJiYgIXN0YXRlLmlzQmV5b25kRnVsbHBhZ2U7XG4gICAgfSAvL3ByZXZlbnRpbmcgdGhlIHNjcm9sbCB3aXRoIGFycm93IGtleXMgJiBzcGFjZWJhciAmIFBhZ2UgVXAgJiBEb3duIGtleXNcblxuXG4gICAgZnVuY3Rpb24gY2FuY2VsRGlyZWN0aW9uS2V5RXZlbnRzKGUpIHtcbiAgICAgIGlmIChzaG91bGRDYW5jZWxLZXlib2FyZE5hdmlnYXRpb24oZSkgJiYgIWNsb3Nlc3QoZS50YXJnZXQsIE9WRVJGTE9XX1NFTCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRyb2xQcmVzc2VkKCkge1xuICAgICAgcmV0dXJuIGdfY29udHJvbFByZXNzZWQ7XG4gICAgfVxuXG4gICAgdmFyIHByZXZUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHNjcm9sbGluZ3MgPSBbXTtcbiAgICBGUC5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nID0gc2V0TW91c2VXaGVlbFNjcm9sbGluZztcbiAgICAvKipcbiAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBwb3NzaWJpbGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUgbW91c2Ugd2hlZWwgb3IgdGhlIHRyYWNrcGFkLlxuICAgICovXG5cbiAgICBmdW5jdGlvbiBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgYWRkTW91c2VXaGVlbEhhbmRsZXIoKTtcbiAgICAgICAgYWRkTWlkZGxlV2hlZWxIYW5kbGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVNb3VzZVdoZWVsSGFuZGxlcigpO1xuICAgICAgICByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgKiBBZGRzIHRoZSBhdXRvIHNjcm9sbGluZyBhY3Rpb24gZm9yIHRoZSBtb3VzZSB3aGVlbCBhbmQgdHJhY2twYWQuXG4gICAgKiBBZnRlciB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIG1vdXNld2hlZWwgYW5kIHRyYWNrcGFkIG1vdmVtZW50cyB3aWxsIHNjcm9sbCB0aHJvdWdoIHNlY3Rpb25zXG4gICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvd2hlZWxcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBhZGRNb3VzZVdoZWVsSGFuZGxlcigpIHtcbiAgICAgIHZhciBwcmVmaXggPSAnJztcblxuICAgICAgdmFyIF9hZGRFdmVudExpc3RlbmVyO1xuXG4gICAgICBpZiAod2luLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIgPSBcImFkZEV2ZW50TGlzdGVuZXJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyID0gXCJhdHRhY2hFdmVudFwiO1xuICAgICAgICBwcmVmaXggPSAnb24nO1xuICAgICAgfSAvLyBkZXRlY3QgYXZhaWxhYmxlIHdoZWVsIGV2ZW50XG5cblxuICAgICAgdmFyIHN1cHBvcnQgPSAnb253aGVlbCcgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpID8gJ3doZWVsJyA6IC8vIE1vZGVybiBicm93c2VycyBzdXBwb3J0IFwid2hlZWxcIlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZG9jLm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gJ21vdXNld2hlZWwnIDogLy8gV2Via2l0IGFuZCBJRSBzdXBwb3J0IGF0IGxlYXN0IFwibW91c2V3aGVlbFwiXG4gICAgICAnRE9NTW91c2VTY3JvbGwnOyAvLyBsZXQncyBhc3N1bWUgdGhhdCByZW1haW5pbmcgYnJvd3NlcnMgYXJlIG9sZGVyIEZpcmVmb3hcblxuICAgICAgdmFyIHBhc3NpdmVFdmVudCA9IGdldFBhc3NpdmVPcHRpb25zSWZQb3NzaWJsZSgpO1xuXG4gICAgICBpZiAoc3VwcG9ydCA9PSAnRE9NTW91c2VTY3JvbGwnKSB7XG4gICAgICAgIGRvY1tfYWRkRXZlbnRMaXN0ZW5lcl0ocHJlZml4ICsgJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBNb3VzZVdoZWVsSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgIH0gLy9oYW5kbGUgTW96TW91c2VQaXhlbFNjcm9sbCBpbiBvbGRlciBGaXJlZm94XG4gICAgICBlbHNlIHtcbiAgICAgICAgZG9jW19hZGRFdmVudExpc3RlbmVyXShwcmVmaXggKyBzdXBwb3J0LCBNb3VzZVdoZWVsSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgKiBCaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBhZGRNaWRkbGVXaGVlbEhhbmRsZXIoKSB7XG4gICAgICBnZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25IYW5kbGVyKTtcbiAgICAgIGdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICogUmVtb3ZlcyB0aGUgYXV0byBzY3JvbGxpbmcgYWN0aW9uIGZpcmVkIGJ5IHRoZSBtb3VzZSB3aGVlbCBhbmQgdHJhY2twYWQuXG4gICAgKiBBZnRlciB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIG1vdXNld2hlZWwgYW5kIHRyYWNrcGFkIG1vdmVtZW50cyB3b24ndCBzY3JvbGwgdGhyb3VnaCBzZWN0aW9ucy5cbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVNb3VzZVdoZWVsSGFuZGxlcigpIHtcbiAgICAgIGlmIChkb2MuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2NSZW1vdmVFdmVudCgnbW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vSUU5LCBDaHJvbWUsIFNhZmFyaSwgT3BlclxuXG4gICAgICAgIGRvY1JlbW92ZUV2ZW50KCd3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vRmlyZWZveFxuXG4gICAgICAgIGRvY1JlbW92ZUV2ZW50KCdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9vbGQgRmlyZWZveFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkb2MuZGV0YWNoRXZlbnQoJ29ubW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyKTsgLy9JRSA2LzcvOFxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIFVuYmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyByZWxlYXNlZFxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1pZGRsZVdoZWVsSGFuZGxlcigpIHtcbiAgICAgIGdldENvbnRhaW5lcigpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkhhbmRsZXIpO1xuICAgICAgZ2V0Q29udGFpbmVyKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZWN0aW5nIG1vdXNld2hlZWwgc2Nyb2xsaW5nXG4gICAgICpcbiAgICAgKiBodHRwOi8vYmxvZ3Muc2l0ZXBvaW50c3RhdGljLmNvbS9leGFtcGxlcy90ZWNoL21vdXNlLXdoZWVsL2luZGV4Lmh0bWxcbiAgICAgKiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vaHRtbDUtamF2YXNjcmlwdC1tb3VzZS13aGVlbC9cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gTW91c2VXaGVlbEhhbmRsZXIoZSkge1xuICAgICAgdmFyIGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciBpc05vcm1hbFNjcm9sbCA9IGhhc0NsYXNzKCQoQ09NUExFVEVMWV9TRUwpWzBdLCBOT1JNQUxfU0NST0xMKTtcbiAgICAgIHZhciBpc1Njcm9sbEFsbG93ZWRCZXlvbmRGdWxsUGFnZSA9IGJleW9uZEZ1bGxQYWdlSGFuZGxlcihnZXRDb250YWluZXIoKSwgZSk7XG5cbiAgICAgIGlmICghc3RhdGUuaXNVc2luZ1doZWVsKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBpc0dyYWJiaW5nOiBmYWxzZSxcbiAgICAgICAgICBpc1VzaW5nV2hlZWw6IHRydWUsXG4gICAgICAgICAgdG91Y2hEaXJlY3Rpb246ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgIH0gLy9pcyBzY3JvbGwgYWxsb3dlZD9cblxuXG4gICAgICBpZiAoIWdldElzU2Nyb2xsQWxsb3dlZCgpLm0uZG93biAmJiAhZ2V0SXNTY3JvbGxBbGxvd2VkKCkubS51cCkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTY3JvbGxBbGxvd2VkQmV5b25kRnVsbFBhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGlzU2Nyb2xsQWxsb3dlZEJleW9uZEZ1bGxQYWdlID09PSBmYWxzZSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvL2F1dG9zY3JvbGxpbmcgYW5kIG5vdCB6b29taW5nP1xuXG5cbiAgICAgIGlmIChnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZyAmJiAhZ2V0Q29udHJvbFByZXNzZWQoKSAmJiAhaXNOb3JtYWxTY3JvbGwpIHtcbiAgICAgICAgLy8gY3Jvc3MtYnJvd3NlciB3aGVlbCBkZWx0YVxuICAgICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUud2hlZWxEZWx0YSB8fCAtZS5kZWx0YVkgfHwgLWUuZGV0YWlsO1xuICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICAgICAgdmFyIGhvcml6b250YWxEZXRlY3Rpb24gPSB0eXBlb2YgZS53aGVlbERlbHRhWCAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGUuZGVsdGFYICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgdmFyIGlzU2Nyb2xsaW5nVmVydGljYWxseSA9IE1hdGguYWJzKGUud2hlZWxEZWx0YVgpIDwgTWF0aC5hYnMoZS53aGVlbERlbHRhKSB8fCBNYXRoLmFicyhlLmRlbHRhWCkgPCBNYXRoLmFicyhlLmRlbHRhWSkgfHwgIWhvcml6b250YWxEZXRlY3Rpb247XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBkZWx0YSA8IDAgPyAnZG93bicgOiBkZWx0YSA+IDAgPyAndXAnIDogJ25vbmUnOyAvL0xpbWl0aW5nIHRoZSBhcnJheSB0byAxNTAgKGxldHMgbm90IHdhc3RlIG1lbW9yeSEpXG5cbiAgICAgICAgaWYgKHNjcm9sbGluZ3MubGVuZ3RoID4gMTQ5KSB7XG4gICAgICAgICAgc2Nyb2xsaW5ncy5zaGlmdCgpO1xuICAgICAgICB9IC8va2VlcGluZyByZWNvcmQgb2YgdGhlIHByZXZpb3VzIHNjcm9sbGluZ3NcblxuXG4gICAgICAgIHNjcm9sbGluZ3MucHVzaChNYXRoLmFicyh2YWx1ZSkpOyAvL3ByZXZlbnRpbmcgdG8gc2Nyb2xsIHRoZSBzaXRlIG9uIG1vdXNlIHdoZWVsIHdoZW4gc2Nyb2xsYmFyIGlzIHByZXNlbnRcblxuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLnNjcm9sbEJhcikge1xuICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICB9IC8vdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGxhc3Qgc2Nyb2xsIGFuZCB0aGUgY3VycmVudCBvbmVcblxuXG4gICAgICAgIHZhciB0aW1lRGlmZiA9IGN1clRpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgcHJldlRpbWUgPSBjdXJUaW1lOyAvL2hhdmVuJ3QgdGhleSBzY3JvbGxlZCBpbiBhIHdoaWxlP1xuICAgICAgICAvLyhlbm91Z2ggdG8gYmUgY29uc2lkZXIgYSBkaWZmZXJlbnQgc2Nyb2xsaW5nIGFjdGlvbiB0byBzY3JvbGwgYW5vdGhlciBzZWN0aW9uKVxuXG4gICAgICAgIGlmICh0aW1lRGlmZiA+IDIwMCkge1xuICAgICAgICAgIC8vZW1wdHlpbmcgdGhlIGFycmF5LCB3ZSBkb250IGNhcmUgYWJvdXQgb2xkIHNjcm9sbGluZ3MgZm9yIG91ciBhdmVyYWdlc1xuICAgICAgICAgIHNjcm9sbGluZ3MgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICB3aGVlbERpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdGF0ZS5jYW5TY3JvbGwpIHtcbiAgICAgICAgICB2YXIgYXZlcmFnZUVuZCA9IGdldEF2ZXJhZ2Uoc2Nyb2xsaW5ncywgMTApO1xuICAgICAgICAgIHZhciBhdmVyYWdlTWlkZGxlID0gZ2V0QXZlcmFnZShzY3JvbGxpbmdzLCA3MCk7XG4gICAgICAgICAgdmFyIGlzQWNjZWxlcmF0aW5nID0gYXZlcmFnZUVuZCA+PSBhdmVyYWdlTWlkZGxlOyAvL3RvIGF2b2lkIGRvdWJsZSBzd2lwZXMuLi5cblxuICAgICAgICAgIGlmIChpc0FjY2VsZXJhdGluZyAmJiBpc1Njcm9sbGluZ1ZlcnRpY2FsbHkpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjogJ3doZWVsJ1xuICAgICAgICAgICAgfSk7IC8vc2Nyb2xsaW5nIGRvd24/XG5cbiAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgc2Nyb2xsaW5nKCdkb3duJyk7XG4gICAgICAgICAgICB9IC8vc2Nyb2xsaW5nIHVwP1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHNjcm9sbGluZygndXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChnZXRPcHRpb25zKCkuZml0VG9TZWN0aW9uKSB7XG4gICAgICAgIC8vc3RvcHBpbmcgdGhlIGF1dG8gc2Nyb2xsIHRvIGFkanVzdCB0byBhIHNlY3Rpb25cbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZUFuaW1hdGlvbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvL2JpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcmVsZWFzZWRcblxuXG4gICAgZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihlKSB7XG4gICAgICAvL21pZGRsZSBidXR0b25cbiAgICAgIGlmIChlLndoaWNoID09IDIpIHtcbiAgICAgICAgc2V0T2xkUGFnZVkoZS5wYWdlWSk7XG4gICAgICAgIGdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0gLy91bmJpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcmVsZWFzZWRcblxuXG4gICAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZSkge1xuICAgICAgLy9taWRkbGUgYnV0dG9uXG4gICAgICBpZiAoZS53aGljaCA9PSAyKSB7XG4gICAgICAgIGdldENvbnRhaW5lcigpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBtb3VzZSB3aGVlbCBoaWphY2tpbmdcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBzZXRNb3VzZUhpamFjayh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XG4gICAgICAgIGFkZFRvdWNoSGFuZGxlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TW91c2VXaGVlbFNjcm9sbGluZyhmYWxzZSk7XG4gICAgICAgIHJlbW92ZVRvdWNoSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnX2NhbkZpcmVNb3VzZUVudGVyTm9ybWFsU2Nyb2xsID0gdHJ1ZTtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLmJpbmRFdmVudHMsIGJpbmRFdmVudHMkNyk7XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzJDcoKSB7XG4gICAgICAvKipcbiAgICAgICogQXBwbHlpbmcgbm9ybWFsU2Nyb2xsIGVsZW1lbnRzLlxuICAgICAgKiBJZ25vcmluZyB0aGUgc2Nyb2xscyBvdmVyIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3JzLlxuICAgICAgKi9cbiAgICAgIGlmIChnZXRPcHRpb25zKCkubm9ybWFsU2Nyb2xsRWxlbWVudHMpIHtcbiAgICAgICAgWydtb3VzZWVudGVyJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICBmb3JNb3VzZUxlYXZlT3JUb3VjaChldmVudE5hbWUsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFsnbW91c2VsZWF2ZScsICd0b3VjaGVuZCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgIGZvck1vdXNlTGVhdmVPclRvdWNoKGV2ZW50TmFtZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLm9uRGVzdHJveSwgb25EZXN0cm95JDQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVzdHJveSQ0KCkge1xuICAgICAgWydtb3VzZWVudGVyJywgJ3RvdWNoc3RhcnQnLCAnbW91c2VsZWF2ZScsICd0b3VjaGVuZCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICBkb2NSZW1vdmVFdmVudChldmVudE5hbWUsIG9uTW91c2VFbnRlck9yTGVhdmUsIHRydWUpOyAvL3RydWUgaXMgcmVxdWlyZWQhXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JNb3VzZUxlYXZlT3JUb3VjaChldmVudE5hbWUsIGFsbG93U2Nyb2xsaW5nKSB7XG4gICAgICAvL2Egd2F5IHRvIHBhc3MgYXJndW1lbnRzIHRvIHRoZSBvbk1vdXNlRW50ZXJPckxlYXZlIGZ1bmN0aW9uXG4gICAgICBkb2N1bWVudFsnZnBfJyArIGV2ZW50TmFtZV0gPSBhbGxvd1Njcm9sbGluZztcbiAgICAgIGRvY0FkZEV2ZW50KGV2ZW50TmFtZSwgb25Nb3VzZUVudGVyT3JMZWF2ZSwgdHJ1ZSk7IC8vY2FwdHVyaW5nIHBoYXNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZUVudGVyT3JMZWF2ZShlKSB7XG4gICAgICB2YXIgdHlwZSA9IGUudHlwZTtcbiAgICAgIHZhciBpc0luc2lkZU9uZU5vcm1hbFNjcm9sbCA9IGZhbHNlOyAvL29uTW91c2VMZWF2ZSB3aWxsIHVzZSB0aGUgZGVzdGluYXRpb24gdGFyZ2V0LCBub3QgdGhlIG9uZSB3ZSBhcmUgbW92aW5nIGF3YXkgZnJvbVxuXG4gICAgICB2YXIgdGFyZ2V0ID0gdHlwZSA9PT0gJ21vdXNlbGVhdmUnID8gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0IDogZS50YXJnZXQ7IC8vY29taW5nIGZyb20gY2xvc2luZyBhIG5vcm1hbFNjcm9sbEVsZW1lbnRzIG1vZGFsIG9yIG1vdmluZyBvdXRzaWRlIHZpZXdwb3J0P1xuXG4gICAgICBpZiAodGFyZ2V0ID09IGRvY3VtZW50IHx8ICF0YXJnZXQpIHtcbiAgICAgICAgc2V0TW91c2VIaWphY2sodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09ICd0b3VjaGVuZCcpIHtcbiAgICAgICAgZ19jYW5GaXJlTW91c2VFbnRlck5vcm1hbFNjcm9sbCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnX2NhbkZpcmVNb3VzZUVudGVyTm9ybWFsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgfSwgODAwKTtcbiAgICAgIH0gLy9wcmV2ZW50aW5nIG1vdXNlZW50ZXIgZXZlbnQgdG8gZG8gYW55dGhpbmcgd2hlbiBjb21pbmcgZnJvbSBhIHRvdWNoRW5kIGV2ZW50XG4gICAgICAvL2ZpeGluZyBpc3N1ZSAjMzU3NlxuXG5cbiAgICAgIGlmICh0eXBlID09PSAnbW91c2VlbnRlcicgJiYgIWdfY2FuRmlyZU1vdXNlRW50ZXJOb3JtYWxTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9ybWFsU2VsZWN0b3JzID0gZ2V0T3B0aW9ucygpLm5vcm1hbFNjcm9sbEVsZW1lbnRzLnNwbGl0KCcsJyk7XG4gICAgICBub3JtYWxTZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAobm9ybWFsU2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCFpc0luc2lkZU9uZU5vcm1hbFNjcm9sbCkge1xuICAgICAgICAgIHZhciBpc05vcm1hbFNjcm9sbFRhcmdldCA9IG1hdGNoZXModGFyZ2V0LCBub3JtYWxTZWxlY3Rvcik7IC8vbGVhdmluZyBhIGNoaWxkIGluc2lkZSB0aGUgbm9ybWFsU2NvbGwgZWxlbWVudCBpcyBub3QgbGVhdmluZyB0aGUgbm9ybWFsU2Nyb2xsICMzNjYxXG5cbiAgICAgICAgICB2YXIgaXNOb3JtYWxTY3JvbGxDaGlsZEZvY3VzZWQgPSBjbG9zZXN0KHRhcmdldCwgbm9ybWFsU2VsZWN0b3IpO1xuXG4gICAgICAgICAgaWYgKGlzTm9ybWFsU2Nyb2xsVGFyZ2V0IHx8IGlzTm9ybWFsU2Nyb2xsQ2hpbGRGb2N1c2VkKSB7XG4gICAgICAgICAgICBpZiAoIUZQLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgc2V0TW91c2VIaWphY2soZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGUC5zaGFyZWQuaXNOb3JtYWxTY3JvbGxFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlzSW5zaWRlT25lTm9ybWFsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pOyAvL25vdCBpbnNpZGUgYSBzaW5nbGUgbm9ybWFsIHNjcm9sbCBlbGVtZW50IGFueW1vcmU/XG5cbiAgICAgIGlmICghaXNJbnNpZGVPbmVOb3JtYWxTY3JvbGwgJiYgRlAuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudCkge1xuICAgICAgICBzZXRNb3VzZUhpamFjayh0cnVlKTtcbiAgICAgICAgRlAuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEZQLnNpbGVudE1vdmVUbyA9IHNpbGVudE1vdmVUbztcbiAgICAvKipcbiAgICAqIE1vdmVzIHRoZSBwYWdlIHRvIHRoZSBnaXZlbiBzZWN0aW9uIGFuZCBzbGlkZSB3aXRoIG5vIGFuaW1hdGlvbi5cbiAgICAqIEFuY2hvcnMgb3IgaW5kZXggcG9zaXRpb25zIGNhbiBiZSB1c2VkIGFzIHBhcmFtcy5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2lsZW50TW92ZVRvKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKSB7XG4gICAgICBzZXRTY3JvbGxpbmdTcGVlZCgwLCAnaW50ZXJuYWwnKTtcbiAgICAgIG1vdmVUbyQxKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKTtcbiAgICAgIHNldFNjcm9sbGluZ1NwZWVkKGdldE9yaWdpbmFscygpLnNjcm9sbGluZ1NwZWVkLCAnaW50ZXJuYWwnKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNIZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcbiAgICB2YXIgd2luZG93c1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKTtcbiAgICB2YXIgZ19yZXNpemVJZDtcbiAgICB2YXIgZ19pc0NvbnNlY3V0aXZlUmVzaXplID0gZmFsc2U7XG4gICAgdmFyIGdfcmVzaXplTW9iaWxlSGFuZGxlcklkO1xuICAgIEZQLnJlQnVpbGQgPSByZUJ1aWxkO1xuICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYmluZEV2ZW50cywgYmluZEV2ZW50cyQ2KTtcblxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMkNigpIHtcbiAgICAgIC8vIFNldHRpbmcgVkggY29ycmVjdGx5IGluIG1vYmlsZSBkZXZpY2VzXG4gICAgICByZXNpemVIYW5kbGVyKCk7IC8vd2hlbiByZXNpemluZyB0aGUgc2l0ZSwgd2UgYWRqdXN0IHRoZSBoZWlnaHRzIG9mIHRoZSBzZWN0aW9ucywgc2xpbVNjcm9sbC4uLlxuXG4gICAgICB3aW5kb3dBZGRFdmVudCgncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLm9uRGVzdHJveSwgb25EZXN0cm95JDMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVzdHJveSQzKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGdfcmVzaXplSWQpO1xuICAgICAgY2xlYXJUaW1lb3V0KGdfcmVzaXplTW9iaWxlSGFuZGxlcklkKTtcbiAgICAgIHdpbmRvd1JlbW92ZUV2ZW50KCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICB9XG4gICAgLypcbiAgICAqIFJlc2l6ZSBldmVudCBoYW5kbGVyLlxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICBpZiAoIWdfaXNDb25zZWN1dGl2ZVJlc2l6ZSkge1xuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcgJiYgIWdldE9wdGlvbnMoKS5zY3JvbGxCYXIgfHwgIWdldE9wdGlvbnMoKS5maXRUb1NlY3Rpb24pIHtcbiAgICAgICAgICBzZXRTZWN0aW9uc0hlaWdodChnZXRXaW5kb3dIZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZml0VG9BY3RpdmVTZWN0aW9uKCk7XG4gICAgICBnX2lzQ29uc2VjdXRpdmVSZXNpemUgPSB0cnVlOyAvL2luIG9yZGVyIHRvIGNhbGwgdGhlIGZ1bmN0aW9ucyBvbmx5IHdoZW4gdGhlIHJlc2l6ZSBpcyBmaW5pc2hlZFxuICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyOTg2MTIvanF1ZXJ5LWhvdy10by1jYWxsLXJlc2l6ZS1ldmVudC1vbmx5LW9uY2UtaXRzLWZpbmlzaGVkLXJlc2l6aW5nICAgIFxuXG4gICAgICBjbGVhclRpbWVvdXQoZ19yZXNpemVJZCk7XG4gICAgICBnX3Jlc2l6ZUlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vaXNzdWUgIzMzMzYgXG4gICAgICAgIC8vKHNvbWUgYXBwcyBvciBicm93c2VycywgbGlrZSBDaHJvbWUvRmlyZWZveCBmb3IgTW9iaWxlIHRha2UgdGltZSB0byByZXBvcnQgdGhlIHJlYWwgaGVpZ2h0KVxuICAgICAgICAvL3NvIHdlIGNoZWNrIGl0IDMgdGltZXMgd2l0aCBpbnRlcnZhbHMgaW4gdGhhdCBjYXNlXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGk8IDQ7IGkrKyl7XG4gICAgICAgIHJlc2l6ZUFjdGlvbnMoKTtcbiAgICAgICAgZ19pc0NvbnNlY3V0aXZlUmVzaXplID0gZmFsc2U7IC8vIH1cbiAgICAgIH0sIDQwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml0VG9BY3RpdmVTZWN0aW9uKCkge1xuICAgICAgaWYgKGlzVG91Y2hEZXZpY2UpIHtcbiAgICAgICAgLy8gSXNzdWUgIzQzOTMgYW5kIHByZXZpb3VzbHkgaW4gdjMsICMzMzM2XG4gICAgICAgIC8vIChzb21lIGFwcHMgb3IgYnJvd3NlcnMsIGxpa2UgQ2hyb21lL0ZpcmVmb3ggd2lsbCBkZWxheSBhIGJpdCB0byBzY3JvbGwgXG4gICAgICAgIC8vIHRvIHRoZSBmb2N1c2VkIGlucHV0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgZ19yZXNpemVNb2JpbGVIYW5kbGVySWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBvbiBBbmRyb2lkIGRldmljZXMgdGhlIGJyb3dzZXIgc2Nyb2xscyB0byB0aGUgZm9jdXNlZCBlbGVtZW50XG4gICAgICAgICAgICAgIC8vIG1lc3NpbmcgdXAgdGhlIHdob2xlIHBhZ2Ugc3RydWN0dXJlLiBTbyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGVcbiAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlM2QgdmFsdWUgd2hlbiB0aGUga2V5Ym9hcmQgc2hvd3MvaGlkZXNcbiAgICAgICAgICAgICAgaWYgKGdldE9wdGlvbnMoKS5hdXRvU2Nyb2xsaW5nICYmICFnZXRPcHRpb25zKCkuc2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgaXNSZXNpemluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNpbGVudE1vdmVUbyhzdGF0ZS5hY3RpdmVTZWN0aW9uLmluZGV4KCkgKyAxKTtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAyMDAgKiBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAqIFdoZW4gcmVzaXppbmcgdGhlIHNpdGUsIHdlIGFkanVzdCB0aGUgaGVpZ2h0cyBvZiB0aGUgc2VjdGlvbnMsIHNsaW1TY3JvbGwuLi5cbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiByZXNpemVBY3Rpb25zKCkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBpc1Jlc2l6aW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNldFNlY3Rpb25zSGVpZ2h0KCcnKTtcblxuICAgICAgaWYgKCFnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZyAmJiAhc3RhdGUuaXNCZXlvbmRGdWxscGFnZSkge1xuICAgICAgICBzZXRWaFVuaXRzKCk7XG4gICAgICB9XG5cbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5jb250ZW50Q2hhbmdlZCk7XG4gICAgICB1cGRhdGVTdGF0ZSgpOyAvL2NoZWNraW5nIGlmIGl0IG5lZWRzIHRvIGdldCByZXNwb25zaXZlXG5cbiAgICAgIHJlc3BvbnNpdmUoKTsgLy8gcmVidWlsZCBpbW1lZGlhdGVseSBvbiB0b3VjaCBkZXZpY2VzXG5cbiAgICAgIGlmIChpc1RvdWNoRGV2aWNlKSB7XG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jLmFjdGl2ZUVsZW1lbnQ7IC8vaWYgdGhlIGtleWJvYXJkIGlzIE5PVCB2aXNpYmxlXG5cbiAgICAgICAgaWYgKCFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICd0ZXh0YXJlYScpICYmICFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdpbnB1dCcpICYmICFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdzZWxlY3QnKSkge1xuICAgICAgICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7IC8vbWFraW5nIHN1cmUgdGhlIGNoYW5nZSBpbiB0aGUgdmlld3BvcnQgc2l6ZSBpcyBlbm91Z2ggdG8gZm9yY2UgYSByZWJ1aWxkLiAoMjAgJSBvZiB0aGUgd2luZG93IHRvIGF2b2lkIHByb2JsZW1zIHdoZW4gaGlkZGluZyBzY3JvbGwgYmFycylcblxuICAgICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50SGVpZ2h0IC0gcHJldmlvdXNIZWlnaHQpID4gMjAgKiBNYXRoLm1heChwcmV2aW91c0hlaWdodCwgY3VycmVudEhlaWdodCkgLyAxMDApIHtcbiAgICAgICAgICAgIHJlQnVpbGQodHJ1ZSk7XG4gICAgICAgICAgICBwcmV2aW91c0hlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGp1c3RUb05ld1ZpZXdwb3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemluZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIHJlc2l6aW5nIGlzIGZpbmlzaGVkLCB3ZSBhZGp1c3QgdGhlIHNsaWRlcyBzaXplcyBhbmQgcG9zaXRpb25zXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHJlQnVpbGQocmVzaXppbmcpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhnZXRDb250YWluZXIoKSwgREVTVFJPWUVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vbm90aGluZyB0byBkbyBpZiB0aGUgcGx1Z2luIHdhcyBkZXN0cm95ZWRcbiAgICAgIC8vdXBkYXRpbmcgZ2xvYmFsIHZhcnNcblxuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGlzUmVzaXppbmc6IHRydWUsXG4gICAgICAgIHdpbmRvd3NIZWlnaHQ6IGdldFdpbmRvd0hlaWdodCgpLFxuICAgICAgICB3aW5kb3dzV2lkdGg6IGdldFdpbmRvd1dpZHRoKClcbiAgICAgIH0pO1xuICAgICAgdmFyIHNlY3Rpb25zID0gZ2V0U3RhdGUoKS5zZWN0aW9ucztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xuICAgICAgICB2YXIgc2xpZGVzV3JhcCA9ICQoU0xJREVTX1dSQVBQRVJfU0VMLCBzZWN0aW9uLml0ZW0pWzBdO1xuICAgICAgICB2YXIgc2xpZGVzID0gc2VjdGlvbi5zbGlkZXM7IC8vYWRqdXN0aW5nIHRoZSBwb3NpdGlvbiBmbyB0aGUgRlVMTCBXSURUSCBzbGlkZXMuLi5cblxuICAgICAgICBpZiAoc2xpZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzV3JhcCwgc2VjdGlvbi5hY3RpdmVTbGlkZS5pdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLnNjcm9sbE92ZXJmbG93KSB7XG4gICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci5tYWtlU2Nyb2xsYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VjdGlvbkluZGV4ID0gZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLmluZGV4KCk7XG5cbiAgICAgIGlmICghc3RhdGUuaXNCZXlvbmRGdWxscGFnZSkge1xuICAgICAgICAvL2lzbid0IGl0IHRoZSBmaXJzdCBzZWN0aW9uP1xuICAgICAgICBpZiAoc2VjdGlvbkluZGV4KSB7XG4gICAgICAgICAgLy9hZGp1c3RpbmcgdGhlIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBzZWN0aW9uXG4gICAgICAgICAgc2lsZW50TW92ZVRvKHNlY3Rpb25JbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihnZXRPcHRpb25zKCkuYWZ0ZXJSZXNpemUpICYmIHJlc2l6aW5nKSB7XG4gICAgICAgIGdldE9wdGlvbnMoKS5hZnRlclJlc2l6ZS5jYWxsKGdldENvbnRhaW5lcigpLCB3aW4uaW5uZXJXaWR0aCwgd2luLmlubmVySGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24oZ2V0T3B0aW9ucygpLmFmdGVyUmVCdWlsZCkgJiYgIXJlc2l6aW5nKSB7XG4gICAgICAgIGdldE9wdGlvbnMoKS5hZnRlclJlQnVpbGQuY2FsbChnZXRDb250YWluZXIoKSk7XG4gICAgICB9XG5cbiAgICAgIHRyaWdnZXIoZ2V0Q29udGFpbmVyKCksICdhZnRlclJlYnVpbGQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBBZGp1c3RzIGEgc2VjdGlvbiB0byB0aGUgdmlld3BvcnQgaWYgaXQgaGFzIGNoYW5nZWQuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gYWRqdXN0VG9OZXdWaWV3cG9ydCgpIHtcbiAgICAgIHZhciBuZXdXaW5kb3dIZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcbiAgICAgIHZhciBuZXdXaW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCk7XG5cbiAgICAgIGlmIChzdGF0ZS53aW5kb3dzSGVpZ2h0ICE9PSBuZXdXaW5kb3dIZWlnaHQgfHwgd2luZG93c1dpZHRoICE9PSBuZXdXaW5kb3dXaWR0aCkge1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgd2luZG93c0hlaWdodDogbmV3V2luZG93SGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3dzV2lkdGggPSBuZXdXaW5kb3dXaWR0aDtcbiAgICAgICAgcmVCdWlsZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTZWN0aW9uc0hlaWdodCh2YWx1ZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSB2YWx1ZSA9PT0gJycgPyAnJyA6IHZhbHVlICsgJ3B4JztcbiAgICAgIGdldFN0YXRlKCkuc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICBjc3Moc2VjdGlvbi5pdGVtLCB7XG4gICAgICAgICAgJ2hlaWdodCc6IHByb3BlcnR5VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmaW5pbmcgdGhlIHZhbHVlIGluIHB4IG9mIGEgVkggdW5pdC4gKFVzZWQgZm9yIGF1dG9TY3JvbGxpbmc6IGZhbHNlKVxuICAgICAqIFRvIGZpeCB0aGUgaGVpZ2h0IGlzc3VlIG9uIG1vYmlsZSBkZXZpY2VzIHdoZW4gdXNpbmcgVkggdW5pdHMuXG4gICAgICogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBzZXRWaFVuaXRzKCkge1xuICAgICAgaWYgKCFnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZyB8fCBnZXRPcHRpb25zKCkuc2Nyb2xsQmFyKSB7XG4gICAgICAgIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gICAgICAgIHZhciB2aCA9IHdpbi5pbm5lckhlaWdodCAqIDAuMDE7IC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG5cbiAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIFwiXCIuY29uY2F0KHZoLCBcInB4XCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbmNob3JzVVJMKCkge1xuICAgICAgdmFyIHNlY3Rpb247XG4gICAgICB2YXIgc2xpZGU7XG4gICAgICB2YXIgaGFzaCA9IHdpbi5sb2NhdGlvbi5oYXNoO1xuXG4gICAgICBpZiAoaGFzaC5sZW5ndGgpIHtcbiAgICAgICAgLy9nZXR0aW5nIHRoZSBhbmNob3IgbGluayBpbiB0aGUgVVJMIGFuZCBkZWxldGluZyB0aGUgYCNgXG4gICAgICAgIHZhciBhbmNob3JzUGFydHMgPSBoYXNoLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJy8nKTsgLy91c2luZyAvIGZvciB2aXN1YWwgcmVhc29ucyBhbmQgbm90IGFzIGEgc2VjdGlvbi9zbGlkZSBzZXBhcmF0b3IgIzI4MDNcblxuICAgICAgICB2YXIgaXNGdW5reUFuY2hvciA9IGhhc2guaW5kZXhPZignIy8nKSA+IC0xO1xuICAgICAgICBzZWN0aW9uID0gaXNGdW5reUFuY2hvciA/ICcvJyArIGFuY2hvcnNQYXJ0c1sxXSA6IGRlY29kZVVSSUNvbXBvbmVudChhbmNob3JzUGFydHNbMF0pO1xuICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBpc0Z1bmt5QW5jaG9yID8gYW5jaG9yc1BhcnRzWzJdIDogYW5jaG9yc1BhcnRzWzFdO1xuXG4gICAgICAgIGlmIChzbGlkZUFuY2hvciAmJiBzbGlkZUFuY2hvci5sZW5ndGgpIHtcbiAgICAgICAgICBzbGlkZSA9IGRlY29kZVVSSUNvbXBvbmVudChzbGlkZUFuY2hvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VjdGlvbjogc2VjdGlvbixcbiAgICAgICAgc2xpZGU6IHNsaWRlXG4gICAgICB9O1xuICAgIH1cblxuICAgIEZQLnNldExvY2tBbmNob3JzID0gc2V0TG9ja0FuY2hvcnM7XG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5iaW5kRXZlbnRzLCBiaW5kRXZlbnRzJDUpO1xuXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cyQ1KCkge1xuICAgICAgLy9kZXRlY3RpbmcgYW55IGNoYW5nZSBvbiB0aGUgVVJMIHRvIHNjcm9sbCB0byB0aGUgZ2l2ZW4gYW5jaG9yIGxpbmtcbiAgICAgIC8vKGEgd2F5IHRvIGRldGVjdCBiYWNrIGhpc3RvcnkgYnV0dG9uIGFzIHdlIHBsYXkgd2l0aCB0aGUgaGFzaGVzIG9uIHRoZSBVUkwpXG4gICAgICB3aW5kb3dBZGRFdmVudCgnaGFzaGNoYW5nZScsIGhhc2hDaGFuZ2VIYW5kbGVyKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMub25EZXN0cm95LCBvbkRlc3Ryb3kkMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EZXN0cm95JDIoKSB7XG4gICAgICB3aW5kb3dSZW1vdmVFdmVudCgnaGFzaGNoYW5nZScsIGhhc2hDaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBTZXRzIGxvY2tBbmNob3JzXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gc2V0TG9ja0FuY2hvcnModmFsdWUpIHtcbiAgICAgIGdldE9wdGlvbnMoKS5sb2NrQW5jaG9ycyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAqIERldGVjdGluZyBhbnkgY2hhbmdlIG9uIHRoZSBVUkwgdG8gc2Nyb2xsIHRvIHRoZSBnaXZlbiBhbmNob3IgbGlua1xuICAgICogKGEgd2F5IHRvIGRldGVjdCBiYWNrIGhpc3RvcnkgYnV0dG9uIGFzIHdlIHBsYXkgd2l0aCB0aGUgaGFzaGVzIG9uIHRoZSBVUkwpXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gaGFzaENoYW5nZUhhbmRsZXIoKSB7XG4gICAgICBpZiAoIXN0YXRlLmlzU2Nyb2xsaW5nICYmICFnZXRPcHRpb25zKCkubG9ja0FuY2hvcnMpIHtcbiAgICAgICAgdmFyIGFuY2hvcnMgPSBnZXRBbmNob3JzVVJMKCk7XG4gICAgICAgIHZhciBzZWN0aW9uQW5jaG9yID0gYW5jaG9ycy5zZWN0aW9uO1xuICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBhbmNob3JzLnNsaWRlOyAvL3doZW4gbW92aW5nIHRvIGEgc2xpZGUgaW4gdGhlIGZpcnN0IHNlY3Rpb24gZm9yIHRoZSBmaXJzdCB0aW1lIChmaXJzdCB0aW1lIHRvIGFkZCBhbiBhbmNob3IgdG8gdGhlIFVSTClcblxuICAgICAgICB2YXIgaXNGaXJzdFNsaWRlTW92ZSA9IHR5cGVvZiBzdGF0ZS5sYXN0U2Nyb2xsZWREZXN0aW55ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgdmFyIGlzRmlyc3RTY3JvbGxNb3ZlID0gdHlwZW9mIHN0YXRlLmxhc3RTY3JvbGxlZERlc3RpbnkgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzbGlkZUFuY2hvciA9PT0gJ3VuZGVmaW5lZCcgJiYgIXN0YXRlLnNsaWRlTW92aW5nO1xuXG4gICAgICAgIGlmIChzZWN0aW9uQW5jaG9yICYmIHNlY3Rpb25BbmNob3IubGVuZ3RoKSB7XG4gICAgICAgICAgLyppbiBvcmRlciB0byBjYWxsIHNjcm9sbHBhZ2UoKSBvbmx5IG9uY2UgZm9yIGVhY2ggZGVzdGluYXRpb24gYXQgYSB0aW1lXG4gICAgICAgICAgSXQgaXMgY2FsbGVkIHR3aWNlIGZvciBlYWNoIHNjcm9sbCBvdGhlcndpc2UsIGFzIGluIGNhc2Ugb2YgdXNpbmcgYW5jaG9ybGlua3MgYGhhc2hDaGFuZ2VgXG4gICAgICAgICAgZXZlbnQgaXMgZmlyZWQgb24gZXZlcnkgc2Nyb2xsIHRvby4qL1xuICAgICAgICAgIGlmIChzZWN0aW9uQW5jaG9yICYmIHNlY3Rpb25BbmNob3IgIT09IHN0YXRlLmxhc3RTY3JvbGxlZERlc3RpbnkgJiYgIWlzRmlyc3RTbGlkZU1vdmUgfHwgaXNGaXJzdFNjcm9sbE1vdmUgfHwgIXN0YXRlLnNsaWRlTW92aW5nICYmIHN0YXRlLmxhc3RTY3JvbGxlZFNsaWRlICE9IHNsaWRlQW5jaG9yKSB7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudHMub25TY3JvbGxQYWdlQW5kU2xpZGUsIHtcbiAgICAgICAgICAgICAgc2VjdGlvbkFuY2hvcjogc2VjdGlvbkFuY2hvcixcbiAgICAgICAgICAgICAgc2xpZGVBbmNob3I6IHNsaWRlQW5jaG9yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLmJpbmRFdmVudHMsIGJpbmRFdmVudHMkNCk7XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzJDQoKSB7XG4gICAgICBkb2NBZGRFdmVudCgnd2hlZWwnLCB3aGVlbERhdGFIYW5kbGVyLnJlZ2lzdGVyRXZlbnQsIGdldFBhc3NpdmVPcHRpb25zSWZQb3NzaWJsZSgpKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuc2Nyb2xsQmV5b25kRnVsbHBhZ2UsIHNjcm9sbEJleW9uZEZ1bGxQYWdlKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMub25LZXlEb3duLCBvbktleURvd24pO1xuICAgIH1cblxuICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYmluZEV2ZW50cywgYmluZEV2ZW50cyQzKTtcblxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMkMygpIHtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMub25DbGlja09yVG91Y2gsIG9uQ2xpY2tPclRvdWNoJDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tPclRvdWNoJDEocGFyYW1zKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gcGFyYW1zLnRhcmdldDtcblxuICAgICAgaWYgKGNsb3Nlc3QodGFyZ2V0LCBnZXRPcHRpb25zKCkubWVudSArICcgW2RhdGEtbWVudWFuY2hvcl0nKSkge1xuICAgICAgICBtZW51SXRlbXNIYW5kbGVyLmNhbGwodGFyZ2V0LCBwYXJhbXMpO1xuICAgICAgfVxuICAgIH0gLy9NZW51IGl0ZW0gaGFuZGxlciB3aGVuIG5vdCB1c2luZyBhbmNob3JzIG9yIHVzaW5nIGxvY2tBbmNob3JzOnRydWVcblxuXG4gICAgZnVuY3Rpb24gbWVudUl0ZW1zSGFuZGxlcihlKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6ICdtZW51J1xuICAgICAgfSk7XG5cbiAgICAgIGlmICgkKGdldE9wdGlvbnMoKS5tZW51KVswXSAmJiAoZ2V0T3B0aW9ucygpLmxvY2tBbmNob3JzIHx8ICFnZXRPcHRpb25zKCkuYW5jaG9ycy5sZW5ndGgpKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuXG4gICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5vbk1lbnVDbGljaywge1xuICAgICAgICAgIGFuY2hvcjogZ2V0QXR0cih0aGlzLCAnZGF0YS1tZW51YW5jaG9yJylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5iaW5kRXZlbnRzLCBiaW5kRXZlbnRzJDIpO1xuXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cyQyKCkge1xuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkNsaWNrT3JUb3VjaCwgb25DbGlja09yVG91Y2gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tPclRvdWNoKHBhcmFtcykge1xuICAgICAgdmFyIHRhcmdldCA9IHBhcmFtcy50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQgJiYgY2xvc2VzdCh0YXJnZXQsIFNFQ1RJT05fTkFWX1NFTCArICcgYScpKSB7XG4gICAgICAgIHNlY3Rpb25CdWxsZXRIYW5kbGVyLmNhbGwodGFyZ2V0LCBwYXJhbXMuZSk7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoZXModGFyZ2V0LCBTRUNUSU9OX05BVl9UT09MVElQX1NFTCkpIHtcbiAgICAgICAgdG9vbHRpcFRleHRIYW5kbGVyLmNhbGwodGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2hlcyh0YXJnZXQsIFNMSURFU19OQVZfTElOS19TRUwpIHx8IGNsb3Nlc3QodGFyZ2V0LCBTTElERVNfTkFWX0xJTktfU0VMKSAhPSBudWxsKSB7XG4gICAgICAgIHNsaWRlQnVsbGV0SGFuZGxlci5jYWxsKHRhcmdldCwgcGFyYW1zLmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsYXN0U2Nyb2xsID0gMDtcbiAgICB2YXIgZ19zY3JvbGxJZDtcbiAgICB2YXIgZ19zY3JvbGxJZDI7XG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkRlc3Ryb3ksIG9uRGVzdHJveSQxKTsgLy93aGVuIHNjcm9sbGluZy4uLlxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcihlKSB7XG4gICAgICB2YXIgY3VycmVudFNlY3Rpb247XG4gICAgICB2YXIgY3VycmVudFNlY3Rpb25FbGVtO1xuXG4gICAgICBpZiAoc3RhdGUuaXNSZXNpemluZyB8fCAhZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZ2V0TGFzdChnZXRTdGF0ZSgpLnNlY3Rpb25zKTtcblxuICAgICAgaWYgKGdldFN0YXRlKCkuaXNCZXlvbmRGdWxscGFnZSB8fCBnZXRTdGF0ZSgpLmlzQWJvdXRUb1Njcm9sbFRvRnVsbFBhZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWdldE9wdGlvbnMoKS5hdXRvU2Nyb2xsaW5nIHx8IGdldE9wdGlvbnMoKS5zY3JvbGxCYXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSBnZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIHNjcm9sbERpcmVjdGlvbiA9IGdldFNjcm9sbERpcmVjdGlvbihjdXJyZW50U2Nyb2xsKTtcbiAgICAgICAgdmFyIHZpc2libGVTZWN0aW9uSW5kZXggPSAwO1xuICAgICAgICB2YXIgc2NyZWVuX21pZCA9IGN1cnJlbnRTY3JvbGwgKyBnZXRXaW5kb3dIZWlnaHQoKSAvIDIuMDtcbiAgICAgICAgdmFyIGlzQXRCb3R0b20gPSAkYm9keS5zY3JvbGxIZWlnaHQgLSBnZXRXaW5kb3dIZWlnaHQoKSA9PT0gY3VycmVudFNjcm9sbDtcbiAgICAgICAgdmFyIHNlY3Rpb25zID0gZ2V0U3RhdGUoKS5zZWN0aW9ucztcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIHNjcm9sbFk6IGN1cnJlbnRTY3JvbGxcbiAgICAgICAgfSk7IC8vd2hlbiB1c2luZyBgYXV0by1oZWlnaHRgIGZvciBhIHNtYWxsIGxhc3Qgc2VjdGlvbiBpdCB3b24ndCBiZSBjZW50ZXJlZCBpbiB0aGUgdmlld3BvcnRcblxuICAgICAgICBpZiAoaXNBdEJvdHRvbSkge1xuICAgICAgICAgIHZpc2libGVTZWN0aW9uSW5kZXggPSBzZWN0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICB9IC8vaXMgYXQgdG9wPyB3aGVuIHVzaW5nIGBhdXRvLWhlaWdodGAgZm9yIGEgc21hbGwgZmlyc3Qgc2VjdGlvbiBpdCB3b24ndCBiZSBjZW50ZXJlZCBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgZWxzZSBpZiAoIWN1cnJlbnRTY3JvbGwpIHtcbiAgICAgICAgICB2aXNpYmxlU2VjdGlvbkluZGV4ID0gMDtcbiAgICAgICAgfSAvL3Rha2luZyB0aGUgc2VjdGlvbiB3aGljaCBpcyBzaG93aW5nIG1vcmUgY29udGVudCBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1tpXS5pdGVtOyAvLyBQaWNrIHRoZSB0aGUgbGFzdCBzZWN0aW9uIHdoaWNoIHBhc3NlcyB0aGUgbWlkZGxlIGxpbmUgb2YgdGhlIHNjcmVlbi5cblxuICAgICAgICAgICAgaWYgKHNlY3Rpb24ub2Zmc2V0VG9wIDw9IHNjcmVlbl9taWQpIHtcbiAgICAgICAgICAgICAgdmlzaWJsZVNlY3Rpb25JbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ29tcGxldGVseUluVmlld1BvcnQoc2Nyb2xsRGlyZWN0aW9uKSkge1xuICAgICAgICAgIGlmICghaGFzQ2xhc3MoZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW0sIENPTVBMRVRFTFkpKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaXRlbSwgQ09NUExFVEVMWSk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzaWJsaW5ncyhnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaXRlbSksIENPTVBMRVRFTFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL2dldGluZyB0aGUgbGFzdCBvbmUsIHRoZSBjdXJyZW50IG9uZSBvbiB0aGUgc2NyZWVuXG5cblxuICAgICAgICBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb25zW3Zpc2libGVTZWN0aW9uSW5kZXhdO1xuICAgICAgICBjdXJyZW50U2VjdGlvbkVsZW0gPSBjdXJyZW50U2VjdGlvbi5pdGVtOyAvL3NldHRpbmcgdGhlIHZpc2libGUgc2VjdGlvbiBhcyBhY3RpdmUgd2hlbiBtYW51YWxseSBzY3JvbGxpbmdcbiAgICAgICAgLy9leGVjdXRpbmcgb25seSBvbmNlIHRoZSBmaXJzdCB0aW1lIHdlIHJlYWNoIHRoZSBzZWN0aW9uXG5cbiAgICAgICAgaWYgKCFjdXJyZW50U2VjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uID0gZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLml0ZW07XG4gICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uSW5kZXggPSBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaW5kZXgoKSArIDE7XG4gICAgICAgICAgdmFyIHlNb3ZlbWVudCA9IGdldFltb3ZlbWVudChnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24sIGN1cnJlbnRTZWN0aW9uRWxlbSk7XG4gICAgICAgICAgdmFyIGFuY2hvckxpbmsgPSBjdXJyZW50U2VjdGlvbi5hbmNob3I7XG4gICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IGN1cnJlbnRTZWN0aW9uLmluZGV4KCkgKyAxO1xuICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IGN1cnJlbnRTZWN0aW9uLmFjdGl2ZVNsaWRlO1xuICAgICAgICAgIHZhciBzbGlkZUluZGV4O1xuICAgICAgICAgIHZhciBzbGlkZUFuY2hvckxpbms7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrc1BhcmFtcyA9IHtcbiAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb246IGxlYXZpbmdTZWN0aW9uLFxuICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBzZWN0aW9uSW5kZXggLSAxLFxuICAgICAgICAgICAgYW5jaG9yTGluazogYW5jaG9yTGluayxcbiAgICAgICAgICAgIGVsZW1lbnQ6IGN1cnJlbnRTZWN0aW9uRWxlbSxcbiAgICAgICAgICAgIGxlYXZpbmdTZWN0aW9uOiBsZWF2aW5nU2VjdGlvbkluZGV4LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB5TW92ZW1lbnQsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICBvcmlnaW46IGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb246IGN1cnJlbnRTZWN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChhY3RpdmVTbGlkZSkge1xuICAgICAgICAgICAgc2xpZGVBbmNob3JMaW5rID0gYWN0aXZlU2xpZGUuYW5jaG9yO1xuICAgICAgICAgICAgc2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLmNhblNjcm9sbCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoY3VycmVudFNlY3Rpb25FbGVtLCBBQ1RJVkUpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3MoY3VycmVudFNlY3Rpb25FbGVtKSwgQUNUSVZFKTtcblxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZ2V0T3B0aW9ucygpLmJlZm9yZUxlYXZlKSkge1xuICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2tPbmNlUGVyU2Nyb2xsKCdiZWZvcmVMZWF2ZScsIGNhbGxiYWNrc1BhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGdldE9wdGlvbnMoKS5vbkxlYXZlKSkge1xuICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ29uTGVhdmUnLCBjYWxsYmFja3NQYXJhbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihnZXRPcHRpb25zKCkuYWZ0ZXJMb2FkKSkge1xuICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyTG9hZCcsIGNhbGxiYWNrc1BhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3BNZWRpYShsZWF2aW5nU2VjdGlvbik7XG4gICAgICAgICAgICBsYXp5TG9hZChjdXJyZW50U2VjdGlvbkVsZW0pO1xuICAgICAgICAgICAgcGxheU1lZGlhKGN1cnJlbnRTZWN0aW9uRWxlbSk7XG4gICAgICAgICAgICBhY3RpdmF0ZU1lbnVBbmROYXYoYW5jaG9yTGluaywgc2VjdGlvbkluZGV4IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChnZXRPcHRpb25zKCkuYW5jaG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy9uZWVkZWQgdG8gZW50ZXIgaW4gaGFzaENoYW5nZSBldmVudCB3aGVuIHVzaW5nIHRoZSBtZW51IHdpdGggYW5jaG9yIGxpbmtzXG4gICAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWREZXN0aW55OiBhbmNob3JMaW5rXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgc2V0UGFnZVN0YXR1cyhzbGlkZUluZGV4LCBzbGlkZUFuY2hvckxpbmssIGFuY2hvckxpbmspO1xuICAgICAgICAgIH0gLy9zbWFsbCB0aW1lb3V0IGluIG9yZGVyIHRvIGF2b2lkIGVudGVyaW5nIGluIGhhc2hDaGFuZ2UgZXZlbnQgd2hlbiBzY3JvbGxpbmcgaXMgbm90IGZpbmlzaGVkIHlldFxuXG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoZ19zY3JvbGxJZCk7XG4gICAgICAgICAgZ19zY3JvbGxJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpLmZpdFRvU2VjdGlvbiAmJiBzdGF0ZS5jYW5TY3JvbGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoZ19zY3JvbGxJZDIpO1xuICAgICAgICAgIGdfc2Nyb2xsSWQyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZml4ZWRTZWN0aW9ucyA9IHN0YXRlLnNlY3Rpb25zLmZpbHRlcihmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICAgICAgICB2YXIgc2VjdGlvblZhbHVlcyA9IHNlY3Rpb24uaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc2VjdGlvblZhbHVlcy5ib3R0b20pID09PSBNYXRoLnJvdW5kKGdldFdpbmRvd0hlaWdodCgpKSB8fCBNYXRoLnJvdW5kKHNlY3Rpb25WYWx1ZXMudG9wKSA9PT0gMDtcbiAgICAgICAgICAgIH0pOyAvLyBObyBzZWN0aW9uIGlzIGZpdHRpbmcgdGhlIHZpZXdwb3J0PyBMZXQncyBmaXggdGhhdCFcblxuICAgICAgICAgICAgaWYgKCFmaXhlZFNlY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICBmaXRUb1NlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBnZXRPcHRpb25zKCkuZml0VG9TZWN0aW9uRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EZXN0cm95JDEoKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ19zY3JvbGxJZCk7XG4gICAgICBjbGVhclRpbWVvdXQoZ19zY3JvbGxJZDIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIGRpcmVjdG9uIG9mIHRoZSB0aGUgc2Nyb2xsaW5nIGZpcmVkIGJ5IHRoZSBzY3JvbGwgZXZlbnQuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsRGlyZWN0aW9uKGN1cnJlbnRTY3JvbGwpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCA/ICdkb3duJyA6ICd1cCc7XG4gICAgICBsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDsgLy9uZWVkZWQgZm9yIGF1dG8taGVpZ2h0IHNlY3Rpb25zIHRvIGRldGVybWluZSBpZiB3ZSB3YW50IHRvIHNjcm9sbCB0byB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGUgZGVzdGluYXRpb25cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBwcmV2aW91c0Rlc3RUb3A6IGN1cnJlbnRTY3JvbGxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGFjdGl2ZSBzZWN0aW9uIGhhcyBzZWVuIGluIGl0cyB3aG9sZSBvciBub3QuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gaXNDb21wbGV0ZWx5SW5WaWV3UG9ydChtb3ZlbWVudCkge1xuICAgICAgdmFyIHRvcCA9IGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbi5pdGVtLm9mZnNldFRvcDtcbiAgICAgIHZhciBib3R0b20gPSB0b3AgKyBnZXRXaW5kb3dIZWlnaHQoKTtcblxuICAgICAgaWYgKG1vdmVtZW50ID09ICd1cCcpIHtcbiAgICAgICAgcmV0dXJuIGJvdHRvbSA+PSBnZXRTY3JvbGxUb3AoKSArIGdldFdpbmRvd0hlaWdodCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wIDw9IGdldFNjcm9sbFRvcCgpO1xuICAgIH1cblxuICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMuYmluZEV2ZW50cywgYmluZEV2ZW50cyQxKTtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLm9uRGVzdHJveSwgb25EZXN0cm95KTtcblxuICAgIGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgIHdpbmRvd1JlbW92ZUV2ZW50KCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzJDEoKSB7XG4gICAgICB3aW5kb3dBZGRFdmVudCgnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG4gICAgICBkb2MuYm9keS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMub25TY3JvbGxQYWdlQW5kU2xpZGUsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgc2Nyb2xsUGFnZUFuZFNsaWRlKHBhcmFtcy5zZWN0aW9uQW5jaG9yLCBwYXJhbXMuc2xpZGVBbmNob3IpO1xuICAgICAgfSk7XG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLm9uTWVudUNsaWNrLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIG1vdmVUbyQxKHBhcmFtcy5hbmNob3IsIHVuZGVmaW5lZCk7XG4gICAgICB9KTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMub25TY3JvbGxPdmVyZmxvd1Njcm9sbGVkLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHZhciBzY3JvbGxTZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gbW92ZVNlY3Rpb25Eb3duIDogbW92ZVNlY3Rpb25VcDtcbiAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xuICAgICAgfSk7XG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLnNjcm9sbFBhZ2UsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgc2Nyb2xsUGFnZShwYXJhbXMuZGVzdGluYXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgRlAuZ2V0QWN0aXZlU2xpZGUgPSBnZXRBY3RpdmVTbGlkZTtcblxuICAgIEZQLmdldFNjcm9sbFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuc2Nyb2xsWDtcbiAgICB9O1xuXG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5iaW5kRXZlbnRzLCBiaW5kRXZlbnRzKTtcblxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLm9uRGVzdHJveSwgb25EZXN0cm95JDYpO1xuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5sYW5kc2NhcGVTY3JvbGwsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHBhcmFtcy5zbGlkZXMsIHBhcmFtcy5kZXN0aW5hdGlvbik7XG4gICAgICB9KTtcbiAgICAgIEV2ZW50RW1pdHRlci5vbihldmVudHMubW92ZVNsaWRlUmlnaHQsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbW92ZVNsaWRlUmlnaHQocGFyYW1zLnNlY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLm1vdmVTbGlkZUxlZnQsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbW92ZVNsaWRlTGVmdChwYXJhbXMuc2VjdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBhY3RpdmUgc2xpZGUuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlU2xpZGUoKSB7XG4gICAgICByZXR1cm4gbnVsbE9yU2xpZGUoZ2V0U3RhdGUoKS5hY3RpdmVTZWN0aW9uLmFjdGl2ZVNsaWRlKTtcbiAgICB9XG5cbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRzLmJpbmRFdmVudHMsIGluaXQkMSk7XG5cbiAgICBmdW5jdGlvbiBpbml0JDEoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRPcHRpb25zKCkuY3JlZGl0cy5wb3NpdGlvbiB8fCAncmlnaHQnO1xuICAgICAgdmFyIHBvc2l0aW9uU3R5bGUgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBvc2l0aW9uKSA+IC0xID8gXCJcIi5jb25jYXQocG9zaXRpb24sIFwiOiAwO1wiKSA6ICcnO1xuICAgICAgdmFyIHdhdGVyTWFyayA9IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmcC13YXRlcm1hcmtcXFwiIHN0eWxlPVxcXCJcIi5jb25jYXQocG9zaXRpb25TdHlsZSwgXCJcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL1xcXCIgXFxuICAgICAgICAgICAgICAgIHJlbD1cXFwibm9mb2xsb3cgbm9vcGVuZXJcXFwiIFxcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgXFxuICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJ0ZXh0LWRlY29yYXRpb246bm9uZTsgY29sb3I6ICMwMDA7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiKS5jb25jYXQoZ2V0T3B0aW9ucygpLmNyZWRpdHMubGFiZWwgfHwgJ01hZGUgd2l0aCBmdWxsUGFnZS5qcycsIFwiXFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiKTtcbiAgICAgIHZhciBsYXN0U2VjdGlvbiA9IGdldExhc3Qoc3RhdGUuc2VjdGlvbnMpO1xuICAgICAgdmFyIHNob3VsZFVzZVdhdGVyTWFyayA9ICFzdGF0ZS5pc1ZhbGlkIHx8IGdldE9wdGlvbnMoKS5jcmVkaXRzLmVuYWJsZWQ7XG5cbiAgICAgIGlmIChsYXN0U2VjdGlvbiAmJiBsYXN0U2VjdGlvbi5pdGVtICYmIHNob3VsZFVzZVdhdGVyTWFyaykge1xuICAgICAgICBsYXN0U2VjdGlvbi5pdGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgd2F0ZXJNYXJrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAhZnVuY3Rpb24gKCkge1xuICAgICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50cy5vbkluaXRpYWxpc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG4sIGEsIGw7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBpc1ZhbGlkOiAoZ2V0T3B0aW9ucygpLmxpY2Vuc2VLZXksIG4gPSBnZXRPcHRpb25zKCkubGljZW5zZUtleSwgYSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHBhcnNlSW50KFwiXFx4MzVcXHgzMVxceDM0XCIpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIGlmICghbiB8fCBuLmxlbmd0aCA8IDI5IHx8IDQgPT09IG4uc3BsaXQodFswXSkubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHZhciByID0gW1wiXFx4NDVcXHg2MVxceDYzXFx4NjhcIiwgXCJcXHg2NlxceDZmXFx4NzJcIl1baSgpXSgpLmpvaW4oXCJcIiksXG4gICAgICAgICAgICAgICAgYSA9IG5bW1wiXFx4NzNcXHg3MFxceDZjXFx4NjlcXHg3NFwiXV0oXCItXCIpLFxuICAgICAgICAgICAgICAgIGwgPSBbXTtcbiAgICAgICAgICAgIGFbcl0oZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgaWYgKG4gPCA0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0W3QubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgICAgZSA9IFtcIlxceDRlXFx4NjFcXHg0ZVwiLCBcIlxceDY5XFx4NzNcIl1baSgpXSgpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93W2VdKG4pID8gbyhuKSA6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0IC0gQUNUSVZFLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIH0obik7XG4gICAgICAgICAgICAgICAgfSh0KTtcblxuICAgICAgICAgICAgICAgIGwucHVzaChyKTtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG8odFtyXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoMSA9PT0gbikge1xuICAgICAgICAgICAgICAgICAgdmFyIGEgPSBbXCJcXHg3MFxceDYxXCIsIFwiXFx4NjRcXHg1M1wiLCBcIlxceDc0XCIsIFwiXFx4NjFcXHg3MlxceDc0XCJdLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICBzID0gcy50b1N0cmluZygpW2FdKDIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlICs9IHMsIDAgIT09IG4gJiYgMSAhPT0gbiB8fCAoZSArPSBcIi1cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG0gPSAwLFxuICAgICAgICAgICAgICAgIGYgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIG4uc3BsaXQoXCItXCIpLmZvckVhY2goZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgaWYgKG4gPCA0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9pID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgNDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICBlICE9PSBsW25dICYmIChfaSArPSBNYXRoLmFicyhvKHRbZV0pKSwgaXNOYU4odFtlXSkgfHwgbSsrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgciA9IHMoX2kpO1xuICAgICAgICAgICAgICAgIGYgKz0gcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIGYgKz0gcyhtKSwge1xuICAgICAgICAgICAgICB2OiBuZXcgRGF0ZShlICsgXCJUMDA6MDBcIiksXG4gICAgICAgICAgICAgIG86IGUuc3BsaXQoXCItXCIpWzJdID09PSA4ICogKEFDVElWRS5sZW5ndGggLSAyKSArIFwiXCIsXG4gICAgICAgICAgICAgIGw6IGZcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfShuKSwgbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHJbaSgpXSgpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gdCAmJiAwID09PSBuLmluZGV4T2YodCkgJiYgdC5sZW5ndGggPT09IG4ubGVuZ3RoO1xuICAgICAgICAgIH0obiksIChhIHx8IGwpICYmIChhICYmIGUgPD0gYS52ICYmIGEubCA9PT0gbi5zcGxpdCh0WzBdKVs0XSB8fCBsIHx8IGEubykgfHwgITEpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgdCA9IFtcIi1cIl07XG4gICAgICB2YXIgbiA9IFwiXFx4MzJcXHgzMFxceDMyXFx4MzNcXHgyZFxceDM0XFx4MmRcXHgzMlxceDM5XCIuc3BsaXQoXCItXCIpLFxuICAgICAgICAgIGUgPSBuZXcgRGF0ZShuWzBdLCBuWzFdLCBuWzJdKSxcbiAgICAgICAgICByID0gW1wic2VcIiwgXCJsaWNlblwiLCBcIi1cIiwgXCJ2M1wiLCBcImxcIiwgXCJncFwiXTtcblxuICAgICAgZnVuY3Rpb24gaSgpIHtcbiAgICAgICAgcmV0dXJuIFtbXCJcXHg3MlxceDY1XCIsIFwiXFx4NzZcXHg2NVxceDcyXFx4NzNcXHg2NVwiXS5qb2luKFwiXCIpXVtcIlwiLmxlbmd0aF07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG8odCkge1xuICAgICAgICByZXR1cm4gdCA/IGlzTmFOKHQpID8gdC5jaGFyQ29kZUF0KDApIC0gNzIgOiB0IDogXCJcIjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcyh0KSB7XG4gICAgICAgIHZhciBuID0gNzIgKyB0O1xuICAgICAgICByZXR1cm4gbiA+IDkwICYmIG4gPCA5NyAmJiAobiArPSAxNSksIFN0cmluZy5mcm9tQ2hhckNvZGUobikudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9KCk7XG5cbiAgICAvL0B0cy1jaGVja1xuICAgIEZQLnNldEtleWJvYXJkU2Nyb2xsaW5nID0gc2V0S2V5Ym9hcmRTY3JvbGxpbmc7XG4gICAgLyoqXG4gICAgKiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2liaWxpdHkgb2Ygc2Nyb2xsaW5nIHRocm91Z2ggc2VjdGlvbnMgYnkgdXNpbmcgdGhlIGtleWJvYXJkIGFycm93IGtleXNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2V0S2V5Ym9hcmRTY3JvbGxpbmcodmFsdWUsIGRpcmVjdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCAnJykuc3BsaXQoJywnKTtcbiAgICAgICAgZGlyZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsIGRpcmVjdGlvbiwgJ2snKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsICdhbGwnLCAnaycpO1xuICAgICAgICBnZXRPcHRpb25zKCkua2V5Ym9hcmRTY3JvbGxpbmcgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFNldHMgdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZXMgdG8gdGhlIG1lbnUgZWxlbWVudHMgYW5kIGFjdGl2YXRlcyB0aGUgY3VycmVudCBvbmUuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHN0eWxlTWVudShzZWN0aW9uKSB7XG4gICAgICB2YXIgaW5kZXggPSBzZWN0aW9uLmluZGV4KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgZ2V0T3B0aW9ucygpLmFuY2hvcnNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvL2FjdGl2YXRpbmcgdGhlIG1lbnUgLyBuYXYgZWxlbWVudCBvbiBsb2FkXG4gICAgICAgIGlmIChzZWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgYWN0aXZhdGVNZW51QW5kTmF2KGdldE9wdGlvbnMoKS5hbmNob3JzW2luZGV4XSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9IC8vbW92aW5nIHRoZSBtZW51IG91dHNpZGUgdGhlIG1haW4gY29udGFpbmVyIGlmIGl0IGlzIGluc2lkZSAoYXZvaWQgcHJvYmxlbXMgd2l0aCBmaXhlZCBwb3NpdGlvbnMgd2hlbiB1c2luZyBDU1MzIHRyYW5mb3JtcylcblxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLm1lbnUgJiYgZ2V0T3B0aW9ucygpLmNzczMgJiYgY2xvc2VzdCgkKGdldE9wdGlvbnMoKS5tZW51KVswXSwgV1JBUFBFUl9TRUwpICE9IG51bGwpIHtcbiAgICAgICAgJChnZXRPcHRpb25zKCkubWVudSkuZm9yRWFjaChmdW5jdGlvbiAobWVudSkge1xuICAgICAgICAgICRib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFdvcmtzIG92ZXIgdGhlIERPTSBzdHJ1Y3R1cmUgdG8gc2V0IGl0IHVwIGZvciB0aGUgY3VycmVudCBmdWxscGFnZSBnZXRPcHRpb25zKCkuXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHByZXBhcmVEb20oKSB7XG4gICAgICBjc3MoZ2V0UGFyZW50c1VudGlsKGdldENvbnRhaW5lcigpLCAnYm9keScpLCB7XG4gICAgICAgICdoZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZSdcbiAgICAgIH0pOyAvL2FkZGluZyBhIGNsYXNzIHRvIHJlY29nbml6ZSB0aGUgY29udGFpbmVyIGludGVybmFsbHkgaW4gdGhlIGNvZGVcblxuICAgICAgYWRkQ2xhc3MoZ2V0Q29udGFpbmVyKCksIFdSQVBQRVIpO1xuICAgICAgYWRkQ2xhc3MoJGh0bWwsIEVOQUJMRUQpOyAvL2R1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE1MDJcblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICB3aW5kb3dzSGVpZ2h0OiBnZXRXaW5kb3dIZWlnaHQoKVxuICAgICAgfSk7XG4gICAgICByZW1vdmVDbGFzcyhnZXRDb250YWluZXIoKSwgREVTVFJPWUVEKTsgLy9pbiBjYXNlIGl0IHdhcyBkZXN0cm95ZWQgYmVmb3JlIGluaXRpYWxpemluZyBpdCBhZ2FpblxuXG4gICAgICBhZGRJbnRlcm5hbFNlbGVjdG9ycygpO1xuICAgICAgdmFyIHNlY3Rpb25zID0gZ2V0U3RhdGUoKS5zZWN0aW9uc0luY2x1ZGluZ0hpZGRlbjsgLy9zdHlsaW5nIHRoZSBzZWN0aW9ucyAvIHNsaWRlcyAvIG1lbnVcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xuICAgICAgICB2YXIgc2xpZGVzID0gc2VjdGlvbi5hbGxTbGlkZXNJdGVtczsgLy9jYWNoaW5nIHRoZSBvcmlnaW5hbCBzdHlsZXMgdG8gYWRkIHRoZW0gYmFjayBvbiBkZXN0cm95KCdhbGwnKVxuXG4gICAgICAgIHZhciBvcmlnaW5hbFN0eWxlcyA9IGdldEF0dHIoc2VjdGlvbi5pdGVtLCAnc3R5bGUnKTtcblxuICAgICAgICBpZiAob3JpZ2luYWxTdHlsZXMpIHtcbiAgICAgICAgICBzZWN0aW9uLml0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWZwLXN0eWxlcycsIG9yaWdpbmFsU3R5bGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlU2VjdGlvbihzZWN0aW9uKTtcbiAgICAgICAgc3R5bGVNZW51KHNlY3Rpb24pOyAvLyBpZiB0aGVyZSdzIGFueSBzbGlkZVxuXG4gICAgICAgIGlmIChzbGlkZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0eWxlU2xpZGVzKHNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9IC8vZml4ZWQgZWxlbWVudHMgbmVlZCB0byBiZSBtb3ZlZCBvdXQgb2YgdGhlIHBsdWdpbiBjb250YWluZXIgZHVlIHRvIHByb2JsZW1zIHdpdGggQ1NTMy5cblxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLmZpeGVkRWxlbWVudHMgJiYgZ2V0T3B0aW9ucygpLmNzczMpIHtcbiAgICAgICAgJChnZXRPcHRpb25zKCkuZml4ZWRFbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICRib2R5LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy92ZXJ0aWNhbCBjZW50ZXJlZCBvZiB0aGUgbmF2aWdhdGlvbiArIGFjdGl2ZSBidWxsZXRcblxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLm5hdmlnYXRpb24pIHtcbiAgICAgICAgYWRkVmVydGljYWxOYXZpZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGVuYWJsZVlvdXR1YmVBUEkoKTtcblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5zY3JvbGxPdmVyZmxvdykge1xuICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIubWFrZVNjcm9sbGFibGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBGUC5zaGFyZWQuYWZ0ZXJSZW5kZXJBY3Rpb25zID0gYWZ0ZXJSZW5kZXJBY3Rpb25zO1xuICAgIC8qKlxuICAgICogQWN0aW9ucyBhbmQgY2FsbGJhY2tzIHRvIGZpcmUgYWZ0ZXJSZW5kZXJcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gYWZ0ZXJSZW5kZXJBY3Rpb25zKCkge1xuICAgICAgdmFyIHNlY3Rpb24gPSBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb247XG4gICAgICB2YXIgc2VjdGlvbkVsZW0gPSBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb24uaXRlbTtcbiAgICAgIGFkZENsYXNzKHNlY3Rpb25FbGVtLCBDT01QTEVURUxZKTtcbiAgICAgIGxhenlMb2FkKHNlY3Rpb25FbGVtKTtcbiAgICAgIGxhenlMb2FkT3RoZXJzKCk7XG4gICAgICBwbGF5TWVkaWEoc2VjdGlvbkVsZW0pO1xuXG4gICAgICBpZiAoaXNEZXN0aW55VGhlU3RhcnRpbmdTZWN0aW9uKCkgJiYgaXNGdW5jdGlvbihnZXRPcHRpb25zKCkuYWZ0ZXJMb2FkKSkge1xuICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyTG9hZCcsIHtcbiAgICAgICAgICBhY3RpdmVTZWN0aW9uOiBzZWN0aW9uRWxlbSxcbiAgICAgICAgICBlbGVtZW50OiBzZWN0aW9uRWxlbSxcbiAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgLy9mb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgY2FsbGJhY2sgKHRvIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUhKVxuICAgICAgICAgIGFuY2hvckxpbms6IHNlY3Rpb24uYW5jaG9yLFxuICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbi5pbmRleCgpLFxuICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICBvcmlnaW46IGdldFN0YXRlKCkuYWN0aXZlU2VjdGlvbixcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBnZXRTdGF0ZSgpLmFjdGl2ZVNlY3Rpb25cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihnZXRPcHRpb25zKCkuYWZ0ZXJSZW5kZXIpKSB7XG4gICAgICAgIGZpcmVDYWxsYmFjaygnYWZ0ZXJSZW5kZXInKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBVUkwgYW5jaG9yIGRlc3RpbnkgaXMgdGhlIHN0YXJ0aW5nIHNlY3Rpb24gKHRoZSBvbmUgdXNpbmcgJ2FjdGl2ZScgY2xhc3MgYmVmb3JlIGluaXRpYWxpemF0aW9uKVxuICAgICovXG5cbiAgICBmdW5jdGlvbiBpc0Rlc3RpbnlUaGVTdGFydGluZ1NlY3Rpb24oKSB7XG4gICAgICB2YXIgYW5jaG9yID0gZ2V0QW5jaG9yc1VSTCgpO1xuICAgICAgdmFyIGRlc3RpbmF0aW9uU2VjdGlvbiA9IGdldFNlY3Rpb25CeUFuY2hvcihhbmNob3Iuc2VjdGlvbik7XG4gICAgICByZXR1cm4gIWFuY2hvci5zZWN0aW9uIHx8ICFkZXN0aW5hdGlvblNlY3Rpb24gfHwgdHlwZW9mIGRlc3RpbmF0aW9uU2VjdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVzdGluYXRpb25TZWN0aW9uLmluZGV4KCkgPT09IGluZGV4KGdldFN0YXJ0aW5nU2VjdGlvbigpKTtcbiAgICB9XG5cbiAgICBGUC5zZXRBbGxvd1Njcm9sbGluZyA9IHNldEFsbG93U2Nyb2xsaW5nO1xuICAgIC8qKlxuICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmlsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbC90cmFja3BhZCBvciB0b3VjaCBnZXN0dXJlcy5cbiAgICAqIE9wdGlvbmFsbHkgYSBzZWNvbmQgcGFyYW1ldGVyIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIGRpcmVjdGlvbiBmb3Igd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGFwcGxpZWQuXG4gICAgKlxuICAgICogQHBhcmFtIGRpcmVjdGlvbnMgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGRpcmVjdGlvbiBvciBkaXJlY3Rpb25zIHNlcGFyYXRlZCBieSBjb21tYS5cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gc2V0QWxsb3dTY3JvbGxpbmcodmFsdWUsIGRpcmVjdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCAnJykuc3BsaXQoJywnKTtcbiAgICAgICAgZGlyZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsIGRpcmVjdGlvbiwgJ20nKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsICdhbGwnLCAnbScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU2Nyb2xscyB0byB0aGUgYW5jaG9yIGluIHRoZSBVUkwgd2hlbiBsb2FkaW5nIHRoZSBzaXRlXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvQW5jaG9yKCkge1xuICAgICAgdmFyIGFuY2hvcnMgPSBnZXRBbmNob3JzVVJMKCk7XG4gICAgICB2YXIgc2VjdGlvbkFuY2hvciA9IGFuY2hvcnMuc2VjdGlvbjtcbiAgICAgIHZhciBzbGlkZUFuY2hvciA9IGFuY2hvcnMuc2xpZGU7XG5cbiAgICAgIGlmIChzZWN0aW9uQW5jaG9yKSB7XG4gICAgICAgIC8vaWYgdGhlcmVzIGFueSAjXG4gICAgICAgIGlmIChnZXRPcHRpb25zKCkuYW5pbWF0ZUFuY2hvcikge1xuICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2lsZW50TW92ZVRvKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm9uQWZ0ZXJSZW5kZXJOb0FuY2hvciwgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAqIFJlbW92ZXMgaW5saW5lIHN0eWxlcyBhZGRlZCBieSBmdWxscGFnZS5qc1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBkZXN0cm95U3RydWN0dXJlKCkge1xuICAgICAgLy9yZXNldGluZyB0aGUgYHRvcGAgb3IgYHRyYW5zbGF0ZWAgcHJvcGVydGllcyB0byAwXG4gICAgICBzaWxlbnRTY3JvbGwoMCk7IC8vbG9hZGluZyBhbGwgdGhlIGxhenkgbG9hZCBjb250ZW50XG5cbiAgICAgICQoJ2ltZ1tkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXSwgaWZyYW1lW2RhdGEtc3JjXScsIGdldENvbnRhaW5lcigpKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHNldFNyYyhpdGVtLCAnc3JjJyk7XG4gICAgICB9KTtcbiAgICAgICQoJ2ltZ1tkYXRhLXNyY3NldF0nKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHNldFNyYyhpdGVtLCAnc3Jjc2V0Jyk7XG4gICAgICB9KTtcbiAgICAgIHJlbW92ZSgkKFNFQ1RJT05fTkFWX1NFTCArICcsICcgKyBTTElERVNfTkFWX1NFTCArICcsICcgKyBTTElERVNfQVJST1dfU0VMKSk7IC8vcmVtb3ZpbmcgaW5saW5lIHN0eWxlc1xuXG4gICAgICBjc3MoZ2V0Tm9kZXMoZ2V0U3RhdGUoKS5zZWN0aW9ucyksIHtcbiAgICAgICAgJ2hlaWdodCc6ICcnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcnLFxuICAgICAgICAncGFkZGluZyc6ICcnXG4gICAgICB9KTtcbiAgICAgIGNzcyhnZXROb2RlcyhnZXRTdGF0ZSgpLnNsaWRlcyksIHtcbiAgICAgICAgJ3dpZHRoJzogJydcbiAgICAgIH0pO1xuICAgICAgY3NzKGdldENvbnRhaW5lcigpLCB7XG4gICAgICAgICdoZWlnaHQnOiAnJyxcbiAgICAgICAgJ3Bvc2l0aW9uJzogJycsXG4gICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJycsXG4gICAgICAgICd0b3VjaC1hY3Rpb24nOiAnJ1xuICAgICAgfSk7XG4gICAgICBjc3MoJGh0bWxCb2R5LCB7XG4gICAgICAgICdvdmVyZmxvdyc6ICcnLFxuICAgICAgICAnaGVpZ2h0JzogJydcbiAgICAgIH0pOyAvLyByZW1vdmUgLmZwLWVuYWJsZWQgY2xhc3NcblxuICAgICAgcmVtb3ZlQ2xhc3MoJGh0bWwsIEVOQUJMRUQpOyAvLyByZW1vdmUgLmZwLXJlc3BvbnNpdmUgY2xhc3MgJiAuZnAtc2Nyb2xsYWJsZVxuXG4gICAgICByZW1vdmVDbGFzcygkYm9keSwgUkVTUE9OU0lWRSArICcgJyArIFNDUk9MTEFCTEUpOyAvLyByZW1vdmUgYWxsIG9mIHRoZSAuZnAtdmlld2luZy0gY2xhc3Nlc1xuXG4gICAgICAkYm9keS5jbGFzc05hbWUuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKFZJRVdJTkdfUFJFRklYKSA9PT0gMCkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKCRib2R5LCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTsgLy9yZW1vdmluZyBhZGRlZCBjbGFzc2VzXG5cbiAgICAgIGdldE5vZGVzKGdldFN0YXRlKCkucGFuZWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXRPcHRpb25zKCkuc2Nyb2xsT3ZlcmZsb3cpIHtcbiAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuZGVzdHJveVdyYXBwZXIoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBUQUJMRSArICcgJyArIEFDVElWRSArICcgJyArIENPTVBMRVRFTFkgKyAnICcgKyBJU19PVkVSRkxPVyk7XG4gICAgICAgIHZhciBwcmV2aW91c1N0eWxlcyA9IGdldEF0dHIoaXRlbSwgJ2RhdGEtZnAtc3R5bGVzJyk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzU3R5bGVzKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcHJldmlvdXNTdHlsZXMpO1xuICAgICAgICB9IC8vcmVtb3ZpbmcgYW5jaG9ycyBpZiB0aGV5IHdlcmUgbm90IHNldCB1c2luZyB0aGUgSFRNTCBtYXJrdXBcblxuXG4gICAgICAgIGlmIChoYXNDbGFzcyhpdGVtLCBTRUNUSU9OKSAmJiAhZ2V0SW5pdGlhbEFuY2hvcnNJbkRvbSgpKSB7XG4gICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvL3JlbW92aW5nIHRoZSBhcHBsaWVkIHRyYW5zaXRpb24gZnJvbSB0aGUgZnVsbHBhZ2Ugd3JhcHBlclxuXG4gICAgICByZW1vdmVBbmltYXRpb24oZ2V0Q29udGFpbmVyKCkpOyAvL1Vud3JhcHBpbmcgY29udGVudFxuXG4gICAgICBbVEFCTEVfQ0VMTF9TRUwsIFNMSURFU19DT05UQUlORVJfU0VMLCBTTElERVNfV1JBUFBFUl9TRUxdLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICQoc2VsZWN0b3IsIGdldENvbnRhaW5lcigpKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgLy91bndyYXAgbm90IGJlaW5nIHVzZSBpbiBjYXNlIHRoZXJlJ3Mgbm8gY2hpbGQgZWxlbWVudCBpbnNpZGUgYW5kIGl0cyBqdXN0IHRleHRcbiAgICAgICAgICB1bndyYXAoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vcmVtb3ZpbmcgdGhlIGFwcGxpZWQgdHJhbnNpdGlvbiBmcm9tIHRoZSBmdWxscGFnZSB3cmFwcGVyXG5cbiAgICAgIGNzcyhnZXRDb250YWluZXIoKSwge1xuICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogJ25vbmUnLFxuICAgICAgICAndHJhbnNpdGlvbic6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICByZW1vdmVDbGFzcyhnZXRDb250YWluZXIoKSwgV1JBUFBFUik7IC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSB0b3Agd2l0aCBubyBhbmltYXRpb25cblxuICAgICAgd2luLnNjcm9sbFRvKDAsIDApOyAvL3JlbW92aW5nIHNlbGVjdG9yc1xuXG4gICAgICB2YXIgdXNlZFNlbGVjdG9ycyA9IFtTRUNUSU9OLCBTTElERSwgU0xJREVTX0NPTlRBSU5FUl07XG4gICAgICB1c2VkU2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJCgnLicgKyBpdGVtKSwgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBGUC5kZXN0cm95ID0gZGVzdHJveTtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdXBkYXRlU3RydWN0dXJhbFN0YXRlKCk7XG4gICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgZ2V0T3B0aW9ucygpLnNjcm9sbEJhciA9IGdldE9wdGlvbnMoKS5zY3JvbGxCYXIgfHwgZ2V0T3B0aW9ucygpLmh5YnJpZDtcbiAgICAgIHNldE9wdGlvbnNGcm9tRE9NKCk7XG4gICAgICBwcmVwYXJlRG9tKCk7XG4gICAgICBzZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcbiAgICAgIHNldE1vdXNlSGlqYWNrKHRydWUpO1xuICAgICAgc2V0QXV0b1Njcm9sbGluZyhnZXRPcHRpb25zKCkuYXV0b1Njcm9sbGluZywgJ2ludGVybmFsJyk7XG4gICAgICByZXNwb25zaXZlKCk7IC8vc2V0dGluZyB0aGUgY2xhc3MgZm9yIHRoZSBib2R5IGVsZW1lbnRcblxuICAgICAgc2V0Qm9keUNsYXNzKCk7XG5cbiAgICAgIGlmIChkb2MucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBzY3JvbGxUb0FuY2hvcigpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3dBZGRFdmVudCgnbG9hZCcsIHNjcm9sbFRvQW5jaG9yKTtcbiAgICAgIGFmdGVyUmVuZGVyQWN0aW9ucygpOyAvLyBVcGRhdGluZyB0aGUgc3RhdGUgYWdhaW4gd2l0aCB0aGUgbmV3IERPTVxuXG4gICAgICB1cGRhdGVTdHJ1Y3R1cmFsU3RhdGUoKTtcbiAgICAgIHVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICAgIC8qXG4gICAgKiBEZXN0cm95cyBmdWxscGFnZS5qcyBwbHVnaW4gZXZlbnRzIGFuZCBvcHRpbmFsbHkgaXRzIGh0bWwgbWFya3VwIGFuZCBzdHlsZXNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gZGVzdHJveShhbGwpIHtcbiAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xuICAgICAgc2V0QWxsb3dTY3JvbGxpbmcodHJ1ZSk7XG4gICAgICBzZXRNb3VzZUhpamFjayhmYWxzZSk7XG4gICAgICBzZXRLZXlib2FyZFNjcm9sbGluZyhmYWxzZSk7XG4gICAgICBhZGRDbGFzcyhnZXRDb250YWluZXIoKSwgREVTVFJPWUVEKTtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5vbkRlc3Ryb3kpOyAvL2xldHMgbWFrZSBhIG1lc3MhXG5cbiAgICAgIGlmIChhbGwpIHtcbiAgICAgICAgZGVzdHJveVN0cnVjdHVyZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc09LID0gZnVuY3Rpb24gaXNPSygpIHtcbiAgICAgIHJldHVybiBnZXRPcHRpb25zKCkgJiYgc3RhdGUuaXNWYWxpZCB8fCBkb2MuZG9tYWluLmluZGV4T2YoJ2FsJyArICd2YXJvdHJpJyArICdnbycgKyAnLicgKyAnY29tJykgPiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICogRGlzcGxheXMgd2FybmluZ3NcbiAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5V2FybmluZ3MoKSB7XG4gICAgICB2YXIgbCA9IGdldE9wdGlvbnMoKVsnbGknICsgJ2MnICsgJ2Vuc2VLJyArICdlJyArICd5J107XG4gICAgICB2YXIgbXNnU3R5bGUgPSAnZm9udC1zaXplOiAxNXB4O2JhY2tncm91bmQ6eWVsbG93Oyc7XG5cbiAgICAgIGlmIChnZXRPcHRpb25zKCkubGljZW5zZUtleS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHNob3dFcnJvcignZXJyb3InLCAnRnVsbHBhZ2UuanMgcmVxdWlyZXMgYSBgbGljZW5zZUtleWAgb3B0aW9uLiBSZWFkIGFib3V0IGl0IG9uIHRoZSBmb2xsb3dpbmcgVVJMOicpO1xuICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcyNvcHRpb25zJyk7XG4gICAgICB9IGVsc2UgaWYgKCFpc09LKCkpIHtcbiAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdJbmNvcnJlY3QgYGxpY2Vuc2VLZXlgLiBHZXQgb25lIGZvciBmdWxsUGFnZS5qcyB2ZXJzaW9uIDQgaGVyZTonKTtcbiAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdodHRwczovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZS9wcmljaW5nJyk7XG4gICAgICB9IGVsc2UgaWYgKGwgJiYgbC5sZW5ndGggPCAyMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJyVjIFRoaXMgd2Vic2l0ZSB3YXMgbWFkZSB1c2luZyBmdWxsUGFnZS5qcyBzbGlkZXIuIE1vcmUgaW5mbyBvbiB0aGUgZm9sbG93aW5nIHdlYnNpdGU6JywgbXNnU3R5bGUpO1xuICAgICAgICBjb25zb2xlLndhcm4oJyVjIGh0dHBzOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlLycsIG1zZ1N0eWxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0NsYXNzKCRodG1sLCBFTkFCTEVEKSkge1xuICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ0Z1bGxwYWdlLmpzIGNhbiBvbmx5IGJlIGluaXRpYWxpemVkIG9uY2UgYW5kIHlvdSBhcmUgZG9pbmcgaXQgbXVsdGlwbGUgdGltZXMhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRGlzYWJsZSBtdXR1YWxseSBleGNsdXNpdmUgc2V0dGluZ3NcblxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJiAoZ2V0T3B0aW9ucygpLmxvb3BUb3AgfHwgZ2V0T3B0aW9ucygpLmxvb3BCb3R0b20pKSB7XG4gICAgICAgIGdldE9wdGlvbnMoKS5jb250aW51b3VzVmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ09wdGlvbiBgbG9vcFRvcC9sb29wQm90dG9tYCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdldE9wdGlvbnMoKS5zY3JvbGxPdmVyZmxvdyAmJiAoZ2V0T3B0aW9ucygpLnNjcm9sbEJhciB8fCAhZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcpKSB7XG4gICAgICAgIHNob3dFcnJvcignd2FybicsICdPcHRpb25zIHNjcm9sbEJhcjp0cnVlIGFuZCBhdXRvU2Nyb2xsaW5nOmZhbHNlIGFyZSBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBzY3JvbGxPdmVyZmxvdzp0cnVlLiBTZWN0aW9ucyB3aXRoIHNjcm9sbE92ZXJmbG93IG1pZ2h0IG5vdCB3b3JrIHdlbGwgaW4gRmlyZWZveCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2V0T3B0aW9ucygpLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJiAoZ2V0T3B0aW9ucygpLnNjcm9sbEJhciB8fCAhZ2V0T3B0aW9ucygpLmF1dG9TY3JvbGxpbmcpKSB7XG4gICAgICAgIGdldE9wdGlvbnMoKS5jb250aW51b3VzVmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ1Njcm9sbCBiYXJzIChgc2Nyb2xsQmFyOnRydWVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYCkgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZCcpO1xuICAgICAgfSAvL3VzaW5nIGV4dGVuc2lvbnM/IFdyb25nIGZpbGUhXG5cblxuICAgICAgZXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChleHRlbnNpb24pIHtcbiAgICAgICAgLy9pcyB0aGUgb3B0aW9uIHNldCB0byB0cnVlP1xuICAgICAgICBpZiAoZ2V0T3B0aW9ucygpW2V4dGVuc2lvbl0pIHtcbiAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnZnVsbHBhZ2UuanMgZXh0ZW5zaW9ucyByZXF1aXJlIGZ1bGxwYWdlLmV4dGVuc2lvbnMubWluLmpzIGZpbGUgaW5zdGVhZCBvZiB0aGUgdXN1YWwgZnVsbHBhZ2UuanMuIFJlcXVlc3RlZDogJyArIGV4dGVuc2lvbik7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvL2FuY2hvcnMgY2FuIG5vdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIGFueSBlbGVtZW50IElEIG9yIE5BTUVcblxuICAgICAgZ2V0T3B0aW9ucygpLmFuY2hvcnMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAvL2Nhc2UgaW5zZW5zaXRpdmUgc2VsZWN0b3JzIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xOTQ2NTE4Ny8xMDgxMzk2KVxuICAgICAgICB2YXIgbmFtZUF0dHIgPSBbXS5zbGljZS5jYWxsKCQoJ1tuYW1lXScpKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gZ2V0QXR0cihpdGVtLCAnbmFtZScpICYmIGdldEF0dHIoaXRlbSwgJ25hbWUnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpZEF0dHIgPSBbXS5zbGljZS5jYWxsKCQoJ1tpZF0nKSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGdldEF0dHIoaXRlbSwgJ2lkJykgJiYgZ2V0QXR0cihpdGVtLCAnaWQnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlkQXR0ci5sZW5ndGggfHwgbmFtZUF0dHIubGVuZ3RoKSB7XG4gICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdkYXRhLWFuY2hvciB0YWdzIGNhbiBub3QgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBhcyBhbnkgYGlkYCBlbGVtZW50IG9uIHRoZSBzaXRlIChvciBgbmFtZWAgZWxlbWVudCBmb3IgSUUpLicpO1xuICAgICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBpZEF0dHIubGVuZ3RoID8gJ2lkJyA6ICduYW1lJztcblxuICAgICAgICAgIGlmIChpZEF0dHIubGVuZ3RoIHx8IG5hbWVBdHRyLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdcIicgKyBuYW1lICsgJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGAnICsgcHJvcGVydHlOYW1lICsgJ2AgcHJvcGVydHknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZ1bGxwYWdlKGNvbnRhaW5lclNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgICBzZXRDYWNoZSgpOyAvL29ubHkgb25jZSBteSBmcmllbmQhXG5cbiAgICAgIGlmIChoYXNDbGFzcygkaHRtbCwgRU5BQkxFRCkpIHtcbiAgICAgICAgZGlzcGxheVdhcm5pbmdzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0T3B0aW9uKCd0b3VjaFdyYXBwZXInLCB0eXBlb2YgY29udGFpbmVyU2VsZWN0b3IgPT09ICdzdHJpbmcnID8gJChjb250YWluZXJTZWxlY3RvcilbMF0gOiBjb250YWluZXJTZWxlY3Rvcik7IC8vIENyZWF0aW5nIHNvbWUgZGVmYXVsdHMsIGV4dGVuZGluZyB0aGVtIHdpdGggYW55IG9wdGlvbnMgdGhhdCB3ZXJlIHByb3ZpZGVkXG5cbiAgICAgIHNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICBzZXRDb250YWluZXIodHlwZW9mIGNvbnRhaW5lclNlbGVjdG9yID09PSAnc3RyaW5nJyA/ICQoY29udGFpbmVyU2VsZWN0b3IpWzBdIDogY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLm9uSW5pdGlhbGlzZSk7XG4gICAgICBkaXNwbGF5V2FybmluZ3MoKTtcbiAgICAgIHNldEFQSSgpO1xuXG4gICAgICBpZiAoZ2V0Q29udGFpbmVyKCkpIHtcbiAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRzLmJlZm9yZUluaXQpO1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50cy5iaW5kRXZlbnRzKTtcbiAgICAgIH0gLy8gQHRzLWlnbm9yZVxuXG5cbiAgICAgIHJldHVybiB3aW4uZnVsbHBhZ2VfYXBpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFQSSgpIHtcbiAgICAgIEZQLmdldEZ1bGxwYWdlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcHRpb25zOiBnZXRPcHRpb25zKClcbiAgICAgICAgfTtcbiAgICAgIH07IC8vcHVibGljIGZ1bmN0aW9uc1xuXG5cbiAgICAgIEZQLnZlcnNpb24gPSAnNC4wLjIwJztcbiAgICAgIEZQLnRlc3QgPSBPYmplY3QuYXNzaWduKEZQLnRlc3QsIHtcbiAgICAgICAgdG9wOiAnMHB4JyxcbiAgICAgICAgdHJhbnNsYXRlM2Q6ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KScsXG4gICAgICAgIHRyYW5zbGF0ZTNkSDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICQoZ2V0T3B0aW9ucygpLnNlY3Rpb25TZWxlY3RvciwgZ2V0Q29udGFpbmVyKCkpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhLnB1c2goJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0oKSxcbiAgICAgICAgbGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICQoZ2V0T3B0aW9ucygpLnNlY3Rpb25TZWxlY3RvciwgZ2V0Q29udGFpbmVyKCkpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhLnB1c2goMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0oKSxcbiAgICAgICAgb3B0aW9uczogZ2V0T3B0aW9ucygpLFxuICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nOiBudWxsXG4gICAgICB9KTsgLy9mdW5jdGlvbnMgd2Ugd2FudCB0byBzaGFyZSBhY3Jvc3MgZmlsZXMgYnV0IHdoaWNoIGFyZSBub3RcbiAgICAgIC8vbWVhbiB0byBiZSB1c2VkIG9uIHRoZWlyIG93biBieSBkZXZlbG9wZXJzXG5cbiAgICAgIEZQLnNoYXJlZCA9IE9iamVjdC5hc3NpZ24oRlAuc2hhcmVkLCB7XG4gICAgICAgIGFmdGVyUmVuZGVyQWN0aW9uczogbnVsbCxcbiAgICAgICAgaXNOb3JtYWxTY3JvbGxFbGVtZW50OiBmYWxzZVxuICAgICAgfSk7IC8vIEB0cy1pZ25vcmVcblxuICAgICAgd2luLmZ1bGxwYWdlX2FwaSA9IEZQO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcblxuICAgIHdpbi5mcF9lYXNpbmdzID0gZGVlcEV4dGVuZCh3aW4uZnBfZWFzaW5ncywge1xuICAgICAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICsgMikgKyBiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IGFkYXB0ZXIgZm9yIGZ1bGxQYWdlLmpzIDMuMC4wXG4gICAgICovXG4gICAgLy8gQHRzLWlnbm9yZVxuXG4gICAgaWYgKHdpbi5qUXVlcnkpIHtcbiAgICAgIChmdW5jdGlvbiAoJCwgZnVsbHBhZ2UpIHtcblxuICAgICAgICBpZiAoISQgfHwgIWZ1bGxwYWdlKSB7XG4gICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdqUXVlcnkgaXMgcmVxdWlyZWQgdG8gdXNlIHRoZSBqUXVlcnkgZnVsbHBhZ2UgYWRhcHRlciEnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkLmZuLmZ1bGxwYWdlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICckJzogJFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5ldyBmdWxscGFnZSh0aGlzWzBdLCBvcHRpb25zKTsgLy8gQ3JlYXRpbmcgdGhlICQuZm4uZnVsbHBhZ2Ugb2JqZWN0XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhGUCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBnZXRPcHRpb25zKCkuJC5mbi5mdWxscGFnZVtrZXldID0gRlBba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgICB9KSh3aW4ualF1ZXJ5LCBmdWxscGFnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bGxwYWdlO1xuXG59KSk7XG4iLCIvLyBPcHRpb25hbC4gV2hlbiB1c2luZyBmdWxsUGFnZSBleHRlbnNpb25zXG4vL2ltcG9ydCBzY3JvbGxIb3Jpem9udGFsbHkgZnJvbSAnLi9mdWxscGFnZS5zY3JvbGxIb3Jpem9udGFsbHkubWluJztcblxuLy8gT3B0aW9uYWwuIFdoZW4gdXNpbmcgc2Nyb2xsT3ZlcmZsb3c6dHJ1ZVxuLy9pbXBvcnQgSVNjcm9sbCBmcm9tICdmdWxscGFnZS5qcy92ZW5kb3JzL3Njcm9sbG92ZXJmbG93JztcblxuLy8gSW1wb3J0aW5nIGZ1bGxwYWdlLmpzXG5pbXBvcnQgZnVsbHBhZ2UgZnJvbSAnZnVsbHBhZ2UuanMnO1xuXG4vLyBXaGVuIHVzaW5nIGZ1bGxQYWdlIGV4dGVuc2lvbnMgcmVwbGFjZSB0aGUgcHJldmlvdXMgaW1wb3J0XG4vLyBvZiBmdWxscGFnZS5qcyBmb3IgdGhpcyBmaWxlXG4vL2ltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJztcblxuLy8gSW5pdGlhbGl6aW5nIGl0XG52YXIgZnVsbFBhZ2VJbnN0YW5jZSA9IG5ldyBmdWxscGFnZSgnI215RnVsbHBhZ2UnLCB7XG4gICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICBzZWN0aW9uc0NvbG9yOlsnI2ZmNWY0NScsICcjMDc5OGVjJywgJyNmYzZjN2MnLCAnZ3JleSddXG59KTtcblxuLy8gQ2FsbGluZyBtZXRob2RzXG4vLyBmdWxscGFnZV9hcGkubW92ZVNlY3Rpb25Eb3duKCk7XG4vLyBPclxuLy8gZnVsbFBhZ2VJbnN0YW5jZS5tb3ZlU2VjdGlvbkRvd24oKTsiXSwic291cmNlUm9vdCI6IiJ9