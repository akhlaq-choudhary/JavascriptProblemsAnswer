function printParantesis(str, n, open, close) {
  if (open + close === 2 * n) {
    console.log(str);
    return;
  }

  if (open < n) {
    printParantesis(str + "(", n, open + 1, close);
  }
  if (close < open) {
    printParantesis(str + ")", n, open, close + 1);
  }
}
printParantesis("", 5, 0, 0);
