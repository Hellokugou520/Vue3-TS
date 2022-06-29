function makeArea(shape: Shape) {
  return shape.getArea();
}

abstract class Shape {
  // abstract定义抽象方法，抽象方法必须存在于抽象类中
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  getArea() {
    return Math.PI * this.r * this.r;
  }
}

console.log(makeArea(new Rectangle(10, 20)));
console.log(makeArea(new Circle(10)));
// 抽象类无法被实例化
// console.log(makeArea(new Shape()));
