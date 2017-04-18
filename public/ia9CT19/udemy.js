

"use strict";

var secondremaning,
	intervalhandle;


function resetpage(){
	
	document.getElementById("inputarea").style.display="block";
}

function tick() {
	
	
	
	var timedisplay = document.getElementById("time");
	
	var min = Math.floor(secondremaning / 60);
	var sec = secondremaning - (min *60);
	
	if (sec < 10){
		
		sec ="0"+ sec;
	}
	 var message =min + ":" + sec;
	
	timedisplay.innerHTML= message;
	
	if(secondremaning === 0 ) {
		
		alert("done");
		
		clearInterval(intervalhandle);
		
		resetpage();
		
		
	}
	
	secondremaning--;
	
}





function startcountdowen() {
	
	var minuts =document.getElementById("minutes").value;
	
	if(isNaN(minuts)){
		alert("please enter anumber");
		return;
	};
	
	secondremaning= minuts*60;
	
	intervalhandle = setInterval(tick,1000);
	document.getElementById("inputarea").style.display="none";
	
};





window.onload = function () {
	
	var inputminutes = document.createElement("input");
	inputminutes.setAttribute("id", "minutes");
	inputminutes.setAttribute("type", "text");
	
	var startbutton =document.createElement("input");
	startbutton.setAttribute("type", "button");
	startbutton.setAttribute("value", "satrtcountdowen");
	startbutton.onclick= function() {
		
			startcountdowen();
	};
	
	document.getElementById("inputarea").appendChild(inputminutes);
	document.getElementById("inputarea").appendChild(startbutton);
	
};


