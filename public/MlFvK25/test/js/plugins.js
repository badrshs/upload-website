$(document).ready(function(){
    $(".form").animate({
        top:'0'
    },500);
    $(".form").animate({
        width:'450px',
    },500);
    $(".form").animate({
        height:'300px',
        borderRadius:'20px'
    },500);
    $(".form h1").animate({
        opacity:'1'
    },5000);
    $(".form p").animate({
        opacity:'.8'
    },7000);
    $(".form form input[type='text'],input[type='password']").animate({
        height:'30px'
    },3000);
    $(".form form input[type='checkbox'],lable").show(3000);
    $(".form form input[type='submit']").show(3000);
});