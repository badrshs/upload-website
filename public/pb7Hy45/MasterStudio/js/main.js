$(document).ready(function (){
	
	// Show Scroll Top Button
	
	var ScrollButton = $('.b-scroll');
	
	$(window).scroll(function (){
		
		if ($(this).scrollTop() >= 500) {
			
			ScrollButton.fadeIn();
			
		} else {
			
			ScrollButton.fadeOut();
			
		}
		
	});
	
	// Scroll To Top
	
	ScrollButton.click(function (){
		
		$('html,body').animate({scrollTop: 0}, 800);
		
	});
	
	// Scroll To Sections
	
	$('#ScrollHome').click(function (){
		
		$('html,body').animate({scrollTop: 0}, 800);
		
	});
	
	$('#ScrollServ,.ourserv').click(function (){
		
		$('html,body').animate({scrollTop: 818}, 800);
		
	});
	
	$('#ScrollAbout').click(function (){
		
		$('html,body').animate({scrollTop: 1382}, 800);
		
	});
	
	$('#ScrollPortfolio').click(function (){
		
		$('html,body').animate({scrollTop: 1750}, 800);
		
	});
	
	$('#ScrollTeam').click(function (){
		
		if ($(window).width() > 1000) {
			
			$('html,body').animate({scrollTop: 2562}, 800);
			
		} else if ($(window).width() > 800) {
			
			$('html,body').animate({scrollTop: 2843}, 800);
			
		} else {
			
			$('html,body').animate({scrollTop: 4027}, 800);
			
		}
		
	});
	
	$('#ScrollContact').click(function (){
		
		$('html,body').animate({scrollTop: 5473}, 1000);
		
	});
	
	// Loading Screen
	
	$(window).load(function (){
		
		$('.loading-overlay .sk-cube-grid').fadeOut(2000 , function (){
			
			$('body').css('overflow', 'auto');
			
			$(this).parent().fadeOut(2000, function () {
				
				$(this).remove();
				
			});
			
		});
		
	});
	
});