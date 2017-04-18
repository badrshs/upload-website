/*global $, alert, console*/

$(document).ready(

    function () {
      
        'use strict';

        $("html").niceScroll();
        
        $("header").height($(window).height());
        
        $("header .header-arrow i").click(function () {
            $("html, body").animate({
                scrollTop: $(".teacher").offset().top
            }, 1000);
            
        });
        
        $(".teacher .teacher-arrow i").click(function () {
            $("html, body").animate({
                scrollTop: $(".project").offset().top
            }, 1000);
            
        });
        
        $(".project .project-arrow i").click(function () {
            $("html, body").animate({
                scrollTop: $(".social").offset().top
            }, 1000);
            
        });
    }

);
