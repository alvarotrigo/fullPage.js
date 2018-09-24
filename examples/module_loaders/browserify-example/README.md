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
// Importing fullpage.js
var fullpage = require('fullpage.js');

// Initializing it
var fullPageInstance = new fullpage('#myFullpage', {
    navigation: true,
    sectionsColor:['blue', 'red', 'purple', 'grey']
});

// Calling methods
// fullpage_api.moveSectionDown();
// Or
// fullPageInstance.moveSectionDown();
```
