# Browserify example for fullPage.js

### Creating the bundle file

In order to create the bundle file `main.js` run the following command inside the root folder:

```sh
npm run build
```

Then run:
```sh
npm run build
```

Which runs the comand specified in `package.json`:

```sh
browserify src/index.js > dist/main.js
```

### Importing files

```javascript
// Optional. When using fullPage extensions
//require('./fullpage.scrollHorizontally.min');

// Optional. When using scrollOverflow:true
//require('fullpage.js/vendors/scrolloverflow');

var fullpage = require('fullpage.js');

// When using fullPage extensions replace the previos require
// of fullpage.js for this file
//var fullpage = require('fullpage.js/dist/fullpage.extensions.min');

// Initializing it
var fullPageInstance = new fullpage('#myFullpage', {
    navigation: true,
    sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
});
```
