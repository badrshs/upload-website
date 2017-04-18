jQuery(function() {
	
	
	$('.nav--mobile').dropit();
	$('.nav--desktop').dropit({ 
		action: 'mouseenter', 
		triggerParentEl: '.nav-trigger-desktop',
		afterHide: function(){
			$('.dropit-trigger').removeClass('dropit-open');
		} 
	});
	
	// Fancybox
	var fancyArgs = {
		padding: 0,
		margin: 20,
		helpers: {
    	    overlay: {
	            css: {
                	'background-color' : '#000'
				}
			},
			title: { 
				type : 'inside' 
			},
			media : {
				youtube : {
					params : {
						autoplay: 1,
						controls: 0,
						showinfo: 0
					}
				}				
			}
		},
		width: 640,
		height: 360,
		aspectRatio: true,
		openEffect: 'fade',
		closeEffect: 'fade',
		nextEffect: 'fade',
		prevEffect: 'fade',
		openSpeed: 200,
		closeSpeed: 200,
		nextSpeed: 200,
		prevSpeed: 200
	}	
	
	$(".uniform-video, .content a[href$='.jpg'], .content a[href$='.jpeg'], .content a[href$='.png'], .content a[href$='.gif']").attr('rel', 'gallery').fancybox(fancyArgs);
		
	// Find all YouTube videos
	var $videos = $(".content iframe"), $content_elem = $(".content");
	
	// Figure out and save aspect ratio for each video
	$videos.each(function() {
		$(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
	});
	
	// Modify video ratio when window resizes and on load
	$(window).resize(function() {
		var video_width = $content_elem.width();
		
		$videos.each(function() {
			var $el = $(this);
			$el.width(video_width).height(video_width * $el.data('aspectRatio'));
		});	  
		
	}).resize();

});