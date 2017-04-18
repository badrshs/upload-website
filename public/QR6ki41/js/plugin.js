$(document).ready(function(){
	$(".search,.search-btn").focusin(function(){
		$(".search-btn").show(50);
	});
	$(".search,.search-btn").focusout(function(){
		$(".search-btn").hide(50);
	});
	$(".social").mouseenter(function(){
		$(".social-nav").show(500);
	});
	$(".social-nav").mouseleave(function(){
		$(".social-nav").hide(500);
	});
	$(".up-arrow").click(function(){
		$(".row5").slideToggle(500,function(){
			$(".up-arrow i").removeClass("fa-angle-double-down");
			$(".up-arrow i").addClass("fa-angle-double-up");
			});
	});
	$(".mob-nav .nav-btn1").click(function(){
		$(".mob-nav .nav-drop1").slideToggle(500);
	});
	$(".mob-nav .nav-btn2").click(function(){
		$(".mob-nav .nav-drop2").slideToggle(500);
	});
	$(".mob-nav .nav-btn3").click(function(){
		$(".mob-nav .nav-drop3").slideToggle(500);
	});
	$('#scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
	$("#ln-ch").hover(function(){
		$(".lang-ar").fadeToggle(200);
	});
	$('.e7sa-hov').mouseenter(function(){
		$('.mega-briefcase').fadeIn(200);
	});
	$('.dis-hov').mouseenter(function(){
		$('.mega-briefcase').fadeIn(200,function(){
			$('#tit-1').text("اكتشف الاحساء");
		});
	});
	$('.mega-briefcase').mouseleave(function(){
		$('.mega-briefcase').fadeOut(200,function(){
			$('#tit-1').text("عن الاحساء");
		});
	});
	$('.discover .container .row .branch:eq(0) .branch-1').mouseenter(function(){
		$('.branch-1').animate({top:'0'},200)
	});
	$('.discover .container .row .branch:eq(0) .branch-1').mouseleave(function(){
		$('.branch-1').animate({top:'80%'},200)
	});
	$('.discover .container .row .branch:eq(1) .branch-2').mouseenter(function(){
		$('.branch-2').animate({top:'0'},200)
	});
	$('.discover .container .row .branch:eq(1) .branch-2').mouseleave(function(){
		$('.branch-2').animate({top:'80%'},200)
	});
	$('.discover .container .row .branch:eq(2) .branch-3').mouseenter(function(){
		$('.branch-3').animate({top:'0'},200)
	});
	$('.discover .container .row .branch:eq(2) .branch-3').mouseleave(function(){
		$('.branch-3').animate({top:'80%'},200)
	});
});
function openNav()
{
			$(".mob-nav").css("width","250px");
			$("#main").css("margin-left","250px");
			$(".caption").hide(200);
}
function closeNav()
{
	$(".mob-nav").css("width","0px");
	$("#main").css("margin-left","0px");
	$(".caption").show(200);
}