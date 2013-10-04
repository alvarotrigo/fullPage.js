$(document).ready(function(){

	$("#demosMenu").change(function(){
	  var id = $(this).find("option:selected").attr("id");

	  switch (id){
		case 'background':
		  window.location.href = 'backgrounds.html';
		  break;
		  
		 case 'looping':
		  window.location.href = 'looping.html';
		  break;
		  
		case 'noAnchor':
		  window.location.href = 'noAnchor.html';
		  break;

		case 'scrollingSpeed':
		  window.location.href = 'scrollingSpeed.html';
		  break;

		case 'easing':
		  window.location.href = 'easing.html';
		  break;	

		case 'callbacks':
		  window.location.href = 'callback.html';
		  break;			  
	  }
	});

});