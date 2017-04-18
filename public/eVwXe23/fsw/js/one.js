jQuery(document).ready(function($){
     $('#owl-example2').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:2,
    autoplay:true,
    slideBy:2,
    autoplayTimeout:5000,
    smartSpeed:300,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

/*************************************/
$(window).scroll(function(){
    if($(this).scrollTop()>=10){
     $('.navigation .navbar-default').css({
         'background':'#C6D5CD',
         'box-shadow':'0px 3px 6px 0px rgba(0,0,0,.6)'
     });   
     $('.navigation .navbar-default .navbar-right').css({
         'margin-top':'17px'
     });
     $('.navigation .navbar-default .navbar-brand').addClass('to-to');
    }
    else{
     $('.navigation .navbar-default').css({
         'background':'none',
         'box-shadow':'0px 0px 0px 0px transparent'
     });     
     $('.navigation .navbar-default .navbar-right').css({
         'margin-top':'75px'
     });
      $('.navigation .navbar-default .navbar-brand').removeClass('to-to');
    }
});
/*************************************/

new WOW().init();
});