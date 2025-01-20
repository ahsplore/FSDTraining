/* Operators */

// 1. arithmetic operator --> +, -, *, /, %, ++, --
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
a++; // Increment a
console.log(a); // 11
b--; // Decrement b
console.log(b); // 4

// 2. short-hand / assignment operator
let x1 = 5;
x1 += 3; // Equivalent to x = x + 3
console.log(x1); // 8
x1 *= 2; // Equivalent to x = x * 2
console.log(x1); // 16

// 3. logical operator
let isAdult = true, hasLicense = false;
console.log(isAdult && hasLicense); // false
console.log(isAdult || hasLicense); // true
console.log(!isAdult); // false


// 4. relational operator
let num1 = 10, num2 = 20;
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 == 10); // true
console.log(num1 !== num2); // true


// 5. ternary operator
let x = 18;
let canVote = x >= 18 ? "Yes" : "No";
console.log(canVote); // Yes


/* Conditional statements */

// 1. simple if
let s = 10;
if (s > 5) {
  console.log("Number is greater than 5");
}

// 2. if-else
let num = 4;
if (num % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// 3. else-if-else (else-if ladder)
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. nested if 
let age = 25, citizenship = "USA";
if (age >= 18) {
  if (citizenship === "USA") {
    console.log("Eligible to vote in the USA");
  }
}

// 5. switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
