$(function(){
    "use strict";
    // use nice scroll
    $('.carousel').carousel({
  interval: 5000
    })
 $(".gear").click(function(){
     $(".color").toggle(1000)
 });
    var color = $(".option_box ul li")
    
    color
    .eq(0).css("background",'#f00').end()
    .eq(1).css("background",'#3498DB').end()
    .eq(3).css("background",'#D35400').end()
    
    color.click(function(){
        console.log($(this).attr("data-value"))
       $("link[href*=theme]").attr("href",$(this).attr("data-value"))
    })
    
    var scrollButton = $(".scroll-to-top")
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 700 )
            {
                scrollButton.show()
            }else{
                scrollButton.hide()
            }  
    });
    scrollButton.click(function(){
        $("html , body").animate({
            scrollTop:0
        },1000)
    });
    
});
$(window).load(function(){
    $(".loading").fadeOut(500,function(){
        $("body").css("overflow",'auto').delay()
    })
});