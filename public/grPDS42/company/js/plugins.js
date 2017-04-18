jQuery(document).ready(function( $ ) {
        // for rotating text in header with using morphext library 
	 $("#hero .rotating").Morphext({
          animation: "flipInX",
          separator: ",",
          speed: 3000
        });
         
        //nice scroll
        $("html").niceScroll();
        
        $('.carousel').carousel({
            interval: 5000
            
      });
        
        
      // caching the scroll top element //
      var scrollbutton = $("#scroll-top");
      $(window).scroll(function () {
          
              if ($(this).scrollTop() >= 600){
                  
                  scrollbutton.show();
                  
              }
              else{
                  
                  scrollbutton.hide();
                  
              }
      });
      // click on button to scroll to top //
      scrollbutton.click(function () {
          
              $("html,body").animate({scrollTop: 0},500);
              
      });
      
});

  