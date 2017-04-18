/*global $, jQuery, alert, interval, smoothScroll*/

$(function () {
    'use strict';
    
    var myHead = $(".head");
    
    myHead.height($(window).height());
    
    $(window).resize(function () {
        
        myHead.height($(window).height());
    });
});
