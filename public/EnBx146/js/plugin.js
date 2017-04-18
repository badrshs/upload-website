/*global $, console, WOW, run*/
$(window).ready(function () {
    "use strict";
    //global
    //$('.section').height($(window).height() / 2);
    //nav
    $('.navbar-default .navbar-nav > li').on('click', function () {
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
    });
    
    //header
    $('header').css({
        minHeight: $(window).height() - $('.navbar-default').height() - 32
    });
    
    //why choose us
    $('.why-choose-adt').height($(window).height() / 3);
    
    //our-clients && slider
    $('.customer-says i').css({
        top: ($('.customer-says .slider').height() - $('.customer-says i').height()) / 2
    });
    
    function checkcusttomers() {
        var leftArrow = $('.customer-says .fa-chevron-left'),
            rightArrow = $('.customer-says .fa-chevron-right');
        if ($('.customer:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else if ($('.customer:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
            rightArrow.fadeIn();
        }
    }
    checkcusttomers();
    $('.customer-says i').on('click', function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.customer-says .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.customer').addClass('active').fadeIn();
                checkcusttomers();
            });
        } else if ($(this).hasClass('fa-chevron-left')) {
            $('.customer-says .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.customer').addClass('active').fadeIn();
                checkcusttomers();
            });
        }
    });
});