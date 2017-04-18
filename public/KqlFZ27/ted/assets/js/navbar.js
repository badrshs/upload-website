  $(window).ready(function(){

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll - 20) {
                $('.navbar-right li a.active').removeClass('active');
                $('.navbar-right li a').eq(i).addClass('active');
            }
        });

    } else {
        $('navbar-right li a.active').removeClass('active');
        $('navbar-right li a:first').addClass('active');
    }

}).scroll();

});
