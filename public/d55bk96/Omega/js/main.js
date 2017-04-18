$(document).ready(function(){
    
    $('.carousel').carousel({
        
  interval: 4000
        
    });


    // Show Color-Box

    $(".cog").click(function(){

    	$(".clr").toggle();

    });



    // Change Color On Click
    var clrLi = $(".clr ul li");


    clrLi
    	.eq(0).css("backgroundColor","#95CD02").end()
    	.eq(1).css("backgroundColor","#FA8072").end()
    	.eq(2).css("backgroundColor","#1E90FF").end()
    	.eq(3).css("backgroundColor","#FF8C00").end()
    	.eq(4).css("backgroundColor","#FF00FF").end()
    	.eq(5).css("backgroundColor","#808000").end();
    
    clrLi.click(function(){

    	$("link[href*='color']").attr("href", $(this).attr("data-value"));

    });
});


$(window).load(function(){


	$(".pre-overlay .sk-cube-grid").fadeOut(3000, function(){

		$(this).parent().fadeOut(2000, function(){

			$("body").css("overflow","auto");

			$(this).remove();

		});

	});

});



jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


$('.navbar-inverse .navbar-nav li a').click(function () {
      $('html, body').animate({ scrollTop: $('#' + $(this).data('value')).offset().top }, 1000);
    });