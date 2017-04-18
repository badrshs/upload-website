/*global $, jQuery, Alert */

$(document).ready(function () {
	
	"use strict";

    $('.carousel').carousel({
	    interval: 5000
	});

    // Show color option by clicking on the gear

    $(".gearchk").click(function () {

        $(".color-option").fadeToggle();

    });
    
    // Change theme color on click
    
    var colorLi = $(".color-option ul li"),
		scrollButton = $("#scroll-top");
		
    
    colorLi
        .eq(0).css("backgroundColor", "#6b1b96").end()
        .eq(1).css("backgroundColor", "#cb4f12").end()
        .eq(2).css("backgroundColor", "#0383c1");
    
    colorLi.click(function () {
		
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
		
    });
    
    // Loading Screen
    
    $(window).ready(function () {
 
        // Loading elements    
            
        $(".loading .overlay-loader").fadeOut(1000,
            function () {
         
			// Showing the scroll    
		        $("body").css("overflow", "auto");
			
                $(this).parent().fadeOut(1000);
			
            });
                
    });
    
    // Scroll Top 
    
    $(window).scroll(function () {
      	
	    if ($(this).scrollTop() >= 890) {
			
			scrollButton.fadeIn();
			
		} else {
		    scrollButton.fadeOut();
        }
		
    });
    
    // Click on button to scroll up..

    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop: 0 }, 650);
        
    });

    
});



