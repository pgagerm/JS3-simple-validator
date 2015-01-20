// JS3: Simple Validator

var phoneNumber = prompt("Please enter your phone number with dashes.\n" + 
	"(It won't be used for SPAM.)");

if (phoneNumber.charAt(4) === "-" && phoneNumber.charAt(8) === "-") {
	alert (true);
} else {
	alert (false);
}
}

