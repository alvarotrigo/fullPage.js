# fullPage.js
A simple and easy to use plugin to create fullscreen websites. 
It allows to create fullscren scrolling websites as well as adding some landscape sliders inside the sections of the site.

## Introduction
The plugin is in its first version and will keep improving with the time.
Suggestion will be more than welcome, not only for requisites requests but also for coding improvements.

Let's make of this a great plugin to make the world easier!

## Usage
As you can see in the `example.html` file, you will need to include the javascript and css files 
of the plugin as well as jQuery library and the jQuery UI library in case you want to use easing effects. (active by default)

Incuding files:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>	
	
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

Then, you will only need to call the plugin inside `$(document).ready` function:

```javascript
$(document).ready(function() {
	$.fn.fullpage();
});
```

## Options
###verticalCentered (default `true`)
Setting `true` or `false` defines whether you want to center vertically the content inside each section or not.
-----

###resize (default `true`)
Setting `true` or `false` defines whether you want to resize the text in the website when the window is resized. 
-----

###slidesColor (default `none`)
You can define the `background-color` property for each section from the plugin. It admits exactly the same values as `CSS`.
Example: 
```javascript
$.fn.fullpage({
    slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```
-----

###scrollingSpeed (default `700`)
Defines the speed in miliseconds for the scrolling transitions. (both vertical and horizontal)
-----

###easing (default `easeInQuart`)
Defines the transition effect to use for the vertical scrolling transitions.
It requieres [jQuery UI library](http://jqueryui.com/) in case of using some of its transitions.

Other library could be used instead.
-----



## License

(The MIT License)

Copyright (c) 2012 Marcin Warpechowski &lt;marcin@nextgen.pl&gt;

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