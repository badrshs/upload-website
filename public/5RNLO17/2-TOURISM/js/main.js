/*global $*/
/*Table Content
===========================
  # Slider
  # Timer
  


/* Timer Counter
===============================*/
var v_count = '0';
    
$(window).scroll(function () {
    
    'use strict';
    
    $('.timer').each(function () {

        var imagePos = $(this).offset().top,

            topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + 500 && v_count === '0') {

            $(function ($) {
                
                function count(options) {
                      
                    v_count = '1';
                    options = $.extend({}, options || {}, $(this).data('countToOptions') || {});
                    $(this).countTo(options);
                }
                
                // start all the timers
                $('.timer').each(count);
            });
        }
    });
    
});
$(document).ready(function () {
    
    "use strict";
    $("#carousel-testimonials").owlCarousel({
        loop: true,
        nav: true,
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        items : 5,
        itemsDesktop : [1000, 4],
        itemsDesktopSmall : [900, 4],
        itemsTablet: [600, 2],
        itemsMobile : [480, 1],
        navigation : true,
        pagination : false
    });
});
$(document).ready(function () {
    
    "use strict";
    $("#about-slider").owlCarousel({
      slideSpeed : 300,
        autoPlay: true ,
      paginationSpeed : 400,
      singleItem:true
    });
});