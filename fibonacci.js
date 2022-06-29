// function fibonacci(n) {
//   let num1 = 0;
//   let num2 = 1;
//   for (let i = 0; i < Math.ceil(n / 2); i++) {
//     num2 = num1 + num2;

//     num1 = num1 + num2;
//   }

//   if (n % 2 === 0) {
//     return num1;
//   }
//   return num2;
// }
// console.log(fibonacci(100));

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2); // Fn-1 + Fn-2
}
console.log(fib(40));
// let n = 10;

//  function returns the Fibonacci number
// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(n));
