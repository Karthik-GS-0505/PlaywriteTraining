// Loop Assignments
// ========================
// 1.Prime Number
// Problem Statement:
// Write a JavaScript program to check whether a given number is prime or not using a loop.

let a=12;
if(a!=1 && a%2!=0 && a%3!=0)
{
    console.log(a+" is a prime number");
}else{
    console.log(a+" is not a prime number");
}

// 2.Print Even Numbers
// Problem Statement:
// Write a JavaScript program to print all even numbers between 1 and 50 using a loop.

for(let i=1 ;i<=50;i++){
    if(i%2 === 0){
        console.log(i);
    }
}

// 3.Multiplication Table
// Problem Statement:
// Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.

let a = 3;
for(let i=1;i<=10;i++){
    console.log(a*i);
}

// 4.Factorial Number
// Problem Statement:
// Write a JavaScript program to calculate the factorial of a given positive integer using a loop.

let a=6;
let fibbo =1

do{
    fibbo = fibbo * a
    a--
}while(a>=1)

console.log(fibbo);

// 5.Count Digits
// Problem Statement:
// Write a JavaScript program to count the total number of digits present in a given number using a loop.

let number=676454
let digits =0
if(number===0)
{
    digits =1;
}else{
    while(number>0){
    digits++
    number=Math.floor(number/10)
}
}
console.log(digits);

// 6.Stop the Loop at a Specific Number
// Problem Statement:
// Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.

for(let i=1;i<=20;i++){
    if(i===10){
        break
    }
    console.log(i);
}

// 7.Skip Even Numbers
// Problem Statement:
// Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.

for(let i=0;i<=20;i++){
    if(i%2 === 0){
        continue
    }
    console.log(i);
}

// 8.Print a 5 × 5 Star Pattern
// Problem Statement:
// Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
// *****
// *****
// *****
// *****
// *****
for(let i=1;i<=5;i++){
    let row = ""
    for(let j=1;j<=5;j++){
        row = row + " * "
    }
    console.log(row);
}

// 9.Decreasing Star Pattern
// Problem Statement:
// Write a JavaScript program using nested loops to print the following pattern:

// *****
// ****
// ***
// **
// *

for(let i=5;i>=1;i--){
    let row =""
    for(let j=i;j>=1;j--){
        row +=" * "
    }
    console.log(row);
}

// 10.Palindrome Number
// Problem Statement:
// Write a JavaScript program to check whether a given number is a palindrome.
// Input: 121
// Output: 121 is palindrome number

let word = "karthik"
let palindrome =""

for(let i=word.length-1;i>=0;i--){
    palindrome += word.charAt(i)
}
console.log(palindrome);


