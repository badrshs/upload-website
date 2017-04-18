$(document).ready(function(e) {
    
	$(".round-div").hover(function()
	{
		 $(this).css({
		 "border-radius":"285px",
		 "bottom":"20px","background":"rgba(204,204,204,.7)",
		 "color":"#fff",
		 "border-top":"#CCC solid 2px",
		 "border":"rgba(255,255,255,.9) solid 2px"
		 })
		 $("button").css({"background":"#fff","color":"#ccc"})
		 $(".round").css({"border":"4px double #fff"})
		
		
	},
	function()
	{
		
				 $(this).css({
			     "border-radius":"0 0 258px 285px",
				 "bottom":"0px",
				 "background":"none",
				 "color":"#000",
				 "border-top":"#f1b717 solid 10px",
				 "background":"#fff"
				 })
				  $("button").css({"background":"rgba(204,204,204,.7)","color":"#000"})
				  $(".round").css({"border":"2px solid #CCC"})
				 

		
	}
	);
	
	/*
	$(".parent").hover(
	function()
	{
		$("img").css({
			
			"transform":"scale(1.2,1.2)",
			"transition-duration":"3s",
			
			
			});
			
			$(".layer").css({
				
				
			"transform":"scale(1.2,1.2)",
			"transition-dation":"1s",
			"opacity":"1",
            "background":"rgba(0,0,0,.5)"
				
				
				}),
	
	function(){
		
		$("img").css({
			
			"transform":"none",
			
			
			});
			
			$(".layer").css({
				
				
			/*"transform":"scale(1,1)",
			"transition-duration":"1s",
			"opacity":"0",
			"background":"none",
			"display":"none"
			
				
				
				});
	
		
	}
	});*/
	
	
	
	$(window).scroll(function(){
	
	var sc= $(window).scrollTop();
	var nav_offset= $(".nav2").offset().top;
	var nav_offset2= $(".nav1").offset().top;
	
		console.log(sc);
		if(sc>nav_offset2)
		{
			$(".nav2").addClass("navbar-fixed-top");
			$(".nav1").fadeOut();
		
			
		}
		else
		{
			$(".nav2").removeClass("navbar-fixed-top");
			$(".nav1").fadeIn();
			$(".nav2").css({
			
			"margin-top":"150x",
			"z-index":"55555"
				
				})
		}
	
})
	
	
$(window).resize(function() {
	var window_width= $(window).width();
	if(window_width<"768px")
	{
	
	
	$(".round-div").addClass( "col-lg-3", "col-md-6","col-sm-12" ,"col-xs-12")}
    
});	

$(window).scroll(function(){ 
	var sc = $(window).scrollTop();
	if(sc>1000)
	{
		 $(".up").fadeIn();
	}
	else
	{
		$(".up").fadeOut();
		
	}
	
	
	
})
	
	$(".up").click(function()
	
		
		{
		 $("html,body").animate({scrollTop:0}, 2000);
		
		
		
		}
	 );
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
});