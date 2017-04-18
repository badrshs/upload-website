$(function(){
	"use strict";
	
	
	
	//auto SlidersClints
	(function autsilder(){
	$('.sliders .active').each(function(){
	if (!$(this).is(':last-child'))
	{
		$(this).delay(3000).fadeOut(1000,function(){
	$(this).removeClass('active').next().addClass('active').fadeIn();
	autsilder();
			
	});
	}else{
	$(this).delay(3000).fadeOut(1000,function(){
	$(this).removeClass('active');
		$('.sliders div').eq(0).addClass('active').fadeIn();
		autsilder();
	});
	}
	});
	}());
	
	
});