$(window).on('load', function () {
  // loading
  $("html, body").scrollTop(0);
  $('.loading').fadeOut(1500, function () {
    $(this).addClass('hidden');
    $('html body').fadeIn(3000);
    $(this).remove();
  });
});

$(function () {
  $('.carousel').carousel({
  interval: 6000
  });

  $(".carousel-inner > .item > img").height($(window).height()-70);

  $(window).scroll(function () {
    if ($(window).scrollTop()>700) {
      $('.scroll i').fadeIn(1000)
    } else {
      $('.scroll i').fadeOut(1000)
    }
  });
  $('.scroll i').click(function () {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top
    },1500);
  });
});
