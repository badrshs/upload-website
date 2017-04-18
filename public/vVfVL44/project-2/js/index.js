$(document).ready(function(){
     

$('.menu').click(function(){
  $this = $(this);
  if ($this.hasClass('active')) {
    $this.removeClass('active');
  }
  else {
    $this.addClass('active');    
  }
});


$('.form .fa-search').click(function(){$('.form p').hide()});
$('.form .fa-search').click(function(){$('.form input[type="text"]').css('visibility','visible')});


$('.open1').click(function(){$('.box1').slideToggle(500)})
$('.open2').click(function(){$('.box2').slideToggle(500)})
$('.open3').click(function(){$('.box3').slideToggle(500)})
$('.open4').click(function(){$('.box4').slideToggle(500)})       



  $('.slider').slider();
  
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();



/**************************box***************/
    $(document).ready(function(){
      $('.parallax').parallax();
    });


   $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

     $('#modal1').modal('open');
    $('#modal1').modal('close');

    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
    $('.modal').modal();
      
});







    
$('body').css('overflow','auto')
$(window).load(function(){$('.loading').fadeOut(1000)})        



