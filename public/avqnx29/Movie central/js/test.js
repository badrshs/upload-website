


//loading screen
$(window).load(function(){
	$("body").css("overflow","auto")
	$(".overlay .spinner").fadeOut(1000,function(){
		$(this).parent().fadeOut(2000,function(){
			$(this).remove();
		});
	});
});