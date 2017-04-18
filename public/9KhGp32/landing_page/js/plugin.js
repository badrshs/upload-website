$(document).ready(function () {
            $('.question button ').click(function () {
                $(this).parent().fadeOut(1);
                $(this).parent().next().removeClass('hidden');

            });
            
           $('.test').click(function(){
           	$('.data').fadeOut(5000,
           	function(){

           		$('.send-server').fadeOut(2000,
           	function(){
           		$('.contect').removeClass('hidden');
           		$('.contect').fadeOut(5000,
           	function(){
           		$('.connect').removeClass('hidden');
           		$('.connect').fadeOut(5000, 
           	function(){
           		$('.finial').removeClass('hidden');
           		$('.finial').fadein(5000);
           		});
           	});
           });

           	});
           });

        });

