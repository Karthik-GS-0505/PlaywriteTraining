// 1. Student Record System  
// Problem Statement:  
// Create a Student class that uses encapsulation to protect its data. The 
// class should have the following  
// private fields:  
// • name (String)  
// • rollNumber (int)  
// • grade (char)  
// Provide appropriate getter and setter methods to access and modify 
// the values. Also, create method  
// that:  
// • Creates a new student object  
// • Sets the data using setters  
// • Displays the data using getters  
// and test it in separate class 

class Student{
    #name;
    #rollNumber;
    #grade;

    getternName(){
        return this.#name;
    }
    getternRollNumber(){
        return this.#rollNumber;
    }
    getternGrade(){
        return this.#grade;
    }

    setter(name,rollNumber,grade){
        this.#name = name
        this.#rollNumber = rollNumber
        this.#grade = grade
    }

    test(){
        const s = new Student();
        s.setter("Karthik",1392617,"QA")
        console.log(s.getternName());
        console.log(s.getternRollNumber());
        console.log(s.getternGrade());
        
    }
}
class TestStudent extends Student{
}

const t = new TestStudent();
t.test();
