$(document).ready(function(){
	$(".header button").click(function(){
		$(".form1").fadeOut(1000,function(){
			$(".form2").fadeIn(1000);
		});
	});

	$(".form2 button").click(function(){
		$(".form2").fadeOut(1000,function(){
			$(".form1").fadeIn(1000);
		});
	});
});