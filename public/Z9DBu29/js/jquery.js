$(function () {
    'use strict';
	//  MixItUp:
    
	$('#Container').mixItUp();
    $('our_portfolio button').on("click", function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
//    start 
    $(window).scroll(function(){
        var STT = $(this).scrollTop()
        var ost = $(".services .row >div ").position().top
        console.log(ost)
        if (STT > ost/2){
           $(".services .row >div ").first().animate({top:0,opacity:1}).end()
            .eq(1).animate({top:0,opacity:1},1000).end()
            .eq(2).animate({top:0,opacity:1},1500).end()
            .eq(3).animate({top:0,opacity:1},2000,function(){
                $(".services .row >div ").css("position",'static')
            }).end()
        }
       
    })
    
    $("html").niceScroll();
});
