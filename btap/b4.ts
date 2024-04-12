class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount: number): void {
        this.speed -= amount;
        console.log(this.speed);
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(this.speed);
    }

    showSpeed(): void {
        console.log(this.speed);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: string) {
        super(name, speed, id);
        this.gear = gear;
    }

}

let bicycle1 = new Bicycle("lam bồ gi ni", 200, "BWM","1ti banh rang");

bicycle1.speedUp(10);
bicycle1.showSpeed();

bicycle1.slowDown(5);
bicycle1.showSpeed(); 
