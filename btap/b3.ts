class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayInfo(): void {
        console.log(this.name);
    }
}
class Student extends Person {
    private id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        super.displayInfo();
        console.log(this.id);
    }
}
const student1 = new Student("thợ săn tiền thưởng", 1);
student1.displayInfo();
