# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.png)

<p align="center">
  <span>English</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese#fullpagejs">繁體中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/simplified-chinese#fullpagejs">简体中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese#fullpagejs"> 日本語</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese#fullpagejs">Português Brasileiro</a>
</p>

<p align="center">
	Available for <a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>, <a href="https://github.com/alvarotrigo/react-fullpage">React</a> and <a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>.
</p>

---

![fullPage.js version](https://img.shields.io/badge/fullPage.js-v4.0.29-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
[![Minzipped Size](https://img.shields.io/bundlephobia/minzip/fullpage.js)](https://bundlephobia.com/package/fullpage.js)
&nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Demo online](https://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/qqabrp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress plugin for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [Frequently Answered Questions](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
- [[Migration from fullPage v3 to fullpage v4]](https://alvarotrigo.com/fullPage/help/migration-from-fullpage-3/)
---

A simple and easy to use library that creates fullscreen scrolling websites (also known as single page websites or onepage sites) and adds landscape sliders inside the sections of the site.

- [Introduction](https://github.com/alvarotrigo/fullPage.js#introduction)
- [Compatibility](https://github.com/alvarotrigo/fullPage.js#compatibility)
- [License](https://github.com/alvarotrigo/fullPage.js#license)
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

## Introduction
Suggestion are more than welcome, not only for feature requests but also for coding style improvements.
Let's make this a great library to make people's lives easier!

## Compatibility
fullPage.js is fully functional on all modern browsers and with IE 11. If you need to support IE < 11 consider using [fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2).
It also provides touch support for mobile phones, tablets and touch screen computers.

Special thanks to [Browserstack](https://www.browserstack.com/) for supporting fullpage.js.

## License

### Commercial license
If you want to use fullPage to develop non open sourced sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Which means, you won't have to change your whole application source code to an open source license. [[Purchase a Fullpage Commercial License]](https://alvarotrigo.com/fullPage/pricing/)

### Open source license
If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use fullPage under the terms of the GPLv3.

**You will have to provide a prominent notice that fullPage.js is in use. The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification).

[Read more about fullPage's license](https://alvarotrigo.com/fullPage/pricing/).

## Usage
As you can see in the example files, you will need to include:
 - The JavaScript file `fullpage.js` (or its minified version `fullpage.min.js`)
 - The css file `fullpage.css`

 **Optionally**, when using `css3:false`, you can add the [easings file](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js) in case you want to use other easing effects apart from the one included in the library (`easeInOutCubic`).

### Install using bower or npm
**Optionally**, you can install fullPage.js with bower or npm if you prefer:

Terminal:
```shell
// With bower
bower install fullpage.js

// With npm
npm install fullpage.js
```

### Including files
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- This following line is optional. Only necessary if you use the option css3:false and you want to use other easing effects rather than "easeInOutCubic". -->
<script src="vendors/easings.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

Using Webpack, Browserify or Require.js? Check [how to use fullPage.js with module loaders](https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js).

### Optional use of CDN
If you prefer to use a CDN to load the needed files, fullPage.js is in CDNJS:
https://cdnjs.com/libraries/fullPage.js

### Required HTML structure
Start your HTML document with the compulsory [HTML DOCTYPE declaration](https://www.corelangs.com/html/introduction/doctype.html) on the 1st line of your HTML code. You might have troubles with sections heights otherwise. The examples provided use HTML 5 doctype `<!DOCTYPE html>`.

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
```

You can see a fully working example of the HTML structure in the [`simple.html` file](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html).

### Initialization

#### Initialization with Vanilla Javascript
All you need to do is call fullPage.js before the closing `</body>` tag.

```javascript
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});
```

#### Initialization with jQuery
You can use fullpage.js as a jQuery plugin if you want to!

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	// Example of how to use fullpage.js methods
	$.fn.fullpage.setAllowScrolling(false);
});
```

#### Vanilla JS example with all options
A more complex initialization with all options set could look like this:
```javascript

var myFullpage = new fullpage('#fullpage', {
	// Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	// Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 600,
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
	scrollOverflow: true,
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	skipIntermediateItems: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	// Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// Design
	controlArrows: true,
	controlArrowsHTML: [
		'<div class="fp-arrow"></div>', 
		'<div class="fp-arrow"></div>'
	],
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
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	// Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	lazyLoadThreshold: 0,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},

	// Events
	beforeLeave: function(origin, destination, direction, trigger){},
	onLeave: function(origin, destination, direction, trigger){},
	afterLoad: function(origin, destination, direction, trigger){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction, trigger){},
	onSlideLeave: function(section, origin, destination, direction, trigger){},
	onScrollOverflow: function(section, slide, position, direction){}
});
```

### Creating links to sections or slides
If you are using fullPage.js with anchor links for the sections (using the `anchors` option or the attribute `data-anchor` in each section), then you will be able to use anchor links also to navigate directly to a certain slide inside a section.

This would be an example of a link with an anchor: https://alvarotrigo.com/fullPage/#secondPage/2 (which is the URL you will see once you access to that section/slide manually)
Notice the last part of the URL ends in `#secondPage/2`.

Having the following initialization:

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
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
[Demo](https://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js provides a way to remove the full height restriction from its sections and slides. It is possible to create sections which height is smaller or bigger than the viewport. This is ideal for footers.
It is important to realise that it doesn't make sense to have all of your sections using this feature. If there is more than one section in the initial load of the site, fullPage.js won't scroll at all to see the next one as it will be already in the viewport.

To create smaller sections just use the class `fp-auto-height` in the section you want to apply it. It will then take the height defined by your section/slide content.

```html
<div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div>
```

#### Responsive auto height sections
[Demo](https://codepen.io/alvarotrigo/pen/MzByMa) A responsive auto height can be applied by using the class `fp-auto-height-responsive`. This way sections will be fullscreen until the responsive mode gets fired. Then they'll take the size required by their content, which could be bigger or smaller than the viewport.

### State classes added by fullpage.js
Fullpage.js adds multiple classes in different elements to keep a record of the status of the site:

- `active` is added the current visible section and slide.
- `active` is added to the current menu element (if using the `menu` option).
- A class of the form `fp-viewing-SECTION-SLIDE` is added to the `body` element of the site. (eg: [`fp-viewing-secondPage-0`](https://alvarotrigo.com/fullPage/#secondPage)) The `SECTION` and `SLIDE` parts will be the anchors (or indexes if no anchor is provided) of the current section and slide.
- `fp-responsive` is added to the `body` element when the entering in the responsive mode
- `fp-enabled` is added to the `html` element when fullpage.js is enabled. (and removed when destroyed).
- `fp-destroyed` is added to the fullpage.js container when fullPage.js is destroyed.

### Lazy Loading
[Demo](https://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js provides a way to lazy load images, videos and audio elements so they won't slow down the loading of your site or unnecessarily waste data transfer.
When using lazy loading, all these elements will only get loaded when entering in the viewport.
To enable lazy loading all you need to do is change your `src` attribute to `data-src` as shown below:

```html
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

If you already use another lazy load solution which uses `data-src` as well, you can disable the fullPage.js lazy loading by setting the option `lazyLoading: false`.

### Auto play/pause embedded media

[Demo](https://codepen.io/alvarotrigo/pen/pXEaaK) **Note**: the autoplay feature might not work on some mobile devices depending on the OS and browser (i.e. [Safari on iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/) version < 10.0).

#### Play on section/slide load:
Using the attribute `autoplay` for videos or audio, or the param `autoplay=1` for youtube iframes will result in the media element playing on page load.
In order to play it on section/slide load use instead the attribute `data-autoplay`. For example:

```html
<audio data-autoplay>
	<source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

#### Pause on leave
Embedded HTML5 `<video>` / `<audio>`  and Youtube iframes are automatically paused when you navigate away from a section or slide. This can be disabled by using the attribute `data-keepplaying`. For example:
```html
<audio data-keepplaying>
	<source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

### Use extensions
fullpage.js [provides a set of extensions](https://alvarotrigo.com/fullPage/extensions/) you can use to enhance its default features. All of them are listed as [fullpage.js options](https://github.com/alvarotrigo/fullPage.js#options).

Extensions requires you to use the minified file [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) that is inside the [`dist` folder](https://github.com/alvarotrigo/fullPage.js/tree/master/dist) instead of the usual fullPage.js file (`fullpage.js` or `fullpage.min.js`).

Once you acquire the extension file, you will need to add it before fullPage. For example, if I want to use the Continuous Horizontal extension, I would have include the extension file and then the extensions version of the fullPage file.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

An activation key and a license key will be required for each extension. [See more details about it here](https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension).

Then you will be able to use and configure them as explained in [options](https://github.com/alvarotrigo/fullPage.js#options).

## Options

### licenseKey
 
(default `null`). **This option is compulsory.** If you use fullPage in a non open source project, then you should use the license key provided on the purchase of the fullPage Commercial License. If your project is open source and it is compatible with the GPLv3 license you can [request a license key](https://alvarotrigo.com/fullPage/extensions/requestKey.html). Please read more about licenses [here](https://github.com/alvarotrigo/fullPage.js#license) and [on the website](https://alvarotrigo.com/fullPage/pricing/). Example of usage:

```javascript
new fullpage('#fullpage', {
	licenseKey: 'YOUR_KEY_HERE'
});
```

### controlArrows

(default `true`) Determines whether to use control arrows for the slides to move right or left.

### controlArrowsHTML

(default `['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],`).
Provides a way to define the HTML structure and the classes that you want to apply to the control arrows for sections with horizontal slides. The array contains the structure for both arrows. The first item is the left arrow and the second, the right one.

### verticalCentered

(default `true`) Vertically centering of the content using flexbox. You might want to wrap your content in a `div` to avoid potential issues. (Uses `flex-direction: column; display: flex; justify-content: center;`)

### scrollingSpeed

(default `700`) Speed in milliseconds for the scrolling transitions.

### sectionsColor

(default `none`) Define the CSS `background-color` property for each section.
Example:

```javascript
new fullpage('#fullpage', {
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

### anchors

(default `[]`) Defines the anchor links (#example) to be shown on the URL for each section. Anchors value should be unique. The position of the anchors in the array will define to which sections the anchor is applied. (second position for second section and so on). Using anchors forward and backward navigation will also be possible through the browser. This option also allows users to bookmark a specific section or slide. **Be careful!** anchors can not have the same value as any ID element on the site (or NAME element for IE).
Now anchors can be defined directly in the HTML structure by using the attribute `data-anchor` as explained here.

### lockAnchors

(default `false`) Determines whether anchors in the URL will have any effect at all in the library. You can still using anchors internally for your own functions and callbacks, but they won't have any effect in the scrolling of the site. Useful if you want to combine fullPage.js with other plugins using anchor in the URL.

### easing

(default `easeInOutCubic`) Defines the transition effect to use for the vertical and horizontal scrolling.
It requires the file `vendors/easings.min.js` or [jQuery UI](https://jqueryui.com/) for using some of [its transitions](https://api.jqueryui.com/easings/). Other libraries could be used instead.

### easingcss3

(default `ease`) Defines the transition effect to use in case of using `css3:true`. You can use the [pre-defined ones](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (such as `linear`, `ease-out`...) or create your own ones using the `cubic-bezier` function. You might want to use [Matthew Lein CSS Easing Animation Tool](https://matthewlein.com/ceaser/) for it.

### loopTop

(default `false`) Defines whether scrolling up in the first section should scroll to the last one or not.

### loopBottom

(default `false`) Defines whether scrolling down in the last section should scroll to the first one or not.

### loopHorizontal

(default `true`) Defines whether horizontal sliders will loop after reaching the last or previous slide or not.

### css3

(default `true`) Defines whether to use JavaScript or CSS3 transforms to scroll within sections and slides. Useful to speed up the movement in tablet and mobile devices with browsers supporting CSS3. If this option is set to `true` and the browser doesn't support CSS3, a fallback will be used instead.

### autoScrolling

(default `true`) Defines whether to use the "automatic" scrolling or the "normal" one. It also has affects the way the sections fit in the browser/device window in tablets and mobile phones.

### fitToSection

(default `true`) Determines whether or not to fit sections to the viewport or not. When set to `true` the current active section will always fill the whole viewport. Otherwise the user will be free to stop in the middle of a section.

### fitToSectionDelay

(default 1000) If `fitToSection` is set to true, this delays the fitting by the configured milliseconds.

### scrollBar

(default `false`) Determines whether to use scroll bar for the **vertical sections** on site or not. In case of using scroll bar, the `autoScrolling` functionality will still work as expected. The user will also be free to scroll the site with the scroll bar and fullPage.js will fit the section in the screen when scrolling finishes.

### paddingTop

(default `0`) Defines the top padding for each section with a numerical value and its measure (paddingTop: '10px', paddingTop: '10em'...) Useful in case of using a fixed header.

### paddingBottom

(default `0`) Defines the bottom padding for each section with a numerical value and its measure (paddingBottom: '10px', paddingBottom: '10em'...). Useful in case of using a fixed footer.

### fixedElements

(default `null`) Defines which elements will be taken off the scrolling structure of the plugin which is necessary when using the `css3` option to keep them fixed. It requires a string with the Javascript selectors for those elements. (For example: `fixedElements: '#element1, .element2'`)

### normalScrollElements

(default `null`) [Demo](https://codepen.io/alvarotrigo/pen/RmVazM) If you want to avoid the auto scroll when scrolling over some elements, this is the option you need to use. (useful for maps, scrolling divs etc.) It requires a string with the Javascript selectors for those elements. (For example: `normalScrollElements: '#element1, .element2'`). This option should not be applied to any section/slide element itself.

### bigSectionsDestination

(default `null`) [Demo](https://codepen.io/alvarotrigo/pen/vYLdMrx) Defines how to scroll to a section which height is bigger than the viewport and when not using `scrollOverflow:true`. (Read [how to create smaller or bigger sections](https://github.com/alvarotrigo/fullPage.js#creating-smaller-or-bigger-sections)). By default fullPage.js scrolls to the top if you come from a section above the destination one and to the bottom if you come from a section below the destination one. Possible values are `top`, `bottom`, `null`.

### keyboardScrolling

(default `true`) Defines if the content can be navigated using the keyboard.

### touchSensitivity

(default `5`) Defines a percentage of the browsers window width/height, and how far a swipe must measure for navigating to the next section / slide

### skipIntermediateItems

(default `false`). Determines whether to skip the scroll animation when navigating between non-consecutive vertical sections or horizontal slides. The possible values are `true`, `false`, `sections`, and `slides`, allowing you to apply this behavior vertically, horizontally, or in both directions.

### continuousVertical

(default `false`) Defines whether scrolling down in the last section should scroll down to the first one and if scrolling1 up in the first section should scroll up to the last one. Not compatible with `loopTop`, `loopBottom` or any scroll bar present in the site (`scrollBar:true` or `autoScrolling:false`).

### continuousHorizontal

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether sliding right in the last slide should slide right to the first one or not, and if scrolling left in the first slide should slide left to the last one or not. Not compatible with `loopHorizontal`. Requires fullpage.js >= 3.0.1.

### scrollHorizontally

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether to slide horizontally within sliders by using the mouse wheel or trackpad. It can only be used when using: `autoScrolling:true`. Ideal for story telling. Requires fullpage.js >= 3.0.1.

### interlockedSlides

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Determines whether moving one horizontal slider will force the sliding of sliders in other section in the same direction. Possible values are `true`, `false` or an array with the interlocked sections. For example `[1,3,5]` starting by 1. Requires fullpage.js >= 3.0.1.

### dragAndMove

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Enables or disables the dragging and flicking of sections and slides by using mouse or fingers. Requires fullpage.js >= 3.0.1. Possible values are:
  - `true`: enables the feature.
  - `false`: disables the feature.
  - `vertical`: enables the feature only vertically.
  - `horizontal`: enables the feature only horizontally.
  - `fingersonly`: enables the feature for touch devices only.
  - `mouseonly`: enables the feature for desktop devices only (mouse and trackpad).

### offsetSections

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Provides a way to use non full screen sections based on percentage. Ideal to show visitors there's more content in the site by showing part of the next or previous section. Requires fullPage.js >= 3.0.1.
To define the percentage of each section the attribute `data-percentage` must be used. The centering of the section in the viewport can be determined by using a boolean value in the attribute `data-centered` (default to `true` if not specified). For example:
``` html
<div class="section" data-percentage="80" data-centered="true">
```

### resetSliders

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether or not to reset every slider after leaving its section. Requires fullpage.js >= 3.0.1.

### fadingEffect

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether to use a fading effect or not instead of the default scrolling one. Possible values are `true`, `false`, `sections`, `slides`. It can therefore be applied just vertically or horizontally, or to both at the time. It can only be used when using: `autoScrolling:true`. Requires fullpage.js >= 3.0.1.

### animateAnchor

(default `true`) Defines whether the load of the site when given an anchor (#) will scroll with animation to its destination or will directly load on the given section.

### recordHistory

(default `true`) Defines whether to push the state of the site to the browser's history. When set to `true` each section/slide of the site will act as a new page and the back and forward buttons of the browser will scroll the sections/slides to reach the previous or next state of the site. When set to `false`, the URL will keep changing but will have no effect on the browser's history. This option is automatically turned off when using `autoScrolling:false`.

### menu

(default `false`) A selector can be used to specify the menu to link with the sections. This way the scrolling of the sections will activate the corresponding element in the menu using the class `active`.
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
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
```

**Note:** the menu element should be placed outside the fullpage wrapper in order to avoid problem when using `css3:true`. Otherwise it will be appended to the `body` by the plugin itself.

### navigation

(default `false`) If set to `true`, it will show a navigation bar made up of small circles.

### navigationPosition

(default `none`) It can be set to `left` or `right` and defines which position the navigation bar will be shown (if using one).

### navigationTooltips

(default []) Defines the tooltips to show for the navigation circles in case they are being used. Example: `navigationTooltips: ['firstSlide', 'secondSlide']`. You can also define them by using the attribute `data-tooltip` in each section if you prefer.

### showActiveTooltip

(default `false`) Shows a persistent tooltip for the actively viewed section in the vertical navigation.

### slidesNavigation

(default `false`) If set to `true` it will show a navigation bar made up of small circles for each landscape slider on the site.

### slidesNavPosition

(default `bottom`) Defines the position for the landscape navigation bar for sliders. Admits `top` and `bottom` as values. You may want to modify the CSS styles to determine the distance from the top or bottom as well as any other style such as color.

### scrollOverflow

(default `true`) defines whether or not to create a scroll for the section/slide in case its content is bigger than the height of it. It requires the default value `scrollBar: false`. In order to prevent fullpage.js from creating the scrollbar in certain sections or slides use the class `fp-noscroll`. For example: `<div class="section fp-noscroll">` You can also prevent scrolloverflow from getting applied on responsive mode when using `fp-auto-height-responsive` in the section element.

### scrollOverflowReset

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Possible values are `true`, `false`, `sections`, `slides`. When set to `true` it scrolls up the content of the section/slide with a scroll bar when leaving to another section/slide. This way the section/slide will always show the start of its content even when scrolling from a section underneath it. Adding the class `fp-no-scrollOverflowReset` on the section or slide will disable this feature for that specific panel.

### scrollOverflowMacStyle

(default `false`) When active, this option will use a "mac style" for the scrollbar instead of the default one, which will look quite different in Windows computers.

### sectionSelector

(default `.section`) Defines the Javascript selector used for the plugin sections. It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.

### slideSelector

(default `.slide`) Defines the Javascript selector used for the plugin slides.  It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.

### responsiveWidth

(default `0`) A normal scroll (`autoScrolling:false`) will be used under the defined width in pixels. A class `fp-responsive` is added to the body tag in case the user wants to use it for their own responsive CSS. For example, if set to 900, whenever the browser's width is less than 900 the plugin will scroll like a normal site.

### responsiveHeight

(default `0`) A normal scroll (`autoScrolling:false`) will be used under the defined height in pixels. A class `fp-responsive` is added to the body tag in case the user wants to use it for their own responsive CSS. For example, if set to 900, whenever the browser's height is less than 900 the plugin will scroll like a normal site.

### responsiveSlides

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). When set to `true` slides will be turned into vertical sections when responsive mode is fired. (by using the `responsiveWidth` or `responsiveHeight` options detailed above). Requires fullpage.js >= 3.0.1.

### parallax

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the parallax backgrounds effects on sections / slides. [Read more about how to apply the parallax option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax).

### parallaxOptions

(default: `{ type: 'reveal', percentage: 62, property: 'translate'}`).

Allows to configure the parameters for the parallax backgrounds effect when using the option `parallax:true`. [Read more about how to apply the parallax option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax).

### dropEffect

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the drop effect on sections / slides. [Read more about how to apply the drop effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

### dropEffectOptions

(default: `{ speed: 2300, color: '#F82F4D', zIndex: 9999}`). 

Allows to configure the parameters for the drop effect when using the option `dropEffect:true`.[Read more about how to apply the drop effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

### waterEffect

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the water effect on sections / slides. [Read more about how to apply the water effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

### waterEffectOptions

(default: `{ animateContent: true, animateOnMouseMove: true}`). 

Allows to configure the parameters for the water effect when using the option `waterEffect:true`.[Read more about how to apply the water effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

### cards

(default `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the cards effect on sections/slides. [Read more about how to apply the cards option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

### cardsOptions

(default: `{ perspective: 100, fadeContent: true, fadeBackground: true}`).

Allows you to configure the parameters for the cards effect when using the option `cards:true`. [Read more about how to apply the cards option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

### lazyLoading

(default `true`) Lazy loading is active by default which means it will lazy load any media element containing the attribute `data-src` as detailed in the [Lazy Loading docs](https://github.com/alvarotrigo/fullPage.js#lazy-loading) . If you want to use any other lazy loading library you can disable this fullpage.js feature.

### lazyLoadThreshold
(default `0`) Specifies the number of adjacent vertical sections and horizontal slides whose media elements should be lazy-loaded relative to the current one. Use a number to specify how many previous and next sections or slides should be preloaded.

### observer

(default `true`) Defines whether or not to observe changes in the HTML structure of the page. When enabled, fullPage.js will automatically react to those changes and update itself accordingly. Ideal when adding, removing or hidding sections or slides.

### credits

(default `{enabled: true, label: 'Made with fullpage.js', position: 'right'}`). 
Defines whether to use fullPage.js credits. As per clause 0, 4, 5 and 7 of the GPLv3 licecense, those using fullPage.js under the GPLv3 are required to give prominent notice that fullPage.js is in use. We recommend including attribution by keeping this option enabled.

## Methods
You can see them in action [here](https://alvarotrigo.com/fullPage/examples/methods.html)

### getActiveSection()
[Demo](https://codepen.io/alvarotrigo/pen/VdpzRN/) Gets an Object (type [Section](https://github.com/alvarotrigo/fullPage.js#callbacks)) containing the active section and its properties.

```javascript
fullpage_api.getActiveSection();
```

### getActiveSlide()
[Demo](https://codepen.io/alvarotrigo/pen/VdpzRN/) Gets an Object (type [Slide](https://github.com/alvarotrigo/fullPage.js#callbacks)) containing the active slide and its properties.

```javascript
fullpage_api.getActiveSlide();
```

### getScrollY() & getScrollX
[Demo](https://codepen.io/alvarotrigo/pen/GRyGqro) `getScrollY` Gets the Y position of the fullPage wrapper. `getScrollX` gets the X position of the active horizontal slide.

```javascript
fullpage_api.getScrollY();
fullpage_api.getScrollX();
```

### moveSectionUp()
[Demo](https://codepen.io/alvarotrigo/pen/GJXNMN) Scrolls one section up:
```javascript
fullpage_api.moveSectionUp();
```
---
### moveSectionDown()
[Demo](https://codepen.io/alvarotrigo/pen/jPvVZx) Scrolls one section down:
```javascript
fullpage_api.moveSectionDown();
```
---
### moveTo(section, slide)
[Demo](https://codepen.io/alvarotrigo/pen/doqOmY) Scrolls the page to the given section and slide. The first section will have the index 1 whilst the first slide, the visible one by default, will have index 0.
```javascript
/*Scrolling to the section with the anchor link `firstSlide` and to the 2nd Slide */
fullpage_api.moveTo('firstSlide', 2);

```

```javascript
//Scrolling to the 3rd section (with index 3) in the site
fullpage_api.moveTo(3, 0);

//Which is the same as
fullpage_api.moveTo(3);
```
---
### silentMoveTo(section, slide)
[Demo](https://codepen.io/alvarotrigo/pen/doqOeY)
Exactly the same as [`moveTo`](https://github.com/alvarotrigo/fullPage.js#movetosection-slide) but in this case it performs the scroll without animation. A direct jump to the destination.
```javascript
/*Scrolling to the section with the anchor link `firstSlide` and to the 2nd Slide */
fullpage_api.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[Demo](https://codepen.io/alvarotrigo/pen/Wvgoyz)
Scrolls the horizontal slider of the current section to the next slide:
```javascript
fullpage_api.moveSlideRight();
```
---
### moveSlideLeft()
[Demo](https://codepen.io/alvarotrigo/pen/gpdLjW)
Scrolls the horizontal slider of the current section to the previous slide:
```javascript
fullpage_api.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[Demo](https://codepen.io/alvarotrigo/pen/rVZWrR) Sets the scrolling configuration in real time.
Defines the way the page scrolling behaves. If it is set to `true`, it will use the "automatic" scrolling, otherwise, it will use the "manual" or "normal" scrolling of the site.

```javascript
fullpage_api.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[Demo](https://codepen.io/alvarotrigo/pen/GJXNYm)
Sets the value for the option `fitToSection` determining whether to fit the section in the screen or not.

```javascript
fullpage_api.setFitToSection(false);
```
---
### fitToSection()
[Demo](https://codepen.io/alvarotrigo/pen/JWWagj)
Scrolls to the nearest active section fitting it in the viewport.

```javascript
fullpage_api.fitToSection();
```
---
### setLockAnchors(boolean)
[Demo](https://codepen.io/alvarotrigo/pen/yNxVRQ)
Sets the value for the option `lockAnchors` determining whether anchors will have any effect in the URL or not.

```javascript
fullpage_api.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[Demo](https://codepen.io/alvarotrigo/pen/EjeNdq) Adds or remove the possibility of scrolling through sections/slides by using the mouse wheel/trackpad or touch gestures (which is active by default). Note this won't disable the keyboard scrolling. You
would need to use `setKeyboardScrolling` for it.

- `directions`: (optional parameter) Admitted values: `all`, `up`, `down`, `left`, `right` or a combination of them separated by commas like `down, right`. It defines the direction for which the scrolling will be enabled or disabled.

```javascript

//disabling scrolling
fullpage_api.setAllowScrolling(false);

//disabling scrolling down
fullpage_api.setAllowScrolling(false, 'down');

//disabling scrolling down and right
fullpage_api.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean, [directions])
[Demo](https://codepen.io/alvarotrigo/pen/GJXNwm) Adds or remove the possibility of scrolling through sections by using the keyboard (which is active by default).

- `directions`: (optional parameter) Admitted values: `all`, `up`, `down`, `left`, `right` or a combination of them separated by commas like `down, right`. It defines the direction for which the scrolling will be enabled or disabled.

```javascript
//disabling all keyboard scrolling
fullpage_api.setKeyboardScrolling(false);

//disabling keyboard scrolling down
fullpage_api.setKeyboardScrolling(false, 'down');

//disabling keyboard scrolling down and right
fullpage_api.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[Demo](https://codepen.io/alvarotrigo/pen/rVZWQb) Defines whether to record the history for each hash change in the URL.

```javascript
fullpage_api.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[Demo](https://codepen.io/alvarotrigo/pen/NqLbeY) Defines the scrolling speed in milliseconds.

```javascript
fullpage_api.setScrollingSpeed(700);
```
---
### destroy(type)
[Demo](https://codepen.io/alvarotrigo/pen/bdxBzv) Destroys the plugin events and optionally its HTML markup and styles.
Ideal to use when using AJAX to load content.

- `type`: (optional parameter) can be empty or `all`. If `all` is passed, the HTML markup and styles used by fullpage.js will be removed. This way the original HTML markup, the one used before any plugin modification is made, will be maintained.

```javascript
//destroying all Javascript events created by fullPage.js (scrolls, hashchange in the URL...)
fullpage_api.destroy();

//destroying all Javascript events and any modification done by fullPage.js over your original HTML markup.
fullpage_api.destroy('all');
```
---
### reBuild()
Updates the DOM structure to fit the new window size or its contents.
 Ideal to use in combination with AJAX calls or external changes in the DOM structure of the site, specially when using `scrollOverflow:true`.

```javascript
fullpage_api.reBuild();
```
---
### setResponsive(boolean)
[Demo](https://codepen.io/alvarotrigo/pen/WxOyLA) Sets the responsive mode of the page. When set to `true` the autoScrolling will be turned off and the result will be exactly the same one as when the `responsiveWidth` or `responsiveHeight` options  get fired.
```javascript
fullpage_api.setResponsive(true);
```
---
### responsiveSlides.toSections()
[Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Requires fullpage.js >= 3.0.1.
Turns horizontal slides into vertical sections.

```javascript
fullpage_api.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Requires fullpage.js >= 3.0.1.
Turns back the original slides (now converted into vertical sections) into horizontal slides again.

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## Callbacks
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) You can see them in action [here](https://alvarotrigo.com/fullPage/examples/callbacks.html).

Some callbacks, such as `onLeave` will contain Object type of parameters containing the following properties:

- `anchor`: *(String)* item's anchor.
- `index`: *(Number)* item's index.
- `item`: *(DOM element)* item element.
- `isFirst`: *(Boolean)* determines if the item is the first child.
- `isLast`: *(Boolean)* determines if the item is the last child.

### afterLoad (`origin`, `destination`, `direction`, `trigger`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) Callback fired once the sections have been loaded, after the scrolling has ended.
Parameters:

- `origin`: *(Object)* section of origin.
- `destination`: *(Object)* destination section.
- `direction`: *(String)* it will take the values `up` or `down` depending on the scrolling direction.
- `trigger`: *(String)* indicates what triggered the scroll. It can be: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Example:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(origin, destination, direction, trigger){
		var origin = this;

		//using index
		if(origin.index == 2){
			alert("Section 3 ended loading");
		}

		//using anchorLink
		if(origin.anchor == 'secondSlide'){
			alert("Section 2 ended loading");
		}
	}
});
```

---
### onLeave (`origin`, `destination`, `direction`, `trigger`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback is fired once the user leaves a section, in the transition to the new section.
Returning `false` will cancel the move before it takes place.

Parameters:

- `origin`:  *(Object)* section of origin.
- `destination`: *(Object)* destination section.
- `direction`: *(String)* it will take the values `up` or `down` depending on the scrolling direction.
- `trigger`: *(String)* indicates what triggered the scroll. It can be: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Example:

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction, trigger){
		var leavingSection = this;

		//after leaving section 2
		if(origin.index == 1 && direction =='down'){
			alert("Going to section 3!");
		}

		else if(origin.index == 1 && direction == 'up'){
			alert("Going to section 1!");
		}
	}
});
```


---
### beforeLeave (`origin`, `destination`, `direction`, `trigger`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback is fired right **before** leaving the section, just before the transition takes place.

You can use this callback to prevent and cancel the scroll before it takes place by returning `false`.

Parameters:

- `origin`:  *(Object)* section of origin.
- `destination`: *(Object)* destination section.
- `direction`: *(String)* it will take the values `up` or `down` depending on the scrolling direction.
- `trigger`: *(String)* indicates what triggered the scroll. It can be: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Example:

```javascript

var cont = 0;
new fullpage('#fullpage', {
	beforeLeave: function(origin, destination, direction, trigger){

		// prevents scroll until we scroll 4 times
		cont++;
		return cont === 4;
	}
});
```

---
### afterRender()
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback is fired just after the structure of the page is generated. This is the callback you want to use to initialize other plugins or fire any code which requires the document to be ready (as this plugin modifies the DOM to create the resulting structure). See [FAQs](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions) for more info.

Example:

```javascript
new fullpage('#fullpage', {
	afterRender: function(){
		var pluginContainer = this;
		alert("The resulting DOM structure is ready");
	}
});
```
---
### afterResize(`width`, `height`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback is fired after resizing the browser's window. Just after the sections are resized.

Parameters:

- `width`:  *(Number)* window's width.
- `height`: *(Number)* window's height.

Example:

```javascript
new fullpage('#fullpage', {
	afterResize: function(width, height){
		var fullpageContainer = this;
		alert("The sections have finished resizing");
	}
});
```
---
### afterReBuild()
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback is fired after manually re-building fullpage.js by calling `fullpage_api.reBuild()`.

Example:

```javascript
new fullpage('#fullpage', {
	afterReBuild: function(){
		console.log("fullPage.js has manually being re-builded");
	}
});
```
---
### afterResponsive(`isResponsive`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback is fired after fullpage.js changes from normal to responsive mode or from responsive mode to normal mode.

Parameters:

- `isResponsive`: *(Boolean)* determines if it enters into responsive mode (`true`) or goes back to normal mode (`false`).

Example:

```javascript
new fullpage('#fullpage', {
	afterResponsive: function(isResponsive){
		alert("Is responsive: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`section`, `origin`, `destination`, `direction`, `trigger`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) Callback fired once the slide of a section have been loaded, after the scrolling has ended.

Parameters:

- `section`: *(Object)* active vertical section.
- `origin`: *(Object)* horizontal slide of origin.
- `destination`: *(Object)* destination horizontal slide.
- `direction`: *(String)* `right` or `left` depending on the scrolling direction.
- `trigger`: *(String)* indicates what triggered the scroll. It can be: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Example:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( section, origin, destination, direction, trigger){
		var loadedSlide = this;

		//first slide of the second section
		if(section.anchor == 'secondPage' && destination.index == 1){
			alert("First slide loaded");
		}

		//second slide of the second section (supposing #secondSlide is the
		//anchor for the second slide)
		if(section.index == 1 && destination.anchor == 'secondSlide'){
			alert("Second slide loaded");
		}
	}
});
```


---
### onSlideLeave (`section`, `origin`, `destination`, `direction`, `trigger`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback is fired once the user leaves an slide to go to another, in the transition to the new slide.
Returning `false` will cancel the move before it takes place.

Parameters:

- `section`: *(Object)* active vertical section.
- `origin`: *(Object)* horizontal slide of origin.
- `destination`: *(Object)* destination horizontal slide.
- `direction`: *(String)* `right` or `left` depending on the scrolling direction.
- `trigger`: *(String)* indicates what triggered the scroll. It can be: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Example:

```javascript
new fullpage('#fullpage', {
	onSlideLeave: function( section, origin, destination, direction, trigger){
		var leavingSlide = this;

		//leaving the first slide of the 2nd Section to the right
		if(section.index == 1 && origin.index == 0 && direction == 'right'){
			alert("Leaving the fist slide!!");
		}

		//leaving the 3rd slide of the 2nd Section to the left
		if(section.index == 1 && origin.index == 2 && direction == 'left'){
			alert("Going to slide 2! ");
		}
	}
});
```

#### Cancelling a move before it takes place
You can cancel a move by returning `false` on the `onSlideLeave` callback. [Same as when canceling a movement with `onLeave`](https://github.com/alvarotrigo/fullPage.js#cancelling-the-scroll-before-it-takes-place).


---
### onScrollOverflow (`section`, `slide`, `position`, `direction`)
[Demo](https://codepen.io/alvarotrigo/pen/XbPNQv) This callback gets fired when a scrolling inside a scrollable section when using the fullPage.js option `scrollOverflow: true`.

Parameters:

- `section`: *(Object)* active vertical section.
- `slide`: *(Object)* horizontal slide of origin.
- `position`: *(Integer)* scrolled amount within the section/slide. Starts on 0.
- `direction`: *(String)* `up` or `down`

Example:

```javascript
new fullpage('#fullpage', {
	onScrollOverflow: function( section, slide, position, direction){
		console.log(section);
		console.log("position: " + position);
	}
});
```

# Reporting issues
1. Please, look for your issue before asking using the github issues search.
2. Make sure you use the latest fullpage.js version. No support is provided for older versions.
3. Use the [the Github Issues forum](https://github.com/alvarotrigo/fullPage.js/issues) to create issues.
4. **An isolated reproduction of the issue will be required.** Make use of [jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/) or [codepen](https://codepen.io/alvarotrigo/pen/qqabrp) for it if possible.

# Contributing to fullpage.js
Please see [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelog
To see the list of recent changes, see [Releases section](https://github.com/alvarotrigo/fullPage.js/releases).

# Build tasks
Want to build fullpage.js distribution files? Please see [Build Tasks](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# Resources
- Wordpress Plugin [for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/).
- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Official Vue.js wrapper component](https://github.com/alvarotrigo/vue-fullpage.js)
- [Official React.js wrapper component](https://github.com/alvarotrigo/react-fullpage)
- [Official Angular wrapper component](https://github.com/alvarotrigo/angular-fullpage)
- [CSS Easing Animation Tool - Matthew Lein](https://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js jsDelivr CDN](https://www.jsdelivr.com/package/npm/fullpage.js)
- [fullPage.js plugin for October CMS](https://github.com/freestream/oc-parallax-plugin)
- [fullPage.js Angular2 directive](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angular directive](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli addon](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Adaptation for Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Integrating fullPage.js with Wordpress (Tutorial)](https://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)
- [Wordpress Plugin for Divi](https://alvarotrigo.com/fullPage/wordpress-plugin-divi/)
- [Wordpress Plugin for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)

## Who is using fullPage.js

![Who is using fullPage.js](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/using-fullpage.png)

- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://torchbrowser.com/
- http://www.boxreload.com/
- http://boxx.hk/
- http://www.villareginateodolinda.it

## Donations
Donations would be more than welcome :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Sponsors
Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://alvarotrigo.com/#contact)] | [[Become a patreon]](https://www.patreon.com/fullpagejs)

[![Codeless](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codeless.png)](https://codeless.co)
[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)

### People
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

## Contributors

<a href="https://github.com/alvarotrigo/fullPage.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alvarotrigo/fullPage.js&max=400&columns=25&anon=1&v=2" />
</a>