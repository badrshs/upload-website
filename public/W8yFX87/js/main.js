var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

// for computer browsers

var putpoint = function(e){
	if(dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

var engage = function(e){
	dragging = true;
	putpoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mousedown' , engage);
canvas.addEventListener('mousemove', putpoint);
canvas.addEventListener('mouseup' , disengage);

// for mobile browsers

var start = function(e) {
		dragging = true;
		move(e);
	};

var move = function(e) {
	e.preventDefault();
	if(dragging){
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY;
		context.lineTo(x, y);
		context.stroke();
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(x, y);
		}
	};
var stop = function(){
	dragging = false;
	context.beginPath();
	};

canvas.addEventListener('touchstart',start);
canvas.addEventListener('touchmove', move);
canvas.addEventListener('touchend', stop);