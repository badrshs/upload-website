(function() {
  var cloud, sky, tl;

  tl = new TimelineLite();

  cloud = new TimelineLite();

  sky = new TimelineLite();

  sky.from("html", 5, {
    backgroundColor: "#333333"
  });

  tl.staggerFrom("#Wood > path", 1, {
    scale: 0,
    fill: "white"
  }, 0.02);

  tl.staggerFrom("#Bird > path", 1, {
    scale: 0,
    fill: "white"
  }, 0.05, "bird");

  cloud.from("#Cloud > path", 6, {
    left: 800,
    fill: "black"
  });

  tl.timeScale(1.2);

}).call(this);