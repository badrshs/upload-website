/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function() {
  
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

  /* Home Slideshow Vegas
    -----------------------------------------------*/
  $(function() {
    $('body').vegas({
      slides: [{
        src: 'images/slide-img1.jpg'
      }, {
        src: 'images/slide-img2.jpg'
      }, {
        src: 'images/slide-img3.jpg'
      }, {
        src:  'images/slide-img4.jpg'
      },{
         src:  'images/slide-img5.jpg'
      }],
      timer: false,
      transition: ['zoomIn', ],
      animation: ['kenburns']
    });

   /* Contact icons (section about) to slide p
    -----------------------------------------------*/ 
   $(".fa-phone").click(function() {
      $(".phone").slideToggle()
    })

    $(".fa-envelope").click(function() {
      $(".msg").slideToggle()
    })

    $(".fa-map").click(function() {
      $(".site").slideToggle()
    })

     
     //whats app number slide

     $(".whatsapp").click(function(){
      $(".social-icons .span1").slideToggle()
     })

     $(".google").click(function(){
      $(".social-icons .span2").slideToggle()
     })
     

    $('.up span').click(function() {
      $('html, body').animate({
        scrollTop: -690
      }, 1500);

    });


 /* scroll to top
    -----------------------------------------------*/
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
  new WOW({
    mobile: false
  }).init();

});

/* nice scroll the li navbar
-------------------------------*/
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 40
    }, 1000);
  }
});

/*social icons fadein/out
-------------------------------*/


