/*global $, alert, console*/

$(function() {
	
	'use strict';
	//adjust hearer heigth
	
	var myheader = $('.header')
	var mybxslider = $('.bxslider')
	myheader.height($(window).height());
	 
	$(window).resize(function(){
		myheader.height($(window).height());
		
		  mybxslider.each(function(){
	 	 $(this).css('paddingTop',($(window).height()-$('.bxslider li').height())/2 ); 
        });
	});
	//links add active
	$('.links li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
 //triger bxslider
 $(document).ready(function(){
  mybxslider.bxSlider({
	 pager:false 
  });
});

//adjust bxslider to be center of the screen
  mybxslider.each(function(){
	 	 $(this).css('paddingTop',($(window).height()-$('.bxslider li').height())/2 ); 
 });

}); 


	//links add active class
