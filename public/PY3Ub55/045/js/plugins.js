/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	
	"use strict";
	
	$('.carousel').carousel({
		
		interval: 5000
	
	});

// Show Color Option Div When Click On The Gear
	
	$(".gear-check").click(function () {
	
		$(".color-option").fadeToggle();
	
	});
	
// Change Theme Color On click //
	
	var colorLi = $(".color-option ul li");
	colorLi
		.eq(0).css("backgroundColor", "#E41b17").end()
		.eq(1).css("backgroundColor", "#f3064b").end()
		.eq(2).css("backgroundColor", "#06c1f5").end()
		.eq(3).css("backgroundColor", "#f5d906");
	
	colorLi.click(function () {
		
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));

	});
});
// Caching The Scroll Top Button
	
var scrollButton = $("#scroll-top");
	
$(window).scroll(function () {
	
	"use strict";
	
	if ($(this).scrollTop() >= 700) {
		
		scrollButton.show();
		
	} else {
		
		scrollButton.hide();
		
	}
		
// Click On Button To Scroll
		
	scrollButton.click(function () {
		
		$("html, body").stop().animate({scrollTop: 0}, 500, 'swing');
			
	});
		
});

// Loading Screen //

$(window).ready(function () {
	
	"use strict";
	
	// show The Scroll
	//$("body").css("overflow","auto");//
	// Loading Elements
	$(".load-over .loading , .load-over").fadeOut(2000, function () {
		$("body").css("overflow", "auto");
	});
	
	
});


$(window).scroll(function () {
	
	"use strict";

    if ($(this).scrollTop() > 200) {
        $('.option-box .gear-check').fadeOut();
	} else {
        $('.option-box .gear-check').fadeIn();
    }
});