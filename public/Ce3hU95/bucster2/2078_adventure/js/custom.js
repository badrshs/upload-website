
 /* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* jQuery to collapse the navbar on scroll
    -----------------------------------------------*/
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });


  /* BxSlider
    -----------------------------------------------*/
  (function (window, $) {
  'use strict';

  // Cache document for fast access.
  var document = window.document;

  function mainSlider() {
    $('.bxslider').bxSlider({
		auto: true,
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
  $links.click(function(){
     $(".slider-caption").removeClass('animated fadeInLeft');
     $(".slider-caption").addClass('animated fadeInLeft');
  });

  $(".bx-controls").addClass('container');
  $(".bx-next").addClass('fa fa-angle-right');
  $(".bx-prev").addClass('fa fa-angle-left');


  })(window, jQuery);


   /* Owl Carousel
    -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    });
  });








 /* colors and top button Carousel
    -----------------------------------------------*/

    if ($('.uparrow').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.uparrow').addClass('show');
            } else {
                $('.uparrow').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.uparrow').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}




  $(document).ready(function(){
      calculateScroll();
      $(window).scroll(function(event) {
        calculateScroll();
      });
      $('.navmenu ul li a').click(function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 80}, 800);
        return false;
      });

      $(".gearcheak").click(function(){
        $(".color-options").fadeToggle();
      });

      var colorli = $(".color-options ul li");

      colorli
      .eq(0).css("backgroundColor","#32CD32").end()
      .eq(1).css("backgroundColor","#40E0D0").end()
      .eq(2).css("backgroundColor","crimson").end()
      .eq(3).css("backgroundColor","#1fcdff")

      colorli.click(function(){

        $("link[href*='color']").attr("href",$(this).attr("data-value"));


      });


    });   
  

  function calculateScroll() {
      var contentTop      =   [];
      var contentBottom   =   [];
      var winTop      =   $(window).scrollTop();
      var rangeTop    =   200;
      var rangeBottom =   500;
      $('.navmenu').find('a').each(function(){
        contentTop.push( $( $(this).attr('href') ).offset().top );
        contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
      })
      $.each( contentTop, function(i){
        if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
          $('.navmenu li')
          .removeClass('active')
          .eq(i).addClass('active');        
        }
      })
    };

  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#work').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#portfolio').parallax("100%", 0.1);
    $('#plan').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#portfolio .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

