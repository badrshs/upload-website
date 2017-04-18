jQuery(document).ready(function($){
    $(window).scroll(function(){
        if($(this).scrollTop()>= 10){
            $('.navigation .navbar-default').css({
                'background':'#956e33',
                'margin-top':'0px'
            });
        }
        else{
           $('.navigation .navbar-default').css({
                'background':'none',
                'margin-top':'80px'
            }); 
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>= '300px'){
            $('.updown p').slideDown();
        }
        else{
            
                $('.updown p').slideUp();
            
        }
    });
       $("#testi-owl-2").owlCarousel({
          items:5,
    loop:true,
    margin:0,
    merge:true,
    autoplay:true,
    slideBy:2,
    responsive:{
        0:{
         mergeFit:true  
        },
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
    
            });
               // Simple elevator usage.
            var elementButton = document.querySelector('.elevator a');
            var elevator = new Elevator({
                element: elementButton,
                mainAudio: './music/m-scroll.mp3', // Music from http://www.bensound.com/
                endAudio:  ''
            });
            new WOW().init();
});