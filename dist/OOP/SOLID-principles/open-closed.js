//OCP (Open/closed principle) - Принцип відкритості/закритості
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class AreaCalculator {
    calculate(shape) {
        return shape.calculateArea();
    }
}
const circle = new Circle(5);
console.log(circle.calculateArea());
export {};
//# sourceMappingURL=open-closed.js.map