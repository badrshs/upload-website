$(document).ready(function(){

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

       //>=, not <=
      if (scroll >= 150) {
          //clearHeader, not clearheader - caps H
          $(".logo").addClass("show");
      } else {
          $(".logo").removeClass("show");
      }
  }); //missing );

  $(".hamberger").click(function(){
    $(this).toggleClass("active");
    $(".ham-active").toggleClass("hamm");
  });

  $(".ham-active ul a").click(function(){
    $(".hamberger").removeClass("active");
    $(".ham-active").removeClass("hamm");
  });

});
