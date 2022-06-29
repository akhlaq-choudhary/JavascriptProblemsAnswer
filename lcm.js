function lcm(num1, num2) {
  let greater;
  let smaller;
  if (num1 > num2) {
    greater = num1;
    smaller = num2;
  } else {
    greater = num2;
    smaller = num1;
  }
  let i = 1;
  while (true) {
    if ((greater * i) % smaller === 0) {
      return greater * i;
    }
    i++;
  }
}
console.log(lcm(24, 12));
