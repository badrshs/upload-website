$(document).ready(function() {
   
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true
      
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
     
        $(".menu").click(function(){$("header nav").slideToggle( "slow" );});
    var scrooltop = $('.up');$(window).scroll(function(){if ($(this).scrollTop() >= 600 ){scrooltop.show();}else{scrooltop.hide()}});scrooltop.click(function(){
        $("html,body").animate({scrollTop:0},600)
    });
    
});


new WOW().init();
