# Require.js example for fullpage.js

### Require.js configuration

```javascript
// src/require.config.js
var require = {
    baseUrl: ".",
    app: "./",
    paths: {
        "fullpage": "./node_modules/fullpage.js/dist/fullpage",
        "IScroll": "./node_modules/fullpage.js/vendors/scrolloverflow",
        "fullpageExtensions": "./node_modules/fullpage.js/dist/fullpage.extensions.min",

        /*
        When using any fullPage extensions you'll have to add the path to the
        extension file here
        */
        //"scrollHorizontally": "./src/fullpage.scrollHorizontally.min"
    }
};
```

### HTML file

```html
<!-- index.html  -->
<script src="src/require.config.js"></script>
<script data-main="src/main" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"></script>
```

### Main file

Depending on your fullPage.js options, use one of the following defines:

```javascript
// src/main.js
define(['fullpage'], function(fullpage) {

    // Initializing it
    var fullPageInstance = new fullpage('#myFullpage', {
        navigation: true,
        sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
    });
});
```

If you want to use the fullPage.js option `scrollOverflow:true`:

```javascript
// src/main.js
define(['IScroll', 'fullpage'], function(IScroll, fullpage) {

    // Initializing it
    var fullPageInstance = new fullpage('#myFullpage', {
        navigation: true,
        sectionsColor:['blue', 'red', 'purple', 'grey'],
        scrollOverflow: true
    });
});
```

If you want to use any extension, like `scrollHorizontally` as well as `scrollOverflow:true`:

```javascript
// src/main.js
define(['IScroll', 'scrollHorizontally', 'fullpageExtensions'], function(IScroll, scrollHorizontally, fullpage) {

    // Initializing it
    var fullPageInstance = new fullpage('#myFullpage', {
        navigation: true,
        sectionsColor:['blue', 'red', 'purple', 'grey'],
        scrollOverflow: true,
        scrollHorizontally: true
    });
});
```
