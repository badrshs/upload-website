$(document).ready(function(){
    $(".image").on("click",function(){
        $(this).addClass("active").siblings("div").removeClass("active");
    })
    $(".image").each(function(){
        if ($(this).hasClass("active")) {
            $(".image .text").show()
        }
        
    })
});