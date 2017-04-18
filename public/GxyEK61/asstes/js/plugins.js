$(document).ready(function (){

  // Show Color Option

  $(".gear-check").click(function () {

  	    $(".color-option").fadeToggle();

  });

  // nice scroll
  
 $("html").niceScroll();

  // Chang Color

  var ul = $(".color-option ul li");

  ul.eq(0).css("backgroundColor", "#E41B17").end();
  ul.eq(1).css("backgroundColor", "#E426D5").end();
  ul.eq(2).css("backgroundColor", "#099AFF").end();
  ul.eq(3).css("backgroundColor", "hsla(150, 83%, 41%, 0.71)");

  ul.click(function(){

  	    $("link[href*='theme']").attr("href", $(this).attr("data-value"))

  })

  // Scroll To Top

  var scrollButton = $("#scroll-top");

  $(window).scroll(function () {

  	if ($(this).scrollTop()>=677) {

  		scrollButton.show();

  	} else {

  		scrollButton.hide();
  	}

  });

  scrollButton.click(function () {

  		$("html,body").animate({scrollTop : 0 },600);

  	});

});

// Loading Screen

$(window).on('load', function () {

	// show scroll

	    $("body").css("overflow","auto");

// loading Element

	$(".loading-overlay .spinner").fadeOut(1000, function () {

		$(this).parent().fadeOut(1000, function () {

			$(this).remove();

		});
	}) 
})