// On click
$('#submit').click(function(){


   $('#after-submit').fadeIn('fast', function(){
      $('#after-submit .loader').fadeIn();
  })


      var new_s_name = $('input[name="name"]').val(),
          new_s_mobile_number = $('input[name="phone"]').val(),
          new_s_age = $('input[name="age"]').val(),
          new_s_City = $('input[name="City"]').val(),
          new_s_email = $('input[name="email"]').val(),
          Occupation = $('input[name="Occupation"]').val(),
          Faculty = $('input[name="Faculty"]').val(),
          Website = $('textarea[name="Website"]').val(),
          know_about_ted = $('textarea[name="know_about_ted"]').val(),
          attended_event_ted = $('textarea[name="attended_event_ted"]').val(),
          value_event_ted = $('textarea[name="value_event_ted"]').val(),
          idea = $('textarea[name="idea"]').val(),
          which_idea = $('select[name="which_idea"]').val(),
          idea_applied = $('textarea[name="idea_applied"]').val(),
          recommend = $('textarea[name="recommend"]').val(),
          cv = $('input[name="cv"]').val();


      var newUser = {
        name: new_s_name,
        phone: new_s_mobile_number,
        age: new_s_age,
        City: new_s_City,
        email: new_s_email,
        Occupation: Occupation,
        Faculty: Faculty,
        Website: Website,
        know_about_ted: know_about_ted,
        attended_event_ted: attended_event_ted,
        value_event_ted: value_event_ted,
        idea: idea,
        which_idea: which_idea,
        idea_applied: idea_applied,
        recommend : recommend,
        cv: cv,
      }


      $.ajax({
        url: 'http://localhost/ted/api/index.php/speak?transform=1',
        type: 'POST',
        data: newUser,
        success: function(){
            // console.log('Yes the data has been saved to the database!');
            // PLEASE NOTE:
                // This setTimeout function because of the Async nature of ajax
                // That's why we need to delay the fadeOut
                setTimeout(function() {
                    $('#after-submit .loader').fadeOut('fast', function(){
                        $('.success').fadeIn()
                    })
                }, 1000);

                // HERE YOU WILL WRITE THE FADE OUT OF THE FORM
            },
            error: function(){
                // console.log('No, there was an ERROR!!!!');
                // PLEASE NOTE:
                    // This setTimeout function because of the Async nature of ajax
                    // That's why we need to delay the fadeOut
                    setTimeout(function() {
                        $('#after-submit  .loader').fadeOut('fast', function(){
                            $('.faild').fadeIn()
                        })
                    }, 1000);
            }
      });

});
