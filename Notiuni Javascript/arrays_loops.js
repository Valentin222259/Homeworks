const arr = ["a", "b", "c"];

// accesare
console.log(arr);
console.log(arr.length);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

// modificari

// adaugari
arr[0] = "test";
arr[3] = "ceva";
arr[10] = "altceva";
arr.push("tot test"); // adaugare la final
arr.unshift("test inceput"); // adaugare la inceput
console.log(arr);

// stergere
delete arr[2];
arr.pop(); // stergere ultim item
arr.shift(); // stergere prim item
console.log(arr);

const a = 1;
let b = a;
b = b + 1;
console.log(a, b);

const list = ["Ana", "Andrei", "Ion", "Pop"]; // loc in memorie -> referinta
const copy = list; // copy -> loc in memorie -> referinta

copy.pop();
console.log(list, copy);

// destructurari
console.log("destructurari!!");
const correctCopy = [...list]; // "Ana", "Andrei", "Ion"
correctCopy.pop();
correctCopy.pop();
console.log(list, copy, correctCopy);

//first item
console.log("first item");
const anotherList = ["Ana", "Andrei", "Ion", "Pop"];
const [firstItem] = anotherList;
console.log({ firstItem });

//Headers, tail/rest
console.log("a1, ...c");
const [a1, ...c] = anotherList;
console.log(a1, c);

//merging
console.log("Merged list");
const list1 = ["a", "b"];
const list2 = ["c", "d"];
const mergedList = [...list1, ...list2];
console.log(list1, list2, mergedList);

//loops - iteratii
// for
console.log("ITERATII");
for (let i = 0; i < 10; i++) {
  console.log(anotherList[i]);
  // ...
}

console.log("POZITIE, VALOARE");
for (let i = 0; i < anotherList.length; i++) {
  console.log(i, anotherList[i]);
  // ...
}

console.log("INVERS");
for (let i = anotherList.length - 1; i >= 0; i--) {
  console.log(i, anotherList[i]);
}

for (let i = 0; i < anotherList.length; i++) {
  anotherList[i] = anotherList[i] + " Test";
}
console.log(anotherList);

console.log("factorial");
// 5! = 1 * 2 * 3 * 4 * 5
// iterative method
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(20));

// 5! = 1 * 2 * 3 * 4 * 5
// recursive method
console.log("recursive factorial");
const factorialRecursive = (num) => {
  if (num === 0) {
    return 1;
  }

  const rec = (i, result) => {
    if (i === 1) {
      return result;
    }
    return rec(i - 1, i * result);
  };

  return rec(num, 1); //rec(5, 1)
};

console.log(factorialRecursive(5));

// iterative
// countOfDivisors(2, 10); // num, range
console.log("Numar divizori");
const countOfDivisors = (num, range) => {
  let count = 0;
  // let i = range;
  let currentPosition = range;

  // i > 0
  while (currentPosition > 0) {
    if (currentPosition % num === 0) {
      count++; // count = count + 1
    }
    // i--
    currentPosition--; // count = count - 1
  }

  return count;
};

console.log(countOfDivisors(2, 10)); // 10, 8, 6, 4, 2
console.log(countOfDivisors(3, 10)); // 9, 6, 3
console.log(countOfDivisors(6, 60));

// recursive divizori
console.log("NR DIVIZORI RECURSIV");
const countOfDivisorsRecursive = (num, range) => {
    const iterate = (count, position) => {
        if (position === 0) {
            return count;
        }

        if (position % num === 0) {
            count++;
        }
        position--;

        return iterate(count, position);
    };

    return iterate(0, range);
};

console.log(countOfDivisorsRecursive(2, 5));
console.log(countOfDivisorsRecursive(2, 10));

//DO WHILE
console.log("CU DO WHILE");
const printing = (num) => {
    do {
        console.log(num, "numar");
        num--;
    } while (num > 0);
};
printing(5);
