	$(function () {
			"use strict";
		// vareabls
			var header    = $(".header");
			var bxslider  = $(".bxslider")

		// adiust header height
			header.height($(window).height());
			$(window).resize(function(){
			header.height($(window).height());
		//made the slider move with height
			bxslider.each(function(){
			bxslider.css("paddingTop", ($(window).height()-$(".bxslider li").height())/2);});
				});	
		//links add class active 
			$(".links li a ").click(function(){
			$(this).parent().addClass("active").siblings().removeClass("active");
			});
		// adiust box slider list itme 
			bxslider.each(function(){
			bxslider.css("paddingTop", ($(window).height()-$(".bxslider li").height())/2);
				});
		//buld atreger for slider
	 		bxslider.bxSlider({
	  				pager:false
	 					 });
		//smooth scroll to div
			$(".links li a").click(function () {
 					$("html,body").animate({
 					scrollTop:$("#"+$(this).data("value")).offset().top},2000);
 					});
 		//our slider code 
 			(function autoSlider() {
	 			$(".slider .active").each(function(){
 				if 
 					(!$(this).is(":last-child")){
 					$(this).delay(1000).fadeOut(2000,function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
 						autoSlider();
 					});
 				}else
 					{
					$(this).delay(1000).fadeOut(2000,function(){			
					$(this).removeClass("active");
					$(".slider div").eq(0).addClass("active").fadeIn();
					autoSlider();
 								});
							}
						});
 					}());
 		//mixItUp
			 		$("#container").mixItUp();
			 		$(".shufful li").click(function(){
			 			$(this).addClass("selected").siblings().removeClass("selected");
			 		});

		//niceScroll for page

		 			 $("html").niceScroll({
		 				cursorcolor: "#eee",
		 				cursorwidth: "10px",
		 				mousescrollstep: 30,
	 					cursorborder: "2px solid #1abc9c",
		 				});
	});