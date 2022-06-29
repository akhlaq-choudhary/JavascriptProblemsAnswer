// function binoCo(n, k) {
//   if (k > n) return 0;

//   if (n === k || k === 0) {
//     return 1;
//   }
//   return binoCo(n - 1, k - 1) + binoCo(n - 1, k);
// }
// console.log(binoCo(40, 8));

function binomial(n, k) {
  if (typeof n !== "number" || typeof k !== "number") return false;
  var coeff = 1;
  for (var x = n - k + 1; x <= n; x++) coeff *= x;
  for (x = 1; x <= k; x++) coeff /= x;
  return coeff;
}

console.log(binomial(40, 8));
