/*global $, JQuery, alert, console */

// Start The loading Page //

$(function () {

	"use strict";
    $(window).on('load', function () {
	    
    });
    
    $('.zero').fadeIn(1700);
    $('.one').fadeIn(2100);
    $('.two').fadeIn(2500);
    $('.three').fadeIn(2900);
    $('.four').fadeIn(3300);
    
    
    
    $(function () {
        $(".loading-page .loading-word").typed({
            strings: ["Portfolio is", "Loading..."],
            typeSpeed: 100,
            loop: false,
            backDelay: 900
        });
        $('.typed-cursor').hide(1);
    });
    
    $('.loading-word').delay(4800).fadeOut(1000);
    
    $('.four').delay(2000).fadeOut(1600);
    $('.three').delay(2400).fadeOut(2000);
    $('.two').delay(2800).fadeOut(2400);
    $('.one').delay(3200).fadeOut(2800);
    $('.zero').delay(3600).fadeOut(3200);
    
    $('.welcome').delay(8000).fadeIn(800);
    $('.welcome span').delay(10000).fadeOut(800);
    $('.welcome').delay(2000).slideUp(750);
    
    $('.loading-page').delay(11100).slideUp(900);
    $('body').css('overflow', 'visible');
    
});

// Header Items
$(function () {
    "use strict";
    $(".Header .headercontainer h2").typed({
        strings: ["i design and build beautifully crafted web experiences"],
        typeSpeed: 50
    });
});

// fa-angle-double-down
$(function () {
    "use strict";
    $('.fa-angle-double-down').click(function () {
        $('main').fadeIn(1000);
        $("html, body").animate({
            scrollTop : 826
        }, 2000);
    });
});
// Active Class For Navbar

$(function () {
    "use strict";
    $('nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
// Navbar fixeding

$(function () {
    "use strict";
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 828) {
            $('nav').css({
                "position": "fixed",
                "top": "0",
                "left": "0",
                "height": "65px"
            });
            $('nav li').css({
                "padding": "18px 0px"
            });
        } else {
            $('nav').css({
                "position": "relative",
                "height": "90px"
            });
            $('nav li').css({
                "padding": "29px 0px"
            });
        }
    });
});

//Contact Clearing The Place Holder
//name
document.getElementById('inputName').onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your Name') {
        this.placeholder = '';
    }
};
document.getElementById('inputName').onblur = function () {
    "use strict";
    if (this.placeholder === '') {
        this.placeholder = 'Type Your Name';
    }
};
//email
document.getElementById('inputMail').onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your E-Mail') {
        this.placeholder = '';
    }
};
document.getElementById('inputMail').onblur = function () {
    "use strict";
    if (this.placeholder === '') {
        this.placeholder = 'Type Your E-Mail';
    }
};
//phone
document.getElementById('inputPhone').onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your Phone') {
        this.placeholder = '';
    }
};
document.getElementById('inputPhone').onblur = function () {
    "use strict";
    if (this.placeholder === '') {
        this.placeholder = 'Type Your Phone';
    }
};
//textarea
document.getElementById('inputMessage').onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your Message') {
        this.placeholder = '';
    }
};
document.getElementById('inputMessage').onblur = function () {
    "use strict";
    if (this.placeholder === '') {
        this.placeholder = 'Type Your Message';
    }
};

// Smoth Scroll

$(function () {
    "use strict";
    $('nav ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1200);
    });
});

//  Scoll Top Button

$(function () {
    "use strict";
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 828) {
            $('#scroll-top').slideDown(600);
        } else {
            $('#scroll-top').slideUp(700);
        }
    });
    
    $('#scroll-top').click(function () {
        
        $("html, body").animate({
            scrollTop : 0
        }, 1500);
        
    });
});

// Start The Slider //

(function autoSlider() {
    "use strict";
    $('.test .active').each(function () {
        if (!$(this).is(':last-child')) {
            $(this).delay(10000).fadeOut(1000, function () {
                $(this).removeClass('active').next().fadeIn(1000).addClass('active');
                autoSlider();
            });
        } else {
            $(this).delay(10000).fadeOut(1000, function () {
                $(this).removeClass('active');
                $('.test .container div').eq(0).fadeIn(1000).addClass('active');
                autoSlider();
            });
        }
    });
}());