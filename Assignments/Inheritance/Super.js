// 2. super to Call Parent Method
// Question
// Create a Vehicle class with a start() method.
// Create a Car class that extends Vehicle.
// Override the start() method in Car, but also call the parent start() method using super.

class Vehicle{
    start(){
        console.log("Vehicle starts");
    }
}
class Car extends Vehicle{
    start(){
        super.start();
        console.log("Car starts");
    }
}

const car = new Car();
car.start();