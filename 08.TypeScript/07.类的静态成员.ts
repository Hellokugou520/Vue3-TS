class Person {
  name: string = "Jack";
  static age: string = "18";

  static eating() {
    console.log(`eating`);
  }
}

// 无需实例化，通过类即可直接访问
console.log(Person.age);
Person.eating();
