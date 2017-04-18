$(document).ready(function(){
		$('.carousel').carousel({
				interval:5000

		});
		//show box color option 
$(".gear-check").click(function()
{
	$(".color-option").fadeToggle();
});	
//change color of box option

var colorLi = $(".color-option ul li");

colorLi
	.eq(0).css("background","#59E04A").end()
	.eq(1).css("background","#E61A36").end()
	.eq(2).css("background","#53BFAC").end()
	.eq(3).css("background","#E126D8").end()
	.eq(4).css("background","#167CD2");

colorLi.click(function()
{
	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
});	

var scrollButton = $("#scroll-top");
$(window).scroll(function()
{
	//console.log($(this).scrollTop());
	if ($(this).scrollTop()>= 700) 
	{
		scrollButton.show();
	}
	else
	{
		scrollButton.hide();
	}
});
	//click button to scroll top 
	scrollButton.click(function()
	{
		$("html,body").animate({scrollTop:0},600);
	});
});
//Loading page
$(window).load(function()
{
	
	$(".loading-overlay .sk-cube-grid").fadeOut(2000,
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