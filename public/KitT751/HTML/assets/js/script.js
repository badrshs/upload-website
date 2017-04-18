$(document).ready(function () {
    var search_icon = $('.fa-search')
        , exit = $('.exit')
        , search_form = $('.search_form');
    search_icon.click(function () {
        search_form.show(0, function () {
            $(this).css('display', 'flex')
        });
    });
    exit.click(function () {
        search_form.slideUp();
    });
    $('.owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , nav: false
        , autoplayHoverPause: true
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });
    $(".to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $(".navbar-fixed-top").autoHidingNavbar({
  // see next for specifications
});
});