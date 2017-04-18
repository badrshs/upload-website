$(document).ready(function() {
  $(".header .sign").click(function() {
    $(".reg-info").fadeOut(function() {
      $(".log").slideDown();
      $(".header .sign").css("background","#01AEF2");
      $(".header .reg").css("background","#041122");
    });
  })

  $(".header .reg").click(function() {
    $(".log").fadeOut(function() {
      $(".reg-info").slideDown();
      $(".header .reg").css("background","#01AEF2");
      $(".header .sign").css("background","#041122")
    });
  })
})