// JavaScript Document
$(document).ready(function(){
	
  $('#upload').click(function() {
    if($(this).css("margin-top") == "0px")
    {
        $('#upload_container').animate({"margin-top": '-=250'});
        $('#upload').animate({"margin-top": '-=250'});
    }
    else
    {
        $('#upload_container').animate({"margin-top": '+=250'});
        $('#upload').animate({"margin-top": '+=250'});
    }


  });
 });