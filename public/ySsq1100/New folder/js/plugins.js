$(document).ready(function(){
 $("#tools").click(function(){
  $('#Lovely-ninjaa').show(700);
  $('#all-ninjaa,#bg-ninjaa').hide(700)
  
 })

 $("#Real").click(function(){
  $('#bg-ninjaa').show(700);
  $('#all-ninjaa,#Lovely-ninjaa').hide(700)
  
 })

 $("#all").click(function(){
  $('#all-ninjaa').show(700);
  $('#bg-ninjaa,#Lovely-ninjaa').hide(700)
  
 })


});

