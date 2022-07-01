export function sum(num1: number, num2: number) {
  return num1 + num2;
}

// 命名空间(TS早期的模块化规范)
export namespace MySpace {
  export function sum(num1: number, num2: number) {
    return num1 + num2;
  }
}

console.log(MySpace.sum(1, 2));
