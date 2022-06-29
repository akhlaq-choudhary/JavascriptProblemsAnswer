function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let d = i + 1; d <= arr.length; d++) {
      if (arr[i] === arr[d]) {
        delete arr[d];
      }
    }
  }

  return arr.flat();
}
let arr = new Array(1000000000000000000000000000000000000000000000000000).fill(
  1
);
console.log(removeDuplicate(arr));
