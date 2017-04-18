$( document).ready(function(e) {
        
$(".intro").click(function(){
		$(".introlcon").slideToggle(1000)
		});

$(".Personal").click(function(){
		$(".Personalcon").slideToggle(1000)
		});

$(".Courses").click(function(){
		$(".Coursescon").slideToggle(1000)
		});


$(".Education").click(function(){
		$(".Educationcon").slideToggle()
		});


$(".Language").click(function(){
		$(".Languagecon").slideToggle()
		});


$(".Hobbies").click(function(){
		$(".Hobbiescon").slideToggle()
		});


$(".Contact").click(function(){
		$(".Contactcon").slideToggle()
		});


$(".other").click(function(){
		$(".othercon").slideToggle()
		});


$(".download").click(function(){
		$(".downloadcon").slideToggle()
		});

$("h1").fadeOut(5000,
	function(){
		$(".loda").fadeOut()})
});