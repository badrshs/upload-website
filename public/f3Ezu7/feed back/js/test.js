$(document).ready(function(){
	$(".catalog .fa-cog").click(function(){
		$(".catalog .info-2").slideToggle();
	});


	 $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('.fixed').slideDown();
  } else {
    $('.fixed').fadeOut();
  }
});

	 
});


//loading screen
$(window).load(function() {
  $("body").css("overflow", "auto")
  $(".overlay .spinner").fadeOut(500, function() {
    $(this).parent().fadeOut(2000, function() {
      $(this).remove();
    });
  });
});