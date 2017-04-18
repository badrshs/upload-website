/*global $, console*/
$(function () {
    "use strict";
    $(".nav .menus li a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).data("value")).offset().top
        }, 2000);
    });
    
});