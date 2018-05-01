# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<p align="center">
  <span>English</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a>
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v2.9.7-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Live demo](http://alvarotrigo.com/fullPage/)
- [Wordpress theme](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](http://alvarotrigo.com/fullPage/extensions/)
- [Frequently Answered Questions](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

---

A simple and easy to use library to create fullscreen scrolling websites (also known as single page websites or onepage sites).
It allows the creation of fullscreen scrolling websites, as well as adding some landscape sliders inside the sections of the site.

Invite me to a coffee
[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Customizations of the library and urgent changes are available upon request for some reasonable price. <a href="http://alvarotrigo.com/#contact-page">Contact me</a>.

- [Introduction](https://github.com/alvarotrigo/fullPage.js#introduction)
- [Compatibility](https://github.com/alvarotrigo/fullPage.js#compatibility)
- [Usage](https://github.com/alvarotrigo/fullPage.js#usage)
  - [Creating links to sections or slides](https://github.com/alvarotrigo/fullPage.js#creating-links-to-sections-or-slides)
  - [Creating smaller or bigger sections](https://github.com/alvarotrigo/fullPage.js#creating-smaller-or-bigger-sections)
  - [State classes added by fullpage.js](https://github.com/alvarotrigo/fullPage.js#state-classes-added-by-fullpagejs)
  - [Lazy loading](https://github.com/alvarotrigo/fullPage.js#lazy-loading)
  - [Auto play/pause embedded media](https://github.com/alvarotrigo/fullPage.js#auto-playpause-embedded-media)
  - [Use extensions](https://github.com/alvarotrigo/fullPage.js#use-extensions)
- [Options](https://github.com/alvarotrigo/fullPage.js#options)
- [Methods](https://github.com/alvarotrigo/fullPage.js#methods)
- [Callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks)
- [Reporting issues](https://github.com/alvarotrigo/fullPage.js#reporting-issues)
- [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js#contributing-to-fullpagejs)
- [Changelog](https://github.com/alvarotrigo/fullPage.js#changelog)
- [Build tasks](https://github.com/alvarotrigo/fullPage.js#build-tasks)
- [Resources](https://github.com/alvarotrigo/fullPage.js#resources)
- [Who is using fullpage.js](https://github.com/alvarotrigo/fullPage.js#who-is-using-fullpagejs)
- [Donations](https://github.com/alvarotrigo/fullPage.js#donations)
- [Sponsors](https://github.com/alvarotrigo/fullPage.js#sponsors)
- [License](https://github.com/alvarotrigo/fullPage.js#license)

## Introduction
Suggestion are more than welcome, not only for feature requests but also for coding style improvements.
Let's make this a great library to make people's lives easier!

## Compatibility
fullPage.js is fully functional on all modern browsers, as well as some old ones such as Internet Explorer 8, 9, Opera 12, etc.
It works with browsers with CSS3 support and with the ones which don't have it, making it ideal for old browsers compatibility.
It also provides touch support for mobile phones, tablets and touch screen computers.

[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack2.png)](http://www.browserstack.com/)

Special thanks to [Browserstack](http://www.browserstack.com/) for supporting fullpage.js.

## Usage
As you can see in the example files, you will need to include:
 - [jQuery library](http://jquery.com/). (1.6.0 minimum)
 - The JavaScript file `jquery.fullPage.js` (or its minified version `jquery.fullPage.min.js`)
 - The css file `jquery.fullPage.css`

 **Optionally**, when using `css3:false`, you can add the [jQuery UI library](http://jqueryui.com/) in case you want to use other easing effects apart from the ones included in the jQuery library (`linear` and `swing` ) or the one included by default in fullPage.js (`easeInOutCubic`).

### Install using bower or npm
**Optionally**, you can install fullPage.js with bower or npm if you prefer:

Terminal:
```shell
// With bower
bower install fullpage.js

// With npm
npm install fullpage.js
```

### Including files:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- This following line is optional. Only necessary if you use the option css3:false and you want to use other easing effects rather than "linear", "swing" or "easeInOutCubic". -->
<script src="vendors/jquery.easings.min.js"></script>


<!-- This following line is only necessary in the case of using the option `scrollOverflow:true` -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="jquery.fullPage.js"></script>
```

### Optional use of CDN
If you prefer to use a CDN to load the needed files, fullPage.js is in CDNJS:
https://cdnjs.com/libraries/fullPage.js

### Required HTML structure
Start your HTML document with the compulsory [HTML DOCTYPE declaration](http://www.corelangs.com/html/introduction/doctype.html) on the 1st line of your HTML code. You might have troubles with sections heights otherwise. The examples provided use HTML 5 doctype `<!DOCTYPE html>`.

Each section will be defined with an element containing the `section` class.
The active section by default will be the first section, which is taken as the home page.

Sections should be placed inside a wrapper (`<div id="fullpage">` in this case). The wrapper can not be the `body` element.
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

In order to create a landscape slider within a section, each slide will be defined by default with an element containing the `slide` class:
```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
````
You can see a fully working example of the HTML structure in the [`demoPage.html` file](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/demoPage.html).

### Initialization
All you need to do is call fullPage.js inside a `$(document).ready` function:

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
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
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
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
```

### Creating links to sections or slides
If you are using fullPage.js with anchor links for the sections (using the `anchors` option or the attribute `data-anchor` in each section), then you will be able to use anchor links also to navigate directly to a certain slide inside a section.

This would be an example of a link with an anchor: http://alvarotrigo.com/fullPage/#secondPage/2 (which is the URL you will see once you access to that section/slide manually)
Notice the last part of the URL ends in `#secondPage/2`.

Having the following initialization:

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage']
	});
});
```

The anchor at the end of the URL `#secondPage/2` defines the section and slide of destination respectively. In the previous URL, the section of destination will be the one defined with the anchor `secondPage` and the slide will be the 2nd slide, as we are using the index `2` for it. (the fist slide of a section has index 0, as technically it is a section).

We could have used a custom anchor for the slide instead of its index if we would have used the attribute `data-anchor` on the HTML markup like so:

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
In this last case, the URL we would use would be `#secondPage/slide3`, which is the equivalent to our previous `#secondPage/2`.

Note that section anchors can also be defined in the same way, by using the `data-anchor` attribute, if no `anchors` array is provided.

**Be careful!** `data-anchor` tags can not have the same value as any ID element on the site (or NAME element for IE).

### Creating smaller or bigger sections
[Demo](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js provides a way to remove the full height restriction from its sections and slides. It is possible to create sections which height is smaller or bigger than the viewport. This is ideal for footers.
It is important to realise that it doesn't make sense to have all of your sections using this feature. If there is more than one section in the initial load of the site, fullPage.js won't scroll at all to see the next one as it will be already in the viewport.

To create smaller sections just use the class `fp-auto-height` in the section you want to apply it. It will then take the height defined by your section/slide content.

```html
<div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div>
```

#### Responsive auto height sections
[Demo](https://codepen.io/alvarotrigo/pen/WZmMgZ) A responsive auto height can be applied by using the class `fp-auto-height-responsive`. This way sections will be fullscreen until the responsive mode gets fired. Then they'll take the size required by their content, which could be bigger or smaller than the viewport.

### State classes added by fullpage.js
Fullpage.js adds multiple classes in different elements to keep a record of the status of the site:

- `active` is added the current visible section and slide.
- `active` is added to the current menu element (if using the `menu` option).
- A class of the form `fp-viewing-SECTION-SLIDE` is added to the `body` element of the site. (eg: [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) The `SECTION` and `SLIDE` parts will be the anchors (or indexes if no anchor is provided) of the current section and slide.
- `fp-responsive` is added to the `body` element when the entering in the responsive mode
- `fp-enabled` is added to the `html` element when fullpage.js is enabled. (and removed when destroyed).
- `fp-destroyed` is added to the fullpage.js container when fullPage.js is destroyed.

### Lazy Loading
[Demo](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js provides a way to lazy load images, videos and audio elements so they won't slow down the loading of your site or unnecessarily waste data transfer.
When using lazy loading, all these elements will only get loaded when entering in the viewport.
To enable lazy loading all you need to do is change your `src` attribute to `data-src` as shown below:

```
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

If you already use another lazy load solution which uses `data-src` as well, you can disable the fullPage.js lazy loading by setting the option `lazyLoading: false`.

### Auto play/pause embedded media

**Note**: the autoplay feature might not work on some mobile devices depending on the OS and browser (i.e. [Safari on iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/) version < 10.0).

#### Play on section/slide load:
Using the attribute `autoplay` for videos or audio, or the param `autoplay=1` for youtube iframes will result in the media element playing on page load.
In order to play it on section/slide load use instead the attribute `data-autoplay`. For example:

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### Pause on leave
Embedded HTML5 `<video>` / `<audio>`  and Youtube iframes are automatically paused when you navigate away from a section or slide. This can be disabled by using the attribute `data-keepplaying`. For example:
```html
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

### Use extensions
fullpage.js [provides a set of extensions](http://alvarotrigo.com/fullPage/extensions/) you can use to enhance its default features. All of them are listed as [fullpage.js options](https://github.com/alvarotrigo/fullPage.js#options).

Extensions requires you to use the minified file [`jquery.fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/jquery.fullpage.extensions.min.js) that is inside the [`dist` folder](https://github.com/alvarotrigo/fullPage.js/tree/master/dist) instead of the usual fullPage.js file (`jquery.fullpage.js` or `jquery.fullpage.min.js`).

Once you adquire the extension file, you will need to add it before fullPage. For example, if I want to use the Continuous Horizontal extension, I would have include the extension file and then the extensions version of the fullPage file.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/jquery.fullpage.extensions.min.js"></script>
```

An activation key and a license key will be required for each extension. [See more details about it here](https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension).

Then you will be able to use and configure them as explained in [options](https://github.com/alvarotrigo/fullPage.js#options).

## Options

- `controlArrows`: (default `true`) Determines whether to use control arrows for the slides to move right or left.

- `verticalCentered`: (default `true`) Vertically centering of the content within sections. When set to `true`, your content will be wrapped by the library. Consider using delegation or load your other scripts in the `afterRender` callback.

- `scrollingSpeed`: (default `700`) Speed in milliseconds for the scrolling transitions.

- `sectionsColor`: (default `none`) Define the CSS `background-color` property for each section.
Example:
```javascript
$('#fullpage').fullpage({
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (default `[]`) Defines the anchor links (#example) to be shown on the URL for each section. Anchors value should be unique. The position of the anchors in the array will define to which sections the anchor is applied. (second position for second section and so on). Using anchors forward and backward navigation will also be possible through the browser. This option also allows users to bookmark a specific section or slide. **Be careful!** anchors can not have the same value as any ID element on the site (or NAME element for IE).
Now anchors can be defined directly in the HTML structure by using the attribute `data-anchor` as explained here.

- `lockAnchors`: (default `false`) Determines whether anchors in the URL will have any effect at all in the library. You can still using anchors internally for your own functions and callbacks, but they won't have any effect in the scrolling of the site. Useful if you want to combine fullPage.js with other plugins using anchor in the URL.

**Important** It is helpful to understand that the values in the `anchors` option array correlate directly to the element with the class of `.section` by it's position in the markup.

- `easing`: (default `easeInOutCubic`) Defines the transition effect to use for the vertical and horizontal scrolling.
It requires the file `vendors/jquery.easings.min.js` or [jQuery UI](http://jqueryui.com/) for using some of [its transitions](http://api.jqueryui.com/easings/). Other libraries could be used instead.

- `easingcss3`: (default `ease`) Defines the transition effect to use in case of using `css3:true`. You can use the [pre-defined ones](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (such as `linear`, `ease-out`...) or create your own ones using the `cubic-bezier` function. You might want to use [Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/) for it.

- `loopTop`: (default `false`) Defines whether scrolling up in the first section should scroll to the last one or not.

- `loopBottom`: (default `false`) Defines whether scrolling down in the last section should scroll to the first one or not.

- `loopHorizontal`: (default `true`) Defines whether horizontal sliders will loop after reaching the last or previous slide or not.

- `css3`: (default `true`). Defines whether to use JavaScript or CSS3 transforms to scroll within sections and slides. Useful to speed up the movement in tablet and mobile devices with browsers supporting CSS3. If this option is set to `true` and the browser doesn't support CSS3, a jQuery fallback will be used instead.

- `autoScrolling`: (default `true`) Defines whether to use the "automatic" scrolling or the "normal" one. It also has affects the way the sections fit in the browser/device window in tablets and mobile phones.

- `fitToSection`: (default `true`) Determines whether or not to fit sections to the viewport or not. When set to `true` the current active section will always fill the whole viewport. Otherwise the user will be free to stop in the middle of a section.

- `fitToSectionDelay`: (default 1000). If `fitToSection` is set to true, this delays
the fitting by the configured milliseconds.

- `scrollBar`: (default `false`) Determines whether to use scrollbar for the site or not. In case of using scroll bar, the `autoScrolling` functionality will still work as expected. The user will also be free to scroll the site with the scroll bar and fullPage.js will fit the section in the screen when scrolling finishes.

- `paddingTop`: (default `0`) Defines the top padding for each section with a numerical value and its measure (paddingTop: '10px', paddingTop: '10em'...) Useful in case of using a fixed header.

- `paddingBottom`: (default `0`) Defines the bottom padding for each section with a numerical value and its measure (paddingBottom: '10px', paddingBottom: '10em'...). Useful in case of using a fixed footer.

- `fixedElements`: (default `null`) Defines which elements will be taken off the scrolling structure of the plugin which is necessary when using the `css3` option to keep them fixed. It requires a string with the jQuery selectors for those elements. (For example: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (default `null`) If you want to avoid the auto scroll when scrolling over some elements, this is the option you need to use. (useful for maps, scrolling divs etc.) It requires a string with the jQuery selectors for those elements. (For example: `normalScrollElements: '#element1, .element2'`). This option should not be applied to any section/slide element itself.

- `normalScrollElementTouchThreshold` : (default `5`) Defines the threshold for the number of hops up the html node tree Fullpage will test to see if `normalScrollElements` is a match to allow scrolling functionality on divs on a touch device. (For example: `normalScrollElementTouchThreshold: 3`)

- `bigSectionsDestination`: (default `null`) Defines how to scroll to a section which size is bigger than the viewport. By default fullPage.js scrolls to the top if you come from a section above the destination one and to the bottom if you come from a section below the destination one. Possible values are `top`, `bottom`, `null`.

- `keyboardScrolling`: (default `true`) Defines if the content can be navigated using the keyboard.

- `touchSensitivity`: (default `5`) Defines a percentage of the browsers window width/height, and how far a swipe must measure for navigating to the next section / slide

- `continuousVertical`: (default `false`) Defines whether scrolling down in the last section or should scroll down to the first one and if scrolling up in the first section should scroll up to the last one. Not compatible with `loopTop`, `loopBottom` or any scroll bar present in the site (`scrollBar:true` or `autoScrolling:false`).

- `continuousHorizontal`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether sliding right in the last slide should slide right to the first one or not, and if scrolling left in the first slide should slide left to the last one or not. Not compatible with `loopHorizontal`. Requires fullpage.js >= 2.8.3.

- `scrollHorizontally`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether to slide horizontally within sliders by using the mouse wheel or trackpad. Ideal for story telling. Requires fullpage.js >= 2.8.3.

- `interlockedSlides`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Determines whether moving one horizontal slider will force the sliding of sliders in other section in the same direction. Possible values are `true`, `false` or an array with the interlocked sections. For example `[1,3,5]` starting by 1. Requires fullpage.js >= 2.8.3.

- `dragAndMove`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Enables or disables the dragging and flicking of sections and slides by using mouse or fingers. Requires fullpage.js >= 2.8.9. Possible values are:
  - `true`: enables the feature.
  - `false`: disables the feature.
  - `vertical`: enables the feature only vertically.
  - `horizontal`: enables the feature only horizontally.
  - `fingersonly`: enables the feature for touch devices only.
  - `mouseonly`: enables the feature for desktop devices only (mouse and trackpad).

- `offsetSections`: (default `false`)[Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Provides a way to use non full screen sections based on percentage. Ideal to show visitors there's more content in the site by showing part of the next or previous section. Requires fullPage.js >= 2.8.8
To define the percentage of each section the attribute `data-percentage` must be used. The centering of the section in the viewport can be determined by using a boolean value in the attribute `data-centered` (default to `true` if not specified). For example:
``` html
    <div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: (default `false`). [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether or not to reset every slider after leaving its section. Requires fullpage.js >= 2.8.3.

- `fadingEffect`: (default `false`). [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether to use a fading effect or not instead of the default scrolling one. Possible values are `true`, `false`, `sections`, `slides`. It can therefore be applied just vertically or horizontally, or to both at the time. Requires fullpage.js >= 2.8.6.

- `animateAnchor`: (default `true`) Defines whether the load of the site when given an anchor (#) will scroll with animation to its destination or will directly load on the given section.

- `recordHistory`: (default `true`) Defines whether to push the state of the site to the browser's history. When set to `true` each section/slide of the site will act as a new page and the back and forward buttons of the browser will scroll the sections/slides to reach the previous or next state of the site. When set to `false`, the URL will keep changing but will have no effect on the browser's history. This option is automatically turned off when using `autoScrolling:false`.

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

- `navigationTooltips`: (default []) Defines the tooltips to show for the navigation circles in case they are being used. Example: `navigationTooltips: ['firstSlide', 'secondSlide']`. You can also define them by using the attribute `data-tooltip` in each section if you prefer.

- `showActiveTooltip`: (default `false`) Shows a persistent tooltip for the actively viewed section in the vertical navigation.

- `slidesNavigation`: (default `false`) If set to `true` it will show a navigation bar made up of small circles for each landscape slider on the site.

- `slidesNavPosition`: (default `bottom`) Defines the position for the landscape navigation bar for sliders. Admits `top` and `bottom` as values. You may want to modify the CSS styles to determine the distance from the top or bottom as well as any other style such as color.

- `scrollOverflow`: (default `false`) (not compatible with IE 8) defines whether or not to create a scroll for the section/slide in case its content is bigger than the height of it. When set to `true`, your content will be wrapped by the plugin. Consider using delegation or load your other scripts in the `afterRender` callback.
In case of setting it to `true`, it requires the vendor library [`scrolloverflow.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/vendors/scrolloverflow.min.js). This file has to be loaded before the fullPage.js plugin, but after jQuery.
For example:

```html
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

In order to prevent fullpage.js from creating the scrollbar in certain sections or slides use the class `fp-noscroll`. For example: `<div class="section fp-noscroll">`

You can also prevent scrolloverflow from getting applied on responsive mode when using `fp-auto-height-responsive` in the section element.

- `scrollOverflowReset`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). When set to `true` it scrolls up the content of the section/slide with scroll bar when leaving to another vertical section. This way the section/slide will always show the start of its content even when scrolling from a section under it.

- `scrollOverflowOptions`: when using scrollOverflow:true fullpage.js will make use of a forked and modified version of [iScroll.js library](https://github.com/cubiq/iscroll/). You can customize the scrolling behaviour by providing fullpage.js with the iScroll.js options you want to use. Check [its documentation](http://iscrolljs.com/) for more info.

- `sectionSelector`: (default `.section`) Defines the jQuery selector used for the plugin sections. It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.

- `slideSelector`: (default `.slide`)  Defines the jQuery selector used for the plugin slides.  It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.

- `responsiveWidth`: (default `0`)  A normal scroll (`autoScrolling:false`) will be used under the defined width in pixels. A class `fp-responsive` is added to the body tag in case the user wants to use it for his own responsive CSS. For example, if set to 900, whenever the browser's width is less than 900 the plugin will scroll like a normal site.

- `responsiveHeight`: (default `0`)  A normal scroll (`autoScrolling:false`) will be used under the defined height in pixels. A class `fp-responsive` is added to the body tag in case the user wants to use it for his own responsive CSS. For example, if set to 900, whenever the browser's height is less than 900 the plugin will scroll like a normal site.

- `responsiveSlides`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). When set to `true` slides will be turned into vertical sections when responsive mode is fired. (by using the `responsiveWidth` or `responsiveHeight` options detailed above). Requires fullpage.js >= 2.8.5.

- `parallax`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the parallax backgrounds effects on sections / slides. [Read more about how to apply the parallax option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax).

- `parallaxOptions`: (default: `{ type: 'reveal', percentage: 62, property: 'translate'}`). Allows to configure the parameters for the parallax backgrounds effect when using the option parallax:true. [Read more about how to apply the parallax option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax).

- `lazyLoading`: (default `true`) Lazy loading is active by default which means it will lazy load any media element containing the attribute `data-src` as detailed in the [Lazy Loading docs](https://github.com/alvarotrigo/fullPage.js#lazy-loading) . If you want to use any other lazy loading library you can disable this fullpage.js feature.

## Methods
You can see them in action [here](http://alvarotrigo.com/fullPage/examples/methods.html)

### moveSectionUp()
[Demo](http://codepen.io/alvarotrigo/pen/GJXNMN) Scrolls one section up:
```javascript
$.fn.fullpage.moveSectionUp();
```
---
### moveSectionDown()
[Demo](http://codepen.io/alvarotrigo/pen/jPvVZx) Scrolls one section down:
```javascript
$.fn.fullpage.moveSectionDown();
```
---
### moveTo(section, slide)
[Demo](http://codepen.io/alvarotrigo/pen/doqOmY) Scrolls the page to the given section and slide. The first slide, the visible one by default, will have index 0.
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
### silentMoveTo(section, slide)
[Demo](http://codepen.io/alvarotrigo/pen/doqOeY)
Exactly the same as [`moveTo`](https://github.com/alvarotrigo/fullPage.js#movetosection-slide) but in this case it performs the scroll without animation. A direct jump to the destination.
```javascript
/*Scrolling to the section with the anchor link `firstSlide` and to the 2nd Slide */
$.fn.fullpage.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[Demo](http://codepen.io/alvarotrigo/pen/Wvgoyz)
Scrolls the horizontal slider of the current section to the next slide:
```javascript
$.fn.fullpage.moveSlideRight();
```
---
### moveSlideLeft()
[Demo](http://codepen.io/alvarotrigo/pen/gpdLjW)
Scrolls the horizontal slider of the current section to the previous slide:
```javascript
$.fn.fullpage.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[Demo](http://codepen.io/alvarotrigo/pen/rVZWrR) Sets the scrolling configuration in real time.
Defines the way the page scrolling behaves. If it is set to `true`, it will use the "automatic" scrolling, otherwise, it will use the "manual" or "normal" scrolling of the site.

```javascript
$.fn.fullpage.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[Demo](http://codepen.io/alvarotrigo/pen/GJXNYm)
Sets the value for the option `fitToSection` determining whether to fit the section in the screen or not.

```javascript
$.fn.fullpage.setFitToSection(false);
```
---
### fitToSection()
[Demo](http://codepen.io/alvarotrigo/pen/JWWagj)
Scrolls to the nearest active section fitting it in the viewport.

```javascript
$.fn.fullpage.fitToSection();
```
---
### setLockAnchors(boolean)
[Demo](http://codepen.io/alvarotrigo/pen/yNxVRQ)
Sets the value for the option `lockAnchors` determining whether anchors will have any effect in the URL or not.

```javascript
$.fn.fullpage.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[Demo](http://codepen.io/alvarotrigo/pen/EjeNdq) Adds or remove the possibility of scrolling through sections/slides by using the mouse wheel/trackpad or touch gestures (which is active by default). Note this won't disable the keyboard scrolling. You
would need to use `setKeyboardScrolling` for it.

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
### setKeyboardScrolling(boolean, [directions])
[Demo](http://codepen.io/alvarotrigo/pen/GJXNwm) Adds or remove the possibility of scrolling through sections by using the keyboard (which is active by default).

- `directions`: (optional parameter) Admitted values: `all`, `up`, `down`, `left`, `right` or a combination of them separated by commas like `down, right`. It defines the direction for which the scrolling will be enabled or disabled.

```javascript
//disabling all keyboard scrolling
$.fn.fullpage.setKeyboardScrolling(false);

//disabling keyboard scrolling down
$.fn.fullpage.setKeyboardScrolling(false, 'down');

//disabling keyboard scrolling down and right
$.fn.fullpage.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[Demo](http://codepen.io/alvarotrigo/pen/rVZWQb) Defines whether to record the history for each hash change in the URL.

```javascript
$.fn.fullpage.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[Demo](http://codepen.io/alvarotrigo/pen/NqLbeY) Defines the scrolling speed in milliseconds.

```javascript
$.fn.fullpage.setScrollingSpeed(700);
```
---
### destroy(type)
[Demo](http://codepen.io/alvarotrigo/pen/bdxBzv) Destroys the plugin events and optionally its HTML markup and styles.
Ideal to use when using AJAX to load content.

- `type`: (optional parameter) can be empty or `all`. If `all` is passed, the HTML markup and styles used by fullpage.js will be removed. This way the original HTML markup, the one used before any plugin modification is made, will be maintained.

```javascript
//destroying all Javascript events created by fullPage.js (scrolls, hashchange in the URL...)
$.fn.fullpage.destroy();

//destroying all Javascript events and any modification done by fullPage.js over your original HTML markup.
$.fn.fullpage.destroy('all');
```
---
### reBuild()
Updates the DOM structure to fit the new window size or its contents.
 Ideal to use in combination with AJAX calls or external changes in the DOM structure of the site, specially when using `scrollOverflow:true`.

```javascript
$.fn.fullpage.reBuild();
```
---
### setResponsive(boolean)
[Demo](http://codepen.io/alvarotrigo/pen/WxOyLA) Sets the responsive mode of the page. When set to `true` the autoScrolling will be turned off and the result will be exactly the same one as when the `responsiveWidth` or `responsiveHeight` options  get fired.
```javascript
$.fn.fullpage.setResponsive(true);
```
---
### responsiveSlides.toSections()
[Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Requires fullpage.js >= 2.8.5.
Turns horizontal slides into vertical sections.

```javascript
$.fn.fullpage.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Requires fullpage.js >= 2.8.5.
Turns back the original slides (now converted into vertical sections) into horizontal slides again.

```javascript
$.fn.fullpage.responsiveSlides.toSlides();
```

## Callbacks
[Demo](http://codepen.io/alvarotrigo/pen/XbPNQv) You can see them in action [here](http://alvarotrigo.com/fullPage/examples/callbacks.html).

### afterLoad (`anchorLink`, `index`)
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
### onLeave (`index`, `nextIndex`, `direction`)
This callback is fired once the user leaves a section, in the transition to the new section.
Returning `false` will cancel the move before it takes place.

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

#### Cancelling the scroll before it takes place
You can cancel the scroll by returning `false` on the `onLeave` callback:

```javascript
$('#fullpage').fullpage({
	onLeave: function(index, nextIndex, direction){
		//it won't scroll if the destination is the 3rd section
		if(nextIndex == 3){
			return false;
		}
	}
});
```

---
### afterRender()
This callback is fired just after the structure of the page is generated. This is the callback you want to use to initialize other plugins or fire any code which requires the document to be ready (as this plugin modifies the DOM to create the resulting structure). See [FAQs](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions) for more info.

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
### afterResize()
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
### afterResponsive(`isResponsive`)
This callback is fired after fullpage.js changes from normal to responsive mode or from responsive mode to normal mode.

Parameters:

- `isResponsive`: boolean that determines if it enters into responsive mode (`true`) or goes back to normal mode (`false`).

Example:

```javascript
$('#fullpage').fullpage({
	afterResponsive: function(isResponsive){
		alert("Is responsive: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`anchorLink`, `index`, `slideAnchor`, `slideIndex`)
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
		//anchor for the second slide)
		if(index == 2 && slideIndex == 'secondSlide'){
			alert("Second slide loaded");
		}
	}
});
```


---
### onSlideLeave (`anchorLink`, `index`, `slideIndex`, `direction`, `nextSlideIndex`)
This callback is fired once the user leaves an slide to go to another, in the transition to the new slide.
Returning `false` will cancel the move before it takes place.

Parameters:

- `anchorLink`: anchorLink corresponding to the section.
- `index`: index of the section. Starting from 1.
- `slideIndex`: index of the slide. **Starting from 0.**
- `direction`: takes the values `right` or `left` depending on the scrolling direction.
- `nextSlideIndex`: index of the destination slide. **Starting from 0.**


Example:

```javascript
$('#fullpage').fullpage({
	onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
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

#### Cancelling a move before it takes place
You can cancel a move by returning `false` on the `onSlideLeave` callback. [Same as when canceling a movement with `onLeave`](https://github.com/alvarotrigo/fullPage.js#cancelling-the-scroll-before-it-takes-place).

# Reporting issues
1. Please, look for your issue before asking using the github issues search.
2. Make sure you use the latest fullpage.js version. No support is provided for older versions.
3. Use the [the Github Issues forum](https://github.com/alvarotrigo/fullPage.js/issues) to create issues.
4. **An isolated reproduction of the issue will be required.** Make use of [jsfiddle](http://jsfiddle.net/97tbk/418/) or [codepen](http://codepen.io/alvarotrigo/pen/NxyPPp) for it if possible.

# Contributing to fullpage.js
Please see [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelog
To see the list of recent changes, see [Releases section](https://github.com/alvarotrigo/fullPage.js/releases).

# Build tasks
Want to build fullpage.js distribution files? Please see [Build Tasks](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# Resources
- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Vue.js wrapper component](https://github.com/alvarotrigo/vue-fullpage.js)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
- [fullPage.js plugin for October CMS](http://octobercms.com/plugin/freestream-parallax)
- [fullPage.js wordpress plugin](https://wordpress.org/plugins/wp-fullpage/)
- [fullPage.js Angular2 directive](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angular directive](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli addon](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Adaptation for Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Integrating fullPage.js with Wordpress (Tutorial)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## Who is using fullPage.js
If you want your page to be listed here, please <a href="mailto:alvaro@alvarotrigo.com">contact me</a> with the URL.

[![Google](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/google.png)](http://www.yourprimer.com/)
[![BBC](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bbc-2.png)](http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02)
[![eBay](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ebay.png)](http://pages.ebay.com/design/)
![Sony](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony.gif)
![Vodafone](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone.png)
![British Airways](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-fullpage.gif)
![McDonalds](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mcdonalds.png)
![EA](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ea.png)
[![Vogue](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vogue.png)](http://www.vogue.fr/chaumet-histoires-de-liens)
[![Mi](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi.png)](http://www.mi.com/shouhuan)
[![redd](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym.png)](http://www.sanyang.com.tw/service/Conception/)
[![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti.gif)](http://www.bugatti.com/veyron/veyron-164/)
[![eDarling](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling.png)](https://www.edarling.de/)

- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- http://pages.ebay.com/design/
- http://www.yourprimer.com/
- http://www.vogue.fr/chaumet-histoires-de-liens
- http://burntmovie.com/
- http://www.bugatti.com/veyron/veyron-164/
- http://www.newjumoconcept.com/
- http://www.shootinggalleryasia.com/
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://www.mi.com/shouhuan
- http://www.commoditiesdemystified.info/en/
- http://torchbrowser.com/
- http://thekorner.fr/
- http://www.restaurantwoods.nl/
- https://www.edarling.de/
- http://urban-walks.com/
- http://lingualeo.com/
- http://charlotteaimes.com/
- http://collection.madeofsundays.com
- http://thiswasmybest.com/
- http://www.boxreload.com/
- http://educationaboveall.org/
- http://camfindapp.com/
- http://rockercreative.com/
- http://usescribe.com/
- http://lucilecazanave.com/
- http://boxx.hk/
- http://bearonunicycle.com/
- http://rawmilk.dk/en/
- http://www.famavolat.com/
- http://www.carpetloverclub.com/
- http://www.sanyang.com.tw/service/Conception/
- http://www.batzaya.net/
- http://www.graphicid.dk/
- http://www.carlphot.com/
- http://medissix.com/
- http://trasmissione-energia.terna.it/
- http://www.thefoodmovie.com/
- http://www.villareginateodolinda.it
- http://www.kesstrio.com
- http://fossdistillery.is
- http://ded-morozz.kiev.ua/
- http://unabridgedsoftware.com/
- http://atlanticcorp.us/
- http://moysport.ru/
- http://themify.me/demo/#theme=fullpane
- http://dancingroad.com
- http://www.camanihome.com/
- https://life2film.com/en/

You can find another list [here](http://libscore.com/#$.fn.fullpage).

## Donations
Donations would be more than welcome :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Sponsors
Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://alvarotrigo.com/#contact)]

[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath2.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack2.png)](http://www.browserstack.com/)

## License

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification )

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
