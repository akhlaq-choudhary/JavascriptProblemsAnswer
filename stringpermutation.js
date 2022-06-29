function permutation(str, l, r) {
  if (l === r) {
    console.log(str);
  }
  for (let i = l; i <= r; i++) {
    permutation(swap(str, l, i), l + 1, r);
  }
}
function swap(str, l, i) {
  let arr = str.split("");
  let temp = arr[l];
  arr[l] = arr[i];
  arr[i] = temp;
  return arr.join("");
}
let string = "ABC";
permutation(string, 0, string.length - 1);
