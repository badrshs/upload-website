$(function (){
    'use strict';
    
    
    // height header
    $('header').height($(window).height());
    $(window).resize(function(){
         $('header').height($(window).height());
    });
    
    //height slider
    $('.slider').height($(window).height() - 115);
    $(window).resize(function(){
         $('.slider').height($(window).height() - 115 );
    });
    
    //center the li in header
    $('.bxslider').each(function(){
        
        $(this).css('paddingTop' , ($(window).height() - $('.bxslider li').height()) / 2 - 100);
        
    });
    
    // list active
    $('.nav li').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
    });
    
    //progress number
    $('.progress-number').each(function() {
      $(this).animate({
        left: $(this).data('percentage')
    }, {
        duration: 2000,
    step: function( noow ){
          var data = Math.round(noow);
          $(this).text(data);
        }
      });
    });
    $('.nav li a').click(function(){
        $('html ,body').animate({
            scrollTop: $('.' + $(this).data('value')).offset().top
        } , 1000);
    });
    
    //nice scroll
    $("html").niceScroll({
        cursorcolor: "#1ca2cf",
        cursorwidth: "8px",
        cursorborder: "0",
        autohidemode: "false",
        
        
        });
    
    //scroll to top
    var scrollButton = $("#scroll-top");

    // Scroll Top
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 600) {
        scrollButton.show();
      } else {
        scrollButton.hide();
      }
    });
    scrollButton.click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
    });
        
    // bx slider
    $('.bxslider').bxSlider({
        auto: true,
        });
    
    
});