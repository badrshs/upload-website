/*global $, alert, console*/

$(function(){
	
	
//make smoth skroll---------------------------------
$('.menue li a').click(function(){
		$('html,body').animate({
			scrollTop:$('#'+ $(this).data('value')).offset().top-100	
		},1000);		
});
//make smoth skroll---------------------------------
//read the ecroll on the consol------------
		
});

