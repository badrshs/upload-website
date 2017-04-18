/*global $ */

$(document).ready(function () {
    "use strict";
    // header hight and center the element
    $(".header").height($(window).height());
    $(".headinfo").css('paddingTop', ($(window).height() - $(".headinfo").height())  /  2);
    $(window).resize(function () {
        $(".header").height($(window).height());
        $(".headinfo").css('paddingTop', ($(window).height() - $(".headinfo").height())  /  2);
    });
    // click to features
    
    // trigger nice scroll
    $("html").niceScroll({
        cursorcolor: "#f60",
        cursorborder: 0,
        cursorwidth: "8px"
    });
    $(".header .fa-chevron-down").click(function () {
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });
    $(".ourwork .container > button").click(function () {
       
        $(".ourwork .img").fadeIn(1000);
        $(".ourwork .container > button").fadeOut(1000);
    });
    // testimonial
    var right = $(".testim .fa-chevron-right"),
        left   = $(".testim .fa-chevron-left");
    function check() {
        if ($(".box:first").hasClass("active")) {
            left.fadeOut();
        } else {
            left.fadeIn();
        }
        if ($(".box:last").hasClass("active")) {
            right.fadeOut();
        } else {
            right.fadeIn();
        }
       
    }
    check();
    $(".testim i").click(function () {
        if ($(this).hasClass("fa-chevron-left")) {
            $(".testim .active").fadeOut(1000, function () {
                $(this).removeClass("active").prev(".box").addClass("active").fadeIn();
                check();
            });
        } else {
            $(".testim .active").fadeOut(1000, function () {
                $(this).removeClass("active").next(".box").addClass("active").fadeIn();
                check();
            });
        }
    });
});












