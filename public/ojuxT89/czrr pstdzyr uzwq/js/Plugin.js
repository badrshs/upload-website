/*global $, JQuery, alert, console */
$(function () {
    'use strict';
    // Cashing Area
    var rightArrow = $('.Slider .fa-chevron-right'),
        leftArrow = $('.Slider .fa-chevron-left'),
        ourInputText = document.getElementById('ourInputText'),
        ourInputMail = document.getElementById('ourInputMail');
    
    function checkSliderImages() {
        if ($('.images img:first').hasClass('active')) {
            leftArrow.fadeOut(400);
        } else {
            leftArrow.fadeIn(400);
        }
    }
    
    if ($('.images .image:last').hasClass('active')) {
            
        rightArrow.fadeOut(400);
            
    } else {
            
        rightArrow.fadeIn(400);
    }
    
    checkSliderImages();
    
    $('.Slider i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.images .active').fadeOut(200, function () {
                
                $(this).removeClass('active').next('.image').addClass('active').removeClass('hidden').fadeIn(200);
                
                checkSliderImages();
                
            });
        } else {
            $('.images .active').fadeOut(200, function () {
                
                $(this).removeClass('active').prev('.image').addClass('active').removeClass('hidden').fadeIn(200);
                checkSliderImages();
                
            });
        }
        
    });
    
    // Placeholder focus animation
    ourInputText.onfocus = function () {
        
        if (this.placeholder === 'أكـتـب أسـمـك هـنـا') {
            
            this.placeholder = '';
        }
        
    };
    
    ourInputText.onblur = function () {
        
        if (this.placeholder === '') {
            
            this.placeholder = 'أكـتـب أسـمـك هـنـا';
        }
        
    };
    
    ourInputMail.onfocus = function () {
        
        if (this.placeholder === 'أكـتـب الـبـريـد الألـكـتـرونـى هـنـا') {
            
            this.placeholder = '';
        }
        
    };
    
    ourInputMail.onblur = function () {
        
        if (this.placeholder === '') {
            
            this.placeholder = 'أكـتـب الـبـريـد الألـكـتـرونـى هـنـا';
        }
        
    };
    
    
});




























