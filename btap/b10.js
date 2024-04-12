"use strict";
let pi = 3.14;
class Shape {
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return pi * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * pi * this.radius;
    }
}
let rectangle = new Rectangle(10, 20);
console.log(rectangle.calculatePerimeter());
let circle = new Circle(9);
console.log(circle.calculatePerimeter());
