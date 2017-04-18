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
      "background":"#fff",
      "border":"0",
      "height":"57px",
      "line-height":"49px"
    });
  } else {
    $('.home nav').css({
      "background":"transparent",
      "border":"1px solid rgba(142, 137, 137, 0.21)",
      "height": "64px",
    "line-height": "64px"
    });
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

