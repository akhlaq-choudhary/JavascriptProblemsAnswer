let myarr = [1, 2, 3, 4, 5];
function cycleArray(arr, cycle) {
  let temp;
  let end;
  for (let i = 0; i < cycle; i++) {
    end = arr.length - 1;
    temp = arr[0];
    arr[0] = arr[end];
    while (end > 1) {
      arr[end] = arr[end - 1];
      end--;
    }
    arr[1] = temp;
  }
}

cycleArray(myarr, 1000);
console.log(myarr);
