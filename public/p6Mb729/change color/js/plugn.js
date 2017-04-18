/* global $ ,jquery ,alert ,console */
$(function () {
    
    "use strict";
    
    $(".links ul li a").on("click", function () {
    $("body").animate({
    scrollTop :$("#" + $(this).data('valu')).offset().top}, 800);
     
    });
    
    
    
    
    
    
    
//    making the header view 
    var head=$(".header");
    
    head.height($(window).height());
   
    $(window).resize(function(){
       
    head.height($(window).height());
    
        //edit the bxslider
   
        $(".bxslider").each(function(){

        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );
        
   });   
       
   });
//   making the hover for links
    $("ul li a").click(function(){
        
    $(this).parent().addClass("active").siblings().removeClass("active");                    
      });
//    start the trigger slider
    $('.bxslider').bxSlider({
        'pager':false,    
    });
//    end the trigger slider
//edit the bxslider
    $(".bxslider").each(function(){

    $(this).css
    ('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );
        
   }); 
//    end the bxsider
//    start the links 
  
    $(".links ul li a").on("click", function () {
    $("body").animate({
    scrollTop :$("#" + $(this).data('valu')).offset().top}, 1000);
     
    });
    
//    finished the links 
// my own slider 
    
    (function slider(){
        $(".slider .acty").each(function(){
        if (!$(this).is(':last-child')){
            $(this).delay(3000).fadeOut(2000,function(){
            $(this).removeClass("acty").next().addClass("acty").fadeIn(3000);  slider();
            });
        }else{
        $(this).delay(3000).fadeOut(3000,function(){
            $(this).removeClass("acty");
            $(".slider div").eq(0).addClass("acty").fadeIn(3000);
            slider();
            
        });    
            
        }
    });        
    }());
    
//    mixitup start
    $('#Container').mixItUp();
    
//nicescrool
    $("html").niceScroll({
        cursorcolor:'#1abc9c',
        cursorwidth:'10px',
        
    });
    
    
    
    
    
    
                            
    
  
      
    
    
    
    });
    
    
    
  
    
