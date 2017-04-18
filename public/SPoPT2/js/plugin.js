var scrooltop = $('.scroolltop');
$(window).scroll(function(){
    if ($(this).scrollTop() >= 300 )
    {
        scrooltop.show();
    }
    else
    {
        scrooltop.hide()
    }
});

    scrooltop.click(function(){
        $("html,body").animate({scrollTop:0},600)
    });

