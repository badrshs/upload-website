// On click
$('#submit').click(function(){


  $('#after-submit').fadeIn('fast', function(){
      $('#after-submit .loader').fadeIn();
  })


    //console.log('Clicked');
    var name = $('input[name="name"]').val(),
        age  = $('input[name="age"]').val(),
        education  = $('input[name="education"]').val(),
        city  = $('input[name="city"]').val(),
        mobil_number  = $('input[name="mobil_number"]').val(),
        email  = $('input[name="email"]').val(),
        know_about  = $('textarea[name="know_about"]').val(),
        want_attend  = $('textarea[name="want_attend"]').val();

    var newUser = {
        name: name,
        age: age,
        education: education,
        city: city,
        mobil_number: mobil_number,
        email: email,
        know_about: know_about,
        want_attend: want_attend,
    }

    // console.log(newUser)

    $.ajax({
        url: 'http://localhost/ted/api/index.php/attend?transform=1',
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
