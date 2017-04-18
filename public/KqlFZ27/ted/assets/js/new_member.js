// On click
$('#submit').click(function(){


  $('#after-submit').fadeIn('fast', function(){
      $('#after-submit .loader').fadeIn();
  })


    //console.log('Clicked');
    var new_m_name = $('input[name="name"]').val(),
        new_m_age  = $('input[name="age"]').val(),
        new_m_faculty  = $('input[name="faculty"]').val(),
        new_m_university  = $('input[name="university"]').val(),
        new_m_graduation_year  = $('input[name="graduation_year"]').val(),
        new_m_email  = $('input[name="email"]').val(),
        new_m_mobile_number  = $('input[name="mobile_number"]').val(),
        new_m_fb_url  = $('input[name="fb_url"]').val(),
        new_m_which_team  = $('select[name="which_team"]').val(),
        new_m_qualified_textarea  = $('textarea[name="qualified_textarea"]').val(),
        new_m_portfolio_url  = $('input[name="portfolio_url"]').val(),
        new_m_previous_work_textarea  = $('textarea[name="previous_work_textarea"]').val(),
        new_m_what_you_know  = $('textarea[name="what_you_know"]').val(),
        new_m_an_attended_textarea  = $('textarea[name="an_attended_textarea"]').val(),
        new_m_why_joining  = $('textarea[name="why_joining"]').val(),
        new_m_work_hours  = $('textarea[name="work_hours"]').val(),
        new_m_cv_url  = $('input[name="cv_url"]').val();

    var newUser = {
        full_name: new_m_name,
        age: new_m_age,
        faculty: new_m_faculty,
        university: new_m_university,
        graduation_year: new_m_graduation_year,
        email: new_m_email,
        mobile_number: new_m_mobile_number,
        fb_url: new_m_fb_url,
        which_team: new_m_which_team,
        qualified_textarea: new_m_qualified_textarea,
        portfolio_url: new_m_portfolio_url,
        previous_work_textarea: new_m_previous_work_textarea,
        what_you_know: new_m_what_you_know,
        an_attended_textarea: new_m_an_attended_textarea,
        why_joining: new_m_why_joining,
        work_hours: new_m_work_hours,
        cv_url: new_m_cv_url,
    }

    // console.log(newUser)

    $.ajax({
        url: 'http://localhost/ted/api/index.php/users?transform=1',
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
                        $('#after-submit .loader').fadeOut('fast', function(){
                            $('.faild').fadeIn()
                        })
                    }, 1000);
            }
    })
})
