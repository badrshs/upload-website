$(document).ready(function() {

   // up to the page style
  $('.up span').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

   // mobile navbar slid-nav
    $('.button-collapse').sideNav()
    
    // slider style
    $('.slider').slider();

    $('.materialboxed').materialbox();

})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.up span').fadeIn();
  } else {
    $('.up span').fadeOut();
  }
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
    $('.preloader').fadeOut(1000); // set duration in brackets    
});



$(function(){

  // NIVO LIGHTBOX
  $('.works a').nivoLightbox({
        effect: 'fadeScale',
    });

});



