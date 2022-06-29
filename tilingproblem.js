function tiling(n) {
  if (n === 1 || n === 2) return n;

  return tiling(n - 1) + tiling(n - 2);
}
console.log(tiling(1));
