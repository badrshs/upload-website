$(window).ready(function(){
    
     
        $('.load').fadeOut(5000);
 
$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
    
     $(window).scroll(function(){
         
         var scr = $(window).scrollTop();
        
        if(scr > 620) {
    
             $('.myheader').find('a').fadeOut();
            
        } else{
            $('.myheader').find('a').fadeIn();
        
        }
        
    }); 


    $(function(){
    $(".fixed").hide();
    });
    
    $(window).scroll(function(){
        
        var scr = $(window).scrollTop();
        
        
        if(scr > 690) {
            
            $('.fixed').fadeIn();
            
        } else {
            $('.fixed').fadeOut();
        
        }
        
    }); 
    
 
   $('.first-t').mouseenter(function(){
        
        $('.first-img').css({
   'transform': ' scale( .6 , .6 ) translate(-155px,-127px) '
       
        }),
        
        $('.first-right').css({
            'transform':  'translate(0 , 0)'
            }),
        
        $('.first-down').css({
            'transform':  'translate(0 , 0)'
            })
        
    });
    
     $('.first-t').mouseleave(function(){
        
       $('.first-img').css({
            'transform': 'scale( 1 , 1 )',
            'transform': 'translate(0,0)'
            }),
        
        $('.first-right').css({
            'transform':  'translate(170px , 0)'
            }),
        
         $('.first-down').css({
            'transform':  'translate(0 , 165px)'
            })
        
    });
    
    
     $('.sec-t').mouseenter(function(){
        
        $('.sec-img').css({
   'transform': ' scale( .6 , .6 ) translate(-155px,-127px) '
       
        }),
        
        $('.sec-right').css({
            'transform':  'translate(0 , 0)'
            }),
        
        $('.sec-down').css({
            'transform':  'translate(0 , 0)'
            })
        
    });
    
     $('.sec-t').mouseleave(function(){
        
       $('.sec-img').css({
            'transform': 'scale( 1 , 1 )',
            'transform': 'translate(0,0)'
            }),
        
        $('.sec-right').css({
            'transform':  'translate(170px , 0)'
            }),
        
         $('.sec-down').css({
            'transform':  'translate(0 , 165px)'
            })
        
    });
    
    
     $('.third-t').mouseenter(function(){
        
        $('.third-img').css({
   'transform': ' scale( .6 , .6 ) translate(-155px,-127px) '
       
        }),
        
        $('.third-right').css({
            'transform':  'translate(0 , 0)'
            }),
        
        $('.third-down').css({
            'transform':  'translate(0 , 0)'
            })
        
    });
    
     $('.third-t').mouseleave(function(){
        
       $('.third-img').css({
            'transform': 'scale( 1 , 1 )',
            'transform': 'translate(0,0)'
            }),
        
        $('.third-right').css({
            'transform':  'translate(170px , 0)'
            }),
        
         $('.third-down').css({
            'transform':  'translate(0 , 165px)'
            })
        
    });
    
    
    $("html").niceScroll();
  
    $(window).scroll(function(){
        
        if($(this).scrollTop() >= 2000)
            {
                $('.to-top').css({'opacity': '1'});
            }
        
        else{$('.to-top').css({'opacity': '.0'})}
    });
    
    $('.to-top').click(function(){
        
        $('body').animate({scrollTop: '0'},700);
    
    });
    
});




















