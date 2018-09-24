# Require.js example for fullpage.js

### Require.js configuration

```javascript
// src/require.config.js
var require = {
    baseUrl: ".",
    app: "./",
    paths: {
        "fullpage": "./node_modules/fullpage.js/dist/fullpage",
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

```javascript
// src/main.js
define(['fullpage'], function(fullpage) {

    // Initializing it
    var fullPageInstance = new fullpage('#myFullpage', {
        navigation: true,
        sectionsColor:['blue', 'red', 'purple', 'grey']
    });
});
```
