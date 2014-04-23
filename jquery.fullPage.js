/**
 * fullPage 2.0.6
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */

(function($) {
    $.fn.fullpage = function(options) {
        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            "verticalCentered": true,
            'resize': true,
            'slidesColor': [],
            'anchors': [],
            'scrollingSpeed': 700,
            'easing': 'easeInQuart',
            'menu': false,
            'navigation': false,
            'navigationPosition': 'right',
            'navigationColor': '#000',
            'navigationTooltips': [],
            'slidesNavigation': false,
            'slidesNavPosition': 'bottom',
            'controlArrowColor': '#fff',
            'loopBottom': false,
            'loopTop': false,
            'loopHorizontal': true,
            'autoScrolling': true,
            'scrollOverflow': false,
            'css3': false,
            'paddingTop': 0,
            'paddingBottom': 0,
            'fixedElements': null,
            'normalScrollElements': null,
            'keyboardScrolling': true,
            'touchSensitivity': 5,
            'continuousVertical': false,
            'animateAnchor': true,
            'normalScrollElementTouchThreshold': 5,

            //events
            'afterLoad': null,
            'onLeave': null,
            'afterRender': null,
        	'afterResize': null,
            'afterSlideLoad': null,
            'onSlideLeave': null,

            'cssPrefix': null,

            'sectionClass': 'section',
            'slideClass': 'slide',
            'slidesClass': 'slides',
            'slidesContainerClass': 'slidesContainer',
            'tooltipClass': 'fullPage-tooltip',
            'controlArrowClass': 'controlArrow',
            'slidesNavClass': 'fullPage-slidesNav',
            'tableClass':'table',
            'tableCellClass': 'tableCell',
            'slimScrollBarClass':'slimScrollBar',
            'slimScrollRailClass':'slimScrollRail',
            'prevClass':'prev',
            'nextClass':'next',
            'toSlideClass':'toSlide',

            'activeClass': 'active',
            'scrollableClass': 'scrollable',
            'easingClass': 'easing',

            'superContainerId': 'superContainer',
            'sectionNavId': 'fullPage-nav'
        }, options);

        if (options.cssPrefix) {
            options.sectionClass = options.cssPrefix + options.sectionClass;
            options.slideClass = options.cssPrefix + options.slideClass;
            options.slidesClass = options.cssPrefix + options.slidesClass;
            options.slidesContainerClass = options.cssPrefix + options.slidesContainerClass;
            options.tooltipClass = options.cssPrefix + options.tooltipClass;
            options.controlArrowClass = options.cssPrefix + options.controlArrowClass;
            options.slidesNavClass = options.cssPrefix + options.slidesNavClass;
            options.tableClass = options.cssPrefix + options.tableClass;
            options.tableCellClass = options.cssPrefix + options.tableCellClass;
            options.slimScrollBarClass = options.cssPrefix + options.slimScrollBarClass;
            options.slimScrollRailClass = options.cssPrefix + options.slimScrollRailClass;
            options.prevClass = options.cssPrefix + options.prevClass;
            options.nextClass = options.cssPrefix + options.nextClass;

            options.activeClass = options.cssPrefix + options.activeClass;
            options.scrollableClass = options.cssPrefix + options.scrollableClass;
            options.easingClass = options.cssPrefix + options.easingClass;

            options.superContainerId = options.cssPrefix + options.superContainerId;
            options.sectionNavId = options.cssPrefix + options.sectionNavId;
        }

        options.sectionSelector = options.sectionSelector || ('.' + options.sectionClass);
        options.slideSelector = options.slideSelector || ('.' + options.slideClass);
        options.slidesSelector = options.slidesSelector || ('.' + options.slidesClass);
        options.slidesContainerSelector = options.slidesContainerSelector || ('.' + options.slidesContainerClass);
        options.tooltipSelector = options.tooltipSelector || ('.' + options.tooltipClass);
        options.controlArrowSelector = options.controlArrowSelector || ('.' + options.controlArrowClass);
        options.slidesNavSelector = options.slidesNavSelector || ( '.' + options.slidesNavClass);
        options.tableSelector = options.tableSelector || ( '.' + options.tableClass);
        options.tableCellSelector = options.tableCellSelector || ( '.' + options.tableCellClass);
        options.slimScrollBarSelector = options.slimScrollBarSelector || ( '.' + options.slimScrollBarClass);
        options.slimScrollRailSelector = options.slimScrollRailSelector || ( '.' + options.slimScrollRailClass);
        options.prevSelector = options.prevSelector || ( '.' + options.prevClass);
        options.nextSelector = options.nextSelector || ( '.' + options.nextClass);
        options.toSlideSelector = options.toSlideSelector || ('.'+ options.toSlideClass);

        options.activeSelector = options.activeSelector || ('.' + options.activeClass);
        options.scrollableSelector = options.scrollableSelector || ('.' + options.scrollableClass);

        options.superContainerSelector = options.superContainerSelector || ("#" + options.superContainerId);
        options.sectionNavSelector = options.sectionNavSelector || ("#" + options.sectionNavId);

        options.activeSectionSelector = options.sectionSelector + '.' + options.activeClass;
        options.activeSlideSelector = options.slideSelector + '.' + options.activeClass;

        // Disable mutually exclusive settings
        if (options.continuousVertical &&
            (options.loopTop || options.loopBottom)) {
            options.continuousVertical = false;
            console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled");
        }

        //Defines the delay to take place before being able to scroll to the next section
        //BE CAREFUL! Not recommended to change it under 400 for a good behavior in laptops and
        //Apple devices (laptops, mouses...)
        var scrollDelay = 600;

        $.fn.fullpage.setAutoScrolling = function(value) {
            options.autoScrolling = value;

            var element = $(options.activeSectionSelector);

            var els = $('html, body');
            if (options.autoScrolling) {
                els.css({
                    'overflow': 'hidden',
                    'height': '100%'
                });

                if (element.length) {
                    //moving the container up
                    silentScroll(element.position().top);
                }

            } else {
                els.css({
                    'overflow': 'auto',
                    'height': 'auto'
                });

                silentScroll(0);

                //scrolling the page to the section with no animation
                els.scrollTop(element.position().top);
            }

        };

        /**
         * Defines the scrolling speed
         */
        $.fn.fullpage.setScrollingSpeed = function(value) {
            options.scrollingSpeed = value;
        };

        /**
         * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
         */
        $.fn.fullpage.setMouseWheelScrolling = function(value) {
            if (value) {
                addMouseWheelHandler();
            } else {
                removeMouseWheelHandler();
            }
        };

        /**
         * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
         */
        $.fn.fullpage.setAllowScrolling = function(value) {
            if (value) {
                $.fn.fullpage.setMouseWheelScrolling(true);
                addTouchHandler();
            } else {
                $.fn.fullpage.setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        };

        /**
         * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
         */
        $.fn.fullpage.setKeyboardScrolling = function(value) {
            options.keyboardScrolling = value;
        };

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
        var container = $(this); // for compatibility reasons for fullpage < v2.0
        var windowsHeight = $(window).height();
        var isMoving = false;
        var isResizing = false;
        var lastScrolledDestiny;
        var lastScrolledSlide;

        $.fn.fullpage.setAllowScrolling(true);

        //if css3 is not supported, it will use jQuery animations
        if (options.css3) {
            options.css3 = support3d();
        }

        if ($(this).length) {
            container.css({
                'height': '100%',
                'position': 'relative',
                '-ms-touch-action': 'none'
            });
        }

        //for compatibity reasons for fullpage < v2.0
        else {
            $('body').wrapInner('<div id="' + options.superContainerId + '" />');
            container = $(options.superContainerSelector);
        }

        //creating the navigation dots
        if (options.navigation) {
            $('body').append('<div id="' + options.sectionNavId + '"><ul></ul></div>');
            var nav = $(options.sectionNavSelector);

            nav.css('color', options.navigationColor);
            nav.addClass(options.navigationPosition);
        }

        $(options.sectionSelector).each(function(index) {
            var that = $(this);
            var slides = $(this).find(options.slideSelector);
            var numSlides = slides.length;

            //if no active section is defined, the 1st one will be the default one
            if (!index && $(options.activeSectionSelector).length === 0) {
                $(this).addClass(options.activeClass);
            }

            $(this).css('height', windowsHeight + 'px');

            if (options.paddingTop || options.paddingBottom) {
                $(this).css('padding', options.paddingTop + ' 0 ' + options.paddingBottom + ' 0');
            }

            if (typeof options.slidesColor[index] !== 'undefined') {
                $(this).css('background-color', options.slidesColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                $(this).attr('data-anchor', options.anchors[index]);
            }

            if (options.navigation) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[index];
                }
                var tooltip = options.navigationTooltips[index];
                if (typeof tooltip === 'undefined') {
                    tooltip = '';
                }

                nav.find('ul').append('<li data-tooltip="' + tooltip + '"><a href="#' + link + '"><span></span></a></li>');
            }

            // if there's any slide
            if (numSlides > 0) {
                var sliderWidth = numSlides * 100;
                var slideWidth = 100 / numSlides;

                slides.wrapAll('<div class="' + options.slidesContainerClass + '" />');
                slides.parent().wrap('<div class="' + options.slidesClass + '" />');

                $(this).find(options.slidesContainerSelector).css('width', sliderWidth + '%');
                $(this).find(options.slidesSelector).after('<div class="' + options.controlArrowClass + ' '+options.prevClass+'"></div><div class="' + options.controlArrowClass + ' '+options.nextClass+'"></div>');

                if (options.controlArrowColor != '#fff') {
                    $(this).find(options.controlArrowSelector + options.nextSelector).css('border-color', 'transparent transparent transparent ' + options.controlArrowColor);
                    $(this).find(options.controlArrowSelector + options.prevSelector).css('border-color', 'transparent ' + options.controlArrowColor + ' transparent transparent');
                }

                if (!options.loopHorizontal) {
                    $(this).find(options.controlArrowSelector + options.prevSelector).hide();
                }

                if (options.slidesNavigation) {
                    addSlidesNavigation($(this), numSlides);
                }

                slides.each(function(index) {
                    //if the slide won#t be an starting point, the default will be the first one
                    if (!index && that.find(options.activeSlideSelector).length == 0) {
                        $(this).addClass(options.activeClass);
                    }

					$(this).css('width', slideWidth + '%');

                    if (options.verticalCentered) {
                        addTableClass($(this));
                    }
                });
            } else {
                if (options.verticalCentered) {
                    addTableClass($(this));
                }
            }

        }).promise().done(function() {
                $.fn.fullpage.setAutoScrolling(options.autoScrolling);

                //the starting point is a slide?
                var activeSlide = $(options.activeSectionSelector).find(options.activeSlideSelector);
                if (activeSlide.length && ($(options.activeSectionSelector).index(options.sectionSelector) != 0 || ($(options.activeSectionSelector).index(options.sectionSelector) == 0 && activeSlide.index() != 0))) {
                    var prevScrollingSpeepd = options.scrollingSpeed;
                    $.fn.fullpage.setScrollingSpeed(0);
                    landscapeScroll($(options.activeSectionSelector).find(options.slidesSelector), activeSlide);
                    $.fn.fullpage.setScrollingSpeed(prevScrollingSpeepd);
                }

                //fixed elements need to be moved out of the plugin container due to problems with CSS3.
                if (options.fixedElements && options.css3) {
                    $(options.fixedElements).appendTo('body');
                }

                //vertical centered of the navigation + first bullet active
                if (options.navigation) {
                    nav.css('margin-top', '-' + (nav.height() / 2) + 'px');
                    nav.find('li').eq($(options.activeSectionSelector).index(options.sectionSelector)).find('a').addClass(options.activeClass);
                }

                //moving the menu outside the main container (avoid problems with fixed positions when using CSS3 tranforms)
                if (options.menu && options.css3) {
                    $(options.menu).appendTo('body');
                }

                if (options.scrollOverflow) {
                    //after DOM and images are loaded
                    $(window).on('load', function() {

                        $(options.sectionSelector).each(function() {
                            var slides = $(this).find(options.slideSelector);

                            if (slides.length) {
                                slides.each(function() {
                                    createSlimScrolling($(this));
                                });
                            } else {
                                createSlimScrolling($(this));
                            }

                        });
                        $.isFunction(options.afterRender) && options.afterRender.call(this);
                    });
                } else {
                    $.isFunction(options.afterRender) && options.afterRender.call(this);
                }

                //getting the anchor link in the URL and deleting the `#`
                var value = window.location.hash.replace('#', '').split('/');
                var destiny = value[0];

                if (destiny.length) {
                    var section = $('[data-anchor="' + destiny + '"]');

                    if (!options.animateAnchor && section.length) {
                        silentScroll(section.position().top);
                        $.isFunction(options.afterLoad) && options.afterLoad.call(this, destiny, (section.index(options.sectionSelector) + 1));

                        //updating the active class
                        section.addClass(options.activeClass).siblings().removeClass(options.activeClass);
                    }
                }

                $(window).on('load', function() {
                    scrollToAnchor();
                });

            });

        var scrollId;
        var isScrolling = false;

        //when scrolling...
        $(window).scroll(function(e) {

            if (!options.autoScrolling) {
                var currentScroll = $(window).scrollTop();

                var scrolledSections = $(options.sectionSelector).map(function() {
                    if ($(this).offset().top < (currentScroll + 100)) {
                        return $(this);
                    }
                });

                //geting the last one, the current one on the screen
                var currentSection = scrolledSections[scrolledSections.length - 1];

                //executing only once the first time we reach the section
                if (!currentSection.hasClass(options.activeClass)) {
                    var leavingSection = $(options.activeSectionSelector).index(options.sectionSelector) + 1;

                    isScrolling = true;

                    var yMovement = getYmovement(currentSection);

                    currentSection.addClass(options.activeClass).siblings().removeClass(options.activeClass);

                    var anchorLink = currentSection.data('anchor');
                    $.isFunction(options.onLeave) && options.onLeave.call(this, leavingSection, yMovement);

                    $.isFunction(options.afterLoad) && options.afterLoad.call(this, anchorLink, (currentSection.index(options.sectionSelector) + 1));

                    activateMenuElement(anchorLink);
                    activateNavDots(anchorLink, 0);

                    if (options.anchors.length && !isMoving) {
                        //needed to enter in hashChange event when using the menu with anchor links
                        lastScrolledDestiny = anchorLink;

                        location.hash = anchorLink;
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function() {
                        isScrolling = false;
                    }, 100);
                }

            }
        });

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

         * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
         * This way, the touchstart and the touch moves shows an small difference between them which is the
         * used one to determine the direction.
         */
        function touchMoveHandler(event) {
            var e = event.originalEvent;

            if (options.autoScrolling) {
                //preventing the easing on iOS devices
                event.preventDefault();
            }

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target)) {

                var touchMoved = false;
                var activeSection = $(options.activeSectionSelector);
                var scrollable;

                if (!isMoving && !slideMoving) { //if theres any #
                    var touchEvents = getEventsPage(e);
                    touchEndY = touchEvents['y'];
                    touchEndX = touchEvents['x'];

                    //if movement in the X axys is greater than in the Y and the currect section has slides...
                    if (activeSection.find(options.slidesSelector).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartX - touchEndX) > ($(window).width() / 100 * options.touchSensitivity)) {
                            if (touchStartX > touchEndX) {
                                $.fn.fullpage.moveSlideRight(); //next
                            } else {
                                $.fn.fullpage.moveSlideLeft(); //prev
                            }
                        }
                    }

                    //vertical scrolling (only when autoScrolling is enabled)
                    else if (options.autoScrolling) {

                        //if there are landscape slides, we check if the scrolling bar is in the current one or not
                        if (activeSection.find(options.slidesSelector).length) {
                            scrollable = activeSection.find(options.activeSlideSelector).find(options.scrollableSelector);
                        } else {
                            scrollable = activeSection.find(options.scrollableSelector);
                        }

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartY - touchEndY) > ($(window).height() / 100 * options.touchSensitivity)) {
                            if (touchStartY > touchEndY) {
                                if (scrollable.length > 0) {
                                    //is the scrollbar at the end of the scroll?
                                    if (isScrolled('bottom', scrollable)) {
                                        $.fn.fullpage.moveSectionDown();
                                    } else {
                                        return true;
                                    }
                                } else {
                                    // moved down
                                    $.fn.fullpage.moveSectionDown();
                                }
                            } else if (touchEndY > touchStartY) {

                                if (scrollable.length > 0) {
                                    //is the scrollbar at the start of the scroll?
                                    if (isScrolled('top', scrollable)) {
                                        $.fn.fullpage.moveSectionUp();
                                    }
                                    else {
                                        return true;
                                    }
                                } else {
                                    // moved up
                                    $.fn.fullpage.moveSectionUp();
                                }
                            }
                        }
                    }
                }
            }

        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement(el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold &&
                parent.is(options.normalScrollElements)) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }

        function touchStartHandler(event) {
            var e = event.originalEvent;
            var touchEvents = getEventsPage(e);
            touchStartY = touchEvents['y'];
            touchStartX = touchEvents['x'];
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        function MouseWheelHandler(e) {

            if (options.autoScrolling) {
                // cross-browser wheel delta
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1,
                    (e.wheelDelta || -e.deltaY || -e.detail)));
                var scrollable;
                var activeSection = $(options.activeSectionSelector);

                if (!isMoving) { //if theres any #

                    //if there are landscape slides, we check if the scrolling bar is in the current one or not
                    if (activeSection.find(options.slidesSelector).length) {
                        scrollable = activeSection.find(options.activeSlideSelector).find(options.scrollableSelector);
                    } else {
                        scrollable = activeSection.find(options.scrollableSelector);
                    }

                    //scrolling down?
                    if (delta < 0) {
                        if (scrollable.length > 0) {
                            //is the scrollbar at the end of the scroll?
                            if (isScrolled('bottom', scrollable)) {
                                $.fn.fullpage.moveSectionDown();
                            } else {
                                return true; //normal scroll
                            }
                        } else {
                            $.fn.fullpage.moveSectionDown();
                        }
                    }

                    //scrolling up?
                    else {
                        if (scrollable.length > 0) {
                            //is the scrollbar at the start of the scroll?
                            if (isScrolled('top', scrollable)) {
                                $.fn.fullpage.moveSectionUp();
                            } else {
                                return true; //normal scroll
                            }
                        } else {
                            $.fn.fullpage.moveSectionUp();
                        }
                    }
                }

                return false;
            }
        }

        $.fn.fullpage.moveSectionUp = function() {
            var prev = $(options.activeSectionSelector).prev(options.sectionSelector);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(options.sectionSelector).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        };

        $.fn.fullpage.moveSectionDown = function() {
            var next = $(options.activeSectionSelector).next(options.sectionSelector);

            //looping to the top if there's no more sections below
            if (!next.length &&
                (options.loopBottom || options.continuousVertical)) {
                next = $(options.sectionSelector).first();
            }

            if (next.length > 0 ||
                (!next.length &&
                    (options.loopBottom || options.continuousVertical))) {
                scrollPage(next, null, false);
            }
        };

        $.fn.fullpage.moveTo = function(section, slide) {
            var destiny = '';

            if (isNaN(section)) {
                destiny = $('[data-anchor="' + section + '"]');
            } else {
                destiny = $(options.sectionSelector).eq((section - 1));
            }

            if (typeof slide !== 'undefined') {
                scrollPageAndSlide(section, slide);
            } else if (destiny.length > 0) {
                scrollPage(destiny);
            }
        };

        $.fn.fullpage.moveSlideRight = function() {
            moveSlide('next');
        }

        $.fn.fullpage.moveSlideLeft = function() {
            moveSlide('prev');
        }

        function moveSlide(direction) {
            var activeSection = $(options.activeSectionSelector);
            var slides = activeSection.find(options.slidesSelector);

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving) {
                return;
            }

            var currentSlide = slides.find(options.activeSlideSelector);
            var destiny = null;

            if (direction === 'prev') {
                destiny = currentSlide.prev(options.slideSelector);
            } else {
                destiny = currentSlide.next(options.slideSelector);
            }

            //isn't there a next slide in the sequence?
            if (!destiny.length) {
                //respect loopHorizontal setting
                if (!options.loopHorizontal) return;

                if (direction === 'prev') {
                    destiny = currentSlide.siblings(':last');
                } else {
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny);
        }

        function scrollPage(element, callback, isMovementUp) {
            var scrollOptions = {}, scrolledElement;
            var dest = element.position();
            if (typeof dest === "undefined") {
                return;
            } //there's no element to scroll, leaving the function
            var dtop = dest.top;
            var yMovement = getYmovement(element);
            var anchorLink = element.data('anchor');
            var sectionIndex = element.index(options.sectionSelector);
            var activeSlide = element.find(options.activeSlideSelector);
            var activeSection = $(options.activeSectionSelector);
            var leavingSection = activeSection.index(options.sectionSelector) + 1;

            //caching the value of isResizing at the moment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            var localIsResizing = isResizing;

            if (activeSlide.length) {
                var slideAnchorLink = activeSlide.data('anchor');
                var slideIndex = activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (isMovementUp) !== "undefined" &&
                ((!isMovementUp && yMovement == 'up') || // Intending to scroll down but about to go up or
                    (isMovementUp && yMovement == 'down'))) { // intending to scroll up but about to go down

                // Scrolling down
                if (!isMovementUp) {
                    // Move all previous sections to after the active section
                    $(options.activeSectionSelector).after(activeSection.prevAll(options.sectionSelector).get().reverse());
                }
                else { // Scrolling up
                    // Move all next sections to before the active section
                    $(options.activeSectionSelector).before(activeSection.nextAll(options.sectionSelector));
                }

                // Maintain the displayed position (now that we changed the element order)
                silentScroll($(options.activeSectionSelector).position().top);

                // save for later the elements that still need to be reordered
                var wrapAroundElements = activeSection;

                // Recalculate animation variables
                dest = element.position();
                dtop = dest.top;
                yMovement = getYmovement(element);
            }

            element.addClass(options.activeClass).siblings().removeClass(options.activeClass);

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            isMoving = true;
			if(typeof anchorLink !== 'undefined'){
				setURLHash(slideIndex, slideAnchorLink, anchorLink);
			}
            if (options.autoScrolling) {
                scrollOptions['top'] = -dtop;
                scrolledElement = container.selector;
            } else {
                scrollOptions['scrollTop'] = dtop;
                scrolledElement = 'html, body';
            }

            // Fix section order after continuousVertical changes have been animated
            var continuousVerticalFixSectionOrder = function() {
                // If continuousVertical is in effect (and autoScrolling would also be in effect then),
                // finish moving the elements around so the direct navigation will function more simply
                if (!wrapAroundElements || !wrapAroundElements.length) {
                    return;
                }

                if (isMovementUp) {
                    $(options.sectionSelector + ':first').before(wrapAroundElements);
                }
                else {
                    $(options.sectionSelector + ':last').after(wrapAroundElements);
                }

                silentScroll($(options.activeSectionSelector).position().top);
            };

            // Use CSS3 translate functionality or...
			if (options.css3 && options.autoScrolling) {

                //callback (onLeave) if the site is not just resizing and readjusting the slides
                $.isFunction(options.onLeave) && !localIsResizing && options.onLeave.call(this, leavingSection, yMovement);

                var translate3d = 'translate3d(0px, -' + dtop + 'px, 0px)';
                transformContainer(translate3d, true);

                setTimeout(function() {
                    //fix section order from continuousVertical
                    continuousVerticalFixSectionOrder();


                    //callback (afterLoad)  if the site is not just resizing and readjusting the slides
                    $.isFunction(options.afterLoad) && !localIsResizing && options.afterLoad.call(this, anchorLink, (sectionIndex + 1));

                    setTimeout(function() {
                        isMoving = false;
                        $.isFunction(callback) && callback.call(this);
                    }, scrollDelay);
                }, options.scrollingSpeed);
            } else { // ... use jQuery animate

                //callback (onLeave) if the site is not just resizing and readjusting the slides
                $.isFunction(options.onLeave) && !localIsResizing && options.onLeave.call(this, leavingSection, yMovement);

                $(scrolledElement).animate(
                    scrollOptions
                    , options.scrollingSpeed, options.easing, function() {
                        //fix section order from continuousVertical
                        continuousVerticalFixSectionOrder();

                        //callback (afterLoad) if the site is not just resizing and readjusting the slides
                        $.isFunction(options.afterLoad) && !localIsResizing && options.afterLoad.call(this, anchorLink, (sectionIndex + 1));

                        setTimeout(function() {
                            isMoving = false;
                            $.isFunction(callback) && callback.call(this);
                        }, scrollDelay);
                    });
            }

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = anchorLink;

            //avoid firing it twice (as it does also on scroll)
			if(options.autoScrolling){
            activateMenuElement(anchorLink);
            activateNavDots(anchorLink, sectionIndex);
			}
        }

        function scrollToAnchor() {
            //getting the anchor link in the URL and deleting the `#`
            var value = window.location.hash.replace('#', '').split('/');
            var section = value[0];
            var slide = value[1];

            if (section) {  //if theres any #
                scrollPageAndSlide(section, slide);
            }
        }

        //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)
        $(window).on('hashchange', function() {
            if (!isScrolling) {
                var value = window.location.hash.replace('#', '').split('/');
                var section = value[0];
                var slide = value[1];

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove = (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined');

                /*in order to call scrollpage() only once for each destination at a time
                 It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                 event is fired on every scroll too.*/
                if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide )) {
                    scrollPageAndSlide(section, slide);
                }
            }

        });

        /**
         * Sliding with arrow keys, both, vertical and horizontal
         */
        $(document).keydown(function(e) {
            //Moving the main page with the keyboard arrows if keyboard scrolling is enabled
            if (options.keyboardScrolling && !isMoving) {
                switch (e.which) {
                    //up
                    case 38:
                    case 33:
                        $.fn.fullpage.moveSectionUp();
                        break;

                    //down
                    case 40:
                    case 34:
                        $.fn.fullpage.moveSectionDown();
                        break;

                    //left
                    case 37:
                        $.fn.fullpage.moveSlideLeft();
                        break;

                    //right
                    case 39:
                        $.fn.fullpage.moveSlideRight();
                        break;

                    default:
                        return; // exit this handler for other keys
                }
            }
        });

        //navigation action
        $(document).on('click', options.sectionNavSelector + ' a', function(e) {
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(options.sectionSelector).eq(index));
        });

        //navigation tooltips
        $(document).on({
            mouseenter: function() {
                var tooltip = $(this).data('tooltip');
                $('<div class="' + options.tooltipClass + ' ' + options.navigationPosition + '">' + tooltip + '</div>').hide().appendTo($(this)).fadeIn(200);
            },
            mouseleave: function() {
                $(this).find(options.tooltipSelector).fadeOut().remove();
            }
        }, options.sectionNavSelector + ' li');

        if (options.normalScrollElements) {
            $(document).on('mouseover', options.normalScrollElements, function() {
                $.fn.fullpage.setMouseWheelScrolling(false);
            });

            $(document).on('mouseout', options.normalScrollElements, function() {
                $.fn.fullpage.setMouseWheelScrolling(true);
            });
        }

        /**
         * Scrolling horizontally when clicking on the slider controls.
         */
        $(options.sectionSelector).on('click', options.controlArrowSelector, function() {
            if ($(this).hasClass(options.prevClass)) {
                $.fn.fullpage.moveSlideLeft();
            } else {
                $.fn.fullpage.moveSlideRight();
            }
        });

        /**
         * Scrolling horizontally when clicking on the slider controls.
         */
        $(options.sectionSelector).on('click', options.toSlideSelector, function(e) {
            e.preventDefault();

            var slides = $(this).closest(options.sectionSelector).find(options.slidesSelector);
            var currentSlide = slides.find(options.activeSlideSelector);
            var destiny = null;

            destiny = slides.find(options.slideSelector).eq(($(this).data('index') - 1));

            if (destiny.length > 0) {
                landscapeScroll(slides, destiny);
            }
        });

        /**
         * Scrolls horizontal sliders.
         */
        function landscapeScroll(slides, destiny) {
            var destinyPos = destiny.position();
            var slidesContainer = slides.find(options.slidesContainerSelector).parent();
            var slideIndex = destiny.index();
            var section = slides.closest(options.sectionSelector);
            var sectionIndex = section.index(options.sectionSelector);
            var anchorLink = section.data('anchor');
            var slidesNav = section.find(options.slidesNavSelector);
            var slideAnchor = destiny.data('anchor');

            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            var localIsResizing = isResizing;

            if (options.onSlideLeave) {
                var prevSlideIndex = section.find(options.activeSlideSelector).index();
                var xMovement = getXmovement(prevSlideIndex, slideIndex);

                //if the site is not just resizing and readjusting the slides
                if (!localIsResizing) {
                    $.isFunction(options.onSlideLeave) && options.onSlideLeave.call(this, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement);
                }
            }

            destiny.addClass(options.activeClass).siblings().removeClass(options.activeClass);

            if (typeof slideAnchor === 'undefined') {
                slideAnchor = slideIndex;
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if (section.hasClass(options.activeClass)) {

                if (!options.loopHorizontal) {
                    //hidding it for the fist slide, showing for the rest
                    section.find(options.controlArrowSelector+options.prevSelector).toggle(slideIndex != 0);

                    //hidding it for the last slide, showing for the rest
                    section.find(options.controlArrowSelector+options.nextSelector).toggle(!destiny.is(':last-child'));
                }

                setURLHash(slideIndex, slideAnchor, anchorLink);
            }

            if (options.css3) {
                var translate3d = 'translate3d(-' + destinyPos.left + 'px, 0px, 0px)';

                slides.find(options.slidesContainerSelector).toggleClass(options.easingClass, options.scrollingSpeed > 0).css(getTransforms(translate3d));

                setTimeout(function() {
                    //if the site is not just resizing and readjusting the slides
                    if (!localIsResizing) {
                        $.isFunction(options.afterSlideLoad) && options.afterSlideLoad.call(this, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
                    }

                    slideMoving = false;
                }, options.scrollingSpeed, options.easing);
            } else {
                slidesContainer.animate({
                    scrollLeft: destinyPos.left
                }, options.scrollingSpeed, options.easing, function() {

                    //if the site is not just resizing and readjusting the slides
                    if (!localIsResizing) {
                        $.isFunction(options.afterSlideLoad) && options.afterSlideLoad.call(this, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
                    }
                    //letting them slide again
                    slideMoving = false;
                });
            }

            slidesNav.find(options.activeSelector).removeClass(options.activeClass);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(options.activeClass);
        }

        if (!isTablet) {
            var resizeId;

            //when resizing the site, we adjust the heights of the sections
            $(window).resize(function() {
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);
                resizeId = setTimeout(doneResizing, 500);
            });

        }

        var supportsOrientationChange = "onorientationchange" in window,
            orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

        $(window).bind(orientationEvent, function() {
            if (isTablet) {
                doneResizing();
            }
        });

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function doneResizing() {
            isResizing = true;

            var windowsWidth = $(window).width();
            windowsHeight = $(window).height();

            //text and images resizing
            if (options.resize) {
                resizeMe(windowsHeight, windowsWidth);
            }

            $(options.sectionSelector).each(function() {
                var scrollHeight = windowsHeight - parseInt($(this).css('padding-bottom')) - parseInt($(this).css('padding-top'));

                //adjusting the height of the table-cell for IE and Firefox
                if (options.verticalCentered) {
                    $(this).find(options.tableCellSelector).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //resizing the scrolling divs
                if (options.scrollOverflow) {
                    var slides = $(this).find(options.slideSelector);

                    if (slides.length) {
                        slides.each(function() {
                            createSlimScrolling($(this));
                        });
                    } else {
                        createSlimScrolling($(this));
                    }

                }

                //adjusting the position fo the FULL WIDTH slides...
                var slides = $(this).find(options.slidesSelector);
                if (slides.length) {
                    landscapeScroll(slides, slides.find(options.activeSlideSelector));
                }
            });

            //adjusting the position for the current section
            var destinyPos = $(options.activeSectionSelector).position();

            var activeSection = $(options.activeSectionSelector);

            //isn't it the first section?
            if (activeSection.index(options.sectionSelector)) {
                scrollPage(activeSection);
            }

            isResizing = false;
			$.isFunction(options.afterResize) && options.afterResize.call(this);
        }

        /**
         * Resizing of the font size depending on the window size as well as some of the images on the site.
         */
        function resizeMe(displayHeight, displayWidth) {
            //Standard height, for which the body font size is correct
            var preferredHeight = 825;
            var windowSize = displayHeight;

            /* Problem to be solved

             if (displayHeight < 825) {
             var percentage = (windowSize * 100) / preferredHeight;
             var newFontSize = percentage.toFixed(2);

             $("img").each(function() {
             var newWidth = ((80 * percentage) / 100).toFixed(2);
             $(this).css("width", newWidth + '%');
             });
             } else {
             $("img").each(function() {
             $(this).css("width", '');
             });
             }*/

            if (displayHeight < 825 || displayWidth < 900) {
                if (displayWidth < 900) {
                    windowSize = displayWidth;
                    preferredHeight = 900;
                }
                var percentage = (windowSize * 100) / preferredHeight;
                var newFontSize = percentage.toFixed(2);

                $("body").css("font-size", newFontSize + '%');
            } else {
                $("body").css("font-size", '100%');
            }
        }

        /**
         * Activating the website navigation dots according to the given slide name.
         */
        function activateNavDots(name, sectionIndex) {
            if (options.navigation) {
                $(options.sectionNavSelector).find(options.activeSelector).removeClass(options.activeClass);
                if (name) {
                    $(options.sectionNavSelector).find('a[href="#' + name + '"]').addClass(options.activeClass);
                } else {
                    $(options.sectionNavSelector).find('li').eq(sectionIndex).find('a').addClass(options.activeClass);
                }
            }
        }

        /**
         * Activating the website main menu elements according to the given slide name.
         */
        function activateMenuElement(name) {
            if (options.menu) {
                $(options.menu).find(options.activeSelector).removeClass(options.activeClass);
                $(options.menu).find('[data-menuanchor="' + name + '"]').addClass(options.activeClass);
            }
        }

        /**
         * Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
         * depending on the given type.
         */
        function isScrolled(type, scrollable) {
            if (type === 'top') {
                return !scrollable.scrollTop();
            } else if (type === 'bottom') {
                return scrollable.scrollTop() + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        }

        /**
         * Retuns `up` or `down` depending on the scrolling movement to reach its destination
         * from the current section.
         */
        function getYmovement(destiny) {
            var fromIndex = $(options.activeSectionSelector).index(options.sectionSelector);
            var toIndex = destiny.index(options.sectionSelector);

            if (fromIndex > toIndex) {
                return 'up';
            }
            return 'down';
        }

        /**
         * Retuns `right` or `left` depending on the scrolling movement to reach its destination
         * from the current slide.
         */
        function getXmovement(fromIndex, toIndex) {
            if (fromIndex == toIndex) {
                return 'none'
            }
            if (fromIndex > toIndex) {
                return 'left';
            }
            return 'right';
        }

        function createSlimScrolling(element) {
            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            //in case element is a slide
            var section = element.closest(options.sectionSelector);
            var scrollable = element.find(options.scrollableSelector);

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if (scrollable.length) {
                var contentHeight = element.find(options.scrollableSelector).get(0).scrollHeight;
            } else {
                var contentHeight = element.get(0).scrollHeight;
                if (options.verticalCentered) {
                    contentHeight = element.find(options.tableCellSelector).get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if (contentHeight > scrollHeight) {
                //was there already an scroll ? Updating it
                if (scrollable.length) {
                    scrollable.css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
                }
                //creating the scrolling
                else {
                    if (options.verticalCentered) {
                        element.find(options.tableCellSelector).wrapInner('<div class="' + options.scrollableClass + '" />');
                    } else {
                        element.wrapInner('<div class="' + options.scrollableClass + '" />');
                    }

                    element.find(options.scrollableSelector).slimScroll({
                        height: scrollHeight + 'px',
                        size: '10px',
                        alwaysVisible: true
                    });
                }
            }

            //removing the scrolling when it is not necessary anymore
            else {
                element.find(options.scrollableSelector).children().first().unwrap().unwrap();
                element.find(options.slimScrollBarSelector).remove();
                element.find(options.slimScrollRailSelector).remove();
            }

            //undo
            element.css('overflow', '');
        }

        function addTableClass(element) {
            element.addClass(options.tableClass).wrapInner('<div class="'+options.tableCellClass+'" style="height:' + getTableHeight(element) + 'px;" />');
        }

        function getTableHeight(element) {
            var sectionHeight = windowsHeight;

            if (options.paddingTop || options.paddingBottom) {
                var section = element;
                if (!section.hasClass(options.sectionClass)) {
                    section = element.closest(options.sectionSelector);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
         * Adds a css3 transform property to the container class with or without animation depending on the animated param.
         */
        function transformContainer(translate3d, animated) {
            container.toggleClass(options.easingClass, animated);

            container.css(getTransforms(translate3d));
        }

        /**
         * Scrolls to the given section and slide
         */
        function scrollPageAndSlide(destiny, slide) {
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            if (isNaN(destiny)) {
                var section = $('[data-anchor="' + destiny + '"]');
            } else {
                var section = $(options.sectionSelector).eq((destiny - 1));
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(options.activeClass)) {
                scrollPage(section, function() {
                    scrollSlider(section, slide)
                });
            }
            //if we were already in the section
            else {
                scrollSlider(section, slide);
            }

        }

        /**
         * Scrolls the slider to the given slide destination for the given section
         */
        function scrollSlider(section, slide) {
            if (typeof slide != 'undefined') {
                var slides = section.find(options.slidesSelector);
                var destiny = slides.find('[data-anchor="' + slide + '"]');

                if (!destiny.length) {
                    destiny = slides.find(options.slideSelector).eq(slide);
                }

                if (destiny.length) {
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
         * Creates a landscape navigation bar with dots for horizontal sliders.
         */
        function addSlidesNavigation(section, numSlides) {
            section.append('<div class="' + options.slidesNavClass + '"><ul></ul></div>');
            var nav = section.find(options.slidesNavSelector);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for (var i = 0; i < numSlides; i++) {
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width() / 2) + 'px');

            nav.find('li').first().find('a').addClass(options.activeClass);
        }

        /**
         * Sets the URL hash for a section with slides
         */
        function setURLHash(slideIndex, slideAnchor, anchorLink) {
            var sectionHash = '';

            if (options.anchors.length) {

                //isn't it the first slide?
                if (slideIndex) {
                    if (typeof anchorLink !== 'undefined') {
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if (typeof slideAnchor === 'undefined') {
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    location.hash = sectionHash + '/' + slideAnchor;

                    //first slide won't have slide anchor, just the section one
                } else if (typeof slideIndex !== 'undefined') {
                    lastScrolledSlide = slideAnchor;
                    location.hash = anchorLink;
                }

                //section without slides
                else {
                    location.hash = anchorLink;
                }
            }
        }

        /**
         * Scrolls the slider to the given slide destination for the given section
         */
        $(document).on('click', options.slidesNavSelector + ' a', function(e) {
            e.preventDefault();
            var slides = $(this).closest(options.sectionSelector).find(options.slidesSelector);
            var destiny = slides.find(options.slideSelector).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        });

        /**
         * Checks for translate3d support
         * @return boolean
         * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
         */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform': '-webkit-transform',
                    'OTransform': '-o-transform',
                    'msTransform': '-ms-transform',
                    'MozTransform': '-moz-transform',
                    'transform': 'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = "translate3d(1px,1px,1px)";
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
        }

        /**
         * Removes the auto scrolling action fired by the mouse wheel and tackpad.
         * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
         */
        function removeMouseWheelHandler() {
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                document.detachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
         * Adds the auto scrolling action for the mouse wheel and tackpad.
         * After this function is called, the mousewheel and trackpad movements will scroll through sections
         */
        function addMouseWheelHandler() {
            if (document.addEventListener) {
                document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.addEventListener("wheel", MouseWheelHandler, false); //Firefox
            } else {
                document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
         * Adds the possibility to auto scroll through sections on touch devices.
         */
        function addTouchHandler() {
            if (isTablet) {
                $(document).off('touchstart MSPointerDown').on('touchstart MSPointerDown', touchStartHandler);
                $(document).off('touchmove MSPointerMove').on('touchmove MSPointerMove', touchMoveHandler);
            }
        }

        /**
         * Removes the auto scrolling for touch devices.
         */
        function removeTouchHandler() {
            if (isTablet) {
                $(document).off('touchstart MSPointerDown');
                $(document).off('touchmove MSPointerMove');
            }
        }

        /**
         * Gets the pageX and pageY properties depending on the browser.
         * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
         */
        function getEventsPage(e) {
            var events = new Array();
            if (window.navigator.msPointerEnabled) {
                events['y'] = e.pageY;
                events['x'] = e.pageX;
            } else {
                events['y'] = e.touches[0].pageY;
                events['x'] = e.touches[0].pageX;
            }

            return events;
        }

        function silentScroll(top) {
            if (options.css3) {
                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else {
                container.css("top", -top);
            }
        }

        function getTransforms(translate3d) {
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform': translate3d,
                'transform': translate3d
            };
        }

    };
})(jQuery);
