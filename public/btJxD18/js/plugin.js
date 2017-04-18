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
    
        
        
        
    $("#left").click(function(){
        $("#fir").css({"display":"inline-block"})
        $("#sec").css({"display":"none"})
    })
     $("#right").click(function(){
        $("#sec").css({"display":"inline-block"})
        $("#fir").css({"display":"none"})
    })
     
     
    $("#left2").click(function(){
        $("#fir2").css({"display":"inline-block"})
        $("#sec2").css({"display":"none"})
    })
     $("#right2").click(function(){
        $("#sec2").css({"display":"inline-block"})
        $("#fir2").css({"display":"none"})
    }) 
    
    

})