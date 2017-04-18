function checkFields() {
	if (document.getElementById("fullname").value == "") {
	alert("Please enter your first and last name.");
	return false; }
	//check for the @ symbol
	if (document.getElementById("email").value.indexOf("@") == -1) {
	alert("The email you entered does not contain the @ symbol.");
	return false;
	}
	//email address must have at least one period
	if (document.getElementById("email").value.indexOf(".") == -1) {
	alert("The email you entered is not valid. Please try again.");
	return false;
	}
}