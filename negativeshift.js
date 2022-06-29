function shiftNegative(arr) {
  let start = 0;
  let end = arr.length - 1;
  let temp;
  while (start < end) {
    if (arr[start] < 0) {
      start++;
    }
    if (arr[end] >= 0) {
      end--;
    }

    if (arr[start] >= 0 && arr[end] < 0) {
      temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start++;
      end--;
    }
  }
  return arr;
}

console.log(shiftNegative([-5, 2, 3, 4, -3, 1, 0, -1]));
