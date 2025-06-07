//problema 1
const findSquare = (num) => {
  return num * num;
};
console.log(findSquare(6));
console.log(findSquare(10));
console.log(findSquare(0));
console.log(findSquare(-12));

//problema 2
const getRandom = (start, end) => {
  let number = Math.random() * (end - start) + start;
  if (number < start || number >= end) {
    while (number < start || number >= end)
      number = Math.random() * (end - start) + start;
  }
  return number;
};
console.log(getRandom(3, 5));

//problema 3
const aparitii = (sir, letter) => {
  let aparitii = 0;
  for (let i = 0; i < sir.length; i++)
    if(sir[i].toLowerCase() === letter.toLowerCase())
        aparitii++;
    return aparitii;
};
console.log(aparitii("A Imi place programarea", "a"));
console.log(aparitii("R Vreau sa lucrez în IT", "r"));


//problema 4
const addNumber = (...argumente) => {
    let suma = 0;
    for (let i = 0; i < argumente.length; i++) {
        suma += argumente[i];
    }
    return suma;
};
console.log(addNumber(1, 2, 3));      
console.log(addNumber(1, 2, 3, 4, 5));