var canvas;
var context;
var screenWidth;
var screenHeight;
var doublePI = Math.PI * 2;

var frequencyA = 10;
var amplitudeA = 30;
var frequencyB = 2;
var amplitudeB = 16;

var offsetA = 0;
var speedA = 0.04;
var offsetB = 0;
var speedB = 0.02;
var plotWidth = 720;
var waveQuality = 340;
var mousePosition = {x:0, y:0};
var waveColor = '#F45';
var backgroundColor = '#312';
var gui;

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

		context.fillStyle = 0;
		context.fillRect(0, 0, screenWidth, screenHeight);
		
	};

	window.onresize();

	guiSetup();

	canvas.addEventListener('mousemove', function(e)
	{
		mousePosition.x = e.clientX;
		mousePosition.y = e.clientY;
	});

    loop();
};

function guiSetup()
{
	var controls =
	{
		waveColor: waveColor,
		backgroundColor:backgroundColor,
		amplitudeA: amplitudeA,
		frequencyA: frequencyA,
		amplitudeB: amplitudeB,
		frequencyB: frequencyB,
		waveQuality: waveQuality,
		speedA: speedA,
		speedB: speedB
	};

	gui = new dat.GUI();
	
	gui.addColor(controls, 'waveColor').onChange(function(value){waveColor = value;});
	gui.addColor(controls, 'backgroundColor').onChange(function(value){backgroundColor = value;});
	gui.add(controls, 'amplitudeA', 0, 100).onChange(function(value){amplitudeA = value;});
	gui.add(controls, 'frequencyA', 0, 80).onChange(function(value){frequencyA = value;});
	gui.add(controls, 'amplitudeB', 0, 100).onChange(function(value){amplitudeB = value;});
	gui.add(controls, 'frequencyB', 0, 80).onChange(function(value){frequencyB = value;});
	gui.add(controls, 'speedA', 0.0, 0.4).onChange(function(value){speedA = value;});
	gui.add(controls, 'speedB', 0.0, 0.4).onChange(function(value){speedB = value;});
	gui.add(controls, 'waveQuality', 24, 512).onChange(function(value){waveQuality = value;});
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
	context.globalAlpha = 0.03;
	context.fillStyle = backgroundColor;
	context.fillRect(0, 0, screenWidth, screenHeight);
	context.globalAlpha = 1;

	drawWave();

	offsetA += speedA;
	offsetB += speedB;

	getAnimationFrame(loop);
}

function drawWave()
{
	if (amplitudeA >= 80 && frequencyA >= 40 && amplitudeB >= 80 && frequencyB >= 40 && waveQuality >= 100){
			
			
			alert("Pluto lisa m5lsh");
			
	}
	
	var i = 0;
	var length = waveQuality;
	var angleA = 0;
	var angleB = 0;
	var norm = 0;

	context.lineWidth = 2;
	context.strokeStyle = waveColor;
	context.beginPath();

	for(i; i < length; ++i)
	{
		norm = (i / length);
		angleA = norm * frequencyA;
		angleB = norm * frequencyB;

		var px = norm * plotWidth;
		var py = (Math.sin(angleA + offsetA) * amplitudeA) + (Math.sin(angleB + offsetB) * amplitudeB) + (screenHeight >> 1);
		var r = Math.sqrt(px * px + py * py) * 0.25;
		var theta = Math.atan(py / px) * 180 / doublePI;

		if(i === 0) context.moveTo(Math.cos(theta) * r + (screenWidth >> 1), Math.sin(theta) * r + (screenHeight >> 1));
		else context.lineTo(Math.cos(theta) * r + (screenWidth >> 1), Math.sin(theta) * r + (screenHeight >> 1));
	}

	context.stroke();
	context.closePath();
}