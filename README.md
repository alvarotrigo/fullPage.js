# fullPage.js

![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/imgs/intro.png)
A simple and easy to use plugin to create fullscreen scrolling websites. (also known as single page websites)
It allows to create fullscren scrolling websites as well as adding some landscape sliders inside the sections of the site.

- [Living demo](http://alvarotrigo.com/fullPage/)
- [Temporal Website] (http://alvarotrigo.com/blog/fullpage-jquery-plugin-for-fullscreen-scrolling-websites/)

## Introduction
The plugin is in its first version and will keep improving with the time.
Suggestion will be more than welcome, not only for requisites requests but also for coding improvements.

Let's make of this a great plugin to make the world easier!

Working under all modern browsers as well as old ones such as IE8, Opera 12...

## Usage
As you can see in the `example.html` file, you will need to include the javascript file `jquery.fullPage.js` (or the minified version `jquery.fullPage.min.js`) and the css file `jquery.fullPage.css` 
of the plugin as well as [jQuery library](http://jquery.com/) (and the [jQuery UI library](http://jqueryui.com/) in case you want to use easing effects. (active by default))

###Including files:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>	
	
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

###Required HTML structure
Each section will be defined with a `div` containing the `section` class.
The active section by default will be the first section, which is taken as the home page.
```html
<div class="section"> WHATEVER</div>
<div class="section">WHATEVER</div>
<div class="section">WHATEVER</div>
<div class="section">WHATEVER</div>
```

In order to create a landscape slider within a section, each slide will be difined with another `div`:
```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide  </div>
	<div class="slide"> Slide 4 </div>
</div>
````
You can see a full example of the HTML structure in the [`example.html` file](https://github.com/alvarotrigo/fullPage.js/blob/master/example.html).

###Initialization 
Then, you will only need to call the plugin inside `$(document).ready` function:

```javascript
$(document).ready(function() {
	$.fn.fullpage();
});
```

## Options
- `verticalCentered`: (default `true`) Vertically centering of the content within sections.

- `resize`: (default `true`) Whether you want to resize the text when the window is resized. 

- `scrollingSpeed`: (default `700`) Speed in miliseconds for the scrolling transitions.

- `slidesColor`:(default `none`) Define the CSS `background-color` property for each section: 
Example: 
```javascript
$.fn.fullpage({
    slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `easing`: (default `easeInQuart`) Defines the transition effect to use for the vertical scrolling.
It requieres [jQuery UI library](http://jqueryui.com/) in case of using some of its transitions. Other library could be used instead.

- `loopTop`: (default `false`) Defines whether scrolling up in the first section should scroll to the last one or not.

- `loopBottom`: (default `false`) Defines whether scrolling down in the last section should scroll to the first one or not.

- `touchScrolling`: (default `true`) Defines whether to use the touch scrolling on touch devices or the normal scroll. It also
has influence on the way the sections fit the browser/device window.

- `menu`: (default 'false') A selector can be used to specify the menu to link with the slides. This way 
the scrolling of the slides will activate the corresponding element in the menu using the class `active`.
This won't generate a menu but will just add the `active` class to the element in the given menu with the corresponding anchor link.
In order to link the elements of the menu with the slides, an HTML 5 data-tag (`data-menuanchor`) will be needed to use with the same anchor links as 
used within the sections. Example:
```html
<ul id="myMenu">
    <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
    <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
    <li data-menuanchor="3rdPage"><a href="#3rdPage">Third section</a></li>
    <li data-menuanchor="4thpage"><a href="#4thpage">Fourth section</a></li>
</ul>
```
```javascript
$.fn.fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#myMenu'
});
```

## Methods

### moveSlideUp
Scrolls one slide up:
```javascript
$.fn.fullpage.moveSlideUp();
```

### moveSlideDown
Scrolls one slide down:
```javascript
$.fn.fullpage.moveSlideDown();
```


### moveSlideTo
Scrolls the page to the given slide anchor name or to the given index.
```javascript
/*Scrolling to the section with the anchor link `firstSlide` */
$.fn.fullpage.moveToSlide('#firstSlide');
```

```javascript
/*Scrolling to the 3rd section in the site*/
$.fn.fullpage.moveToSlide(3); 
```

## Callbacks
**afterLoad** (`anchorLink`, `index`)
Callback fired once the sections has been loaded, once the scrolling has ended. 
Parameters:

- `anchorLink`: anchorLink corresponding to the section.
- `index`: index of the section. Starting from 1.

In case of not having anchorLinks defined in the plugin the `index` parameter would be the only one to use.

Example:

```javascript
$(document).ready(function() {
			$.fn.fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
			
				afterLoad: function(anchorLink, index){
					//using index
					if(index == '3'){
						alert("Section 3 ended loading");
					}
					
					//using anchorLink
					if(anchorLink == 'secondSlide'){
						alert("Section 2 ended loading");
					}
				}
			});

```


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
