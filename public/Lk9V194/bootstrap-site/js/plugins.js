$(document).ready(function()
{
$('.carousel').carousel({
  interval: 6000
 });
$(".gear-check").click(function(){
  $(".color-option").fadeToggle();
  
});
 var colorLi=$(".color-option ul li");
 
 colorLi
  .eq(0).css("backgroundColor","#e41817").end()
  .eq(1).css("backgroundColor","#ff8d52").end()
  .eq(2).css("backgroundColor","#ca4b7c").end()
  .eq(3).css("backgroundColor","#5cc2f2");

  colorLi.click(function()
  {
$("link[href*='theme']").attr("href",$(this).attr("data-value") );
    
  });
  //scroll
 var scrollButton = $("#scroll-top");
 $(window).scroll(function()
  {
    $(this).scrollTop()>=600?scrollButton.show():scrollButton.hide();
  });
     //click
     scrollButton.click(function()
    {
      $("html,body").animate({scrollTop:0},600);  
    });
  });

  
  
