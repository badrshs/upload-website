 <!-- this function is used for hiding mobile menu after click on link  --> 

function close_toggle() {
   if ($(window).width() <= 768) {
      $('.nav a').on('click', function(){
          $(".navbar-toggle").click();
      });
   }
   else {
     $('.nav a').off('click');
   }
}
close_toggle();

$(window).resize(close_toggle);

 <!-- // --> 

$(document).ready(function(){

   $( '.jt-waypoint' ).waypoint( {
     offset: '75%',
     handler: function() {
      $(this).addClass( 'jt-animated' );
     }
     
   } );
 } )


<!-- this function is used for body scrolling -->
$(document).ready(
	function() {  
		$("html").niceScroll({cursorcolor:"#3e3e3e"});
	}
);

<!-- // -->

<!-- this function is for hiding back to top before scrollling -->
         
(function (cash) {
  $(document).ready(function(){
 // hide .navbar first
 $(".go_to_top").hide();
 // fade in .navbar
 $(function () {
  $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
   if ($(this).scrollTop() > 0) {
	$('.go_to_top').fadeIn();
   } else {
    $('.go_to_top').fadeOut();
   }
  });

 });

});
  }(jQuery));

<!-- // --> 


<!-- this function is for back to top -->

 $(".go_to_top").click(function () {
               //1 second of animation time
               //html works for FFX but not Chrome
               //body works for Chrome but not FFX
               //This strange selector seems to work universally
               $("html, body").animate({scrollTop: 0}, 1000);
            }); 
 <!-- // -->    

<!-- this function is for menu scrolling -->

jQuery(document).ready(function(){
	jQuery('.topnav').localScroll({offset: {top:0}});
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	//jQuery('#section-1').parallax("50%", 0.1);
	//jQuery('#section-2').parallax("50%", 0.1);
	//jQuery('#section-3').parallax("50%", 0.1);
		//jQuery('#section-4').parallax("50%", 0.1);

})

 <!-- // --> 
 
<!-- this function is for menu hiding before scrolling --> 
 
 (function ($) {
  $(document).ready(function(){
	// hide .navbar first
	$(".navigation").hide();
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 500) {
				$('.navigation').fadeIn();
			} else {
				$('.navigation').fadeOut();
			}
		});

	
	});

});
  }(jQuery));
  
 <!-- // --> 
$(document).ready(function(){

   $( '.jt-waypoint' ).waypoint( {
     offset: '75%',
     handler: function() {
      $(this).addClass( 'jt-animated' );
     }
     
   } );
 } )





