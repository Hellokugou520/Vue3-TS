// 在声明的变量后面写类型注解
let name: string = "Hello World";

let age = 18;
// 这行代码编辑器会给出报错提示，TypeScript里，在有些没有明确指出类型的地方，类型推断会帮助提供类型
// age = "18";

let isShow: boolean = true;

// 数组的两种类型注解方式
let arr1: string[] = []; // 推荐
let arr2: Array<string> = []; // 不推荐(在react jsx中会有冲突)

let obj: object = {
  name: "Jack",
  age: 18,
};
// 类型注解为object时，无法获取和设置对象中的属性
// console.log(obj.name);
// obj.name = "Mike";

let n1: null = null;
let n2: undefined = undefined;

let some: symbol = Symbol("some");

// any类型可以赋值给任意类型
let message: any = "anything";
// unknown类型只能赋值给any和unknown类型
let result: unknown;
if (true) {
  result = "success";
} else {
  result = 18;
}

// 没有返回值的函数
function sum(num1: number, num2: number): void {
  console.log(num1 + num2);

  //   return undefined;
}

// never类型表示那些永不存在的值的类型
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

// tuple元组
let tuple: [string, number] = ["Jack", 18];

// 对象类型&可选类型(注意：可选类型必须写在必选类型的后面，否则可能产生安全隐患)
function pointLog(point: { x: number; y: number; z?: number }) {
  console.log(point.x, point.y);
  // z是一个可选参数，那么它的值有可能为undefined，那么就可以使用非空类型断言
  isNaN(point.z!);
}
pointLog({ x: 1, y: 2 });

// type关键字可以定义类型别名
type idType = string | number;
// 联合类型
let id: idType = 1;

interface Swim {
  swimming: () => void;
}
interface Fly {
  flying: () => void;
}
// 交叉类型
type Action = Swim & Fly;
const myAction: Action = {
  swimming() {},
  flying() {},
};

// 类型断言：TypeScript只允许类型断言转换为更具体或更不具体的类型版本
// let el = document.getElementById("app") as HTMLImageElement;
// el.src = "http://www.baidu.com";

// 可选链操作符(ES语法)
type Person = {
  name: string;
  friends: {
    name: string;
    age?: number;
  };
};
let objInfo: Person = {
  name: "Jack",
  friends: {
    name: "Mike",
  },
};
console.log(objInfo.friends?.age);

// 空值合并运算符(ES语法)
let msg: string | null | undefined = null;
console.log(msg ?? "default");

// 字面量类型
let align: "left" | "right" = "left";
// align = "center"; // 报错

// 函数类型
type CalcFn = (num1: number, num2: number) => number;
function calc(fn: CalcFn) {
  console.log(fn(10, 20));
}
calc((num1, num2) => num1 + num2);

// TS中的this
// 需要指定this的类型，不然运行会产生报错
function say(this: { name: string }) {
  // 函数不同的调用方式，可能产生不同的this指向
  console.log(this.name);
}
let myObj = {
  name: "Jack",
  say,
};
myObj.say();

// 为了表示这是一个esmodule模块,否则ts会按照namespace模式解析
export {};
