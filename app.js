// var a = prompt("Enter your city name");
// var b = "karachi";
// var c = "lahore";
// var d = "islamabad";
// var e = "rawalpindi";
// var f = "peshawar";
// if (a === b){
//     alert("Welcome to the city of lights");
// }
// if (a === c){
//     alert("Welcome to the city of Garden");
// }
// if (a === d){
//     alert("Welcome to the city of peace");
// }
// if (a === e){
//     alert("Welcome to the twin cities");
// }
// if (a === f){
//     alert("Welcome to the city of Flower");
// }



// QUESTION # 02

// var myGender = prompt("Enter Your Gender");
// var male = "Male";
// var female = "Female";
// if (myGender === male){
//     alert("Good Morning Sir.");
// }
// if (myGender === female){
//     alert("Good Morning Ma'am.")
// }


// QUESTION # 03

// var a = prompt("Enter Traffic Color");
// var color1 = "Red";
// var color2 = "Yellow";
// var color3 = "Green";

// if (a === color1){
//     document.write("Signal Color&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMessage"+"<br>"+"Red&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMust Stop");
// }
// if (a === color2){
//     document.write("Signal Color&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMessage"+"<br>"+"Yellow&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"&nbspReady To Move");
// }
// if (a === color3){
//     document.write("Signal Color&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMessage"+"<br>"+"Green&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"&nbsp&nbsp&nbsp&nbspMove Now");
// }


// QUESTION # 04

// var currFuel = prompt("Enter remaining fuel in litre ");
// var minFuel = 0.25
// if (currFuel < minFuel){
//     alert("Please refill the fuel in your car.");
// }


// QUESTION # 05

// (a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// This condition is true 


// (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// This condition is false 

// (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Condition 1%3 is false Condition 2%4 is true 

// (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// (e)
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("false")
// }

// (f)
// if ("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// QUESTION # 06

// var obt1 = +prompt("Enter subject 1 obtain marks");
// var obt2 = +prompt("Enter subject 2 obtain marks");
// var obt3 = +prompt("Enter subject 3 obtain marks");

// var markObtain = obt1+obt2+obt3;
// var totalMark = 300;
// var percentage = (markObtain/totalMark)*100;

// if (percentage > 80){
//     document.write("<h2>Marks Sheet</h2>"+"<br>Total Marks: 300<br>Percentage : " +percentage+"%"+"<br>Grade : A-one" + "<br>Remarks : Excellent");
// }
// else if (percentage > 70){
//     document.write("<h2>Marks Sheet</h2>"+"<br>Total Marks: 300<br>Percentage : " +percentage+"%"+"<br>Grade : A" + "<br>Remarks : Good"); 
// }
// else if (percentage > 60){
//     document.write("<h2>Marks Sheet</h2>"+"<br>Total Marks: 300<br>Percentage : " +percentage+"%"+"<br>Grade : B" + "<br>Remarks : You need to improve"); 
// }
// else if (percentage < 60){
//     document.write("<h2>Marks Sheet</h2>"+"<br>Total Marks: 300<br>Percentage : " +percentage+"%"+"<br>Grade : Fail" + "<br>Remarks : Sorry"); 
// }


// QUESTION # 07

// var a = 5;
// var guessNo = +prompt("Enter a number");

// if (guessNo === a){
//     alert("Bingo! Correct answer.");
// }
// else {
//     alert("Close enough to the correct answer.");
// }


// QUESTION # 08

// var a = +prompt("Enter a number");
// var b = a%3;
// if(b==0){
//     console.log("num is divisible 3");
// }else{
//     console.log("num is not divisible by 3");
// }


// QUESTION # 09

// var num = +prompt("Enter any number");
//  var newNum = num%2;
//  if(newNum==0){
//      console.log("number is even");
//  }else{
//     console.log("number is odd");
//  }



// QUESTION # 10

// var t = +prompt("Enter temperature");

// if (t > 40){
//     alert("It is too hot outside.");
// }
// else if (t > 30){
//     alert("The weather today is normal.");
// }
// else if (t > 20){
//     alert("Today's weather is cool.");
// }
// else if (t > 10){
//     alert("OMG! Todays weather is soo cool.");
// }

// QUESTION # 11

// var firstNo = +prompt("Enter first number");
// var operator = prompt('Enter operator ( either +, -, *, / or % ): ');
// var secondNo = +prompt("Enter second number");

// var result;

// if (operator === "+"){
//     result = firstNo + secondNo;
//     document.write(firstNo + "+" +secondNo +"=" +result);
// }
// else if (operator === "-"){
//     result = firstNo - secondNo;
//     document.write(firstNo + "-" +secondNo +"=" +result);
// }
// else if (operator === "*"){
//     result = firstNo - secondNo;
//     document.write(firstNo + "*" +secondNo +"=" +result);
// }
// else if (operator === "/"){
//     result = firstNo - secondNo;
//     document.write(firstNo + "/" +secondNo +"=" +result);
// }
// else if (operator === "%"){
//     result = firstNo - secondNo;
//     document.write(firstNo + "%" +secondNo +"=" +result);
// }




// --------------CHAPTER 12-13-------------

// QUESTION # 01

// var ch = prompt("Enter any number");

// if (ch >= "A" && ch <= "Z"){
//     document.write(ch + " is an Upper case character <br>");
// }
// else if (ch >="a" && ch <= "z"){
//     document.write(ch + " is a Lower case character <br> ");
// }
// else {
//     document.write(ch + " is a Numeric value");
// }


// QUESTION # 02

// var firstNo = +prompt("Enter any number");
// var secNo = +prompt("Re-enter any number");

// if (firstNo > secNo){
//     document.write(firstNo);
// }
// else if (secNo > firstNo){
//     document.write(secNo);
// }
// else {
//     document.write(firstNo + " = " + secNo);
// }


// QUESTION # 03

// var num = +prompt("Enter any number");

// if (num > 0){
//     document.write(num + " is positive number");
// }
// else if (num < 0){
//     document.write(num + " is negative number");
// }
// else{
//     document.write(num + " is zero");
// }


// QUESTION # 04

// var num = prompt("Enter only one character");

// if(num == "a"){
//     console.log("True")
// }else if(num == "e"){
//     console.log("True")
// }else if(num == "i"){
//     console.log("True")
// }else if(num == "o"){
//     console.log("True")
// }else if(num == "u"){
//     console.log("True")
// }else{
//     document.write("False");
// }



// QUESTION # 05

// var corrPass =  1234;
// var typePass = +prompt("Enter your password");

// if(typePass){
//     if (typePass == corrPass){
//         document.write("Correct! The passward you entered matches the original password");
//     }
//     else {
//         document.write("incorrect password");
//     }
// }else{
//     console.log("Type Password");
// }



// QUESTION # 06

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }



// QUESTION # 06

// var time = +prompt("enter time");

// if (time === 1300){
//     console.log(time +" = 1pm");
// }
// else if (time === 1400){
//     console.log(time +" = 2pm");
// }
// else if (time === 1500){
//     console.log(time +" = 3pm");
// }
// else if (time === 1600){
//     console.log(time +" = 4pm");
// }
// else if (time === 1700){
//     console.log(time +" = 5pm");
// }
// else if (time === 1800){
//     console.log(time +" = 6pm");
// }
// else if (time === 1900){
//     console.log(time +" = 7pm");
// }
// else if (time === 2000){
//     console.log(time +" = 8pm");
// }
// else if (time === 2100){
//     console.log(time +" = 9pm");
// }
// else if (time === 2200){
//     console.log(time +" = 10pm");
// }
// else if (time === 2300){
//     console.log(time +" = 11pm");
// }
// else if (time === 2400){
//     console.log(time +" = 12pm");
// }
