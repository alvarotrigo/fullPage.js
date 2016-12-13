/**
 * fullPage Pure Javascript v.0.0.9 (Alpha) - Not support given until Beta version.
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function( root, window, document, factory, undefined ) {
    if( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define( function() {
            root.fullpage = factory(window, document);
            return root.fullpage;
        } );
    } else if( typeof exports === 'object' ) {
        // Node. Does not work with strict CommonJS.
        module.exports = factory(window, document);
    } else {
        // Browser globals.
        window.fullpage = factory(window, document);
    }
}(this, window, document, function(window, document, undefined){
    'use strict';

    var fullpage;

    //CONSTANTS

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    //globals
    var options;
    var slideMoving = false;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
    var windowsHeight = getWindowHeight();
    var isResizing = false;
    var lastScrolledDestiny;
    var lastScrolledSlide;
    var canScroll = true;
    var scrollings = [];
    var nav;
    var activeAnimation;
    var originals;
    var container;

    //easeInOutCubic animation included in the plugin
    Math.easeInOutCubic = function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
    };

    function initialize(element, customOptions){

        // Create some defaults, extending them with any options that were provided
        var defaults = {
            //navigation
            menu: false,
            anchors:[],
            navigation: false,
            navigationPosition: 'right',
            navigationColor: '#000',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easingcss3: 'ease',
            loopHorizontal: true,
            touchSensitivity: 5,

            //Accessibility
            keyboardScrolling: true,
            recordHistory: true,

            //design
            controlArrows: true,

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,


            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        };

        options = extend(defaults, customOptions);

        originals = clone(options); //deep copy
        container = $(element);

        init(afterDomReady);
    }

    function init(callback){
        removeClass(container, DESTROYED); //in case it was destroyed before initilizing it again
        displayWarnings();

        //if css3 is not supported, it will use jQuery animations
        if(options.css3){
            options.css3 = support3d();
        }

        if(container !== null){
            css(container, {
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            addClass(container, WRAPPER);
            addClass($('html'), ENABLED);
        }
        //trying to use fullpage without a selector?
        else{
            showError('error', 'Error! Fullpage.js needs to be initialized with a selector. For example: fullpage(\'#fullpage\');');
        }

        setMouseWheelScrolling(true);
        addTouchHandler();
        addResizeHandler();
        addScrollHandler();

        //adding internal class names to void problem with common ones
        var originalSections = $$(options.sectionSelector);
        for (i = 0; i < originalSections.length; ++i) {
            addClass(originalSections[i], SECTION);
        }

        var originalSlides = $$(options.slideSelector);
        for (i = 0; i < originalSlides.length; ++i) {
            addClass(originalSlides[i], SLIDE);
        }

        //creating the navigation dots
        if (options.navigation) {
            addVerticalNavigation();
        }

        var sections = $$(SECTION_SEL);
        for(var i = 0; i<sections.length; i++){
            var index = i;
            var section = sections[i];
            var that = section;
            var slides = $$(SLIDE_SEL, section);
            var numSlides = slides.length;

            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL) === null) {
                addClass(section, ACTIVE);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.setAttribute('data-anchor', options.anchors[index]);

                //activating the menu / nav element on load
                if(hasClass(section, ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            // if there's any slide
            if (numSlides > 0) {
                var sliderWidth = numSlides * 100;
                var slideWidth = 100 / numSlides;

                var slidesHTML = section.innerHTML;
                var newHTML = '<div class="'+ SLIDES_WRAPPER +'"><div class="'+SLIDES_CONTAINER+'">' + slidesHTML + '</div></div>';
                section.innerHTML = newHTML;

                //getting again the NEW dom elements after innerHTML
                slides = $$(SLIDE_SEL, section);

                setCss($(SLIDES_CONTAINER_SEL, section), 'width',  sliderWidth + '%');

                if(options.controlArrows && numSlides > 1){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }


                for(var a = 0; a<slides.length; a++){
                    var currentSlide = slides[a];
                    setCss(currentSlide, 'width', slideWidth + '%');
                }

                var startingSlide = $(SLIDE_ACTIVE_SEL, section);

                //if the slide won#t be an starting point, the default will be the first one
                if(typeof startingSlide !== null){
                    addClass(slides[0], ACTIVE);

                }

                //is there a starting point for a non-starting section?
                else{
                    silentLandscapeScroll(startingSlide);
                }

            }
        }

        callback();
    }

    function afterDomReady(){
        //adding event for horizontal slides arrows navigation
        var slidesArrows = $$(SLIDES_ARROW_SEL);
        for(var i=0; i<slidesArrows.length; i++){
            addListenerMulti( slidesArrows[i], 'click onclick touchstart', arrowsHandler);
        }

        setAutoScrolling(options.autoScrolling, 'internal');

        //the starting point is a slide?
        var activeSection = $(SECTION_ACTIVE_SEL);

        var activeSlide = $(SLIDE_ACTIVE_SEL, activeSection);
        var activeSectionIndex = getNodeIndex($(SECTION_ACTIVE_SEL));

        //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
        if( activeSlide &&  (activeSectionIndex !==0 || (activeSectionIndex === 0 &&  getNodeIndex(activeSlide) !== 0))){
            silentLandscapeScroll(activeSlide);
        }

        //vertical centered of the navigation + first bullet active
        if(options.navigation){
            setCss(nav, 'margin-top', '-' + (nav.offsetHeight/2) + 'px');
            var activeLi = $$('li', nav)[getNodeIndex($(SECTION_ACTIVE_SEL))];
            addClass( $('a', activeLi), ACTIVE);
        }

        afterRenderActions();

        //getting the anchor link in the URL and deleting the `#`
        var value =  window.location.hash.replace('#', '').split('/');
        var destiny = value[0];

        if(destiny.length){
            var section = $('[data-anchor="'+destiny+'"]');

            if(!options.animateAnchor && section.length){

                if(options.autoScrolling){
                    silentScroll(section.offsetTop);
                }
                else{
                    silentScroll(0);
                    setBodyClass(destiny);

                    //scrolling the page to the section with no animation
                    var scrollSettings = getScrollSettings(section.offsetTop);
                    scrollTo(scrollSettings.element, scrollSettings.options, 0);
                }

                activateMenuAndNav(destiny, null);

                isFunction( options.afterLoad ) && options.afterLoad.call( section, destiny, (getNodeIndex(section) + 1));

                //updating the active class
                removeClass(activeSection, ACTIVE);
                addClass(section, ACTIVE);
            }
        }

        //setting the class for the body element
        setBodyClass();

        //support for IE > 8
        addHandler(document, scrollToAnchor, 'DOMContentLoaded', 'DOMContentLoaded', 'DOMContentLoaded');
    }

    /* --------------- Javascript helpers  ---------------*/

    /**
    * Replacement of jQuery extend method.
    */
    function extend(defaultOptions, options){
        //creating the object if it doesnt exist
        if(typeof(options) !== 'object'){
            options = {};
        }

        for(var key in options){
            if(defaultOptions.hasOwnProperty(key)){
                defaultOptions[key] = options[key];
            }
        }

        return defaultOptions;
    }

    function getById(element){
        return document.getElementById(element);
    }

    function getByTag(element){
        return document.getElementsByTagName(element)[0];
    }

    function css( el, props ) {
        var key;
        for ( key in props ) {
            if ( props.hasOwnProperty(key) ) {
                if ( key !== null ) {
                    el.style[key] = props[key];
                }
            }
        }
        return el;
    }

    function setCss(element, style, value){
        element.style[style] = value;
    }

    function $(selector, context){
        context = context || document;
        return context.querySelector(selector);
    }

    function $$(selector, context){
        context = context || document;
        return context.querySelectorAll(selector);
    }

    function getNodeIndex(node) {
        var index = 0;
        while ( (node = node.previousSibling) ) {
            if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
                index++;
            }
        }
        return index;
    }

    function toggle(element, display) {
        if(typeof display!== 'undefined'){
            if(display){
                element.style.display = 'block';
            }else{
                element.style.display = 'none';
            }
        }
        else{
            if( element.style.display == 'block' ) {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        }

        return element;
    }

    //http://jaketrent.com/post/addremove-classes-raw-javascript/
    function hasClass(ele,cls) {
        return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }

    function removeClass(element, className) {
        if (element && hasClass(element,className)) {
            var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
            element.className=element.className.replace(reg,'');
        }
    }

    function addClass(element, className) {
        if (element && !hasClass(element,className)) {
            element.className += ' '+className;
        }
    }

    //http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    function closest(el, fn) {
        return el && (
            fn(el) ? el : closest(el.parentNode, fn)
        );
    }

    function getWindowWidth(){
        return  'innerWidth' in window ? window.innerWidth : document.documentElement.offsetWidth;
    }

    function getWindowHeight(){
        return  'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    }

    function clone(obj) {
        if (null === obj || 'object' !== typeof obj){
            return obj;
        }
        var copy = obj.constructor();

        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)){
                copy[attr] = obj[attr];
            }
        }
        return copy;
    }

    function preventDefault(event){
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    }

    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    function addListenerMulti(el, s, fn) {
        var evts = s.split(' ');
        for (var i=0, iLen=evts.length; i<iLen; i++) {
            if (document.addEventListener) {
                el.addEventListener(evts[i], fn, false);
            }else{
                el.attachEvent(evts[i], fn, false); //IE 6/7/8
            }
        }
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

    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop(){
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    }

    //http://stackoverflow.com/questions/842336/is-there-a-way-to-select-sibling-nodes
    function getChildren(n, skipMe){
        var r = [];
        for ( ; n; n = n.nextSibling )
           if ( n.nodeType == 1 && n != skipMe)
              r.push( n );
        return r;
    };

    //Gets siblings
    function getAllSiblings(n) {
        return getChildren(n.parentNode.firstChild, n);
    }

    function next(element){
        var nextSibling = element.nextSibling;

        while(nextSibling && nextSibling.nodeType != 1) {
            nextSibling = nextSibling.nextSibling;
        }

        return nextSibling;
    }


    function prev(element){
        var prevSibling = element.previousSibling;

        while(prevSibling && prevSibling.nodeType != 1) {
            prevSibling = prevSibling.previousSibling;
        }

        return prevSibling;
    }

    /* --------------- END Javascript helpers  ---------------*/


    /**
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

    function setAutoScrolling(value, type){
        setVariableState('autoScrolling', value, type);

        var element = $(SECTION_ACTIVE_SEL);

        if(options.autoScrolling && !options.scrollBar){

            css(document.body, {
                'overflow': 'hidden',
                'height': '100%'
            });

            css(getByTag('html'),{
                'overflow': 'hidden',
                'height': '100%'
            });

            setRecordHistory(options.recordHistory, 'internal');

            //for IE touch devices
            css(container, {
                '-ms-touch-action': 'none',
                'touch-action': 'none'
            });

            if(element){
                //moving the container up
                silentScroll(element.offsetTop);
            }

        }else{
            css(document.body, {
                'overflow': 'visible',
                'height': '100%'
            });

            css(getByTag('html'),{
                'overflow': 'visible',
                'height': '100%'
            });

            setRecordHistory(false, 'internal');

            //for IE touch devices
            css(container, {
                '-ms-touch-action': '',
                'touch-action': ''
            });

            silentScroll(0);

            //scrolling the page to the section with no animation
            var scrollSettings = getScrollSettings(element.offsetTop);
            scrollSettings.element.scrollTo(0, scrollSettings.options);
        }

    }

    /**
    * Defines wheter to record the history for each hash change in the URL.
    */
    function setRecordHistory(value, type){
        setVariableState('recordHistory', value, type);
    }

    /**
    * Defines the scrolling speed
    */
    function setScrollingSpeed(value, type){
        setVariableState('scrollingSpeed', value, type);
    }

    /**
    * Sets fitToSection
    */
    function setFitToSection(value, type){
        setVariableState('fitToSection', value, type);
    }

    /**
    * Adds or removes the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
    */
    function setMouseWheelScrolling(value){
        if(value){
            addMouseWheelHandler();
        }else{
            removeMouseWheelHandler();
        }
    }

    /**
    * Adds or removes the possiblity of scrolling through sections by using the keyboard arrow keys
    */
    function setKeyboardScrolling(value){
        options.keyboardScrolling = value;
    }

    /**
    * Moves the page up one section.
    */
    function moveSectionUp(){
        var section = prev($(SECTION_ACTIVE_SEL));

        if (section) {
            scrollPage(section, null, true);
        }
    }

    /**
    * Moves the page down one section.
    */
    function moveSectionDown(){
        var section = next($(SECTION_ACTIVE_SEL));

        if(section){
            scrollPage(section, null, false);
        }
    }

    /**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */
    function silentMoveTo(sectionAnchor, slideAnchor){
        setScrollingSpeed (0, 'internal');
        moveTo(sectionAnchor, slideAnchor)
        setScrollingSpeed (originals.scrollingSpeed, 'internal');
    };

    /**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */
    function moveTo(sectionAnchor, slideAnchor){
        var destiny = getSectionByAnchor(sectionAnchor);

        if (typeof slideAnchor !== 'undefined'){
            scrollPageAndSlide(sectionAnchor, slideAnchor);
        }else if(destiny){
            scrollPage(destiny);
        }
    }

    /**
    * Slides right the slider of the active section.
    */
    function moveSlideRight(){
        moveSlide('next');
    }

    /**
    * Slides left the slider of the active section.
    */
    function moveSlideLeft(){
        moveSlide('prev');
    }


    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */
    function reBuild(resizing){
        if(hasClass(container, DESTROYED)){ return; }

        isResizing = true;

        windowsHeight = getWindowHeight();

        var sections = $$(SECTION_SEL);
        for (var i = 0; i < sections.length; ++i) {
            var section = sections[i];
            var slidesWrap = $(SLIDES_WRAPPER_SEL, section);
            var slides = $$(SLIDE_SEL, section);

            //adjusting the position fo the FULL WIDTH slides...
            if (slidesWrap && slides.length > 1) {
                landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap));
            }
        }


        var activeSection = $(SECTION_ACTIVE_SEL);

        //isn't it the first section?
        if(getNodeIndex(activeSection)){
            //adjusting the position for the current section
            silentScroll(activeSection.offsetTop);
        }

        isResizing = false;
        isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
        isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
    }

    /**
    * Creates the control arrows for the given section
    */
    function createSlideArrows(section){
        var prev = document.createElement('div');
        prev.className = SLIDES_ARROW_PREV;

        var next = document.createElement('div');
        next.className = SLIDES_ARROW_NEXT;

        var slides = $(SLIDES_WRAPPER_SEL, section);

        if(options.controlArrowColor != '#fff'){
            //setCss(next, 'border-color', 'transparent transparent transparent '+options.controlArrowColor);
            //setCss(prev, 'border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
        }

        slides.parentNode.appendChild(prev);
        slides.parentNode.appendChild(next);

        if(!options.loopHorizontal){
            $(SLIDES_ARROW_PREV_SEL, section).style.display = 'none';
        }
    }

    /**
    * Creates a vertical navigation bar.
    */
    function addVerticalNavigation(){
        var div = document.createElement('div');
        div.setAttribute('id', SECTION_NAV);

        var divUl = document.createElement('ul');
        div.appendChild(divUl);

        document.body.appendChild(div);

        nav = $(SECTION_NAV_SEL);

        setCss(nav, 'color', options.navigationColor);
        addClass(nav, options.navigationPosition);

        if(options.showActiveTooltip){
            addClass(nav, SHOW_ACTIVE_TOOLTIP);
        }

        var li = '';

        for (var i = 0; i < $$(SECTION_SEL).length; i++) {
            var link = '';
            if (options.anchors.length) {
                link = options.anchors[i];
            }

            li = li + '<li><a href="#' + link + '"><span></span></a>';

            // Only add tooltip if needed (defined by user)
            var tooltip = options.navigationTooltips[i];
            if (typeof tooltip !== undefined && tooltip !== '') {
                li += '<div class="'+ SECTION_NAV_TOOLTIP +' ' + options.navigationPosition + '">' + tooltip + '</div>';
            }

            li += '</li>';
        }

        var ul = $('ul', nav);
        ul.innerHTML = ul.innerHTML + li;

        //creating the event listener
        var links = $$(SLIDES_NAV_LINK_SEL);
        for(var l = 0; l<links.length; l++){
            addListenerMulti(links[l], 'click onclick touchstart', function(e){
                e = window.event || e || e.originalEvent;
                preventDefault(e);
                var index = getNodeIndex(this.parentNode);

                scrollPage($$(SECTION_SEL)[index], null, false);
            });
        }

    }

    /**
    * Actions and callbacks to fire afterRender
    */
    function afterRenderActions(){
        var section = $(SECTION_ACTIVE_SEL);

        isFunction( options.afterLoad ) && options.afterLoad.call(section, section.getAttribute('data-anchor'), (getNodeIndex(section) + 1));
        isFunction( options.afterRender ) && options.afterRender.call(container);
    }

    var scrollId;
    var scrollId2;
    var isScrolling = false;


    //when scrolling
    function scrollHandler(){
        var currentSection;

        if(!options.autoScrolling || options.scrollBar){
            var currentScroll = getScrollTop();
            var visibleSectionIndex = 0;
            var initial = Math.abs(currentScroll - $$(SECTION_SEL)[0].offsetTop);

            //taking the section which is showing more content in the viewport
            var sections = $$(SECTION_SEL);
            for (var i = 0; i < sections.length; ++i) {
                var section = sections[i];

                var current = Math.abs(currentScroll - section.offsetTop);

                if(current < initial){
                    visibleSectionIndex = i;
                    initial = current;
                }
            }

            //geting the last one, the current one on the screen
            currentSection = $$(SECTION_SEL)[visibleSectionIndex];

        }

        if(!options.autoScrolling || options.scrollBar){
            //executing it only once the first time we reach the section
            if(!hasClass(currentSection, ACTIVE)){

                isScrolling = true;
                var leavingSection = $(SECTION_ACTIVE_SEL);
                var leavingSectionIndex = getNodeIndex(leavingSection) + 1;
                var yMovement = getYmovement(currentSection);
                var anchorLink  = currentSection.getAttribute('data-anchor');
                var sectionIndex = getNodeIndex(currentSection) + 1;
                var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection);

                if(activeSlide){
                    var slideAnchorLink = activeSlide.getAttribute('data-anchor');
                    var slideIndex = getNodeIndex(activeSlide);
                }

                if(canScroll){
                    //removing siblings active class
                    removeClass(leavingSection, ACTIVE);

                    //adding the active class to the current active section
                    addClass(currentSection, ACTIVE);

                    isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                    isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                    activateMenuAndNav(anchorLink, 0);

                    if(options.anchors.length){
                        //needed to enter in hashChange event when using the menu with anchor links
                        lastScrolledDestiny = anchorLink;

                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }
                }

                //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                clearTimeout(scrollId);
                scrollId = setTimeout(function(){
                    isScrolling = false;
                }, 100);
            }

            if(options.fitToSection){
                //for the auto adjust of the viewport to fit a whole section
                clearTimeout(scrollId2);

                scrollId2 = setTimeout(function(){
                    if(canScroll && !options.autoScrolling || options.scrollBar){
                        //allows to scroll to an active section and
                        //if the section is already active, we prevent firing callbacks
                        if(getNodeIndex($(SECTION_ACTIVE_SEL)) == getNodeIndex(currentSection) ){
                            isResizing = true;
                        }

                        scrollPage(currentSection);
                        isResizing = false;
                    }
                }, options.fitToSectionDelay);
            }
        }
    }

    /**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */
    function scrolling(type){
        if(type == 'down'){
            moveSectionDown();
        }else{
            moveSectionUp();
        }
    }


    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;

    /* Detecting touch events

    * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */
    function touchMoveHandler(event){

        var e = window.event || event || event.originalEvent;

        if(isReallyTouch(e)){
            if(options.autoScrolling){
                //preventing the easing on iOS devices
                preventDefault(event);
            }

            var activeSection = $(SECTION_ACTIVE_SEL);
            var slides = $$(SLIDES_WRAPPER_SEL, activeSection);

            if (canScroll && !slideMoving) { //if theres any #
                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if ( slides && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartX - touchEndX) > (getWindowWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            moveSlideRight(); //next
                        } else {
                            moveSlideLeft(); //prev
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > (getWindowHeight()/ 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down');
                        } else if (touchEndY > touchStartY) {
                            scrolling('up');
                        }
                    }
                }
            }
        }
    }

    /**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */
    function isReallyTouch(e){
        //if is not IE   ||  IE is detecting `touch` or `pen`
        return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
    }

    /**
    * Handler for the touch start event.
    */
    function touchStartHandler(event){
        var e = window.event || event || event.originalEvent;

        //stopping the auto scroll to adjust to a section
        if(options.fitToSection){
            activeAnimation = false;
        }

        if(isReallyTouch(e)){
            var touchEvents = getEventsPage(e);
            touchStartY = touchEvents.y;
            touchStartX = touchEvents.x;
        }
    }

    /**
    * Gets the average of the last `number` elements of the given array.
    */
    function getAverage(elements, number){
        var sum = 0;

        //taking `number` elements from the end to make the average, if there are not enought, 1
        var lastElements = elements.slice(Math.max(elements.length - number, 1));

        for(var i = 0; i < lastElements.length; i++){
            sum = sum + lastElements[i];
        }
        return Math.ceil(sum/number);
    }


    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */
    var prevTime = new Date().getTime();

    function MouseWheelHandler(e) {
        var curTime = new Date().getTime();

        if(options.autoScrolling){
            // cross-browser wheel delta
            e = window.event || e || e.originalEvent;

            var value = e.wheelDelta || -e.deltaY || -e.detail;
            var delta = Math.max(-1, Math.min(1, value));

            //Limiting the array to 150 (lets not waist memory!)
            if(scrollings.length > 149){
                scrollings.shift();
            }

            //keeping record of the previous scrollings
            scrollings.push(Math.abs(value));

            //preventing to scroll the site on mouse wheel when scrollbar is present
            if(options.scrollBar){
                preventDefault(e);
            }

            var timeDiff = curTime-prevTime;
            prevTime = curTime;

            //haven't they scrolled in a while?
            //(enough to be consider a different scrolling action to scroll another section)
            if(timeDiff > 200){
                //emptying the array, we dont care about old scrollings for our averages
                scrollings = [];
            }

            if(canScroll){//if theres any #

                var averageEnd = getAverage(scrollings, 10);
                var averageMiddle = getAverage(scrollings, 70);
                var isAccelerating = averageEnd >= averageMiddle;

                if(isAccelerating){
                    //scrolling down?
                    if (delta < 0) {
                        scrolling('down');

                    //scrolling up?
                    }else {
                        scrolling('up');
                    }
                }
            }

            return false;
        }

        if(options.fitToSection){
            //stopping the auto scroll to adjust to a section
            activeAnimation = false;
        }
    }

    /**
    * Slides a slider to the given direction.
    */
    function moveSlide(direction){
        var activeSection = $(SECTION_ACTIVE_SEL);
        var slides = $(SLIDES_WRAPPER_SEL, activeSection);

        // more than one slide needed and nothing should be sliding
        if (!slides|| slideMoving) {
            return;
        }

        var currentSlide = $(SLIDE_ACTIVE_SEL, slides);
        var destiny = null;
        if(direction === 'prev'){
            destiny = prev(currentSlide);
        }else{
            destiny = next(currentSlide);
        }

        //isn't there a next slide in the secuence?
        if(!destiny){
            //respect loopHorizontal settin
            if (!options.loopHorizontal) return;

            var siblings = getAllSiblings(currentSlide);
            if(direction === 'prev'){
                destiny = siblings[siblings.length - 1]; //last
            }else{
                destiny = siblings[0]; //first
            }
        }

        slideMoving = true;

        landscapeScroll(slides, destiny);
    }



    /**
    * Maintains the active slides in the viewport
    * (Because he `scroll` animation might get lost with some actions)
    */
    function keepSlidesPosition(){
        var activeSlides = $$(SLIDE_ACTIVE_SEL);
        for( var i =0; i<activeSlides.length; i++){
            silentLandscapeScroll(activeSlides[i], 'internal');
        }
    }

    /**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */
    function scrollPage(element, callback, isMovementUp){
        if(element === null){ return; } //there's no element to scroll, leaving the function
        //local variables
        var v = {
            element: element,
            callback: callback,
            isMovementUp: isMovementUp,
            dtop: element.offsetTop,
            yMovement: getYmovement(element),
            anchorLink: element.getAttribute('data-anchor'),
            sectionIndex: getNodeIndex(element),
            activeSlide: $(SLIDE_ACTIVE_SEL, element),
            activeSection: $(SECTION_ACTIVE_SEL),
            leavingSection: getNodeIndex($(SECTION_ACTIVE_SEL)) + 1,

            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            localIsResizing: isResizing
        };

        //quiting when destination scroll is the same as the current one
        if(( getNodeIndex(v.activeSection) == v.sectionIndex && !isResizing) || (options.scrollBar && getScrollTop() === v.dtop)){ return; }

        if(v.activeSlide){
            var slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
            var slideIndex = getNodeIndex(v.activeSlide);
        }

        var siblings = $$(SECTION_SEL);
        for(var s=0; s<siblings.length; s++){
            removeClass(siblings[s], ACTIVE);
        }

        addClass(element, ACTIVE);

        //preventing from activating the MouseWheelHandler event
        //more than once if the page is scrolling
        canScroll = false;

        setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

        //callback (onLeave) if the site is not just resizing and readjusting the slides
        isFunction(options.onLeave) && !v.localIsResizing && options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement);


        performMovement(v);

        //flag to avoid callingn `scrollPage()` twice in case of using anchor links
        lastScrolledDestiny = v.anchorLink;


        activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }

    /**
    * Performs the movement (by CSS3 or by jQuery)
    */
    function performMovement(v){
        // using CSS3 translate functionality
        if (options.css3 && options.autoScrolling && !options.scrollBar) {
            var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
            transformContainer(translate3d, true);

            //even when the scrollingSpeed is 0 there's a little delay, which might cause the
            //scrollingSpeed to change in case of using silentMoveTo();
            if(options.scrollingSpeed){
                setTimeout(function () {
                    afterSectionLoads(v);
                }, options.scrollingSpeed);
            }else{
                afterSectionLoads(v);
            }
        }

        // using jQuery animate
        else{
            var scrollSettings = getScrollSettings(v.dtop);
            scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function(){
                afterSectionLoads(v);
            });
        }
    }

    /**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */
    function getScrollSettings(top){
        var scroll = {};

        //top property animation
        if(options.autoScrolling && !options.scrollBar){
            scroll.options = -top;
            scroll.element = $('.'+WRAPPER);
        }

        //window real scrolling
        else{
            scroll.options = top;
            scroll.element = window;
        }

        return scroll;
    }

    /**
    * Actions to do once the section is loaded
    */
    function afterSectionLoads (v){
        //callback (afterLoad) if the site is not just resizing and readjusting the slides
        isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));
        canScroll = true;

        isFunction(v.callback) && v.callback.call(this);
    }


    /**
    * Scrolls to the anchor in the URL when loading the site
    */
    function scrollToAnchor(){
        //getting the anchor link in the URL and deleting the `#`
        var value =  window.location.hash.replace('#', '').split('/');
        var section = value[0];
        var slide = value[1];

        if(section){  //if theres any #
            scrollPageAndSlide(section, slide);
        }
    }

    //detecting any change on the URL to scroll to the given anchor link
    //(a way to detect back history button as we play with the hashes on the URL)
    if (document.addEventListener) {
        window.addEventListener('hashchange', hashChangeHandler, false); //IE9, Chrome, Safari, Oper
    } else {
        window.attachEvent('onhashchange', hashChangeHandler); //IE 6/7/8
    }

    function arrowsHandler(event){
        var element = this;

        //IE 8 (using attach event...)
        //http://stackoverflow.com/a/4590231/1081396
        if(element.self == window ){
            element = event.target || event.srcElement;
        }

        if (hasClass(element, SLIDES_PREV)) {
            moveSlideLeft();
        } else {
            moveSlideRight();
        }
    }

    function hashChangeHandler(){
        if(!isScrolling){
            var value =  window.location.hash.replace('#', '').split('/');
            var section = value[0];
            var slide = value[1];

            if(section.length){
                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);

                /*in order to call scrollpage() only once for each destination at a time
                It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                event is fired on every scroll too.*/
                if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
                    scrollPageAndSlide(section, slide);
                }
            }
        }
    }


    /**
     * Sliding with arrow keys, both, vertical and horizontal
     */
    var keydownId;
    document.onkeydown = function(e) {
        clearTimeout(keydownId);

        var activeElement = document.activeElement;
        var tagName = activeElement.tagName;

        if(tagName !== 'SELECT' && tagName !== 'INPUT' && options.keyboardScrolling && options.autoScrolling){

            e = window.event || e || e.originalEvent;
            var charCode = e.charCode || e.keyCode;

            //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
            var keyControls = [40, 38, 32, 33, 34];
            for(var i=0; i<keyControls.length; i++){
                if(keyControls[i] == charCode){
                    preventDefault(e);
                }
            }

            var shiftPressed = e.shiftKey;
            keydownId = setTimeout(function(){
                onkeydown(shiftPressed, charCode);
            },150);
        }
    };

    function onkeydown(shiftPressed, charCode){
        switch (charCode) {
            //up
            case 38:
            case 33:
                moveSectionUp();
                break;

            //down
            case 32: //spacebar
                if(shiftPressed){
                    moveSectionUp();
                    break;
                }
            case 40:
            case 34:
                moveSectionDown();
                break;

            //Home
            case 36:
                moveTo(1);
                break;

            //End
            case 35:
                moveTo( $$(SECTION_SEL).length );
                break;

            //left
            case 37:
                moveSlideLeft();
                break;

            //right
            case 39:
                moveSlideRight();
                break;

            default:
                return; // exit this handler for other keys
        }
    }

    /**
    * Scrolls the slider to the given slide destination for the given section
    */
    var slidesNav = $(SLIDES_NAV_LINK_SEL);
    if(slidesNav !== null){
        addListenerMulti($(SLIDES_NAV_LINK_SEL), 'click onclick touchstart', function(e){
            preventDefault(e);

            //equivalent to:   var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var section = closest(this, function (el) {
                return hasClass(e1, SECTION);
            });
            var slides = $(SLIDES_WRAPPER_SEL, section);

            var li = closest(this, function (el) {
                return el.tagName === 'li';
            });
            var liIndex = getNodeIndex(li);
            var destiny = $$(SLIDE_SEL, slides)[liIndex];

            landscapeScroll(slides, destiny);
        });
    }

    /**
     * Scrolling horizontally when clicking on the slider controls.
     */
    // $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, function() {
    //  if ($(this).hasClass(SLIDES_PREV)) {
    //      moveSlideLeft();
    //  } else {
    //      moveSlideRight();
    //  }
    // });

    /**
    * Scrolls horizontal sliders.
    */
    function landscapeScroll(slides, destiny){
        var slideIndex = getNodeIndex(destiny);

        //equivalent to slides.closest(SECTION_SEL)
        var section = closest(slides, function(e1){
            return hasClass(e1, SECTION);
        });

        var sectionIndex = getNodeIndex(section);
        var anchorLink = section.getAttribute('data-anchor');
        var slidesNav = $(SLIDES_NAV_SEL, section);
        var slideAnchor = getSlideAnchor(destiny);

        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        var localIsResizing = isResizing;

        if(options.onSlideLeave){
            var prevSlide = $(SLIDE_ACTIVE_SEL, section);
            var prevSlideIndex = getNodeIndex(prevSlide);
            var xMovement = getXmovement(prevSlideIndex, slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!localIsResizing && xMovement!=='none'){
                isFunction( options.onSlideLeave ) && options.onSlideLeave.call( prevSlide, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement, slideIndex);
            }
        }

        var siblings = $$(SLIDE_SEL, section);

        for(var s=0; s<siblings.length; s++){
            removeClass(siblings[s], ACTIVE);
        }

        addClass(destiny, ACTIVE);



        if(!options.loopHorizontal && options.controlArrows){
            //hidding it for the fist slide, showing for the rest
            toggle($(SLIDES_ARROW_PREV_SEL, section), slideIndex!==0);

            //hidding it for the last slide, showing for the rest
            toggle($(SLIDES_ARROW_NEXT_SEL, section), !destiny.is(':last-child'));
        }

        //only changing the URL if the slides are in the current section (not for resize re-adjusting)
        if(hasClass(section, ACTIVE)){
            setState(slideIndex, slideAnchor, anchorLink, sectionIndex);
        }

        var afterSlideLoads = function(){
            //if the site is not just resizing and readjusting the slides
            if(!localIsResizing){
                isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( destiny, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
            }
            //letting them slide again
            slideMoving = false;
        };

        if(options.css3){
            var translate3d = 'translate3d(-' + Math.round(destiny.offsetLeft) + 'px, 0px, 0px)';
            var slidesContainer = $(SLIDES_CONTAINER_SEL, slides);

            addAnimation(slidesContainer, options.scrollingSpeed>0);
            setTransforms(slidesContainer, translate3d);

            setTimeout(function(){
                afterSlideLoads();
            }, options.scrollingSpeed, options.easing);
        }else{
            scrollTo(slides, Math.round(destiny.offsetLeft), options.scrollingSpeed, function(){
                afterSlideLoads();
            });
        }

        if(options.slidesNavigation){
            removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
            var activeNavLi = $$('li', slidesNav)[slideIndex];
            var activeLink = $('a', activeNavLi);
            addClass(activeLink, ACTIVE);
        }
    }

    //when resizing the site, we adjust the heights of the sections
    var previousHeight = windowsHeight;
    var resizeId;
    function resizeHandler(){
        // rebuild immediately on touch devices
        if (isTouchDevice) {

            //if the keyboard is visible
            if (document.activeElement.getAttribute('type') !== 'text') {
                var currentHeight = getWindowHeight();

                //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                    reBuild(true);
                    previousHeight = currentHeight;
                }
            }
        }else{
            //in order to call the functions only when the resize is finished
            //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            clearTimeout(resizeId);

            resizeId = setTimeout(function(){
                reBuild(true);
            }, 350);
        }
    }

    /**
    * Adds transition animations for the given element
    */
    function addAnimation(element){
        var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

        removeClass(element, NO_TRANSITION);

        css(element,{
            '-webkit-transition': transition,
            'transition': transition
        });

        return element;
    }

    /**
    * Remove transition animations for the given element
    */
    function removeAnimation(element){
        return addClass(element, NO_TRANSITION);
    }

    /**
     * Activating the website navigation dots according to the given slide name.
     */
    function activateNavDots(name, sectionIndex){
        if(options.navigation){
            removeClass( $(ACTIVE_SEL, nav), ACTIVE);

            if(name){
                addClass( $('a[href="#' + name + '"]', nav) , ACTIVE);
            }else{
                var currentLi = $$('li', nav)[sectionIndex];
                addClass( $('a', currentLi), ACTIVE);
            }
        }
    }

    /**
     * Activating the website main menu elements according to the given slide name.
     */
    function activateMenuElement(name){
        if(options.menu){
            var menu = $(options.menu);
            if(menu){
                removeClass($(ACTIVE_SEL, menu), ACTIVE);
                addClass($('[data-menuanchor="'+name+'"]', menu), ACTIVE);
            }
        }
    }

    function activateMenuAndNav(anchor, index){
        activateMenuElement(anchor);
        activateNavDots(anchor, index);
    }

    /**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */
    function getYmovement(destiny){
        var fromIndex = getNodeIndex($(SECTION_ACTIVE_SEL));
        var toIndex = getNodeIndex(destiny);
        if( fromIndex == toIndex){
            return 'none';
        }
        if(fromIndex > toIndex){
            return 'up';
        }
        return 'down';
    }

    /**
    * Retuns `right` or `left` depending on the scrolling movement to reach its destination
    * from the current slide.
    */
    function getXmovement(fromIndex, toIndex){
        if( fromIndex == toIndex){
            return 'none';
        }
        if(fromIndex > toIndex){
            return 'left';
        }
        return 'right';
    }

    /**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */
    function transformContainer(translate3d, animated){
        if(animated){
            addAnimation(container);
        }else{
            removeAnimation(container);
        }

        setTransforms(container, translate3d);

        //syncronously removing the class after the animation has been applied.
        setTimeout(function(){
            removeClass(container, NO_TRANSITION);
        },10);
    }

    /**
    * Gets a section by its anchor / index
    */
    function getSectionByAnchor(sectionAnchor){
        //section
        var section = $(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
        if(!section){
            section = $$(SECTION_SEL)[(sectionAnchor -1)];
        }

        return section;
    }

    /**
    * Gets a slide inside a given section by its anchor / index
    */
    function getSlideByAnchor(slideAnchor, section){
        var slides = $(SLIDES_WRAPPER_SEL, section);
        var slide =  $(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]', slides);

        if(slides && !slide){
            slide = $$(SLIDE_SEL, slides)[slideAnchor];
        }

        return slide;
    }

    /**
    * Scrolls to the given section and slide
    */
    function scrollPageAndSlide(destiny, slide){
        var section = getSectionByAnchor(decodeURI(destiny));

        if (typeof slide === 'undefined') {
            slide = 0;
        }

        //we need to scroll to the section and then to the slide
        if (destiny !== lastScrolledDestiny && !hasClass(section, ACTIVE)){
            scrollPage(section, function(){
                scrollSlider(section, slide);
            });
        }
        //if we were already in the section
        else{
            scrollSlider(section, slide);
        }
    }

    /**
    * Scrolls the slider to the given slide destination for the given section
    */
    function scrollSlider(section, slideAnchor){
        if(typeof slideAnchor !== 'undefined'){
            var slides = $(SLIDES_WRAPPER_SEL, section);
            var destiny =  getSlideByAnchor(slideAnchor, section);

            if(destiny){
                landscapeScroll(slides, destiny);
            }
        }
    }

    /**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */
    function addSlidesNavigation(section, numSlides){
        var div = document.createElement('div');
        div.className = SLIDES_NAV;

        var divUl = document.createElement('ul');
        div.appendChild(divUl);

        section.appendChild(div);

        var nav = $(SLIDES_NAV_SEL, section);
        var ul =  $('ul', nav);

        //top or bottom
        addClass(nav, options.slidesNavPosition);

        var list = '';
        for(var i=0; i< numSlides; i++){
            list = list + '<li><a href="#"><span></span></a></li>';
        }

        ul.innerHTML = ul.innerHTML + list;

        //centering it
        setCss(nav, 'margin-left', '-' + (nav.offsetWidth/2) + 'px');

        var firstLi = $$('li', nav)[0];
        addClass( $('a', firstLi), ACTIVE);
    }


    /**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */
    function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
        var sectionHash = '';

        if(options.anchors.length){

            //isn't it the first slide?
            if(slideIndex){
                if(typeof anchorLink !== 'undefined'){
                    sectionHash = anchorLink;
                }

                //slide without anchor link? We take the index instead.
                if(typeof slideAnchor === 'undefined'){
                    slideAnchor = slideIndex;
                }

                lastScrolledSlide = slideAnchor;
                setUrlHash(sectionHash + '/' + slideAnchor);

            //first slide won't have slide anchor, just the section one
            }else if(typeof slideIndex !== 'undefined'){
                lastScrolledSlide = slideAnchor;
                setUrlHash(anchorLink);
            }

            //section without slides
            else{
                setUrlHash(anchorLink);
            }

        }
        setBodyClass();
    }

    /**
    * Sets the URL hash.
    */
    function setUrlHash(url){
        if(options.recordHistory){
            location.hash = url;
        }else{
            //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
            if(isTouchDevice || isTouch){
                history.replaceState(undefined, undefined, '#' + url);
            }else{
                var baseUrl = window.location.href.split('#')[0];
                window.location.replace( baseUrl + '#' + url );
            }
        }
    }

    /**
    * Gets the anchor for the given slide. Its index will be used if there's none.
    */
    function getSlideAnchor(slide){
        var slideAnchor = slide.getAttribute('data-anchor');
        var slideIndex = getNodeIndex(slide);

        //Slide without anchor link? We take the index instead.
        if(!slideAnchor){
            slideAnchor = slideIndex;
        }

        return slideAnchor;
    }

    /**
    * Sets a class for the body of the page depending on the active section / slide
    */
    function setBodyClass(text){
        var section = $(SECTION_ACTIVE_SEL);
        var slide = $(SLIDE_ACTIVE_SEL, section);

        var sectionAnchor = section.getAttribute('data-anchor');
        var sectionIndex = getNodeIndex(section);

        var text = String(sectionIndex);

        if(options.anchors.length){
            text = sectionAnchor;
        }

        if(slide){
            var slideAnchor = getSlideAnchor(slide);
            text = text + '-' + slideAnchor;
        }

        //changing slash for dash to make it a valid CSS style
        text = text.replace('/', '-').replace('#','');

        //removing previous anchor classes
        var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
        document.body.className = document.body.className.replace(classRe, '');

        //adding the current anchor
        addClass(document.body, VIEWING_PREFIX + '-' + text);
    }

    /**
    * Checks for translate3d support
    * @return boolean
    * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
    */
    function support3d() {
        var el = document.createElement('p'),
            has3d,
            transforms = {
                'webkitTransform':'-webkit-transform',
                'OTransform':'-o-transform',
                'msTransform':'-ms-transform',
                'MozTransform':'-moz-transform',
                'transform':'transform'
            };

        // Add it to the body to get the computed style.
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = 'translate3d(1px,1px,1px)';
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
    }



    /**
    * Removes the auto scrolling action fired by the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
    */
    function removeMouseWheelHandler(){
        var wrapper = $(WRAPPER_SEL);

        if (document.addEventListener) {
            wrapper.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
            wrapper.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
        } else {
            wrapper.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
        }
    }


    /**
    * Adds the auto scrolling action for the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements will scroll through sections
    */
    function addMouseWheelHandler(){
        addHandler($(WRAPPER_SEL), MouseWheelHandler, 'mousewheel', 'onmousewheel', 'wheel');
    }

    function addResizeHandler(){
        addHandler(window, resizeHandler, 'resize', 'onresize');
    }

    function addScrollHandler(){
        addHandler(window, scrollHandler, 'scroll', 'onscroll', 'onscroll');
    }

    function addHandler(element, method, normal, oldIE, firefox){
        if(element.addEventListener){
            element.addEventListener(normal, method, false); //IE9, Chrome, Safari, Oper

            if(typeof firefox !== 'undefined'){
                element.addEventListener(firefox, method, false); //Firefox
            }
        }else{
            element.attachEvent(oldIE, method);  //IE 6/7/8
        }
    }


    /**
    * Adds the possibility to auto scroll through sections on touch devices.
    */
    function addTouchHandler(){
        if(isTouchDevice || isTouch){
            var wrapper = $(WRAPPER_SEL);
            if (document.addEventListener) {
                //Microsoft pointers
                var MSPointer = getMSPointer();

                wrapper.removeEventListener('touchstart', touchStartHandler);
                wrapper.removeEventListener(MSPointer.down, touchStartHandler);

                wrapper.removeEventListener('touchmove', touchMoveHandler);
                wrapper.removeEventListener(MSPointer.move, touchMoveHandler);

                addListenerMulti(wrapper, 'touchstart ' + MSPointer.down, touchStartHandler);
                addListenerMulti(wrapper, 'touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }
    }

    /**
    * Removes the auto scrolling for touch devices.
    */
    function removeTouchHandler(){
        if(isTouchDevice || isTouch){
            var wrapper = $(WRAPPER_SEL);

            if (wrapper.addEventListener) {
                //Microsoft pointers
                var MSPointer = getMSPointer();

                wrapper.removeEventListener('touchstart', touchStartHandler);
                wrapper.removeEventListener(MSPointer.down, touchStartHandler);

                wrapper.removeEventListener('touchmove', touchMoveHandler);
                wrapper.removeEventListener(MSPointer.move, touchMoveHandler);
            }
        }
    }


    /*
    * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
    * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
    */
    function getMSPointer(){
        var pointer;

        //IE >= 11 & rest of browsers
        if(window.PointerEvent){
            pointer = { down: 'pointerdown', move: 'pointermove'};
        }

        //IE < 11
        else{
            pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
        }

        return pointer;
    }
    /**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */
    function getEventsPage(e){
        var events = [];

        events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
        events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

        //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
        if(isTouch && isReallyTouch(e)){
            events.y = e.touches[0].pageY;
            events.x = e.touches[0].pageX;
        }

        return events;
    }

    function silentLandscapeScroll(activeSlide, noCallbacks){
        setScrollingSpeed (0, 'internal');

        if(typeof noCallbacks !== 'undefined'){
            //preventing firing callbacks afterSlideLoad etc.
            isResizing = true;
        }

        //equivalent to:   activeSlide.closest(SLIDES_WRAPPER_SEL)
        var slides = closest(activeSlide, function (el) {
            return hasClass(el, SLIDES_WRAPPER);
        });

        landscapeScroll(slides, activeSlide);

        if(typeof noCallbacks !== 'undefined'){
            isResizing = false;
        }

        setScrollingSpeed(originals.scrollingSpeed, 'internal');
    }

    function silentScroll(top){
        if(options.scrollBar){
            var scrollSettings = getScrollSettings(top);
            setScrolling(scrollSettings.element, scrollSettings.options, 0);
        }
        else if (options.css3) {
            var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
            transformContainer(translate3d, false);
        }
        else {
            setCss(container, 'top', -top + 'px');

        }
    }

    function setTransforms(element, translate3d){
        css(element, {
            '-webkit-transform': translate3d,
            '-moz-transform': translate3d,
            '-ms-transform': translate3d,
            'transform': translate3d
        });
    }

    /*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */
    function setVariableState(variable, value, type){
        options[variable] = value;
        if(type !== 'internal'){
            originals[variable] = value;
        }
    }

    /**
    * Displays warnings
    */
    function displayWarnings(){
        //anchors can not have the same value as any element ID or NAME
        for(var i =0; i<options.anchors.length; i++){
            var name = options.anchors[i];
            var existId = getById('#' + name);
            if( existId || $$('[name="'+name+'"]').length){
                showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
            }
        }
    }

    /**
    * Shows a message in the console of the given type.
    */
    function showError(type, text){
        console && console[type] && console[type]('fullPage: ' + text);
    }

    //API
    fullpage = {
        initialize: initialize,
        moveSectionUp: moveSectionUp,
        moveSectionDown: moveSectionDown,
        moveTo: moveTo,
        silentMoveTo: silentMoveTo,
        moveSlideRight: moveSlideRight,
        moveSlideLeft: moveSlideLeft,
        setAutoScrolling: setAutoScrolling,
        setFitToSection: setFitToSection,
        setKeyboardScrolling: setKeyboardScrolling,
        setRecordHistory: setRecordHistory,
        setScrollingSpeed: setScrollingSpeed
    };

    return fullpage;
}));
