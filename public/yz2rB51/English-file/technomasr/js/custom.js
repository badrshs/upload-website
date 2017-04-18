$(document).ready(function() {

   // up to the page style
  $('.up i').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

   // mobile navbar slid-nav
    $('.button-collapse').sideNav()
    
   
      // owl-carousel
    $('.about .owl-carousel').owlCarousel({
    loop:true,
   autoplay:true,
    responsive:{
          0:{items:1,},
        600:{items:1,},
       1000:{items:1}
    }
})

    // owl-carousel
    $('.team .owl-carousel').owlCarousel({
    loop:true,
   autoplay:true,
   margin:10,
    responsive:{
          0:{items:1,},
        600:{items:1,},
       1000:{items:3}
    }
})

    // owl-carousel
    $('.blog .owl-carousel').owlCarousel({
    loop:true,
   autoplay:true,
   margin:10,
    responsive:{
          0:{items:1,},
        600:{items:1,},
       1000:{items:3}
    }
})

 // owl-carousel
    $('.client .owl-carousel').owlCarousel({
    loop:true,
   autoplay:true,
   margin:10,
    responsive:{
          0:{items:1,},
        600:{items:1,},
       1000:{items:1}
    }
})

    // owl-carousel
    $('.brand .owl-carousel').owlCarousel({
    loop:true,
   autoplay:true,
   margin:10,
    responsive:{
          0:{items:2,},
        600:{items:3,},
       1000:{items:5}
    }
})
})
 

// up to page fadeIn fadeOut
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.up i').fadeIn();
  } else {
    $('.up i').fadeOut();
  }
});


// navbar scroll
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 2) {
    $('.home nav').css({
      "background":"rgba(29, 44, 51, 0.75)",
      "border":"1px solid rgba(29, 44, 51, 0.75)",
      "height":"57px",
      "line-height":"49px"
    });
    $(".home nav .brand-logo img").css("width","120px")
  } else {
    $('.home nav').css({
      "background":"transparent",
      "border":"1px solid rgba(255, 255, 255, 0.21)",
      "height": "64px",
    "line-height": "64px"
    });
    $(".home nav .brand-logo img").css("width","130px")
  }
});




$(function(){

  // NIVO LIGHTBOX
  $('.icons ul a').nivoLightbox({
        effect: 'fadeScale',
    });

});


$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();
  });



$(function(){

  // NIVO LIGHTBOX
  $('.portfolio .info .caption a').nivoLightbox({
        effect: 'fadeScale',
    });

  $('.video a').nivoLightbox({
        effect: 'fadeScale',
    });

});

// preloader
$(window).load(function(){
    $("body").css("overflow","auto")
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

// smoothScroll
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top -60
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

