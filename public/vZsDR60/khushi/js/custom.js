/*global $, document, console*/
$(function () {
    "use strict";
    
    (function autoslide() {
        $("header .fade .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(2000).fadeOut(1500, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn(3000);
                    autoslide();
                });
            } else {
                $(this).delay(3000).fadeOut(1500, function () {
                    $(this).removeClass("active");
                    $("header .fade h2:eq(0)").addClass("active").fadeIn(2000);
                    autoslide();
                });
            }
        });
    }());
    
    
    $(".links li a").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    $(".links li").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1500);
    });
    
    $(".serv").mouseenter(function () {
        $(".serv .fa").animate({
            backgroundColor : "#fff",
            color: "#000"
        }, 1200);
        $("serv h4").animate({
            color: "#1cbac8"
        }, 1200);
    });
    
    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= $(".projects").offset().top - 200) {
            $(".projects .text-center").css("transform", "scale(1)");
        }
        
        if ($(window).scrollTop() >= $(".about").offset().top - 200) {
            $(".about .head").css("transform", "scale(1)");
            $(".about div").addClass("fadeInLeft");
        }
        
        if ($(window).scrollTop() >= $(".service").offset().top - 300) {
            $(".service .head").css("transform", "scale(1)");
        }
        
        if ($(window).scrollTop() >= $("#process").offset().top - 200) {
            $("#process .cont").css("transform", "scale(1)");
        }
        
        if ($(window).scrollTop() >= $(".progress").offset().top - 250) {
            $(".progress .prog span:eq(0)").animate({"width": "95%"}, 1240);
            $(".progress .prog span:eq(1)").delay(1000).animate({"width": "92%"}, 1240);
            $(".progress .prog span:eq(2)").delay(1500).animate({"width": "90%"}, 1240);
            $(".progress .prog span:eq(3)").delay(2000).animate({"width": "75%"}, 1240);
            $(".progress .prog span:eq(4)").delay(2500).animate({"width": "85%"}, 1240);
        }
        
        if ($(window).scrollTop() >= $(".experts").offset().top - 200) {
            $(".exper > div").css("transform", "scale(1)");
        }
        
        if ($(window).scrollTop() >= $(".experts").offset().top - 200) {
            $(".experts .head").css("transform", "scale(1)");
        }
        
        if ($(window).scrollTop() >= $(".choose").offset().top) {
            $(".choose .cl1").fadeIn(1500);
            $(".choose .cl2").delay(800).fadeIn(1500);
            $(".choose .cl3").delay(1400).fadeIn(1500);
        }
        
        if ($(window).scrollTop() >= $(".contact").offset().top - 200) {
            $(".d1, .d2, .d3").fadeIn(1600);
        }
        
        if ($(window).scrollTop() >= 5648) {
            $("footer img").css("transform", "scale(1)");
        }
        
        if ($(window).scrollTop() >= $(".services").offset().top - 200) {
            $(".services .serv > div").fadeIn(1500);
        }
         
    });
    
    $(".about .left").click(function () {
        $(".aboutt .left vedio").attr("pause");
    });
    
    (function autoslide() {
        $(".clients .slider .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(2000).fadeOut(1500, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn(3000);
                    autoslide();
                });
            } else {
                $(this).delay(3000).fadeOut(1500, function () {
                    $(this).removeClass("active");
                    $(".clients .slider div:eq(0)").addClass("active").fadeIn(2000);
                    autoslide();
                });
            }
        });
    }());
    
    (function animatearrow() {
        $(".arrow .fa").animate({paddingTop: "30px"}, 800, function () {
            $(this).animate({paddingTop: "0px"}, 800, function () {
                animatearrow();
            });
        });
    }());
    
    $("service .serv > div").mousedown(function () {
        $(".serv .fa").animate({
            background: "#fff",
            color: "#1cbac8"
        }, 1500);
        $(".serv h4").animate("color", "#1cbac8");
    });
});