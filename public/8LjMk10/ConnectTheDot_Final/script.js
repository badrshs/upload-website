//Animating Food names

var names = [
    'burger <img src="images/foodicon_burger.png" alt="burger" style="height:50px;">',
    'pizza <img src="images/foodicon_pizza.png" alt="pizza" style="height:50px;">',
    'taco <img src="images/foodicon_taco.png" alt="taco" style="height:50px;">',
    'salad <img src="images/foodicon_salad.png" alt="salad" style="height:50px;">',
    'pasta <img src="images/foodicon_pasta.png" alt="pasta" style="height:50px;">'];

setInterval(function() {
  var rand = Math.floor(Math.random() * 5);
  document.getElementById("name").innerHTML = names[rand];
}, 1000);



//Make the dots

var dot = document.getElementById("dot");


var myObject = {
            x: 30,
            y: 40,
            clicked: false,
            id:0
        }


var myArray= [
	myObject,
    //dot top
	{x: 130, y: 5,  clicked: false, id: 1},
	{x: 240, y: 20, clicked: false, id: 2},
	{x: 350, y: 5,  clicked: false, id: 3},
    {x: 450, y: 40, clicked: false, id: 4},
    //dot bottom
    {x: 380, y: 75, clicked: false, id: 5},
    {x: 290, y: 70, clicked: false, id: 6},
    {x: 190, y: 70, clicked: false, id: 7},
    {x: 100, y: 75, clicked: false, id: 8},
];


//When dots are clicked

for(var i = 0; i < myArray.length; i++){
	myDots.innerHTML += "<p class='dot' id=id_"+myArray[i].id+" onclick='clicked("+i+")' style='top:"+myArray[i].y+"px; left:"+myArray[i].x+"px'>"+i+"</p>";
}
canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");

ctx.canvas.width = '498';
ctx.canvas.height = '100';



function clicked(number){
	var elementClicked =document.getElementById("id_"+number);
	if (number > 0) {
		previousClicked = myArray[number-1].clicked;
		//console.log(previousClicked);
		if (previousClicked == true) {
			if(elementClicked.classList.contains("clicked")){
			//elementClicked.classList.remove("clicked");
			//myArray[number].clicked=false;
			//console.log(myArray[number].clicked);
			} else{
				elementClicked.classList.add("clicked");
				myArray[number].clicked=true;
				//console.log(myArray[number].clicked);
			}
		} else{
			alert("Missed a dot. Counting isn't as easy as it seems eh?");
		}
		
	} else{ //the first element is set to clicked/changes color
		elementClicked.classList.add("clicked");
		myArray[number].clicked=true;
	}
	
    
    //draw the lines
    if(number >0){
    	previousClicked =myArray[number-1].clicked;
    	console.log(number-1+ " "+previousClicked);
    	if (previousClicked == true) {
    		//define the start coordinates of the line
	        pxstart=myArray[number-1].x+10;
	        pystart=myArray[number-1].y+10;
	        //define the end coordinates of the line
	        pxend=myArray[number].x+10;
	        pyend=myArray[number].y+10;

	        //console.log(pxstart + ' '+ pystart);
	        //console.log(pxend + ' '+ pyend);

	        ctx.strokeStyle = "#f5ff00";
            ctx.lineWidth=3;
	        ctx.moveTo(pxstart,pystart); //start the line from here
	        ctx.lineTo(pxend, pyend); //end point of the line
	        ctx.stroke();

	        //if it is the last dot connect it to the first dot
	        lastDot = myArray.length-1;
	        //console.log(lastDot);
		    if (number == lastDot) {
		        pxstart=myArray[number].x+10;
		        pystart=myArray[number].y+10;
		        //define the end coordinates of the line
		        pxend=myArray[0].x+10;
		        pyend=myArray[0].y+10;

		        //console.log(pxstart + ' '+ pystart);
		        //console.log(pxend + ' '+ pyend);

		        ctx.strokeStyle = "#f5ff00";
                ctx.lineWidth=3;
		        ctx.moveTo(pxstart,pystart); //start the line from here
		        ctx.lineTo(pxend, pyend); //end point of the line
		        ctx.stroke();
	        }
    	}
    	


    }
    
    
    
	
	var allClicked=false;
	//TO DO: if all elements have been clicked set allClicked variable to true
	for(var i =0; i< myArray.length; i++){
		//console.log("number:"+i+ " clicked: "+myObjectArray[i].clicked);
		if(myArray[i].clicked){
			allClicked = true;
		} else{
			allClicked = false;
			break;
		}
	}

	if(allClicked){
		alert("YA$$$ All dots are connected!");
		vegfood = document.getElementById("vegfood");
		vegfood.classList.add("vfvisible");
        footer = document.getElementById("footer");
		footer.classList.add("fvisible");

	}
}