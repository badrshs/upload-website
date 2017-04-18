jQuery(document).ready(function($){
    $(window).scroll(function(){
        if($(this).scrollTop() > 900){
            $('footer .arrow-to-top a').css({
                'transform':'scale(1)',
                '-o-transform':'scale(1)',
                '-moz-transform':'scale(1)',
                '-webkit-transform':'scale(1)'
            });
        }
        else{
            $('footer .arrow-to-top a').css({
                'transform':'scale(0)',
                '-o-transform':'scale(0)',
                '-moz-transform':'scale(0)',
                '-webkit-transform':'scale(0)'
            });
        }
        $('.header .up-down-div i').click(function(){
            $('html,body').animate({
                'top':'150'
            },400);
        });
    });
    
   // Simple elevator usage.
            var elementButton = document.querySelector('footer .arrow-to-top a ');
            var elevator = new Elevator({
                element: elementButton,
                mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
                endAudio:  './music/ding.mp3'
            });
    new WOW().init();
});