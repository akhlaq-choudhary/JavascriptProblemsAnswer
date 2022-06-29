function printNumPyramid(num) {
  let str = "";
  let strarr = [];
  for (let i = 1; i <= num; i++) {
    strarr.push(i);
    if (i < num) {
      strarr.push(" ");
    }
  }
  str = strarr.join("");
  for (let j = 0; j < strarr.length - 1; j++) {
    if (strarr[j] != " " && strarr[j] != num) {
      strarr.splice(strarr.indexOf(strarr[j]), 1);
    }
    str += "\n";

    str += strarr.join("");
  }
  let len = strarr.length;
  for (let c = num - 1; c >= 1; c--) {
    str += "\n";
    strarr.splice(len - 2, 0, c);
    len--;
    str += strarr.join("");
  }
  return str;
}
console.log(printNumPyramid(7));
