
<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">
  <title>404 Page Not Found - Airbnb</title>

  <link href="<?php echo e(url('/css/error.css')); ?>" media="all" rel="stylesheet" type="text/css">
 

  <!-- Replace by loading from stylesheet -->
  <style type="text/css">
    .text-ginormous {
      font-size: 145px;
    }

    .navbar .container.fixed-height {
      height: 46px;
    }

    .brand.airbnb.center {
      float: none;
      margin: 7px auto 0 auto;
    }
  </style>
</head>

    <style>
    </style>
<body>
  <div id="header" class="navbar navbar-top">
    <div class="navbar-inner">
      <div class="fixed-height container container-full-width page-container page-container-responsive navbar-container">
        <a href="/"><img  style="    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    padding: 6px;" src="http://www.upload-website.com/images/logo.png"></a>
      </div>
    </div>
  </div>

  <div class="page-container page-contaisner-responsive">
    <div class="row space-top-8 space-8 row-table">
        <div class="col-5 col-middle">
          <h1 class="text-jumbo text-ginormous">Oops!</h1>
          <h2>We can't seem to find the page you're looking for.</h2>
          <h6>Error code: 404</h6>
          
        </div>
        <div class="col-5 col-middle text-center">
          <img src="<?php echo e(url('images/error.gif')); ?>" width="313" height="428" alt="Girl has dropped her ice cream.">
        </div>
      </div>
    </div>
  </div>
</body>
</html>
