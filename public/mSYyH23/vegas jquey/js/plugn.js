/* global $,head ,jquery ,alert ,console */
$(function () {
    "use strict";
    $('.war').vegas({
        timer :true,
        preload :true,
        slides: [
            
            { src: 'imag/great1.jpg' },
            { src: 'imag/par.jpg' }
            
            
        ],
        transition: [ 'fade', 'zoomOut', 'swirlLeft', 'zoomOut', 'swirlLeft'  ],
        animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
        
        
    });
});
  
    
