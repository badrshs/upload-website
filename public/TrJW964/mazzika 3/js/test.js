$(document).ready(function(){
  $(".header button").click(function(){
  	$(".header").fadeOut(1000,function(){
  		$(".form1").fadeIn(1000,function(){
  			$(".form1 .btn0").click(function(){
  				$(".form1").fadeOut(1000,function(){
  					$(".form2").fadeIn(1000,function(){
              $(".form2 button").click(function(){
                $(".form2").fadeOut(1000,function(){
                  $(".hello").fadeIn();
                });
              });
            });
  				});
  			});
  		});
  	});
  });

  $(".hello button").click(function(){
    $(".hello").fadeOut(1000,function(){
      $(".header").fadeIn(1000);
    });
  });
});

//loading screen
$(window).load(function(){
	$("body").css("overflow","auto")
	$(".overlay .cssload-dots").fadeOut(1000,function(){
		$(this).parent().fadeOut(2000,function(){
			$(this).remove()
		});
	});
});