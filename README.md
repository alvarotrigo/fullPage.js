# fullPage.js

![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/imgs/intro.png)
A simple and easy to use plugin to create fullscreen scrolling websites (also known as single page websites).
It allows the creation of fullscreen scrolling websites, as well as adding some landscape sliders inside the sections of the site.

- [Live demo](http://alvarotrigo.com/fullPage/)
- [Temporal Website](http://alvarotrigo.com/blog/fullpage-jquery-plugin-for-fullscreen-scrolling-websites/)

## Introduction
The plugin is in its first version and will keep improving with time.
Suggestion are more than welcome, not only for feature requests but also for coding style improvements.

Let's make this a great plugin to make people's lives easier!

fullPage.js is fully functional on all modern browsers, as well as some old ones such as IE8 and Opera 12.

## Usage
As you can see in the `example.html` file, you will need to include the JavaScript file `jquery.fullPage.js` (or the minified version `jquery.fullPage.min.js`) and the css file `jquery.fullPage.css` of the plugin, as well as [jQuery](http://jquery.com/). Optionally, you can add the [jQuery UI library](http://jqueryui.com/) in case you want to use easing effects (this is active by default).

###Including files:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>	
	
<!-- This is needed in the case of setting the plugin 
	option `scrollOverflow` to `true` -->
<script type="text/javascript" src="vendors/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

###Required HTML structure
Each section will be defined with a `div` containing the `section` class.
The active section by default will be the first section, which is taken as the home page.
```html
<div class="section">Some section</div>
<div class="section">Some section</div>
<div class="section">Some section</div>
<div class="section">Some section</div>
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
You can see a fully working example of the HTML structure in the [`example.html` file](https://github.com/alvarotrigo/fullPage.js/blob/master/example.html).

###Initialization 
All you need to do is call the plugin inside a `$(document).ready` function:

```javascript
$(document).ready(function() {
	$.fn.fullpage();
});
```

A more complex initialization with all options set could look like this:
```javascript
$(document).ready(function() {
	$.fn.fullpage({
		verticalCentered: true,
		resize : true,
		slidesColor : ['#ccc', '#fff'],
		anchors:['firstSlide', 'secondSlide'],
		scrollingSpeed: 700,
		easing: 'easeInQuart',
		menu: false,
		navigation: false,
		navigationPosition: 'right',
		loopBottom: false,
		loopTop: false,
		autoScrolling: true,
		scrollOverflow: false,
		css3: false,

		//events
		onLeave: function(index, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
```

### Advance usage
In order to create links to certain slides inside a section, you could do it in two ways:

#### Using anchor links
If you are using fullPage.js with anchor links for the sections (using the `anchors` option), then you will be able to use anchor links also to navigate directly to a certain slide inside a section.

You can do it by using the index of the slide (starting by 0), or if you prefer, you can create custom anchor links for them by using the attribute `data-anchor` in each slide. For example:

```html
<div class="section">
    <div class="slide" data-anchor="slide1"> Slide 1 </div>
    <div class="slide" data-anchor="slide2"> Slide 2 </div>
    <div class="slide" data-anchor="slide3"> Slide 3 </div>
    <div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```

#### Using events:
- `class="toSlide"`
- `data-index="3"` (or whatever slide number you want to link)

For example:
```html
<span class="toSlide" data-index="3">Click here to go to slide 3</span>
```
[Live example](http://jsfiddle.net/7PwsS/15/)

To create links between sections, you could use the `menu` option and make use of anchor links (#) as explained below in the options section.

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
It requieres [jQuery UI](http://jqueryui.com/) for using some of its transitions. Other libraries could be used instead.

- `loopTop`: (default `false`) Defines whether scrolling up in the first section should scroll to the last one or not.

- `loopBottom`: (default `false`) Defines whether scrolling down in the last section should scroll to the first one or not.

- `css3`: (default `false`). Defines wheter to use JavaScript or CSS3 transforms to scroll within sections and slides. Useful to speed up the movement in tablet and mobile devices with browsers supporting CSS3.

- `autoScrolling`: (default `true`) Defines whether to use the "automatic" scrolling or the "normal" one. It also has affects the way the sections fit in the browser/device window in tablets and mobile phones.

- `menu`: (default `false`) A selector can be used to specify the menu to link with the slides. This way the scrolling of the slides will activate the corresponding element in the menu using the class `active`.
This won't generate a menu but will just add the `active` class to the element in the given menu with the corresponding anchor links.
In order to link the elements of the menu with the slides, an HTML 5 data-tag (`data-menuanchor`) will be needed to use with the same anchor links as 
used within the sections. Example:
```html
<ul id="myMenu">
    <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
    <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
    <li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
    <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
</ul>
```
```javascript
$.fn.fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu'
});
```

- `navigation`: (default `false`) If set to `true`, it will show a navigation bar made up of small circles. It requieres the use of anchor links at the moment. 

- `navigationPosition`: (default `right`) It can be set to `left` or `right` and defines which position the navigation bar will be shown (if using one).

- `scrollOverflow`: (default `false`) defines whether or not to create a scroll for the section in case its content is bigger than the height of it.
In case of setting it to `true`, it requieres the vendor plugin [`jquery.slimscroll.min`](https://github.com/rochal/jQuery-slimScroll) and it should be loaded before the fullPaje.js plugin. For example:

```html
<script type="text/javascript" src="vendors/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="jquery.fullPage.js"></script>
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

### moveToSlide
Scrolls the page to the given slide anchor name or to the given index.
```javascript
/*Scrolling to the section with the anchor link `firstSlide` */
$.fn.fullpage.moveToSlide('firstSlide');

```

```javascript
/*Scrolling to the 3rd section in the site*/
$.fn.fullpage.moveToSlide(3); 
```

### setAutoScrolling
Sets the scrolling configuration in real time.
Defines the way the page scrolling behaves. If it is set to `true`, it will use the "automatic" scrolling, otherwise, it will use the "manual" or "normal" scrolling of the site. Be careful when combining this option with `scrollOverflow` set to true, as it might be difficult to scroll using the mouse wheel or the trackpad when the section is scrollable.

```javascript
$.fn.fullpage.setAutoScrolling('false');
```

## Callbacks
**afterLoad** (`anchorLink`, `index`)
Callback fired once the sections have been loaded, after the scrolling has ended. 
Parameters:

- `anchorLink`: anchorLink corresponding to the section.
- `index`: index of the section. Starting from 1.

In case of not having anchorLinks defined in the plugin the `index` parameter would be the only one to use.

Example:

```javascript
	$.fn.fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	
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

**onLeave** (`index`, direction)
This callback is fired once the user leaves a section, in the transition to the new section. 

Parameters:

- `index`: index of the leaving section. Starting from 1.
- `direction`: it will take the values `up` or `down` depending on the scrolling direction.

Example:

```javascript
	$.fn.fullpage({	
		onLeave: function(index, direction){
			//after leaving section 2
			if(index == '2' && direction =='down'){
				alert("Going to section 3!");
			}
			
			else if(index == '2' && direction == 'up'){
				alert("Going to section 1!");
			}
		}
	});
```


**afterRender** ()
This callback is fired just after the structure of the page is generated. This is the callback you want to use to initialize other plugins or fire any code which requires the document to be ready (as this plugin modifies the DOM to create the resulting structure).

Example:

```javascript
	$.fn.fullpage({
		afterRender: function(){
			alert("The resulting DOM stucture is ready");
		}
	});
```

## Who is using fullPage.js
If you want your page to be listed here. Please <a href="mailto:alvaro@alvarotrigo.com">contact me</a> with the URL


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
