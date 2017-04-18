$(document).ready(function(){ 
    
    $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
    

$("html").niceScroll();  
    
    $(window).scroll(function(){
        
        if($(window).scrollTop >= 1){
            
            $('.fixed').css({'boxShadow': ' 0 4px 20px black'});
        
        }else{$('.fixed').css({'boxShadow': ' 0px 0px 0px transparent'});}
    });
    
    
     $(window).scroll(function(){
        
        var scr = $(window).scrollTop();
        
        
        if(scr > 1) {
            
            $('.fixed').css({'boxShadow': '0 4px 20px black'});
            
        } else {
            $('.fixed').css({'boxShadow': '0px 0px 0px transparent'});
        
        }
        
    }); 
    
    
    
    $('.yoga').mouseenter(function(){
        
        $('.y-content').css({
            transform: 'scale( 1 , 1)',
            opacity: '1'});
    }),

    $('.yoga').mouseleave(function(){
        
        $('.y-content').css({
            transform: 'scale( 1.5 , 1.5)',
            opacity: '.0'});
    });
    
    
    $('.boxing').mouseenter(function(){
        
        $('.b-content').css({
            transform: 'scale( 1 , 1)',
            opacity: '1'});
    }),

    $('.boxing').mouseleave(function(){
        
        $('.b-content').css({
            transform: 'scale( 1.5 , 1.5)',
            opacity: '.0'});
    });
    

     
    $('.cycling').mouseenter(function(){
        
        $('.c-content').css({
            transform: 'scale( 1 , 1)',
            opacity: '1'});
    }),

    $('.cycling').mouseleave(function(){
        
        $('.c-content').css({
            transform: 'scale( 1.5 , 1.5)',
            opacity: '.0'});
    });
    
    
     $('.zumba').mouseenter(function(){
        
        $('.z-content').css({
            transform: 'scale( 1 , 1)',
            opacity: '1'});
    }),

    $('.zumba').mouseleave(function(){
        
        $('.z-content').css({
            transform: 'scale( 1.5 , 1.5)',
            opacity: '.0'});
    });
    
    
    $('.jumbing').mouseenter(function(){
        
        $('.j-content').css({
            transform: 'scale( 1 , 1)',
            opacity: '1'});
    }),

    $('.jumbing').mouseleave(function(){
        
        $('.j-content').css({
            transform: 'scale( 1.5 , 1.5)',
            opacity: '.0'});
    });
    
    
    $('.les').mouseenter(function(){
        
        $('.l-content').css({
            transform: 'scale( 1 , 1)',
            opacity: '1'});
    }),

    $('.les').mouseleave(function(){
        
        $('.l-content').css({
            transform: 'scale( 1.5 , 1.5)',
            opacity: '.0'});
    });
    
  
    
});