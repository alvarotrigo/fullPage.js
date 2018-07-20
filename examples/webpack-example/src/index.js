import $ from 'jquery';
window.jQuery = $;


import fullpage from './../pepe.js';

console.log("------ window.jquery -------");
console.log(window.jQuery);

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

