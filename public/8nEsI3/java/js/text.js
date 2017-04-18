$(document).ready(function(){
    
$("button").click(function(){

   $("a").attr("href",  "https://www."  +  $("input").val() + ".com" )
});
     $("button").animate({ width:'122px' }, 500 )
    $("button").animate({ height:'50px' }, 500 )
    
    
    $("input").animate( { top:'5px' } , 1200 , function() { $("p").show(500) } )
   
});