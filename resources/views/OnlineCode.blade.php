<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Upload your Website | The Best website Uploader</title>

    <meta property="og:url" content="upload-website.com"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="Upload Your Website & Share Online"/>
    <meta property="og:description"
          content="  By using our Services, you can easily upload your full Html website directly."/>
    <meta property="og:image" content="http://upload-website.com/images/F.PNG"/>


    <meta name="keywords"
          content="upload-website , upload , upload-website.com , www.upload-website.com ,upload online,  file upload html ,html upload file, upload html ,html upload ,file html ,website free ,upload and share"/>

    <meta name="description" content="How Can you upload HTML website to the internet for FREE "/>

    <!--Favicons-->
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#e74c3c">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#e74c3c">


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!--Bootstrap and Other Vendors-->
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/vendors/bootstrap-select/css/bootstrap-select.min.css" media="screen">

    <!--Fonts-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic'
          rel='stylesheet' type='text/css'>


    <link rel="stylesheet" href="/css/default/style.css">
    <link rel="stylesheet" href="/css/responsive/responsive.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script src="http://www.upload-website.com/js/App.js"></script>
    <link href="http://www.upload-website.com/css/materialize.min.css" rel="stylesheet"/>
    <link href="http://www.upload-website.com/css/styleOnline.css" rel="stylesheet"/>
</head>
<body class="home" ng-app="App" ng-controller="Live">


<nav class="navbar  navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
             <a class="navbar-brand" href="/"><img src="/images/logo.png" alt="www.upload-website.com"></a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">

            <ul class="nav navbar-nav navbar-right">
                <li style="cursor: pointer;"><a  ><span class="glyphicon glyphicon-eject"></span> Save</a></li>
                <li style="cursor: pointer;" ng-click="Run()" ><a  ><span class="glyphicon glyphicon-play" ></span> Run</a></li>

            </ul>
        </div>
    </div>
</nav>
<section class="row">
    <ul class="nav nav-justified ribbon">
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
    </ul>
</section>


<div class="code-window">
    <div class="row">
        <div class="col s12 code-body code-window-padding">
            <form method="POST">
                <textarea id="htmlTextarea" name="html-code"></textarea>
                <textarea id="cssTextarea" name="css-code"></textarea>
                <textarea id="jsTextarea" name="js-code"></textarea>
                <div class="col l4 s12 code-window-padding">
                    <div class="code-header">
                        <img src="http://delightcode.com/scripts/codeready/images/html.png" width="20"/> HTML
                    </div>
                    <pre class="html-code editors-c" id="htmlEditor"></pre>
                </div>
                <div class="col l4 s12 code-window-padding">
                    <div class="code-header">
                        <img src="http://delightcode.com/scripts/codeready/images/css.png" width="20"/>
                        <select class="browser-default cssSelect" id="cssType" name="cssType">
                            <option value="css">CSS</option>
                            <option value="scss">SCSS</option>
                            <option value="less">LESS</option>
                        </select>
                    </div>
                    <pre class="css-code editors-c" id="cssEditor"></pre>
                </div>
                <div class="col l4 s12 code-window-padding">
                    <div class="code-header">
                        <img src="http://delightcode.com/scripts/codeready/images/js.png" width="18"/> JavaScript
                    </div>
                    <pre class="js-code editors-c" id="jsEditor"></pre>
                </div>
            </form>
        </div>

    </div>
</div>


<style>

  .code-body {
        margin-top: 30px;
    }

    .navbar {
        border-radius: 0px;
    }
  .navbar-nav>li>a {
      padding-top: 21px;
      padding-bottom: 15px;
  }
</style>

 <iframe  style="border: 0;  width: 100%;  height: 100%; top: 0;  left: 0;  z-index: 1;display: none" allowfullscreen="true"  id="abc_frame"
        sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms"
        allowtransparency="true" class="result-iframe"></iframe>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.5/ace.js"></script>
<script>


    var htmlEditor = ace.edit("htmlEditor")
    htmlEditor.getSession().setMode("ace/mode/html")
    htmlEditor.setTheme("ace/theme/tomorrow")
    htmlEditor.commands.addCommand({
        name: "showKeyboardShortcuts",
        bindKey: {win: "Ctrl-Alt-h", mac: "Command-Alt-h"},
        exec: function (htmlEditor) {
            ace.config.loadModule("ace/ext/keybinding_menu", function (module) {
                module.init(htmlEditor);
                htmlEditor.showKeyboardShortcuts()
            })
        }
    });

    var cssEditor = ace.edit("cssEditor")
    cssEditor.getSession().setMode("ace/mode/css")
    cssEditor.setTheme("ace/theme/tomorrow")
    cssEditor.commands.addCommand({
        name: "showKeyboardShortcuts",
        bindKey: {win: "Ctrl-Alt-h", mac: "Command-Alt-h"},
        exec: function (cssEditor) {
            ace.config.loadModule("ace/ext/keybinding_menu", function (module) {
                module.init(cssEditor);
                cssEditor.showKeyboardShortcuts()
            })
        }
    });

    var jsEditor = ace.edit("jsEditor")
    jsEditor.getSession().setMode("ace/mode/javascript")
    jsEditor.setTheme("ace/theme/tomorrow")
    jsEditor.commands.addCommand({
        name: "showKeyboardShortcuts",
        bindKey: {win: "Ctrl-Alt-h", mac: "Command-Alt-h"},
        exec: function (jsEditor) {
            ace.config.loadModule("ace/ext/keybinding_menu", function (module) {
                module.init(jsEditor);
                jsEditor.showKeyboardShortcuts()
            })
        }
    });
    $("#cssType").change(function () {
        var cssType = $("#cssType").val();
        if (cssType == "scss") {
            var scssEditor = ace.edit("cssEditor")
            scssEditor.getSession().setMode("ace/mode/scss");
        } else if (cssType == "less") {
            var lessEditor = ace.edit("cssEditor")
            lessEditor.getSession().setMode("ace/mode/less");
        } else if (cssType == "css") {
            var csssEditor = ace.edit("cssEditor")
            csssEditor.getSession().setMode("ace/mode/css");
        }
    });
    $(document).ready(function () {
        var cssType = $("#cssType").val();
        if (cssType == "scss") {
            var scssEditor = ace.edit("cssEditor")
            scssEditor.getSession().setMode("ace/mode/scss");
        } else if (cssType == "less") {
            var lessEditor = ace.edit("cssEditor")
            lessEditor.getSession().setMode("ace/mode/less");
        } else if (cssType == "css") {
            var csssEditor = ace.edit("cssEditor")
            csssEditor.getSession().setMode("ace/mode/css");
        }
    });
</script>

<script src="/js/bootstrap.min.js"></script>


</body>
</html>