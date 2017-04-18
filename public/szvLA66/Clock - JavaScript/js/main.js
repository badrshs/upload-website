/* JavaScript By Mohammed Boujir */

var d = document;
var dateStr, timeStr;

function myClock(){

	dateStr = new Date();

	var Year = dateStr.toString().split(" ")[3],
		Hours = dateStr.getHours(),
		Minutes = dateStr.getMinutes(),
		Seconds = dateStr.getSeconds();
		
	function checkZero(inp) {
		
		if (parseInt(inp) < 10) {
			
			return "0" + escape(inp);
			
		} else {
			
			return inp;
			
		}
		
	}

	timeStr = checkZero(Hours) + " : ";
	timeStr += checkZero(Minutes) + " : ";
	timeStr += checkZero(Seconds) + " " + (Hours < 12 ? "AM" : "PM");

	d.getElementById("myClock").innerHTML = timeStr;

	setTimeout("myClock()", 1000);

}


/* JavaScript By Mohammed Boujir */