$(document).ready(function(){
	$(" .screen .form-info .form .song-pic .glyphicon-pause").click(function(){
		$(this).fadeOut(function(){
			$(".screen .form-info .form .song-pic .glyphicon-play").fadeIn(function(){
				$(this).click(function(){
					$(this).fadeOut(function(){
						$(".screen .form-info .form .song-pic .glyphicon-pause").fadeIn();
					});
				});
			});
		});
	});




$('.up .glyphicon-menu-up').click(function(){
				$('html, body').animate({scrollTop:-690},'500');
			});


});
