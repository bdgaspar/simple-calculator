var result;
function add(){
	var Num1 = parseInt(document.getElementById("Num1").value);
	var Num2 = parseInt(document.getElementById("Num2").value);
	result = Num1 + Num2;
	document.getElementById("res").innerHTML = "The sum of " + Num1 + " and " + Num2 + " is " + result + ".";
}
function subtract(){
	var Num1 = parseInt(document.getElementById("Num1").value);
	var Num2 = parseInt(document.getElementById("Num2").value);
	result = Num1 - Num2;
	document.getElementById("res").innerHTML = "The difference of " + Num1 + " and " + Num2 + " is " + result + ".";
}
function multiply(){
	var Num1 = parseInt(document.getElementById("Num1").value);
	var Num2 = parseInt(document.getElementById("Num2").value);
	result = Num1 * Num2;
	document.getElementById("res").innerHTML = "The product of " + Num1 + " and " + Num2 + " is " + result + ".";
}
function divide(){
	var Num1 = parseInt(document.getElementById("Num1").value);
	var Num2 = parseInt(document.getElementById("Num2").value);
	result = Num1 / Num2;
	document.getElementById("res").innerHTML = "The quotient of " + Num1 + " and " + Num2 + " is " + result + ".";
}
function modulo(){
	var Num1 = parseInt(document.getElementById("Num1").value);
	var Num2 = parseInt(document.getElementById("Num2").value);
	result = Num1 % Num2;
	document.getElementById("res").innerHTML = "The remainder of " + Num1 + " and " + Num2 + " is " + result + ".";
}
