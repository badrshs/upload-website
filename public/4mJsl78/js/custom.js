/*global $, alert , console*/


$(function () {
	
	"use strict";
	
	var myheader = $(".header"),
	
	    myslider = $(".bxslider");
	
	myheader.height($(window).height());
	
	$(window).resize(function () {
		
		myheader.height($(window).height());

		
		myslider.each(function () {
		
		    $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
		
	    });
		
	});
	
	$(".links li a").click(function () {
		
		$(this).parent().addClass("active").siblings().removeClass("active");
		
	});
	

		
		
	myslider.each(function () {
		
		$(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
		
	});
	
	$(".links li a").click(function () {
		
		$("html , body").animate({
			
		    scrollTop: $("#" + $(this).data("value")).offset().top
		
		}, 1000);
		
	});
	
	
	
	(function autoslider() {
		
		$(".slider .active").each(function () {
			
			if (!$(this).is(":last-child")) {
				
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass("active").next().addClass("active").fadeIn();
					
					autoslider();
					
				});
				
				
			} else {
				
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass("active");
					
					$(".slider div").eq(0).addClass("active").fadeIn();
					
					autoslider();
				});
				
				
			}
			
			
			
			
		});
		
		
		
	}());
	
	
	$("#container").mixItUp();
	
	$(".shufle li").click(function () {
		
		$(this).addClass("selceted").siblings().removeClass("selceted");
	});
	
	myslider.bxSlider({
	});
	
});

	


