var sb = $('.start');
var ck = $('.cookie');
var sc = $('p.score');
var tm = $('p.time');

var GAME_STARTED = 0;
var TIMER = 50+1;
var SCORE = 0;
var SCORE_DISPLAY = "000";

// startbutton animation
sb.click(function(){
  sb.animate({
    width: '100%',
    height: '0',
    lineHeight: '0',
    marginLeft: '-320px',
    padding: '0',
    opacity: '.1',
    borderRadius: '0'
  }, 500, function(){
    // game starting...
    sb.hide();
    setTimeout(function(){
      ck.css({
        top: rand(0,390)+"px",
        left: rand(0,547)+"px"
      });
      ck.fadeIn('slow');
      GAME_STARTED = 1;
    },750);  
  });
});

// game event click
ck.click(function(){
  ck.animate({
    top: rand(0,390)+"px",
    left: rand(0,547)+"px",
  }, 75);
  //ck.css('transform',' rotate(' + rand(0,360) + 'deg)');  
  SCORE += 1;
  
  if (SCORE < 10) {
    SCORE_DISPLAY = "00"+SCORE;
  }  else if (SCORE < 100) {
    SCORE_DISPLAY = "0"+SCORE;
  }  else {
    SCORE_DISPLAY = SCORE;
  }
  
  sc.html(SCORE_DISPLAY);
});

function ShowPass(){
  
  alert("neptune KEY : D7A7A")
}
// Timing
setInterval(function(){
  if(GAME_STARTED == 1) {
    TIMER -= 1;
    tm.html(TIMER);
    
    // timer ended - game stoped - winnig-screen
    if(TIMER <= 0) {
      GAME_STARTED = 0;
      ck.hide();
      if (SCORE > 40) {
        ShowPass();
        //code
      }
      $('.tweet').attr('href',
      'https://twitter.com/home?status=my%20score%20on%20%22A%20CLICKING%20COOKIE%20GAAAAME...%22:%20'+SCORE_DISPLAY+'%20points%0ATry%20it:%20http://cdpn.io/mwHil');
      $('.win').fadeIn('slow');
      $('.win-score').html(SCORE_DISPLAY);
      return;
    }
  }
},1000);


// functions for extranal file

function rand(min, max) {
  var argc = arguments.length;
  if (argc === 0) {
    min = 0;
    max = 2147483647;
  } else if (argc === 1) {
    throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}