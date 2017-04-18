
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });





/* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-img1.jpg' },
            { src: 'images/slide-img2.jpg' },
            { src: 'images/slide-img3.jpg' }
        ],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
    });



/* mix it up style
  -----------------------------------------------*/
   $('#Container').mixItUp();
    
    // Adjust Shuffle Links
    
    $('.shuffle li').click(function () {
       
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });


   $(".fa-phone").click(function(){
    $(".phone").slideToggle()
   })

   $(".fa-envelope").click(function(){
    $(".msg").slideToggle()
   })

   $(".fa-map").click(function(){
    $(".site").slideToggle()
   })



      $('.up span').click(function() {
    $('html, body').animate({
      scrollTop: -690
    }, 1500);

  });

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.up span').fadeIn();
    } else {
      $('.up span').fadeOut();
    }
  });

  });



    



  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });


  /* nice scroll
  -------------------------------*/
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top -40
    }, 1000);
  }
});


  /*social icons fadein/out
  -------------------------------*/
 $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      $('.social-icons').fadeIn();
    } else {
      $('.social-icons').fadeOut();
    }
  });


  /* navbar color change
  -------------------------------*/
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 20) {
      $('.okayNav-header').css({
        "background":"#ccc"
      });




    } else {
      $('.okayNav-header').css({
        "background":"#fff"
      });




    }

  });


