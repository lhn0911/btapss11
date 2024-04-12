"use strict";
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this.name);
        console.log(this.price);
    }
}
class Electronics extends Products {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
}
