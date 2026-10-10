// 3. E-Commerce Scenario
// Question
// Create a Product class with:
// - product name
// - price
// - displayProduct() method
// Create an ElectronicProduct class that extends Product and adds:
// - warranty
// Use super() to initialize the parent properties.

class Product{
    productName;
    price;

    constructor(productName,price){
        this.productName = productName
        this.price = price
    }
    displayProduct(){
        console.log(`${this.productName} price is ${this.price}`);
    }
}

class ElectronicProduct extends Product{
    constructor(productName,price){
        super(productName,price)
    }
}

const ep = new ElectronicProduct("S25 Ultra",50000)
ep.displayProduct();
