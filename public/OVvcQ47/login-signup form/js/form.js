$(document).ready(function(){
	$("input[type='text']").focus(function(){
		$(".fa-user").animate({
			"marginLeft":"266px"
		});
	});

	$("input[placeholder='Your Last Name']").focus(function(){
		$(".fa-user-plus").animate({
			"marginLeft":"266px"
		});
	});


	$("input[type='email']").focus(function(){
		$(".fa-envelope").animate({
			"marginLeft":"266px"
		});
	});


	$("input[type='password']").focus(function(){
		$(".fa-lock").animate({
			"marginLeft":"266px"
		});
	});

	$("input[placeholder='Confirm Password']").focus(function(){
		$(".fa-refresh").animate({
			"marginLeft":"266px"
		});
	});
})