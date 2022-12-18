var Cone = /** @class */ (function () {
    function Cone(r, h) {
        var _this = this;
        this.shapeName = "Cone";
        this.PrintShape = function () { return _this.shapeName; };
        this.area = function () {
            var l = Math.sqrt((_this.r * _this.r) + (_this.h * _this.h));
            console.log(3.14 * _this.r * (l + _this.r));
        };
        this.r = r;
        this.h = h;
    }
    return Cone;
}());
var cone = new Cone(2, 3);
console.log(cone.PrintShape());
cone.area();
//Sphere
var Sphere = /** @class */ (function () {
    function Sphere(r) {
        var _this = this;
        this.shapeName = "Sphere";
        this.PrintShape = function () { return _this.shapeName; };
        this.area = function () {
            console.log(4 * 3.14 * (_this.r * _this.r));
        };
        this.r = r;
    }
    return Sphere;
}());
var sp = new Sphere(3);
console.log(sp.PrintShape());
sp.area();
//Rectangle 
var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        var _this = this;
        this.shapeName = "Rectangle ";
        this.PrintShape = function () { return _this.shapeName; };
        this.area = function () {
            console.log(_this.l * _this.b);
        };
        this.b = b;
        this.l = l;
    }
    return Rectangle;
}());
var rec = new Rectangle(4, 3);
console.log(rec.PrintShape());
rec.area();
