// -----------------------------------------------------------------
// JavaScript Practice: Type Coercion & Explicit Conversion
// ===========================================================

// Problem 1 — UI Price and Quantity
// A product page returns the following values as strings:
let price = "500";
let quantity = "3";

// Expected Output:
// 1500

// -->
let totalprice = price * quantity
console.log(totalprice)

// Problem 2 — UI Price + Tax
// The UI returns:
let price = "1000";
let tax = "200";
// Calculate the final price.

// Expected Output:
// 1200

//-->
let totalprice = Number(price)+Number(tax)
console.log(totalprice);


// Problem 3 — Understand + Coercion
// Consider:
let actual = "100";
let expected = 20;
// What will be the output of:
console.log(actual + expected);

//-->
10020

// Problem 4 — Understand - Coercion
// Consider:
let actual = "100";
let expected = 20;
// What will be the output of:
console.log(actual - expected);

//-->
80

// Problem 5 — UI Value and Assertion
// A UI displays:
// 100
// The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
// Check the result of:
console.log(actualPrice == expectedPrice); //-->true
console.log(actualPrice === expectedPrice); //-->false

// Problem 6 — Fix the Assertion
// The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);

// Modify the code so that the assertion gives:
// true

//-->
console.log(Number(actualPrice) === expectedPrice);

// Problem 7 — Environment Variable
// An automation framework reads the timeout from an environment variable:
let timeout = "30000";
// Convert it into a number and print:
// The value
// Its data type

// Expected Output:
// 30000
// number

//->
console.log(typeof timeout)
let timeoutNum = Number(timeout)
console.log(typeof timeoutNum)

// Problem 8 — Order ID
// An API returns:
let orderId = 12345;
// Convert the order ID into a string and create:
// ORDER-12345

//-->
console.log("ORDER-"+orderId) //Since + with a string operand auto-coerces the number, this works directly

// Problem 9 — Boolean API Value
// An API returns:
let status = "true";
// Convert this value into an actual Boolean.

// Expected Output:
// true
// boolean

console.log(typeof status)
let statusB = Boolean(status)
console.log(statusB)
console.log(typeof statusB)

// Problem 10 — Input Field Value
// A Playwright test retrieves a quantity from an input field:
let quantity = "5";
// The expected quantity is:
// let expectedQuantity = 5;

let quantityN = Number(quantity)
console.log(quantityN)
console.log(typeof quantityN)


// Problem 11 — Calculate Cart Total
// An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
// Calculate:
// (price × quantity) - discount

// Expected Output:
// 1498

console.log(Number(price)*Number(quantity)-Number(discount))