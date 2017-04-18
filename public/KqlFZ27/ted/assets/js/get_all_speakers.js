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
  url: 'http://localhost/ted/api/index.php/speak?transform=1',
  type: 'GET',
  success: function (all_speakers_var) {

          all_speakers_var = all_speakers_var.speak;
          $.each(all_speakers_var, function(i, speak){
            $('#all_users ').append(`
                        <tr>
                          <td>`+speak.name+`</td>
                          <td>`+speak.phone+`</td>
                          <td>`+speak.age+`</td>
                          <td>`+speak.City+`</td>
                          <td>`+speak.email+`</td>
                          <td>`+speak.Occupation+`</td>
                          <td>`+speak.Faculty+`</td>
                          <td>`+speak.Website+`</td>
                          <td>`+speak.know_about_ted+`</td>
                          <td>`+speak.attended_event_ted+`</td>
                          <td>`+speak.value_event_ted+`</td>
                          <td>`+speak.idea+`</td>
                          <td>`+speak.which_idea+`</td>
                          <td>`+speak.idea_applied+`</td>
                          <td>`+speak.recommend+`</td>
                          <td>`+speak.cv+`</td>
                        </tr>
            `)
          })
  },
  error: function(){
      console.log('Shit, I can\'t get the data!!!!')
  }
})
