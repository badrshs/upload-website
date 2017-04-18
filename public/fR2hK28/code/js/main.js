/* global src */

$(document).ready(function() {
	 AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
	// owl slider
	var owl = $("#owl-demo");
 
		  owl.owlCarousel({
		      items : 6, //10 items above 1000px browser width
		      itemsDesktop : [1000,6], //5 items between 1000px and 901px
		      itemsDesktopSmall : [900,6], // betweem 900px and 601px
		      itemsTablet: [600,2], //2 items between 600 and 0
		      itemsMobile : false ,// itemsMobile disabled - inherit from itemsTablet option
		      autoPlay:true,
		  });
		 
		  // Custom Navigation Events
		  $(".next").click(function(){
		    owl.trigger('owl.next');
		  })
		  $(".prev").click(function(){
		    owl.trigger('owl.prev');
		  })
		  $(".play").click(function(){
		    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
		  })
		  $(".stop").click(function(){
		    owl.trigger('owl.stop');
		  })
		   /*Nice Scroll*/
		  $("html").niceScroll();
});

