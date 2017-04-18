/*global $, alert, console*/

$(function () {
    "use strict";

    $(".bigtext").typed({
        strings: ["مرحبا بكم في موقع"],
        typeSpeed: 23,
        showCursor: false,
        startDelay: 300
    });

    $(".smalltext").typed({
        strings: ["مؤسسة ابن عقيل التربوية الاهلية"],
        typeSpeed: 23,
        showCursor: false,
        startDelay: 1800
    });

   // show .s-bttuns

    $('.s-buttons').delay(4200).fadeIn(1000);
    $('a').click(function () {
        $('html body').animate({
            scrollTop: $('#' + $(this).data("value")).offset().top
        }, 1200);
    });


  // install niceScroll plaugin 

    $("html").niceScroll({
        cursorborder: 'none',
        cursorcolor: '#2980b9',
        cursorborderradius: 'none',
        cursorwidth: '4px'
    });

  // install slider
 
    (function autoslide() {

        $('.slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(4000).fadeOut(1000, function () {

                    $(this).removeClass('active').next('div').addClass('active').fadeIn(1000);
           
                    autoslide();

                });

            } else {

                $(this).delay(4000).fadeOut(1000, function () {
 
                    $(this).removeClass('active');

                    $('.slider div:first-child').addClass('active').fadeIn(1000);

                    autoslide();

                });
 
            }

        });


    }());
 
  // show more images
 
    $('.show').click(function () {

        if ($('.row3').hasClass('hidden')) {
 
            $('.row3').fadeIn(1000).removeClass('hidden');
            $(this).text('اخفي');

        } else {

            $('.row3').hide().addClass('hidden');
            $(this).text('شاهد المزيد');
  
        }

    });

   // show question more

    $('.common-q span').click(function () {
        $(this).next('div').slideToggle().siblings('div').slideUp();

    });

});