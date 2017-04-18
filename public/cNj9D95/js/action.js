$(window).scroll(function(){
var s=$(window).scrollTop();
if(s>600){
 $(".t1").css("display","inline-block");
  $(".t2").css("display","inline-block");
  $(".t3").css("display","inline-block");
$(".t1").addClass("tn");
$(".t2").addClass("tn");
$(".t3").addClass("tn");
}
});