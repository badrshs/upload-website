$(document).ready(function () {
    'use strict';
    
      // Trigger MixitUp 
    
    $('#Container').mixItUp();
    
    // Adjust Shuffle Links
    
    $('.shuffle li').click(function () {
       
        $(this).addClass('fuck').siblings().removeClass('fuck');
        
    });
    
});