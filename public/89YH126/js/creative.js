$(window).ready(function() {

    var ref, ref2;

    $('.wrap').each(function(index, value){
      var $this = $(this),
          $textContainers = $(this).children('p'),
          thisText = $this.children('a').text(),
          textLength = thisText.length,
          n = 0,
          hidden = true,
          showClicked = false,
          hideClicked = false;
        for (var i = 0; i<= textLength; i++) {
        $this.append('<div>'+ thisText.charAt(i) +'</div>');
      }   
        function show($container, start) {
          $container.children('div').css('transition', '');
          var length = $container.children('a').text().length;
          var interval =  setInterval(function() {
          $container.children('div').eq(start).css('opacity', '1')          
            if ( start == length) {
              clearInterval(interval);
            }
            start++;
          }, 0);
        }

        var hide = function($container) {
          $container.children('div').css('transition', 'none');
          $container.children('div').css('opacity', '0');
          /*
          var interval2 = setInterval(function() {
          $container.children('div').eq(n).css('opacity', '0')          
            if ( n == 0) {
              clearInterval(interval2);
            }
            n--;
          }, 0);
          */
        }
        
        

        ref = show;
        ref2 = hide;



      })

    
    $('.sync').each(function() {

      var $this = $(this),
          $container = $this.find('.sync-container'), // or containers if there is more than one container
          $outButton = $this.find('.out'),
          $owl = $this.find('.owl'),
          $nextButton = $this.find('.next'),
          $prevButton = $this.find('.prev'),
          $containerElements = $container.children('.element'), // all elements of container or contaienrs 
          $firstContainerElements = $container.first().children(), // only the first container 
          $firstContainerElementsImages = $firstContainerElements.find('img'),
          numberOfElments  =  $firstContainerElements.length, // because the number must be unified for all the containers
          numberOfContainers = $container.length,
          x = numberOfElments,
          realInterval = 3000,
          slideInterval = 1000,
          wholeInterval = realInterval+ slideInterval,
          oldHeight = 0,
          newHeight = 0,
          number = 0,
          index = 0,
          clicks = false,
          $ProperElementForHeight = $containerElements.eq(number).find('img'),
          properElmentHeight = ($ProperElementForHeight.outerHeight(true) - 1) + 'px',
          callbacks = $.Callbacks(),
          callbacks2 = $.Callbacks(),
          callbacks3 = $.Callbacks();

          


      

      
    


      function beforeNext(){
        var y = x % numberOfElments,
            $activeElement =   $container.find('.element:eq('+ (y + 1) +')'),
            $activeElementPrev =    $container.find('.element:eq('+ y +')'),
            $selectButton =  $outButton.eq(y + 1),
            index = y + 1;
            $selectButtonPrev = $outButton.eq(y);



        if ( y == numberOfElments - 1) {
         $activeElement = $container.find('.element:eq(0)');
         $activeElementPrev = $container.find('.element:last-of-type');
         $selectButton = $outButton.eq(0);
         index = 0;
        }   


        $containerElements.css('transition', 'none');  
        $containerElements.css({'opacity': '1', 'z-index': '100'});
        $activeElement.css('transform', 'translateX(100%)');  
        $activeElement.css('z-index', '1000'); 
        $activeElementPrev.css('z-index', '1000');   
        $activeElementPrev.find('p, h1, h2, h3').removeClass('active');

        $selectButtonPrev.removeClass('active');

      }
      
      function next(){

        var y = x % numberOfElments,
        $activeElement =   $container.find('.element:eq('+ (y + 1) +')'),
        $activeElementPrev =    $container.find('.element:eq('+ y +')'),
        $selectButton =  $outButton.eq(y + 1);
        index = y + 1;



        



        if ( y == numberOfElments - 1) {
         $activeElement = $container.find('.element:eq(0)');
         $activeElementPrev = $container.find('.element:last-of-type');
         $selectButton = $outButton.eq(0);
         index = 0;
        } 


        if ( $activeElementPrev.position().left != 0 ) {
          return false;
        } 

        //when owl Clicked
        $containerElements.css('transition', '');


        $activeElementPrev.css({'transform':'translateX(-100%)'});

        $activeElement.css({'transform': 'translateX(0)'}).addClass('active');  
        $activeElement.siblings('.element').removeClass('active');

        
        
         

        

        


          x++;
         clearAndSet()
       


      }



      function beforePrev(){
        var y = x % numberOfElments,
            $activeElement =   $container.find('.element:eq('+ (y - 1) +')'),
            $activeElementPrev =    $container.find('.element:eq('+ y +')'),
            $selectButton =  $outButton.eq(y - 1),
            index = y - 1;
            $selectButtonPrev = $outButton.eq(y);



        


        $containerElements.css('transition', 'none');  
        $containerElements.css({'opacity': '1', 'z-index': '100'});
        $activeElement.css('transform', 'translateX(-100%)');  
        $activeElement.css('z-index', '1000'); 
        $activeElementPrev.css('z-index', '1000');   
        $activeElementPrev.find('p, h1, h2, h3').removeClass('active');

        $selectButtonPrev.removeClass('active');

      }
      
      function prev(){

        var y = x % numberOfElments,
        $activeElement =   $container.find('.element:eq('+ (y - 1) +')'),
        $activeElementPrev =    $container.find('.element:eq('+ y +')'),
        $selectButton =  $outButton.eq(y - 1);
        index = y - 1;



        



       


        if ( $activeElementPrev.position().left != 0 ) {
          return false;
        } 


        //when owl Clicked
        $containerElements.css('transition', '');


        $activeElementPrev.css({'transform':'translateX(100%)'});

        $activeElement.css({'transform': 'translateX(0)'}).addClass('active');  
        $activeElement.siblings('.element').removeClass('active');

        
        
        
        

        


          x--;
          clearAndSet();
       


      }

      function beforeOpacity() {
        var  y = x % numberOfElments,
             $activeElement =  $container.find('.element:eq('+ (index) +')'),
             $allElments = $container.find('.element'),
             $activeElementPrev =  $container.find('.element:eq('+ (y) +')'),
             $otherElements = $(this).children().not($activeElement);


          
          $activeElementPrev.find('p, h1, h2, h3').removeClass('active');

          $outButton.eq(y).removeClass('active');
          $outButton.eq(index).addClass('active');
         
           

          
                                
         $allElments.css('transition', 'none');

         $allElments.css({'z-index': '10', 'transform': 'translateX(0)'})

         $activeElement.css({ 'z-index': '100', 'opacity': '0'});
         $activeElementPrev.css({ 'z-index': '1000', 'opacity': '1'});




          
         
         

          
         
      }


      function opacity() {
        var  y = x % numberOfElments,
              $activeElement =  $container.find('.element:eq('+ (index) +')'),
             $allElments =  $container.find('.element'),
             $activeElementPrev =  $container.find('.element:eq('+ (y) +')'),
             $otherElements = $(this).children().not($activeElement);


          
          
         $activeElementPrev.css('transition', 'opacity ease '+ slideInterval +'ms');;

         $activeElementPrev.css({'opacity': '0'});
         $activeElement.css({'opacity': '1'})
         

         
         
         

        
        clearAndSet()
        x = index;
      }

      function array() {
       callbacks.fire();
     } 


     function zeroInterval() {
        $outButton.eq(index).addClass('active');
      }
      function firstInterval() {
        zeroInterval();
        $container.find('.element:eq('+ index +')').find('h1, p').addClass('active');
       
      }
      function secondInterval() {
        $container.find('.element:eq('+ index +')').find('h2').addClass('active');
      }
      function thirdInterval(){
        $container.find('.element:eq('+ index +')').find('h3').addClass('active')
      }

      function clearAndSet() {

        clearInterval(ww);
        ww = setInterval(array, wholeInterval);  

        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);
        clearTimeout(thirdTimeout);

        firstTimeout = setTimeout(firstInterval, slideInterval);
        secondTimeout = setTimeout(secondInterval, 2 *slideInterval);
        thirdTimeout = setTimeout(thirdInterval, 3 * slideInterval);
      }

      callbacks.add(beforeNext);

      callbacks.add(next);   

      callbacks2.add(beforePrev);

      callbacks2.add(prev);   

      callbacks3.add(beforeOpacity);

      callbacks3.add(opacity);


      var   ww = setInterval(array, wholeInterval);


     zeroInterval()
     var firstTimeout = setTimeout(firstInterval, slideInterval);
     var secondTimeout = setTimeout(secondInterval, 2 * slideInterval);
     var thirdTimeout = setTimeout(thirdInterval, 3 * slideInterval); 


      

     
      


      


     

      $nextButton.click(function() {


        if ( clicks == true) {
          return false;
        }
        callbacks.fire();

        clicks = true;

        
        
        
        setTimeout(function() {
          clicks = false;
        }, slideInterval + 50)
      });
      $prevButton.click(function() {


        if ( clicks == true) {
          return false;
        }
        callbacks2.fire();

        clicks = true;

        
        
        
        setTimeout(function() {
          clicks = false;
        }, slideInterval + 50)
      });






      $outButton.hover(function() {


        var y = x % numberOfElments
            difference = (y - index),
            index = $(this).index();


        if ( index == y ) {
            return false;
        }   

        
        callbacks3.fire()



      })
      $this.mouseover(function() {
        $prevButton.addClass('active');
        $nextButton.addClass('active');
        $owl.addClass('active');
      });
      $this.mouseleave(function() {
        $prevButton.removeClass('active');
        $nextButton.removeClass('active');
        $owl.removeClass('active');
      })
      
      
      

    })












  $('.toggle').each(function() {

      var $this = $(this),
        $thisElements = $(this).children('.toggle-container').children('.toggle-menu'),
        $button = $(this).children('.toggle-container').children('button'),
        someoneActive = false,
        toggleTime = 500,
        $closeButton = $this.children('.close');


      
        if ( $this.hasClass('inner')) {
          toggleTime = 0
        }

      



      function first($container) {

        


        $container.addClass('active');
        someoneActive = true;
        
      }

      function second($container) {

        $container.removeClass('active');
      }

      $button.mouseover(function() {
        if ( $this.hasClass('click')) {
            return false
        }
          var  $thisNextContiner = $(this).next(),
                $notThisNext = $thisElements.not($thisNextContiner),
                $thisButton = $(this),
                $notThisButton = $button.not($(this));

        $this.addClass('active')        
        second($notThisNext);

        
        $notThisButton.removeClass('active');
        
        if ( someoneActive == true) {
          var ww = setTimeout(function() {
             first($thisNextContiner);
             $thisButton.addClass('active');
          }, toggleTime)
        } else {
          first($thisNextContiner);
          $thisButton.addClass('active');
        }

        $this.mouseleave(function() {
          $thisElements.removeClass('active');
          someoneActive = false;
           second($button.not($(this)));
           $this.removeClass('active')
        });
        $thisButton.mouseleave(function() {
          clearTimeout(ww);
        })
        $closeButton.click(function() {
          clearTimeout(ww);
          $thisElements.removeClass('active');
          $button.removeClass('active');
          $this.removeClass('active');
          someoneActive = false;
        })
      })


      $button.click(function() {
        if ( !$this.hasClass('click')) {
            return false
        }
          var  $thisNextContiner = $(this).next(),
                $notThisNext = $thisElements.not($thisNextContiner),
                $thisButton = $(this),
                $notThisButton = $button.not($(this));

        $this.addClass('active')        
        second($notThisNext);

        $(this).addClass('active');
        $button.not($(this)).removeClass('active');
        
        if ( someoneActive == true) {
          var ww = setTimeout(function() {
             first($thisNextContiner);
          }, toggleTime)
        } else {
          first($thisNextContiner);
        }

        $this.mouseleave(function() {
          $thisElements.removeClass('active');
          someoneActive = false;
           second($button.not($(this)));
           $this.removeClass('active')
        });
        $thisButton.mouseleave(function() {
          clearTimeout(ww);
        })
        $closeButton.click(function() {
          clearTimeout(ww);
          $thisElements.removeClass('active');
          $button.removeClass('active');
          $this.removeClass('active');
          someoneActive = false;
        })
      })

     
    })



})


