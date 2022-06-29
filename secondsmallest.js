let myarr = [11, 34, 54, 22, 13, 78];

function secondSmallest(arr) {
  let secondMin = Math.min(...arr);
  arr.splice(arr.indexOf(secondMin), 1);
  secondMin = Math.min(...arr);
  return secondMin;
}
console.log(secondSmallest(myarr));
