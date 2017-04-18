$(document).ready(function(){
    $('.carousel').carousel({
        interval:3000
        /*in milli second*/ /*el code da 3l4an 2bt2 el t2lyb el automatic llswar */
    });
});

//loading page
$(window).load(function()
    { 
    $(".loading .sk-cube-grid").fadeOut(2000,
    function()
    {
      $(this).parent().fadeOut(2000,
       function()
       {
        $("body").css("overflow","auto")
        $(this).remove();
       });
    });           
});

//navbar top and every section gets its color when i see it
$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 68;
			 if ($(window).scrollTop() > 600) {
				 $('nav').addClass('fixednav');
                 $("#Slider").addClass('mrgincar');
			 }
			 else {
				 $('nav').removeClass('fixednav');
                 $("#Slider").removeClass('mrgincar');
			 }
             
             if ($(window).scrollTop() > 1275) {
				 $('#first').addClass('redcolor');
			 }
			 else {
				 $('#first').removeClass('redcolor');
			 }
             
             if ($(window).scrollTop() >= 1945) {
				 $('#first').removeClass('redcolor');
                 $('#second').addClass('redcolor')
			 }
			 else {
				 $('#second').removeClass('redcolor');
			 }
             
             if ($(window).scrollTop() >= 2325) {
				 $('#second').removeClass('redcolor');
                 $('#third').addClass('redcolor')
			 }
			 else {
				 $('#third').removeClass('redcolor');
			 }
             
             if ($(window).scrollTop() >= 2980) {
				 $('#third').removeClass('redcolor');
                 $('#forth').addClass('redcolor')
			 }
			 else {
				 $('#forth').removeClass('redcolor');
			 }
		});
	});
//print top offset nzelt 2d 2a mn 2wel el page
$(window).scroll(function()
{
    console.log($(this).scrollTop() );
});


