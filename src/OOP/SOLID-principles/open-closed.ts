//OCP (Open/closed principle) - Принцип відкритості/закритості

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class AreaCalculator {
  public calculate(shape: Shape): number {
    return shape.calculateArea();
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea());

export {};
