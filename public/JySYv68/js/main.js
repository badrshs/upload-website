/*global $, alert, console*/
$(function () {
	"use strict";
	
	var header = $(".header"),
		bxslider = $(".bxslider");
	
	// Header height
	$(header).height($(window).height());
	$(window).resize(function () {
		$(header).height($(window).height());
		
		bxslider.each(function () {
			$(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
		});
		
	});
	
	// Active links
	$(".menu > a").click(function () {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
	// Enable Bxslider
	bxslider.bxSlider({
		auto: true
	});
	
	// Center Bxslider 
	bxslider.each(function () {
		$(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
	});
	
	// Smooth scroll for services
	$(".menu a").click(function () {
		$("html, body").animate({
			scrollTop: $("#" + $(this).data("value")).offset().top
		}, 1000);
		
	});
	
	// Auto slider
	(function autoSlider() {
		
		$(".slider .active").each(function () {
			
			if (!$(this).is(":last-child")) {
				
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoSlider();
				});
				
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass("active");
					$(".slider div").eq(0).addClass("active").fadeIn();
					autoSlider();
				});
			}
			
		});
		
	
		
	}());
	
	
	// Trigger MixItUp
	$("#container").mixItUp();
	
	// Ajust shuffle
	$(".shuffle li").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
	});
	
	// Enable NiceScroll
	$("html").niceScroll({
		cursorcolor: "#1abc9c",
		scrollspeed: 60,
		cursorwidth: 5,
		zindex: 99999999,
		cursorborder: "0px solid #EEE",
		cursorborderradius: 4
	});
	
	
});