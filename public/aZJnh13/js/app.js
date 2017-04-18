$(document).ready(function() {

    
    
    // OWL Plugin Slider 
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay:true,
    });
    // END OWL Plugin Slider 
    
    
    
    // Portfolio 
    $('.portfolio_nav span').click(function(){
    $('.portfolio_nav span').removeClass('activee');
    $(this).toggleClass('activee');
    });

    $('span:contains("all")').addClass('active');

    $('span:contains("all")').click(function() {
    $('span:not(:contains("all"))').removeClass('active');
    $(this).addClass('active');
    $('.tab').show(500)
    });

    $('span:contains("web design")').click(function() {
    $('span:not(:contains("Web Design"))').removeClass('active');
    $(this).addClass('active');
    $('.tab:contains("Web Design")').show(500);
    $('.tab:not(:contains("Web Design"))').hide(500);

    });

    $('span:contains("app design")').click(function() {
    $('span:not(:contains("app Design"))').removeClass('active');
    $(this).addClass('active');
    $('.tab:contains("App Design")').show(500);
    $('.tab:not(:contains("App Design"))').hide(500);
    });

    $('span:contains("graphic")').click(function() {
    $('span:not(:contains("graphic"))').removeClass('active');
    $(this).addClass('active');
    $('.tab:contains("graphic")').show(500);
    $('.tab:not(:contains("graphic"))').hide(500);
    });  
    // END Portfolio 
    
    
    
    // Menu Click To slide toggle
    $('.menu').click(function(){
    $('.top_nav nav').slideToggle(slow);
    });
    // END Menu Click To slide toggle
    
    
    
    // Scroll To Up 
    var scrooltop = $('.up');
    $(window).scroll(function(){
    if ($(this).scrollTop() >= 600 ){ 
    scrooltop.show();
    }
    else
    {
    scrooltop.hide()
    }});
    scrooltop.click(function(){
    $("html,body").animate({scrollTop:0},600);
    });
    // END Scroll To Up 
    
    
    
    // WOW Plugin & Animate.css
    new WOW().init();
    // END WOW Plugin & Animate.css
    
    
});