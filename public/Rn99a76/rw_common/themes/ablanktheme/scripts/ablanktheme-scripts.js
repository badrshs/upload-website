// 'ablanktheme' is the global object for ablanktheme theme functions
var ablanktheme = {};
// Reduce potential conflicts with other scripts on the page
ablanktheme.jQuery = jQuery.noConflict(true);
var $ablanktheme = ablanktheme.jQuery;
// Create a unique object and namespace for theme functions
ablanktheme.themeFunctions = {};
// Define a closure
ablanktheme.themeFunctions = (function() {
    // When jQuery is used it will be available as $ and jQuery but only inside the closure
    var jQuery = ablanktheme.jQuery;
    var $ = jQuery;
	var $ablanktheme = jQuery.noConflict();
	

// Function to fade-in the page when the window has finished loading.
// Adjust the delay and fade-in speeds accordingly. Speeds are specified in milliseconds.		
$ablanktheme(window).load(function(){
	$ablanktheme('#pageWrapper').delay(500).fadeIn(2000);
});

	
})(ablanktheme.themeFunctions);
