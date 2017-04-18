// start JavaScript Document here
$(document).ready(function()
{
	
	// start nice scroll here
	$("html").niceScroll();
	// end nice scroll here
	
	
	// start carousel here 
	$('.carousel').carousel(
	{
		interval:3000
	});
	// end carousel here
	
	
	
	// start show color option when click on  the gear here
	$(".GearChech").click(function()
		{
		
		$(".ColorBox").fadeToggle();
		
		});
	// end show color option when click on  the gear here	



	// start change theme color on click color box here
	var colorLi=$(".ColorBox ul li");
	
	colorLi
	 .eq(0).css("backgroundColor","#E41B17").end()
	 .eq(1).css("backgroundColor","#171DE4").end()
	 .eq(2).css("backgroundColor","#3C763D").end()
	 .eq(3).css("backgroundColor","#763C72").end()
	 .eq(4).css("backgroundColor","#E4A517").end();
	 
	 colorLi.click(function()
	 {
		 $("link[href*='theme']").attr("href",$(this).attr("data-value"));
		 
		 });
	// end change theme color on click color box here
	
	
	
	// start scroll top here
		
		// start cashing the scroll top
	var scrollButton =$("#ScrollTop");
	
	$(window).scroll(function()
	{
		$(this).scrollTop()>= 700 ? scrollButton.show() :scrollButton.hide();
		
		});
		// end cashing the scroll top
		
		// start click on button to scroll top here
	scrollButton.click(function()
	{
		$("html,body").animate({scrollTop:0},900);
		
		});
		// end click on button to scroll top here
		
	// end scroll top here	
	 


});
// end JavaScript Document here


// start loading screen overlay here
$(window).load(function()
{
	$(".LoadingOverlay .spinner").fadeOut(2000,
	function()
	{
		
		$(this).parent().fadeOut(2000,
		function()
		{	
			$(this).remove();
			
			});
	
	});
	
});
// end loading screen overlay here 
