    $(window).load(function() {
        $('#slider').nivoSlider();
    });

  
$(document).ready(function(){

      $(".shopping").hover(
	    function() {
	      $(this).find('.khaled').fadeIn();
	    },
	    function() {
	      $(this).find('.khaled').fadeOut();
	    });

      $(".search").hover(
	    function() {
	      $(this).find('.khaled2').fadeIn();
	    },
	    function() {
	      $(this).find('.khaled2').fadeOut();
	    });

    });


	

$(document).ready(function(){

$(window).scroll(function(event){
var y = $(this).scrollTop();



if(y >= 20){
	$(".products").addClass("animated zoomInDown");
}

else{

	$(".products").removeClass("animated zoomInDown");
}


if(y >= 600){
	$(".news .title").addClass("animated bounceInDown");
}

else{

	$(".news .title").removeClass("animated bounceInDown");
}


if(y >= 600){
	$(".animate1").addClass("animated fadeInLeft");
}

else{

	$(".animate1").removeClass("animated fadeInLeft");
}


if(y >= 600){
	$(".animate2").addClass("animated fadeInRight");
}

else{

	$(".animate2").removeClass("animated fadeInRight");
}

if(y >= 650){
	$(".animate3").addClass("animated fadeInUp");
}

else{

	$(".animate3").removeClass("animated fadeInUp");
}

if(y >= 650){
	$(".animate4").addClass("animated fadeInDown");
}

else{

	$(".animate4").removeClass("animated fadeInDown");
}



if(y >= 1700){
	$(".images img").addClass("animated flipInY");
}

else{

	$(".images img").removeClass("animated flipInY");
}

});



});


 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
      

	        
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);



