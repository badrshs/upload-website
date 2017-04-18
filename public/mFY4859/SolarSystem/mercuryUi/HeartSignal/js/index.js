var canvas;
var context;
var screenWidth;
var screenHeight;
var doublePI = Math.PI * 2;

var frequencyA = 20;
var amplitudeA = 40;
var frequencyB = 30;
var amplitudeB = 40;

var offsetA = 0;
var speedA = 0.12;
var offsetB = 0;
var speedB = 0.06;
var ballsAmount = 500;
var plotWidth = 720;
var waveQuality = 82;
var mousePosition = {x:0, y:0};
var gravity = 0.15;
var angularDamp = 1;
var bounce = 0.3;
var ball;
var gui;
var ballColors = ['#0A67A3', '#24587A', '#03426A', '#3E97D1', '#65A6D1'];
var waveColor = '#ecf0f1';
var balls = [];
var CanGetKey=0;

function StartHeart(){
	CanGetKey=1;
	//document.getElementById('Main').innerHTML = "Click -  Heart";
document.getElementById('Cont').setAttribute("Class","container");


}
function StopHeart(){
	document.getElementById('Cont').removeAttribute("Class");
}
function HartClick(){
	
	if (CanGetKey==1){
		StopHeart();
		document.getElementById('Main').innerHTML =("uranus Key Is : M0M0");
		
	//document.getElementById('Main').innerHTML = "uranus Key Is : M0M0";
	StartHeart();
	return;
	
	
	}
	if (amplitudeA >= 80){
			StartHeart();
		     	}else{
		   StopHeart();
	}
	
		
	
	//alert("wwwww");
	
}
window.onload = function()
{
	canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');







    window.onresize = function()
	{
		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight;

		canvas.width = screenWidth;
		canvas.height = screenHeight;

		plotWidth = screenWidth;
	};

	window.onresize();

	guiSetup();
	generateBalls();

	canvas.addEventListener('mousemove', function(e)
	{
		mousePosition.x = e.clientX;
		mousePosition.y = e.clientY;
	});

    loop();
};

function generateBalls()
{
	var i = 0;
	var length = ballsAmount - 1;

	for(i; i < length; ++i)
	{
		var ball = Ball.create();
		ball.x = Math.random() * plotWidth;
		ball.y = Math.random() * -200 - 20;
		ball.radius = (Math.random() * 12 + 6) >> 0;
		ball.color = ballColors[(Math.random() * ballColors.length) >> 0];

		balls.push(ball);
	}
}

function guiSetup()
{
	var controls =
	{
		amplitudeA: amplitudeA,
		frequencyA: frequencyA,
		amplitudeB: amplitudeB,
		frequencyB: frequencyB,
		waveQuality: waveQuality,
		speedA: speedA,
		speedB: speedB,
		gravity: gravity,
		bounce: bounce,

		explodeBalls: function()
		{
			explodeBalls();
		}
	};

	gui = new dat.GUI();

	gui.add(controls, 'amplitudeA', 0, 100).onChange(function(value){HartClick();amplitudeA = value;});
	gui.add(controls, 'frequencyA', 0, 80).onChange(function(value){HartClick();frequencyA = value;});
	gui.add(controls, 'amplitudeB', 0, 100).onChange(function(value){HartClick();amplitudeB = value;});
	gui.add(controls, 'frequencyB', 0, 80).onChange(function(value){HartClick();frequencyB = value;});
	gui.add(controls, 'waveQuality', 24, 256).onChange(function(value){HartClick();waveQuality = value;});
	gui.add(controls, 'speedA', 0.02, 0.4).onChange(function(value){HartClick();speedA = value;});
	gui.add(controls, 'speedB', 0.02, 0.4).onChange(function(value){HartClick();speedB = value;});
	gui.add(controls, 'explodeBalls');
}

window.getAnimationFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback)
{
	window.setTimeout(callback, 16.6);
};




function loop()
{
	context.fillStyle = '#2c3e50';
	context.fillRect(0, 0, screenWidth, screenHeight);

	updateBalls();

	drawWave();

	offsetA += speedA;
	offsetB += speedB;

	getAnimationFrame(loop);
}

function explodeBalls()
{
	var i = balls.length - 1;

	for(i; i > -1; --i)
	{
		var ball = balls[i];
		ball.vy = Math.random() * -16 - 6;
	}
}

function updateBalls()
{
	var i = balls.length - 1;

	for(i; i > -1; --i)
	{
		var ball = balls[i];
		ball.update();

		drawBall(ball);
	}
}

function drawWave()
{
	var i = 0;
	var length = waveQuality;
	var angleA = 0;
	var angleB = 0;
	var norm = 0;

	context.lineWidth = 16;
	context.strokeStyle = waveColor;
	context.beginPath();

	for(i; i < length; ++i)
	{
		norm = (i / length);
		angleA = norm * frequencyA;
		angleB = norm * frequencyB;

		if(i === 0) context.moveTo(0, (Math.sin(angleA + offsetA) * amplitudeA) + (Math.sin(angleB + offsetB) * amplitudeB) + (screenHeight >> 1));
		else context.lineTo(norm * plotWidth, (Math.sin(angleA + offsetA) * amplitudeA) + (Math.sin(angleB + offsetB) * amplitudeB) + (screenHeight >> 1));
	}

	context.stroke();
	context.closePath();
}

function drawBall(ball)
{
	context.fillStyle = ball.color;
	context.beginPath();
	context.arc(ball.x, ball.y, ball.radius, 0, doublePI);
	context.fill();
	context.closePath();
}

var Ball =
{
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
	radius: 8,
	color: '#506D82',

	create: function()
	{
		var obj = Object.create(this);

		return obj;
	},

	update: function()
	{
		this.vy += gravity + (this.radius * 0.005);
		this.x += this.vx;
		this.y += this.vy;

		var waveY = (Math.sin(offsetA + (this.x / plotWidth) * frequencyA) * amplitudeA) + (Math.sin(offsetB + (this.x / plotWidth) * frequencyB) * amplitudeB) + (screenHeight >> 1) - 12;

		if(this.y > waveY)
		{
			var impulseX = (Math.cos(offsetA + (this.x / plotWidth) * frequencyA)) + (Math.cos(offsetB + (this.x / plotWidth) * frequencyB));

			this.y = waveY;
			this.vy *= -bounce;
			this.vx += (amplitudeA > 0) ? (impulseX * Math.abs(this.vy)) * angularDamp : 0;
			
		}

		this.vx *= 0.99;

		if(this.x < -(this.radius >> 1)) this.x = plotWidth + (this.radius >> 1);
		if(this.x > plotWidth + (this.radius >> 1)) this.x = -(this.radius >> 1);
	}
};