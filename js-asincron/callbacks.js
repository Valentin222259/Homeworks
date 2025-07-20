import fs from "fs";
// call stack - cod sincron
// event loop - cod asincron

// callbacks -> easy to write, hard to maintain
// callback hell
fs.readFile("./fisier.txt", "utf-8", (e1, data1) => {
  fs.readFile("./fisier_copie.txt", "utf-8", (e2, data2) => {
    fs.writeFile("./fisier_final.txt", data1 + " " + data2, () => {
      console.log("Am terminat de citit si de scris fisiere.");
    });
  });
});