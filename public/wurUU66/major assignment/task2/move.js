var dom;
var fx=800,fy=800;
var mb=false,h=true;
function loadPic(){
  dom=document.getElementById('pic').style;
  var x=dom.left;
  var y=dom.top;

  x=x.match(/\d+/);
  y=y.match(/\d+/);

  movePic(x,y);
}

function movePic(x,y){
    if(h==true){
	if(x>0){ 
       if (x >= fx){
		   x--;
		   mb=true;
	   }
       else if ((x < fx)&&(mb==true)) {
			 x--;
		}
	   else {
			 x++;
		}
    }
	else{
		x++;
		mb=false;
	}
	}
    else{
	if(y>0){
    if (y >= fy){
		   y--;
		   mb=true;
	   }
    else if ((y < fy)&&(mb==true)) {
			 y--;
		}
	else{
			 y++;
		}
	}
	else{
		y++;
		mb=false;
	}
	}

	
    if((x!=fx)||(y!=fy)){
    dom.left=x+"px";
    dom.top=y+"px";
    setTimeout("movePic("+x+","+y+")",1);
  }
}

function changePic(){
  var x=dom.left;
  var y=dom.top;

   /* Convert the string values of left and top to 
      numbers by stripping off the units */

  x=x.match(/\d+/);
  y=y.match(/\d+/);
  if(h==true){
	  h=false;
  }
  else{
	  h=true;
  }
  movePic(x,y);
}