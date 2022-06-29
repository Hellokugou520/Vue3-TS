type SexName = "男" | "女";
class Person {
  // public关键字定义公共属性或方法，默认情况下就是public
  public name: string;
  // protected关键字定义的属性或方法可以在类自身以及子类中进行访问
  protected age: number;
  // readonly关键字定义只读属性，可以在类的构造器中进行赋值，并且赋值之后不可修改
  readonly sex: SexName;

  constructor(name: string, age: number, sex: SexName) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  getAge() {
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }
}

class Student extends Person {
  // private关键字定义私有属性或方法，只能在类内部访问
  private id: number;

  constructor(name: string, age: number, sex: SexName, id: number) {
    super(name, age, sex);
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }
}

let p = new Person("Jack", 18, "男");
console.log(p);
console.log(p.name);
// console.log(p.age);
p.setAge(20);
console.log(p.getAge());
console.log(p.sex);
// p.sex = "女";

let s = new Student("Mike", 19, "男", 1);
console.log(s);
p.setAge(21);
console.log(p.getAge());
// console.log(s.id);
s.setId(2);
console.log(s.getId());

export {};
