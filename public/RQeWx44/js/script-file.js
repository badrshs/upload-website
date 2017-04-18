$(document).ready(function(){

    /* using nice =scrolling -----------------------------------------------------------------------------------------*/
    $("html").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: 15,
        cursorborder: "1px solid #f7600e",
        cursorborderradius:5,
        zindex:10000
    });
    /* reload the page -----------------------------------------------------------------------------------------------*/
    $(".navbar .title").click(function(){
        location.reload();
    });
    /* header resizing -----------------------------------------------------------------------------------------------*/
    $(".header").height($(window).height());
    /* smooth scroll for sections  -----------------------------------------------------------------------------------*/
    $(".header .down i").click(function(){
        $("html , body").animate({
             scrollTop: $(".screen").offset().top
        },1000);
    });

    $(".header .button .our-courses").click(function(){
        $("html , body").animate({
            scrollTop: $(".courses").offset().top
        },1000);
    });

    $(".header .button .hire-us").click(function(){
        $("html , body").animate({
            scrollTop: $(".staff").offset().top
        },1000);
    });
    /* show more pic. button -----------------------------------------------------------------------------------------*/
    $(".courses button").click(function(){
        $(".hidden").fadeIn(2000);
    });
    /* make slider of testimonials -----------------------------------------------------------------------------------*/
    function checkClient(){
        $(".client:first").hasClass("active")? $(".prove .fa-chevron-left").fadeOut() : $(".prove .fa-chevron-left").fadeIn();
        $(".client:last").hasClass("active")? $(".prove .fa-chevron-right").fadeOut() : $(".prove .fa-chevron-right").fadeIn();
 }
    checkClient();
    $(".prove i").click(function(){
        if ($(this).hasClass("fa-chevron-right"))
        {
            $(".prove .active").fadeOut(1000, function(){
                $(this).removeClass("active").next(".client").addClass("active").fadeIn(1000);
                checkClient();
            });
        }
        else
        {
            $(".prove .active").fadeOut(1000, function(){
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn(1000);
                checkClient();
            });
        }


    });

});




