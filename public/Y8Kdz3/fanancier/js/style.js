/*global $, console, alert*/

$(function () {
	"use strict";
	
	
	$(window).scroll(function () {
		if ($(window).scrollTop() >= ($(".homes").offset().top - 420)) {
			$(".homes img").addClass("fadeindown");
		}
		
		if ($(window).scrollTop() >= ($(".styles").offset().top - 300)) {
			$(".styles h2").addClass("faderight");
		}
		
		if ($(window).scrollTop() >= ($(".icons").offset().top - 420)) {
			$(".icons img").addClass("fadeindown");
			
		}
		
		
	});
	
	
});