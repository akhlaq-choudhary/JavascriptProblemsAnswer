function transpose(arr) {
  let prevrow = arr.length;
  let prevcol = arr[0].length;
  let diff = arr[0].length - arr.length;
  if (arr[0].length > arr.length) {
    for (let k = 0; k < diff; k++) {
      arr.push(new Array());
    }
  }
  if (arr[0].length < arr.length) {
    arr[0].length = arr.length;
  }
  let cols = arr[0].length;
  let rows = arr.length;
  for (let i = 0; i < rows; i++) {
    for (let j = i + 1; j < cols; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  for (let r = 0; r < arr.length; r++) {
    arr[r].length = prevrow;
  }
  arr.length = prevcol;
  return arr;
}
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.table(transpose(matrix));
