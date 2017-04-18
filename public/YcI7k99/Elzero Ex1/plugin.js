/*global $, JQuery, alert, console */

//intro
$(function () {
    "use strict";
    $('.main').slideDown(1000);
    $('.footer').delay(1400).fadeIn(600);
});

//placeholder
document.getElementById('name').onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your First Name') {
        this.placeholder = '';
    }
};
document.getElementById('name').onblur = function () {
    "use strict";
    if (this.placeholder === '') {
        this.placeholder = 'Type Your First Name';
    }
};

document.getElementById('secname').onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your Last Name') {
        this.placeholder = '';
    }
};
document.getElementById('secname').onblur = function () {
    "use strict";
    if (this.placeholder === '') {
        this.placeholder = 'Type Your Last Name';
    }
};

//leaters
document.getElementById('sender').onclick = function senderBut() {
    "use strict";
    var taker = document.getElementById("name").value,
        letter = taker.charAt(0),
        message = document.getElementById("error");
        
    
        
    if (taker === "") {
        $("#sender").on("click", function (e) {
            e.preventDefault();
            message.innerHTML = "* " + "Sorry you Can't leave this Fields Empty";
        });
    } else if (letter === "0" || letter === "1" ||
               letter === "2" || letter === "3" ||
               letter === "4" || letter === "5" ||
               letter === "6" || letter === "7" ||
               letter === "8" || letter === "9") {
        
        $("#sender").on("click", function (e) {
            e.preventDefault();
            message.innerHTML = "* " + "Sorry you Can't Write Numbers";
        });
    } else if (letter === "=" || letter === "." || letter === "," || letter === "-" ||
               letter === "*" || letter === "/" || letter === "\\" || letter === "|" ||
               letter === "+" || letter === "_" || letter === "(" || letter === ")" ||
               letter === "&" || letter === "^" || letter === "%" || letter === "$" ||
               letter === "#" || letter === "@" || letter === "!" || letter === "~" ||
               letter === "?" || letter === "؟" || letter === "{" || letter === "}" ||
               letter === "[" || letter === "]" || letter === ":" || letter === ";" ||
               letter === "'" || letter === "\"") {
        
        $("#sender").on("click", function (e) {
            message.innerHTML = "* " + "Sorry you Can't Write Symbols";
        });
    } else if (letter === "A" || letter === "a" ||
               letter === "K" || letter === "k" ||
               letter === "U" || letter === "u") {
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color1');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "B" || letter === "b" ||
               letter === "L" || letter === "l" ||
               letter === "V" || letter === "v") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color2');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "C" || letter === "c" ||
               letter === "M" || letter === "m" ||
               letter === "W" || letter === "w") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color3');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "D" || letter === "d" ||
               letter === "N" || letter === "n" ||
               letter === "X" || letter === "x") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color4');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "E" || letter === "e" ||
               letter === "O" || letter === "o" ||
               letter === "Y" || letter === "y") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color5');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "F" || letter === "f" ||
               letter === "P" || letter === "p" ||
               letter === "Z" || letter === "z") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color6');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "G" || letter === "g" ||
               letter === "Q" || letter === "q") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color7');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "H" || letter === "h" ||
               letter === "R" || letter === "r") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color8');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "I" || letter === "i" ||
               letter === "S" || letter === "s") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color9');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    } else if (letter === "J" || letter === "j" ||
               letter === "T" || letter === "t") {
        
        $('#loader').fadeIn(500).delay(2000).fadeOut(500);
        $('.main').delay(3000).fadeOut(500);
        $('.result').delay(3500).fadeIn(500);
        $('#letter').addClass('color10');
        document.getElementById('outName').innerHTML = taker;
        document.getElementById('letter').innerHTML = letter;
    }
};