/*global console, alert, confirm, prompt*/
$(document).ready(function() {
  $('table').on('click', 'th', function () {
    var $table = $('table'),
        $index = $(this).index();
        $table.find('tbody tr').each(function () {
          $(this).children().each(function (i, e) {
            if ($(e).index() === $index) {
              $(e).css({
                'color' : '#BCE7FD',
                'background' : '#414744'
              });
              $(e).nextAll().css({
                'color': '',
                'background': ''
              });
              $(e).prevAll().css({
                'color': '',
                'background': ''
              });
            }
          });
        });
        $(this).css('background', '#3F88C5');
        $(this).nextAll().css('background', '');
        $(this).prevAll().css('background', '');
      });
      $('table').on('click', 'tr td', function () {
        $(this).parent().children().toggleClass('this').css({
          'color' : '',
          'background' : ''
        });
          $(this).parent().nextAll().children().removeClass('this').css({
            'color' : '',
            'background' : ''
          });
            $(this).parent().prevAll().children().removeClass('this').css({
              'color' : '',
              'background' : ''
            });
         });
        $('button').on('click', function () {
          $('table').find('.this').parent().fadeOut('normal', function () {
            $(this).remove();
          });
        });
  });
$.ajax({
  url: 'http://localhost/ted/api/index.php/attend?transform=1',
  type: 'GET',
  success: function (all_attend_var) {

          all_attend_var = all_attend_var.attend;
          $.each(all_attend_var, function(i, attend){
            $('#all_users').append(`
                        <tr>
                          <td>`+attend.name+`</td>
                          <td>`+attend.age+`</td>
                          <td>`+attend.education+`</td>
                          <td>`+attend.city+`</td>
                          <td>`+attend.mobil_number+`</td>
                          <td>`+attend.email+`</td>
                          <td>`+attend.know_about+`</td>
                          <td>`+attend.want_attend+`</td>
                        </tr>
            `)
          })
  },
  error: function(){
      console.log('Shit, I can\'t get the data!!!!')
  }
})
