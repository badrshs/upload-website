$(document).ready(function(){
	$("nav .menu").click(function(){
		$("nav ul li").fadeToggle(500);
	});


	$("nav .search").click(function(){
		$("nav input").fadeIn();


	});


	$('.up .glyphicon-menu-up').click(function(){
				$('html, body').animate({scrollTop:-690},1000);
			});

});