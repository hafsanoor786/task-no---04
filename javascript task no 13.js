// QUESTION NO 1


// Function to calculate total bill

function calculateBill() {
    let numItems = parseInt(prompt("Enter number of items:"));
    let total = 0;

    // Loop to get price of each item

    for (let i = 1; i <= numItems; i++) {
        let price = parseFloat(prompt("Enter price of item " + i + ":"));
        total += price; // add price to total
    }

    return total;
}

// Call function

let totalBill = calculateBill();

// Apply discount if bill > 5000

if (totalBill > 5000) {
    let discount = totalBill * 0.10; // 10% discount
    totalBill = totalBill - discount;
    alert("10% discount applied!");
}

// Print final bill

alert("Final Bill: " + totalBill);
console.log("Final Bill: " + totalBill);




// QUESTION NO 2


// Function to calculate grade

function calculateGrade(avg) {
    if (avg >= 80) {
        return "A";
    } else if (avg >= 60) {
        return "B";
    } else if (avg >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

// Ask student name

let studentName = prompt("Enter student name:");

// Variables
let total = 0;
let subjects = 5;

// Loop to take 5 subject marks

for (let i = 1; i <= subjects; i++) {
    let marks = parseFloat(prompt("Enter marks for subject " + i + ":"));
    total += marks;
}

// Calculate average

let average = total / subjects;

// Get grade

let grade = calculateGrade(average);

// Print result

alert("Student Name: " + studentName +
      "\nTotal Marks: " + total +
      "\nAverage: " + average +
      "\nGrade: " + grade);

console.log("Student Name:", studentName);
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Grade:", grade);



// QUESTION NO 3


// Initial balance

let balance = 10000;

// Function to withdraw money

function withdrawMoney(amount) {
    if (amount > balance) {
        alert("Insufficient balance");
    } else {
        balance -= amount; // subtract amount
        alert("Withdrawal successful!");
        alert("Remaining Balance: " + balance);
    }
}

// Allow 3 attempts

for (let i = 1; i <= 3; i++) {
    let amount = parseFloat(prompt("Attempt " + i + ": Enter amount to withdraw"));

    withdrawMoney(amount);
}

console.log("Final Balance: " + balance);




// QUESTION NO 4


// Menu prices

let burgerPrice = 500;
let pizzaPrice = 1200;
let drinkPrice = 200;

// Function to calculate order

function calculateOrder(item, quantity) {
    let total = 0;

    if (item === "burger") {
        total = burgerPrice * quantity;
    } else if (item === "pizza") {
        total = pizzaPrice * quantity;
    } else if (item === "drink") {
        total = drinkPrice * quantity;
    } else {
        alert("Invalid item selected!");
        return 0;
    }

    // Apply discount if total > 2000

    if (total > 2000) {
        let discount = total * 0.15;
        total -= discount;
        alert("15% discount applied!");
    }

    return total;
}

// Ask user input

let item = prompt("Enter item (burger / pizza / drink):").toLowerCase();
let quantity = parseInt(prompt("Enter quantity:"));

// Calculate bill

let finalBill = calculateOrder(item, quantity);

// Print final bill

alert("Final Bill: " + finalBill);
console.log("Final Bill:", finalBill);



// QUESTION NO 5


// Hourly rate

let hourlyRate = 500;

// Function to calculate salary

function calculateSalary(hours) {
    let salary = 0;

    // If overtime (more than 40 hours)

    if (hours > 40) {
        let normalHours = 40;
        let overtimeHours = hours - 40;

        salary = (normalHours * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
    } else {
        salary = hours * hourlyRate;
    }

    return salary;
}

// Loop for 3 employees

for (let i = 1; i <= 3; i++) {
    let name = prompt("Enter employee " + i + " name:");
    let hours = parseFloat(prompt("Enter hours worked:"));

    let finalSalary = calculateSalary(hours);

    // Print result

    alert("Employee: " + name + "\nSalary: " + finalSalary);

    console.log("Employee:", name);
    console.log("Salary:", finalSalary);
}