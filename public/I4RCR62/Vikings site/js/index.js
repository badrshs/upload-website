$(document).ready(function() {

  $('.up span').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

  // navbar fixed
  $(document).scroll(function() {
    var x = $(this).scrollTop();
    if (x > 20) {
      $('.navbar-default ').css({
        "background": "#fff",
        "box-shadow": "1px 1px 4px #222",
        "height": "68px",
        "position":"fixed",
        "transition":"0.2s"
      });

      $(".navbar-default li>a").css("color", "#222");
      $(".navbar-nav .glyphicon-menu-hamburger").css("color", "#222");
      $(".navbar-default .navbar-brand").css("color", "#222")

    } else {
      $('.navbar-default ').css({
        "background": "transparent",
        "box-shadow": "none",
        "height": "68px",
        "position":"static"
      });

      $(".navbar-default li>a").css("color", "#fff");
      $(".navbar-nav .glyphicon-menu-hamburger").css("color", "#fff");
      $(".navbar-default .navbar-brand").css("color", "#fff")

    }
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

  $(".navbar-nav .glyphicon-menu-hamburger").click(function() {
    $(".navbar-nav > li").slideToggle()
  })
});

//color-option

$(".check").click(function() {
  $(".color-option").fadeToggle(1000);
});

var colorLi = $(".color-option ul li");

colorLi.click(function() {

  $("link[href*='theme']").attr("href", $(this).attr("data-value"));

  //console.log( $(this).attr("data-value"));

});

//li scroll
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 50
    }, 1000);
  }
});

//loading screen
$(window).load(function() {
  $("body").css("overflow", "auto")
  $(".overlay .sk-cube-grid").fadeOut(1000, function() {
    $(this).parent().fadeOut(2000, function() {
      $(this).remove();
    });
  });
});