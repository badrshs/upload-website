$(document).ready(function(){
   $(".prof").mouseenter(function(){
        $(".data").fadeIn(2000);
    });
   
    $(".email").mouseenter(function(){
        $(".item").fadeIn(2000);
    });
    
    $(".support").mouseenter(function(){
        $("i , h2 , hr").fadeIn(2000);
        $("p , button").fadeIn(3000);
    });
    
    $(".full").mouseenter(function(){
        $("img").fadeIn(2000);
        $("h3 , hr , p , a , i").fadeIn(3000);
    }); 
});