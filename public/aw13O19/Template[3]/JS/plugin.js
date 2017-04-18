/*global $, alert, console*/

$(function () {
   
    "use strict";
    
    // Adjust Header Height
    
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        
        mySlider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
        
    });
    
    // Links Add Active Class 
    
    $('.links li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    // Adjust Bxslider List Item Center 
    
    mySlider.each(function () {
        
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    // Trigger The BxSlider 
    
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    // Smooth Scroll To Div 
    
    $('.links li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
        // Trigger niceScroll
    
    $('html').niceScroll({
        
        cursorcolor : '#e43837',
        
        cursorwidth : '9px',
        
        cursorborder : '1px solid #1abc9c',
        
        cursorborderradius : 0,
        
        scrollspeed  : 40
        
        
    });
    
    
    
});