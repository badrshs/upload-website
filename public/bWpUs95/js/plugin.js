$(function () {
    var wd = $(window).width()
    if (wd < 980)
            {
                $("link[href='style/style1.css']").attr('href','style/style2.css')
            }else{
                $("link[href='style/style2.css']").attr('href','style/style1.css')
            }
    
    
    $(window).resize(function(){
        var wd = $(window).width()
        console.log(wd)
        if (wd < 980)
            {
                $("link[href='style/style1.css']").attr('href','style/style2.css')
            }else{
                $("link[href='style/style2.css']").attr('href','style/style1.css')
            }
    });
   console.log(wd) 
});