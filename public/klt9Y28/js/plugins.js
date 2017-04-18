/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";

// Loading Screen

    $(window).load(function () {
    
       
    
    // Loading Elements
    
        $(".loading-overlay .spinner").fadeOut(3000, function () {
        
        // Show The Scroll

            $("body").css("overflow", "auto");
        
            $(this).parent().fadeOut(3000, function () {
            
                $(this).remove();
            });
        });
    });
});