class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(`${this.name} eating~`);
  }

  studying() {
    console.log("person studying~");
  }
}

class Student extends Person {
  id: number;

  constructor(name: string, age: number, id: number) {
    // 子类使用this前必须先调用super()方法
    super(name, age);
    this.id = id;
  }

  studying() {
    // 在子类方法中可以使用super调用父类方法
    super.studying();
    console.log("student studying~");
  }
}

let p = new Person("Jack", 18);
console.log(p);
p.eating();

let s = new Student("Mike", 19, 1);
console.log(s);
s.eating();
s.studying();

export {};
