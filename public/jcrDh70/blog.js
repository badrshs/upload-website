function  Hoverbuttom() 
{
	    document.getElementById('btn').style.backgroundColor="#585";

}

function  Hover() 
{
	    document.getElementById('btn').style.backgroundColor="#00BC8A";

}

function show()
{
    document.getElementById('btn2').style.visibility="visible";

}
function hide()
{
      document.getElementById('btn2').style.visibility="hidden";

}

var n=0;
function havered()
{
n=n+1;
document.getElementById('img1').innerHTML= n;
document.getElementById('img2').innerHTML= n;
document.getElementById('img3').innerHTML= n;
}



function overed(){
document.getElementById('h1').style.visibility="visible";
}


function overed2(){
document.getElementById('h2').style.visibility="visible";
}


function overed3(){
document.getElementById('h3').style.visibility="visible";
}



function clc(){
document.getElementById('tw').style.color="#f00";
}


function valid(){

var x=window.prompt("Enter your name:?");
if (x == "eslam") {
	window.location="index.html";
	alert("Welcome "+ x +  "  Design Template Using ( HTML - CSS - JS )");
 }
 else{
 	alert("wrong name");
 }

}



