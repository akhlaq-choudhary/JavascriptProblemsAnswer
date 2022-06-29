// function colomnAddition(arr) {
//   let ans = [];

//   let sum = 0;
//   let row = 0;
//   let col = 0;
//   while (row < arr.length && col < arr[0].length) {
//     sum += arr[row][col];

//     row++;
//     if (row === arr.length) {
//       ans.push(sum);
//       sum = 0;
//       row = 0;
//       col++;
//     }
//   }

//   return ans;
// }
let matrix = [
  [2, 3, 1, 10],
  [4, 5, 6, 20],
  [5, 6, 8, 20],
  [10, 4, 5, 6],
  [100, 200, 300, 400],
];

// console.log(colomnAddition(matrix));

let newArray = matrix.reduce((a, b) => a.concat(b));
// let arr = [1, 2, 3, 4, 5];
// let addedArray = arr.reduce((a, b) => a + b);
// console.log(typeof addedArray);
console.log(newArray);
