$(function () {
	
	"use strict";

	/* === Shape slioder === */

	var call_at_interval_array = {},
	call_at_interval = function(callback,time){
		if(call_at_interval_array[callback]!==undefined||call_at_interval_array[callback]===0){
			clearTimeout(call_at_interval_array[callback]);
			call_at_interval_array[callback] = setTimeout(callback,time);
		}else{
			callback();
			call_at_interval_array[callback] = 0;
		}
	};

	var timer;
	var shapeSlider = function(){
		var container = $('.slider-shape'),
			slider = container.children("ul"),
			slides = slider.children("li"),
			bullets,
			i = 0,
			i_max = slides.length-1,
			time = 5000,
			j,
			action;
		container.append('<div class="shape-control"><ul></ul></div>');
		for (j = 0; j < slides.length; j++ ) {
			$('.shape-control ul').append("<li>" + j + "</li>");
		};
		slides.eq(0).addClass("active");
		bullets = $('.shape-control ul li');
		bullets.eq(0).addClass("active");
		action = function(){
			slides.eq(i).removeClass("active");
			bullets.eq(i).removeClass("active");
			i = ++i % slides.length;
			slides.eq(i).addClass("active");
			bullets.eq(i).addClass("active");
		}
		timer = setInterval(action, time);

		container.hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(action, time);
		});

		bullets.click(function(){
			var i_new = bullets.index(this);
			if(i_new!==i){
				slides.eq(i).removeClass("active");
				bullets.eq(i).removeClass("active");
				i = i_new;
				slides.eq(i).addClass("active");
				bullets.eq(i).addClass("active");
			}
		});

		slides.css('width', container.width());
		slides.css('height', container.height());

		$(window).resize(function(){
			slides.css('width', container.width());
		slides.css('height', container.height())
		});
	}	
	shapeSlider();

	var shapeSwitcher = function(){
		var trg = $('.switcher-control-panel').find('b'),
			fShape = $('.filter-shape');

		trg.click(function(e){
			if(fShape.hasClass('filter-shape-active')){
				fShape.removeClass("filter-shape-active");
				timer;				
			}else{
				fShape.addClass("filter-shape-active");
				clearInterval(timer);
			}
		});
	}

	shapeSwitcher();

	var sortUi = function(){
		var ui = $('.sort-ui div');

		if(ui.length){
			ui.noUiSlider({ range: [0, 100],
						   	start: 0,
						   	step: 50,
						   	handles: 1,
						   	connect: false,
						});
		}

		$('input[name=sort]').click(function(){
			ui.val($(this).data('val'));
		});

		ui.change(function(){
			if(ui.val() === 0){
				$('input[name=sort]').eq(0).prop('checked', true);
			} else if(ui.val() === 50){
				$('input[name=sort]').eq(1).prop('checked', true);
			}else{
				$('input[name=sort]').eq(2).prop('checked', true);
			}
		});
		
	}

	sortUi();

	var mason = function(){
		var box = $('.shape-box');

		if(box.length){
			box.masonry({
				isResizeBound:false,
				itemSelector: box.children("li"),
				isFitWidth: true,
				cornerStampSelector: '.contol-panel',
				 columnWidth: 1,
				 isAnimated: true,
			  	animationOptions: {
			    duration: 750,
				    easing: 'linear',
				    queue: false
				}
			});
		}
	}

	var shapeEl = $('.home-shape > li.filter-item, .grid-type > li.filter-item, .team-view li');

	$(window).load(function(){
		shapeEl.height(shapeEl.width());
	});

	$(window).resize(function(){console.log(shapeEl.width());
		shapeEl.height(shapeEl.width());
	});

	$(window).load(function(){
		call_at_interval(function(){
			mason();
		},500);
	});

	$(window).resize(function(){
		call_at_interval(function(){
			$('.shape-box').masonry('reload');
		},1000);
	});

	var masonry_items = [];
	var fil = function(){
		var cat = $('.cat-shape ul li input[type=checkbox]'),
			filterI = $('.filter-item'),
			ids;

		cat.change(function(){
			ids = [];
			cat.each(function(){
				if($(this).is(':checked') && !$(this).hasClass('all-filter')){
						ids.push($(this).data('filter'));
				}
			});

			$('.shape-box').masonry('reload');

			if(cat.is(':checked') && !$(this).hasClass('all-filter')){
				$('.all-filter').prop('checked', false);
			}

			if (ids.length === 0 || $('.all-filter').is(':checked')){

				filterI.addClass('show-item').removeClass('hide-item');
				$('.cat-shape ul li input[data-filter]').prop('checked', false);
				$('.shape-box').masonry('reload');

			}else{

				filterI.each(function(){

					var exists = false;
						var filters = $(this).attr("data-tag").split(' ');
						for (var i = 0; i <= filters.length; i++){
							if ($.inArray(filters[i],ids) !== -1){
								exists = true;
							}
						}
					
					if(exists === false){
						$(this).removeClass('show-item').addClass('hide-item');
						masonry_items.push($(this).html());
						
					}
					else{
						$(this).removeClass('hide-item').addClass('show-item');
							
					}
				});
				
					
			}
			$('.shape-box').masonry({ itemSelector: '.show-item' });
			$('.shape-box').masonry('reload');
		});


	}

	fil();

	var partSlider = function(){
		var slider = $('.slider-partner ul'),
			slides = slider.children("li"),
			t = 0,
			custom_left,
			custom_right,
			next = $('.next'),
			prev = $('.prev');

			slider.css('width', slides.outerWidth(true)*slides.length);

			$(window).resize(function(){
				slider.css('width', slides.outerWidth(true)*slides.length);
			});

			if($(window).width() < 767){

				slides.width(100/slides.length + '%');

				$(window).resize(function(){
					slides.width(100/slides.length + '%');
				});
			}
			
			if(slides.length <= 4){
				next.hide();
				prev.hide();
			}else{
				custom_left = function(e){
								e.preventDefault();

								if(t < slides.length - 4){
									t++;
								}else{
									t = 0;
								}
								
								slider.css('margin-left', -slides.outerWidth(true)*t);					
								
							};

				custom_right = function(e){
								e.preventDefault();
								if(t > 0){
									t--;
								}else{
									t = slides.length - 4;
								}

								slider.css('margin-left', -slides.outerWidth(true)*t);
							};
			}

			next.click(custom_left);

			prev.click(custom_right);
	}

	partSlider();

	var closeBtn = function(){
		var btn = $('.close');

			btn.click(function(e){
				e.preventDefault();
				$(this).parent().fadeOut(300);
			});
	}

	closeBtn();

	$(function () {
		if($('.responsive-tabs').length > 0){
			RESPONSIVEUI.responsiveTabs();
		}
	});


	/*=== Clendario plugin ===*/

	var calendarShape = function(){

		function updateMonthYear() {				
			$month.html( cal.getMonthName() );
			$year.html( cal.getYear() );
		}

		if($('.calendar-nav').length){


			var cal = $( '#calendar' ).calendario( {
				onDayClick : function( $el, $contentEl, dateProperties ) {

					for( var key in dateProperties ) {
						console.log( key + ' = ' + dateProperties[ key ] );
					}

				},
				caldata : codropsEvents
			} ),
			$month = $( '#custom-month' ).html( cal.getMonthName() ),
			$year = $( '#custom-year' ).html( cal.getYear() );

			$( '#custom-next' ).on( 'click', function() {
				cal.gotoNextMonth( updateMonthYear );
			} );
			$( '#custom-prev' ).on( 'click', function() {
				cal.gotoPreviousMonth( updateMonthYear );
			} );
			$( '#custom-current' ).on( 'click', function() {
				cal.gotoNow( updateMonthYear );
			} );

			

		}
	}

	calendarShape();

	//=============Subscription =======================================
    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }

    jQuery("#subscribe").submit(function(e) {
        e.preventDefault();
        //validating email
        var sEmail = jQuery('#subscribe input[type=text]').val();
        //if valid email send info to php
        if (validateEmail(sEmail)) {
            jQuery.post("php/subscribes.php", jQuery("#subscribe").serialize(),function(result){
                jQuery('#subscribe p').addClass("subscribe-info").html(result).fadeIn('fast');
            });
        } else {
            jQuery('#subscribe p').addClass("subscribe-info").html('Invalid Email').fadeIn('fast');
            e.preventDefault();
            return false;
        }
    });

    var mobileMenu = function(){
    	var tar = $('.main-menu > ul > li'),
    		cl = 0;

    	if($(window).width() < 979){

    		tar.find('a').click(function(e){
	    		if($(this).next('ul').length){
	    			e.preventDefault();

	    			if(cl === 0){
	    				$(this).next('ul').prepend('<li>' + $(this)[0].outerHTML + '</li>');
	    			}

	    			cl++;
	    		}
		    });

    	}   	
    }

    mobileMenu();
	
	var scrollF = function(){

		$(window).scroll(function(){
			if($(window).scrollTop() > 200){
				$('.scroll-up').css('bottom', '100px');
			}else{
				$('.scroll-up').css('bottom', '-100px');
			}
		});

		$('.scroll-up').click(function(){
			jQuery('html,body').animate({scrollTop:0},300);
		});
	}
	scrollF();  
	
});