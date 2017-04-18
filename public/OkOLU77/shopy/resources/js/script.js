$(document).ready(function () {
    // Login And Register
    $('#log').click(function () {
        $('#loginandregister').slideToggle(500);
        $('#language').slideUp(500);
        $('#via').slideUp(500);
        $('#cart-items').slideUp(500);
        $('#favorites').slideUp(500);
        $('#show-search').slideUp(500);
    });
    // Language
    $('#lang').click(function () {
        $('#language').slideToggle(500);
        $('#loginandregister').slideUp(500);
        $('#via').slideUp(500);
        $('#cart-items').slideUp(500);
        $('#favorites').slideUp(500);
        $('#show-search').slideUp(500);
    });
    // Coin
    $('#coin').click(function () {
        $('#via').slideToggle(500);
        $('#language').slideUp(500);
        $('#loginandregister').slideUp(500);
        $('#cart-items').slideUp(500);
        $('#favorites').slideUp(500);
        $('#show-search').slideUp(500);
    });
    // Cart
    $('#cart').click(function () {
        $('#cart-items').slideToggle(500);
        $('#via').slideUp(500);
        $('#language').slideUp(500);
        $('#loginandregister').slideUp(500);
        $('#favorites').slideUp(500);
        $('#show-search').slideUp(500);
    });
    // Favorites
    $('#fav').click(function () {
        $('#favorites').slideToggle(500);
        $('#show-search').slideUp(500);
        $('#cart-items').slideUp(500);
        $('#via').slideUp(500);
        $('#language').slideUp(500);
        $('#loginandregister').slideUp(500);
    });
    // Search
    $('#search').click(function () {
        $('#show-search').slideToggle(500);
        $('#cart-items').slideUp(500);
        $('#via').slideUp(500);
        $('#language').slideUp(500);
        $('#favorites').slideUp(500);
        $('#loginandregister').slideUp(500);
    });
    // Close Login And Register
    $('div.close-loginandregister a').click(function () {
        $('div#loginandregister').slideUp(500);
    });
    // Close Language
    $('div#language div.close-language a').click(function () {
        $('div#language').slideUp(500);
    });
    // Close Coin
    $('div#via div.close-via a').click(function () {
        $('div#via').slideUp(500);
    });
    // Close Cart
    $('div#cart-items div.close-cart-items a').click(function () {
        $('div#cart-items').slideUp(500);
    });
    // Close Favorites
    $('div#favorites div.close-fav-items a').click(function () {
        $('div#favorites').slideUp(500);
    });
    // Close Search
    $('div#show-search div.close-search a').click(function () {
        $('div#show-search').slideUp(500);
    });
    $('.carousel-fade').carousel({
        interval:5000,
        pause:false
    });
});

// Show Scroll Button
$(document).scroll(function () {
    if ($(this).scrollTop() > 300)
    {
        $('a.gotop').fadeIn(200);
    } else {
        $('a.gotop').fadeOut(200);
    }

});
// Scroll To Top
$("a.gotop").click(function () {
    $("html, body").animate({scrollTop: 0}, 500);
    return false;
});

// Loading
$(window).load(function () {
    $('.loading').fadeOut(500);
});


// Color Option
$('document').ready(function () {
    $('.option-box i').click(function () {
        $('.color-option').fadeToggle(100);
    });
});


// Change Theme Color
$(document).ready(function () {
    $("ul.color-list li").eq(0).css({"background": "#fab90a"}).end();
    $("ul.color-list li").eq(1).css({"background": "#3498db"}).end();
    $("ul.color-list li").eq(2).css({"background": "#9b59b6"}).end();
    $("ul.color-list li").eq(3).css({"background": "#e74c3c"}).end();
    $("ul.color-list li").eq(4).css({"background": "#e67e22"}).end();
    $("ul.color-list li").eq(5).css({"background": "#2ecc71"});
    
    $("ul.color-list li").click(function (){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
});

// Price Slider
$(document).ready(function(){
    $("#product-price").slider({});
});
