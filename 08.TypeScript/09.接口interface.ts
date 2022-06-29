// type InfoType = { name: string; age: number };

// 声明对象类型的另外一种方式
interface InfoType {
  name: string;
  age: number;
}

let obj: InfoType = {
  name: "Jack",
  age: 18,
};

// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string;
}

let frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue",
};

// 通过interface来定义函数类型
interface CalcFn {
  (n1: number, n2: number): number;
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2);
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2;
};

calc(10, 20, add);

// 接口可以继承，并且支持多继承
interface Swim {
  swimming: () => void;
}

interface Fly {
  flying: () => void;
}

interface Action extends Swim, Fly {}

const action: Action = {
  swimming() {},
  flying() {},
};

// 通过implements关键字可以实现接口
class Fish implements Swim, Fly {
  swimming() {
    console.log("swimming");
  }
  flying() {
    console.log("flying");
  }
}

class Person implements Swim {
  swimming() {
    console.log("Person Swimming");
  }
}

function swimAction(swimable: Swim) {
  swimable.swimming();
}

// 所有实现了接口的类对应的对象, 都是可以传入
swimAction(new Fish());
swimAction(new Person());
swimAction({ swimming: function () {} });

// 接口可以重复定义(type别名是不可以重复定义的)
interface Repetition {
  name: string;
}

interface Repetition {
  age: number;
}

const repeat: Repetition = {
  name: "Tom",
  age: 18,
};
