// JS3: Simple Validator

var phoneNumber = prompt("Please enter your phone number with dashes.\n" + 
	"(It won't be used for SPAM.)");

if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") {
	alert(true);
} else {
	alert(false);
}

var birthDate = prompt("Please enter your birthdate (xx/xx/xx)");

if (birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/") {
	alert(true);
} else {
	alert(false);
}

var postalCode = prompt("Please enter your postal code (xxxxx)");

if (postalCode.length === 5) {
	alert(true);
} else {
	alert(false);
}

var state = prompt("Please enter your state abbreviation");

if (state.length === 2 && state === state.toUpperCase()) {
	alert(true);
} else {
	alert(false);
}

var maritalStatus = prompt("Please enter your marital status (yes or no)");

maritalStatus = maritalStatus.toUpperCase();

if (maritalStatus === "YES" || maritalStatus === "NO") {
	alert(true);
} else {
	alert(false);
}