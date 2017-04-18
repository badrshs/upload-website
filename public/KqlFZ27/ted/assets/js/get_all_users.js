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
    url: 'http://localhost/ted/api/index.php/users?transform=1',
    type: 'GET',
    success: function(all_users_var){
        // console.log('Yes I got the data')
        // console.log(all_users_var)
        all_users_var = all_users_var.users;
        $.each(all_users_var, function(i, user){
            // console.log(user)
            $('#all_users ').append(`
                    	  <tr>
                    		  <td>`+user.full_name+`</td>
                    	    <td>`+user.age+`</td>
                    	    <td>`+user.faculty+`</td>
                    	  	<td>`+user.university+`</td>
                    	  	<td>`+user.graduation_year+`</td>
                    	  	<td>`+user.email+`</td>
                    	  	<td>`+user.mobile_number+`</td>
                    	  	<td>`+user.fb_url+`</td>
                    	  	<td>`+user.which_team+`</td>
                    	  	<td>`+user.qualified_textarea+`</td>
                    	  	<td>`+user.portfolio_url+`</td>
                    	  	<td>`+user.previous_work_textarea+`</td>
                    	  	<td>`+user.what_you_know+`</td>
                    	  	<td>`+user.an_attended_textarea+`</td>
                    	  	<td>`+user.why_joining+`</td>
                    	  	<td>`+user.work_hours+`</td>
                    	  	<td>`+user.cv_url+`</td>
                    	  </tr>
            `)
        })
    },
    error: function(){
        console.log('Shit, I can\'t get the data!!!!')
    }
})
