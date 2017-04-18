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
	.eq(0).css("background","#E50000").end()
	.eq(1).css("background","#F7600E").end()
	.eq(2).css("background","#0C26EA").end()
	.eq(3).css("background","#E126D8").end()
	.eq(4).css("background","#5CEA27");

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
	//show hidden themes....
	$('.show-more').click(function (){
		$(".gimmy").fadeToggle(2000);
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
//Nice Scroll
'use strict';
	//nice scroll
	$('html').niceScroll();

// if click go to the select section....
$('.navbar-inverse .navbar-nav li .why').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.features').offset().top
		},1000);
	});
//
$('.navbar-inverse .navbar-nav li .service').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.services').offset().top
		},1000);
	});
//
$('.navbar-inverse .navbar-nav li .theme').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.work-work').offset().top
		},1000);
	});
//
$('.navbar-inverse .navbar-nav li .contact').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.contact-us').offset().top
		},1000);
	});
//
$('.navbar-inverse .navbar-nav li .purcha').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.sell-now').offset().top
		},1000);
	});

//
$('.navbar-inverse .navbar-nav .dropdown-menu li .client').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.our-clients').offset().top
		},1000);
	});

//
$('.navbar-inverse .navbar-nav .dropdown-menu li .stat').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.statistics').offset().top
		},1000);
	});
//
$('.navbar-inverse .navbar-nav .dropdown-menu li .testi').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.testmonials').offset().top
		},1000);
	});
//
$('.navbar-inverse .navbar-nav .dropdown-menu li .teames').click(function(){
		$('html, body').animate({scrollTop:
			

			$('.our-team').offset().top
		},1000);
	});


//hide navbar....
var navHide = $(".navbar-inverse");

$(window).scroll(function()
{
	//console.log($(this).scrollTop());
	if ($(this).scrollTop()>= 500) 
	{
		navHide.hide();
	}
	else
	{
		navHide.show();
	}
});

