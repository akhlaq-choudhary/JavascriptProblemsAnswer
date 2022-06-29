function possibleroute(matrix, row, col) {
  if (row === -1 || col === -1) return 0;
  if (matrix[row][col] === -1) return 0;

  if (row === 0 && col === 0) return 1;

  return (
    possibleroute(matrix, row - 1, col) + possibleroute(matrix, row, col - 1)
  );
}
const matrix = [
  [0, 0, -1],
  [0, 0, 0],
  [-1, 0, 0],
];
console.log(possibleroute(matrix, 2, 2));
