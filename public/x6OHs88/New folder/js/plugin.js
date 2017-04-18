/*global $ , jquery , alert */
$(document).ready(function () {

    "use strict";

    $('.carousel').carousel({
        interval: 6000

    });

    $('.gear-check').click(function () {
        $('.color-option').fadeToggle();

    });

    var colorLi = $('.color-option ul li');
    colorLi
        .eq(0).css('backgroundColor', '#8f3161').end()
        .eq(1).css('backgroundColor', '#6033b7').end()
        .eq(2).css('backgroundColor', '#c72b2b').end()
        .eq(3).css('backgroundColor', '#0895d1');

    colorLi.click(function () {
        $("link[href*='theme']").attr('href', $(this).attr('data-value'));

    });
    
});
/*
loadinggggggg

$(window).load(function (){
$('.loading h1,.loading').fadeOut(2000);





});
*/