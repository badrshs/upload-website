$(document).ready(function() 
{
                 
    $('.carousel').carousel
    ({
      interval: 5000
    });

    // Show color option by clicking on the gear

    $(".gearchk").click(function() {

        $(".color-option").fadeToggle();

    });

});