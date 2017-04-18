 
            
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Upload your  Website | The Best website Uploader</title>
 
<meta property="og:url"                content="upload-website.com" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="Upload Your Website & Share Online" />
<meta property="og:description"        content= "  By using our Services, you can easily upload your full Html website directly." />
<meta property="og:image"              content= "http://upload-website.com/images/F.PNG" />
                 

 
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
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#e74c3c">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#e74c3c">

    <!--Bootstrap and Other Vendors-->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/css/magnific-popup.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/vendors/bootstrap-select/css/bootstrap-select.min.css" media="screen">

    <!--Fonts-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>

    <!--Theme Styles-->
    <link rel="stylesheet" href="/css/default/style.css">
    <link rel="stylesheet" href="/css/responsive/responsive.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>


     


</head>
<body class="home">
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-83652425-1', 'auto');
  ga('send', 'pageview');

</script>
<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <a class="navbar-brand" href="/"><img src="/images/logo.png" alt=""></a>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#middle-menu" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>



    </div><!-- /.container-fluid -->
</nav> <!--Navigation-->





<section class="row upload_media">
    <div class="container">
        <div class="row" style="margin-top:-85px">
            <h2>Upload Your Website &amp; Share Online</h2>
            <h3 style="line-height: 1.3;">Share your website online easily<br> <span>zip file only : contain: [ html , css , image , javascript ]</span><br>any harmful file will be filtered  out </h3>



            <form   action="{{URL::to('apply/uploadTest')}}" id="upload_media" method="post" enctype="multipart/form-data">
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                 <div class="inner row m0">
                     <div class="row m0 plus_ico" id="plusUpload" style="    margin-top: 55px;" >+</div>

                     <img style="display: none" id="zipImage" width="100px;" src="http://www.iconarchive.com/download/i98460/dakirby309/simply-styled/WinRAR.ico">
    <h5 class="text-center FileNAME"  > </h5>
              <input type="file"  style="display:none" name="zip" class="ff" accept=".zip">
                        <label  style="display: none" class="Upload" for="media_up_btn">Click to Upload</label>
                    <input  style="display:none" type="submit" class="Uploadf" name="submit" >


                 </div>
            </form>
        </div>
    </div>
</section> <!--Upload Form-->
<script type="text/javascript">
    $(function() {
        $("input:file").change(function (){
            var fileName = $(this).val();
            
            if(fileName.split('.').pop()=="zip"){
            
            
            $(".plus_ico").hide();
            $("#zipImage").show();
            $(".Upload").show();
            $(".FileNAME").text(fileName);
                }else{
                    alert("only zip file")
                }

        });
    });
</script>
<section class="row">
    <ul class="nav nav-justified ribbon">
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
    </ul>
</section> <!--Ribbon-->

<section class="row recent_uploads">
    <div class="container">
        <div class="row title_row">
            <h3>recent uploads</h3>
        </div>
        <div class="row media-grid content_video_posts">
            <div class="jscroll-inner">
       @foreach( $Project as $key=>$one)
              
       
         <article class="col-sm-3 video_post postType3">
                    <div class="inner row m0">
                        <a href="http://www.upload-website.com/{{$one->name}}"><div class="row screencast m0">
                            <img style="width:283px;height:209px" src="screenshot/{{$one->name}}.jpg" alt="" class="cast img-responsive">
                            <div class="play_btn"></div>
                             
                        </div></a>
                        <div class="row m0 post_data">
                            <div class="row m0" style="    white-space: nowrap;
    overflow: hidden;"><a href="single-video.html" class="post_title">@if($one->Title!=""){{$one->Title}}   @endif</a></div>
                            
                        </div>
                        
                    </div>
                </article>   
            
                @if($key==2)
                @break 
                @endif
            @endforeach        
                <div class="col-sm-3 video_post advertise_betweeen_uploads">
                    <div class="inner row m0">
                        <h3>Advertise<br>Here</h3>
                    </div>
                </div>
                @foreach( $Project as $key=>$one)
              
        @if($key>2)
                    
         <article class="col-sm-3 video_post postType3">
                    <div class="inner row m0">
                        <a href="http://www.upload-website.com/{{$one->name}}"><div class="row screencast m0">
                            <img style="width:283px;height:209px" src="screenshot/{{$one->name}}.jpg" alt="" class="cast img-responsive">
                            <div class="play_btn"></div>
                             
                        </div></a>
                        <div class="row m0 post_data">
                            <div class="row m0" style="    white-space: nowrap;
    overflow: hidden;"><a href="single-video.html" class="post_title">@if($one->Title!=""){{$one->Title}}   @endif</a></div>
                            
                        </div>
                        
                    </div>
                </article>   
            @endif
            @endforeach
                <div class="row m0">
                    <div class="clearfix"></div>
                    <a href="getProject?page=2" class="load_more_videos">Load more videos</a>
                </div>
            </div></div>
    </div>
</section>


<footer class="row" >
    <div class="container">
        <div class="row sidebar sidebar_footer">
            <div class="col-sm-3 widget widget1 w_in_footer widget_about">
                <h5 class="widget_title">About Upload Website</h5>
                <div class="row m0 inner">
                    <a href="/"><img src="/images/footer-logo.png" alt=""></a><br>
                    <p>            By using our Services, you can easily upload your Html website directly. 
.</p>
                </div>
            </div>
            
            <div class="col-sm-3 widget widget2 w_in_footer widget_subscribe">
                <h5 class="widget_title">subscribe to our newsletter</h5>
                <div class="row m0 inner">
                    <form action="#" class="row m0" method="post">
                        <input type="email" class="form-control" placeholder="Enter Email Address">
                        <input type="submit" value="Submit Now" class="form-control btn btn-default">
                    </form>
                </div>
            </div>
            <div class="col-sm-3 widget widget3 w_in_footer widget_tags">
                <h5 class="widget_title">popular tags</h5>
                <div class="row m0 inner">
                    <a href="#" class="tag">upload </a>
                    <a href="#" class="tag">website</a>
                    <a href="#" class="tag">Uplaod html</a>
                    <a href="#" class="tag">upload html online </a>
                    <a href="#" class="tag">upload project</a>
                    <a href="#" class="tag">Upload your website by free</a>
                    <a href="#" class="tag">html</a>
                    <a href="#" class="tag">css</a>
                    <a href="#" class="tag">javasript</a>
                   
                </div>
            </div>
            <div class="col-sm-3 widget widget4 w_in_footer widget_twitter">
                <h5 class="widget_title">  Contact with us on  </h5>
                <div class="row m0 inner" style="color:white">
                  info@upload-website.com
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Preloader -->
<div id="preloader">
    <div id="status">&nbsp;</div>
</div>

<!--jQuery, Bootstrap and other vendor JS-->

<!--jQuery-->
<script src="/js/jquery-2.1.4.min.js"></script>

<!--Bootstrap JS-->
<script src="/js/bootstrap.min.js"></script>

<!--jScroll-->
<script src="/js/jquery.jscroll.min.js"></script>

<!--Magnific Popup-->
<script src="/js/jquery.magnific-popup.min.js"></script>

<!--Bootstrap Select-->
<script src="/vendors/bootstrap-select/js/bootstrap-select.min.js"></script>

<!--Theme JS-->
<script src="/js/theme.js"></script>
<script src="/js/upload-website.js"></script>


<script>
    
         
        $("#plusUpload").click(function(){

       		 $(".ff").trigger("click");

        
    });  
    $(".Upload").click(function(){

       		 $(".Uploadf").trigger("click");

        
    });
    
    </script>
 

</body>
</html>