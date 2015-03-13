# fullPage.js

![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif)
![fullPage.js version](http://img.shields.io/badge/fullPage.js-v2.6.1-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
A simple and easy to use plugin to create fullscreen scrolling websites (also known as single page websites).
It allows the creation of fullscreen scrolling websites, as well as adding some landscape sliders inside the sections of the site.

- [Live demo](http://alvarotrigo.com/fullPage/)
- [Apple demo] (http://alvarotrigo.com/fullPage/examples/apple.html)
- [Blog Article](http://alvarotrigo.com/blog/fullpage-jquery-plugin-for-fullscreen-scrolling-websites/)
- [Frequently Answered Questions](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

Invite me to a coffee
[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Customizations of the plugin available upon request for some reasonable price. <a href="http://alvarotrigo.com/#contact-page">Contact me</a>.

Would you like to have a website using fullpage.js functionality but you don't know how to use it? I can do it for you for a reasonable price. <a href="http://alvarotrigo.com/#contact-page">Contact me</a>.

## Introduction
Suggestion are more than welcome, not only for feature requests but also for coding style improvements.
Let's make this a great plugin to make people's lives easier!

## Compatibility
fullPage.js is fully functional on all modern browsers, as well as some old ones such as Internet Explorer 8, 9, Opera 12, etc.
It works with browsers with CSS3 support and with the ones which don't have it, making it ideal for old browsers compatibility.

## Usage
As you can see in the example files, you will need to include:
 - [jQuery library](http://jquery.com/). (1.6.0 minimum)
 - The JavaScript file `jquery.fullPage.js` (or its minified version `jquery.fullPage.min.js`)
 - The css file `jquery.fullPage.css`

 **Optionally**, you can add the [jQuery UI library](http://jqueryui.com/) in case you want to use other easing effects apart from the ones included in the jQuery library (`linear`, `swing`) or the one included by default in fullPage.js (`easeInQuart`).

### Install using bower:
**Optionally**, you can install fullPage.js with bower if you prefer:
Terminal:
```shell
bower install fullpage.js
```

###Including files:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- This following line is needed only in case of using other easing effect rather than "linear", "swing" or "easeInQuart". You can also add the full jQuery UI instead of this file if you prefer -->
<script src="vendors/jquery.easings.min.js"></script>


<!-- This following line needed in the case of using the plugin option `scrollOverflow:true` -->
<script type="text/javascript" src="vendors/jquery.slimscroll.min.js"></script>

<script type="text/javascript" src="jquery.fullPage.js"></script>
```

###Optional use of CDN
If you prefer to use a CDN to load the needed files, fullPage.js is in CDNJS:
https://cdnjs.com/libraries/fullpage.js

###Required HTML structure
Each section will be defined with a `div` containing the `section` class.
The active section by default will be the first section, which is taken as the home page.
```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```
If you want to define a different starting point rather than the first section or the first slide of a section, just add the class `active` to the section and slide you want to load first.
```html
<div class="section active">Some section</div>
```

In order to create a landscape slider within a section, each slide will be defined with another `div`:
```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
````
You can see a fully working example of the HTML structure in the [`demoPage.html` file](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/demoPage.html).


###Initialization
All you need to do is call the plugin inside a `$(document).ready` function:

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage();
});
```

A more complex initialization with all options set could look like this:
```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: false,
		anchors:['firstSlide', 'secondSlide'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltips: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		resize : false,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsive: 0,

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction){}
	});
});
```

### Advance usage
In order to create links to certain slides inside a section, you could do it in two ways:

#### Using anchor links
If you are using fullPage.js with anchor links for the sections (using the `anchors` option), then you will be able to use anchor links also to navigate directly to a certain slide inside a section.
For example: http://alvarotrigo.com/fullPage/#secondPage/2

You can do it by using the index of the slide (starting by 0), or if you prefer, you can create custom anchor links for them by using the attribute `data-anchor` in each slide. For example:

```html
<div class="section">
    <div class="slide" data-anchor="slide1"> Slide 1 </div>
    <div class="slide" data-anchor="slide2"> Slide 2 </div>
    <div class="slide" data-anchor="slide3"> Slide 3 </div>
    <div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```

**Be careful!** `data-anchor` tags can not have the same value as any ID element on the site (or NAME element for IE).

## Options

- `controlArrows`: (default `true`) Determines whether to use control arrows for the slides to move right or left.

- `verticalCentered`: (default `true`) Vertically centering of the content within sections. When set to `true`, your content will be wrapped by the plugin. Consider using delegation or load your other scripts in the `afterRender` callback.

- `resize`: (default `false`) Whether you want to resize the text when the window is resized.

- `scrollingSpeed`: (default `700`) Speed in milliseconds for the scrolling transitions.

- `sectionsColor`:(default `none`) Define the CSS `background-color` property for each section:
Example:
```javascript
$('#fullpage').fullpage({
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (default `[]`) Defines the anchor links (#example) to be shown on the URL for each section. Using anchors forward and backward navigation will also be possible through the browser. This option also allows users to bookmark a specific section or slide. **Be careful!** if you use anchors, they can not have the same value as any ID element on the site (or NAME element for IE).

**Important** It is helpful to understand that the values in the `anchors` option array correlate directly to the element with the class of `.section` by it's position in the markup.

- `easing`: (default `easeInOutCubic`) Defines the transition effect to use for the vertical and horizontal scrolling.
It requires the file `vendors/jquery.easings.min.js` or [jQuery UI](http://jqueryui.com/) for using some of [its transitions](http://api.jqueryui.com/easings/). Other libraries could be used instead.

- `easingcss3`: (default `ease`) Defines the transition effect to use in case of using `css3:true`. You can use the [pre-defined ones](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (such as `linear`, `ease-out`...) or create your own ones using the `cubic-bezier` function. You might want to use [Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/) for it.

- `loopTop`: (default `false`) Defines whether scrolling up in the first section should scroll to the last one or not.

- `loopBottom`: (default `false`) Defines whether scrolling down in the last section should scroll to the first one or not.

- `loopHorizontal`: (default `true`) Defines whether horizontal sliders will loop after reaching the last or previous slide or not.

- `css3`: (default `true`). Defines whether to use JavaScript or CSS3 transforms to scroll within sections and slides. Useful to speed up the movement in tablet and mobile devices with browsers supporting CSS3. If this option is set to `true` and the browser doesn't support CSS3, a jQuery fallback will be used instead.

- `autoScrolling`: (default `true`) Defines whether to use the "automatic" scrolling or the "normal" one. It also has affects the way the sections fit in the browser/device window in tablets and mobile phones.

- `fitToSection`: (default `true`). Determines whether or not to fit sections to the viewport or not. When set to `true` the currente active section will always fill the whole viewport. Otherwise the user will be free to stop in the middle of a section (when )

- `scrollBar`: (default `false`). Determines whether to use scrol bar for the site or not. In case of using scroll bar, the `autoScrolling` functionality will still working as expected. The user will also be free to scroll the site with the scroll bar and fullPage.js will fit the section in the screen when scrolling finishes.

- `paddingTop`: (default `0`) Defines the top padding for each section with a numerical value and its measure (paddingTop: '10px', paddingTop: '10em'...) Useful in case of using a fixed header.

- `paddingBottom`: (default `0`) Defines the bottom padding for each section with a numerical value and its measure (paddingBottom: '10px', paddingBottom: '10em'...). Useful in case of using a fixed footer.

- `fixedElements`: (default `null`) Defines which elements will be taken off the scrolling structure of the plugin which is necessary when using the `css3` option to keep them fixed. It requires a string with the jQuery selectors for those elements. (For example: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (default `null`) If you want to avoid the auto scroll when scrolling over some elements, this is the option you need to use. (useful for maps, scrolling divs etc.) It requires a string with the jQuery selectors for those elements. (For example: `normalScrollElements: '#element1, .element2'`)

- `normalScrollElementTouchThreshold` : (default `5`) Defines the threshold for the number of hops up the html node tree Fullpage will test to see if `normalScrollElements` is a match to allow scrolling functionality on divs on a touch device. (For example: `normalScrollElementTouchThreshold: 3`)

- `keyboardScrolling`: (default `true`) Defines if the content can be navigated using the keyboard

- `touchSensitivity`: (default `5`) Defines a percentage of the browsers window width/height, and how far a swipe must measure for navigating to the next section / slide

- `continuousVertical`: (default `false`) Defines whether scrolling down in the last section should scroll down to the first one or not, and if scrolling up in the first section should scroll up to the last one or not. Not compatible with `loopTop` or `loopBottom`.

- `animateAnchor`: (default `true`) Defines whether the load of the site when given an anchor (#) will scroll with animation to its destination or will directly load on the given section.

- `recordHistory`: (default `true`) Defines whether to push the state of the site to the browser's history. When set to `true` each section/slide of the site will act as a new page and the back and forward buttons of the browser will scroll the sections/slides to reach the previous or next state of the site. When set to `false`, the URL will keep changing but will have no effect ont he browser's history. This option is automatically turned off when using `autoScrolling:false`.

- `menu`: (default `false`) A selector can be used to specify the menu to link with the sections. This way the scrolling of the sections will activate the corresponding element in the menu using the class `active`.
This won't generate a menu but will just add the `active` class to the element in the given menu with the corresponding anchor links.
In order to link the elements of the menu with the sections, an HTML 5 data-tag (`data-menuanchor`) will be needed to use with the same anchor links as used within the sections. Example:
```html
<ul id="myMenu">
    <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
    <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
    <li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
    <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
</ul>
```
```javascript
$('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu'
});
```

**Note:** the menu element should be placed outside the fullpage wrapper in order to avoid problem when using `css3:true`. Otherwise it will be appended to the `body` by the plugin itself.

- `navigation`: (default `false`) If set to `true`, it will show a navigation bar made up of small circles.

- `navigationPosition`: (default `none`) It can be set to `left` or `right` and defines which position the navigation bar will be shown (if using one).

- `navigationTooltips`: (default []) Defines the tooltips to show for the navigation circles in case they are being used. Example: `navigationTooltips: ['firstSlide', 'secondSlide']`.

- `showActiveTooltip`: (default `false`) Shows a persistent tooltip for the actively viewed section in the vertical navigation.

- `slidesNavigation`: (default `false`) If set to `true` it will show a navigation bar made up of small circles for each landscape slider on the site.

- `slidesNavPosition`: (default `bottom`) Defines the position for the landscape navigation bar for sliders. Admits `top` and `bottom` as values. You may want to modify the CSS styles to determine the distance from the top or bottom as well as any other style such as color.

- `scrollOverflow`: (default `false`) defines whether or not to create a scroll for the section in case its content is bigger than the height of it. When set to `true`, your content will be wrapped by the plugin. Consider using delegation or load your other scripts in the `afterRender` callback.
In case of setting it to `true`, it requires the vendor plugin [`jquery.slimscroll.min`](https://github.com/rochal/jQuery-slimScroll) and it should be loaded before the fullPage.js plugin. For example:

```html
<script type="text/javascript" src="vendors/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

- `sectionSelector`: (default `.section`) Defines the jQuery selector used for the plugin sections. It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js..

- `slideSelector`: (default `.slide`)  Defines the jQuery selector used for the plugin slides.  It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.

- `responsive`: (default `0`)  A normal scroll (`autoScrolling:false`) will be used under the defined width in pixels. A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS. For example, if set to 900, whenever the browser's width is less than 900 the plugin will scroll like a normal site.

## Methods

### moveSectionUp()
Scrolls one section up:
```javascript
$.fn.fullpage.moveSectionUp();
```
---
### moveSectionDown()
Scrolls one section down:
```javascript
$.fn.fullpage.moveSectionDown();
```
---
### moveTo(section, slide)
Scrolls the page to the given section and slide. The first slide, the visible one by default, will have index 0.
```javascript
/*Scrolling to the section with the anchor link `firstSlide` and to the 2nd Slide */
$.fn.fullpage.moveTo('firstSlide', 2);

```

```javascript
//Scrolling to the 3rd section in the site
$.fn.fullpage.moveTo(3, 0);

//Which is the same as
$.fn.fullpage.moveTo(3);
```
---
### moveSlideRight()
Scrolls the horizontal slider of the current section to the next slide:
```javascript
$.fn.fullpage.moveSlideRight();
```
---
### moveSlideLeft()
Scrolls the horizontal slider of the current section to the previous slide:
```javascript
$.fn.fullpage.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
Sets the scrolling configuration in real time.
Defines the way the page scrolling behaves. If it is set to `true`, it will use the "automatic" scrolling, otherwise, it will use the "manual" or "normal" scrolling of the site. Be careful when combining this option with `scrollOverflow` set to true, as it might be difficult to scroll using the mouse wheel or the trackpad when the section is scrollable.

```javascript
$.fn.fullpage.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
Sets the value for the option `fitToSection` determining whether to fit the section in the screen or not.

```javascript
$.fn.fullpage.setFitToSection(false);
```
---
### setAllowScrolling(boolean, [directions])
Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures (which is active by default).

- `directions`: (optional parameter) Admitted values: `all`, `up`, `down`, `left`, `right` or a combination of them separated by commas like `down, right`. It defines the direction for which the scrolling will be enabled or disabled.

```javascript

//disabling scrolling
$.fn.fullpage.setAllowScrolling(false);

//disabling scrolling down
$.fn.fullpage.setAllowScrolling(false, 'down');

//disabling scrolling down and right
$.fn.fullpage.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean)
Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys (which is active by default).

```javascript
$.fn.fullpage.setKeyboardScrolling(false);
```
---
### setRecordHistory(boolean)
Defines whether to record the history for each hash change in the URL.

```javascript
$.fn.fullpage.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
Defines the scrolling speed in milliseconds.

```javascript
$.fn.fullpage.setScrollingSpeed(700);
```
---
### destroy(type)
Destroys the plugin events and optionally its HTML markup and styles.
Ideal to use when using AJAX to load content. ()

- `type`: can be empty or `all`. If `all` is passed, the HTML markup and styles used by fullpage.js will be removed. This way the original HTML markup, the one used before any plugin modification is made, will be maintained.

```javascript
//destroy any plugin event (scrolls, hashchange in the URL...)
$.fn.fullpage.destroy();

//destroy any plugin event and any plugin modification done over your original HTML markup.
$.fn.fullpage.destroy('all');
```
---
### reBuild()
Updates the DOM structure to fit the new window size or its contents.
Ideal to use in combination with AJAX calls or external changes in the DOM structure of the site.

```javascript
$.fn.fullpage.reBuild();
```


## Callbacks
###afterLoad (`anchorLink`, `index`)
Callback fired once the sections have been loaded, after the scrolling has ended.
Parameters:

- `anchorLink`: anchorLink corresponding to the section.
- `index`: index of the section. Starting from 1.

In case of not having anchorLinks defined in the plugin the `index` parameter would be the only one to use.

Example:

```javascript
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			//using index
			if(index == 3){
				alert("Section 3 ended loading");
			}

			//using anchorLink
			if(anchorLink == 'secondSlide'){
				alert("Section 2 ended loading");
			}
		}
	});
```
---
###onLeave (`index`, `nextIndex`, `direction`)
This callback is fired once the user leaves a section, in the transition to the new section.

Parameters:

- `index`: index of the leaving section. Starting from 1.
- `nextIndex`: index of the destination section. Starting from 1.
- `direction`: it will take the values `up` or `down` depending on the scrolling direction.

Example:

```javascript
	$('#fullpage').fullpage({
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			//after leaving section 2
			if(index == 2 && direction =='down'){
				alert("Going to section 3!");
			}

			else if(index == 2 && direction == 'up'){
				alert("Going to section 1!");
			}
		}
	});
```

---
###afterRender()
This callback is fired just after the structure of the page is generated. This is the callback you want to use to initialize other plugins or fire any code which requires the document to be ready (as this plugin modifies the DOM to create the resulting structure).

Example:

```javascript
	$('#fullpage').fullpage({
		afterRender: function(){
			var pluginContainer = $(this);
			alert("The resulting DOM structure is ready");
		}
	});
```
---
###afterResize()
This callback is fired after resizing the browser's window. Just after the sections are resized.

Example:

```javascript
	$('#fullpage').fullpage({
		afterResize: function(){
			var pluginContainer = $(this);
			alert("The sections have finished resizing");
		}
	});
```
---
###afterSlideLoad (`anchorLink`, `index`, `slideAnchor`, `slideIndex`)
Callback fired once the slide of a section have been loaded, after the scrolling has ended.
Parameters:

- `anchorLink`: anchorLink corresponding to the section.
- `index`: index of the section. Starting from 1.
- `slideAnchor`: anchor corresponding to the slide (in case there is)
- `slideIndex`: index of the slide. Starting from 1. (the default slide doesn't count as slide, but as a section)

In case of not having anchorLinks defined for the slide or slides the `slideIndex` parameter would be the only one to use.
Example:

```javascript
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

		afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
			var loadedSlide = $(this);

			//first slide of the second section
			if(anchorLink == 'secondPage' && slideIndex == 1){
				alert("First slide loaded");
			}

			//second slide of the second section (supposing #secondSlide is the
			//anchor for the second slide
			if(index == 2 && slideIndex == 'secondSlide'){
				alert("Second slide loaded");
			}
		}
	});
```


---
###onSlideLeave (`anchorLink`, `index`, `slideIndex`, `direction`)
This callback is fired once the user leaves an slide to go to another, in the transition to the new slide.
Parameters:

- `anchorLink`: anchorLink corresponding to the section.
- `index`: index of the section. Starting from 1.
- `slideIndex`: index of the slide. **Starting from 0.**
- `direction`: takes the values `right` or `left` depending on the scrolling direction.


Example:

```javascript
	$('#fullpage').fullpage({
		onSlideLeave: function( anchorLink, index, slideIndex, direction){
			var leavingSlide = $(this);

			//leaving the first slide of the 2nd Section to the right
			if(index == 2 && slideIndex == 0 && direction == 'right'){
				alert("Leaving the fist slide!!");
			}

			//leaving the 3rd slide of the 2nd Section to the left
			if(index == 2 && slideIndex == 2 && direction == 'left'){
				alert("Going to slide 2! ");
			}
		}
	});
```
#Resources
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
- [fullPage.js plugin for October CMS](http://octobercms.com/plugin/freestream-parallax)
- [fullPage.js wordpress plugin](https://wordpress.org/plugins/wp-fullpage/)
- [Integrating fullPage.js with Wordpress (Tutorial)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## Who is using fullPage.js
If you want your page to be listed here. Please <a href="mailto:alvaro@alvarotrigo.com">contact me</a> with the URL.

[![Sony](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony.gif)](http://www.sony-asia.com/microsite/mdr-10/)
![Vodafone](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone.png)
[![British Airways](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-fullpage.gif)](http://www.britishairways.com/en-gb/information/travel-classes/experience-our-cabins)
[![Mi](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi.png)](http://www.mi.com/shouhuan)
[![scribe](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/scribe.png)](http://usescribe.com/)
[![matrimonia](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/matrimonia.png)](http://www.matrimonia.rs/)
[![redd](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/redd.png)](http://www.getredd.com/)
[![redd](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym.png)](http://www.sanyang.com.tw/service/Conception/)

- http://www.britishairways.com/en-gb/information/travel-classes/experience-our-cabins
- http://www.sony-asia.com/microsite/mdr-10/
- http://www.saltaboombox.com.ar
- http://snapzheimer.org/
- http://www.battlefield.com/
- http://www.kibey.com/
- http://www.newjumoconcept.com/
- http://promo.prestigio.com/grace1/
- http://www.mi.com/shouhuan
- https://moneytree.jp/
- http://torchbrowser.com/
- http://leafcutter.com.au/
- http://thekorner.fr/
- http://ymcadc.org/AnnualReport/
- http://www.restaurantwoods.nl/
- http://lingualeo.com/
- http://www.getikto.com/
- http://charlotteaimes.com/
- http://collection.madeofsundays.com
- http://thiswasmybest.com/
- http://jacoberiksson.se/
- http://coppertino.com/
- https://cloudmagic.com/
- http://www.dividendsolar.com/
- http://www.thespecialists.be
- http://brianingle.webflow.com/
- http://lawinenstift.com/
- http://wtfdesign.pl/
- http://www.swenk.me/
- http://educationaboveall.org/
- http://bnacademy.com.au/
- http://rockercreative.com/
- http://wantnova.com/
- http://usescribe.com/
- http://lucilecazanave.com/
- http://overallstudio.co.il/
- http://boxx.hk/
- http://medlive.com
- http://bearonunicycle.com/
- http://rawmilk.dk/en/
- http://www.nearpod.com/
- http://www.famavolat.com/
- http://www.carpetloverclub.net/
- http://www.sanyang.com.tw/service/Conception/
- http://www.batzaya.net/
- http://www.graphicid.dk/
- http://hed.citinet.pro/
- http://www.jukstapoz.com/
- http://portfolio.io.utwente.nl/student/dijkavan/
- http://www.omqcomics.com/
- http://www.carlphot.com/
- http://medissix.com/
- http://trasmissione-energia.terna.it/
- http://www.thefoodmovie.com/
- http://www.villareginateodolinda.it
- http://www.kesstrio.com
- http://willontheway.com/
- http://www.karmaffne.com/
- http://fossdistillery.is
- http://www.conversionculture.com/
- http://ded-morozz.kiev.ua/
- http://www.fergalkeenan.com
- http://spell-star.appspot.com/
- http://yizeng.me/
- http://neolearning.eu/
- http://unabridgedsoftware.com/
- http://wc2014.plnwrx.com/
- http://organice.io/
- http://alchemy-research.com/
- http://www.cima-ecuador.com/
- http://atlanticcorp.us/
- http://moysport.ru/
- http://www.norttilaakso.fi/
- http://wcfixtures.co.uk/
- http://www.dopehustleinc.com/default.php
- http://themify.me/demo/#theme=fullpane
- http://bragdonfarm.com/
- http://www.paperdeermusic.com/
- http://dancingroad.com
- http://www.camanihome.com/
- http://www.exapoint.ch/

You can find another list [here](http://libscore.com/#$.fn.fullpage).

## Donations
Donations would be more than welcome :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## License

(The MIT License)

Copyright (c) 2013 Alvaro Trigo &lt;alvaro@alvarotrigo.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
