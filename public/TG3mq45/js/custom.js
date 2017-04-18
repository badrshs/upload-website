/*global $, alert , console*/


$(function () {
	
	"use strict";
	
	$(".header").resize($(".header").height($(window).height()));
	
	$(".header").height($(window).height());
	
	
	
	$(".header .arrow i").click(function () {
		
		
		$("html ,body").animate({
			
		    scrollTop: $(".fea").offset().top
			
		}, 1000);
		
	});
	
	// show photo 
	
	$(".show-more").click(function () {
		
		$(".hidden").fadeIn(1000);
		
	});
	
	// arrow change photo
	
	var leftarrow = $(".fa-chevron-left"),
		rightarrow = $(".fa-chevron-right");
	
	function checkclient() {
		
	
		
		$(".client:first").hasClass("active") ? leftarrow.fadeOut() : leftarrow.fadeIn();
		
		$(".client:last").hasClass("active") ? rightarrow.fadeOut() : rightarrow.fadeIn();

	}
	
	checkclient();
	
	
	
	$(".testm i").click(function () {
		
		if ($(this).hasClass("fa-chevron-right")) {
			
			$(".testm .active").fadeOut(100, function () {
				
				$(this).removeClass("active").next(".client").addClass("active").fadeIn();
				
				checkclient();
			});
			
			
		} else {
			
			
		    $(".testm .active").fadeOut(100, function () {
				
				$(this).removeClass("active").prev(".client").addClass("active").fadeIn();
				
				checkclient();
					
			});
			
			
			
			
			
			
		}
		
		
	});
	
	
	
	
});

	


