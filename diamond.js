function diamond(size) {
  let space = size % 2 === 0 ? Math.floor(size / 2) - 1 : Math.floor(size / 2);
  let str = "";
  for (let i = size % 2 === 0 ? 2 : 1; i <= size; i += 2) {
    str += `${" ".repeat(space)}${"*".repeat(i)}`;
    str += "\n";
    space--;
  }
  let space1 = 0;
  for (let c = size; c >= 0; c -= 2) {
    if (c > 0) {
      str += `${" ".repeat(space1)}${"*".repeat(c)}`;
    }
    if (c > 2) {
      str += "\n";
    }

    space1++;
  }
  return str;
}
console.log(diamond(11));
