/*global $, alert, console*/

$(function () {
	
	'use strict';
	
	// Trigger Nice Scrool Plugin
	
	$('html').niceScroll();
	
	// Progress 1
var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d'); 
var color = '#30bae7'; 
	canvas.width = 500;
	canvas.height = 500;	
var maxValue = 90;
var angle =  1.5*Math.PI+Math.PI*2*maxValue/100 ;
	ctx.beginPath();
	ctx.lineWidth = 8;
	ctx.strokeStyle="#1e1e1e";
	ctx.arc(250 ,250 ,100 ,1.5*Math.PI ,angle);
	ctx.strokeStyle = color;
	ctx.strokeStyle = color;
	ctx.font = 30 + "px Arial";
	ctx.fillText(maxValue+"%" ,220,250);
	ctx.stroke();
	ctx.closePath();
	
		// Progress 2
var canvas = document.getElementById('canvas2'); 
var ctx = canvas.getContext('2d'); 
var color = '#d74680'; 
	canvas.width = 500;
	canvas.height = 500; 	
var maxValue = 70;
var angle =  1.5*Math.PI+Math.PI*2*maxValue/100 ;
	ctx.beginPath();
	ctx.lineWidth = 8;
	ctx.strokeStyle="#1e1e1e";
	ctx.arc(250 ,250 ,100 ,1.5*Math.PI ,angle);
	ctx.strokeStyle = color;
	ctx.strokeStyle = color;
	ctx.font = 30 + "px Arial";
	ctx.fillText(maxValue+"%" ,220,250);
	ctx.stroke();
	ctx.closePath();
		// Progress 3
var canvas = document.getElementById('canvas3'); 
var ctx = canvas.getContext('2d'); 
var color = '#15c7a8';	
	canvas.width = 500;
	canvas.height = 500;	
var maxValue = 75;
var angle =  1.5*Math.PI+Math.PI*2*maxValue/100 ;
	ctx.beginPath();
	ctx.lineWidth = 8;
	ctx.strokeStyle="#1e1e1e";
	ctx.arc(250 ,250 ,100 ,1.5*Math.PI ,angle);
	ctx.strokeStyle = color;
	ctx.strokeStyle = color;
	ctx.font = 30 + "px Arial";
	ctx.fillText(maxValue+"%" ,220,250);
	ctx.stroke();
	ctx.closePath();
			// Progress 4
var canvas = document.getElementById('canvas4'); 
var ctx = canvas.getContext('2d'); 
var color = '#ec8657';
	canvas.width = 500;
	canvas.height = 500;	
var maxValue = 85;
var angle =  1.5*Math.PI+Math.PI*2*maxValue/100 ;
	ctx.beginPath();
	ctx.lineWidth = 8;
	ctx.strokeStyle="#1e1e1e";
	ctx.arc(250 ,250 ,100 ,1.5*Math.PI ,angle);
	ctx.strokeStyle = color;
	ctx.strokeStyle = color;
	ctx.font = 30 + "px Arial";
	ctx.fillText(maxValue+"%" ,220,250);
	ctx.stroke();
	ctx.closePath();
});