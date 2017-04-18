/*global alert,$,console*/
$(function () {
    
    'use strict';
    
    
    //Trigger niceScroll 
    $('html,body').niceScroll({
        
        cursorcolor: '#F7600E',
        cursorwidth: 10,
        cursorborderradius: 10,
        cursorborder: '1px solid #F7600E'
    });
    

    //Make Header height = windows Height on window resize
    $('header').height($(window).height());
    
    $(window).resize(function () {
        
        $('header').height($(window).height());
        
    });
    
    
    
    
    //scroll to features section when click on cheveron-down icon
    $('header .arrow i').click(function () {
       
        $('html,body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
        
    });
    
    
    //scroll to our-team section when click on HIRE ME button
    $('.hire-me-btn').click(function () {
       
        $('html,body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        }, 1000);
        
    });
    
    //scroll to our-work section when click on OUR WORK button
    $('.our-work-btn').click(function () {
       
        $('html,body').animate({
            
            scrollTop: $('.our-work').offset().top
            
        }, 1000);
        
    });
    
    
    //show hidden items of our works
    $('.show-more-btn').click(function () {

        
        if ($(this).text() === 'SHOW MORE') {
            
            $(this).text('SHOW LESS');
            
        }
        
        if ($(this).text() === "SHOW LESS") {
            
            $(this).text("SHOW MORE");
            
        }
        
         // select from item 7 to the end
        $(".items-box .item:nth-child(n+7)").toggleClass('hidden');
        
    });
    
    
    
    //testimonials => check left and right cheverons status
    
    function checkClients() {
        
        var leftArrow = $('.testim .fa-chevron-left'),
    
            rightArrow = $('.testim .fa-chevron-right');
        
        if ($('.client:first').hasClass('active')) {
           
            rightArrow.fadeIn();
            leftArrow.fadeOut();
            
        } else if ($('.client:last').hasClass('active')) {
            
            leftArrow.fadeIn();
            rightArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
            rightArrow.fadeIn();
           
        }
        
    }
    
    checkClients();
    
    
    $('.testim .fa-chevron-right').click(function () {
            
        $('.testim .active').fadeOut(500, function () {
               
            $(this).removeClass('active').next('.client').addClass('active').fadeIn(500);
                
            checkClients(); // to check left and right cheverons on each click
                
        });
        
    });
    
    $('.testim .fa-chevron-left').click(function () {
            
        $('.testim .active').fadeOut(500, function () {
               
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn(500);
                
            checkClients(); // to check left and right cheverons on each click
                
        });
        
    });
            
    
});