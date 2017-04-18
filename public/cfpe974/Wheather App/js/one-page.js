jQuery(document).ready(function($){
    $('.header-sec .header-menu-button a').click(function(){
            $('.header-sec .header-menu-button li > ul').toggleClass('active-menu');
            $('.header-sec .header-menu-button a i').toggleClass('icon-menu-1').toggleClass(' icon-menu-2');
    });
    if($(".header-sec .header-menu-button a i").hasClass("icon-menu-2")){
        $('.header-sec .header-menu-button a i').css({
            'padding-right':'0px'
        });
    }
    else{
         $('.header-sec .header-menu-button a i').css({
            'padding-right':'5px'
        });
    }
    
     $("#testi-owl").owlCarousel({
     items:6,
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
    
    
    
    new WOW().init();
});