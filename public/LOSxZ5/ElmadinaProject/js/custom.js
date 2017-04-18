$(function () {
   $('html').niceScroll(); 
    
    //nav
    $(window).scroll(function() {
     if($(window).scrollTop() >= $('.navbar').height() ){
       $('.navbar').addClass('scrolled')
     
     } else {
             $('.navbar').removeClass('scrolled');
        }
       
    });
    //nav
    //start header
    
    //arrow move
     $('.header').height($(window).height());
    
    $(function inf() {
         $('.arrow').animate({
        bottom:'30px',
            
    },1000, function () {
              $('.arrow').animate({
        bottom:'3px'
        
        
    },1000, function (){
                 inf(); 
              });
    
         });
   
    });
    //move the next section
    $('.header .arrow').click(function () {
       $(' html , body').animate({
          scrollTop: '620px'
           
       },2000); 
    });
    //about
    $(window).scroll(function () {
        if($('.navbar').height() >= $('.about').offset().top ){
            $('.navbar').hide();
        }
    });
 
});