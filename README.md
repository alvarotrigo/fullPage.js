# fullPage.js
A simple and easy to use plugin to create fullscreen websites. 
It allows to create fullscren scrolling websites as well as adding some landscape sliders inside the sections of the site.

## Introduction
The plugin is in its first version and will keep improving with the time.
Suggestion will be more than welcome, not only for requisites requests but also for coding improvements.

Let's make of this a great plugin to make the world easier!

## Usage
As you can see in the `example.html` file, you will need to include the javascript file `jquery.fullPage.js` and the css file `jquery.fullPage.css` 
of the plugin as well as [jQuery library](http://jquery.com/) and the [jQuery UI library](http://jqueryui.com/) in case you want to use easing effects. (active by default)

###Incuding files:
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
<div class="section active"> WHATEVER</div>
<div class="section">WHATEVER</div>
<div class="section">WHATEVER</div>
<div class="section">WHATEVER</div>
```

In order to create a landscape slider within a section, each slide will be difined with another `div`:
```html
<div class="section active">
	<div class="slide active"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide  </div>
	<div class="slide"> Slide 4 </div>
</div>
````
The class `active` will be requiered to specify which slide is the one to show in the first place.

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
It requieres [jQuery UI library](http://jqueryui.com/) in case of using some of its transitions.

Other library could be used instead.


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
