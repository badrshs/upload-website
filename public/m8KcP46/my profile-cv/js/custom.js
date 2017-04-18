$(document).ready(function() {

   // up to the page style
  $('.up').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

   


})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.up').fadeIn();
  } else {
    $('.up').fadeOut();
  }
});



$(function(){

  // NIVO LIGHTBOX
  $('.img .caption a').nivoLightbox({
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
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


