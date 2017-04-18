
/* --------------------------------------------------------	
	 Fixed Menu
   --------------------------------------------------------	*/	

  $('.navbar').sticky({topSpacing:0});

/* --------------------------------------------------------	
	 TinyNav
   --------------------------------------------------------	*/	
 
  $(function () {
    $("#nav").tinyNav();
  });

  $('html').addClass('js');
 
/*-------------------------------------------------*/
  /* =  flexslider
  /*-------------------------------------------------*/
  try {

    var SliderPost = $('.flexslider');

    SliderPost.flexslider({
      slideshowSpeed: 6000,
    });
  } catch(err) {

  }
  /*-------------------------------------------------*/
  /* =  Full-window section
  /*-------------------------------------------------*/

  var windowHeight = $(window).height(),
    topSection = $('#home');
  topSection.css('height', windowHeight);

  $(window).resize(function(){
    var windowHeight = $(window).height();
    topSection.css('height', windowHeight);
  });

   /*-------------------------------------------------*/
  /* =  owl Carousel  slider
  /*-------------------------------------------------*/
$(document).ready(function() {
if($('#client-wrapper').length > 0) { 
  $("#client-wrapper").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 }
});

/*-------------------------------------------------*/
  /* =  smooth scroll
  /*-------------------------------------------------*/
  try {
    //$.browserSelector();
    // Adds window smooth scroll on chrome.
    //if($("html").hasClass("chrome")) {
      $.smoothScroll();
    //}
  } catch(err) {

  }

//  Slider fotorama
if($('.fotorama').length > 0) {
  $('.fotorama').fotorama({
    width: '100%',
    maxwidth: '100%',
    allowfullscreen: true,
    transition: 'dissolve',
    transitionduration: 500,
    stopautoplayontouch: true,
    shadows: false,
    keyboard: true,
    autoplay: true,
    arrows: true,
    fit: 'cover',
    swipe: true,
    loop: true,
    hash: false,
    nav: false,
  });
}


/*-------------------------------------------------*/
  /* =  Isotop-Filter
  /*-------------------------------------------------*/
$(window).load(function(){
  var $container = $('.portfolio-container');
  if($container.length > 0) {
    $container.isotope({
      itemSelector: '.portfolio-item',
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    $('.portfolio-filter a').click(function(){
      $('.portfolio-filter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    }); 
  }
});

/*-------------------------------------------------*/
  /* =  Isotop-Filter-3-Column
  /*-------------------------------------------------*/
$(window).load(function(){
  var $container = $('.portfolio-container-3column');
  if($container.length > 0) {
    $container.isotope({
      itemSelector: '.portfolio-item',
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    $('.portfolio-filter-3column a').click(function(){
      $('.portfolio-filter-3column .active').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    }); 
  }
});




/* -----------------------------------------------------------------------
Countdown / Coming soon
----------------------------------------------------------------------- */

$(function(){
  // Create a countdown instance. Change the launch day according to your needs.
  // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
  if($('#countdown').length > 0) {
    var ts = new Date(2015, 1-1, 30); 
    $('#countdown').countdown({
      until: ts
    });
  }
});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


