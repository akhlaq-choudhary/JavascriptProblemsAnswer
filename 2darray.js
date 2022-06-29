function printInSpiralForm(arr) {
  let first_row = 0,
    last_row = arr.length - 1;
  let first_col = 0,
    last_col = arr[0].length - 1;

  while (first_row < last_row && first_col < last_col) {
    //Left to right(first row)
    for (let i = first_col; i <= last_col; i++) {
      console.log(arr[first_row][i] + " ");
    }
    first_row++;

    //Top to bottom(last column)
    for (let i = first_row; i <= last_row; i++) {
      console.log(arr[i][last_col] + " ");
    }
    last_col--;

    //Right to Left(last row)
    if (first_row <= last_row) {
      for (let i = last_col; i >= first_col; i--) {
        console.log(arr[last_row][i] + " ");
      }
      last_row--;
    }

    //Bottom to top(first column)
    if (first_col <= last_col) {
      for (let i = last_row; i >= first_row; i--) {
        console.log(arr[i][first_col] + " ");
      }
      first_col++;
    }
  }
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
printInSpiralForm(arr);
