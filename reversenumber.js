let num = 345234;

let reverse = 0;
let remainder;
let originalNum = num;

while (num != 0) {
  remainder = num % 10;
  reverse = reverse * 10 + remainder;
  num = Math.floor(num / 10);
}

console.log(reverse);
