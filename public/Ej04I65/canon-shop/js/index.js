$(document).ready(function() {
  $('.up span').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });
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