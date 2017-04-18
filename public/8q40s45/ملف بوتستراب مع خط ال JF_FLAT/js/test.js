$(document).ready(function(){
	$(".glyphicon-arrow-left").click(function(){
		$(".header .img").fadeOut(function(){
			$(".header .img3").fadeOut(function(){
				$(".header .img2").fadeIn();
			});
		});
	});


	$(".glyphicon-arrow-right").click(function(){
		$(".header .img2").fadeOut(function(){
			$(".header .img").fadeOut(function(){
				$(".header .img3").fadeIn();
			});
		});
	});


	$(".glyphicon-off").click(function(){
		$(".header .img2").fadeOut(function(){
			$(".header .img3").fadeOut(function(){
				$(".header .img").fadeIn();
			});
		});
	});


	$(".about .img2 .btn0").click(function(){
		$(".about .img2 .btn0 , h3 , .span0").fadeOut(function(){
			$(".about .img2 .content-img").slideDown(1000,function(){
				$(".about .img2 .content-img .btn2").click(function(){
					$(".about .img2 .content-img p").fadeIn(function(){
						$(".about .img2 .content-img .btn3").fadeIn();
					});
				});
			})
		});
	});


	$(".about .img2 .content-img .btn3").click(function(){
		$(".about .img2 .content-img").fadeOut(1000,function(){
			$(".about .img2 .btn0 , h3 , .span0").fadeIn();
		});
	});


	$(".about6 .content11 .glyphicon-refresh").click(function(){
		$(".about6 .content11 .img1").fadeOut(1000,function(){
			$(".about6 .content11 .img2").fadeIn(1000);
		});
	});



	$(".about6 .content00 .glyphicon-refresh").click(function(){
		$(".about6 .content00 .img1").fadeOut(1000,function(){
			$(".about6 .content00 .img2").fadeIn(1000);
		});
	});



	$(".about3 .content5 .glyphicon-refresh").click(function(){
		$(".about3 .content5 .img1").fadeOut(1000,function(){
			$(".about3 .content5 .img2").fadeIn(1000);
		});
	});
});