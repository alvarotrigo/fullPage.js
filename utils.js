
    function $(selector, context){
        context = context || document;
        var elements =  context.querySelectorAll(selector);
        return elements;
    }

    function deepExtend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj)
          continue;

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object')
              out[key] = deepExtend(out[key], obj[key]);
            else
              out[key] = obj[key];
          }
        }
      }

      return out;
    }

    function hasClass(el, className){
        if (el.classList){
            return el.classList.contains(className);
        }
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    function getWindowHeight(){
        return  'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    }

    function css(el, props) {
        var items = el.constructor !== Array ? [el] : el;
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

        return el;
    }

    function until(item, selector, fn){
        var sibling = item[fn];
        while(sibling && !matches(sibling, selector)){
            sibling = sibling[fn];
        }

        return sibling;
    }

    function prevUntil(item, selector){
        until(item, selector, 'previousElementSibling');
    }

    function nextUntil(item, selector){
        until(item, selector, 'nextElementSibling');
    }

    function prevAll(item, selector){

    }

    function prev(item){
        return item.previousElementSibling;
    }

    function next(item){
        return item.nextElementSibling;
    }

    function last(item){
        return item[item.length-1];
    }

    function index(item, context){
        var siblings = $(context) || item.parentNode.children;
        return Array.prototype.indexOf.call( siblings, item);
    }

    function hide(el){
        el.style.display = 'none';
        return el;
    }

    function show(el){
        el.style.display = 'block';
        return el;
    }

    function addClass(el, className) {
        for(var i = 0; i<el.length; i++){
            var item = el[i];
            if (item.classList){
                item.classList.add(className);
            }
            else{
              item.className += ' ' + className;
            }
        }
        return el;
    }

    function removeClass(el, className){
        var classNames = className.split(' ');
        if(classNames.length <2){
            classNames = [classNames];
        }

        for(var a = 0; a<classNames.length; a++){
            var className = classNames[a];
            for(var i = 0; i<el.length; i++){
                var item = el[i];
                if (item.classList){
                    item.classList.remove(className);
                }
                else{
                    item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }
        return el;
    }

    function appendTo(el, parent){
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
        wrapper = wrapper || document.createElement('div');
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
    function wrapAll(toWrap, wrapper) {
        wrap(toWrap, wrapper, true);
    }

    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="culo">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */
    function wrapInner(parent, wrapper) {
        if (typeof wrapper === "string"){
            wrapper = createElementFromHTML(wrapper);
        }

        parent.appendChild(wrapper);

        while(parent.firstChild !== wrapper){
            wrapper.appendChild(parent.firstChild);
       }
    }

    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */
    function closest(el, selector) {
        return el && el.nodeType === 1 && (
            matches(el, selector) ? el : closest(el.parentNode, selector)
        );
    }

    //var demo = after(document.querySelectorAll('.parent'), '<div>test</div>');
    //https://jsfiddle.net/t8pjdt5q/20/
    function after(el, htmlString){
        for(var i = 0; i<el.length; i++){
            el[i].insertAdjacentHTML('afterend', htmlString);
        }
    }

    function before(el, htmlString){
        for(var i = 0; i<el.length; i++){
            el[i].insertAdjacentHTML('beforebegin', htmlString);
        }
    }

    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop(){
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    }


    function siblings(el){
        return Array.prototype.filter.call(el.parentNode.children, function(child){
          return child !== el;
        });
    }

    //for IE 9 ?
    function preventDefault(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            event.returnValue = false;
        }
    }

    // Native
    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }
      var type = Object.prototype.toString(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }

    /** //todo
    * Getting the position of the element to scroll when using jQuery animations
    */
    function getScrolledPosition(element){
        var position;

        //is not the window element and is a slide?
        if(element.self != window && hasClass(element, SLIDES_WRAPPER)){
            position = element.scrollLeft;
        }
        else if(!options.autoScrolling  || options.scrollBar){
            position = getScrollTop();
        }
        else{
            position = element.offsetTop;
        }

        //gets the top property of the wrapper
        return position;
    }

    /**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */
    function scrollTo(element, to, duration, callback) {
        var start = getScrolledPosition(element);
        var change = to - start;
        var currentTime = 0;
        var increment = 20;
        activeAnimation = true;

        var animateScroll = function(){
            if(activeAnimation){ //in order to stope it from other function whenever we want
                var val = to;

                currentTime += increment;
                val = Math.easeInOutCubic(currentTime, start, change, duration);

                setScrolling(element, val);

                if(currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }else if(typeof callback !== 'undefined'){
                    callback();
                }
            }else if (currentTime < duration){
                callback();
            }
        };

        animateScroll();
    }

    function setScrolling(element, val){
        if(!options.autoScrolling || options.scrollBar || (element.self != window && hasClass(element, SLIDES_WRAPPER))){

            //scrolling horizontally through the slides?
            if(element.self != window  && hasClass(element, SLIDES_WRAPPER)){
                element.scrollLeft = val;
            }
            //vertical scroll
            else{
                element.scrollTo(0, val);
            }
        }else{
             element.style.top = val + 'px';
        }
    }

    function trigger(el, eventName, data){
        var event;
        data = typeof data === 'undefined' ? {} : data;

        // Native
        if (window.CustomEvent) {
            event = new CustomEvent(eventName, {detail: data});
        }
        else{
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }

        el.dispatchEvent(event);
    }

    function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }

    function toggle(el, value){
        if(typeof value === "boolean"){
            el.style.display = value ? 'block' : 'none';
        }
        //we don't use it for any class, so no else :)

        return el;
    }

    //https://stackoverflow.com/a/494348/1081396
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }

    //https://jsfiddle.net/c860vopq/
    function getHTMLFromNode(target) {
        var wrap = document.createElement('div');
        wrap.appendChild(target.cloneNode(true));

        return wrap.innerHTML;
    }



    function remove(items){
        for(var i = 0; i<items.length; i++){
            var item = items[i];
            if(item && item.parentElement) {
                item.parentNode.removeChild(item);
            }
        }
    }



    /////
     function untilAll(item, selector, fn){
        var sibling = item[fn];
        var siblings = [];
        while(sibling){
            if(matches(sibling, selector)){
                siblings.push(sibling);
            }
            sibling = sibling[fn];
        }

        return siblings;
    }

    function nextAll(item, selector){
        return untilAll(item, selector, 'nextElementSibling');
    }

    function prevAll(item, selector){
        return untilAll(item, selector, 'previousElementSibling');
    }