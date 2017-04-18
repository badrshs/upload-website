$(document).ready(function () {
    "use strict";
    $("body").height($(window).height());
    $("button").click(function () {
        $(".h1").fadeOut(200);
        $(".stress").fadeOut(200);
        $("button").fadeOut(200, function () {
            $(".proplem").fadeIn(100, function () {
                $(".proplem").animate({right: "0px",
                                       top: "20px"}, 20000);
                $(".proplem").addClass("change");
                $(".m").text(function () {
                    var proplem = $(".stress").val();
                    return "You Think " + proplem + " Is A Proplem?";
                });
                $(".m").fadeIn(1000).delay(2000).fadeOut(1000, function () {
                    $(".m1").fadeIn(1000).delay(2000).fadeOut(1000, function () {
                        $(".m2").fadeIn(1000).delay(2000).fadeOut(1000, function () {
                            $(".m3").fadeIn(1000).delay(2000).fadeOut(1000, function () {
                                $(".m4").fadeIn(1000).delay(2000).fadeOut(1000, function () {
                                    $(".m5").fadeIn(1000, function () {
                                        $("footer").fadeIn(1000);
                                    });
                                });
                            });
                        });
                    });
                });
                
            });
        });
        $(".proplem").text(function () {
            var lara = $(".stress").val();
            return lara;
        });
    });
    console.log($(window).width);
});