/*global $*/

$(function () {
    
    'use strict';
    
    //  fixed navbar
    
    if ($("body").height() > $(window).height() + 200) {
        
        $(window).scroll(function () {
            
            if ($(this).scrollTop() >= 80) {
                
                $("nav .down-nav").addClass('nav-fixed');
                
                $("nav .mobile-menu").addClass('mobile-menu-fixed');
                
            } else {
                
                $("nav .down-nav").removeClass('nav-fixed');
                
                $("nav .mobile-menu").removeClass('mobile-menu-fixed');
                
            }
            
        });
        
    }
    
    // shopping cart and mobile menu
    
    var isMobile = {
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            }
        },
        
        mobileBars = $(".mobile-menu-button .fa-bars"),
        
        mobileTimes = $(".mobile-menu-button .fa-times"),
        
        mobileMenu = $(".mobile-menu"),
        
        windowWidth = $(window).width(),
        
        eyeSlash = $("form .password-box i:first-of-type"),
        
        eyeNotSlash = $("form .password-box i:last-of-type"),
        
        passwordField = $('form .password-box input[type="password"]'),
        
        scrollTop = $("#Scroll-To-Top");
    
    // Fix Anchor Click In Ios
    
    if (isMobile.iOS()) {
        
        $('a').on('click touchend', function () {
            var link = $(this).attr('href');
            window.open(link, '_blank'); // opens in new window as requested
            
            return false; // prevent anchor click    
        });
        
    }
    
    // mobile menu
    
    mobileBars.on("click", function () {
        
        $(this).fadeOut(0);
        
        mobileTimes.fadeIn(0);
        
    });
    
    mobileTimes.on("click", function () {
        
        $(this).fadeOut(0);
        
        mobileBars.fadeIn(0);
        
    });
    
    if (windowWidth >= 992) {
        
        mobileBars.on("click", function () {
            
            mobileMenu.animate({
                
                right: 0
                
            }, 600);
            
            $("body").animate({
                
                marginRight: "250px",
                
                marginLeft: "-250px"
                
            }, 600);
            
            scrollTop.animate({
                
                right: "250px"
                
            }, 600);
            
        });
        
        mobileTimes.on("click", function () {
            
            mobileMenu.animate({
                
                right: "-260px"
                
            }, 600);
            
            $("body").animate({
                
                marginRight: 0,
                
                marginLeft: 0
                
            }, 600);
            
            scrollTop.animate({
                
                right: 0
                
            }, 600);
            
        });
        
    }
    
    if (windowWidth >= 768 && windowWidth < 992) {
        
        mobileBars.on("click", function () {
            
            mobileMenu.animate({
                
                right: 0
                
            }, 600);
            
        });
        
        mobileTimes.on("click", function () {
            
            mobileMenu.animate({
                
                right: "-310px"
                
            }, 600);
            
        });
        
    }
    
    if (windowWidth < 768 && windowWidth > 250) {
        
        mobileBars.on("click", function () {
            
            mobileMenu.animate({
                
                right: 0
                
            }, 600);
            
        });
        
        mobileTimes.on("click", function () {
            
            mobileMenu.animate({
                
                right: "-100%"
                
            }, 800);
            
        });
        
    }
    
    if (windowWidth <= 250 && windowWidth > 210) {
        
        mobileBars.on("click", function () {
            
            mobileMenu.animate({
                
                right: 0
                
            }, 600);
            
        });
        
        mobileTimes.on("click", function () {
            
            mobileMenu.animate({
                
                right: "-100%"
                
            }, 800);
            
        });
        
    }
    
    if (windowWidth <= 210) {
        
        mobileBars.on("click", function () {
            
            mobileMenu.slideDown(800);
            
        });
        
        mobileTimes.on("click", function () {
            
            mobileMenu.slideUp(800);
            
        });
        
    }
    
    $(".mobile-menu ul li:first-child").on("click", function () {
        
        $(this).siblings().slideToggle();
        
        $(this).parent().siblings().children("li").not("li:first-child").slideUp();
        
        if (windowWidth > 210) {
            
            $(this).parent().siblings().children("li:first-child").children(".fa-arrow-down").show(0);
            
            $(this).parent().siblings().children("li:first-child").children(".fa-arrow-up").hide(0);
            
            $(this).children(".fa-arrow-up").toggle(0);
            
            $(this).children(".fa-arrow-down").toggle(0);
            
        }
        
    });
    
    // fire the big slick slider
    
    $('.single-item').slick({
        
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        dots: true,
        responsive: [{
            
            breakpoint: 801,
            settings: {
                arrows: false
            }
            
        }]
        
    });
    
    // fire the slick slider
    
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        dots: true,
        responsive: [{
            
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
            
        }, {
            
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true,
                arrows: false,
                dots: true
            }
            
        }, {
            
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
            
        }, {
            
            breakpoint: 251,
            settings: "unslick" // destroys slick
            
        }]
        
    });
    
    // Convert Password Field To Text Field
    
    eyeSlash.on("click", function () {
        
        passwordField.attr("type", "text");
        
        $(this).fadeOut(0);
        
        eyeNotSlash.fadeIn(0);
        
    });
    
    eyeNotSlash.on("click", function () {
        
        passwordField.attr("type", "password");
        
        $(this).fadeOut(0);
        
        eyeSlash.fadeIn(0);
        
    });
    
    // Light Box-Of Image
    
    $(".item-img-big .overlay").on("click", function () {
        
        $(".fixed-bg-color").fadeIn();
        
    });
    
    $(".light-box-of-img i").on("click", function () {
        
        $(".fixed-bg-color").fadeOut();
        
    });
    
    // Height Of Short Description
    
    if (windowWidth >= 800) {
        
        if ($(".short-description p").height() < $(".item-img-big div").height()) {
            
            $(".short-description p").css({
                
                height: $(".item-img-big div").height()
                
            });
            
        }
        
    }
    
    // multiple images of item
    
    $(".item-img-small div:nth-of-type(1)").on("click", function () {
        
        $("div.item-img:nth-of-type(1)").fadeIn(200).siblings("div.item-img").fadeOut(0);
        
    });
    
    $(".item-img-small div:nth-of-type(2)").on("click", function () {
        
        $("div.item-img:nth-of-type(2)").fadeIn(200).siblings("div.item-img").fadeOut(0);
        
    });
    
    $(".item-img-small div:nth-of-type(3)").on("click", function () {
        
        $("div.item-img:nth-of-type(3)").fadeIn(200).siblings("div.item-img").fadeOut(0);
        
    });
    
    // Item Information Tabs
    
    if (windowWidth >= 800) {
        
        $(".item-information-tabs li").on("click", function () {
            
            var tabId = $(this).attr("id");
            
            $(this).addClass("active").siblings().removeClass("active");
            
            $(".item-information-tabs > div").hide();
            
            $("#" + tabId + "-content").fadeIn();
            
        });
        
    }
    
    $("#tab1-content tr:nth-child(7)").nextUntil("tr.show-more").hide();
    
    $("#tab1-content tr.show-more").on("click", function () {
        
        $("#tab1-content tr:nth-child(7)").nextUntil("tr.show-more").show();
        
        $(this).hide();
        
        $("#tab1-content tr.show-less").show();
        
    });
    
    $("#tab1-content tr.show-less").on("click", function () {
        
        $("#tab1-content tr:nth-child(7)").nextUntil("tr.show-less").hide();
        
        $(this).hide();
        
        $("#tab1-content tr.show-more").show();
        
    });
    
    // Reply To Comment
    
    $(".comments-of-item .reply span").one("click", function () {
        
        $(this).parents(".comments-of-item").children(".reply-Field").slideDown(200).css("display", "block");
        
    });
    
    $(".comments-of-item .show-reply").on("click", function () {
        
        $(".comments-of-item .theComment.reply-to-comment").slideDown().css("display", "flex");
        
        $(this).hide();
        
        $(".comments-of-item .hide-reply").fadeIn();
        
    });
    
    $(".comments-of-item .hide-reply").on("click", function () {
        
        $(".comments-of-item .theComment.reply-to-comment").slideUp();
        
        $(this).hide();
        
        $(".comments-of-item .show-reply").fadeIn();
        
    });
    
    if (windowWidth < 800) {
        
        $('.comments-of-item .comment-content').on("click", function () {
            
            $(this).parents(".comments-of-item").children(".reply-Field").slideToggle(200).css("display", "block");
            
        });
        
    }
    
    // Shopping Cart Page
    
    function getTotal() {
        
        var total = 0;
        
        $('.shopping-cart-page .row .col .sum').each(function () {
            total += parseFloat(this.innerHTML);
        });
        
        $('.shopping-cart-page .tfoot .col #total').text(total);
    }
    getTotal();
    
    $('.shopping-cart-page .row .col .qty').each(function () {
        
        var parent = $(this).parents('.shopping-cart-page .row'),
            
            price = $('.price', parent),
            
            sum = $('.sum', parent),
            
            value = parseInt(this.value) * parseFloat(price.get(0).innerHTML || 0);
        
        sum.text(value);
        
        getTotal();
    });
    
    $(".shopping-cart-page .col-container:nth-of-type(3) .col i.fa-minus").on("click", function () {
        
        var $qty = $(this).closest('.shopping-cart-page .row .col').find('.qty'),
            
            currentVal = parseInt($qty.val());
        
        if (!isNaN(currentVal) && currentVal > 1) {
            
            $qty.val(currentVal - 1);
            
        }
        
        $('.shopping-cart-page .row .col .qty').is(function () {
        
            var parent = $(this).parents('.shopping-cart-page .row'),
                
                price = $('.price', parent),
                
                sum = $('.sum', parent),
                
                value = parseInt(this.value) * parseFloat(price.get(0).innerHTML || 0);
            
            sum.text(value);
            
            getTotal();
        });
        
    });
    
    $(".shopping-cart-page .col-container:nth-of-type(3) .col i.fa-plus").on("click", function () {
        
        var $qty = $(this).closest('.shopping-cart-page .row .col').find('.qty'),
            
            currentVal = parseInt($qty.val());
        
        if (!isNaN(currentVal)) {
            
            $qty.val(currentVal + 1);
            
        }
        
        $('.shopping-cart-page .row .col .qty').is(function () {
        
            var parent = $(this).parents('.shopping-cart-page .row'),
                
                price = $('.price', parent),
                
                sum = $('.sum', parent),
                
                value = parseInt(this.value) * parseFloat(price.get(0).innerHTML || 0);
            
            sum.text(value);
            
            getTotal();
        });
        
    });
    
    $(".shopping-cart-page .table .col-container:last-of-type .col i").on("click", function () {
        
        $(this).parents('.shopping-cart-page .row').slideUp("800", function () {
            
            $(this).remove();
            
            if ($('.shopping-cart-page .table').children(".row").length === 0) {
                
                $(".shopping-cart-page .table .message-of-no-Products").slideDown(600).css("display", "flex");
                
                $('.shopping-cart-page .tfoot .col #total').text(0);
                
                $('.shopping-cart-page .table .tfoot .col a').on("click", function (e) {
                    
                    e.preventDefault();
                    
                    $(".shopping-cart-page .table .message-of-no-Products h3").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                    
                });
                
            }
            
            $('.shopping-cart-page .row .col .qty').each(function () {
                
                var parent = $(this).parents('.shopping-cart-page .row'),
                    
                    price = $('.price', parent),
                    
                    sum = $('.sum', parent),
                    
                    value = parseInt(this.value) * parseFloat(price.get(0).innerHTML || 0);
                
                sum.text(value);
                
                getTotal();
            });
            
        });
        
    });
    
    // Products Filter Button
    
    $(".mobiles-page-content .ProductsFilter .UpFilter button").on("click", function () {
        
        $(this).siblings(".sort-by-items").slideToggle();
        
    });
    
    $(".mobiles-page-content .ProductsFilter .UpFilter .sort-by-items > div").on("click", function () {
        
        $(".mobiles-page-content .ProductsFilter .UpFilter button span:last-of-type").text($(this).text());
        
    });
    
    $(".mobiles-page-content .ProductsFilter .UpFilter .sort-by-items > div").on("click", function () {
        
        $(".mobiles-page-content .ProductsFilter .UpFilter button span:last-of-type").text($(this).text());
        
        $(".mobiles-page-content .ProductsFilter .UpFilter .sort-by-items").slideUp();
        
    });
    
    // fire Price Range Slider
    
    if ($('body').is('.mobiles-page')) {
        
        $("#PriceRangeSlider").ionRangeSlider({
            type: "double",
            grid: false,
            min: 1,
            max: 10000,
            from: 2000,
            to: 7000,
            step: 1,
            drag_interval: true,
            keyboard: true,
            keyboard_step: 5,
            prettify_separator: ",",
            prefix: "جنيه "
        });
        
    }
    
    // Scroll To Top
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 800) {
            
            scrollTop.fadeIn();
            
        } else {
            
            scrollTop.fadeOut();
            
        }
        
    });
    
    scrollTop.on("click", function () {
        
        $("html, body").animate({
            
            scrollTop: 0
            
        }, 2000);
        
    });
    
});

// loading screen

$(window).load(function () {
    
    'use strict';
    
    $(".rinka-loading-screen").fadeOut(1000, function () {
        
        $(this).remove();
        
    });
    
    $("body").css({
        
        overflowY: "auto",
        overflowX: "hidden"
        
    });
    
    // fire nice Scroll
    
    $("html").niceScroll({
        
        cursorcolor: "#f22f6b",
        cursorborder: "none",
        cursorwidth: "7px",
        horizrailenabled: false,
        zindex: "11000"
        
    });
    
});