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
			'scrollOverflow': false,
			'css3': false,

			//events
			'afterLoad': null,
			'onLeave': null,
			'afterRender': null
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
			$('.section').addClass('table').wrapInner('<div class="tableCell" style="height:' + windowsHeight + 'px" />');
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
				var link = '';
				if(options.anchors.length){
					link = options.anchors[index];
				}
				nav.find('ul').append('<li><a href="#' + link + '"><span></span></a></li>');
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
			$.isFunction( options.afterRender ) && options.afterRender.call( this);
			
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
	
			$(window).on('load', function() {
				scrollToAnchor();	
			});
			
		});
	
		
		//when scrolling...
		$(window).scroll(function(e){
			if(!options.autoScrolling){
				var currentScroll = $(window).scrollTop();
				
				var scrolledSections = $('.section').map(function(){
					if ($(this).offset().top < (currentScroll + 100)){
						return $(this);
					}
				});
				
				//geting the last one, the current one on the screen
				var currentSection = scrolledSections[scrolledSections.length-1];
				
				//executing only once the first time we reach the section
				if(!currentSection.hasClass('active')){
					var yMovement = getYmovement(currentSection);
					
					$('.section.active').removeClass('active');
					currentSection.addClass('active');
				
					var anchorLink  = currentSection.data('anchor');
					$.isFunction( options.onLeave ) && options.onLeave.call( this, currentSection.index('.section'), yMovement);

					$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (currentSection.index('.section') + 1));
					
					activateMenuElement(anchorLink);	
					activateNavDots(anchorLink, 0);
				}
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
				scrollPage(destiny);
			}
		};
		
		function scrollPage(element, callback) {
			var scrollOptions = {}, scrolledElement;
			var dest = element.position();
			var dtop = dest !== null ? dest.top : null;
			var yMovement = getYmovement(element);
			var anchorLink  = element.data('anchor');
			var sectionIndex = element.index('.section');
			
			element.addClass('active').siblings().removeClass('active');
			
			//preventing from activating the MouseWheelHandler event
			//more than once if the page is scrolling
			isMoving = true;
			
			if(!$.isFunction( callback )){
				if(typeof anchorLink !== 'undefined'){
					location.hash = anchorLink;
				}else{
					location.hash = '';
				}
			}
			
			if(options.autoScrolling){
				scrollOptions['top'] = -dtop;
				scrolledElement = '#superContainer';
			}else{
				scrollOptions['scrollTop'] = dtop;
				scrolledElement = 'html, body';
			}
						
			
						
			if(options.css3 && options.autoScrolling){
				$.isFunction( options.onLeave ) && options.onLeave.call( this, sectionIndex, yMovement);

				var translate3d = 'translate3d(0px, -' + dtop + 'px, 0px)';
				$('#superContainer').addClass('easing').css({
					'-webkit-transform': translate3d,
					'-moz-transform': translate3d,
					'-ms-transform':translate3d,
					'transform': translate3d
				});
				
				$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (sectionIndex + 1));
				
				setTimeout(function(){
					isMoving = false;
					$.isFunction( callback ) && callback.call( this);
				}, 700);
			}else{
				$.isFunction( options.onLeave ) && options.onLeave.call( this, sectionIndex, yMovement);
				
				$(scrolledElement).animate(
					scrollOptions 
				, options.scrollingSpeed, options.easing, function() {
					//callback
					$.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (sectionIndex + 1));
					
					setTimeout(function(){
						isMoving = false;
						$.isFunction( callback ) && callback.call( this);
					}, 700);
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
				var element = $('[data-anchor="'+section+'"]');
				
				//updating the array positions...
				
				scrollPage(element, function(){
					if(typeof slide != 'undefined'){
						var slides = element.find('.slides');
						var destiny =  slides.find('[data-anchor="'+slide+'"]');
						if(!destiny.length){
							destiny = slides.find('.slide').eq(slide);
						}
						
						slides.find('.slide').first().removeClass('active');
						
						landscapeScroll(slides, destiny);
						
						destiny.addClass('active');
						
					}
				});
				
			}
		}

		//detecting any change on the URL to scroll to the given anchor link
		//(a way to detect back history button as we play with the hashes on the URL)
		$(window).on('hashchange',function(){
			var value =  window.location.hash.replace('#', '').split('/');
			var section = value[0];

			/*in order to call scrollpage() only once for each destination at a time
			It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange` 
			event is fired on every scroll too.*/
			if (section !== lastScrolledDestiny) {

				var element = $('[data-anchor="'+section+'"]');

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
		
		$(document).on('click', '#fullPage-nav a', function(e){
			e.preventDefault();
			var index = $(this).parent().index();
			alert(index);
			scrollPage($('.section').eq(index));
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
			var currentSlide = slides.find('.slide.active');
			var destiny = null;

			currentSlide.removeClass('active');

			if ($(this).hasClass('prev')) {
				destiny = currentSlide.prev('.slide');
			} else {
				destiny = currentSlide.next('.slide');
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
			
			destiny.addClass('active');
		});

		
		/**
		 * Scrolling horizontally when clicking on the slider controls.
		 */
		$('.section').on('click', '.toSlide', function(e) {
			e.preventDefault();
			
			var slides = $(this).closest('.section').find('.slides');
			var currentSlide = slides.find('.slide.active');
			var destiny = null;
			
			destiny = slides.find('.slide').eq( ($(this).data('index') -1) );

			if(destiny.length > 0){
				currentSlide.removeClass('active');

				landscapeScroll(slides, destiny);
				
				destiny.addClass('active');
			}
		});
		
		/**
		* Scrolls horizontal sliders.
		*/
		function landscapeScroll(slides, destiny){
			var destinyPos = destiny.position();
			var slidesContainer = slides.find('.slidesContainer').parent();
			
			var slideAnchor = destiny.data('anchor');
			
			if(typeof slideAnchor === 'undefined'){
				slideAnchor = destiny.index('.slide');
			}
			
			location.hash = location.hash.split('/')[0] + '/' + slideAnchor;
			
			if(options.css3){
				var translate3d = 'translate3d(-' + destinyPos.left + 'px, 0px, 0px)';
				
				slides.find('.slidesContainer').addClass('easing').css({
					'-webkit-transform': translate3d,
					'-moz-transform': translate3d,
					'-ms-transform':translate3d,
					'transform': translate3d
				});
				setTimeout(function(){
					slideLapse = true;
				}, options.scrollingSpeed);
			}else{
				slidesContainer.animate({
					scrollLeft : destinyPos.left
				}, options.scrollingSpeed, function() {

					//letting them slide again
					slideLapse = true; 
				});
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
			
				//resizing the scrolling divs
				if(options.scrollOverflow){
					$(this).find('.scrollable').css('height', windowsHeight + 'px').parent().css('height', windowsHeight + 'px');
				}
				
				//adjusting the height of the table-cell for IE and Firefox
				if(options.verticalCentered){
					$(this).find('.tableCell').css('height', windowsHeight + 'px');
				}
				
				$(this).css('height', windowsHeight + 'px');

				//adjusting the position fo the FULL WIDTH slides...
				var slides = $(this).find('.slides');
				if (slides.length > 0) {
					landscapeScroll(slides, slides.find('.slide.active'));
				}
			});

			//adjusting the position for the current section
			var destinyPos = $('.section.active').position();

			scrollPage($('.section.active'));
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
				$('#fullPage-nav').find('.active').removeClass('active');
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
		* Retuns `up` or `down` depending on the scrolling movement to reach its destination
		* from the current section.
		*/
		function getYmovement(destiny){
			var fromIndex = $('.section.active').index('.section');
			var toIndex = destiny.index('.section');
			
			if(fromIndex > toIndex){
				return 'up';
			}
			return 'down';
		}
		
	};
})(jQuery);
