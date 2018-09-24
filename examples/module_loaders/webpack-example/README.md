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
// Importing fullpage.js
import fullpage from 'fullpage.js';

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
