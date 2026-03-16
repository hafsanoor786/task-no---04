// ARITHEMATIC OPERATORS


// QUESTION NO 1

let cart = [
  { name: "Shirt", price: 20, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 2 },
  { name: "Cap", price: 10, quantity: 3 }
];

let totalPrice = cart.reduce(function(total, item) {
  return total + (item.price * item.quantity);
}, 0);

console.log("Total Price:", totalPrice);


// QUESTION NO 2

let price = 100; // original price
let discount = 10; // 10% coupon

let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

console.log("Original Price:", price);
console.log("Discount:", discountAmount);
console.log("Final Price:", finalPrice);

// QUESTION NO 3

let price1= 500; // original price
let taxRate = 18; // 18% tax

let taxAmount = (price * taxRate) / 100;
let totalBill = price + taxAmount;

console.log("Price:", price);
console.log("Tax:", taxAmount);
console.log("Total Bill:", totalBill);


// QUESTION NO 4

let weight = 70; // kg
let height = 1.75; // meters

let bmi = weight / (height * height);

console.log("Your BMI is:", bmi);

// QUESTION NO 5

let salary = 50000;
let taxRate1 = 10;

let taxAmount1 = (salary * taxRate) / 100;
let finalSalary = salary - taxAmount;

console.log("Monthly Salary:", salary);
console.log("Tax Deducted:", taxAmount);
console.log("Salary After Tax:", finalSalary);

// QUESTION NO 6

let rating1 = 4;
let rating2 = 5;
let rating3 = 3;
let rating4 = 4;
let rating5 = 5;

let average = (rating1 + rating2 + rating3 + rating4 + rating5) / 5;

console.log("Average Rating:", average);

// QUESTION NO 7

let orderAmount = 800;
let deliveryCharge;

if (orderAmount < 1000) {
  deliveryCharge = 200;
} else {
  deliveryCharge = 0;
}

let totalBill1 = orderAmount + deliveryCharge;

console.log("Order Amount:", orderAmount);
console.log("Delivery Charge:", deliveryCharge);
console.log("Total Bill:", totalBill);

// QUESTION NO 8

let principal = 10000; // money
let rate = 5; // interest rate %
let time = 2; // years

let simpleInterest = (principal * rate * time) / 100;

console.log("Simple Interest:", simpleInterest);

// QUESTION NO 9

let balance = 5000; // Current balance
let withdrawAmount = 1200; // Amount user wants to withdraw

let remainingBalance = balance - withdrawAmount;

console.log("Current Balance:", balance);
console.log("Withdraw Amount:", withdrawAmount);
console.log("Remaining Balance:", remainingBalance);

// QUESTION NO 10

let totalMinutes = 135; // example: 135 minutes

let hours = Math.floor(totalMinutes / 60); // full hours
let minutes = totalMinutes % 60; // remaining minutes

console.log(totalMinutes + " minutes = " + hours + " hour(s) and " + minutes + " minute(s)");









// IF ELSE STATEMENT

// QUESTION NO 1

let correctUsername = "user123";
let correctPassword = "pass123";

// User input (prompt)
let username = prompt("Enter your username");
let password = prompt("Enter your password");

// Check credentials
if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful! Welcome " + username);
} else {
    console.log("Login Failed! Invalid username or password.");
}

// QUESTION NO 2

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Access granted! Welcome to the website.");
} else {
    console.log("Access denied! You must be 18 or older to enter.");
}
