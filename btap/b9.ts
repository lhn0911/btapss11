let pi =3.14
class Shape {
    calculateArea(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return pi* this.radius * this.radius;
    }
}

let rectangle = new Rectangle(10, 20);
console.log(rectangle.calculateArea());
let circle = new Circle(9);
console.log(circle.calculateArea());
