"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
        console.log(this.teamSize);
    }
}
let employee1 = new Employee("cha", "thợ săn tiền thưởng", "0999.999.999");
let manager1 = new Manager("con", "kẻ phá tiền", "0888.888.888", 1);
manager1.printInfo();
console.log(manager1.teamSize);
