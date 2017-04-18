$(document).ready(function () {
	$('.nav ul li a').hover(function () {
		"use strict";
		$(this).css({"border": "2px solid #fff"});
	}, function () {
		$(this).css({"border": "none"});
	});
	
	
	$('a').click(function () {
		"use strict";
		$(this).css({"color": "#260126"});
	});
	
	$('.content .detail button').click(function () {
		var x = $('.content .detail p:first').next();
		x.slideDown();
		$('.content .detail button').hide();
	});
	
});