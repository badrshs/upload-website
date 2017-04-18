$(document).ready(function() {

   // up to the page style
  $('.up i').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.up i').fadeIn();
    } else {
      $('.up i').fadeOut();
    }
  });

   // mobile navbar slid-nav
    $('.button-collapse').sideNav();

    // home slider
    $('.slider').slider();

    $('select').material_select();

    $('.materialboxed').materialbox();
   
   // slider-carousel-1 slider
     $('.slider-carousel-1 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
          0:{items:2,},
        600:{items:3,},
       1000:{items:6,loop:false}
    }
})
    // brans slider
    $('.brands .owl-carousel').owlCarousel({
    oop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
          0:{items:2,},
        600:{items:3,},
       1000:{items:6,loop:false}
    }
})

    //cover slider
    $('.cover .owl-carousel').owlCarousel({
    oop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
          0:{items:1,},
        600:{items:1,},
       1000:{items:2,loop:false}
    }
})

    // pro slider 1
    $('.pro-slider .owl-carousel').owlCarousel({
    oop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
          0:{items:2,},
        600:{items:3,},
       1000:{items:4,loop:false}
    }
})

    // pro slider 2
    $('.pro-slider-2 .owl-carousel').owlCarousel({
    oop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
          0:{items:2,},
        600:{items:3,},
       1000:{items:4,loop:false}
    }
})

    // the tabs of the carousel
    $("#my-tabs li").click(function(){
      var myID = $(this).attr("id");
      $(this).removeClass("inactive").siblings().addClass("inactive");
      $(".slider-carousel-1 .container .owl-carousel").hide();
      $("#" + myID + "-content").show()
    })


    // the tabs of the product page
    $("#my-tabs li").click(function(){
      var myID = $(this).attr("id");
      $(this).removeClass("inactive").siblings().addClass("inactive");
      $(".pro-tabs .container .content").hide();
      $("#" + myID + "-content").show()
    })
})


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

// preloader
$(window).load(function(){
    $("body").css("overflow-y","auto")
    $('.preloader').fadeOut(1000); // set duration in brackets
});

// smoothScroll
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top -50
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
