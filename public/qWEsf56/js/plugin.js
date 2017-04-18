$(document).ready(function(){
    $(".navbar ul li").click(function(){
        
        $(this).addClass("active").siblings("li").removeClass("active")
    })
    
    
    
    $(".items").click(function(){
        $(this).addClass("active").siblings(".items").removeClass("active");
        $(this).addClass("active").siblings(".items").removeClass("active");
        $(".active i:last-of-type").css("transform","rotate(270deg)");
        $(".acc i:last-of-type").not(".active i:last-of-type").css("transform","rotate(90deg)")
        })
    $(".acc .items.active i:last-of-type").css("transform","rotate(270deg)");
    
        
        
    (function auto(){
        $(".slider .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    auto()
                })
                }else{
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass("active");
                        $(".slider .row").eq(0).addClass("active").fadeIn();
                        auto()
                    })
                }
        })    
    }()) 
    
    
    
    
    (function auto_two(){
        $(".slider-two .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    auto_two()
                })
                }else{
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass("active");
                        $(".slider-two .row").eq(0).addClass("active").fadeIn();
                        auto_two()
                    })
                }
        })    
    }())
    
    

})