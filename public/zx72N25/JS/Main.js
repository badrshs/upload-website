/*global $,jQuery, console, confirm, prompt, usestrict, alert*/
$(document).ready(function() {
console.log($(document).scrollTop());
$(".smma").css("left","-400px");
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 5) {
       $(".navbar-inverse").addClass("sticky");
   }else{
   	$(".navbar-inverse").removeClass("sticky");
   }	
});


$(window).scroll(function() {
    if ($(window).scrollTop() > 1100) {
       $(".info_down_ecr").addClass("inf_anim");
   }
   if ($(window).scrollTop() > 1100) {
       $(".inf_download img").css("display","block").addClass("img_anim");
    }	
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 1700) {
      $(".about").find('.services').eq(0).animate({opacity:"1"},'slow');
      $(".about").find('.services').eq(1).delay(400).animate({opacity:"1"},'slow');
      $(".about").find('.services').eq(2).delay(600).animate({opacity:"1"},'slow');
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 1800) {
      $(".about").find('.services').eq(3).delay(800).animate({opacity:"1"},'slow');
      $(".about").find('.services').eq(4).delay(1000).animate({opacity:"1"},'slow');
      $(".about").find('.services').eq(5).delay(1200).animate({opacity:"1"},'slow');
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 2200) {
      $(".our_features").find('.h1').addClass('h2_zigzag');
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 2500) {
      $(".our_features").find('img').css("opacity",1).addClass('scale_img');
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 3250) {
      $(".plan .h1").css("opacity",1).addClass('h2_zigzag');
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 3370) {
      $(".plan .myfp").css("opacity",1).addClass('scale_img');
 
   }
});


$(window).scroll(function() {
    if ($(window).scrollTop() > 3400) {
      $(".plan .list_plan").find(".col-lg-4").eq(0).addClass('sma1');
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 3400) {
      $(".plan .list_plan").find(".col-lg-4").eq(1).addClass('sma2');
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 3400) {
     $(".plan .list_plan").find(".col-lg-4").eq(2).addClass('sma3');
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 3900) {
     $(".tell_me_question").addClass('partie_question');  
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 4250) {
      $(".get_download h2").css("opacity",1).addClass('geth2_zigzag');
 
   }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 4350) {
      $(".get_download p").css("opacity",1).addClass('scale_img');
 
   }
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 4400) {
      $(".get_download").find("a").addClass('butfoter');
   }
});


