/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    // Adjust Header Height
    
    $('.header').height($(window).height());
    
    $(window).resize(function () {
        
        $('.header').height($(window).height());
        
        // Adjust Bxslider List Item Center
        
        $('.bxslider').each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });
        
    });
    
    // Links Add Active Class
    
    $('.links li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    // Adjust Bxslider List Item Center
    
    $('.bxslider').each(function () {
        
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Trigger The Bx Slider
    
    $('.bxslider').bxSlider({
        
        pager: false
        
    });
    
    // Smooth Scroll To Div
    
    $('.links li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
        
        }, 1000);
        
    });
    
            // our Auto Slider Code
        
    (function autoSlider() {
            
        $('.slider .active').each(function () {
                
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                    
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
                
        });
            
    }());
    
    // Trigger Mixitup
    
    $('#Container').mixItUp();
    
});