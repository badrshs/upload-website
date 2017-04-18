


$(function(){
  /* creating stars */
  for (i = 0; i < 75; i++){
	  
 
    $(".stars-wrapper").append("<div class='stars s" + i +"'></div>");  
 }



 $(".plnt").click(function(){
	 $("#PLANETNAME").text(this.getAttribute("id"));
	 var Name=this.getAttribute("id");
	 if (Name=="sun"){
		 
		 location+="solarSunUi/index.html";
	 }
	  if (Name=="mercury"){
		  location+="mercuryUi/";
		 } 
		 
		 if (Name=="venus"){
		  location+="venus/noizeUi/index.html";
		 } 
		  if (Name=="earth"){
		  location+="earthUi/index.html";
		 } 
		 
		  if (Name=="mars"){
		  location+="marsUi/index.html";
		 }
		 
		   if (Name=="jupiter"){
		  location+="jupiterUi/index.html";
		 }
		 
		   if (Name=="saturn"){
		  location+="saturnUi/index.html";
		 }
	  
	
	  
		 	   if (Name=="pluto"){
				alert("locked Get Pass From neptune");
				
		 // location+="pluto/index.html";
		 }
		 
		//saturn'

	 //mercury
	// alert(this.getAttribute("id"));
 }); 


 });

