interface Shape {
    shapeName: string,
    PrintShape: () => string

}
//Cone
class Cone implements Shape {
    shapeName: string = "Cone";
    r: number;
    h: number;
    constructor(r: number, h: number) {
        this.r = r;
        this.h = h;
    }
    PrintShape = (): string => { return this.shapeName }

    area = () => {
        let l = Math.sqrt((this.r * this.r) + (this.h * this.h));
        console.log(3.14 * this.r * (l + this.r));
    }
}
let cone = new Cone(2, 3);
console.log(cone.PrintShape());
cone.area();

//Sphere
class Sphere implements Shape {
    shapeName: string = "Sphere";
    r: number;
    constructor(r: number) {
        this.r = r;
    }
    PrintShape = (): string => { return this.shapeName }
    area = () => {
        console.log(4 * 3.14 * (this.r * this.r));
    }
}
let sp = new Sphere(3);
console.log(sp.PrintShape());
sp.area();

//Rectangle 
class Rectangle implements Shape {
    shapeName: string = "Rectangle ";
    l: number;
    b: number;
    constructor(l: number, b: number) {
        this.b = b;
        this.l = l;
    }
    PrintShape = (): string => { return this.shapeName }
    area = () => {
        console.log(this.l * this.b);
    }
}
let rec = new Rectangle(4, 3);
console.log(rec.PrintShape());
rec.area();