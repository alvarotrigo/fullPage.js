# fullPage.js pure Javascript version
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

Invite me to a coffee
[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Introduction

This is in Alpha version and support for it won't be provided yet.
This light version of fullpage.js won't provide some options available in the jQuery version such as `scrollOverflow`, `verticalCentered`, `continuousVertical`...


## Compatibility
fullPage.js is fully functional on all modern browsers, as well as some old ones such as Internet Explorer 8, 9, Opera 12, etc.
It works with browsers with CSS3 support and with the ones which don't have it, making it ideal for old browsers compatibility.


## Usage

Example of initialization:

```javascript
fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
	menu: '#menu',
	css3:false
});
```


A more complex initialization with all options set could look like this:
```javascript
fullpage('#fullpage', {
	//navigation
	'menu': false,
	'anchors':[],
	'navigation': false,
	'navigationPosition': 'right',
	'navigationColor': '#000',
	'navigationTooltips': [],
	'slidesNavigation': false,
	'slidesNavPosition': 'bottom',
	'scrollBar': false,

	//scrolling
	'css3': true,
	'scrollingSpeed': 700,
	'autoScrolling': true,
	'easingcss3': 'ease',
	'loopHorizontal': true,
	'touchSensitivity': 5,

	//Accessibility
	'keyboardScrolling': true,
	'recordHistory': true,

	//design
	'controlArrows': true,

	//Custom selectors
	'sectionSelector': '.section',
	'slideSelector': '.slide',


	//events
	'afterLoad': null,
	'onLeave': null,
	'afterRender': null,
	'afterResize': null,
	'afterReBuild': null,
	'afterSlideLoad': null,
	'onSlideLeave': null
});
```