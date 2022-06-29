const array = [1, 2, 3, 4];

function sub(arr, newArray, index) {
  if (arr.length === index) {
    console.log(newArray);
    return;
  }
  sub(array, newArray, index + 1);
  newArray.push(array[index]);

  sub(array, newArray, index + 1);
  newArray.pop();
}
sub(array, [], 0);
