//How to Declare Variables 

//Using "var" keyword (Redeclare and Reinitialize Possible)
var a = 10;
var a = 20;//Redeclare 
a = 30; //Reinitialize 

//Using "let" keyword (Redeclare Not Possible and Reinitialize Possible)
let b = 10;
// let b = 20; //Throws Error (ReDeclare);
b = 20; //Re - initialize


//Using "Const" keyword (No Redeclare and No Reinitialize Possible)
const c = 10;
// c = 20; //Throws Error
// const c = 30;//Throws Error
console.log(c);

//Data Type In Javascript
let number = 12;
let str = "Harshit Bansal";
let ab;
let d = null;


//String Concatenation 
let str1 = str + " " +  "Developer";

//Template Literal 
let age = 23;
console.log (`My name is ${str} and My age is ${age}`);

//String Methods 
let demo = "   Hello How You Doing ";
let answer = demo.trim();
console.log(answer); 
let newanswer = answer.split((' '));
console.log(newanswer);
let newanswer1 = answer.slice(0,10);
console.log(newanswer1);
console.log(answer.toLocaleUpperCase());

//Number Methods 
let num1 = 3;
let num2  = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);


//Loose Equality Vs Tight Equality
let abs = "44";
let stre = 44;
console.log(abs==stre);
console.log(abs===stre);

//Type Conversion 
let myage = "23";
let newage = Number(myage);
console.log(typeof(myage));
console.log(typeof(newage));

//Arrays Basics 
let dishes = ['a','b','c','d'];
let newdishes = dishes.push('e');
console.log(newdishes);
console.log(dishes.pop());
console.log(dishes.shift());
console.log(dishes.unshift());
console.log(dishes);


//Ternary Operator 
let weight = 68;
let result = age > 18 ? "Adult" : "Child" ;
console.log(result);

//Functions 

