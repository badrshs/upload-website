/* global $, alert, console */

$(function(){
    
    'use strict';
    
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor:'#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    });
    
    //Change Header Height
    
    $('header').height($(window).height());
    
    //Scroll To Features
    
    $("header .arrow i").on("click", function()
    {
        $("html, body").animate(
        {
            scrollTop:$(".features").offset().top
        },1000);
    });
   
    $("header .hire").on("click", function()
    {
        $("html, body").animate(
        {
            scrollTop:$(".our-team").offset().top
            
        },2600);
    });
    
    // Show Hidden Items
    
    $(".show-more").click(function()
    {
        $(".our-works .hidden").fadeIn(1000);
        $(this).hide();
    });
    $(".fox").click(function()
    {
        $(this).hide();
        $(".our-works .hidden").fadeOut(1000);
        $(".show-more").show();
    });
    
    // Check Testimonials
    
    function checkClient(){
        
        var rightArrow = $('.testim .fa-chevron-right'),
            
            leftArrow = $('.testim .fa-chevron-left');
    
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    
    checkClient();
    
    $('.testim i').click(function(){
    
        if($(this).hasClass('fa-chevron-right')){
        
           $('.testim .active').fadeOut(100, function(){
           
               $(this).removeClass('active').next('.client').addClass('active').fadeIn();
           
               checkClient();
               
           });
        
        }else{
        
            $('.testim .active').fadeOut(100, function(){
           
               $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
           
               checkClient();
               
           });
        }
    
    });
    
    
});