$(document).ready(function(){
  $(".x").click(function(){
    $("form").animate({left:'30%'},2000);
    $(".x").hide(2000);
  });
  $(".cancel").click(function(){
    $("form").animate({left:'0%'},2000);
    $(".x").show(2000);
  });
  function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(30.030372,31.2111213),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
});
