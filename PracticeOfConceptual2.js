//Practice-1 uses of for of loop
function sumArr(numbers) {
  sum = 0;
  for (let item of numbers) {
    sum = sum + item;
  }
  return sum;
}
let arr = [2, 4, 6, 8, 10];
let allValue = sumArr(arr);
console.log("sum of array is", allValue);

// Practice-2 sum of odd numbers
function sumOdd(values) {
  oddSum = 0;
  for (let split of values) {
    if (split % 2 === 1) {
      oddSum = oddSum + split;
    }
  }
  return oddSum;
}
let array = [2, 3, 5, 6, 7, 9, 11, 8];
let output = sumOdd(array);
console.log("Sum of odd", output);

//Practice 3: My name is Daneal I am 29 years old. I live in Chattogram. write this line using by objet for info and by using functn for return the sentence.
function info(data) {
  const sentence =
    "My name is " +
    data.name +
    " I am " +
    data.age +
    " years old. I live in " +
    data.place;
  return sentence;
}

let myInfo = {
  name: "Daneal",
  age: 29,
  place: "Chattogram",
};

let fullLine = info(myInfo);
console.log(fullLine);

// Find the largest item of an array

function latgestItem(array) {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  return largest;
}

let item = [2, 4, 66, 8, 3, 55, 46, 99, 109];
let finalValue = latgestItem(item);
console.log("Largest item is", finalValue);

// Find the largest name of friends
function largestName(name) {
  let largest = name[0];
  for (let i = 1; i < name.length; i++) {
    let nameList = name[i];
    if (nameList.length > largest.length) {
      largest = nameList;
    }
  }
  return largest;
}
let names = ["Elies", "Jamsed", "KutubUddin", "Tuktekin", "Gundaru", "Samsha"];
let final = largestName(names);
console.log("Largest Name is", final);

// Factorial for 7
const num = 7;
let number = 1;
for (let i = num; i >= 1; i--) {
  number = number * i;
}
console.log(number);

// factorial for 5 in function
function fact(value) {
  if (value === 0 || value === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = value; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
let digits = 6;
let result = fact(digits);
console.log(result);

// Make a program that will take a sentence as an input and give the output as the number of vowel, consonent, space.

function sentence(input) {
  if (typeof input !== "string") {
    console.log("Please provide a string input");
  }
  let vowel = 0;
  let consonent = 0;
  let space = 0;
  for (i = 0; i < input.length; i++) {
    let char = input[i].toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowel++;
    } else if (char !== " ") {
      consonent++;
    } else {
      space++;
    }
  }
  let obj = {
    vowelCount: vowel,
    ConsonentCount: consonent,
    SpaceCount: space,
  };
  return obj;
}
let inputs = "The name of our school is BN";
let res = sentence(inputs);
console.log(res);
