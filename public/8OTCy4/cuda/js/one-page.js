jQuery(document).ready(function($){
    $('.navigation .navbar-default .navbar-nav > li').click(function(){
        $(this).addClass('click');
        $(this).siblings().removeClass('click');
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop()>= 10){
            $('.navigation .navbar-default').css({
                'background':'rgba(135,80,156,.99)',
                'box-shadow':'0px 3px 4px 0px rgba(0,0,0,.7)'
            });
            $('.navigation .navbar-default .navbar-header .navbar-brand').css({
                'margin-top':'17px',
                'margin-bottom':'17px'
            });
            $('.navigation .navbar-default .navbar-header .navbar-brand i').css({
                'position':'absolute',
                'top':'22px'
            });
            $('.navigation .navbar-right').css({
                'margin-top':'22px'
            });
            $('.navigation .navbar-toggle').css({
                'margin-top':'20px',
                'margin-right':'35px'
            });
        }
        else{
            $('.navigation .navbar-default').css({
                'background':'rgba(231,241,248,0)',
                'box-shadow':'0px 0px 0px 0px transparent'
            });
            $('.navigation .navbar-default .navbar-header .navbar-brand').css({
                'margin-top':'50px',
                'margin-bottom':'0px'
            });
            $('.navigation .navbar-right').css({
                'margin-top':'65px'
            });
            $('.navigation .navbar-default .navbar-header .navbar-brand').css({
                'margin-top':'50px',
                'margin-bottom':'0px'
            });
            $('.navigation .navbar-default .navbar-header .navbar-brand i').css({
                'position':'static',
                'top':'0px'
            });
            $('.navigation .navbar-toggle').css({
                'margin-top':'45px',
                'margin-right':'45px'
            });
        }
    });
   $('.navigation .navbar-default .navbar-nav > li:first-of-type').prop({
       'class':'click'
   });
   
   $('.first.circle').circleProgress({
         size: 160,
    value: 0.90,
    fill: {color:'#30bae7'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
$('.second.circle').circleProgress({
         size: 160,
    value: 0.75,
    fill: {color:'#d74680'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
$('.third.circle').circleProgress({
         size: 160,
    value: 0.70,
    fill: {color:'#15c7a8'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
$('.fourth.circle').circleProgress({
         size: 160,
    value: 0.85,
    fill: {color:'#eb7d4b'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});


// Activate isotope in container
 
    $(".portfolio_items").isotope({
        itemSelector: '.single_item',
        layoutMode: 'fitRows'
    });
    
    // Add isotope click function
    
    $('.portfolio_filter li,.portfolio_filter option').click(function(){
        $(".portfolio_filter li,.portfolio_filter option").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
    
    
    
    /****/
    $('.portfolio-sec .portfolio_filter ul > li').click(function(){
        $(this).addClass('port-click').siblings().removeClass('port-click');
    });
   $('.portfolio-sec .portfolio_filter ul > li:first-of-type').prop({
       'class':'port-click'
   });
   
   
   
   /*****/
    var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
        
        /***************WOW.js*******************/
                  new WOW().init();
});