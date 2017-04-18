$(document).ready(function(){
	$(".login .header .span1").click(function(){
		$(".login form .reg-info").fadeOut(function(){
			$(".login form .input-info").slideDown()
		});
	})

	$(".login .header .span2").click(function(){
		$(".login form .input-info").fadeOut(function(){
			$(".login form .reg-info").slideDown()
		});
	})
})


