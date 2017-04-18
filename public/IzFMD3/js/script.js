$(document).ready(function() {
    $(".search_btn").click(function(){
        $(".search_box").show();
    });
    
    $('.close_search').click(function(){
       $('.search_box').hide() ;
    });
    
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 2,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

        });

        $("#owl-brand").owlCarousel({

        autoPlay: 4000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],

    });

    $(".menu").click(function(){$("header nav").slideToggle( "slow" );});
        var scrooltop = $('.up');$(window).scroll(function(){if ($(this).scrollTop() >= 600 ){scrooltop.show();}else{scrooltop.hide()}});scrooltop.click(function(){
        $("html,body").animate({scrollTop:0},600)
    });
    new WOW().init();
});



