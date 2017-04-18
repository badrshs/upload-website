


$(function(){
  /* creating stars */
  for (i = 0; i < 75; i++){
	  
 
    $(".stars-wrapper").append("<div class='stars s" + i +"'></div>");  
 }


 $(".plnt").click(function(){
	 $("#PLANETNAME").text(this.getAttribute("id"));
	 var Name=this.getAttribute("id");
	 if (Name=="sun"){
		 
		 location+="solarSun/index.html";
	 }
	  if (Name=="mercury"){
		  location+="mercury/";
		 } 
		 
		 if (Name=="venus"){
		  location+="venus/noize/index.html";
		 } 
		  if (Name=="earth"){
		  location+="earth/index.html";
		 } 
	 //mercury
	// alert(this.getAttribute("id"));
 }); 


 });