$(document).ready(function () {
    // Filters
    $('#Container').mixItUp();
    // Circles
    $('#circleone').circleProgress({
        value: 0.9,
        size: 115,
        emptyFill: "rgba(0, 0, 0, 0)",
        startAngle: 30,
        lineCap: "round",
        thickness: "10",
        fill: {
            color: "#f8c34f"
        }
    });
    $('#circletwo').circleProgress({
        value: 0.75,
        size: 115,
        emptyFill: "rgba(0, 0, 0, 0)",
        startAngle: 30,
        lineCap: "round",
        thickness: "10",
        fill: {
            color: "#f8c34f",
            background: "#2a3044"
        }
    });
    $('#circlethree').circleProgress({
        value: 0.8,
        size: 115,
        emptyFill: "rgba(0, 0, 0, 0)",
        startAngle: 30,
        lineCap: "round",
        thickness: "10",
        fill: {
            color: "#f8c34f"
        }
    });
    $('#circlefoure').circleProgress({
        value: 0.6,
        size: 115,
        emptyFill: "rgba(0, 0, 0, 0)",
        startAngle: 30,
        lineCap: "round",
        thickness: "10",
        fill: {
            color: "#f8c34f"
        }
    });
    $('.navbar-form button').click(function (e) {
        e.preventDefault();
        $('.navbar-form input[type="text"]').toggle(300);
    });
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
    $("#owl-dem").owlCarousel({
        autoPlay: 5000,
        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination : false
    });
    $("#owl-customers-say").owlCarousel({
      navigation : true,
      slideSpeed : 1000,
      paginationSpeed : 1000,
      singleItem : true,
      pagination : false,
      navigationText : ["<i class='glyphicon glyphicon-menu-left'></i>","<i class='glyphicon glyphicon-menu-right'></i>"]
  });
});
