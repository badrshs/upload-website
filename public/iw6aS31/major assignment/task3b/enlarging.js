var big=true;


function enlarge(){

var x= document.getElementById("picture").style.width;
var y= document.getElementById("picture").style.height;

x= x.match(/\d+/);
y= y.match(/\d+/);
var h=screen.height;
var w=screen.width;

if((x<400)&&(y<400)&&(big==true))
{
x++;
y++;
var hy = h/2-y/2;
var wx = w/2-x/2;
document.getElementById("picture").style.width=x+"px";
document.getElementById("picture").style.height=y+"px";
document.getElementById("picture").style.top=hy+"px";
document.getElementById("picture").style.left=wx+"px";
setTimeout("enlarge()",5);
}


if((x==400)&&(y==400)&&(big==true))
{
big = false;
x++;
y++;
var hy = h/2-y/2;
var wx = w/2-x/2;
document.getElementById("picture").style.width=x+"px";
document.getElementById("picture").style.height=y+"px";
document.getElementById("picture").style.top=hy+"px";
document.getElementById("picture").style.left=wx+"px";
setTimeout("enlarge()",5);

}


if((big==false)&&(x>0)&&(y>0))
{

x--;
y--;
var hy = h/2-y/2;
var wx = w/2-x/2;
document.getElementById("picture").style.width=x+"px";
document.getElementById("picture").style.height=y+"px";
document.getElementById("picture").style.top=hy+"px";
document.getElementById("picture").style.left=wx+"px";

setTimeout("enlarge()",5);

}

if((big==false)&&(x==0)&&(y==0))
{
big = true;
x++;
y++;
var hy = h/2-y/2;
var wx = w/2-x/2;
document.getElementById("picture").style.width=x+"px";
document.getElementById("picture").style.height=y+"px";
document.getElementById("picture").style.top=hy+"px";
document.getElementById("picture").style.left=wx+"px";

setTimeout("enlarge()",5);

}

}


