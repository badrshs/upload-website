 
// typed 
 $(function(){
    'use strict'
    // this for typing 
      $(".typed").typed({
        strings: ["<span>Welcome</span> in Our template For Your business","<span>I'm</span> professional front-End-Developer Welcome in my site"],
        typeSpeed: 0
      });
      //******** this for centric caption Start******//
      $('.carousel-caption').each(function(){
        $(this).css('lineHight',($(window).height() - $('.my-nav').height())/2);
        });
      // ************End centric caption Start*******************//
      // *****for go to Next Section*******//
      $('.carousel-caption i').click(function(){
        $('html, body').animate({
            scrollTop:$('.about').offset().top},800);
      });
      /*******************************************
        **        Start go to top button      **
      *******************************************/
      var jumper=$('.jumper');
      $(window).scroll(function(){
        if($(this).scrollTop()>= 450)
        {
            jumper.show(500);
        }
        else
        {
            jumper.hide(500);
        }
      });

      jumper.click(function(){
        $('html,body').animate({
            scrollTop:0
        },600);
      });
      // *****************End go to top button*********//
      // *****************Start go to section smoothly****//
      $('.top-nav .navbar-default .navbar-nav>li').click(function(){
           $(this).addClass('active1').siblings().removeClass('active1');

           $('html,body').animate({scrollTop:$('.' + $(this).data('value'))
            .offset().top},800);
      });
      $('.fors .btn').click(function(){
        $(this).addClass('active1').siblings().removeClass('active1');
      })
      // *****************End go to section Smoothly******//
     $('#container').mixItUp();
        /*******************************
        **  More Section of project **
        *******************************/
      $('.resume .more').click(function()
      {
          $('.extra').fadeToggle(800);
      });
      // chic client
      var left=$('.slider1 .fa-chevron-left'),
          right=$('.slider1 .fa-chevron-right');
       function checkClients() {
          if ($('.client:first').hasClass('active')) {
              left.fadeOut();
          } else {
              left.fadeIn(1000);
          }
          if ($('.client:last').hasClass('active')) {
              right.fadeOut();
          } else {
              right.fadeIn(1000);
          }        
        }
        checkClients();
        $('.slider1 i').click(function () {
            
            if ($(this).hasClass('fa-chevron-right')) {
                
                $('.slider1 .active').fadeOut(800, function () {
                    $(this).removeClass('active').next('.client').addClass('active').removeClass('hidden').fadeIn();
                    checkClients();
                });
            } else {
                
                $('.slider1 .active').fadeOut(800, function () {
                    $(this).removeClass('active').prev('.client').addClass('active').removeClass('hidden').fadeIn();
                    checkClients(); 
                });  
            } 
        });
            /*************************************
            **          Team slider             **
            *************************************/
           var counter = 0,
              timer;
            $('.card').click(function() {
                $(this).addClass('active').siblings('.card').removeClass('active');
                counter = $(this).index();
              })
              .hover(function() {
                if (timer)
                  clearInterval(timer);
              }, function() {
                timer = setInterval(autoSlider, 2000);
              });
            // auto slide 

            function autoSlider() {
              $('.card').eq(counter).addClass('active').siblings('.card').removeClass('active');
              if (counter == $('.card').length - 1) {
                counter = 0;
              } else {
                counter++;
              }
            }
            timer = setInterval(autoSlider, 2000);

        /*****************************************************
          **           to fade sections smoothly           **
        *****************************************************/ 
        $(window).scroll(function(){
            if($(this).scrollTop()>=50 && $(this).scrollTop()<=700)
            {
                $('.about h1').fadeIn(900);
                $('.about .img img').fadeIn(900);
            }
            else
            {
                $('.about h1').fadeOut(900);
                $('.about .img img').fadeOut(900);
            }
           
        });
          /**************************************************
        **         section of change theme color         **
        **************************************************/
        var element= $('.box-color .colors span');
        $('.box-color .bton').click(function(){
            $('.box-color').toggleClass('slide');  
        });
        element.click(function(){
            $("link[href*='theme']").attr('href',$(this).data('value'));
        });
   
        
  });

  /************************************************
         **      preloading screen         **
  ************************************************/ 
 $(window).load(function (){
    
        $(".sk-folding-cube").fadeOut(600).parent('.loadingscreen').fadeOut(900);
        $('.item .second img').delay(300).animate({'top':'22%'},800);
        //wow.js 
  });
  /************************************************
   **      background of connect canvase         **
  ************************************************/ 

 window.onload = function() {
  Particles.init({ options });
};

// e.g.
window.onload = function() {
  Particles.init({
    selector: '#myCanvas',
    color: '#000000',
    sizeVariations: 8,
    connectParticles:true
  });
};



