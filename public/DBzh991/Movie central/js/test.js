$(document).ready(function() {
  $(".about").hover(function() {
    $(".contact").fadeToggle();
  });

  $(".watch .poster .btn0").click(function() {
    $(".watch .poster img").slideToggle(1000)
  });

  $(".watch .control .btn1").click(function() {
    $(".watch .download").fadeOut(500, function() {
      $(".watch .content").slideToggle(1000)
    });
  });

  $(".watch .control .btn2").click(function() {
    $(".watch .content").fadeOut(function() {
      $(".watch .download").slideToggle(1000);
    });
  });

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