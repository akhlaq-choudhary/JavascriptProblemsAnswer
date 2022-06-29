function prime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primepall(range) {
  for (let i = 2; i <= range; i++) {
    if (prime(i)) {
      let reverse = "";
      let remainder;
      let newNum = i;
      while (newNum != 0) {
        remainder = newNum % 10;
        reverse += remainder;
        newNum = Math.floor(newNum / 10);
      }
      if (reverse == i) console.log(reverse);
    }
  }
}
primepall(50);
