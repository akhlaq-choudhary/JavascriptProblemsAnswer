console.time("dcode");
function printSpiral(arr) {
  let colStart = 0;
  let colEnd = arr[0].length - 1;
  let rowStart = 0;
  let rowEnd = arr.length - 1;
  let spiralarr = [];
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      if (!spiralarr.includes(arr[rowStart][i])) {
        console.log(arr[rowStart][i]);
        spiralarr.push(arr[rowStart][i]);
      }
    }
    rowStart++;
    for (let j = rowStart; j <= rowEnd; j++) {
      if (!spiralarr.includes(arr[j][colEnd])) {
        console.log(arr[j][colEnd]);
        spiralarr.push(arr[j][colEnd]);
      }
    }
    colEnd--;

    for (let k = colEnd; k >= colStart; k--) {
      if (!spiralarr.includes(arr[rowEnd][k])) {
        console.log(arr[rowEnd][k]);
        spiralarr.push(arr[rowEnd][k]);
      }
    }
    for (let k = colEnd; k >= colStart; k--) {
      if (!spiralarr.includes(arr[rowEnd][k])) {
        console.log(arr[rowEnd][k]);
        spiralarr.push(arr[rowEnd][k]);
      }
    }
    rowEnd--;
    for (let c = rowEnd; c >= rowStart; c--) {
      if (!spiralarr.includes(arr[c][colStart])) {
        console.log(arr[c][colStart]);
        spiralarr.push(arr[c][colStart]);
      }
    }
    colStart++;
  }
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
printSpiral(matrix);
console.timeEnd("dcode");
//Print matrix in a spiral form
// function printInSpiralForm(arr) {
//   let first_row = 0,
//     last_row = arr.length - 1;
//   let first_col = 0,
//     last_col = arr[0].length - 1;

//   while (first_row < last_row && first_col < last_col) {
//     //Left to right(first row)
//     for (let i = first_col; i <= last_col; i++) {
//       console.log(arr[first_row][i] + " ");
//     }
//     first_row++;

//     //Top to bottom(last column)
//     for (let i = first_row; i <= last_row; i++) {
//       console.log(arr[i][last_col] + " ");
//     }
//     last_col--;

//     //Right to Left(last row)
//     if (first_row <= last_row) {
//       for (let i = last_col; i >= first_col; i--) {
//         console.log(arr[last_row][i] + " ");
//       }
//       last_row--;
//     }

//     //Bottom to top(first column)
//     if (first_col <= last_col) {
//       for (let i = last_row; i >= first_row; i--) {
//         console.log(arr[i][first_col] + " ");
//       }
//       first_col++;
//     }
//   }
// }

// printInSpiralForm(matrix);
