// 这种函数无法通过联合类型实现
// function sum(num1: number | string, num2: number | string): number | string {
//   return num1 + num2;
// }

// 这种情况可以用到函数的重载
// 函数的重载签名
function sum(num1: number, num2: number): number;
function sum(num1: string, num2: string): string;

// 函数的主体
function sum(num1: any, num2: any): any {
  return num1 + num2;
}

console.log(sum(10, 20));
console.log(sum("10", "20"));

// 但是在函数重载中，函数主体本身是不能直接被调用的
// console.log(sum(10, "20"));
