/*global $, alert, console*/

$(function () {
    
    'use strict';
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll();
    
    // Change Header Height
    
    $('.header').height($(window).height());
    
    //Scroll to Features
    
    $('.header .arrow i').click(function(){
       $('html, body').animate({
           scrollTop: $('.features').offset().top
       }, 500); 
    });
    
    //show more
    $('.show').click(function () {
        
        $('.our .hidden').slideToggle(1000);
        
    });
});