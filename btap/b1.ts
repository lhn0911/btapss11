class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}


let manager1 = new Manager("con", "kẻ phá tiền", "0888.888.888", 1);
manager1.printInfo();
console.log(manager1.teamSize);
