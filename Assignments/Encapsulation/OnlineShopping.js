// 2. Online Shopping – Product Class 
// Problem Statement 
// Build a JavaScript class Product that stores the following product 
// details: 
// • productId – number 
// • productName – string 
// • price – number 
// • quantityInStock – number 
// Requirements 
// 1. All fields must be private using JavaScript private fields (#). 
// 2. Provide public getters and setters for all fields. 
// 3. Add validation to the setters: 
// o price must be greater than 0. 
// o quantityInStock must be 0 or greater. 
// 4. productName should not be empty. 
// 5. Create an object of the Product class. 
// 6. Use the public setters to set or modify product details. 
// 7. Use the public getters to retrieve and display product details. 
// 8. Try accessing a private field directly from outside the class and 
// observe what happens. 

class Product{
    #productId = 123;
    #productName = "iphone";
    #price = 50000;
    #quantityInStock = 50;

    getterProductID(){
        return this.#productId
    }

    getterProductName(){
        return this.#productName
    }

    getterPrice(){
        return this.#price
    }

    getterQuantityInStock(){
        return this.#quantityInStock
    }

    #SETTERS
    setterProductID(productId){
        this.#productId = productId
    }

    setterProductName(productName){
        if(productName !== ""){
            this.productName = productName
        }
        else{
            console.log("product name is empty");
        }
    }

    setterPrice(price){
        if(price > 0){
            this.#price = price
        }else{
            console.log("price should be greater than 0");
        }
    }

    setterquantityInStock(quantityInStock){
        if(quantityInStock >= 0){
            this.#quantityInStock = quantityInStock
        }else{
            console.log("quantity In Stock should be greater than 0");
        }
    }
}

const p = new Product();

console.log("--- before setter ---")

console.log(p.getterProductName());
console.log(p.getterProductID());
console.log(p.getterPrice());
console.log(p.getterQuantityInStock());


p.setterProductName("galaxy")
p.setterProductID(456)
p.setterPrice(40000)
p.setterquantityInStock(40)


console.log("--- after setter ---")

console.log(p.getterProductName());
console.log(p.getterProductID());
console.log(p.getterPrice());
console.log(p.getterQuantityInStock());
