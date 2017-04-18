$(document).ready(

  function() { 

    $("html").niceScroll({
        cursorcolor :'#F7600E',
        cursorwidth :'10',
        cursorborderradius :0,
        cursorborder:'1px solid #F7600E'
    });

  }

);

          $(".header").height($(window).height());
          $(".header .arrow i").click(function () {
            $("html, body").animate({
                scrollTop: $(".Features").offset().top
            }, 2000);
          });

    // Show Hidden Items From Work
    
    $('.Show-more').click(function () {
       
        $('.Our-work .hidden').fadeIn(1000);
        
    });
    
    // Check Testimonials
    
    var leftArrow = $('.testmanual .fa-chevron-left'),
        
        rightArrow = $('.testmanual .fa-chevron-right');
    
    function checkClients() {
        
        $('.client:first').hasClass('active')? leftArrow.fadeOut() : leftArrow.fadeIn();
            
            
            
    }         

    
    checkClients();
    
    $('.testmanual i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testmanual .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testmanual .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        }
        
    });


    
