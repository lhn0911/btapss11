class Products{
    protected name:string;
    protected price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    getDescription(){
        console.log(this.name);
        console.log(this.price);
    }
}
class Electronics extends Products{
    private brand: string
    constructor(name:string,price:number, brand:string){
        super(name, price);
        this.brand = brand;
    }
}