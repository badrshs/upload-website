/*global $, alert, console, confrim, prompt, parseInt*/
$(function () {
    "use strict";
    var timeFadeOut = 300;
    
    $(window).load(function () {
        // Fade Out Row 1
        $(".loadingSquare .containerSquare .row:first-child").children(":nth-child(1)").delay(150).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:first-child").children(":nth-child(2)").delay(300).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:first-child").children(":nth-child(3)").delay(450).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:first-child").children(":nth-child(4)").delay(600).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:first-child").children(":nth-child(5)").delay(750).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:first-child").children(":nth-child(6)").delay(900).fadeOut(timeFadeOut);
        // Fade Out Row 2
        $(".loadingSquare .containerSquare .row:nth-child(2)").children(":nth-child(1)").delay(1800).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(2)").children(":nth-child(2)").delay(1650).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(2)").children(":nth-child(3)").delay(1500).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(2)").children(":nth-child(4)").delay(1350).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(2)").children(":nth-child(5)").delay(1200).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(2)").children(":nth-child(6)").delay(1050).fadeOut(timeFadeOut);
        // Fade Out Row 3
        $(".loadingSquare .containerSquare .row:nth-child(3)").children(":nth-child(1)").delay(1950).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(3)").children(":nth-child(2)").delay(2100).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(3)").children(":nth-child(3)").delay(2250).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(3)").children(":nth-child(4)").delay(2400).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(3)").children(":nth-child(5)").delay(2550).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:nth-child(3)").children(":nth-child(6)").delay(2700).fadeOut(timeFadeOut);
        // Fade Out Row 4
        $(".loadingSquare .containerSquare .row:last-child").children(":nth-child(1)").delay(3600).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:last-child").children(":nth-child(2)").delay(3450).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:last-child").children(":nth-child(3)").delay(3300).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:last-child").children(":nth-child(4)").delay(3150).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:last-child").children(":nth-child(5)").delay(3000).fadeOut(timeFadeOut);
        $(".loadingSquare .containerSquare .row:last-child").children(":nth-child(6)").delay(2850).fadeOut(timeFadeOut);
        
        $(".loadingSquare").delay(3700).fadeOut(timeFadeOut);
        $(".loadingSquare .loader").delay(2000).fadeOut(timeFadeOut);
        
    });
    
});