/*global $, console, WOW, run*/
$(document).ready(function () {
    "use strict";
    var windowTop = $(window).scrollTop();
    $('.up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });
    
    $(window).on('scroll', function () {
        if ($(window).scrollTop() <= 1) {
            $('.up').fadeOut();
        } else if ($(window).scrollTop() > 1) {
            $('.up').fadeIn();
        }
    });
    
    $('header > .container .down .fa-chevron-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $('header .call-us').offset().top
        });
    });
    $("html").niceScroll({
        cursorcolor: "#EC1844",
        cursorwidth: 8,
        cursorborder: "0px solid #FFF",
        zindex: 100
    });
});