// Call The BXSlider
$(document).ready(function () {
  
  $('html').niceScroll({cursorcolor:"rgba(255, 255, 255, 0.5)"});

  $('.bxslider').bxSlider({
  	pager: false
  });

  $('.bx-wrapper').each(function (){
  	$(this).css('marginTop', ($(window).height() - $('.bxslider li').height() - $('.navbar').height()) / 2);
  });

  $(window).resize(function () {
  	$('.bx-wrapper').each(function (){
  		$(this).css('marginTop', ($(window).height() - $('.bxslider li').height() - $('.navbar').height()) / 2);
  	});
  });
  
  $('.links li').click(function () {
  	$(this).addClass('active').siblings().removeClass('active');
  });

  $('.links li a').click(function (){
  	$('html, body').animate({
  		scrollTop: $('#' + $(this).data('value')).offset().top
  	}, 500);
  });

  $('header nav i').click(function(){
  	$('header nav .links').slideToggle(1000);
  });

});