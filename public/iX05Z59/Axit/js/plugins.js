/*global $, alert, console*/
 
$(function(){
  
  $("header").height($(window).height());
  
  })



$(document).ready(function()
    {
      $("#my-tabs li").click(function()
        {
        var myID=$(this).attr("id");
        $(this).removeClass("inactive").siblings().addClass("inactive");
         $(".feature1 div").hide();
         $("#"+ myID+"-content").fadeIn("1000")
        });
    });