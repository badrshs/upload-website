/*global $, jquery, alert*/
$('document').ready(function () {
   
    "use strict";

    $('.carousel').carousel();
    
    
    $('.navbar .nav li').click(function () {
        
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    
    
    $('.bxslider').bxSlider({
      infiniteLoop: false,
      pagerCustom: '#bx-pager',
      nextSelector: '#slider-next',
      prevSelector: '#slider-prev',
      nextText: '<i class="fa fa-angle-right fa-lg">',
      prevText: '<i class="fa fa-angle-left fa-lg">',
      speed: 1000
    });
    
    $('.contact .page-title h1').typed({
        
         strings: ["LOGANCEE"],
         showCursor: false,
         typeSpeed: 80,
         startDelay: 1000
    });
    
});