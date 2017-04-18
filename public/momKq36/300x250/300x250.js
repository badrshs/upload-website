$(function(){
 	//load Spritesheet
 	run.loadSpriteSheet();
});

var time = 1;
var repeatCount = 0;
var loopCount = 1;
 
var panelStatus = false;

var run = {

	//LOAD IMAGES/SPRITESHEET
	loadSpriteSheet:function(){
		var loadedImages = 0;
		var imageArr = [
			'text1.png', 'text2.png', 'specialty1.png', 'wave.png', 'meet.png','logo.png', 'photo.png', 'learn.png', 'map.png', 'located.png'
		];

		preloadImages();

		function preloadImages(){
			for(var i = 0; i<imageArr.length;i++){
				var tempImage = new Image();
				tempImage.src = imageArr[i];
				tempImage.onload = function (){
					trackProgress();
				}
			}
		}

		function trackProgress(){
			loadedImages++;
			if(loadedImages == imageArr.length){
				loadjsCssFile("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js",  run.setupElements);
				console.log('ELEMENTS SET AND LOADED');
			}
		}

	},

	//SETUP ELEMENTS
	setupElements:function(){
		$click = $('.click')
			.click(function(){
				EB.clickthrough();
			})
			.css('display','inline');
			
		$wave = $('.wave').css('display','inline');
		$specialty1 = $('.specialty1').css('display','inline');
		
		$text1 = $('.text1').css('display','inline');
		$text2 = $('.text2').css('display','inline');
		
		$photo = $('.photo').css('display','inline');
		$meet = $('.meet').css('display','inline');
		$learn = $('.learn').css('display','inline');
		$logo = $('.logo').css('display','inline');
		$bgstart = $('.bgstart').css('display','inline');
		$map = $('.map').css('display','inline');
		$located = $('.located').css('display','inline');
	
		
	
		run.sceneOne();//Start animation
	
	},
	
	
	//ANIMATION
	sceneOne:function(){
		//text animation
				
		TweenMax.from($wave, .6, {delay: 0.1, opacity:1, y: '+=200px', ease:Linear.easeNone});
		TweenMax.from($meet, .1, {delay: .8, opacity:0, ease:Linear.easeNone});
		TweenMax.from($learn, .1, {delay: .8, opacity:0, ease:Linear.easeNone});
		TweenMax.from($logo, .1, {delay: .8, opacity:0, ease:Linear.easeNone});
		//TweenMax.to($photo, .1, {delay: 2, y:'+=450px', ease:Linear.easeNone});	

		TweenMax.to($bgstart, 1.0, {delay: 2.0, opacity:0, ease:Linear.easeNone});
		
		
		TweenMax.to($text1, 1.0, {delay: 2.0, opacity:0, ease:Linear.easeNone});
		TweenMax.from($text2, 1.0, {delay: 2.5, opacity:0, ease:Linear.easeNone});	
	
		TweenMax.to($text2, .8, {delay: 3.5,  scaleX: .6, scaleY: .6, x: '-42px', y: '-18px',ease:Linear.easeNone});
		TweenMax.from($photo, 2.0, {delay: 4, y: '+250px', ease:Linear.easeNone});
		
		TweenMax.to($text1, 1.0, {delay:4.0, opacity:0, ease:Linear.easeNone});
		TweenMax.to($text2, 1.0, {delay: 5.5, opacity:0, ease:Linear.easeNone});


			
		TweenMax.from($specialty1, 1.0, {delay:6, opacity: 0, ease:Linear.easeNone});

		
		TweenMax.to($specialty1, 1.0, {delay: 9, opacity: 0, ease:Linear.easeNone});
		TweenMax.to($photo, 1.0, {delay: 9, opacity: 0, ease:Linear.easeNone});
		
		TweenMax.to($map, 0, {delay: 9.8, opacity: 0, top: '10px',ease:Linear.easeNone});
		TweenMax.to($map, 1.0, {delay: 10, opacity: 1, ease:Linear.easeNone});
		TweenMax.to($map, 1.0, {delay: 11.5, scaleX: .8, scaleY: .8, x: '75px', y: '0',ease:Linear.easeNone});
		TweenMax.from($located, .5, {delay: 12.5, opacity: 0, x:'+=200', ease:Linear.easeNone});
	
		
	},
	
	
	

};

function onRepeat() {
  repeatCount++;
  if (repeatCount < loopCount){
 	 run.sceneOne();//Start animation
  };
  
  
}	





//LOAD JAVASCRIPT/CSS
function loadjsCssFile(filename,func){//https://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
	var filetype = filename.substring(filename.lastIndexOf('.')+1);
	if(filetype == 'js'){
		var fileref = document.createElement('script');
		fileref.setAttribute('src', filename);
	}
	else if(filetype == 'css'){
		var fileref = document.createElement('link');
		fileref.setAttribute('rel','stylesheet');
		fileref.setAttribute('href', filename);
	}
	if(typeof fileref!= 'undefined'){
		if(func){
			if(fileref.readyState){//IE
				fileref.onreadystatechange = function(){
					if(fileref.readyState == "loaded" || fileref.readyState == "complete"){
						fileref.onreadystatechange = null;
						//console.log("THIS WORKS " +func);
						func();
					}
				};
			}
			else{//other browsers
				fileref.onload = function (){
				//console.log("THIS WORKS " +func);
				func();
				}
			}
		}
		document.getElementsByTagName('head')[0].appendChild(fileref);
	}
	console.log("FILE LOADED = "+filename+" FILE TYPE = "+filetype);
}

