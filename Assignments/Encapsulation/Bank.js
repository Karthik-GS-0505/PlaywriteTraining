// Problem 3: Bank Account 
// Create a BankAccount class. 
// Requirements: 
// • Create a private variable #balance.  
// • Create methods:  
// o deposit(amount)  
// o withdraw(amount)  
// o getBalance()  
// • The balance should not be directly accessible from outside the 
// class.  
// • Prevent withdrawal if the amount is greater than the available 
// balance

class BankAccount{
    #balance =5000;

    deposit(amount){
        this.#balance = this.#balance + amount
    }

    withdraw(amount){
        if(amount < this.#balance){
            this.#balance = this.#balance - amount
        }else{
            console.log("amount is greater than the available balance");
        }
    }

    getBalance(){
        return this.#balance 
    }
}
const b = new BankAccount();
b.deposit(1000)
console.log(b.getBalance());

b.withdraw(2000)
console.log(b.getBalance());

console.log(b.balance); //not possible as it is private

