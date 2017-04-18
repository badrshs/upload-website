/* global $, jQuery, alert */

$('.carousel').carousel({
    interval: 6000
});


// Loading Screen

$(window).load(function () {
    $(".loading .spinner").fadeOut(2000,
        function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(2000,
                function () {
                    $(this).remove();
                });
        });
});


var scrollbutton = $(".scroll_top");

$(window).scroll(function () {

    console.log($(this).scrollTop());

    if ($(this).scrollTop() >= 700) {
        scrollbutton.show();
    } else {
        scrollbutton.hide();
    }

});

scrollbutton.click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 800);
});