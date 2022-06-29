function reverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}
reverse("akhlaq");
