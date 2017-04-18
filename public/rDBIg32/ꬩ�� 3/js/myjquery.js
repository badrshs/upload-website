$(window).ready(function(){
	"use strict";
	  
		// proudct h2 change color
$(".product img").hover(
function(){ $(this).parent().siblings("div").children("h2").css({color:"#FEAE02"});} , 
function(){ $(this).parent().siblings("div").children("h2").css({color:"#1DA1F2"} ) ;}
);
// subscipe from the top 
if ($(window).width() > 767)
 {
	$(".user").delay(1000).animate({
		top:'100px' , 
		 
		},2000);
		$(".user").animate({
		width:'600px'
		 
		},1000  , function(){
			$(".user .brand").slideDown(1000);
		
		});
		 $(".user span i").click(function(){
			$(".user").fadeOut(1000) ;
			}); 
		
 }
 // icon fixed left push to right 
 $(".iconuser").click(function(){
	 $(".userfix").animate({
		 left:'0px' 
			 },1000 , function(){
				 $(".iconuser").fadeOut(1000);
				 });
				 $(".userfix .closee").click(function(){
					 $(".iconuser").fadeIn(1000);
					$(".userfix").animate({
		           left:'-522px' 
			        },1000 );
					 
					 });
 });
   // end animate
   // addclass fixed for navbar in the top 
   $(window).scroll(function(){
	    if ($(window).scrollTop() > 100)
	{
	$("header .navbar-default").addClass("navbar-fixed-top");	
		}
		
		else
		{
		$("header .navbar-default").removeClass("navbar-fixed-top");	
			
			}
	   });
	   
	   $('#Container').mixItUp();
   // proudct html
   $(".offer i").click(function(){
	   $(this).css({'color':'#FEAE02'}).prevAll("i").css({'color':'#FEAE02'});
	   $(this).nextAll("i").css({"color":"#838383"})
	   });
   
	 
//end jquary
	}); 
	 