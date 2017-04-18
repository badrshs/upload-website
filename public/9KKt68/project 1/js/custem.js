/*global $, alert, console*/

$(function(){
	
//convert links to active  	
	$('.menue li').click(function(){	
	$(this).addClass('active').siblings().removeClass('active');
		});	
//----------------------------------------------
//control of the height of the header in any type of window
     // $('.header').height($(window).height());
	 //  $(window).resize(function(){
	//     $('.header').height($(window).height()); });

//----------------------------------------------------
	//----make the slider in the middel
	$('.bxslider').each(function(){
		$(this).css('paddingTop',($('.tips').height()-$('.bxslider li').height())/6)
	                            });
	
	//--------------------
//----tigger the bx slider
  $('.bxslider').bxSlider({
pager:false,speed:1000  
  });
//-------------
//----make the skills pragraph in the middel

$('.skills').each(function(){
		$(this).css('paddingTop',($('.bxslider li').height()-$('.skills').height())/2) 
		                  });	
//make smoth skroll---------------------------------
console.log($(this).scrollTop());
      $('.contalink').click(function (){
			  $("html,body").animate({
				scrolltop:500
				
			   },1000);
	   });
	
	
	
});

