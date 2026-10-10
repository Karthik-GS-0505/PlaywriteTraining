// 1. Basic Inheritance – Employee
// Question
// Create a Person class with a name property and a displayName() method.
// Create an Employee class that extends Person and adds an employeeId.
// Display the employee's name and ID.

class Person{
    name
    displayName(name){
        this.name = name
}
}
class Employee extends Person{
    employeeId
}

const employee = new Employee();

employee.displayName("Karthik")
console.log(employee.name);

employee.employeeId = 123
console.log(employee.employeeId);



