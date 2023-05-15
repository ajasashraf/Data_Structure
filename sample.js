// document.write("Learn JavaScript")
// write html elements in browser
document.write("<h1>Hello Ajas</h1>");
// giving alert
// alert("Hello Ajas");
// console
console.log("Hello World");
console.log(10+20);

// Datatypes

// String
var person = "Ajas";
let person1 = "Ashraf";
// document.write(person);
// document.write(typeof person);  -- for findig the datatype   
//Number
var number1 = 10;
let number2 = 20.456;
// document.write(number2);
//Boolean 
var js = true;
let html = false;
//Undefined 
var test1;
// document.write(test1)
//Null
var test2 = null;

//const
const pi = 3.14
// document.write(pi);
// pi = 4;
// document.write(pi);
// in this const variable(pi) is always 3.14.That means cosnt variable cannot change once assignd

//Arithmetic operator
var a = 10;
var b = 20;
// document.write(a + b);
// document.write("<br>");
// document.write(a - b);
// document.write("<br>");
// document.write(a * b);
// document.write("<br>");
// document.write(a / b);
// document.write(2 ** 3);  -- for finding power

//Assignment operator
var x = 10;
// var result = x+=4; for adding x with 4 
// var result = x-=4;  for subtracting
            //   = x*=4;  for multiply
            //   = x/=4;  for division 
            //   = x%=4;  for modulas
// document.write(result);

//comparison operators
// ==   - eqaul to
// ===  - it is identical
// !=    - not equal to
// >  -  greater than
// <   - less than
// >=  - greater than or equal to
// <=  - less than or equal to

//Logical operators
// && -  true - when both statements are true
// ||  - true - when one of the  statements is true
//  ! - opposite result
// document.write(!(b == 20)); -- in here the b==20 but the result will give opposite to the anwer that is false

//if else statement
// var c = 5 ;
// if (c > 0 || c == 0){
//     document.write("positve number");
// }else{
//     document.write("Negative number");
// }

//Switch statement
// var d = "C";
// switch(d) {
//     case "A":
//         document.write("Apple");
//         break;
//     case "B":
//         document.write("Bat");
//         break; 
//     case "C":
//         document.write("Cat");
//         break; 
//     default :
//         document.write("Invalid character");
//         break;
// }

//Loops
//for loop
// for( var i=0; i<5; i++){
// document.write("HELLO" +"<br>");
// } 
//while loop
// var i =1;
// while(i<=5){
//     document.write(i +"<br>");
//     i++;
// }
//Do while loop
// var i = 1;
// do{
//     document.write("HELLO" +"<br>");
//     i++;
// }while(i<=5)

//functions
// function greetings(){
//     document.write("Good morning");
// }
//function with parameter and argument
// function greetings(name){
//     document.write("Good morning " + name);
// }
// greetings("Ajas");
// function with parameter and argument for  sum with return value
//   function sum(n1,n2){
//     return n1+n2;
//   }
//   var result = sum (1.5,2.7);
//   document.write(result);

//Arrays
var animal = ["lion","tiger","cat","dog"];
// document.write(animal); //for printing an array 
// document.write(animal[0]); //for printing with index
// animal[0] = "elephant" ;  // for repalcing 0 th element with elephant
// var x = animal.length;  // for knowing array length

// for (var i=0; i<4; i++){
//     document.write(
//         animal[i] + "<br>"
//     );
// }
//for adding elements in last of the array
// animal.push("elephant","fox");
// document.write(animal)

//for deleting first element in an array
// animal.shift();
//for deleting last element in an array
// animal.pop();
//for deleting any element in an array
// animal.splice(2,1);
// document.write(animal);

//for sorting array in ascending
// animal.sort();
//for sorting array in descending
// animal.sort();
// animal.reverse();

//Strings
var text = "Java script";
var text1 = "Learn";
//to combine two strings  
// document.write(text1.concat(text));
// to take a paritcular part in a string
// document.write(text.slice(5,11));


//math object
//for finding squareroot
//var e = 9
//document.write(Math.sqrt(e));
//for finding the positive number
//var f = -18
//document.write(Math.abs(f));

//for finding minimum number
//document.write(Math.min(10,3,7,50));
//for finding maximum number
//document.write(Math.max(10,3,7,50));

//for finding power
//document.write(Math.pow(2,3));
//for rounding the value into lowest
//var a = 6.8
//document.write(Math.floor(a));
//for rounding the value into highest
//document.write(Math.ceil(a));
//for rounding the value into normal round
//document.write(Math.round(a));

// for getting random numbers
//document.write(Math.random());
//for getting random number of 0 to 10
var a = Math.random();
var rounded = Math.floor(a*10);
document.write(rounded);

