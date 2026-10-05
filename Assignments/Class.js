// Assignments On Class
// ======================
// JavaScript Class Problem Statements 
// Program 1: Create a Student Class 
// Problem Statement: 
// Create a Student class with properties name, age, and course. Create 
// two objects and display their details.

class Student{
    name;
    age;
    course;

    constructor(name,age,course){
        this.name = name
        this.age = age
        this.course = course
    }
}
let s1 = new Student("Karthik",30,"Playwrite")
let s2 = new Student("Varun",30,"SAP")

console.log(s1.name);
console.log(s1.age);
console.log(s1.course);

console.log(s2.name);
console.log(s2.age);
console.log(s2.course);

// Program 2: Bank Account Class 
// Problem Statement: 
// Create a BankAccount class with the following: 
// • accountHolder  
// • balance  
// • deposit()  
// • withdraw()  
// • checkBalance() 

class BankAccount{
    accountHolder
    balance

    constructor(accountHolder,balance){
        this.accountHolder = accountHolder
        this.balance = balance
    }
    deposit(){
       console.log("accountHolder -"+this.accountHolder);
    
    }
    checkBalance(){
        console.log("balance -"+this.balance);
    }
}

let b1 = new BankAccount ("Karthik",20000)
b1.deposit()
b1.checkBalance()

// Program 3: Student literal object 
// Problem Statement: 
// Create a student object with the properties name, age, course, and 
// marks. Print all the details.

// Program 4: Employee Class 
// Problem Statement: 
// Create an Employee class with name, salary, and 
// department. Create a method that calculates a 10% bonus and 
// displays the total salary. 

// String Assignments
// ========================
// 1.Check if a String is a Palindrome 
// Problem Statement: 
// Write a Java method to check if a string is a palindrome. 
// Sample Input: 
// str = "madam" 
// Sample Output: 
// madam is a palindrome. 

// 2. Count Vowels and Consonants 
// Problem Statement: 
// Write a Java program that counts vowels in a given string. 
// Sample Input: 
// str = "Hello World" 
// Sample Output: 
// Vowels: 3 

// 3. Find Duplicate Words in a Sentence 
// Problem Statement: 
// Write a Java program that reads a sentence (string), splits it into words (array), and finds duplicate 
// words along with their counts. 
// Sample Input: 
// "Java is great and Java is powerful"

// 4. Convert a Sentence to Word Array and Sort Alphabetically 
// Problem Statement: 
// Given a string sentence, split it into words and return them sorted alphabetically. 
// Sample Input: 
// "zebra apple mango banana" 
// Sample Output: 
// [apple, banana, mango, zebra] 
// Hint: Use Arrays.sort(array to sort)