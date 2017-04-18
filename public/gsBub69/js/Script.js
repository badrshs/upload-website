
var pathname = window.location.pathname;
 
$(document).on('click', '.panel-heading span.clickable', function (e) {
	var $this = $(this);
	if (!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	}
	else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	}
});
$(document).on('click', '.panel div.clickable', function (e) {
	var $this = $(this);
	if (!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	}
	else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	}
});
$(document).ready(function () {
	$('.rating-cat').rating({
		size: 'xs'
		, showClear: false
		, showCaption: false
		, disabled: true
	});
	$('#rating-input').rating({
		size: 'xs'
		, showClear: false
		, showCaption: false
		, disabled: true
	});
	$('#rating-input').on('rating.change', function (event, value) {
		$.post('rate.php', {
			'v': value
			, 'p': PL
			, 'T': token
		}, function (data) {});
	});
	$('.panel-heading span.clickable').click();
	$('.panel div.clickable').click();
});

 

$('#ShowCata').click(function () {
	redirect('/All-Categories');
});
$('.navbar-toggle').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 1);
	$('.left_navbar').slideToggle();
});
/*************redirect function  ***************/
function redirect(link) {
	window.location = link;
}

$(function () {

	$(".auto").autocomplete({
	source: function(request, response) {
		$.post("data/binding/Search", {
				_token: Token ,
				term : request.term
			},response
		);
	},
	minLength: 1, select: function (event, ui) {
		setTimeout(function () {
			var goTo = $('.auto').val();
			redirect(' ' + goTo);
		}, 50);
	}
});


});

if ($(window).width() < 993) {
	$('.switch').switchClass("container", "container-fluid", 200, "linear");
}
else {
	$('.switch').switchClass("container-fluid", "container", 200, "linear");
}
/*************resize start here ***************/
$(window).resize(function () {
	if ($(window).width() > 750) {
		$('.left_navbar').slideUp();
	}
	if ($(window).width() < 993) {
		$('.switch').switchClass("container", "container-fluid", 200, "linear");
	}
	else {
		$('.switch').switchClass("container-fluid", "container", 200, "linear");
	}
});
/*************resize end  ***************/
/*************scroll start  ***************/
$(function () {
	$(window).scroll(function () {
		var aTop = $('nav.navbar.navbar-inverse.navbar-fixed-top').height() - 65;
		if ($(this).scrollTop() >= aTop) {
			if ($(window).width() > 768) {
				$('.navbar-inverse').css({
					'min-height': '0px'
				, });
				$('.navbar-inverse .navbar-nav>li>a').css({
					'lineHeight': '2'
				, });
				$('.navbar-brand>img').css({
					'marginTop': '-6px'
				, });
			}
		}
		else {
			$('.navbar-inverse').css({
				'min-height': '95px'
			, });
			$('.navbar-inverse .navbar-nav>li>a').css({
				'lineHeight': '4'
			, });
			$('.navbar-brand>img').css({
				'marginTop': '10px'
			, });
		}
	});
});




$(function () {
	$('#mixwrap').mixItUp({
		layout: {
			display: 'block'
		}
	});
});


function redirect(link) {
	window.location = link;
}
$('.Popular_Courses').ready(function () {
	$("#owl-demo").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items: 6
		, itemsDesktop: [1199, 3]
		, itemsDesktopSmall: [979, 3]
	});
    $('.Popular_Courses').show();
});