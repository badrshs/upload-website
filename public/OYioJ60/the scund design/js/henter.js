	$(function () {
		"use strict";

//links add class active 
		$(" li a ").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
			});


	//smooth scroll to div
 			$(" li a").click(function () {
 				$("html,body").animate({
 					scrollTop:$("#"+$(this).data("value")).offset().top},2000);
 				});


	//niceScroll for page

 			 $("html").niceScroll({
 				 cursorcolor: "#111",
 				 cursorwidth: "10px",
 				 mousescrollstep: 80,
 				cursorborder: "2px solid #f00"  });



	});