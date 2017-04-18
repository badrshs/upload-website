$(document).ready(function(){

  // Setting panel
  $('.theme-settings button').click(function(){
    var themeSet = $('.theme-settings');
    if($(this).parent().css('left') == '-200px') {
      $(this).parent().addClass('open').animate({'left': '0'}, 1000, 'easeInOutQuad');
    } else {
      $(this).parent().removeClass('open').animate({'left': '-200px'}, 1000, 'easeInOutQuad');
    }
  });


  if ($.cookie('primarycolor')){
      var mainCol = $.cookie('primarycolor');
      mainColor(mainCol);
      $('#pr-color').val(mainCol);
  } else {
      var mainCol = '#3399ff';
      mainColor(mainCol);
      $('#pr-color').val(mainCol);
  }

  if($.cookie('themefont')) {
      var themeFont = $.cookie('themefont');
      $('body').css('fontFamily', themeFont);
      $('#theme_font').val(themeFont);
  } else {
      var themeFont = 'Cairo';
      $('body').css('fontFamily', themeFont);
      $('#theme_font').val(themeFont);
  }

  if($.cookie('headersfont')) {
      var headersFont = $.cookie('headersfont');
      $('h1, h2, h3, h4, h5, h6').css('fontFamily', headersFont);
      $('#headers_font').val(headersFont);
  } else {
      var headersFont = 'Baloo';
      $('h1, h2, h3, h4, h5, h6').css('fontFamily', headersFont);
      $('#headers_font').val(headersFont);
  }

  $('.theme-settings-inner').niceScroll();

  $('#theme_reset').click(function() {
    $.cookie('themefont', null);
    $.cookie('headersfont', null);
    $.cookie('primarycolor', null);
    $.cookie('secondarycolor', null);
    $('#changeColor').remove();
    $('body').css('fontFamily', 'Cairo');
    $('h1, h2, h3, h4, h5, h6').css('fontFamily', 'Baloo');
    $('#theme_font').val('Cairo');
    $('#headers_font').val('Baloo');
  })

  $('#pr-color').minicolors({
    letterCase: 'uppercase',
    position: 'bottom left',
    inline: 1,
    change: function(hex, rgb) {
      primColor(hex);
    }
  });

  function primColor(hex) {
    $.cookie('primarycolor', hex, {expires: 7});
    mainColor(hex);
  };

  $('#theme_font').select2({placeholder: 'Select theme font'}).bind('change', function(){
    var font = $(this).val();
    $.cookie('themefont', font, {expires: 7});
    $('body').css('fontFamily', font);
  });

  $('#headers_font').select2({placeholder: 'Select theme font'}).bind('change', function(){
    var font = $(this).val();
    $.cookie('headersfont', font, {expires: 7});
    $('h1, h2, h3, h4, h5, h6').css('fontFamily', font);
  });

  function mainColor(color) {
    darkColor = LightenDarkenColor(color, -15);
    newStyle = '.head h2, .navbar-nav > li.active > a, .navbar-nav > li:hover > a, .dropdown-menu > li:hover > a, .dropdown-menu > li.active > a, .dropdown-menu > li.active:hover > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover, .dropdown-menu .dropdown-toggle:hover:after, .top-menu ul li:hover a, .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus, .intro-text-rotate .content span, .services .service .service-icon, .portfolio-item .item-image .overlay a, .portfolio-item .info a, .portfolio-control a:hover, .sidebar-widget.project-details ul li span, .cd-words-wrapper b {color: '+color+';} .navbar-toggle, .intro-text-rotate, section.about, .skills ul > li, .sidebar-widget .widget-head, .fancybox-next span, .fancybox-prev span, .scrollToTop, .footer, section.about .overlay, .intro-image.overlay .overlay { background-color: '+color+' !important;} .dropdown-menu li:last-child, .services .service:hover, .services .service .service-icon, .services .service:hover .service-icon { border-color: '+color+' !important;} .footer-bottom, .carousel.overlay .item .bg .overlay { background-color: '+darkColor+' !important;} .cd-headline span:not(.cd-words-wrapper) {color: '+darkColor+';}';
    if($("#changeColor").length) {
      $('#changeColor').html(newStyle);
    } else {
      $('head').append('<style id="changeColor" type="text/css">'+newStyle+'</style>');
    }
  }

  function LightenDarkenColor(col, amt) {

  	var usePound = false;
  	if (col[0] == "#") {
  		col = col.slice(1);
  		usePound = true;
  	}
  	var num = parseInt(col,16);
  	var r = (num >> 16) + amt;
  	if (r > 255) r = 255;
  	else if  (r < 0) r = 0;
  	var b = ((num >> 8) & 0x00FF) + amt;
  	if (b > 255) b = 255;
  	else if  (b < 0) b = 0;
  	var g = (num & 0x0000FF) + amt;
  	if (g > 255) g = 255;
  	else if (g < 0) g = 0;
  	return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);

  }


/*  $(document).mouseup(function (e)
  {
      var container  = $('.theme-settings button, .theme-settings .select2');
      var container1 = $('.theme-settings');

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0
          && !container1.is(e.target)
          && container1.has(e.target).length === 0
          && container1.css('left') == '0px') // ... nor a descendant of the container
      {
          container1.removeClass('open').animate({'left': '-200px'}, 1000, 'easeInOutQuad');
      }

  });*/

//-------------------------------------------------------------------------------------------------------------------


// Back To top button
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800, 'easeInOutCirc');
		return false;
	});


// Bootstrap Carousel slider
(function( $ ) {
	var percent = 0,
	interval = 40,//it takes about 6s, interval=20 takes about 4s
	$bar = $('.transition-timer-carousel-progress-bar'),
	$crsl = $('#carousel');
	$('.carousel-indicators li, .carousel-control').click(function (){$bar.css({width:0.5+'%'});});

	//Function to animate slider captions
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables on page load
	var $myCarousel = $('#carousel'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	$myCarousel.carousel({
		interval: false,
		pause: 'hover'
	}).on('slide.bs.carousel', function (){percent = 0;});//This event fires immediately when the bootstrap slide instance method is invoked.
	function progressBarCarousel() {
		$bar.css({width:percent+'%'});
		percent = percent +0.5;
		if (percent>=100) {
			percent=0;
			$crsl.carousel('next');
		}
	};

	var barInterval = setInterval(progressBarCarousel, interval);//set interval to progressBarCarousel function
	if (!(/Mobi/.test(navigator.userAgent))) {//tests if it isn't mobile
		$crsl.hover(function(){
					clearInterval(barInterval);
				},
				function(){
					barInterval = setInterval(progressBarCarousel, interval);
				}
		);
	}

	//Animate captions in first slide on page load
	doAnimations($firstAnimatingElems);

	//Pause carousel
	$myCarousel.carousel('pause');


	//Other slides to be animated on carousel slide event
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});
})(jQuery);


// Add slide effect to dropdown menu on hover
$(document).ready(hoverMenu);

$(window).on('resize',hoverMenu);

function hoverMenu() {
  if($(window).width() > 767) {
    $('.navbar li.dropdown, .navbar li.dropdown-submenu').hover(function() {
        $('ul.dropdown-menu', this).first().stop(true, true).slideDown('fast');
        $(this).addClass('open');
        var dropdownList = $('ul.dropdown-menu', this),
            dropdownOffset = $(this).offset(),
            offsetLeft = dropdownOffset.left,
            dropdownWidth = dropdownList.width(),
            docWidth = $(window).width(),

            subDropdown = dropdownList.eq(1),
            subDropdownWidth = subDropdown.width(),

            isDropdownVisible = (offsetLeft + (dropdownWidth * 2) <= docWidth),
            isSubDropdownVisible = (offsetLeft + dropdownWidth + subDropdownWidth <= docWidth);

        if (!isDropdownVisible || !isSubDropdownVisible) {
              dropdownList.addClass('pull-right');
        } else {
              dropdownList.removeClass('pull-right');
        }
    }, function() {
        $('ul.dropdown-menu', this).first().stop(true, true).slideUp('fast');
        $(this).removeClass('open');
    });
  } else {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    	event.preventDefault();
    	event.stopPropagation();
    	$(this).parent().siblings().removeClass('open');
    	$(this).parent().toggleClass('open');
    });
  }
}

// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : {
            type: 'inside'
        },
        overlay : {
            locked: false,
            css : {
                'background' : 'rgba(0,0,0,0.8)'
            }
        }
    }
});


// Skills bar
$(function() {

    var $meters = $(".skills ul li span.progress");
    var $section = $('section.about');
    var $queue = $({});

    function loadDaBars() {
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.attr('data-percent');
            $el.width(0);
            $queue.queue(function(next) {
                $el.append('<span class="meter">' + origWidth + '</span>');
                $el.animate({width: origWidth}, 900, next);
                $('.meter', $el).animate({left: '100%'}, 900, next);
            });
        });
    }

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {

            setTimeout( function(){
              loadDaBars();
            }  , 2000 );
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

});

// morphext text rotate
$(function() {
  if ($("#js-rotating").length > 0) {
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: $('#js-rotating').data('animation'),
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 4000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
  }
});

// Initialize stellar.js
$(window).stellar();

// Initialize Wow.js
wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();


// Fixed header on scroll
$(window).scroll(function() {
if ($(this).scrollTop() > 42){
    $('nav.navbar').addClass("sticky");
    $('.top-menu').fadeOut(10);
  }
  else{
    $('nav.navbar').removeClass("sticky");
    $('.top-menu').fadeIn(10);
  }
});


// Sticky sidebar
$(window).scroll(function() {
  var target = $('.portfolio-work-details').offset().top;
  var sideOuter = $('.sidebar-outer').width();
if ($(this).scrollTop() > target ){
    $('.sidebar').addClass("sticky").css('width', sideOuter-30);
  }
  else{
    $('.sidebar').removeClass("sticky").css('width', 'auto');
  }
});

});

// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $("#page-load").fadeOut("fast");
  $('body').css('overflow', 'visible');

});