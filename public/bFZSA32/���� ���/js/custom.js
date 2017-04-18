$(document).ready(function() {

   // up to the page style
  $('.up i').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

   // mobile navbar slid-nav
    $('.button-collapse').sideNav()
    
    // slider style
    $('.collapsible').collapsible();

    $('.owl-carousel').owlCarousel({
      items : 3,
      autoplay : true,
    });




})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.up i').fadeIn();
  } else {
    $('.up i').fadeOut();
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




