// printing
console.log("Hey from index.js");
// console.warn("Hey from index.js");
// console.error("Hey from index.js");

// variabile si tipuri de date
var carName = "Audi";
let personName = "Virgil";
const courseType = "JavaScript";

// var - reassignable/redeclarable
// var carName = "BMW";
// var carName = "Mercedes";

// let - reassignable
// personName = "Ana";

// const - nothing

// String
const char = "c";
// Number - integer
const nr = 10;
// Number - float
const float = 5.687;
// Boolean
const b1 = true; // 1
const b2 = false; // 0
// Null
let n = null;
// Undefined
let u = undefined;
console.log(char, nr, float, b1, b2, n, u);

// Object
// Array
const arr = ["Ana", "Virgil", "Victor", "Tudor"];
// Object
const person = { firstName: "Pop", lastName: "Ion", age: 30, address: "asd" };
console.log(arr, person);

// Functions
function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  r;

  return a / b;
}

function power(a, b) {
  return a ** b;
}

function divisionRest(a, b) {
  return a % b;
}

console.log("Am fost" + " Am venit" + " Am venit 2");

//comparatie float
console.log("3" + 3);
console.log("5" - 3);
console.log(0.1 + 0.2 === 0.3, "comparatie float");

console.log("Calcule cu functii");

let a = 5;
let b = 10;
let suma = sum(a, b);
console.log(suma);

a = 15;
b = 25;
suma = sum(a, b);
console.log(suma);

a = 30;
b = 25;
suma = sum(a, b);
console.log(suma);

a = 60;
b = 25;
suma = sum(a, b);
console.log(suma);

function canVote(age) {
  if (age >= 18) return "Da, se poate vota";
  else return "Nu, nu se poate vota";
}

console.log("Booleene");
console.log(canVote(15));
console.log(canVote(20));

function testResult(result) {
  if (result >= 8) {
    return "felicitari";
  } else if (result >= 5 && result < 8) {
    return "e ok";
  } else {
    return "picat";
  }
}

console.log(testResult(10));
console.log(testResult(8));
console.log(testResult(7));
console.log(testResult(3));

function canEnterFestival(age, withParents, drunk) {
  if ((age >= 14 || withParents) && !drunk) return "da";
  else return "nu";
}

console.log(canEnterFestival(18, false, true));
console.log(canEnterFestival(13, true, true));

function canEnterPlane(identifier) {
  if (identifier == "buletin") return "da";
  else if (identifier !== "buletin") return "Serios?";
  return "nu";
}

console.log(canEnterPlane("buletin"));
console.log(canEnterPlane("abonament la sala"));

let s;
function ageStatistics(age) {
  switch (age) {
    case 14:
      s = "s1";
      break;
    case 20:
      s = "s2";
      break;
    case 30:
      s = "s3";
      break;
    case 40:
      s = "s4";
      break;
    default:
      return "nicio statistica";
  }
  return s;
}

console.log(ageStatistics(14));
console.log(ageStatistics(40));
console.log(ageStatistics(50));
