// ===============================================================
// Array Scenario Based Questions
// ===================================
// Scenario-Based JavaScript Array Questions 

// 1. Employee Management System 
// Scenario: 
// A company stores employee names in an array. 
// Question: 
// Declare an array with employee names "Rahul", "Priya", "Amit" and 
// perform the following operations: 
let arr =["Rahul", "Priya", "Amit"]
console.log(arr)
// 1. Add "Sneha" to the employee list
arr.push("Sneha")
console.log(arr)
// 2. Remove the last employee from the list
arr.pop("Sneha")
console.log(arr)
// 3. Add "Manager" at the beginning of the list  
arr.unshift("Manager")
console.log(arr)
// 4. Remove the first employee from the list
arr.shift("Manager")
console.log(arr)

// 2. Shopping Cart Application 
// Scenario: 
// An e-commerce website manages products in a shopping cart. 
// Question: 
// Declare an array with "Mobile", "Laptop", "Mouse" and:
let arr = ["Mobile", "Laptop", "Mouse"]
// 1. Add "Keyboard" to the cart  
arr.push("Keyboard")
console.log(arr);
// 2. Display all products in reverse order  
arr.reverse(arr)
console.log(arr);
// 3. Convert all cart items into a single string separated by " | "  
console.log(arr.join(" | "));

// 3. Browser Tabs Automation 
// Scenario: 
// A browser automation framework tracks currently opened tabs. 
// Question: 
// Declare an array with "Google", "YouTube", "ChatGPT" and: 
let arr = ["Google", "YouTube", "ChatGPT"]
// 1. Close the last opened tab 
arr.pop()
console.log(arr);
// 2. Add "GitHub" as the first tab  
arr.unshift("GitHub")
console.log(arr);
// 3. Display tabs in reverse order 
arr.reverse()
console.log(arr);

// 4. Food Delivery Orders 
// Scenario: 
// A food delivery application maintains current orders. 
// Question: 
// Declare an array with "Pizza", "Burger", "Pasta" and: 
let arr =["Pizza", "Burger", "Pasta"]
// 1. Add "Sandwich" to the orders  
arr.push("Sandwich")
console.log(arr);
// 2. Remove the first order 
arr.shift() 
console.log(arr);
// 3. Display all orders as a comma-separated string  
arr.join(" , ")
console.log(arr);
// 5. Student Attendance System 
// Scenario: 
// A school application maintains student attendance. 
// Question: 
// Declare an array with "Ankit", "Riya", "Karan" and: 
let arr =["Ankit", "Riya", "Karan"]
// 1. Add "Neha" at the beginning  
arr.unshift("Neha")
console.log(arr);
// 2. Remove the last student from the list  
arr.pop()
console.log(arr);
// 3. Create a separate copy of the attendance list
let [...arr1] = arr
console.log(arr1);

// 6. QA Test Case Management 
// Scenario: 
// A QA engineer stores executed test cases. 
// Question: 
// Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
let arr =["LoginTest", "PaymentTest", "SearchTest"]
// 1. Create another copy of the same array  
let [...arr1] =arr
console.log(arr1);
// 2. Extract only the first 2 test cases
let [test1,test2] = arr
console.log(test1);
console.log(test2);

// 3. Display test cases in reverse order
console.log(arr.reverse());
 
// 7. Movie Recommendation App 
// Scenario: 
// A movie application stores recommended movies. 
// Question: 
// Declare an array with "Inception", "Avatar", "Titanic" and:
let arr=["Inception", "Avatar", "Titanic"]
// 1. Add "Interstellar" to the movie list  
arr.push("Interstellar")
console.log(arr);
// 2. Replace "Titanic" with "Jawan" 
arr.splice(0,2,"Titanic","Jawan") 
console.log(arr);

// 3. Convert all movie names into a single string separated by "-"  
console.log(arr.join(" - "));


// 8. Product Inventory Management 
// Scenario: 
// An admin manages product inventory. 
// Question: 
// Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
let arr = ["Mobile", "Laptop", "Tablet", "Camera"]
// 1. Remove "Tablet" from inventory 
arr.splice(2,1)
console.log(arr);
// 2. Add "Smart Watch" after "Laptop" 
arr.splice(2,0,"Smart Watch")
console.log(arr);
// 3. Create a duplicate copy of updated inventory  
let [...arr1] = arr
console.log(arr1);

// 9. Online Course Platform 
// Scenario: 
// An online learning platform stores enrolled courses. 
// Question: 
// Declare an array with "JavaScript", "Playwright", "Cypress" and: 
let arr = ["JavaScript", "Playwright", "Cypress"]
// 1. Remove the first course  
arr.shift()
console.log(arr);
// 2. Add "TypeScript" at the beginning 
arr.unshift("TypeScript")
console.log(arr);
// 3. Extract only the last 2 courses
console.log(arr.slice(-2));



// 10. Music Playlist Application 
// Scenario: 
// A music app stores favorite songs. 
// Question: 
// Declare an array with "Song1", "Song2", "Song3" and:
let arr =["Song1", "Song2", "Song3"] 
// 1. Display playlist in reverse order  
arr.reverse()
console.log(arr);
// 2. Remove the last song 
arr.pop()
console.log(arr);
// 3. Add "NewSong" at the beginning
arr.unshift()
console.log(arr);
// 4. Convert playlist into a single string 
arr.join()
console.log(arr);
// 11. Bug Tracking System 
// Scenario:
// A software team tracks bugs using arrays. 
// Question: 
// Declare an array with "Bug101", "Bug102", "Bug103" and: 
let arr =["Bug101", "Bug102", "Bug103"]
// 1. Add "Bug104" 
arr.push("Bug104")
console.log(arr);
// 2. Remove "Bug102"
arr.splice(1,1)
console.log(arr);
// 3. Create a copy of the bug list 
let [...arr1] = arr
console.log(arr1);

// 12. Daily Tasks Planner 
// Scenario: 
// A task planner application stores daily tasks. 
// Question: 
// Declare an array with "Wake Up", "Exercise", "Study" and: 
// 1. Add "Meeting" to the task list  
// 2. Remove the first task  
// 3. Reverse all tasks  
// 4. Display all tasks in a single string separated by " -> " 
let arr = ["Wake Up","Exercise","Study"]
console.log(arr);
arr.unshift("Meeting")
console.log(arr);
arr.reverse()
console.log(arr);
let arr1 = arr.join("->")
console.log(arr1);

// 13. Mobile Contacts List 
// Scenario: 
// A mobile app stores contact names. 
// Question: 
// Declare an array with "Ram", "Shyam", "Mohan" and: 
// 1. Add "Sita" at the beginning  
// 2. Remove the last contact  
// 3. Extract only the first 2 contacts 

let arr =["Ram", "Shyam", "Mohan"]
console.log(arr);
arr.unshift("Sita")
console.log(arr);
arr.pop()
console.log(arr);
arr.splice(0,1)
console.log(arr);

// 14. Sports Team Selection 
// Scenario: 
// A coach manages selected players. 
// Question: 
// Declare an array with "Virat", "Rohit", "Gill" and: 
// 1. Add "Hardik" to the team  
// 2. Replace "Gill" with "KL Rahul"  
// 3. Display players in reverse order 

let teamIndia = ["Virat", "Rohit", "Gill"]
console.log(teamIndia);
teamIndia.push("Hardik")
console.log(teamIndia);
teamIndia.splice(1,2,"KL Rahul")
console.log(teamIndia);


// 15. Real-Time Automation Framework Scenario 
// Scenario: 
// An automation framework stores failed test names. 
// Question: 
// Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
// 1. Add "ProfileFail"  
// 2. Remove the first failed test  
// 3. Create another copy of the failed tests array  
// 4. Extract only the first 2 failed tests  
// 5. Replace "CheckoutFail" with "PaymentFail"  
// 6. Convert all failures into a single comma-separated string

let arr = ["LoginFail", "CheckoutFail", "SearchFail"]
arr.push("ProfileFail")
console.log(arr);
arr.shift()
console.log(arr);
let [...arr1] = arr
console.log(arr1);
arr1.splice(2,1)
console.log(arr1);
arr1.splice(0,1,"PaymentFail")
console.log(arr1);
console.log(arr1.join());