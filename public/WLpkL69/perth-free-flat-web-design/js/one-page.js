jQuery(document).ready(function($){
    $('.navigation .button-menu a').click(function(){
        $('.navigation .menu-up').slideDown(1000,function(){
            $('.navigation .menu-content ul').css({
                'transform':'scaleY(1)',
                '-o-transform':'scaleY(1)',
                '-moz-transform':'scaleY(1)'
                ,'-webkit-transform':'scaleY(1)',
                'transform-origin':'top',
                '-o-transform-origin':'top',
                '-moz-transform-origin':'top',
                '-webkit-transform-origin':'top'
            });
            $('.navigation .close-div i').css({
            'transform':'scale(1)',
            '-o-transform':'scale(1)',
            '-moz-transform':'scale(1)',
            '-webkit-transform':'scale(1)'
        });
        });
    });
    $('.navigation .close-div i').click(function(){
        $('.navigation .menu-content ul').css({
                'transform':'scaleY(0)',
                '-o-transform':'scaleY(0)',
                '-moz-transform':'scaleY(0)'
                ,'-webkit-transform':'scaleY(0)',
                'transform-origin':'top',
                '-o-transform-origin':'top',
                '-moz-transform-origin':'top',
                '-webkit-transform-origin':'top'
            });
            $('.navigation .menu-up').slideUp(1000);
            $('.navigation .close-div i').css({
            'transform':'scale(0)',
            '-o-transform':'scale(0)',
            '-moz-transform':'scale(0)',
            '-webkit-transform':'scale(0)'
        });
        });
        $('.subscribe-sec .sub-form .form-control').focus(function(){
            $('.subscribe-sec .sub-form .input-group-addon').css('color','#545454');
        });
        $('.subscribe-sec .sub-form .form-control').blur(function(){
            $('.subscribe-sec .sub-form .input-group-addon').css('color','#6ec5ea');
        });
        
        // Simple elevator usage.
            var elementButton = document.querySelector('.elevator a');
            var elevator = new Elevator({
                element: elementButton,
                mainAudio: './music/m-scroll.mp3', // Music from http://www.bensound.com/
                endAudio:  ''
            });
                  /***************WOW.js*******************/
                  new WOW().init();
});