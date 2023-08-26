function leapYear(value) {
  let inputValue = value % 2;
  if (inputValue === 0) {
    return value + " is a leap year";
  } else {
    return value + " is a not a leap year";
  }
}
let userInput = 2040;
let givenValue = leapYear(userInput);
console.log(givenValue);

// Here are the two conditions that any year must satisfy to be called a leap year
// 1. The year must be perfectly divisible by 400.
// 2. The number must be divisible by 4 but not by 100.

function leapYears(values) {
  if (values % 400 === 0 || (values % 4 === 0 && values % 100 !== 0)) {
    return values + " is a leap year";
  } else {
    return values + " is a not a leap year";
  }
}
let userInputs = 2000;
let givenValues = leapYears(userInputs);
console.log(givenValues);

// leap year

function leapYear(values) {
  let allLeapYear = [];
  for (let i = 0; i < values.length; i++) {
    let valueSplit = values[i];
    console.log(valueSplit);
    if (
      valueSplit % 400 === 0 ||
      (valueSplit % 4 === 0 && valueSplit % 100 !== 0)
    ) {
      console.log(valueSplit);
      allLeapYear.push(valueSplit);
    }
  }
  return allLeapYear;
}
let years = [2023, 2024, 2025, 2028, 2030];
let finalResult = leapYear(years);
console.log("Leap Years are", finalResult);
