		var canvas = document.getElementById("can");
		var rasm = canvas.getContext("2d");
		rasm.beginPath();
		rasm.font = "50px jf flat";
		rasm.fillText("أهلا",250,150);
		rasm.fillText("إضغط على شاشة لتبدأ",80,200);
		rasm.stroke();
		rasm.closePath();
		 
		var imgr = document.getElementById("res");
		var imgc = document.getElementById("chiaar");
		
		//
			
		
		canvas.onclick = function(zebda){
			rasm.clearRect(0,0,600,300);
			canvas.style.cursor="pointer";
			rasm_resistance();
		} 
		function  rasm_resistance(){
			var fcolor = document.getElementById("fcolor").value;
			var scolor = document.getElementById("scolor").value;
			var tcolor = document.getElementById("tcolor").value;
			var lcolor = document.getElementById("lcolor").value; 
			var colorn = ["black","brown","red","orange","yellow","green","blue","violet","grey","white","gold"];
			var i = 0;
			var tcol;
			var colorf = ["5%","10%"];	
			var colorfn = ["gold","grey"];	
			var isab = fcolor + scolor + " x " +  10 + "^" +  Number(tcolor) + "Ω  With an error : " + colorf[lcolor];
			
			setInterval(rasm_resistance,500);
			rasm.beginPath();
				rasm.fillStyle= "efefef";
				rasm.drawImage(imgr, 60, 110);
				rasm.drawImage(imgc, 400, 10);
			rasm.closePath();
			//
			rasm.beginPath();
				rasm.fillStyle= colorn[fcolor];
				rasm.fillRect(214,114,20,66);
			rasm.closePath();
			//
			rasm.beginPath();
				rasm.fillStyle= colorn[scolor];
				rasm.fillRect(245,114,20,66);
			rasm.closePath();
			//
			rasm.beginPath();
				rasm.fillStyle= colorn[tcolor];
				rasm.fillRect(276,114,20,66);
			rasm.closePath();
			//
			rasm.beginPath();
				rasm.fillStyle= colorfn[lcolor];
				rasm.fillRect(355,114,30,66);
			rasm.closePath();
			//
			rasm.beginPath();
				rasm.clearRect(100,232,350,100);
				rasm.fillStyle ="black";
				rasm.font = "20px sans-serif";
				rasm.fillText(isab,180,250);
			rasm.closePath();
		}
		
		
		/*
		canvas.onmousemove = function(zebda){
			canvas.style.cursor="pointer";
			var write = document.getElementById("xy");
			var x = zebda.layerX;
			var y = zebda.layerY;
			rasm.beginPath();
			rasm.clearRect(1,0,150,50);
			rasm.fillStyle="black";
			rasm.font = "20px sans-serif";
			rasm.fillText("X:" + x + " Y:" + y,10,30);
			rasm.closePath();
		}
		*/
		
		