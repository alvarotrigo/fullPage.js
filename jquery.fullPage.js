/**
 * fullPage 1.6.8
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */

(function($) {
	$.fn.fullpage = function(options) {
		// Create some defaults, extending them with any options that were provided
		options = $.extend({
			"verticalCentered" : true,
			'resize' : true,
			'slidesColor' : [],
			'anchors':[],
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
			'sectionClass' : 'section',
			'slideClass' : 'slide',
			'activeClass' : 'active',


			//events
			'afterLoad': null,
			'onLeave': null,
			'afterRender': null,
			'afterSlideLoad': null,
			'onSlideLeave': null
		}, options);		
		
		
		
		//Defines the delay to take place before being able to scroll to the next section
		//BE CAREFUL! Not recommened to change it under 400 for a good behavior in laptops and 
		//Apple devices (laptops, mouses...)
		var scrollDelay = 600;
		
		$.fn.fullpage.setAutoScrolling = function(value){
			options.autoScrolling = value;
			
			var element = $('.' + options.sectionClass + '.' + options.activeClass);
				
			if(options.autoScrolling){
				$('html, body').css({
					'overflow' : 'hidden',
					'height' : '100%'
				});
				
				if(element.length){
					//moving the container up
					if(options.css3){
						var translate3d = 'translate3d(0px, -' + element.position().top + 'px, 0px)';
						transformContainer(translate3d, false);
					}else{
						//deleting the possible negative top
						$('#superContainer').css('top', '-'  + element.position().top + 'px');
					}
				}
					
			}else{
				$('html, body').css({
					'overflow' : 'auto',
					'height' : 'auto'
				});
				
				if(options.css3){
					//moving the container up
					var translate3d = 'translate3d(0px, 0px, 0px)';
					transformContainer(translate3d, false);
				}else{
					//deleting the possible negative top
					$('#superContainer').css('top', '0px');
				}
				
				//scrolling the page to the section with no animation
				$('html, body').scrollTop(element.position().top);
			}
			
		};

		/**
		* Defines the scrolling speed 
		*/
		$.fn.fullpage.setScrollingSpeed = function(value){
		   options.scrollingSpeed = value;
		};
		
		/**
		* Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad. 
		*/
		$.fn.fullpage.setMouseWheelScrolling = function (value){
			if(value){
				addMouseWheelHandler();
			}else{
				removeMouseWheelHandler();
			}
		};
		
		/**
		* Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures. 
		*/
		$.fn.fullpage.setAllowScrolling = function (value){
			if(value){
				$.fn.fullpage.setMouseWheelScrolling(true);
				addTouchHandler();
			}else{
				$.fn.fullpage.setMouseWheelScrolling(false);
				removeTouchHandler();
			}
		};
		
		/**
		* Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
		*/
		$.fn.fullpage.setKeyboardScrolling = function (value){
			options.keyboardScrolling = value;
		};
			
		//flag to avoid very fast sliding for landscape sliders
		var slideMoving = false;

		var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

		var windowsHeight = $(window).height();
		var isMoving = false;
		var isResizing = false;
		var lastScrolledDestiny;
		var lastScrolledSlide;


		$.fn.fullpage.setAllowScrolling(true);
		
		//if css3 is not supported, it will use jQuery animations
		if(options.css3){
			options.css3 = support3d();
		}

		$('body').wrapInner('<div id="superContainer" />');

		//creating the navigation dots 
		if (options.navigation) {
			$('body').append('<div id="fullPage-nav"><ul></ul></div>');
			var nav = $('#fullPage-nav');

			nav.css('color', options.navigationColor);
			nav.addClass(options.navigationPosition);
		}
		
		$('.' + options.sectionClass).each(function(index){
			var slides = $(this).find('.' + options.slideClass);
			var numSlides = slides.length;
			
			if(!index){
				$(this).addClass('active');
			}

			$(this).css('height', windowsHeight + 'px');
			
			if(options.paddingTop || options.paddingBottom){
				$(this).css('padding', options.paddingTop  + ' 0 ' + options.paddingBottom + ' 0');
			}
			
			if (typeof options.slidesColor[index] !==  'undefined') {
				$(this).css('background-color', options.slidesColor[index]);
			}

			if (typeof options.anchors[index] !== 'undefined') {
				$(this).attr('data-anchor', options.anchors[index]);
			}
			

			if (options.navigation) {
				var link = '';
				if(options.anchors.length){
					link = options.anchors[index];
				}
				var tooltip = options.navigationTooltips[index];
				if(typeof tooltip === 'undefined'){
					tooltip = '';
				}
				
				nav.find('ul').append('<li data-tooltip="' + tooltip + '"><a href="#' + link + '"><span></span></a></li>');
			}
			
			// if there's any slide
			if (numSlides > 0) {
				var sliderWidth = numSlides * 100;
				var slideWidth = 100 / numSlides;
				
				slides.wrapAll('<div class="slidesContainer" />');
				slides.parent().wrap('<div class="slides" />');

				$(this).find('.slidesContainer').css('width', sliderWidth + '%');
				$(this).find('.slides').after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');
				
				if(options.controlArrowColor!='#fff'){
					$(this).find('.controlArrow.next').css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
					$(this).find('.controlArrow.prev').css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
				}
				
				if(!options.loopHorizontal){
					$(this).find('.controlArrow.prev').hide();
				}

				
				if(options.slidesNavigation){
					addSlidesNavigation($(this), numSlides);
				}
				
				slides.each(function(index) {
					if(!index){
						$(this).addClass('active');
					}
					
					$(this).css('width', slideWidth + '%');
					
					if(options.verticalCentered){
						addTableClass($(this));
					}
				});
			}else{
				if(options.verticalCentered){
					addTableClass($(this));
				}
			}
			
		

			
		}).promise().done(function(){			
			$.fn.fullpage.setAutoScrolling(options.autoScrolling);

			$.isFunction( options.afterRender ) && options.afterRender.call( this);
			
			//fixed elements need to be moved out of the plugin container due to problems with CSS3.
			if(options.fixedElements && options.css3){
				$(options.fixedElements).appendTo('body');
			}
			
			//vertical centered of the navigation + first bullet active
			if(options.navigation){
				nav.css('margin-top', '-' + (nav.height()/2) + 'px');
				nav.find('li').first().find('a').addClass('active');
			}
			
			//moving the menu outside the main container (avoid problems with fixed positions when using CSS3 tranforms)
			if(options.menu && options.css3){
				$(options.menu).appendTo('body');
			}

			if(options.scrollOverflow){
				//after DOM and images are loaded 
				$(window).on('load', function() {
					
					$('.' + options.sectionClass).each(function(){
						var slides = $(this).find('.' + options.slideClass);
						
						if(slides.length){
							slides.each(function(){
								createSlimScrolling($(this));
							});
						}else{
							createSlimScrolling($(this));
						}
						
					});
				});
			}
	
			$(window).on('load', function() {
				scrollToAnchor();	
			});
			
		});
	
		var scrollId;
		var isScrolling = false;
		
		//when scrolling...
		$(window).scroll(function(e){

			if(!options.autoScrolling){					
				var currentScroll = $(window).scrollTop();
				
				var scrolledSections = $('.' + options.sectionClass).map(function(){
					if ($(this).offset().top < (currentScroll + 100)){
						return $(this);
					}
				});
				
				//geting the last one, the current one on the screen
				var currentSection = scrolledSections[scrolledSections.length-1];
				
				//executing only once the first time we reach the section
				if(!currentSection.hasClass('active')){
					isScrolling = true;	
					
					var yMovement = getYmovement(currentSection);
					
					$('.' + options.sectionClass + '.' + options.activeClass).removeClass('active');
					currentSection.addClass('active');
				
					var anchorLink  = currentSection.data('anchor');
					$.isFunction( options.onLeave ) && options.onLeave.call( this, currentSection.index('.' + options.sectionClass), yMovement);

					$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (currentSection.index('.' + options.sectionClass) + 1));
					
					activateMenuElement(anchorLink);	
					activateNavDots(anchorLink, 0);
					
				
					if(options.anchors.length && !isMoving){
						//needed to enter in hashChange event when using the menu with anchor links
						lastScrolledDestiny = anchorLink;
			
						location.hash = anchorLink;
					}
					
					//small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
					clearTimeout(scrollId);
					scrollId = setTimeout(function(){					
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
		function touchMoveHandler(event){
		
			if(options.autoScrolling){
				//preventing the easing on iOS devices
				event.preventDefault();
				
				var e = event.originalEvent;
		
				var touchMoved = false;
				var activeSection = $('.' + options.sectionClass + '.' + options.activeClass);
				var scrollable;

				if (!isMoving && !slideMoving) { //if theres any #
					var touchEvents = getEventsPage(e);
					touchEndY = touchEvents['y'];
					touchEndX = touchEvents['x'];
										
					//if movement in the X axys is greater than in the Y and the currect section has slides...
					if (activeSection.find('.slides').length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {
					    
					    //is the movement greater than the minimum resistance to scroll?
					    if (Math.abs(touchStartX - touchEndX) > ($(window).width() / 100 * options.touchSensitivity)) {
					        if (touchStartX > touchEndX) {
					             activeSection.find('.controlArrow.next:visible').trigger('click');
					           
					        } else {
					            activeSection.find('.controlArrow.prev:visible').trigger('click');
					        }
					    }
					}

					//vertical scrolling
					else{
						//if there are landscape slides, we check if the scrolling bar is in the current one or not
						if(activeSection.find('.slides').length){
							scrollable= activeSection.find('.' + options.slideClass + '.' + options.activeClass).find('.scrollable');
						}else{
							scrollable = activeSection.find('.scrollable');
						}
						
						//is the movement greater than the minimum resistance to scroll?
						if (Math.abs(touchStartY - touchEndY) > ($(window).height() / 100 * options.touchSensitivity)) {
							if (touchStartY > touchEndY) {
								if(scrollable.length > 0 ){
									//is the scrollbar at the end of the scroll?
									if(isScrolled('bottom', scrollable)){
										$.fn.fullpage.moveSectionDown();
									}else{
										return true;
									}
								}else{
									// moved down
									$.fn.fullpage.moveSectionDown();
								}
							} else if (touchEndY > touchStartY) {
								
								if(scrollable.length > 0){
									//is the scrollbar at the start of the scroll?
									if(isScrolled('top', scrollable)){
										$.fn.fullpage.moveSectionUp();
									}
									else{
										return true;
									}
								}else{
									// moved up
									$.fn.fullpage.moveSectionUp();
								}
							}
						}
					}					
				}
			}
		}
		
		function touchStartHandler(event){
		
			if(options.autoScrolling){
				var e = event.originalEvent;
				var touchEvents = getEventsPage(e);
				touchStartY = touchEvents['y'];
				touchStartX = touchEvents['x'];
			}
		}
		


		/**
		 * Detecting mousewheel scrolling
		 * 
		 * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
		 * http://www.sitepoint.com/html5-javascript-mouse-wheel/
		 */
		function MouseWheelHandler(e) {
			if(options.autoScrolling){
				// cross-browser wheel delta
				e = window.event || e;
				var delta = Math.max(-1, Math.min(1,
						(e.wheelDelta || -e.detail)));
				var scrollable;
				var activeSection = $('.' + options.sectionClass + '.' + options.activeClass);
				
				if (!isMoving) { //if theres any #
				
					//if there are landscape slides, we check if the scrolling bar is in the current one or not
					if(activeSection.find('.slides').length){
						scrollable= activeSection.find('.' + options.slideClass + '.' + options.activeClass).find('.scrollable');
					}else{
						scrollable = activeSection.find('.scrollable');
					}
				
					//scrolling down?
					if (delta < 0) {
						if(scrollable.length > 0 ){
							//is the scrollbar at the end of the scroll?
							if(isScrolled('bottom', scrollable)){
								$.fn.fullpage.moveSectionDown();
							}else{
								return true; //normal scroll
							}
						}else{
							$.fn.fullpage.moveSectionDown();
						}
					}

					//scrolling up?
					else {
						if(scrollable.length > 0){
							//is the scrollbar at the start of the scroll?
							if(isScrolled('top', scrollable)){
								$.fn.fullpage.moveSectionUp();
							}else{
								return true; //normal scroll
							}
						}else{
							$.fn.fullpage.moveSectionUp();
						}
					}
				}

				return false;
			}
		}

		
		$.fn.fullpage.moveSectionUp = function(){
			var prev = $('.' + options.sectionClass + '.' + options.activeClass).prev('.' + options.sectionClass);
			
			//looping to the bottom if there's no more sections above
			if(options.loopTop && !prev.length){
				prev = $('.' + options.sectionClass).last();
			}

			if (prev.length > 0 || (!prev.length && options.loopTop)){
				scrollPage(prev);
			}
		};

		$.fn.fullpage.moveSectionDown = function (){
			var next = $('.' + options.sectionClass + '.' + options.activeClass).next('.' + options.sectionClass);
			
			//looping to the top if there's no more sections below
			if(options.loopBottom && !next.length){
				next = $('.' + options.sectionClass).first();
			}

			if (next.length > 0 || (!next.length && options.loopBottom)){
				scrollPage(next);
			}
		};
		
		$.fn.fullpage.moveTo = function (section, slide){
			var destiny = '';
			
			if(isNaN(section)){
				destiny = $('[data-anchor="'+section+'"]');
			}else{
				destiny = $('.' + options.sectionClass).eq( (section -1) );
			}
			
			if (slide !== 'undefined'){
				scrollPageAndSlide(section, slide);
			}else if(destiny.length > 0){
				scrollPage(destiny);
			}
		};

		function scrollPage(element, callback) {
			var scrollOptions = {}, scrolledElement;
			var dest = element.position();
			var dtop = dest !== null ? dest.top : null;
			var yMovement = getYmovement(element);
			var anchorLink  = element.data('anchor');
			var sectionIndex = element.index('.' + options.sectionClass);
			var activeSlide = element.find('.' + options.slideClass + '.' + options.activeClass);

			if(activeSlide.length){
				var slideAnchorLink = activeSlide.data('anchor');
				var slideIndex = activeSlide.index();
			}

			var leavingSection = $('.' + options.sectionClass + '.' + options.activeClass).index('.' + options.sectionClass) + 1;
			
			element.addClass('active').siblings().removeClass('active');
			
			//preventing from activating the MouseWheelHandler event
			//more than once if the page is scrolling
			isMoving = true;
			
			if(typeof anchorLink !== 'undefined'){
				setURLHash(slideIndex, slideAnchorLink, anchorLink);
			}
			
			if(options.autoScrolling){
				scrollOptions['top'] = -dtop;
				scrolledElement = '#superContainer';
			}else{
				scrollOptions['scrollTop'] = dtop;
				scrolledElement = 'html, body';
			}		
						
			if(options.css3 && options.autoScrolling){

				
				$.isFunction( options.onLeave ) && options.onLeave.call( this, leavingSection, yMovement);

				var translate3d = 'translate3d(0px, -' + dtop + 'px, 0px)';
				transformContainer(translate3d, true);
				
				setTimeout(function(){
					$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (sectionIndex + 1));

						setTimeout(function(){
							isMoving = false;
							$.isFunction( callback ) && callback.call( this);
						}, scrollDelay);
				}, options.scrollingSpeed);
			}else{
				$.isFunction( options.onLeave ) && options.onLeave.call( this, leavingSection, yMovement);
				
				$(scrolledElement).animate(
					scrollOptions 
				, options.scrollingSpeed, options.easing, function() {
					//callback
					$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (sectionIndex + 1));
					
					setTimeout(function(){
						isMoving = false;
						$.isFunction( callback ) && callback.call( this);
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
		$(window).on('hashchange',function(){
			if(!isScrolling){
				var value =  window.location.hash.replace('#', '').split('/');
				var section = value[0];
				var slide = value[1];

				//when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
				var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
				var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined');

				/*in order to call scrollpage() only once for each destination at a time
				It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange` 
				event is fired on every scroll too.*/
				if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (typeof slide !== 'undefined' && !slideMoving && lastScrolledSlide != slide ))  {
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
					$('.' + options.sectionClass + '.' + options.activeClass).find('.controlArrow.prev:visible').trigger('click');
					break;

				//right
				case 39:
					$('.' + options.sectionClass + '.' + options.activeClass).find('.controlArrow.next:visible').trigger('click');
					break;

				default:
					return; // exit this handler for other keys
				}
			}
		});
		
		//navigation action 
		$(document).on('click', '#fullPage-nav a', function(e){
			e.preventDefault();
			var index = $(this).parent().index();
			scrollPage($('.' + options.sectionClass).eq(index));
		});
		
		//navigation tooltips 
		$(document).on({
			mouseenter: function(){
				var tooltip = $(this).data('tooltip');
				$('<div class="fullPage-tooltip ' + options.navigationPosition +'">' + tooltip + '</div>').hide().appendTo($(this)).fadeIn(200);
			},
			mouseleave: function(){
				$(this).find('.fullPage-tooltip').fadeOut().remove();
			}
		}, '#fullPage-nav li');


		if(options.normalScrollElements){
			$(document).on('mouseover', options.normalScrollElements, function () {
				$.fn.fullpage.setMouseWheelScrolling(false);
			});
			
			$(document).on('mouseout', options.normalScrollElements, function(){
				$.fn.fullpage.setMouseWheelScrolling(true);
			});
		}
		
		/**
		 * Scrolling horizontally when clicking on the slider controls.
		 */
		$('.' + options.sectionClass).on('click', '.controlArrow', function() {
			//not that fast my friend! :)
			if (slideMoving) {
				return;
			}
			slideMoving = true;

			var slides = $(this).closest('.' + options.sectionClass).find('.slides');
			var currentSlide = slides.find('.' + options.slideClass + '.' + options.activeClass);
			var destiny = null;

			if ($(this).hasClass('prev')) {
				destiny = currentSlide.prev('.' + options.slideClass);
			} else {
				destiny = currentSlide.next('.' + options.slideClass);
			}

			//is there isn't a next slide in the secuence?
			if(!destiny.length) {
				//to the last
				if ($(this).hasClass('prev')) {
					destiny = currentSlide.siblings(':last');
				} else {
					destiny = currentSlide.siblings(':first');
				}	
			}

			landscapeScroll(slides, destiny);
		});

		
		/**
		 * Scrolling horizontally when clicking on the slider controls.
		 */
		$('.' + options.sectionClass).on('click', '.toSlide', function(e) {
			e.preventDefault();
			
			var slides = $(this).closest('.' + options.sectionClass).find('.slides');
			var currentSlide = slides.find('.' + options.slideClass + '.' + options.activeClass);
			var destiny = null;
			
			destiny = slides.find('.' + options.slideClass).eq( ($(this).data('index') -1) );

			if(destiny.length > 0){
				landscapeScroll(slides, destiny);
			}
		});
		
		/**
		* Scrolls horizontal sliders.
		*/
		function landscapeScroll(slides, destiny){
			var destinyPos = destiny.position();
			var slidesContainer = slides.find('.slidesContainer').parent();
			var slideIndex = destiny.index();
			var section = slides.closest('.' + options.sectionClass);
			var sectionIndex = section.index('.' + options.sectionClass);
			var anchorLink = section.data('anchor');
			var slidesNav = section.find('.fullPage-slidesNav');
			var slideAnchor = destiny.data('anchor');
	
			//caching the value of isResizing at the momment the function is called 
			//because it will be checked later inside a setTimeout and the value might change
			var localIsResizing = isResizing; 

			if(options.onSlideLeave){
				var prevSlideIndex = section.find('.' + options.slideClass + '.' + options.activeClass).index();
				var xMovement = getXmovement(prevSlideIndex, slideIndex);

				//if the site is not just resizing and readjusting the slides
				if(!localIsResizing){
					$.isFunction( options.onSlideLeave ) && options.onSlideLeave.call( this, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement);
				}
			}
	
			destiny.addClass('active').siblings().removeClass('active');

			
			if(typeof slideAnchor === 'undefined'){
				slideAnchor = slideIndex;
			}
			
			//only changing the URL if the slides are in the current section (not for resize re-adjusting)
			if(section.hasClass('active')){
			
				if(!options.loopHorizontal){
					//hidding it for the fist slide, showing for the rest
					section.find('.controlArrow.prev').toggle(slideIndex!=0);

					//hidding it for the last slide, showing for the rest
					section.find('.controlArrow.next').toggle(!destiny.is(':last-child'));
				}

				setURLHash(slideIndex, slideAnchor, anchorLink);				
			}			

			if(options.css3){
				var translate3d = 'translate3d(-' + destinyPos.left + 'px, 0px, 0px)';
				
				slides.find('.slidesContainer').addClass('easing').css({
					'-webkit-transform': translate3d,
					'-moz-transform': translate3d,
					'-ms-transform':translate3d,
					'transform': translate3d
				});
				setTimeout(function(){
					//if the site is not just resizing and readjusting the slides
					if(!localIsResizing){
						$.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( this, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex );
					}

					slideMoving = false;
				}, options.scrollingSpeed, options.easing);
			}else{
				slidesContainer.animate({
					scrollLeft : destinyPos.left
				}, options.scrollingSpeed, options.easing, function() {

					//if the site is not just resizing and readjusting the slides
					if(!localIsResizing){
						$.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( this, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
					}	
					//letting them slide again
					slideMoving = false; 
				});
			}
			
			slidesNav.find('.' + options.activeClass).removeClass('active');
			slidesNav.find('li').eq(slideIndex).find('a').addClass('active');
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
		$(window).bind('orientationchange', function() {
			doneResizing();
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

			$('.' + options.sectionClass).each(function(){
				var scrollHeight = windowsHeight - parseInt($(this).css('padding-bottom')) - parseInt($(this).css('padding-top'));
			
				//resizing the scrolling divs
				if(options.scrollOverflow){
					var slides = $(this).find('.' + options.slideClass);
					
					if(slides.length){
						slides.each(function(){
							createSlimScrolling($(this));
						});
					}else{
						createSlimScrolling($(this));
					}
					
				}
				
				//adjusting the height of the table-cell for IE and Firefox
				if(options.verticalCentered){
					$(this).find('.tableCell').css('height', getTableHeight($(this)) + 'px');
				}
				
				$(this).css('height', windowsHeight + 'px');

				//adjusting the position fo the FULL WIDTH slides...
				var slides = $(this).find('.slides');
				if (slides.length) {
					landscapeScroll(slides, slides.find('.' + options.slideClass + '.' + options.activeClass));
				}
			});

			//adjusting the position for the current section
			var destinyPos = $('.' + options.sectionClass + '.' + options.activeClass).position();

			var activeSection = $('.' + options.sectionClass + '.' + options.activeClass);
			
			//isn't it the first section?
			if(activeSection.index('.' + options.sectionClass)){
				scrollPage(activeSection);
			}

			isResizing = false;
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
		function activateNavDots(name, sectionIndex){
			if(options.navigation){
				$('#fullPage-nav').find('.' + options.activeClass).removeClass('active');
				if(name){ 
					$('#fullPage-nav').find('a[href="#' + name + '"]').addClass('active');
				}else{
					$('#fullPage-nav').find('li').eq(sectionIndex).find('a').addClass('active');
				}
			}
		}
				
		/**
		 * Activating the website main menu elements according to the given slide name.
		 */
		function activateMenuElement(name){
			if(options.menu){
				$(options.menu).find('.' + options.activeClass).removeClass('active');
				$(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');
			}
		}
		
		/**
		* Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
		* depending on the given type.
		*/
		function isScrolled(type, scrollable){
			if(type === 'top'){
				return !scrollable.scrollTop();
			}else if(type === 'bottom'){
				return scrollable.scrollTop() + scrollable.innerHeight() >= scrollable[0].scrollHeight;
			}
		}
		
		/**
		* Retuns `up` or `down` depending on the scrolling movement to reach its destination
		* from the current section.
		*/
		function getYmovement(destiny){
			var fromIndex = $('.' + options.sectionClass + '.' + options.activeClass).index('.' + options.sectionClass);
			var toIndex = destiny.index('.' + options.sectionClass);
			
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
			if(fromIndex > toIndex){
				return 'left';
			}
			return 'right';
		}		
		
		
		function createSlimScrolling(element){
			//needed to make `scrollHeight` work under Opera 12
			element.css('overflow', 'hidden');
			
			//in case element is a slide
			var section = element.closest('.' + options.sectionClass);
			var scrollable = element.find('.scrollable');

			//if there was scroll, the contentHeight will be the one in the scrollable section
			if(scrollable.length){
				var contentHeight = element.find('.scrollable').get(0).scrollHeight;
			}else{
				var contentHeight = element.get(0).scrollHeight;
				if(options.verticalCentered){
					contentHeight = element.find('.tableCell').get(0).scrollHeight;
				}
			}
			
			var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

			//needs scroll?
			if ( contentHeight > scrollHeight) {
				//was there already an scroll ? Updating it
				if(scrollable.length){
					scrollable.css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
				}
				//creating the scrolling
				else{					
					if(options.verticalCentered){
						element.find('.tableCell').wrapInner('<div class="scrollable" />');
					}else{
						element.wrapInner('<div class="scrollable" />');
					}
					

					element.find('.scrollable').slimScroll({
						height: scrollHeight + 'px',
						size: '10px',
						alwaysVisible: true
					});
				}
			}
			
			//removing the scrolling when it is not necessary anymore
			else{				
				element.find('.scrollable').children().first().unwrap().unwrap();
				element.find('.slimScrollBar').remove();
				element.find('.slimScrollRail').remove();
			}
			
			//undo 
			element.css('overflow', '');
		}
		
		function addTableClass(element){
			element.addClass('table').wrapInner('<div class="tableCell" style="height:' + getTableHeight(element) + 'px;" />');
		}
		
		function getTableHeight(element){
			var sectionHeight = windowsHeight;

			if(options.paddingTop || options.paddingBottom){
				var section = element;
				if(!section.hasClass('section')){
					section = element.closest('.' + options.sectionClass);
				}
			
				var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
				sectionHeight = (windowsHeight - paddings);
			}

			return sectionHeight;
		}
		
		/**
		* Adds a css3 transform property to the container class with or without animation depending on the animated param.
		*/
		function transformContainer(translate3d, animated){
			$('#superContainer').toggleClass('easing', animated);
			
			$('#superContainer').css({
				'-webkit-transform': translate3d,
				'-moz-transform': translate3d,
				'-ms-transform':translate3d,
				'transform': translate3d
			});
		}
		
		
		/**
		* Scrolls to the given section and slide 
		*/
		function scrollPageAndSlide(destiny, slide){
			if (typeof slide === 'undefined') {
			    slide = 0;
			}

			if(isNaN(destiny)){
				var section = $('[data-anchor="'+destiny+'"]');
			}else{
				var section = $('.' + options.sectionClass).eq( (destiny -1) );
			}


			//we need to scroll to the section and then to the slide
			if (destiny !== lastScrolledDestiny && !section.hasClass('active')){
				scrollPage(section, function(){
					scrollSlider(section, slide)
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
		function scrollSlider(section, slide){
			if(typeof slide != 'undefined'){
				var slides = section.find('.slides');
				var destiny =  slides.find('[data-anchor="'+slide+'"]');

				if(!destiny.length){
					destiny = slides.find('.' + options.slideClass).eq(slide);
				}

				if(destiny.length){
					landscapeScroll(slides, destiny);
				}
			}
		}
		
		/**
		* Creates a landscape navigation bar with dots for horizontal sliders.
		*/
		function addSlidesNavigation(section, numSlides){						
			section.append('<div class="fullPage-slidesNav"><ul></ul></div>');
			var nav = section.find('.fullPage-slidesNav');

			//top or bottom
			nav.addClass(options.slidesNavPosition);

			for(var i=0; i< numSlides; i++){			
				nav.find('ul').append('<li><a href="#"><span></span></a></li>');
			}
			
			//centering it
			nav.css('margin-left', '-' + (nav.width()/2) + 'px');
			
			nav.find('li').first().find('a').addClass('active');
		}
		

		/**
		* Sets the URL hash for a section with slides
		*/
		function setURLHash(slideIndex, slideAnchor, anchorLink){
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
					location.hash = sectionHash + '/' + slideAnchor;

				//first slide won't have slide anchor, just the section one
				}else if(typeof slideIndex !== 'undefined'){
					location.hash = anchorLink;
				}

				//section without slides
				else{
					location.hash = anchorLink;
				}
			}
		}

		/**
		* Scrolls the slider to the given slide destination for the given section
		*/
		$(document).on('click', '.fullPage-slidesNav a', function(e){
			e.preventDefault();
			var slides = $(this).closest('.' + options.sectionClass).find('.slides');		
			var destiny = slides.find('.' + options.slideClass).eq($(this).closest('li').index());
			
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
		function removeMouseWheelHandler(){
			if (document.addEventListener) {
				document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
				document.removeEventListener('DOMMouseScroll', MouseWheelHandler, false); //Firefox
			} else {
				document.detachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
			}
		}


		/**
		* Adds the auto scrolling action for the mouse wheel and tackpad.
		* After this function is called, the mousewheel and trackpad movements will scroll through sections
		*/
		function addMouseWheelHandler(){
			if (document.addEventListener) {
				document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
				document.addEventListener("DOMMouseScroll", MouseWheelHandler, false); //Firefox
			} else {
				document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
			}
		}
		
		
		/**
		* Adds the possibility to auto scroll through sections on touch devices.
		*/
		function addTouchHandler(){
				$(document).off('touchstart MSPointerDown').on('touchstart MSPointerDown', touchStartHandler);
				$(document).off('touchmove MSPointerMove').on('touchmove MSPointerMove', touchMoveHandler);
		}
		
		/**
		* Removes the auto scrolling for touch devices.
		*/
		function removeTouchHandler(){
			$(document).off('touchstart MSPointerDown');
			$(document).off('touchmove MSPointerMove');
		}
		
		/**
		* Gets the pageX and pageY properties depending on the browser.
		* https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
		*/
		function getEventsPage(e){
			var events = new Array();
			if (window.navigator.msPointerEnabled){
				events['y'] = e.pageY;
				events['x'] = e.pageX;
			}else{
				events['y'] = e.touches[0].pageY;
				events['x'] =  e.touches[0].pageX;
			}

			return events;
		}

	};
})(jQuery);
