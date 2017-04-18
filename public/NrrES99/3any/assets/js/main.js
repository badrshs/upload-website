<!--
  ===================================================================
  * Template Name  : 3any
  * Description    : 3any is HTML page
  * Version        : 1
  * License        : regular-license
  * License URI    : https://www.picalica.com/pages/regular-license/10
  * Designer       : myDz (salah)
  * Designer Email : kixcamhd2@gmail.com
  * Coder          : myDz (salah)
  * Coder Email    : kixcamhd2@gmail.com
  * Date Created   : 06-10-2016
  * Copyright (c) 2016-2017 . All Rights Reserved.
  ====================================================================
*/-->

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

});