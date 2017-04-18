$(document).ready(function() {
  $('.up span').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

  // ------- WOW ANIMATED ------ //
  wow = new WOW({
    mobile: false
  });
  wow.init();

})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.up span').fadeIn();
  } else {
    $('.up span').fadeOut();
  }
});

//loading screen
$(window).load(function() {
  $("body").css("overflow", "auto")
  $(".overlay .spinner").fadeOut(1000, function() {
    $(this).parent().fadeOut(2000, function() {
      $(this).remove();
    });
  });
});