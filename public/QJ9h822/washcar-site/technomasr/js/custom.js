$(document).ready(function() {

   // up to the page style
  $('.up i').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

   // mobile navbar slid-nav
    $('.button-collapse').sideNav()
    
   

    $('.owl-carousel').owlCarousel({
      items : 1,
      autoplay : true,
    });


    $(".see-more a").click(function(){
      $(".works #info").slideToggle()
      $(".see-more .span-1").toggle(function(){
        $(".see-more .span-2").toggle()
      })
    })


})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.up i').fadeIn();
  } else {
    $('.up i').fadeOut();
  }
});




$(document).scroll(function() {
  var n = $(this).scrollTop();
  if (n > 1) {
    $(".top-bar").hide()

  } else {
    $(".top-bar").show()

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




