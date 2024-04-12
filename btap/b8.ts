class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Rút thành công");
        } else {
            console.log("Không đủ tiền");
        }
    }
}

class SavingAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
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
