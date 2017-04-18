$(document).ready(function() {
  $("svg").css("opacity", "1");

  $(function() {

    setInterval(function() {
      //
      var seconds = new Date().getSeconds();
      var sdegree = seconds * 6;
      var srotate = "rotate(" + sdegree + "deg)";

      $("#second").css({
        "transform": srotate
      });

    }, 1000);

    setInterval(function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var hdegree = hours * 30 + (mins / 2);
      var hrotate = "rotate(" + hdegree + "deg)";

      $("#hour").css({
        "transform": hrotate
      });

    }, 1000);

    setInterval(function() {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";

      $("#minute").css({
        "transform": mrotate
      });

    }, 1000);

  });
});