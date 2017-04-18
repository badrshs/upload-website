$(document).ready(function(){
	$(".about .info1").hover(function(){
		$(".about .see-more1").fadeToggle(800);
	});
	$(".about .info2").hover(function(){
		$(".about .see-more2").fadeToggle(800);
	});
	$(".about .info3").hover(function(){
		$(".about .see-more3").fadeToggle(800);
	});

	$(".about .see-more1 button").click(function(){
		
			$(".see-more1 p").fadeIn(500);
		
	});

	$(".about .see-more2 button").click(function(){
		
			$(".see-more2 p").fadeIn(500);
		
	});

	$(".about .see-more3 button").click(function(){
		
			$(".see-more3 p").fadeIn(500);
		
	});
});