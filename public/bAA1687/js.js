$(document).ready(function (){

  $(".signin").on("click" , function () {
    $("area").animate({"right":"50%"} , 100);
    $(".signin").addClass("active");
    $(".signup").removeClass("active");

    $(".in").css({"color":"#FFF","border-bottom":"2px solid #27b59d"});
    $(".up").css({"color":"#72849c","border-bottom":"none"});

    $(".su").fadeOut(100 , function () {
      $(".si").fadeIn();
    });
  });

  $(".signup").on("click" , function () {
    $("area").animate({"right":"0"} , 100);
    $(".signup").addClass("active");
    $(".signin").removeClass("active");

    $(".up").css({"color":"#FFF","border-bottom":"2px solid #27b59d"});
    $(".in").css({"color":"#72849c","border-bottom":"none"});

    $(".si").fadeOut(100 , function () {
      $(".su").fadeIn();
    });
  });


  $("form:first").submit(function (e) {

    if ($("form:first input[type='text']").val() === "" && $("form:first input[type='email']").val() === "" && $("form:first input[type='password']").val() === "") {

      $("form:first input[type='text'] , form:first input[type='email'] , form:first input[type='password']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});

    } else if ($("form:first input[type='text']").val() === "" && $("form:first input[type='email']").val() !== "" && $("form:first input[type='password']").val() !== "") {

      $("form:first input[type='text']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:first input[type='email']").css({"border-bottom":"1px solid #27b59d"});
      $("form:first input[type='password']").css({"border-bottom":"1px solid #27b59d"});

    } else if ($("form:first input[type='text']").val() !== "" && $("form:first input[type='email']").val() === "" && $("form:first input[type='password']").val() !== "") {

      $("form:first input[type='text']").css({"border-bottom":"1px solid #27b59d"});
      $("form:first input[type='email']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:first input[type='password']").css({"border-bottom":"1px solid #27b59d"});

    } else if ($("form:first input[type='text']").val() !== "" && $("form:first input[type='email']").val() !== "" && $("form:first input[type='password']").val() === "") {

      $("form:first input[type='text']").css({"border-bottom":"1px solid #27b59d"});
      $("form:first input[type='email']").css({"border-bottom":"1px solid #27b59d"});
      $("form:first input[type='password']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});

    } else if ($("form:first input[type='text']").val() !== "" && $("form:first input[type='email']").val() === "" && $("form:first input[type='password']").val() === "") {

      $("form:first input[type='text']").css({"border-bottom":"1px solid #27b59d"});
      $("form:first input[type='email']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:first input[type='password']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});

    } else if ($("form:first input[type='text']").val() === "" && $("form:first input[type='email']").val() !== "" && $("form:first input[type='password']").val() === "") {

      $("form:first input[type='text']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:first input[type='email']").css({"border-bottom":"1px solid #27b59d"});
      $("form:first input[type='password']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});

    } else if ($("form:first input[type='text']").val() === "" && $("form:first input[type='email']").val() === "" && $("form:first input[type='password']").val() !== "") {

      $("form:first input[type='text']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:first input[type='email']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:first input[type='password']").css({"border-bottom":"1px solid #27b59d"});

    } else {
      return;
    }

    e.preventDefault();
  });


  $("form:last").submit(function (e) {
    if ($("form:last input[type='email']").val() ==="" && $("form:last input[type='password']").val() ==="") {
        $("form:last input[type='email'] , form:last input[type='password']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
    } else if ($("form:last input[type='email']").val() ==="" && $("form:last input[type='password']").val() !=="") {
      $("form:last input[type='email']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:last input[type='password']").css({"border-bottom":"1px solid #27b59d"});
    } else if ($("form:last input[type='email']").val() !=="" && $("form:last input[type='password']").val() ==="") {
      $("form:last input[type='password']").css({"border-bottom":"1px solid rgb(218, 45, 62)"});
      $("form:last input[type='email']").css({"border-bottom":"1px solid #27b59d"});
    } else {
      return;
    }

    e.preventDefault();
  });
});
