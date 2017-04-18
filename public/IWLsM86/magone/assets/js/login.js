jQuery(function($){
	$('#login h1').html(magone_login_js.custom_logo);
	$('#login h1 a').each(function(){
		$(this).css('background', 'none');
		$(this).css('width', 'auto');
		$(this).css('height', 'auto');
		$(this).css('text-indent', '0');		
		$(this).attr('href', magone_login_js.home_url);
	});
});


