$(document).ready(function(){
    $(".header").height($(window).height());
    $(window).resize(function(){
        $(".header").height($(window).height());
        
        $(".bxslider").each(function(){
            $(this).css("padding-top",($(window).height() - $(".bxslider li").height()) / 2);
        });
    });
    
    
    $(".list li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    $('.bxslider').bxSlider({
        pager:false,
        speed:800
        });
    $(".bxslider").each(function(){
            $(this).css("padding-top",($(window).height() - $(".bxslider li").height()) / 2);
        });
   
    $(".list li a").click(function(){
        $("html body").animate({
            scrollTop : $("#" + $(this).data("value")).offset().top
        },1000)
    });
    
    
    (function autoslider(){
        $(".slider .active").each(function(){
            if (!$(this).is(":last-child")) {
            $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass("active").next().addClass("active").fadeIn()
                autoslider();
        });
            }else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass("active")
                    $(".slider div").eq(0).addClass("active").fadeIn()
                    autoslider()
                })
            }
        })
        
        
    }());
    
    $(".list2 li").click(function(){
        $(this).addClass("active2").siblings().removeClass("active2")
    })
    
    $('#Container').mixItUp();
    
    
    $("html").niceScroll({
        cursorborder:"none",
        cursorcolor:"#1ABC9C",
        cursorwidth:"8px",
        cursorborderradius:0,
        });
    
});