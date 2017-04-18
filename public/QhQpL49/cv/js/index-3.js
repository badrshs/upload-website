$(document).ready(function() {
  
$('.all').click(function(){$('.e, .f, .g').show(500)});
$('.web').click(function(){$('.e ').show(500,function(){$('.f ').hide(500,function(){$('.g').hide(500)})})});
$('.graphics').click(function(){$('.f').show(500,function(){$('.e').hide(500,function(){$('.g').hide(500)})})});
$('.apps').click(function(){$('.g').show(500,function(){$('.e').hide(500,function(){$('.f').hide(500)})})});


// Show Color Option Div When Click On The Gear
    
    $(".glyphicon-cog").click(function () {
        
        $(".color-option").fadeToggle();
        
    });

     // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  
    // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "rgb(79, 206, 173)").end()
    
           .eq(1).css("backgroundColor", "#ab3939").end()
    
           .eq(2).css("backgroundColor", "#30719d").end()
    
           .eq(3).css("backgroundColor", "#FFD500");
        
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });



    $(".progress-bar").loading();
     $('input').on('click', function () {
       $(".progress-bar").loading();
    });


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
   
});






$('body').css('overflow','auto')
$(window).load(function(){$('.loading').fadeOut(1000)})