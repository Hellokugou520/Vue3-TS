class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // 推荐使用访问器来访问类中的一些私有属性
  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

let p = new Person("Jack");
p.name = "Tom";
console.log(p.name);

export {};
