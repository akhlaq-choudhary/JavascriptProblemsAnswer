function findUnique(arr) {
  let myarr = new Array();

  for (let i = 0; i < arr.length; i++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (myarr[arr[i][c]] === undefined) {
        myarr[arr[i][c]] = Boolean(myarr[arr[i][c]]);
      }
      myarr[arr[i][c]]++;
    }
  }

  for (let d = 0; d < myarr.length; d++) {
    if (myarr[d] === 1) {
      console.log(d);
    }
  }
}
let matrix = [
  [1, 2, 4, 5],
  [5, 2, 4, 0],
  [3, 0, 2, 4, 5],
];
findUnique(matrix);
