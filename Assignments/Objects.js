// Assignments on Object
// ============================
// Program 1. Student Object 
// Create a student object with the following properties: 
// • id  
// • name  
// • age  
// • course  
// • marks  
// Perform the following: 
// 1. Print the complete object.  
// 2. Print the student's name.  
// 3. Print the student's marks.  
// 4. Change the student's course.  
// 5. Update the student's marks.  
// 6. Add a new property city.  
// 7. Delete the age property.  

let student ={
    id : 123,
    name : "Karthik",
    age : 30,
    course : "QA",
    marks : 75
}
console.log(student);
console.log(student.name);
console.log(student.marks);
console.log(student.course);
console.log(student.marks);
student.city = "Tumkur"
console.log(student);
delete student.age
console.log(student);

// Program 2. Employee Object 
// Create an employee object containing: 
// id 
// name 
// department 
// designation 
// salary 
// Perform: 
// 1. Access each property using dot notation.  
// 2. Access each property using bracket notation.  
// 3. Update the salary.  
// 4. Add a location property.  
// 5. Delete the designation property.

let Employee ={
    id : 123,
    name : "Karthik",
    department : "Development",
    designation : "QA",
    salary : 50000
}
console.log(Employee);

console.log(Employee.id);
console.log(Employee.name);
console.log(Employee.department);
console.log(Employee.designation);
console.log(Employee.salary);

Employee.salary = 60000
console.log(Employee.salary);

Employee.location = "Tumkur"
console.log(Employee);

delete Employee.designation
console.log(Employee);


// program 3.Create a testData object containing: 
// username 
// password 
// browser 
// environment 
// timeout 
// Use Object.keys() to: 
// 1. Get all property names.  
// 2. Count the number of properties.  
// 3. Check whether username exists.

let testData = {
    username : "Karthik",
    password : "Master@123",
    browser  : "Chrome",
    environment : "ITE",
    timeout : 3000
}
console.log(Object.keys(testData));
console.log(Object.keys(testData).length);
console.log(Object.keys(testData).includes("username"));

// Program 4.Create an object containing test configuration: 
// browser: "chromium" 
// headless: true 
// timeout: 30000 
// retries: 2 
// Use Object.values() to: 
// 1. Display all values.  
// 2. Check whether "chromium" exists.  
// 3. Count the number of configuration values. 

let browser = {
    browser: "chromium",
    headless: true,
    timeout: 30000,
    retries: 2
}
console.log(Object.values(browser));
console.log(Object.values(browser).includes("chromium"));
console.log(Object.values(browser).length);

// Program 5.Create a user object: 
// username 
// role 
// department 
// experience 
// Use Object.entries() to print: 
// username : standard_user 
// role : tester 
// department : QA 
// experience : 5 

let user ={
    username : "Karthik",
    role : "tester",
    department : "QA",
    experience : 5
}
console.log(Object.entries(user));

// Program 6.Create: 
// const user = { 
// name: "John", 
// role: "Tester", 
// city: "Pune" 
// }; 
// Create a new object that: 
// • Contains all properties of user.  
// • Changes role to "Automation Engineer".  
// • Adds experience: 5.  
// The original object should remain unchanged. 

const user = { 
name: "John", 
role: "Tester", 
city: "Pune" 
}; 

console.log(user);
const {...user1} = user
console.log(user1);
user1.role ="Automation Engineer"
user1.experience = 5
console.log(user1);


// Program 7.Playwright Configuration Object 
// Create a configuration object: 
// browser 
// baseURL 
// headless 
// timeout 
// retries 
// Example: 
// { 
// } 
// browser: "chromium", 
// baseURL: "https://example.com", 
// headless: true, 
// timeout: 30000, 
// retries: 2 
// Perform: 
// 1. Print all configuration values.  
// 2. Change the browser.  
// 3. Change the timeout.  
// 4. Add screenshot: "only-on-failure".  
// 5. Check whether retries exists.  
// 6. Create a copy with a different baseURL.  

let configuration = {
    browser: "chromium", 
    baseURL: "https://example.com", 
    headless: true, 
    timeout: 30000, 
    retries: 2 
}
console.log(configuration);
configuration.browser ="Edge"
console.log(configuration);
configuration.timeout =40000
console.log(configuration);
configuration.screenshot ="only-on-failure"
console.log(configuration);
console.log(Object.keys(configuration).includes("retries"));

let {...configuration1} = configuration
console.log(configuration1);
configuration1.baseURL = "https://google.com"
console.log(configuration1);

