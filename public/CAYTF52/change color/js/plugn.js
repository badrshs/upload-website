/* global $,head ,jquery ,alert ,console */

$(window).on("load",function(){
    
    $(".loading .sk-folding-cube").fadeOut(2000,function(){
        
        $(".loading").fadeOut(2000);
    });
})




$(document).ready(function(){
    
    "use strict";
    
    
    $("html").niceScroll({
        cursorcolor:"#FFDE00"
    });
//    making the navbar background 
    var w = $(window);
    
    w.scroll(function(){
        
        console.log(w.scrollTop());
        
        if(w.scrollTop() >= 100){
            
            $(".navbar-inverse").css({
                borderBottom : '2px solid #FFDE00',
                background : 'white',
                
                transition : 'all .2s ease-in-out',
            });
        
        }
        else {
            
             $(".navbar-inverse").css({
                borderBottom : 'none',
                background : 'none',
                transition : 'all .2s ease-in-out',
            }); 
        }
    });
    
//    end the navbar 
    
          
//    show nad hiddien the buttom of scroll top
    var sw = $(".footer .sweap");
    
  $(window).scroll(function(){
      
      
      if ($(window).scrollTop() >700) {
          
          sw.fadeIn(2000);
      } else {
          
          sw.fadeOut(2000);
      }
      
      
  });
//    function for scroll to top
    sw.click(function(){
          
          $("html ,body").animate({
              scrollTop :'10',
              
          },2000);
      });

    //     end function for scroll to top
    
    
    
    
    //    making the header view 
    var head = $(".header");
    
    head.height($(window).height());
   
    $(window).resize(function () {
       
    head.height($(window).height());
    
   
    });
    
    
//    starting the links 
    $(".navbar-inverse .navbar-nav > li > a ").on("click",function(){
       console.log($("#" +$(this).attr('data-val'))); 
        $("body").animate({
    scrollTop : $("#" + $(this).attr('data-val')).offset().top}, 1000);
    });
    
    
//   making name of emy 
    $(".navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand").on("click",function(){
        
        $(".lee").show(3000,function(){
            $(this).css({
                color : 'pink',
                fontFamily :'webkit-body',
                transition : 'all 2s ease-in-out',
            });
            
            $(".lee").click(function(){
                
                $(".mon").slideDown(3000,function(){
                $(this).css({
                   color : 'hotpink',
                fontFamily :'webkit-body',
                transition : 'all 2s ease-in-out', 
                    
                });     
                });
            });
        });
    });
    
    

    
});

 
  
    
