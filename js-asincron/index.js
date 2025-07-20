import fs from "fs";

//callbacks ex1
const content = fs.readFile("./fisier.txt", "utf-8", (error, data) => {
console.log(data, "|| continutul fisier");
});//partea asta e cod asincron. Executa mai intai al doilea console.log, apoi primul
console.log(content);

const a = 2;//partea de cod sincron
const b = 3;
const sum = a + b;
console.log(sum);

const test = {
    lala: 'asd'
};
console.log(test);


//ex2
console.log("START");

const c = 5;
const d = 2;

console.log("START SUM");

const result = c + d;

setTimeout(() => {
  console.log("Hello async");
}, 100);//partea asincrona

console.log(result, "FINISH");
