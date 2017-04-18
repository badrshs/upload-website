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

});