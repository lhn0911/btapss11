"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
        console.log(this.speed);
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(this.speed);
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle1 = new Bicycle("lam bồ gi ni", 200, "BWM", "1ti banh rang");
bicycle1.speedUp(10);
bicycle1.showSpeed();
bicycle1.slowDown(5);
bicycle1.showSpeed();
