
alert("frfre");
function envoyer( form )
{
	form.submit();
}


$(document).ready(function(){

$("#btn11").click(function(){
$('#myModal').find(".lots-of-text").toggle();

$('#myModal').modal('handleUpdate')

}); 
});
var nom = '<?php echo $_SESSION['erreur']; ?>'; 
if (nom!="")
{
document.getElementById("btn11").click();
}