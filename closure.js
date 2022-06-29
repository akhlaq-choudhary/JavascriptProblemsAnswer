function createIncrement() {
  let count = 0;
  let message = `Count is ${count}`;
  function increment() {
    count++;
    console.log(count);
  }
  count = 1;
  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }
  console.log(count);
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();

createIncrement();
increment();
log();
// log(); // What is logged?;
// increment();
// increment();
let arr = ["a", "d", "c", "b"];
function sortString(a, b) {
  b.localCompare(a);
}
let arr2 = arr.sort(sortString);
console.log(arr2);
