// IIFE -> Imediately involved function expression
const a = 1;
const b = 2;
(function (a, b) {
  console.log("test 2");
})();

// HOF -> Higher order functions
const r = [1, 2, 3];
const calculateArea = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

const calculateDiameter = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateArea(r));
console.log(calculateDiameter(r));

const area = (radius) => {
  return Math.PI * radius * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(r, area));
console.log(calculate(r, diameter));

function f2() {
  console.log("test f");
}

function f1(f) {
  f();
}

f1(f2);

f1(() => console.log("test arrow function"));

f1(function () {
  console.log("test function fct");
});

// callbacks using HOF
function sum(f) {
  let a = 1;
  let b = 2;
  let sum = a + b;
  f(sum);
}
sum((rezultat) => console.log("rezultatul este " + rezultat));

// array methods
// map - remap original array - returns array
const numbers = [10, 20, 30, 40];
const numbersPlusOne = numbers.map((val, index) => {
  console.log(val, index);
  return val + 1;
});
console.log(numbers, numbersPlusOne, "MAP");

const users = [
  { name: "Virgil", age: 27 },
  { name: "Ana", age: 30 },
  { name: "Tudor", age: 22 },
  { name: "Ion", age: 10 },
];

const usersNames = users.map(function (user) {
  return user.name;
});
console.log(users, usersNames, "MAP");

// filter - search in array by conditions - returns array
const filteredUsers = users.filter((user) => {
  if (user.age <= 30 && user.age > 22) return true;
  return false;
});
console.log(filteredUsers, "FILTER");

// find - search in an array by conditions - returns first found value
const valueFound = users.find((user) => user.age <= 30 && user.age > 22);
console.log(valueFound, "FIND");

// some - if some values respects condition - returns boolean
const someMinors = users.some((user) => user.age > 40);
console.log(someMinors, "SOME");

const someMinors1 = users.some((user) => user.age < 18);
console.log(someMinors1, "SOME");

// every - if all values respect condition - returns boolean
const everyMajor = users.every((user) => user.age >= 18);
console.log(everyMajor, "EVERY");

//forEach - iterate over array
users.forEach((user) => {
  console.log(user, "FOREACH");
});

// forEach - iterate over array
const usersWithName = [];
const filteredWithUsers = [];

users.forEach((user) => {
  usersWithName.push(user.name);
  if (user.age <= 30 && user.age > 22) {
    filteredWithUsers.push(user);
  }
});
console.log(usersWithName);
console.log(filteredWithUsers);

//sort - sort array
const noArr = [6, 3, 9];
noArr.sort();
console.log(noArr);

const noArr2 = [33, 2, 8];
noArr2.sort();
console.log(noArr2);

// mama, masa => masa, mama
const strArr = ["B", "Z", "C", "BZ", "BC", "ZZ", "ZA"];
strArr.sort();
console.log(strArr);

const users2 = [
  { name: "Virgil", age: 27 },
  { name: "Ana", age: 30 },
  { name: "Tudor", age: 22 },
  { name: "Ion", age: 10 },
];

// return either 0, -1, 1
// -1 / valoare negativa => a sortat inaintea lui b
// 1 / valoare pozitiva => b sortat inaintea lui a
// 0 => a si b raman pe aceeasi pozitie

users2.sort((a, b) => (a.age < b.age ? -1 : 1));
console.log(users2);

//users2.sort((a, b) => (a.age - b.age));
//console.log(users2);

//reduce - agregari
const users3 = [
  { name: "Virgil", age: 27, salary: 1000 },
  { name: "Ana", age: 30, salary: 4000 },
  { name: "Tudor", age: 22, salary: 20000 },
  { name: "Ion", age: 10, salary: 3000 },
];

let sumSalary = 0;
users3.forEach((user) => (sumSalary = sumSalary + user.salary));
console.log(sumSalary);

const sumSalaryReduce = users3.reduce((acc, user) => {
  return acc + user.salary;
}, 0);
console.log(sumSalaryReduce);

const salaryConditionUsers = users3.reduce((acc, user) => {
  if (user.salary >= 4000) return [...acc, user.name];
  return acc;
}, []);
console.log(salaryConditionUsers);

const salaryConditionUsers2 = users3
  .reduce((acc, user) => {
    if (user.salary >= 4000) return [...acc, user.name];
    return acc;
  }, [])
  .filter((name) => name === "Ana");
console.log(salaryConditionUsers2);

let nrArr = [5, 3, 6, 1, 2, 4];
let nrArr2 = nrArr
  .map((nr) => nr + 10)
  .filter((nr) => nr >= 13)
  .sort((a, b) => a - b);
console.log(nrArr2);

// join
console.log(["A", "L", "String", "Ana", "Ion"].join(" "));

// concat
console.log([1, 2].concat([3, 4]));

// slice
console.log(["A", "B", "C", "D", "E"].slice(2, 4));

// findIndex => index / -1
console.log(["A", "B", "C", "D", "E"].findIndex((char) => char === "C"));

// indexOf => index / -1
console.log(["A", "B", "C", "D", "E"].indexOf("C"));

// includes => boolean
console.log(["A", "B", "C", "D", "E"].includes("C"));

// reverse
console.log(["A", "C", "E", "O", "#"].reverse());

