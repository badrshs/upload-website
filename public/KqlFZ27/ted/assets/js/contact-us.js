function _(id) { return document.getElementById(id); }
function submitform() {
  _("mybtn").disabled = true;
  _("status").innerHTML = 'Please Wait....';
  formdata.append( "e", _("e").value);
  formdata.append( "m", _("m").value);
  var ajax = new XMLHttpRequest();
  ajax.open( "POST", "contact-us.php");
  ajax.onreadystatechange = function () {
    if(ajax.readystate == 4 && ajax.status == 200) {
      if(ajax.responseText == "success"){
            _("my_form").innerHTML = '<h1>Thanks for contact us</h1> ';
      } else {
        _("status").innerHTML = ajax.responseText;
        _("mybtn").disabled = false;
      }
    }
  }
  ajax.send( formdata );
}
