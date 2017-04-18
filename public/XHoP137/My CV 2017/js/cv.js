$(document).ready(function(){
	
	$(".about-me .id .img1").mouseenter(function(){
		$(this).fadeToggle(500,function(){
          $(".about-me .id .img2").fadeToggle(500,function(){
          	$(this).mouseleave(function(){
          		$(this).fadeOut(500,function(){
          			$(".about-me .id .img1").fadeIn(500)
          		});
          	});
          });
		}); 
	});


   $(".about-me .details .my-work .btn1 p").click(function(){
   	$(".about-me .details .my-work .btn1 .drop").slideToggle(500)
   })

   $(".about-me .details .my-work .btn2 p").click(function(){
   	$(".about-me .details .my-work .btn2 .drop").slideToggle(500)
   })

   $(".about-me .details .my-work .btn3 p").click(function(){
   	$(".about-me .details .my-work .btn3 .drop").slideToggle(500)
   })

   $(".about-me .details .my-work .btn4 p").click(function(){
   	$(".about-me .details .my-work .btn4 .drop").slideToggle(500)
   })

   $(".about-me .details .my-work .btn5 p").click(function(){
   	$(".about-me .details .my-work .btn5 .drop").slideToggle(500)
   })


});