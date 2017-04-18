 $(document).ready(function(){

    // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();


  // Show Color Option Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });

     // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  
    
    // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "#8e55ea").end()
    
           .eq(1).css("backgroundColor", "#19c3c3").end()
    
           .eq(2).css("backgroundColor", "#ea5577").end()
    
           
        
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });

 
 

    });



$('body').css('overflow','auto')
$(window).load(function(){$('.loading').fadeOut(1000)})