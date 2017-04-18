$(document).ready(function(){

	// header

	

	$('.header').height($(window).height());

	$(window).resize(function (){
		$('.header').height($(window).height());
	});


	$('.intro').each(function (){

		$(this).css('paddingTop', ($(window).height() - $('.intro').height()) /2 );

	});

	// scroll to features

    $('.header .arrow i').click(function(){

    	$('html, body').animate({

    		scrollTop: $('.features').offset().top


    	}, 1000);

    });

    // scroll to Our team

    $('.hire').click(function (){

    	$('html, body').animate({

    		scrollTop: $('.our-team').offset().top


    	}, 1000);

    });

    // scroll to our work 

    $('.workss').click(function (){

    	$('html, body').animate({

    		scrollTop: $('.our-work').offset().top


    	}, 1000);

    });

    // show hidden from work

    $('.show-more').click(function (){

    	$('.our-work .hidden').fadeIn(1500);

    });

    // check Testimonials 

    var rightArrow = $('.testim .fa-chevron-right'),

        leftArrow = $('.testim .fa-chevron-left');

    function checkClients() {

    	if ($('.client:first').hasClass('active')) {

    		leftArrow.fadeOut();
    	} else {

    		leftArrow.fadeIn();
    	}

        if ($('.client:last').hasClass('active')) {

    		rightArrow.fadeOut();
    	} else {

    		rightArrow.fadeIn();
    	}

    }

    checkClients();

    $('.testim i').click(function (){

        if ($(this).hasClass('fa-chevron-right')) {

        	$('.testim .active').fadeOut(100, function(){

        		$(this).removeClass('active').next('.client').addClass('active').fadeIn();

        		checkClients();

        	});

        } else {

        	$('.testim .active').fadeOut(100, function(){

        		$(this).removeClass('active').prev('.client').addClass('active').fadeIn();

        		checkClients();

        	});
        }

    });

});
