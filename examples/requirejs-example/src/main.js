define(['jquery', 'fullpage', 'fullpage.query'], function($, fullpage, jqueryAdaptor) {

    console.log("------ window.jquery -------");
    console.log($);
    console.log("");

    console.log("------ JS -------");
    //console.log($.fn.fullpage);
    console.log(fullpage);
    console.log("");
    console.log("------ $.fn.fullpage -------");
    console.log($.fn.fullpage);

    /*var pepe = $('#myFullpage').fullpage({
        navigation: true, sectionsColor:['blue', 'red', 'purple', 'grey']
    });
    */
    //var pepe = new fullpage('#myFullpage', {navigation: true, sectionsColor:['blue', 'red', 'purple', 'grey']});

});