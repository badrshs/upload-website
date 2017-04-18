$(document).ready(function() {  


   
 $(".our_Services .col-sm-4.col-md-4.col-lg-4").height($(".our_Services .col-sm-8.col-md-8.col-lg-8").height());
 $(window).resize(function(){
     
    $(".our_Services .col-sm-4.col-md-4.col-lg-4").height($(".our_Services .col-sm-8.col-md-8.col-lg-8").height());
 
});
  
$(".over").width($(".Our_Projects .items.col-sm-4.col-md-4.col-lg-4 img").width());
 $(window).resize(function(){
     
    $(".over").width($(".Our_Projects .items.col-sm-4.col-md-4.col-lg-4 img").width());
 
});
    
    $(".our_Services .col-sm-4.col-md-4.col-lg-4 span.fa.fa-play").click(function(){
        
       $(".our_Services .col-sm-4.col-md-4.col-lg-4, .our_Services .col-sm-8.col-md-8.col-lg-8").fadeOut(function(){
           
           $("video").fadeIn();
       });
    });

    // Smooth Scroll To Div
    
    $(".Services_nav").click(function(){
        $('html, body').animate({
            scrollTop: $("#Services_nav").offset().top  
        },2000)
    });
    $(".Projects_nav").click(function(){
    $('html, body').animate({
            scrollTop: $("#Projects_nav").offset().top   
        },2000)
    });
    $(".Pricings_nav").click(function(){
    $('html, body').animate({
            scrollTop: $("#Pricings_nav").offset().top  
        },2000)
    });
      $(".About_Us_nav").click(function(){
    $('html, body').animate({
            scrollTop: $("#About_Us_nav").offset().top  
        },3000)
    });
    $(".Contact_Us_nav").click(function(){
    $('html, body').animate({
            scrollTop: $("#Contact_Us_nav").offset().top
        },3000)
    });
    
});

 

