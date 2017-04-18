$(document).ready(function(){

$(".select1").on("change", function () {
    
    $(".button1").click(function(){

    
    $(".input1").val( $(".select1").val() );
 
});

});
    
    
    
$(".select2").on("change", function () {
    
    $(".button2").click(function(){

    
    $(".input2").val( $(".select2").val() );
 
});

});
    
        
$(".select3").on("change", function () {
    
    $(".button3").click(function(){

    
    $(".input3").val( $(".select3").val() );
 
});

});
    
    
$(".select4").on("change", function () {
    
    $(".button4").click(function(){

    
    $(".input4").val( $(".select4").val() );
 
});

});

    
    $(".ser").click(function(){

   $('html, body').animate({

       scrollTop: $("#who").offset().top - 100

} , 1500);

  });
    
      $(".ser2").click(function(){

   $('html, body').animate({

       scrollTop: $("#contact").offset().top - 100

} , 1500);

  });
    
    
    
    
    
});