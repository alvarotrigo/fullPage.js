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

// Calling methods
// fullpage_api.moveSectionDown();
// Or
// fullPageInstance.moveSectionDown();