jQuery(document).ready(function(){
$(window).scroll(function(){
    if($(this).scrollTop()>=5){
        $('.navbar-default').css({'background':'linear-gradient(rgba(232,131,130,.95),rgba(231,168,124,.95))',
           'box-shadow':'0px 2px 3px rgba(0, 0, 0, 0.6);'
        });
    } 
    else{
         $('.navbar-default').css({'background':'none' ,
          'transform':'rotateY(0deg)',
        'box-shadow':'0px 0px 0px 0px transparent'
        });
     }
 });
 $('.counter').counterUp({
                delay:4,
                time: 1000
            });
            $("#testi-owl").owlCarousel({
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
            $('.map-sec .map-hover span').click(function(){
                $('.map-sec .map-hover').slideUp(1000,function(){
                    $('.map-sec .map-down-hover').slideDown();
                });
            });
            $('.map-sec .map-down-hover i').click(function(){
                $('.map-sec .map-down-hover').slideUp(function(){
                    $('.map-sec .map-hover').slideDown(1000);
                });
            });
            
    /**********wow.js**********/
       new WOW().init();
});
