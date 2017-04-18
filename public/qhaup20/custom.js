$(document).ready(function(){
	$('.bxslider').bxSlider();
	console.log("welcome");
	$('.header').height($(window).height());
	$(".header").resize(function(){
		$(".header").height($(window).height());
		
	})
	$(".header .navBar .container ul li ").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})

	// calculatin height
	var navBarHeight=$(".navBarElements").height();
	var header=$(".header").height();
	var sliderHeight=header-navBarHeight;
	var actualHeight=sliderHeight-navBarHeight;
	$(".tabs ul li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected")
	})

  $(".ser1").click(function(){
  	$("html,body").animate({
  		scrollTop:$("#services").offset().top-20
  	},1000)
  })
  $(".ser2").click(function(){
  	$("html,body").animate({
  		scrollTop:$("#ourTeam").offset().top-20
  	},1000)
  })
  $(".ser3").click(function(){
  	$("html,body").animate({
  		scrollTop:$("#projects").offset().top-20
  	},1000)
  })
  $(".ser4").click(function(){
  	$("html,body").animate({
  		scrollTop:$("#contact").offset().top-20
  	},1000)
  })

})
