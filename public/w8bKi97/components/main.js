$(document).ready(function() {
    $(".button-collapse").sideNav();
});

$(document).ready(function() {
    $('.parallax').parallax();
});

$(document).ready(function() {
    $('.collapsible').collapsible({
        accordion: false
    });
});

$(function() {
    $("#texttyped").typed({
        strings: ["a high school student.", "a hacker.", "an award-winning artist.", "a programmer.", "a painter.", "a photographer.", "a web designer.", "a robotics programming lead.", "a kungfu/wushu black belt.", "an AR and VR enthusiast.", "a cryptography enthusiast.", "a hooman."],
        typeSpeed: 20,
        loop: true
    });
});
