/*global $, alert, console*/

$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor: '#eb1414',
        cursorwidth: 10,
        cursorborder: '1px solid #eb1414'
        
    });

    // Adjust Header Height
    
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        

        
    });

	    // Change Header Height
    
    $('.header').height($(window).height());
    
    // Scroll To Features 
    
    $('.header .arrow i').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.feat').offset().top - 40
            
        }, 1000);
        
    });
	
	// scroll to our-work
	
    
    $('.subs .back i').click(function () {
       
        $('html, body, .subs').animate({
            
            scrollTop: $('.our-work').offset().top  - 8
            
        }, 1000);
        
    });
	
			// scroll to our team
	
    
    $('.theteam1').click(function () {
       
        $('html, body, .subs, .our-work, .testim').animate({
            
            scrollTop: $('.our-team').offset().top 
            
        }, 1500);
        
    });
		

		// scroll to Hire us
	
    
    $('.huir-us').click(function () {
       
        $('html, body, .subs, .our-work, .testim, .our-team').animate({
            
            scrollTop: $('.Contact').offset().top 
            
        }, 1500);
        
    });
	
	//Show Hidden Items From Work
	
	$('.showhidden').click(function () {
		
		$('.our-work .hidden').fadeIn();
	});
	
	    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
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
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        }
        
    });

});