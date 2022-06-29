// function search(arr, x) {
//   if (arr.length === 0) {
//     return false;
//   }
//   let rowLen = arr.length;
//   let colLen = arr[0].length;

//   let i = 0,
//     j = colLen - 1;
//   while (i < rowLen && j >= 0) {
//     if (arr[i][j] === x) return true;
//     else if (arr[i][j] < x) i++;
//     else if (arr[i][j] > x) j--;
//   }
//   return false;
// }
function search(arr, x) {
  let rows = 0;
  let colomn = 0;
  let rowLen = arr.length;
  while (colomn < arr[0].length) {
    if (arr[rows][colomn] === x) {
      return true;
    }
    if (rows === rowLen - 1) {
      colomn++;
    }
    if (rows < rowLen - 1) {
      if (arr[rows][colomn] < x && arr[rows + 1][colomn] <= x) rows++;
      else colomn++;
    }
    if (rows > 0 && arr[rows - 1][colomn] === x) {
      rows--;
    }
  }
  return false;
}

let arr = [
  [0, 7, 1, 4],
  [3, 9, 8, 33],
  [5, 10, 20, 22],
];

console.log(search(arr, 0)); // return false
