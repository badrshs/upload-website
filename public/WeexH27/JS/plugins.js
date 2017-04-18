	//Time of slideshow

    $(function() {
		"use strict";
		
	
		
		
	$( ".carousel" ).carousel({
		interval:2500
		
	});
	
	// EndTime of slideshow
	
	
	
	
	//show div option color when click
	
	$( ".gear-check" ).click(function() {
		$( ".color-option" ).fadeToggle();
	});
	
	//End div option color when click
	
	
	
	
	
	
	//change theme color on click
	
	var colorLI = $(".color-option ul li");
	colorLI
	.eq(0).css("background-color","#1674EE").end()
	.eq(1).css("background-color","#67009B").end()
	.eq(2).css("background-color","#F01B1F").end()
	.eq(3).css("background-color","#F0EB5C");
	
	colorLI.click(function()
	{    $("link[href*='Theme']").attr("href",$(this).attr("data-value"));
	});
	
	//End change theme color on click
	
	
	
	
	//Start Scroll To Top
	
		var scrollButton= $("#scroll-top");
		$(window).scroll(function()
	{
      if($(this).scrollTop() >= 700 )
	  {
	   scrollButton.show();
	  }
	  else
	  { scrollButton.hide();
	  }
	  
	});
		
		scrollButton.click(function()
		{
			$("html,body").animate({ scrollTop: 0},600);
		});
	});
		//End Scroll To Top


	
	
	

	
	
	//show when page loaded
	
	
	$(window).load(function()
	{
		"use strict";
		
	$(".loading-overlay .sk-cube-grid").fadeOut(1000,
	function()
	{
		$(this).parent().fadeOut(2000,
		function()
		{
         $("body").css("overflow","auto");
			$(this).remove();
		
		});
	});
});

     //End when page loaded
	 
	 
	 
	 
	 
	 
	 //Start Scroll To Top
	 
	 
