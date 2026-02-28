// question no 01

// var

// yhe javascript ka varriable hota hai jisme hum data store kar sakte hai
var name = "hafsa";
console.log(name);


// let

// jab value change karna ho to hum let ka use karte hai , dynamic values ke liye best hai
let age = 18;
console.log(age);

// const

// code ko safe bnata hai , isme value change nahi kar sakte hai , static values ke liye best hai
const country = "Pakistan";
console.log(country);




// question no 02

// string

// string text hota hai (letters, words, sentences)
let username = "habib";
let rollno = "303";
console.log(username , rollno);

// number

// number numeric value hota hai (integers, decimals)
let age1 = 25;
let price = 99.99;
console.log(age1 , price);

// boolean

// boolean true ya false value hota hai
let isStudent = true;
let isLoggedIn = false;
console.log(isStudent , isLoggedIn);

// undefined

// jab variable declare ho lakin assign na ho
let x;
console.log(x);

// null

// null ka matlab hota hai koi value nahi hai
let y = null;
console.log(y);

// using typeof

// typeoo kisi variable ko data type batata hai
console.log(typeof name);
console.log(typeof age1);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y);





// question no 03

// prompt() basics
// yhe javascript ka built-in function hai jo user se input lene ke liye use hota hai
let userName = prompt("Please enter your name:");
console.log("Hello, " + userName + "!");

// getting input from the user 

// yhe hamesha string return krta hai
let age2 = prompt("Please enter your age:");
console.log("Your age is: " + age2);

// converting input of number

// q ke prompt se hamesha string return hota hai , isliye number me convert karna padta hai
let age3 = prompt("Please enter your age:");
let ageNumber = parseInt(age3);