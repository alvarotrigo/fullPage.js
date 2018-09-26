# Webpack example for fullPage.js

### Creating the bundle file

In order to create the bundle file `main.js` run the following command inside the root folder:

```sh
npm install
```

Then run:
```sh
npm run build
```

Which runs the comand specified in `package.json`:

```sh
npx webpack --config webpack.config.js
```

### Importing files

```javascript
// Optional. When using fullPage extensions
//import scrollHorizontally from './fullpage.scrollHorizontally.min';

// Optional. When using scrollOverflow:true
//import IScroll from 'fullpage.js/vendors/scrolloverflow';

// Importing fullpage.js
import fullpage from 'fullpage.js';

// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
var fullPageInstance = new fullpage('#myFullpage', {
    navigation: true,
    sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
});
```
