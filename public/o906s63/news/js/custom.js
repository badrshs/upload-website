

$(document).ready(function() {
 
  var owl = $("#mainslide");
 
  owl.owlCarousel({
      autoPlay: false,
      pagination : true,
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
   // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});




$(document).ready(function() {
 
  var owl = $("#owl-demo1");
 
  owl.owlCarousel({
      autoPlay: false,
      pagination : true,
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [300,1] // itemsMobile disabled - inherit from itemsTablet option
  });
   // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

});




$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
  	  pagination : true,
  	  autoPlay: false,
  	 
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [350,1] // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});


$(document).ready(function() {
 
  var owl = $("#videos");
 
  owl.owlCarousel({
      pagination : true,
      autoPlay: false,
     
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [350,1] // itemsMobile disabled - inherit from itemsTablet option
  });
 

});

$(document).ready(function() {
 
  var owl = $("#relat");
 
  owl.owlCarousel({
      pagination : true,
      autoPlay: false,
     
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [350,1] // itemsMobile disabled - inherit from itemsTablet option
  });
 

});



$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });






/*accordion faqs*/
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa-lock fa-unlock-alt');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);





$(document).ready(function(){
    $("#flip").click(function(){
        $("#search").slideToggle("slow");
    });
});