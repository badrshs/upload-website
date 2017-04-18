$('document').ready(function(){

	$(function () {
		var  mn = $(".navbar.navbar-default");
		var  mns = "navbar-fixed-top";
		var  hdr = $('#banner').height(); 

		$(window).scroll(function() {
		  if( $(this).scrollTop() > hdr ) {
		    mn.addClass(mns).css('position','fixed');
		  } else {
		    mn.removeClass(mns).css('position','relative');
		  }
		});
	});

	$('.tlt').textillate({
		loop: true, 
		type: 'char', 
		out: { effect: "bounceOutLeft", reverse: true },
		in: { effect: "bounceInRight"}

	});

});