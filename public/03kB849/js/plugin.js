$(document).ready(function(){
 $(".active .text").hide();
$(".image").on("click",function(){
     
      $( ".image" ).each(function() {
  $(".image .text").fadeIn(1000);
});
  $(this).addClass("active").siblings("div").removeClass("active");
       $(".active .text").fadeOut(1000);
    });
    
    $(".loading").height($(window).height());
    $(".loading").width($(window).width())
    window.onloadd=(function(){
       $(".loading").delay(1000).fadeOut(1000) 
    }())
});