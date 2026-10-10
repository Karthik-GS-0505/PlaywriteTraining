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
let obj1 = {
    name : "Karthik",
    age : 30,
    course : "Automation",
    marks : 73
}
console.log(obj1);

// Program 4: Employee Class 
// Problem Statement: 
// Create an Employee class with name, salary, and 
// department. Create a method that calculates a 10% bonus and 
// displays the total salary. 

class Employee{
    name;
    salary;
    department;
    bonus;
    totalSalary;

    constructor(name,salary,department){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    bonusf(){
        this.bonus = this.salary * 0.10;
        console.log(`${this.name} has ${this.bonus} RS of bonus`);
        
    }

    totalSalaryf(){
        this.totalSalary = this.salary + this.bonus
        console.log(`${this.name} has ${this.totalSalary} RS of total salary`);
        
    }
}
let e = new Employee("Karthik",50000,"QA");
e.bonusf();
e.totalSalaryf();

// String Assignments
// ========================
// 1.Check if a String is a Palindrome 
// Problem Statement: 
// Write a Java method to check if a string is a palindrome. 
// Sample Input: 
// str = "madam" 
// Sample Output: 
// madam is a palindrome. 

function palindrome(){
    let str = "madam" 
    let reverseStr = ""
    
    for(let i=str.length-1;i>=0;i--){
        reverseStr += str.charAt(i);
    }
    if(reverseStr === str){
        console.log(str+" is a palindrome");
    }else{
        console.log(str+" is Not a palindrome");
    }
}
palindrome()

// 2. Count Vowels and Consonants 
// Problem Statement: 
// Write a Java program that counts vowels in a given string. 
// Sample Input: 
// str = "Hello World" 
// Sample Output: 
// Vowels: 3 
let str = "Hello World" 
let count = 0
for(let i=0;i<=str.length-1;i++){
    let ch = str.charAt(i);
    if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
        count++
    }
}
console.log("Vowels- "+count);


// 3. Find Duplicate Words in a Sentence 
// Problem Statement: 
// Write a Java program that reads a sentence (string), splits it into words (array), and finds duplicate 
// words along with their counts. 
// Sample Input: 
// "Java is great and Java is powerful"

let str = "Java is great and Java is powerful"
let duplicateWords = [];
let strArray = str.split(" ")
for(let i =0;i<=strArray.length-1;i++){
    let count = 0;
    for(let j =0;j<=strArray.length-1;j++){
        if(strArray[i] === strArray[j]){
            count++
        }
    }
    if(count >=2 && !duplicateWords.includes(strArray[i])){
        duplicateWords.push(strArray[i])
    }
}
console.log(duplicateWords);



// 4. Convert a Sentence to Word Array and Sort Alphabetically 
// Problem Statement: 
// Given a string sentence, split it into words and return them sorted alphabetically. 
// Sample Input: 
// "zebra apple mango banana" 
// Sample Output: 
// [apple, banana, mango, zebra] 
// Hint: Use Arrays.sort(array to sort)

let str = "zebra apple mango banana" 
let strArray = str.split(" ")
console.log(strArray.sort());
