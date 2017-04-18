$(function(){
	"use strict";
	$(".Sliders .skitter-large").skitter({
		  dots: false,
		labelAnimation:'left',
		animation:'cubeStop'
		
	});
	
	$(".serv-slider .skitter-large").skitter({
		  dots: true,
		labelAnimation:'left',
		animation:'cubeStop',	
		
	});
	
	$(".box_clone").hide();
	
	//scroll-top
var scrollButton=$(".ScrollTop");
$(window).scroll(function(){
$(this).scrollTop()>=700 ? scrollButton.show():scrollButton.hide();});

scrollButton.click(function()
{ $("html,body").animate({scrollTop:0},900);});

	
	
$('.clinets-say .say').eq(0).addClass('active');
	(function autsilder(){

	$('.clinets-say .active').each(function(){
	if (!$(this).is(':last-child'))
	{
		$(this).delay(3000).fadeOut(1000,function(){
	$(this).removeClass('active').next().addClass('active').fadeIn();
	autsilder();	
	});
	}else{
	$(this).delay(3000).fadeOut(1000,function(){
	$(this).removeClass('active');
		$('.clinets-say .say').eq(0).addClass('active').fadeIn();
		autsilder();
	});
	}
	});
	}());  
	
	
});