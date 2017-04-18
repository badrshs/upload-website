jQuery(document).ready(function($){
    $('.third.circle').circleProgress({
         size: 125,
    value: 0.95,
    fill: {color:'#4253a4'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
$('.second.circle').circleProgress({
         size: 125,
    value: 0.50,
    fill: {color:'#4253a4'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
$('.first.circle').circleProgress({
         size: 125,
    value: 0.25,
    fill: {color:'#4253a4'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
$('.fourth.circle').circleProgress({
         size: 125,
    value: 0.75,
    fill: {color:'#4253a4'}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
new WOW().init();
});