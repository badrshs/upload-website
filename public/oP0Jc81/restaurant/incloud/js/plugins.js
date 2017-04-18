/*global $, console, jQuery, alert*/
$(function () {
    
    "use strict";
    
    // niceScroll          
    $('html').niceScroll();
    
    // Used to toggle the menu on small screens when clicking on the menu button
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "links") {
            x.className += " responsive";
        } else {
            x.className = "links";
        }
    }
        /*  لالغاء (logo) عند الضغط على القائمة 
            $('.icon').click (function() {

                $('.brand').toggle();
            }); 
        */
    
    // Adjust header height
    var myHeader = $('.header');
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    });
   
    // Links add active class 
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
   
    // Caching The ScrollTop Element
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({scrollTop : 0}, 600);
    });
    
});

