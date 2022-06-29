function explodeBomb(arr) {
  for (let i = 0; i < arr.arr; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === -1) {
        if (
          i - 1 >= 0 &&
          i - 1 < arr.length &&
          j >= 0 &&
          j < arr[0].length &&
          arr[i - 1] != 1
        ) {
          arr[i - (1)[j]] = arr[i - 1][j] + 1;
        }
      }
    }
  }
}
