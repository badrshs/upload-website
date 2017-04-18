$(document).ready(function () {
    $("html").niceScroll();
    var colorli = $(".my-btn");
        
    colorli.click(function() {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    $(".fa-cogs").click(function () {
        $(".color-changer").slideToggle();
    });
    $(".loading .spinner").fadeOut(2000, function() {
        $(this).parent().fadeOut(1000, function() {
            $(this).remove();
        });
    });
    $(".internce").height($(window).height());
    $(".home").click(function () {
        $(this).addClass("active");
        $(".about, .team, .services, .portfolio1, .testimonilas, .contact").removeClass("active");
    });
    $(".about").click(function () {
        $(this).addClass("active");
        $(".home, .team, .services, .portfolio1, .testimonilas, .contact").removeClass("active");
    });
    $(".team").click(function () {
        $(this).addClass("active");
        $(".about, .home, .services, .portfolio1, .testimonilas, .contact").removeClass("active");
    });
    $(".services").click(function () {
        $(this).addClass("active");
        $(".about, .team, .home, .portfolio1, .testimonilas, .contact").removeClass("active");
    });
    $(".portfolio1").click(function () {
        $(this).addClass("active");
        $(".about, .team, .services, .home, .testimonilas, .contact").removeClass("active");
    });
    $(".testimonilas").click(function () {
        $(this).addClass("active");
        $(".about, .team, .services, .portfolio1, .home, .contact").removeClass("active");
    });
    $(".contact").click(function () {
        $(this).addClass("active");
        $(".about, .team, .services, .portfolio1, .testimonilas, .home").removeClass("active");
    });
    
   
});
    
    
    
    
    
    
    
    
    
    