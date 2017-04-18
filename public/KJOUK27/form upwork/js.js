$(document).ready(function(){

$("input").click(function(){
	$("i").animate({
		marginLeft:"384px",


	},1000);
});
    $(".dom").click(function(){
    	$(".dom").animate({
    	 borderRadius:"10px",
    	 width:"100px",
    	 height:"0",
    	 padding:"10px",
    	 marginLeft:"900px",
    	 fontSize:"4px",
    	
    },600,function(){
    	$(".dom").fadeOut(1000,function(){
    		$("section").fadeIn(1000)
    	});
    });
    });
});