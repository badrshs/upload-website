$(document).ready(function(){

$("body").fadeIn(4000);
    $("img").fadeIn(4200);
    $("p").fadeIn(4200);
    $("h1").fadeIn(4200);
    
    $(".img22").mouseenter(function(){

    $(this).animate( { marginLeft:'10px' } )
     $(this).animate( { marginTop:'50px' } ) 
   
    })
    
    $(".img22").mouseleave(function(){

  $(this).animate( { marginLeft:'20px' } )
     $(this).animate( { marginBottom:'20px' } )

   })

});