$(document).ready(function () {

    "use strict";
    var x = $(window).height();

    // slide height
    $('.header').css('height', x);
    $('.background').css('height', x);
    $('.page-1').css('padding-top', x / 4);

    //animation
    $(window).on('scroll', function () {

        var y = $(window).scrollTop();

        if (y > 500) {
            $('.services').addClass('animated bounceInUp');
        }
        if (y > 1400) {
            $('.anywhere').addClass('animated bounceInRight');

        }
        if (y > 2500) {
            $('.dashboard').addClass('animated bounceInLeft');

        }
        if (y > 3200) {
            $('.testimony').addClass('animated bounceInDown');

        }

        if (y > 4100) {
            $('.prices').addClass('animated bounceInUp');

        }
        if (y > 5400) {
            $('.form').addClass('animated bounceInRight');

        }
    });

    //menu
    var overlayNav = $('.cd-overlay-nav'),
        overlayContent = $('.cd-overlay-content'),
        navigation = $('.cd-primary-nav'),
        toggleNav = $('.cd-nav-trigger');


    layerInit();
    $(window).on('resize', function () {
        window.requestAnimationFrame(layerInit);
    });


    toggleNav.on('click', function () {
        if (!toggleNav.hasClass('close-nav')) {

            toggleNav.addClass('close-nav');

            overlayNav.children('span').velocity({
                translateZ: 0,
                scaleX: 1,
                scaleY: 1,
            }, 500, 'easeInCubic', function () {
                navigation.addClass('fade-in');
            });
        } else {

            toggleNav.removeClass('close-nav');

            overlayContent.children('span').velocity({
                translateZ: 0,
                scaleX: 1,
                scaleY: 1,
            }, 500, 'easeInCubic', function () {
                navigation.removeClass('fade-in');

                overlayNav.children('span').velocity({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0,
                }, 0);

                overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    overlayContent.children('span').velocity({
                        translateZ: 0,
                        scaleX: 0,
                        scaleY: 0,
                    }, 0, function () {
                        overlayContent.removeClass('is-hidden')
                    });
                });
                if ($('html').hasClass('no-csstransitions')) {
                    overlayContent.children('span').velocity({
                        translateZ: 0,
                        scaleX: 0,
                        scaleY: 0,
                    }, 0, function () {
                        overlayContent.removeClass('is-hidden')
                    });
                }
            });
        }
    });

    function layerInit() {
        var diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2);
        overlayNav.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);

        overlayContent.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);
    }

    //cards
    $('.card').click(function () {
        $('.card').removeClass('recommend');
        $('.card').removeClass('selected');
        $(this).addClass('selected');
    })
});
