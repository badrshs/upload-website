/*global $, alert, console*/

$(document).ready(

    function () {
      
        'use strict';

        
        $(".slide .header-arrow i").click(function () {
            $("html, body").animate({
                scrollTop: $(".project").offset().top
            }, 1000);
            
        });
        
        $(".project .project-arrow i").click(function () {
            $("html, body").animate({
                scrollTop: $(".contact-me").offset().top
            }, 1000);
            
        });

        
    }

);


