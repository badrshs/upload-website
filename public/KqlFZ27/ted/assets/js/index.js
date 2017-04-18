$(window).ready(function(){

	$('.loading-overlay').fadeOut(2000, function () {
		$("body").css("overflow","auto");
		$(this).remove();
	})


	$("").height($(window).height());
    $(window).resize(function() {
        $("").height($(window).height());
 });


$('.nav-list ul li').on('click',function(){
   $('.nav-list ul li').removeClass('active-list');
    $(this).addClass('active-list');
});



	jQuery('a[href^="#"]').click(function(e) {
			jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1500);
			return false;
			e.preventDefault();
	});

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});

      // Watch for the user typing
	$('#adding_new_member_form .form, #adding_new_member_form .form, #adding_new_member_form .form').keypress(function() {
 		 if ($('#adding_new_member_form .form, #adding_new_member_form .form, #adding_new_member_form .form').filter(function() { // Filter the inputs
   		   return $.trim($(this).val()).length == 0 // if the value is more that 0 in all inputs then the user has typed something in all of them
   		 }).length == 0) {
  		  $('#adding_new_member_form button#submit').prop('disabled', false); // if all fields has some data, the user can submit
 		 } else {
   			 $('#adding_new_member_form button#submit').prop('disabled', true); // if not he will not submit
 		 }
	});

	//slider
new WOW ().init();


});
