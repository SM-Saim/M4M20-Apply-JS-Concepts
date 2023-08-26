// inch to fet with function
function inchToFeet(inchValue) {
  const feet = inchValue / 12;
  return feet;
}
let value = 140;
let finalValue = inchToFeet(value);
console.log(finalValue, "Feet");

var dadaInch = 120;
var dadaValue = inchToFeet(dadaInch);
console.log(dadaValue, "Feet");
