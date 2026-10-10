// Problem 4: Student Marks 
// Create a Student class. 
// Requirements: 
// • Private property: #marks  
// • Method: setMarks(marks)  
// • Method: getMarks()  
// • Marks must be between 0 and 100.  
// • Invalid marks should not be stored.

class Student{
    #marks

    setMarks(marks){
        if(marks >= 0 && marks <=100){
            this.#marks = marks
            }else{
            console.log("Invalid marks can not be stored.");
        }
    }

    getMarks(){
        return this.#marks
    }
}

const s = new Student();
s.setMarks(99)
console.log(s.getMarks());
