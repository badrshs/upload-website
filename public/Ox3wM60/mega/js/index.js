$(document).ready(function() {

  $('.up span').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

  //nav-toggle
  $(".glyphicon-align-justify").click(function() {
    $(".home nav").slideToggle();
  });

  // up page
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.up span').fadeIn();
    } else {
      $('.up span').fadeOut();
    }
  });

  //span>navbar show and hide
});

//color-option



//li scroll
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top 
    }, 1000);
  }
});

