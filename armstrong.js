function armstrong(num) {
  num = String(num);
  let newNum = 0;
  for (let i = 0; i < num.length; i++) {
    newNum += Number(num[i]) ** 3;
  }
  if (newNum == num) {
    console.log("this is a armsrtrong number");
  } else {
    console.log("this is not a arm strong number");
  }
}
armstrong(1536757856675467);
