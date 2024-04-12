"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Rút thành công");
        }
        else {
            console.log("Không đủ tiền");
        }
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        let interest = (this.balance * this.interestRate) / 100;
        console.log("Lãi suất hàng tháng:", interest);
        return interest;
    }
}
let saving = new SavingAccount("09090909", 1000, 5);
let month = saving.calculateInterest();
saving.deposit(1000);
let months = saving.calculateInterest();
saving.withdraw(500);
