$(document).ready(function() 
{
   
    
    $('.carousel').carousel
    ({
      interval: 5000
    });

    // Show color option by clicking on the gear

    $(".gearchk").click(function() 
                        
    {

        $(".color-option").fadeToggle();

    });
    
    // Change theme color on click
    
    var colorLi = $(".color-option ul li")
    
    colorLi
        .eq(0).css("backgroundColor","#6b1b96").end()
        .eq(1).css("backgroundColor","#cb4f12").end()
        .eq(2).css("backgroundColor","#0383c1");
    
    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value") );
    });
    
    // Loading Screen
    
        $(window).ready(function()
    {
 
        // Loading elements    
            
        $(".loading .overlay-loader").fadeOut(2500,
        function()
        {
         
            $(this).parent().fadeOut(1500,
            function()  
            {              
                // Showing the scroll    
                $("body").css("overflow","auto");
                $(this).remove();
            });
            
        });
                
    });
    
    // Scroll top 
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function()
    {
      	
	 $(this).scrollTop() >= 890 ? scrollButton.fadeIn() : scrollButton.fadeOut();
		
    });
    
    // Click on button to scroll up..

    scrollButton.click(function()
    {
        
       $("html,body").animate({ scrollTop: 0 }, 650);
        
    });

    
});



