/*global $ ,alert , console*/

$(function () {
    
    'use strict';
    
    var myHeader = $('header'),
        
        mySlider = $('.bxslider');
    
    //adjust header height
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        //adject header height on window resize
        myHeader.height($(window).height());
        
        //adjust bxSlider <li> to center on resize
        mySlider.each(function () {
       
            $(this).css('paddingTop', ($(window).height() -  $('.bxslider li').height()) / 2);
        
        });
        
    });
    
    //Add class .Active to the clicked li and remove it from others
    $('.links li a').click(function () {
       
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
    });
    
    //adjust bxSlider <li> to center
    mySlider.each(function () {
       
        $(this).css('paddingTop', ($(window).height() -  $('.bxslider li').height()) / 2);
        
    });
    
    //Trigger bxSlider
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    //smooth scroll to each <div> when click on About Link
    $('.links li a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
                  
        /*
        ckick on Services link =>: $('#' + $(this).data('value')) = #serv
        ckick on Tetimonials link =>: $('#' + $(this).data('value')) = #testm
        ckick on Portfolio link =>: $('#' + $(this).data('value')) = #portf
        ckick on Contacts link =>: $('#' + $(this).data('value')) = #cont 
        */
        
    });
    
    //our auto slider for testimonials
    // we need self invoke function
    (function autoslider() {
        
        $('.slider .active').each(function () {
    
            if (!$(this).is(':last-child')) {
                
                $(this).delay(5000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    $(this).next().addClass('active').fadeIn();
                    
                    autoslider(); // call invoke function   
                    
                });
            }
                
                else {
                  
                    $(this).delay(5000).fadeOut(1000, function () {
                   
                        $(this).removeClass('active');
                        $('.slider div').eq(0).addClass('active').fadeIn();
                        
                        autoslider(); // call invoke function   
                      
                    });
                }
        });
    
    }());
    
    // Trigger MixItUp:
	$('#gallery-container').mixItUp();
    
    $('.our-projects ul li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
    //Trigger NiceScroll
    $('html').niceScroll({
        cursorcolor: '#1ABC9C',
        cursorwidth: '10px',
        cuesorborderradius: '0'
    });

    
});