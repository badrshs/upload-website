$(document).ready(function () {
    "use strict";
    $("html").niceScroll();
    $(".carousel").height($(window).height());
    console.log($(window).width());
    $(".background").click(function () {
        $(".navbar").toggle(500);
    });
        
    
});