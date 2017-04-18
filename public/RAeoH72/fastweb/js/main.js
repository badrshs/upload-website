$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});



(function($, undefined){
  "use strict";

  var $navbar = $("#navbar"),
      y_pos = $navbar.offset().top,
      height = $navbar.height();

  $(document).scroll(function(){    
    var scrollTop = $(this).scrollTop();

    if (scrollTop > y_pos + height){
      $navbar.addClass("navbar-fixed").animate({ top: 0  });
    } else if (scrollTop <= y_pos){        
      $navbar.removeClass("navbar-fixed").clearQueue().animate({ top: "-48px" }, 0);
    }
  });
  
})(jQuery, undefined);


/* portfolio works*/



            $(function () {
              var filterList = {
                init: function () {
                
                  // MixItUp plugin
                  // http://mixitup.io
                  $('#portfoliolist').mixitup({
                    targetSelector: '.portfolio',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap',
                    // call the hover effect
                    onMixEnd: filterList.hoverEffect()
                  });       
                
                },
                hoverEffect: function () {
                  // Simple parallax effect
                  $('#portfoliolist .portfolio').hover(
                    function () {
                      $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                      $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
                    },
                    function () {
                      $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                      $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
                    }   
                  );        
                
                }
          
              };
              // Run the show!
              filterList.init();
            }); 
    /* more thumbline*/
        $(function(){
                
                $('#morethumb').thumbnl({
                    $bwdBut:$('#morethumb .left'),    // Selector to left button.
                    $fwdBut:$('#morethumb .right')    // Selector to right button.
                });
            });
/*============ SEVEN ROW SKILL===================*/
/* OUR SKILL*/

(function($){
  $.fn.percentPie = function(options){

    var settings = $.extend({
      width: 100,
      trackColor: "EEEEEE",
      barColor: "777777",
      barWeight: 30,
      startPercent: 0,
      endPercent: 1,
      fps: 60
    }, options);

    this.css({
      width: settings.width,
      height: settings.width
    });

    var that = this,
      hoverPolice = false,
      canvasWidth = settings.width,
      canvasHeight = canvasWidth,
      id = $('canvas').length,
      canvasElement = $('<canvas id="'+ id +'" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>'),
      canvas = canvasElement.get(0).getContext("2d"),
      centerX = canvasWidth/2,
      centerY = canvasHeight/2,
      radius = settings.width/2 - settings.barWeight/2;
      counterClockwise = false,
      fps = 1000 / settings.fps,
      update = .01;
      this.angle = settings.startPercent;

    this.drawArc = function(startAngle, percentFilled, color){
      var drawingArc = true;
      canvas.beginPath();
      canvas.arc(centerX, centerY, radius, (Math.PI/180)*(startAngle * 360 - 90), (Math.PI/180)*(percentFilled * 360 - 90), counterClockwise);
      canvas.strokeStyle = color;
      canvas.lineWidth = settings.barWeight;
      canvas.stroke();
      drawingArc = false;
    }

    this.fillChart = function(stop){
      var loop = setInterval(function(){
        hoverPolice = true;
        canvas.clearRect(0, 0, canvasWidth, canvasHeight);

        that.drawArc(0, 360, settings.trackColor);
        that.angle += update;
        that.drawArc(settings.startPercent, that.angle, settings.barColor);

        if(that.angle > stop){
          clearInterval(loop);
          hoverPolice = false;
        }
      }, fps);
    }

    this.mouseover(function(){
      if(hoverPolice == false){
        that.angle = settings.startPercent;
        that.fillChart(settings.endPercent);
      }
    });

    this.fillChart(settings.endPercent);
    this.append(canvasElement);
    return this;
  }
}(jQuery));

$(document).ready(function() {
  
  $('.dm').percentPie({
    width: 130,
    trackColor: "#000",
    barColor: "#00a99d",
    barWeight: 12,
    endPercent: .90,
    fps: 60
  });
  
  $('.gd').percentPie({
    width: 130,
    trackColor: "#000",
    barColor: "#00a99d",
    barWeight: 12,
    endPercent: .85,
    fps: 60
  });

  $('.wd').percentPie({
    width: 130,
    trackColor: "#000",
    barColor: "#00a99d",
    barWeight: 12,
    endPercent: .70,
    fps: 60
  });
  
  $('.wdd').percentPie({
    width: 130,
    trackColor: "#000",
    barColor: "#00a99d",
    barWeight: 12,
    endPercent: .47,
    fps: 60
  });
    
});

/*========================================*/



function swapStyleSheet(sheet){
  document.getElementById('pagestyle').setAttribute('href', sheet);
}

$(document).ready(function(){
  $("#cbtn").click(function(){
    $("#openclose").toggle();
  });
});