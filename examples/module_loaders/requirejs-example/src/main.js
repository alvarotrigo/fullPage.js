define(['fullpage'], function(fullpage) {

    // Initializing it
    var fullPageInstance = new fullpage('#myFullpage', {
        navigation: true,
        sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
    });
});


// Example using scrollOverflow
/*
define(['IScroll', 'fullpage'], function(IScroll, fullpage) {

    // Initializing it
    var fullPageInstance = new fullpage('#myFullpage', {
        navigation: true,
        sectionsColor:['blue', 'red', 'purple', 'grey'],
        scrollOverflow: true
    });
});
*/


// Example using scrollOverflow and scrollHorizontally extension
/*
define(['IScroll', 'scrollHorizontally', 'fullpageExtensions'], function(IScroll, scrollHorizontally, fullpage) {

    // Initializing it
    var fullPageInstance = new fullpage('#myFullpage', {
        navigation: true,
        sectionsColor:['blue', 'red', 'purple', 'grey'],
        scrollOverflow: true,
        scrollHorizontally: true
    });
});
*/
