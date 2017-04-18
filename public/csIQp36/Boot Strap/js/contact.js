$(document).ready(function(){
    
    $("html").niceScroll();
    
    $(".gear-check").click(function(){
        
    $(".option-color").toggle()
    });
    
    
    $(window).load(function(){
        
        
        
        
        $(".overlay .spinner").fadeOut(2000,function(){
        
        $("body").css("overflow","auto");
            
        $(this).parent().fadeOut(2000,function(){
            
            
            
            $(this).remove()
        });
    });
        
        
        
});
    
});