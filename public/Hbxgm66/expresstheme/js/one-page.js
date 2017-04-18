
/********************menu****************************/
$(window).scroll(function(){
    if($(this).scrollTop()>=5){
        $('.navbar-default').css({'background':'#108DDF',
        'animation':'scaleanimation .4s ease-in-out',
        '-o-animation':'scaleanimation .4s ease-in-out',
        '-webkit-animation':'scaleanimation .4s ease-in-out',
        '-moz-animation':'scaleanimation .4s ease-in-out'
        });
        $('.navigation .navbar-default .navbar-nav > li > a').css('margin-top','20px');
        $('.navigation .navbar-header .navbar-brand').css('margin-top','0px');
        $('.navigation .submenu').css('top','105px');
    }
    else{
         $('.navbar-default').css({'background':'none',
         'animation':'translateanimation .4s ease-in-out',
         '-o-animation':'translateanimation .4s ease-in-out',
         '-moz-animation':'translateanimation .4s ease-in-out',
         '-webkit-animation':'translateanimation .4s ease-in-out'
        });
         $('.navigation .navbar-default .navbar-nav > li > a').css('margin-top','46px');
         $('.navigation .navbar-header .navbar-brand').css('margin-top','38px');
         $('.navigation .submenu').css('top','120px');
    }
    
});
  // Isotope activation js codes

jQuery(document).ready(function($){
   
     // Activate isotope in container
 
    $(".portfolio_items").isotope({
        itemSelector: '.single_item',
        layoutMode: 'fitRows'
    });
    
    // Add isotope click function
    
    $('.portfolio_filter li,.portfolio_filter option').click(function(){
        $(".portfolio_filter li,.portfolio_filter option").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    
});

/*******************wow.js*******************************/
$(document).ready(function(){
    new WOW().init();
});
