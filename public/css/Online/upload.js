





function init() {

    var config = {
         settings: {
            hasHeaders: false
        },
        dimensions: {
            borderWidth: 20,

        },

        content: [{

            type: 'column',
            content: [{
                type: 'row',
                content: [{
                    type: 'component',
                    componentName: 'HTML',
                    title: 'some title',
                    activeItemIndex: 1

                }, {
                    type: 'component',
                    componentName: 'CSS',
                }, {
                    type: 'component',
                    componentName: 'JAVASCRIPT',
                }]
            }, {
                type: 'component',
                componentName: 'Result',
            }]
        }]
    };


    var myLayout = new GoldenLayout(config);




    myLayout.registerComponent('HTML', function (container, componentState) {


        container.getElement().html('<div class="contenet" style="position:relative"><textarea id="contentHtml" ></textarea><img class="lan HTML" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"></div>');
    });

    myLayout.registerComponent('CSS', function (container, componentState) {
        container.getElement().html('<div   class="contenet"><textarea id="contentCss" ></textarea><img class="lan CSS" src="http://w3widgets.com/responsive-slider/img/css3.png"></div>');
    });

    myLayout.registerComponent('JAVASCRIPT', function (container, componentState) {
        container.getElement().html('<div  class="contenet"><textarea id="contentJs" ></textarea><img class="lan JS" src="http://www.b2bweb.fr/wp-content/uploads/js-logo-badge-512.png"></div>');
    });

    myLayout.registerComponent('Result', function (container, componentState) {
        container.getElement().html(iframe);
    });

    myLayout.init();




    editorHtml = CodeMirror.fromTextArea(document.getElementById('contentHtml'), {
        mode: "xml",
        htmlMode: true,
        theme: "ambiance",
        lineNumbers: true,
        scrollbarStyle: "simple"
    });




    editorCss = CodeMirror.fromTextArea(contentCss, {
        mode: "css",
        theme: "ambiance",
        lineNumbers: true,
        scrollbarStyle: "simple"
    });

    editorJs = CodeMirror.fromTextArea(contentJs, {
        mode: "javascript",
        lineNumbers: true,
        theme: "ambiance",
        scrollbarStyle: "simple"
    });


    editorHtml.on("focus",function (){
        $(".HTML").fadeOut(150);

    });  editorHtml.on("blur",function (){
        $(".HTML").fadeIn(150);

    });


    editorCss.on("focus",function (){
        $(".CSS").fadeOut(150);

    });  editorCss.on("blur",function (){
        $(".CSS").fadeIn(150);

    });


    editorJs.on("focus",function (){
        $(".JS").fadeOut(150);

    });
    editorJs.on("blur",function (){
        $(".JS").fadeIn(150);

    });


    setTimeout(function () {
        $("#loading").css("display", "none");
    }, 1000);




    //$(".CodeMirror-simplescroll").css("position", "relative");



}







$(window).load(function(){

    init();



});




$("#save-window").click(function(){
    $('#save-project').css("display","block");
});

$(".close-pop").click(function(){
    $('.pop-window').css("display","none");
});



$("#new-project").click(function(){

});

//Display ext source window
$("#ext-src").click(function(){
    $('#ext-source').css("display","block");
});


