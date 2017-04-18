jQuery(document).ready(function($){
 var val = $('#numerals');

  function resize(){
    var length = $('.numeral').length;

    if(length > 3 ){
      val.css('font-size', (1 - (length / 10)) + 'em');
      if (length < 5){
        $('.numeral:nth-child(2)').html($('.numeral:nth-child(2)').html().substring(0, 1));
      } else if (length == 5){
        $('.numeral:nth-child(2)').html($('.numeral:nth-child(2)').html().substring(0, 1));
        $('.numeral:nth-child(2)').append(',');
        $('.numeral:nth-child(3)').html($('.numeral:nth-child(3)').html().substring(0, 1));
      } else if (length == 6){
       $('.numeral:nth-child(2)').html($('.numeral:nth-child(2)').html().substring(0, 1));
        $('.numeral:nth-child(3)').html($('.numeral:nth-child(3)').html().substring(0, 1));
        $('.numeral:nth-child(3)').append(',');
      }
    } else if (length == 0){
      val.append('<span class="numeral">0</span>');
      $('.numeral').last().addClass('displayed');
    } else {
      val.css('font-size', '1em');
    }
  }

  function reflow(){
    //adding reflow to allow the DOM to process the removeClass before calling the addClass, which insures that the css key-frame animation fires. This is an adaptation of a vaniall JS trick from Chris Coyier https://css-tricks.com/restart-css-animation
    $('#numerals').width($('#numerals').width());
  }

  function jiggle(){
    $('#numerals').removeClass('jiggle');
    reflow();
    $('#numerals').addClass('jiggle');
  }

  $('.key').click(function(){
    var content = $(this).find('span').html();

    if($('.numeral').length >= 1 ){
      $('#req-pay').addClass('active');
    } else {
      $('#req-pay').removeClass('active');
    }

    function decimal(){
      if($('.numeral').last().hasClass('decimals')){
        jiggle();
      } else {
        val.append('<span class="numeral decimals"><span class="decimal">0</span><span class="decimal">0</span></span>');
        reflow();
        $('.numeral').last().addClass('displayed');
      }
    }
    function add(){
      val.append('<span class="numeral">' + content + '</span>');
      reflow();
      $('.numeral').last().addClass('displayed');
    }
    function decimalAdd(){
      if($('.decplayed').length == 0){
        $('.decimal').first().addClass('smallhide');
         setTimeout(
            function()
            {
              $('.smallhide').hide();
              $('.decimals').prepend('<span class="decplayed">' + content + '</span>');
              reflow();
              $('.decplayed').first().addClass('smalldisplayed');
            }, 100);
      } else if($('.decplayed').length == 1){
        $('.decimal').last().addClass('smallhide');
         setTimeout(
            function()
            {
              $('.smallhide').hide();
              $('.decimals').append('<span class="decplayed">' + content + '</span>');
              reflow();
              $('.decplayed').last().addClass('smalldisplayed');
            }, 100);
      } else {
        jiggle();
      }
    }

    if($('.numeral').length < 6){
      if(($('.numeral').length == 1) && (content == '0' || content == '.')){
        jiggle();
      } else if(($('.numeral').length == 1) && (content !== '0' || content !== '.')){
          $('#numerals').find('span').addClass('hide');
            setTimeout(
            function()
            {
              $('.hide').hide();
              add();
            }, 150);
          } else if (content == '.'){
            decimal();
          } else if($('.numeral').last().hasClass('decimals')){
            decimalAdd();
          } else {
            add();
            resize();
          }
    } else if ($('.numeral').length == 6 && content == '.'){
      decimal();
    } else if (($('.numeral').length == 7 || $('.numeral').length == 6) && $('.numeral').last().hasClass('decimals')){
      decimalAdd();
    } else if ($('.numeral').length == 0){
      val.append('<span class="numeral">0</span>');
      $('.numeral').last().addClass('displayed');
    } else {
      jiggle();
    }
  });

  $('#back').click(function(){
    if($('.numeral').length == 1){
      jiggle();
    } else if ($('.numeral').length == 2) {
      $('.numeral').last().removeClass('displayed');
      setTimeout(
        function()
        {
          $('.numeral').last().remove();
          $('.numeral').first().show().removeClass('hide');
        }, 150);
    } else if($('.numeral').last().hasClass('decimals')){
      if($('.decplayed').length == 0){
        $('.numeral').last().removeClass('displayed');
      setTimeout(
        function()
        {
          $('.numeral').last().remove();
          resize();
        }, 150);
      }
      if($('.decplayed').length == 1){
       $('.decplayed').removeClass('smalldisplayed');
       setTimeout(
            function()
            {
              $('.decplayed').first().remove();
              $('.decimal').first().show().removeClass('smallhide');
            }, 100);
       } else if($('.decplayed').length == 2){
         $('.decplayed').last().removeClass('smalldisplayed');
         setTimeout(
              function()
              {
                $('.decplayed').last().remove();
                $('.decimal').last().show().removeClass('smallhide');
              }, 100);
       }
    } else {
      $('.numeral').last().removeClass('displayed');
      setTimeout(
        function()
        {
          $('.numeral').last().remove();
          resize();
        }, 150);
    }

  });

  function move(direction){

    var u = $('#user-info'),
    h = $('#history-info'),
    a = $('#app-container'),
    w = $('#app-container').width(),
    uPos = u.css('left'),
    uPos = parseInt(uPos),
    hPos = h.css('left'),
    hPos = parseInt(hPos),
    aPos = a.css('left'),
    aPos = parseInt(aPos);

    if(direction == 'left'){
      u.css('left', uPos + w);
      h.css('left', hPos + w);
      a.css('left', aPos + w).toggleClass('greyed');
    } else if(direction == 'right') {
      u.css('left', uPos - w);
      h.css('left', hPos - w);
      a.css('left', aPos - w).toggleClass('greyed');
    }
  }

  
  resize();
});
