// sum of 1-10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  console.log(i, sum);
}
// sum of 1-15 numbers tasks in Function
function addNums(values) {
  let sum = 0;
  for (let i = 1; i <= values; i++) {
    sum = sum + i;
  }
  return sum;
}
let valuesHere = 15;
let allValues = addNums(valuesHere);
console.log(allValues);

// sum of 1-10 numbers tasks in Function
function addNum(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    let index = i;
    let allElements = values[i];
    sum = sum + allElements;
    console.log(index, allElements, sum);
  }
}
let valueHere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let allValue = addNum(valueHere);
