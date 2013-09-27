/**
 * fullPage 1.0
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */

(function($) {
	$.fn.fullpage = function(options) {

		var that = this;

		// Create some defaults, extending them with any options that were provided
		var options = $.extend({
			"verticalCentered" : true,
			'resize' : true,
			'slidesColor' : [],
			'anchors':[],
			'scrollingSpeed': 700,
			'easing': 'easeInQuart'
		}, options);

		var isTablet = false;


		var windowsWidtdh = $(window).width();
		var windowsHeight = $(window).height();
		var isMoving = false;
		
		if (!isTablet) {
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

		$('.section').each(function(index) {
			var slides = $(this).find('.slide');
			var numSlides = slides.length;

			$(this).css('height', windowsHeight + 'px');
			
			if(typeof options.slidesColor[index] != 'undefined'){
				$(this).css('background-color', options.slidesColor[index]);
			}	

			if(typeof options.anchors[index] != 'undefined'){			
				$(this).attr('data-anchor', options.anchors[index]);
			}

			// if there's any slide
			if (numSlides > 0) {
				var sliderWidth = numSlides * 100;
				var slideWidth = 100 / numSlides;

				slides.wrapAll('<div class="slidesContainer" />');
				slides.parent().wrap('<div class="slides" />');

				$(this).find('.slidesContainer').css('width', sliderWidth + '%');
				$(this).find('.slides').after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');

				slides.each(function() {
					$(this).css('width', slideWidth + '%');
				});
			}
		}).promise().done(function(){
			scrollToAnchor();
		});

		/**
		 * Detecting mousewheel scrolling
		 * 
		 * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
		 * http://www.sitepoint.com/html5-javascript-mouse-wheel/
		 */
		var sq = {};
		sq = document;

		if (sq.addEventListener) {
			sq.addEventListener("mousewheel", MouseWheelHandler(), false);
			sq.addEventListener("DOMMouseScroll", MouseWheelHandler(), false);
		} else
			sq.attachEvent("onmousewheel", MouseWheelHandler());

		function MouseWheelHandler() {
			return function(e) {
				// cross-browser wheel delta
				var e = window.event || e;
				var delta = Math.max(-1, Math.min(1,
						(e.wheelDelta || -e.detail)));

				if (!isMoving) { //if theres any #
					//scrolling down?
					if (delta < 0) {
						moveSlideDown();
					}

					//scrolling up?
					else {
						moveSlideUp();
					}
				}

				return false;
			}
		}

		function moveSlideUp() {
			var prev = $('.section.active').prev();
			if (prev.length > 0) {
				prev.addClass('active').siblings().removeClass('active');
				scrollPage(prev);
			}
		}

		function moveSlideDown() {
			var next = $('.section.active').next();
			if (next.length > 0) {
				next.addClass('active').siblings().removeClass('active');
				scrollPage(next);
			}
		}

		function scrollPage(element) {
			//preventing from activating the MouseWheelHandler event
			//more than once if the page is scrolling
			isMoving = true;

			location.hash = element.data('anchor');
			
			dest = $(element).position();
			dtop = dest != null ? dest.top : null;
	
			$('#superContainer').animate({
				top : -dtop
			}, options.scrollingSpeed, options.easing, function() {
				isMoving = false;
			});
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

		/**
		 * Sliding with arrow keys, both, vertical and horizontal
		 */
		$(document).keydown(function(e) {
			//Moving the mian page with the keyboard arrows
			if (!isMoving) {
			console.log(e.which);
				switch (e.which) {
				//up
				case 38:
					moveSlideUp();
					break;

				//down
				case 40:
				console.log('going down');
					moveSlideDown();
					
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
			}, 500);

			destiny.addClass('active');

			//setting active status for the navigation bars		
			//setFloatingNavigation($(this).closest('.section'), destiny);

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
			
			$('.section').each(function() {
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
			
			if (!isTablet) {
				$('#superContainer').animate({
					top : -destinyPos.top
				}, options.scrollingSpeed, options.easing);
			} else {
				$('html, body').animate({
					scrollTop : destinyPos.top
				}, options.scrollingSpeed, options.easing);
			}
		}

		/**
		 * Resizing of the font size depending on the window size as well as some of the images on the site.
		 */
		function resizeMe(displayHeight, displayWitdh) {
			//Standard height, for which the body font size is correct
			var preferredHeight = 825;
			var windowSize = displayHeight;

			if (displayHeight < 825) {
				var percentage = (windowSize * 100) / preferredHeight;
				var newFontSize = percentage.toFixed(2);

				$("img").each(function() {
					var newWidth = ((80 * percentage) / 100).toFixed(2);
					$(this).css("width", newWidth + '%');
				});
			} else {
				$("img").each(function() {
					$(this).css("width", '80%');
				});
			}

			if (displayHeight < 825 || displayWitdh < 900) {
				if (displayWitdh < 900) {
					windowSize = displayWitdh;
					preferredHeight = 900;
				}
				var percentage = (windowSize * 100) / preferredHeight
				var newFontSize = percentage.toFixed(2);

				$("body").css("font-size", newFontSize + '%');
			} else {
				$("body").css("font-size", '100%');
			}
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


	};
})(jQuery);