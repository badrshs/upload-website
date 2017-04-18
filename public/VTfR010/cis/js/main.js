$(function(){
	'use strict';

	$(window).scroll(function(){

		var navbar = $('.navbar');

		// sortcut if statment:    Consider ? True : False

		$(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');

		
	});

	// Start Function To Make Scroll To Top
	var scrollButton =  $("#scroll_up");

	$(window).scroll(function(){

		//  if Shortstatment 
		$(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();

	});

	scrollButton.click(function(){

			$("html,body").animate({ scrollTop : 0}, 1000);

	});
	// End Function To Make Scroll To Top
	
	// Start Show Random Image Evrey X Sconed

	var MyElement1 = document.getElementById('MyImage1'),

	MyImages1 = [

		'http://localhost/cis/images/slides/0001.jpg',
		'http://localhost/cis/images/slides/0002.jpg',
		'http://localhost/cis/images/slides/0003.jpg',
		'http://localhost/cis/images/slides/0004.jpg',
		'http://localhost/cis/images/slides/0005.jpg',
		'http://localhost/cis/images/slides/0006.jpg'

	];

	function changeImage1(MyElement , MyImages){

		setInterval(function(){

			var MyRandomNum1 = Math.floor(Math.random() * MyImages1.length);

			MyElement1.src = MyImages1[MyRandomNum1];

		}, 5000 );
	}

	changeImage1(MyElement1 , MyImages1);

	// End Show Random Image Evrey X Sconed

  // Start Add smooth scrolling to all links

	  $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 1500, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });

// End Add smooth scrolling to all links 


// Start Deal With customers Tabs Section

	$('.tab-switch li').click(function(){

		// Add Selected Class To Active Link
		$(this).addClass('selected').siblings().removeClass('selected');

		// Hide All Divs
		$('.tabs-section .tabs-content > div').hide();

		// Hide All Picture
		$('.tabs-section .tabs-img > div').hide();

		// Show Selected Div Only
		$('.' + $(this).data('class')).fadeIn(1500);

	});

// End Deal With customers Tabs Section    

// Start Deal With Partners Tabs Section

	$('.partners-switch li').click(function(){

		// Add Selected Class To Active Link
		$(this).addClass('selected').siblings().removeClass('selected');

		// Hide All Divs
		$('.partners-section .partners-content > div').hide();

		// Hide All Picture
		$('.partners-section .partners-img > div').hide();

		// Show Selected Div Only
		$('.' + $(this).data('class')).fadeIn(1500);
	});

// End Deal With Partners Tabs Section


	// Check for Error In Contact Us Form

	var userError 		= true ,

		emailError		= true ,

		subjectError	= true ,

		messageError	= true;

	$('.username').blur(function(){

		if($(this).val().length < 3 ) {

			$(this).css('border','1px solid #F00').parent().find('.custom-alert').fadeIn(500).end().find('.asterisk').fadeIn(500);

			userError = true;

		} else {

			$(this).css('border','1px solid #080').parent().find('.custom-alert').fadeOut(500).end().find('.asterisk').fadeOut(500);

			userError = false;
		}


	});

	$('.email').blur(function(){

		if($(this).val() === '' ) {

			$(this).css('border','1px solid #F00').parent().find('.custom-alert').fadeIn(500).end().find('.asterisk').fadeIn(500);

			emailError = true;

		} else {

			$(this).css('border','1px solid #080').parent().find('.custom-alert').fadeOut(500).end().find('.asterisk').fadeOut(500);

			emailError = false;
		}

	});

	$('.subject').blur(function(){

		if($(this).val().length < 5 ) {

			$(this).css('border','1px solid #F00').parent().find('.custom-alert').fadeIn(500).end().find('.asterisk').fadeIn(500);

			subjectError = true;

		} else {

			$(this).css('border','1px solid #080').parent().find('.custom-alert').fadeOut(500).end().find('.asterisk').fadeOut(500);

			subjectError = false;
		}

	});

		$('.message').blur(function(){

		if($(this).val().length < 10 ) {

			$(this).css('border','1px solid #F00').parent().find('.custom-alert').fadeIn(500).end().find('.asterisk').fadeIn(500);

			messageError = true;

		} else {

			$(this).css('border','1px solid #080').parent().find('.custom-alert').fadeOut(500).end().find('.asterisk').fadeOut(500);

			messageError = false;
		}

	});


	// submit form validation

	$('.contact-form').submit(function(e){

		if (userError === true || emailError === true || subjectError === true || messageError === true){

			e.preventDefault();

			$('.username, .email, .subject, .message').blur();

		}

	});


});