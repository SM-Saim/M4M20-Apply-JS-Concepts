// even odd finding
function even_odd(number) {
  if (number % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
even_odd(33);

// has return
function odd_even(num) {
  if (num % 2 == 0) {
    return "Even Num";
  } else {
    return "Odd Num";
  }
}
let input = 456;
let value = odd_even(input);
console.log(value);
