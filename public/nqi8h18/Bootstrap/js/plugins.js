/*global $, jQuery, alert*/

$(document).ready(function () {
   
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 4000
        
    });
    
    // Show Color Option Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
});