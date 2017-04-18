$(document).ready(function(){
	$(".about .info1").hover(function(){
		$(".about .see-more1").slideToggle(800);
	});
	$(".about .info2").hover(function(){
		$(".about .see-more2").slideToggle(800);
	});
	$(".about .info3").hover(function(){
		$(".about .see-more3").slideToggle(800);
	});

	$(".about .see-more1 button").click(function(){
		
			$(".see-more1 p").slideToggle(500);
		
	});

	$(".about .see-more2 button").click(function(){
		
			$(".see-more2 p").slideToggle(500);
		
	});

	$(".about .see-more3 button").click(function(){
		
			$(".see-more3 p").slideToggle(500);
		
	});

  //color-option

  $(".check").click(function(){
  	$(".color-option").fadeToggle(1000);
  });

  var colorLi = $(".color-option ul li");

    colorLi.click(function(){

    	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
    	//console.log( $(this).attr("data-value"));


    });
});


//loading screen
$(window).load(function(){
	$("body").css("overflow","auto")
	$(".overlay .cssload-dots").fadeOut(1000,function(){
		$(this).parent().fadeOut(2000,function(){
			$(this).remove();
		});
	});
});