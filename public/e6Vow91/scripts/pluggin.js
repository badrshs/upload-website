$('.carousel').carousel({
    interval: 5000
})
$(".box").click(function () {
    $(this).box().toggleClass("circle");
});
