$("html").niceScroll();


$("document").ready(function($) {
    var nav = $('#main-menu-container');

    $(window).scroll(function() {
        if ($(this).scrollTop() >= innerHeight) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });