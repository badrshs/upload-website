 $(document).ready(function() {
		$('.intro-pic').each(function(){
				$(this).addClass("fadeIn");
		});
	});

 	$(window).scroll(function() {
		$('.tools-pic').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");
			}
		});

		$('.made-pic').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});

		$('.arrow').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("stretchLeft");
			}
		});



	});