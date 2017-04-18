/*global $, console, WOW, run*/
$(window).ready(function () {
    "use strict";
    //global
    //nav
    $('.navbar-default .navbar-nav > li').on('click', function () {
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
    });

    //header
    $('header, .price-header').css({
        minHeight: $(window).height() - $('.navbar-default').height() - 32
    });
    //global header
    $('.global-header, .price-header').css({
        minHeight: ($(window).height() - $('.navbar-default').height() - 32) - ($('.ready-to-learn').height() + 40)
    });

    
    //our-clients && slider
    $('.customer-says i').css({
        top: ($('.customer-says .slider').height() - $('.customer-says i').height()) / 2
    });
    if ($(window).width() <= 768) {
        //header edit
        $('header, .price-header').css({
            minHeight: $(window).height() - $('.navbar-default').height()
        });
        $('.customer-says i').css({
            top: ($('.customer-says .slider').height() - $('.customer-says i').height()) / 2 + 20 //mobile fix
        });
        $('.price-header').css({
            minHeight: $(window).height()
        });
        $('header, .global-header, .price-header').css({
            marginTop: $('.navbar-default').height()
        });
        $(window).on('scroll', function () {
            if ($(window).scrollTop() <= 1) {
                $('header .call-us, .global-header .call-us, .price-header .call-us').css({
                    position: "relative",
                    top: "0"
                });
                $('header .call-us p, .global-header .call-us p, .price-header .call-us p').css({
                    padding: 5
                });

            } else if ($(window).scrollTop() > 1) {
                $('header .call-us, .global-header .call-us, .price-header .call-us').css({
                    position: "fixed",
                    top: "50px"
                });
                $('header .call-us p, .global-header .call-us p, .price-header .call-us p').css({
                    padding: 1
                });
            }
        });

    }
    
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
    
    
    //security
    $('.global-header .container > .row .box').css({
        bottom: ($('.global-header .container > .row').height()) - ($('.global-header .container > .row').height() * 2)
    });
    
    if ($(window).width() > 768) {
        $('.adt-pluse .nest-features').css({
            minHeight: $('.adt-pluse .nest-container .nest').height() + 100
        });
        $('.adt-pluse .nest-container .nest').css({
            minHeight: $('.adt-pluse .nest-features').height() + 40
        });
        $('header, .global-header, .price-header').css({
            marginTop: $('.navbar-default').height() + 32
        });
        $(window).on('scroll', function () {
            if ($(window).scrollTop() <= 1) {
                $('.navbar-default').css({
                    padding: "15px 0"
                });
                if ($('.navbar-default .navbar-nav>li.after').hasClass('after')) {
                    $('.navbar-default .navbar-nav>li.after').removeClass('after').addClass('selected');
                }
                $('header .call-us, .global-header .call-us, .price-header .call-us').css({
                    position: "relative",
                    top: "0"
                });
                $('header .call-us p, .global-header .call-us p, .price-header .call-us p').css({
                    padding: 20
                });
                
            } else if ($(window).scrollTop() > 1) {
                $('.navbar-default').css({
                    padding: "7px 0"
                });
                if ($('.navbar-default .navbar-nav>li.selected').hasClass('selected')) {
                    $('.navbar-default .navbar-nav>li.selected').removeClass('selected').addClass('after');
                }
                $('header .call-us, .global-header .call-us, .price-header .call-us').css({
                    position: "fixed",
                    top: "66px"
                });
                $('header .call-us p, .global-header .call-us p, .price-header .call-us p').css({
                    padding: 5
                });
            }
        });
    }
    
    //price
    $('.price-header .fa-chevron-down').on('click', function () {
        $('html, body').animate({
            scrollTop: ($('.price-main').offset().top - $('.navbar-default').height()) - $('.price-header .call-us').height() + 22
        }, 700);
    });
    $('.price-main .row .col-sm-3 span').on('click', function () {
        $(this).parent().siblings('.features').children().slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('HIDE FEATURES');
        } else {
            $(this).text('View Features');
        }
    });

});