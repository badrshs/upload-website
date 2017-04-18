$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    });
    
    //Show Color Option Div//
    
    $(".cog-check").click(function(){
       $(".color-option").fadeToggle();
    });
    
    var colorLi = $(".color-option ul li");
    
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#FFD500");
    
    colorLi.click(function(){
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        });

    var scrollButton = $("#scroll-top");

    $(window).scroll(function(){

        if($(this).scrollTop() >= 700){

            scrollButton.show();
        }else{
            scrollButton.hide();
        }
    });

    //Click On Button To Scroll Top

        scrollButton.click(function(){
            $("html,body").animate({scrollTop : 0}, 600);
        });
});

$(window).on('load',function(){

      
     $(".loading-overlay .spinner").fadeOut(2000, 
        function(){

            $("body").css("overflow","auto");

            $(".loading-overlay").fadeOut(2000, 
                function(){
                    
                    $(this).remove();
                });

     });

});﻿


