// loading screen 

$(window).load(function () {
	
	
	"use strict";
	
	$('body').css('overflow','auto');
	
	$('.loading-overlay .sk-fading-circle').fadeOut(1000, function () {
		
		$(this).parent().fadeOut(1000, function () {
			
			$(this).remove();
		});
	});
	
});