var text = "";
$.each($(".awesome").text().split(''),function(i, char){
  
  text += "<span>"+char+"</span>";
  console.log(char);
});
$(".awesome").html(text);

function fadeIn(){
	setTimeout(function(){
    $(".awesome span").addClass("in");
  },500);
}

fadeIn();