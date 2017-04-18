$(document).ready(function(){ 

    // Trigger Nice Scroll
    $("html").niceScroll({ 
        cursorcolor:'#294072',
        cursorwidth:"8px",
        scrollspeed:"120",
        cursorborder:"0",
        cursorborderradius:"0" 
    });
    
    $('.c-patio').click(function(){
        $('.right').fadeOut();
        $('.patio').fadeIn();
        $('.left ul li').click(function(){
            $(this).addClass('selectad').siblings().removeClass("selectad");
        });
    });

    $('.c-services').click(function(){
        $('.right').fadeOut();
        $('.s-services').fadeIn();
    });

    $('.c-home').click(function(){
        $('.right').fadeOut();
        $('.home').fadeIn();
    });

    $('.c-room').click(function(){
        $('.right').fadeOut();
        $('.room').fadeIn();
    });

    $('.c-blueprints').click(function(){
        $('.right').fadeOut();
        $('.blueprints').fadeIn();
    });

    $('.c-3d').click(function(){
        $('.right').fadeOut();
        $('.3d').fadeIn();
    });

    $('.c-kitchen').click(function(){
        $('.right').fadeOut();
        $('.kitchen').fadeIn();
    });

    $('.c-bathtoom').click(function(){
        $('.right').fadeOut();
        $('.bathtoom').fadeIn();
    });

});

