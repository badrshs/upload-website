$(document).ready(function(){
	var gehat= $('#gehat').attr('class');
	var maalem= $('#maalem').attr('class');
	if( gehat == 'active' || maalem == 'active'){
		$('.pl-mhers').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("قصر محيرس");
		});
		$('.pl-galal').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("قصر ابو جلال");
		});
		$('.pl-sahod').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("قصر صاهود");
		});
		$('.pl-ebeed').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("قصر العبيد");
		});
		$('.pl-ebrahim').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("قصر ابراهيم");
		});
		$('.pl-khazam').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("قصر خزام");
		});
		$('.aqaqir').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("شاطئ و ميناء العقير");
		});
		$('.mosque').mouseenter(function(){
			$('.info .info-1 .ho-caption h3 span').text("مسجد جواثا");
		});
	}
});