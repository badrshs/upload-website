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
});