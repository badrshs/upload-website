<html>
<head>
    <title>upload website Online Coding</title>
    <base href="http://www.upload-website.com/">
    <meta property="og:url" content="upload-website.com/Online"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title"
          content="upload website - Front End Developer Playground &amp; Code Editor in the Browser"/>
    <meta property="og:description" content="front end web development playground , share your code online"/>
    <meta property="og:image" content="http://upload-website.com/images/Online.PNG"/>


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://www.upload-website.com/css/Online/jquery-ui.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.19.0/codemirror.min.css">
    <link rel="stylesheet" href="https://codemirror.net/theme/ambiance.css">
    <link rel="stylesheet" href="/css/Online/simplescrollbars.css">
    <link type="text/css" rel="stylesheet" href="//golden-layout.com/assets/css/goldenlayout-base.css"/>
    <link type="text/css" rel="stylesheet" href="//golden-layout.com/assets/css/goldenlayout-dark-theme.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/Online/upload.css">



</head>

<body id="MyController" ng-app="App" ng-controller="Live">
<div class="fake-line-1"></div>
<nav class="navbar  navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">

                <img style="width: 175px; margin-left: 20px;" src="http://www.upload-website.com/images/footer-logo.png"
                     alt="www.upload-website.com"></a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">

            <ul class="nav navbar-nav navbar-right">

                <li style="cursor: pointer;border-left: 2px solid rgba(34, 34, 34, 0.53);"><a href="../Online/"><span
                                class="glyphicon glyphicon-plus"></span> New </a>
                </li>
                @if($show)
                    <li style="cursor: pointer;border-left: 2px solid rgba(34, 34, 34, 0.53);"><a href="../Live/{{$id}}"
                                                                                                  target="_blank"><span
                                    class="glyphicon glyphicon-resize-full"></span> Full Screen</a>
                    </li>
                @endif
                <li id="save-window" style="cursor: pointer;border-left: 2px solid rgba(34, 34, 34, 0.53);">
                    <a><span class="glyphicon glyphicon-eject"></span>
                        Save</a></li>
                <li ng-click="Run()" style="cursor: pointer;border-left: 2px solid rgba(34, 34, 34, 0.53);"><a><span
                                class="glyphicon glyphicon-play" ng-click="Run()"></span> Run</a>
                </li>


            </ul>
        </div>
    </div>
</nav>


<div id="loading">
    <div>
        <img src="images/loading.gif"><br>
        Loading Editor Content...
    </div>
</div>

<div id="save-project" class="pop-window">
    <div>
        <div class="title">Save Current Project / Save as new</div>
        <br>

        <input id="projectSaveName" ng-model="TitleName" type="text" placeholder="Project Name" value="D3 Animations"
               required><br><br>
        <button ng-click="Save()" ng-disabled="false" id="save">SAVE</button>
        <button id="cancel" class="close-pop">CANCLE</button>
    </div>
</div>

<div id="ext-source" class="pop-window">
    <div>
        <div class="title">Enter CSS & JS external sources</div>
        <br>
        <p>Sources will be added in the project in the exact order you list them below</p>
        <p>Javascript External Scripts <br><span
                    class="weak"> &lt;script src='...' type='text/javascript'>&lt;/script></span></p>
        <textarea id="js-src"
                  placeholder="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </textarea>
        <p>CSS External Scripts <br><span class="weak"> &lt;link rel="stylesheet" href="...">
            </span></p>
        <textarea
                id="css-src">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </textarea><br><br>
        <button id="save-ext-sources">SAVE</button>
        <button id="cancel" class="close-pop">CANCLE</button>
    </div>
</div>


</body>


<style>

    h2 {
        font: 14px Arial, sans-serif;
        color: #fff;
        padding: 10px;
        text-align: center;
    }

    .CodeMirror {
        font-family: monospace;
        height: 100%;
        color: #000;
    }

    .lm_splitter.lm_vertical {
        opacity: 1;
        transition: opacity 200ms ease;
        background: -webkit-gradient(linear, left top, left bottom, from(#505050), to(#383838));
        background: -webkit-linear-gradient(top, #505050, #383838);
        background: linear-gradient(to bottom, #505050, #383838);
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        -webkit-box-shadow: inset 0 1px 0 #6e6e6e, 0 2px 2px rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 1px 0 #6e6e6e, 0 2px 2px rgba(0, 0, 0, 0.4);
    }

    .lm_splitter.lm_vertical:before {
        content: '';
        position: absolute;
        top: 15px;
        cursor: auto;
        width: 100%;
        height: 30px;
    }

    .lm_splitter.lm_vertical .lm_drag_handle {
        background: url(http://www.upload-website.com/images/vert.png) center 15px no-repeat;
    }

    .lm_splitter.lm_horizontal {
        opacity: 1;
        transition: opacity 200ms ease;
        background: -webkit-gradient(linear, right left, left right, from(#505050), to(#383838));
        background: -webkit-linear-gradient(left, #505050, #383838);
        background: linear-gradient(to left, #505050, #383838);
        border-left: 1px solid black;
        border-left: 1px solid black;
        -webkit-box-shadow: inset 0 1px 0 #6e6e6e, 0 2px 2px rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 0px 0 #6E6E6D, 0 0px 0px rgba(0, 0, 0, 0.4);

    }

    .lm_splitter.lm_horizontal .lm_drag_handle {
        background: url(http://www.upload-website.com/images/hor.png) 14px center no-repeat;

    }

    .lan {
        transition: opacity 0.5s ease;

        position: absolute;
        height: 50px;
        right: 6px;
        top: 10px;
        opacity: 0.3;
    }

    .lan:hover {

        opacity: 1;
    }

    .contenet {
        position: relative;
    }
</style>

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script type="text/javascript" src="//golden-layout.com/assets/js/goldenlayout.min.js"></script>
<script src="http://www.upload-website.com/js/App.js"></script>

<script>



    var fir = false;


</script>

<script >
    var k = false

    @if($show)

     $(window).ready(function(){

        k = true
    });


    @endif
    var iframe ="<iframe  @if($show) src='Live/{{$id}}'  @endif id='abc_frame'  style='background: whitesmoke; border: 0;  width: 100%;  height: 100%; top: 0;  left: 0;  z-index: 1;display:none' ></iframe>";
    var editorHtml = null;
    var editorCss = null;
    var editorJs = null;
</script>


<script src="css/Online/uptest.js"></script>
<script src="css/Online/codemirror.js"></script>
<script src="css/Online/simplescrollbars.js"></script>
<script src="css/Online/xml.js"></script>
<script src="css/Online/javascript.js"></script>
<script src="css/Online/css.js"></script>



</html>

