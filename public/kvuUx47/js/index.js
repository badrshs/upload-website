function HeightBackground(){
    height = $(window).height();
    $("#cover").css({
        
        'height' : Height
    })
}
$(document).ready(function(){
    
    
    HeightBackground();
    $(window).resize(function(){
        HeightBackground();
    })
})