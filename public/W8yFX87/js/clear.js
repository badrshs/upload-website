
var clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearImage);

function clearImage(){
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
};
