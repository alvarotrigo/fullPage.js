/**
 * fullPage 1.0
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */

(function($) {
	$.fn.fullpage = function(options) {
		//TODO is not use
		// var that = this;

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
			'touchScrolling': true,

			//events
			'afterLoad': null,
			//flag
			'flag': true
		}, options);

		var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);

		//TODO is not use
		// var windowsWidtdh = $(window).width();
		var windowsHeight = $(window).height();
		var isMoving = false;
		
		var lastScrolledDestiny;
		
		if(!isTablet || options.touchScrolling){
			$('html, body').css({
				'overflow' : 'hidden',
				'height' : '100%'
			});
		}
		
		if(options.verticalCentered){
			$('.section').addClass('table');
			$('.section').wrapInner('<div class="tableCell" />');
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
			scrollToAnchor();
		});
		
		
		if(options.touchScrolling && isTablet){
			var touchStartY = 0;
			var touchEndY = 0;
			var touchEndX = 0;
		
			/* Detecting touch events 
			
			* As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
			* This way, the touchstart and the touch moves shows an small difference between them which is the
			* used one to determine the direction.
			*/
			document.addEventListener('touchmove', function(e){
				//preventing the easing on iOS devices
				e.preventDefault();

				if (!isMoving) { //if theres any #
					touchEndY = e.touches[0].pageY;
					touchEndX = e.touches[0].pageX;
					if(touchStartY > touchEndY){
						// moved down
						$.fn.fullpage.moveSlideDown();
					} else {
						// moved up
						$.fn.fullpage.moveSlideUp();
					}
				}
			});
			
			document.addEventListener('touchstart', function(e){
				touchStartY = e.touches[0].pageY;
			});
		}


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
				// cross-browser wheel delta
				e = window.event || e;
				var delta = Math.max(-1, Math.min(1,
						(e.wheelDelta || -e.detail)));

				if (!isMoving) { //if theres any #
					//scrolling down?
					if (delta < 0) {
						$.fn.fullpage.moveSlideDown();
					}

					//scrolling up?
					else {
						$.fn.fullpage.moveSlideUp();
					}
				}

				return false;
			};
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
			//preventing from activating the MouseWheelHandler event
			//more than once if the page is scrolling
			isMoving = true;

			if(typeof element.data('anchor') !== 'undefined'){
				location.hash = element.data('anchor');
			}else{
				location.hash = '';
			}
			
			var dest = element.position();
			var dtop = dest !== null ? dest.top : null;
	
			$('#superContainer').animate({
				top : -dtop
			}, options.scrollingSpeed, options.easing, function() {
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
			// click flag
			if (options.flag === false) {
				return;
			}
			options.flag = false;

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
			}, {
				duration: 500,
				complete: function() {
					options.flag = true;
				}
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
	};
})(jQuery);
