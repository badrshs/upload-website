/* global $, jQuery, alert */
$(document).ready(function () {
    
    "use strict";
    
    //nice scroll
    $("html").niceScroll();
    
    $('.carousel').carousel({
        interval: 5000
        
});
    
    // show or hide color option box //
    $(".icon-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    
    // change theme color on click //
    var colorli=$(".color-option ul li");
    
    colorli
    .eq(0).css("backgroundColor", "#b30059").end()
    .eq(1).css("backgroundColor", "#a03232").end()
    .eq(2).css("backgroundColor", "#888844").end()
    .eq(3).css("backgroundColor", "#5585b5").end()
    .eq(4).css("backgroundColor", "#28abe3").end()
    .eq(5).css("backgroundColor", "#c762cb").end();
    
    colorli.click(function () {
        
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
    });
    
    
    // caching the scroll top element //
    var scrollbutton = $("#scroll-top");
    $(window).scroll(function () {
        
            if ($(this).scrollTop() >= 600){
                
                scrollbutton.show();
                
            }
            else{
                
                scrollbutton.hide();
                
            }
    });
    // click on button to scroll to top //
    scrollbutton.click(function () {
        
            $("html,body").animate({scrollTop: 0},500);
            
    });
    
});

// loading screen //
$(window).load(function () {
    
    "use strict";
    
    // loading elements //
    $(".loading-overlay .spinner").fadeOut(1000, function (){
            // show the scroll //
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(1000, function (){
                
                    $(this).remove();
                    
            });
    });
});
