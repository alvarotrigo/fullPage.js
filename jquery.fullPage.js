/**
 * fullPage 1.0
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
			'controlArrowColor': '#fff',
			'loopBottom': false,
			'loopTop': false,
			'autoScrolling': true,
			'scrollOverflow': true,

			//events
			'afterLoad': null
		}, options);		
		
		
		$.fn.fullpage.setAutoScrolling = function(value){
			options.autoScrolling = value;
			
			if(options.autoScrolling){
				$('html, body').css({
					'overflow' : 'hidden',
					'height' : '100%'
				});
			}else{
				$('html, body').css({
					'overflow' : 'auto',
					'height' : 'auto'
				});
				
				//deleting the possible negative top
				$('#superContainer').css('top', '0px');
			}
		};
		
			
		//flag to avoid very fast sliding for landscape sliders
		var slideLapse = true;

		var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

		var windowsHeight = $(window).height();
		var isMoving = false;
		
		var lastScrolledDestiny;
		
		$.fn.fullpage.setAutoScrolling(options.autoScrolling);
		
		if(options.verticalCentered){
			$('.section').addClass('table').wrapInner('<div class="tableCell" />');
		}

		$('body').wrapInner('<div id="superContainer" />');

		//creating the navigation dots 
		if (options.navigation) {
			$('body').append('<div id="fullPage-nav"><ul></ul></div>');
			var nav = $('#fullPage-nav');

			nav.css('color', options.navigationColor);


			if (options.navigationPosition === 'right') {
				nav.css('right', '17px');
			} else {
				nav.css('left', '17px');
			}
		}
		
		$('.section').each(function(index){
			var slides = $(this).find('.slide');
			var numSlides = slides.length;
			
			if(!index){
				$(this).addClass('active');
			}

			$(this).css('height', windowsHeight + 'px');
			
			if (typeof options.slidesColor[index] !==  'undefined') {
				$(this).css('background-color', options.slidesColor[index]);
			}

			if (typeof options.anchors[index] !== 'undefined') {
				$(this).attr('data-anchor', options.anchors[index]);
			}
			
			if (options.navigation) {
				$('#fullPage-nav').find('ul').append('<li><a href="#' + options.anchors[index] + '"><span></span></a></li>');
			}
			
			// if there's any slide
			if (numSlides > 0) {
				var sliderWidth = numSlides * 100;
				var slideWidth = 100 / numSlides;

				slides.wrapAll('<div class="slidesContainer" />');
				slides.parent().wrap('<div class="slides" />');

				$(this).find('.slidesContainer').css('width', sliderWidth + '%');
				$(this).find('.slides').after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');
				$('.controlArrow.next').css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
				$('.controlArrow.prev').css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');

				
				slides.each(function(index) {
					if(!index){
						$(this).addClass('active');
					}
					
					$(this).css('width', slideWidth + '%');
				});
			}
			

			
		}).promise().done(function(){
			if(options.scrollOverflow){
				loadSlimScroll(function(){
					$('.section').each(function(){
						if($(this).height() > windowsHeight){
							if(options.verticalCentered){
								$(this).find('.tableCell').wrapInner('<div class="scrollable" />');
							}else{
								$(this).wrapInner('<div class="scrollable" />');
							}
						
							$(this).find('.scrollable').slimScroll({
								height: windowsHeight + 'px',
								size: '10px',
								alwaysVisible: true
							});
						}
					});
				});
			}
			
			scrollToAnchor();
		});
		
		
		//when scrolling...
		$(window).scroll(function(e){
			if(options.menu && !options.autoScrolling){
				var currentScroll = $(window).scrollTop();
				
				var scrolledSections = $('.section').map(function(){
					if ($(this).offset().top < (currentScroll + 100)){
						return $(this);
					}
				});
				
				//geting the last one
				var currentSection = scrolledSections[scrolledSections.length-1];
				$('.section.active').removeClass('active');
				currentSection.addClass('active');
			
				var anchorLink  = currentSection.attr('data-anchor');
				
				$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (currentSection.index('.section') + 1));
				
				activateMenuElement(anchorLink);	
			}					
		});	
	

		
	
		var touchStartY = 0;
		var touchEndY = 0;
		var touchEndX = 0;
	
		/* Detecting touch events 
		
		* As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
		* This way, the touchstart and the touch moves shows an small difference between them which is the
		* used one to determine the direction.
		*/
		$(document).on('touchmove', function(event){
			if(options.autoScrolling && isTablet){
				//preventing the easing on iOS devices
				event.preventDefault();
				var e = event.originalEvent;

				if (!isMoving) { //if theres any #
					var scrollable = $('.section.active').find('.scrollable');
				
					touchEndY = e.touches[0].pageY;
					touchEndX = e.touches[0].pageX;
					if(touchStartY > touchEndY){
						if(scrollable.length > 0 ){
							//is the scrollbar at the end of the scroll?
							if(isScrolled('bottom', scrollable)){
								$.fn.fullpage.moveSlideDown();
							}else{
								return true;
							}
						}else{
							// moved down
							$.fn.fullpage.moveSlideDown();
						}
					} else {
					
						if(scrollable.length > 0){
							//is the scrollbar at the start of the scroll?
							if(isScrolled('top', scrollable)){
								$.fn.fullpage.moveSlideUp();
							}
							else{
								return true;
							}
						}else{
							// moved up
							$.fn.fullpage.moveSlideUp();
						}
					}
				}
			}
		});
		
		$(document).on('touchstart', function(event){
			if(options.autoScrolling && isTablet){
				var e = event.originalEvent;
				touchStartY = e.touches[0].pageY;
			}
		});
		


		/**
		 * Detecting mousewheel scrolling
		 * 
		 * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
		 * http://www.sitepoint.com/html5-javascript-mouse-wheel/
		 */
		var sq = {};
		sq = document;

		function MouseWheelHandler() {
			return function(e) {
				if(options.autoScrolling){
					// cross-browser wheel delta
					e = window.event || e;
					var delta = Math.max(-1, Math.min(1,
							(e.wheelDelta || -e.detail)));

					if (!isMoving) { //if theres any #
						var scrollable = $('.section.active').find('.scrollable');
					
						//scrolling down?
						if (delta < 0) {
							if(scrollable.length > 0 ){
								//is the scrollbar at the end of the scroll?
								if(isScrolled('bottom', scrollable)){
									$.fn.fullpage.moveSlideDown();
								}else{
									return true; //normal scroll
								}
							}else{
								$.fn.fullpage.moveSlideDown();
							}
						}

						//scrolling up?
						else {
							if(scrollable.length > 0){
								//is the scrollbar at the start of the scroll?
								if(isScrolled('top', scrollable)){
									$.fn.fullpage.moveSlideUp();
								}else{
									return true; //normal scroll
								}
							}else{
								$.fn.fullpage.moveSlideUp();
							}
						}
					}

					return false;
				};
			}
		}

		
		if (sq.addEventListener) {
			sq.addEventListener("mousewheel", MouseWheelHandler(), false);
			sq.addEventListener("DOMMouseScroll", MouseWheelHandler(), false);
		} else {
			sq.attachEvent("onmousewheel", MouseWheelHandler());
		}
		
		$.fn.fullpage.moveSlideUp = function(){
			var prev = $('.section.active').prev('.section');
			
			//looping to the bottom if there's no more sections above
			if(options.loopTop && !prev.length){
				prev = $('.section').last();
			}

			if (prev.length > 0 || (!prev.length && options.loopTop)){
				prev.addClass('active').siblings().removeClass('active');
				scrollPage(prev);
			}
		};

		$.fn.fullpage.moveSlideDown = function (){
			var next = $('.section.active').next('.section');
			
			//looping to the top if there's no more sections below
			if(options.loopBottom && !next.length){
				next = $('.section').first();
			}
	
			if (next.length > 0 || (!next.length && options.loopBottom)){
				next.addClass('active').siblings().removeClass('active');
				scrollPage(next);
			}
		};
		
		$.fn.fullpage.moveToSlide = function (index){
			var destiny = '';
			
			if(isNaN(index)){
				destiny = $('[data-anchor="'+index+'"]');
			}else{
				destiny = $('.section').eq( (index -1) );
			}

			if (destiny.length > 0) {
				destiny.addClass('active').siblings().removeClass('active');
				scrollPage(destiny);
			}
		};

		function scrollPage(element) {
			var scrollOptions = {}, scrolledElement;
			var dest = element.position();
			var dtop = dest !== null ? dest.top : null;

			//preventing from activating the MouseWheelHandler event
			//more than once if the page is scrolling
			isMoving = true;

			if(typeof element.data('anchor') !== 'undefined'){
				location.hash = element.data('anchor');
			}else{
				location.hash = '';
			}
	
			if(options.autoScrolling){
			
				scrollOptions['top'] = -dtop;
				scrolledElement = '#superContainer';
			}else{
				scrollOptions['scrollTop'] = dtop;
				scrolledElement = 'html, body';
			}
			
			$(scrolledElement).animate(
				scrollOptions 
			, options.scrollingSpeed, options.easing, function() {
				//callback
				$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (element.index('.section') + 1));
				
				setTimeout(function(){
					isMoving = false;
				}, 700);
			});
			
			
			var anchorLink  = element.attr('data-anchor');
			
			//flag to avoid callingn `scrollPage()` twice in case of using anchor links
			lastScrolledDestiny = anchorLink;

			activateMenuElement(anchorLink);
			activateNavDots(anchorLink);
		}
		
		function scrollToAnchor(){
			//getting the anchor link in the URL and deleting the `#`
			var value =  window.location.hash.replace('#', '');
						
			if(value){  //if theres any #
			
				var element = $('[data-anchor="'+value+'"]');
				
				element.addClass('active').siblings().removeClass('active');
				//updating the array positions...
				scrollPage(element);
			}
		}

		//detecting any change on the URL to scroll to the given anchor link
		//(a way to detect back history button as we play with the hashes on the URL)
		$(window).on('hashchange',function(){
			var value =  window.location.hash.replace('#', '');

			/*in order to call scrollpage() only once for each destination at a time
			It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange` 
			event is fired on every scroll too.*/
			if (value !== lastScrolledDestiny) {
				var element = $('[data-anchor="'+value+'"]');

				element.addClass('active').siblings().removeClass('active');
				scrollPage(element);
			}
		});
			
		
		/**
		 * Sliding with arrow keys, both, vertical and horizontal
		 */
		$(document).keydown(function(e) {
			//Moving the mian page with the keyboard arrows
			if (!isMoving) {
				switch (e.which) {
				//up
				case 38:
				case 33:
					$.fn.fullpage.moveSlideUp();
					break;

				//down
				case 40:
				case 34:
					$.fn.fullpage.moveSlideDown();
					break;

				//left
				case 37:
					$('.section.active').find('.controlArrow.prev').trigger('click');
					break;

				//right
				case 39:
					$('.section.active').find('.controlArrow.next').trigger('click');
					break;

				default:
					return; // exit this handler for other keys
				}
			}
		});

		/**
		 * Scrolling horizontally when clicking on the slider controls.
		 */
		$('.section').on('click', '.controlArrow', function() {
			//not that fast my friend! :)
			if (!slideLapse) {
				return;
			}
			slideLapse = false;

			var slides = $(this).closest('.section').find('.slides');
			var slidesContainer = slides.find('.slidesContainer').parent();
			var currentSlide = slides.find('.slide.active');
			var destiny = null;
			var destinyPos = 0;

			currentSlide.removeClass('active');

			if ($(this).hasClass('prev')) {
				destiny = currentSlide.prev('.slide');
			} else {
				destiny = currentSlide.next('.slide');
			}

			//is there a next slide in the secuence?
			if (destiny.length > 0) {
				destinyPos = destiny.position();
			}

			//to the last
			else {
				if ($(this).hasClass('prev')) {
					destiny = currentSlide.siblings(':last');
				} else {
					destiny = currentSlide.siblings(':first');
				}

				destinyPos = destiny.position();
			}

			slidesContainer.animate({
				scrollLeft : destinyPos.left
			}, 500, function() {
				//letting them slide again
				slideLapse = true; 
			});

			destiny.addClass('active');
		});

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
			var windowsWidtdh = $(window).width();
			var windowsHeight = $(window).height();
			
			//resizing the scrolling divs
			if(options.scrollOverflow){
				$('.section').each(function(){
					$(this).find('.scrollable').css('height', windowsHeight + 'px').parent().css('height', windowsHeight + 'px');
				});
			}

			//text and images resizing
			if (options.resize) {
				resizeMe(windowsHeight, windowsWidtdh);
			}

			$('.section').each(function(){
				$(this).css('height', windowsHeight + 'px');

				//adjusting the position fo the FULL WIDTH slides...
				var slides = $(this).find('.slides');
				if (slides.length > 0) {
					var destinyPos = slides.find('.slide.active').position();

					slides.animate({
						scrollLeft : destinyPos.left
					}, options.scrollingSpeed);
				}
			});

			//adjusting the position for the current section
			var destinyPos = $('.section.active').position();

			$('#superContainer').animate({
				top : -destinyPos.top
			}, options.scrollingSpeed, options.easing);
		}

		/**
		 * Resizing of the font size depending on the window size as well as some of the images on the site.
		 */
		function resizeMe(displayHeight, displayWitdh) {
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

			if (displayHeight < 825 || displayWitdh < 900) {
				if (displayWitdh < 900) {
					windowSize = displayWitdh;
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
		function activateNavDots(name){
			if(options.navigation){
				$('#fullPage-nav').find('.active').removeClass('active');
				$('#fullPage-nav').find('a[href="#' + name + '"]').addClass('active');
			}
		}
				
		/**
		 * Activating the website main menu elements according to the given slide name.
		 */
		function activateMenuElement(name){
			if(options.menu){
				$(options.menu).find('.active').removeClass('active');
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
		* Loading dynamiaclly the slimscroll.js plugin used for the scrolling bar.
		* $.getScript didn't work well on local. This way it does.
		*/
		function loadSlimScroll(callback){
			if (typeof callback !== 'function') {
			   throw 'Not a valid callback';  
			}
	
			var head = document.getElementsByTagName("head")[0];  
			var script =document.createElement('script');   
			script.onload = callback; //callback to execute it only after loading
			script.id = 'uploadScript';  
			script.type = 'text/javascript';  
			script.src = 'vendors/jquery.slimscroll.min.js';   
			head.appendChild(script);
		}
			

		
	};
})(jQuery);
