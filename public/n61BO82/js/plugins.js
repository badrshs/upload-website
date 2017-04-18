$(document).ready(function(){ 

    // Trigger Nice Scroll
    $("html").niceScroll({ 
        cursorcolor:'#84c554',
        cursorwidth:"8px",
        scrollspeed:"120",
        cursorborder:"0",
        cursorborderradius:"0" 
    });
    // Trigger Fixed Header
    $(window).on("scroll",function() {

        var sc = $(window).scrollTop();
        
        if (sc > 120) {

            $('.f-header').slideDown();

        } else {

            $('.f-header').slideUp();

        };

    });
    // Check Testimonils
    var rightArrow = $('.testim .fa-chevron-right');
    var leftArrow = $('.testim .fa-chevron-left');

    function checkClients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut(0) : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut(0) : rightArrow.fadeIn();
    }

    checkClients()

    $('.testim i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {
        
            $('.testim .active').fadeOut(600, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients()
                
            });

        } else {
        
            $('.testim .active').fadeOut(600, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients()
                
            });
        
        }

    });
});

