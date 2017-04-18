var current=1, total=0;

function next(){
if(current == total )
{
current = 1;
}
else
{
	++current;
}
startAJAX();
}

function back(){
	if(current == 1)
	{
		current = total;
	}
	else
	{
		--current;
	}
	startAJAX();
}

function startAJAX()
{
var request = false;
if(window.XMLHttpRequest)
{
request = new XMLHttpRequest();
}
else if (window.ActiveXobject){
request = new ActiveXobject("Microsoft.XMLHTTP");
}
if(request)
{
request.open("GET","book.xml",true);
request.onreadystatechange = function()
{
if(request.readyState == 4 && request.status == 200)
{
var titleTags = request.responseXML.getElementsByTagName("title");
var authorTags = request.responseXML.getElementsByTagName("author");
var lengthTags = request.responseXML.getElementsByTagName("length");
var yearTags = request.responseXML.getElementsByTagName("year");
var priceTags = request.responseXML.getElementsByTagName("price");
total = titleTags.length;
var myHTML = "<table>";
myHTML += "<tr><td class = 'heading'>Title:</td><td>" + titleTags[current - 1].firstChild.nodeValue + "</td></tr>";
myHTML += "<tr><td class = 'heading'>Author:</td><td>" + authorTags[current - 1].firstChild.nodeValue + "</td></tr>";
myHTML += "<tr><td class = 'heading'>Length:</td><td>" + lengthTags[current - 1].firstChild.nodeValue + "</td></tr>";
myHTML += "<tr><td class = 'heading'>Year:</td><td>" + yearTags[current - 1].firstChild.nodeValue + "</td></tr>";
myHTML += "<tr><td class = 'heading'>Price:</td><td>" + priceTags[current - 1].firstChild.nodeValue + "</td></tr></table>";
document.getElementById("output").innerHTML=myHTML;
console.log("Adjusted value of current value is" + (current-1)+".");
}
}
request.send();
}
else
{
document.getElementById("output").innerHTML = "<span class='unsupported'>AJAX doesn't support</span>";
}
}