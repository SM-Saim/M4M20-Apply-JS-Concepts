//sum of multiplication from 1-9
function multiSum(value) {
  let multi = 1;
  for (let i = 1; i <= value; i++) {
    multi = multi * i;
  }
  return multi;
}
let result = multiSum(9);
console.log(result);
