function reversePyramid(size) {
  let space = 0;
  let str = "";
  for (let i = size; i >= 0; i -= 2) {
    if (i > 0) {
      str += `${" ".repeat(space)}${"*".repeat(i)}`;
    }
    if (i > 2) {
      str += "\n";
    }

    space++;
    size--;
  }
  return str;
}
console.log(reversePyramid(9));
// without repeat function

// function reversePyramid(size) {
//   let str = "";
//   let newsize = size;
//   for (let i = 0; i <= Math.floor(newsize / 2); i++) {
//     for (let space = 0; space < i; space++) {
//       str += " ";
//     }
//     for (let star = size; star > 0; star--) {
//       str += "*";
//     }
//     if (i != Math.floor(newsize / 2)) {
//       str += "\n";
//     }
//     size -= 2;
//   }
//   return str;
// }
// console.log(reversePyramid(9));
