// 1. variable
var myName = "hamad";

// premitive-number, string, boolean, undefined
// non-primitive-function, object

// 2. Math Operator--> +,-, *, /, %
// shorthand: += -= /= *= %=
// ++ --

//3. Array:
var nam = ["bakul", "MUkul", "Takul", "wakil"];
var nameCall = nam[2];
nam[2] = "Jikrul";
var lasrIndex = nam.indexOf("wakil");
console.log(lasrIndex);
console.log(nam);

//4. Conditional
// <, > <=, >=, !=, ==, ===, !==
if (nam.length < 2) {
  console.log("It's mini");
} else {
}

// 5.Loop
// while loop e 4 ta principle
var number = 1;
while (number <= 5) {
  console.log("hello");
  number++;
}

for (var number = 1; number <= 5; number++) {
  console.log("hello");
}

// 6. function
function rain() {
  if (rain < true) {
    return "Need Unbrella";
  } else {
    return "Don't need unberella";
  }
}
rain(true);

// 7. object
var computer = {
  name: "asus",
  ssd: 512,
};
