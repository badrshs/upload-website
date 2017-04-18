$(document).ready(function(){

$("button.button2").click(function(){
    
    var background = $("input.input1").val();
    
    $("p.p1").css({

    "background":background
    

      });
    

    var padding = $("input.input2").val();
    
    $("p.p1").css({

   "padding": padding
        

   });
    
  var margin = $("input.input3").val();
    
    $("p.p1").css({

        "margin": margin

  });
    
    var font = $("input.input4").val();
    
    $("p.p1").css({

      "font-family": font

  });
    
    
    var fontsize = $("input.input5").val();
    
    $("p.p1").css({

        "font-size": fontsize

  });
    
    var fontcolor = $("input.input6").val();
    
    $("p.p1").css({

   "color":fontcolor

  });
    
});
    
});