// 泛型：相当于将类型参数化
function sum<Type>(num: Type): Type {
  return num;
}

sum<number>(1);
sum<string>("1");
sum<number[]>([1, 2, 3]);

// 可以传入多个类型
/**
 * 常用的一些名称
 * T：Type的缩写，类型
 * K、V：Key和Value的缩写，键值对
 * E：Element的缩写，元素
 * O：Object的缩写，对象
 */
function foo<T, V>(n1: T, n2: V) {}
foo<string, number>("1", 1);

// 泛型接口
// 可以给默认值，也可以后续传入
interface Person<T1, T2> {
  name: T1;
  age: T2;
}
const p: Person<string, number> = {
  name: "Jack",
  age: 18,
};

// 泛型类
class Point<T> {
  x: T;
  y: T;
  z: T;

  constructor(X: T, Y: T, Z: T) {
    this.x = X;
    this.y = Y;
    this.z = Z;
  }
}
const p1 = new Point<number>(1, 2, 3);
const p2: Point<string> = new Point("1", "2", "3");

// 泛型约束
interface Length {
  length: number;
}
function getLength<T extends Length>(arg: T) {
  return arg.length;
}
getLength("123");
getLength([1, 2, 3]);
getLength({ length: 0 });
