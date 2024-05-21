// question 1

//var cityName = prompt("Enter the name of the city: ");

//if (cityName.toLowerCase() === "karachi") {
//alert("Welcome to the city of lights!");
//} else {
//alert("Welcome to " + cityName + "!");}

//question 2

//var gender = prompt("Enter your gender (male/female): ");

//if (gender.toLowerCase() === "male") {
//alert ("Good Morning Sir.");
//} else if (gender.toLowerCase() === "female") {
//alert ("Good Morning Ma'am.");
//} else {
//  alert ("Good Morning!");
//}

//question 3

// var trafficLight = prompt("Enter Traffic signal color (red/yellow/green)")

//if (trafficLight.toLowerCase()=== "red"){
//alert("Must stop");
//}
//else if (trafficLight.toLowerCase()=== "yellow"){
//alert("Ready to move");
//}
//else if (trafficLight.toLowerCase()=== "green"){
//alert("Move now");
//}

//question 4

//var fuelLevel = parseFloat(prompt("Enter the remaining fuel in litres: "));

//var message;

//if (fuelLevel < 0.25) {
  //  message = "Please refill the fuel in your car";
//} else {
  //  message = "You have sufficient fuel";
//}

//alert(message);

//question 5

//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}
//yes messages displays

//var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");
//}
//message is not displayed

//var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}
// message 2 and 4 is visible

//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}
//message is displayed

//if (true){
  //  alert("True");
    //}
    //if (false){
    //alert("False");
    //}
    //true message displayed

    //if("car" < "cat"){
      //  alert("car is smaller than cat");
        //}
//message visible

//question 6
//var totalMarks = 300; // assume total marks is 300
//var marksObtained = parseInt(prompt("Enter marks obtained in subject 1: ")) + 
                 //    parseInt(prompt("Enter marks obtained in subject 2: ")) + 
                   //  parseInt(prompt("Enter marks obtained in subject 3: "));

//var percentage = (marksObtained / totalMarks) * 100;

//if (percentage >= 80) {
  //var grade = "A-one";
  //var remarks = "Excellent";
//} else if (percentage >= 70) {
  //var grade = "A";
  //var remarks = "Good";
//} else if (percentage >= 60) {
  //var grade = "B";
  //var remarks = "You need to improve";
//} else {
  //var grade = "Fail";
  //var remarks = "Sorry";
//}

//document.write("Marks Sheet<br>");
//document.write("Total marks: " + totalMarks + "<br>");
//document.write("Marks obtained: " + marksObtained + "<br>");
//document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//document.write("Grade: " + grade + "<br>");
//document.write("Remarks: " + remarks + "<br>");

//question 7

//var secretNumber = 6;
//var userGuess = parseInt(prompt("Guess the secret number (1-10): "));
//var message;

//if (userGuess === secretNumber) {
  //message = "Bingo! Correct answer";
//} else if (userGuess + 1 === secretNumber) {
  //message = "Close enough to the correct answer";
//} else {
 // message = "Try again!";
//}

//alert(message);

//question 8

//var number = parseInt(prompt("Enter a number: "));

//if (number % 3 === 0) {
  //alert("The number is divisible by 3.");
//} else {
  //alert("The number is not divisible by 3.");
//}

//question 9

//var number = parseInt(prompt("Enter a number: "));

//var number = parseInt(prompt("Enter a number: "));

//if (number % 2 === 0) {
  //alert("The number is even.");
//} else {
  //alert("The number is odd.");
//}

//question 10

//var temperature = parseInt(prompt("Enter the temperature: "));
//var message;

//if (temperature > 40) {
  //message = "It is too hot outside.";
//} else if (temperature > 30) {
  //message = "The Weather today is Normal.";
//} else if (temperature > 20) {
 // message = "Today's Weather is cool.";
//} else if (temperature > 10) {
  //message = "OMG! Today's weather is so Cool.";
//} else {
  //message = "Please enter a valid temperature.";
//}

//alert(message);

//question 11

var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  var result = parseFloat(num1) + parseFloat(num2);
  alert("The result is: " + result);
} else if (operation === "-") {
  var result = parseFloat(num1) - parseFloat(num2);
  alert("The result is: " + result);
} else if (operation === "*") {
  var result = parseFloat(num1) * parseFloat(num2);
  alert("The result is: " + result);
} else if (operation === "/") {
  if (num2!== "0") {
    var result = parseFloat(num1) / parseFloat(num2);
    alert("The result is: " + result);
  } else {
    alert("Error: Division by zero is not allowed.");
  }
} else if (operation === "%") {
  if (num2!== "0") {
    var result = parseFloat(num1) % parseFloat(num2);
    alert("The result is: " + result);
  } else {
    alert("Error: Modulus by zero is not allowed.");
  }
} else {
  alert("Error: Invalid operation. Please enter +, -, *, /, or %.");
}