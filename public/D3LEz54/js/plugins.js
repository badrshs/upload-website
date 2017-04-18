$(function () {
  'use strict';
  $('[type="submit"]').on('click', function (e) {
    if ($(this).hasClass('cant-submit')) {
      e.preventDefault();
      $(this).animate({
        bottom: 15
      }, 1000, function () {
        $('form').addClass('appear').delay(800);
        $('h1, [type="text"], [type="password"]').fadeIn(500, function () {
          $('[type="text"]').attr('placeholder', 'Username!');
          $('[type="password"]').attr('placeholder', 'Password!');
        });
        $(this).removeClass('cant-submit').val('sign in');
      });
    }
  });
});