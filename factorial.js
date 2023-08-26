// factorial 9
function multiSum(value) {
  let multi = 1;
  for (let i = 1; i <= value; i++) {
    multi = multi * i;
  }
  return multi;
}
let result = multiSum(9);
console.log(result);

//  Do same 9! in reverse way.
function multiSumReverse(values) {
  let mul = 1;
  for (let i = values; i >= 1; i--) {
    mul = mul * i;
  }
  return mul;
}
let results = multiSumReverse(9);
console.log(results);

//  Do same 9! in reverse way in while loop
function valueReverse(value) {
  let multiplication = 1;
  let i = value;
  while (i >= 1) {
    multiplication = multiplication * i;
    i--;
  }
  return multiplication;
}
let finalValue = valueReverse(7);
console.log("Total 7! is", finalValue);
