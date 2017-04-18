var dom,x,y,startx=0,starty=0,finalx=300,finaly=300;
var diagonal=true;
var direction;

function loadPic(){
dom=document.getElementById('pic').style;
x=dom.left;
y=dom.top;

x=x.match(/\d+/);
y=y.match(/\d+/);

moveImageForward(x,y);
}

function changePattern(){
if(diagonal==true){
diagonal=false;
}
else{
diagonal=true;
}
}

function moveImageForward(x,y){
if(x<finalx){
x++;
}

if(y<finaly){
if(diagonal==true){
y++;
}
}

if((x!=finalx)&&(y!=finaly)){
dom.left=x+"px";
dom.top=y+"px";
setTimeout("moveImageForward("+x+","+y+")",1);
}
else{
setTimeout("moveImageBackward("+x+","+y+")",1);
}
}

function moveImageBackward(x,y){
if(x>startx){
x--;
}

if(y>starty){
if(diagonal==true){
y--;
}
}

if((x!=startx)&&(y!=starty)){
dom.left=x+"px";
dom.top=y+"px";
setTimeout("moveImageBackward("+x+","+y+")",1);
}
else{
setTimeout("moveImageForward("+x+","+y+")",1);
}
}