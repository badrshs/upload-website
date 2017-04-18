
///////////////////////// Start maskup input ////////////////////////

//////////////////////////// start Slider bar Bottom /////////////////

var hideBottomBar = function() {
	var hideBtn = $("#hideBtn");
	var bottomBar = $('.bottom-bar');
	var bottomBarHeight = bottomBar.outerHeight();

	hideBtn.on("click", function(){
		if (parseInt(bottomBar.css("bottom"), 10) === 0) {
	        bottomBar.animate({
				bottom: "-"+bottomBarHeight+"px"
			}, 200);
	    }
	    else {
	    	bottomBar.animate({
				bottom: "0"
			}, 200);
	    }
	});
}

$(document).ready(function() {
	hideBottomBar();
});

$(window).on("resize", function() {
	hideBottomBar();
});
//////////////////////////// End Slider bar Bottom /////////////////

///////////////////// Start auto skip Input ////////////////////////

$(document).ready(function() {
	var dateField = $("#date"),
       codeField = $("#codeinput"),
       cmptField = $("#ncompteinput"),
       libelleField = $("#libelleinput"),
       debitField = $("#debitinput"),
       creditField = $("#creditinput");
	dateField.on("keyup", function() {
		var dateFieldVal = dateField.val();
          
        
		if (dateFieldVal.length == 2 || dateFieldVal.length == 5) {
			dateField.val(dateFieldVal+"/");
		}
		if (dateFieldVal.length == 8) {
			$("#codeinput").focus();
		}
        });
    
     codeField.on("keyup", function() {
		var codeFieldd = codeField.val();
      
		if (codeFieldd.length == 3) {
			$("#ncompteinput").focus();
		}
        });
     codeField.on("keyup", function() {
		var codeFieldd = codeField.val();
      
		if (codeFieldd.length == 3) {
			$("#ncompteinput").focus();
		}
        });
    
      cmptField.on("keyup", function() {
		var cmptFieldd = cmptField.val();
      
		if (cmptFieldd.length == 8) {
			$("#libelleinput").focus();
		}
       });
    
      libelleField.on("keyup", function() {
		var libelleFieldd = libelleField.val();
      
		if (libelleFieldd.length == 50) {
			$("#debitinput").focus();
		}
       });
    
      debitField.on("keyup", function() {
		var debitFieldd = debitField.val();
      
		if (debitFieldd.length == 4) {
			$("#creditinput").focus();
		}
       });
    
      creditField.on("keyup", function() {
		var creditFieldd = creditField.val();
      
		if (creditFieldd.length == 4) {
			$("#date").focus();
		}
       });
    
});
///////////////////// End auto skip Input //////////////////////// 


