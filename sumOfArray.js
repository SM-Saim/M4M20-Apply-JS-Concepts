// write the program for all the sum value which is an array. and print only odd numbers.

function sumNum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let indexRange = i; //er maddome array er modde koto porjonto index ase seta janlam
    let arrayValue = array[indexRange]; //index er maddome array elements gula k array theke ber kora
    sum = sum + arrayValue;
    // console.log(indexRange, arrayValue, sum);
  }
  return sum;
}

function oddValue(number) {
  let allOdd = [];
  for (let i = 0; i < number.length; i++) {
    var indexRange = i;
    var indexValue = number[i];
    if (indexValue % 2 !== 0) {
      console.log(indexRange, indexValue);
      allOdd.push(indexValue);
    }
  }
  return allOdd;
}

let value = [33, 54, 66, 45, 43];
let oddAll = oddValue(value);
console.log(oddAll);
let valueAll = sumNum(oddAll);
console.log(valueAll);
