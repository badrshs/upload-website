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


  $(".navbar ul .slide").click(function(){
    $(".navbar .search").slideToggle()
  })


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

