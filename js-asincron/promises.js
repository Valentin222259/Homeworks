import fs from "fs";

const { promises: fsp } = fs;
/*
fsp.readFile("./fisier.txt", "utf-8")
  .then((data1) => {
    console.log(data1);
    console.log("start reading file 2");
    return fsp.readFile("fisier_copie.txt", "utf-8");
  })
  .then((data2) => {
    console.log(data2);
    console.log("start reading file 3");
    return fsp.readFile("fisier_final.txt", "utf-8");
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((err) => {
    console.error("A apărut o eroare:", err);
  });
*/


  /*
  fsp
  .readFile("./fisier2.txt", "utf-8")
  .then((data1) => console.log(data1))
  .catch((err) => console.log("am o eroare"));

  fsp
  .readFile("./fisier.txt", "utf-8")
  .then((data1) => console.log(data1))
  .catch((err) => console.log(err));
*/
//avantajul la promise-uri e ca imi manaresc eroarea cum vreau, nu ca la callbacks










/*
//inca o chestie super de ajutor, Promise.all
//oricate promis-uri am da in acel array el sa le execute toate si sa avem la final doar un then si doar un catch
const mergeFiles = (path1, path2, path3) => {
  const p1 = fsp.readFile(path1, "utf-8");
  const p2 = fsp.readFile(path2, "utf-8");

  const promises = Promise.all([p1, p2]);

  return promises
    .then((data1, data2) => {
      console.log(data1, data2);
    })
    .catch((e) => {
      console.log(e, "eroarea mea");
    });
};

mergeFiles("./fisier.txt", "./fisier_copie2.txt", "./fisier_final.txt");

//dezavantajul la aceasta metoda e ca daca nu se executa toate promis-urile va da in catch eroarea primului promise problema
*/











/*
//putem crea promise-uri
const myPromise = new Promise((resolve, reject) => {
  fs.readFile("./fisier.txt", "utf-8", (error, data) => {
    if (error) {
      reject(error);
      return;
    }

    resolve(data);
  });
});

myPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/











// async/await
const getDataFromAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["a", "b", "c"]);
    }, 2000);
  });
};

const handleResponse = async () => {
  console.log("before");
  try{
    const response = await getDataFromAPI();
    console.log(response);
  }catch(err){
    console.log(err, "EROARE");
  } finally{
    console.log("finally");// se executa indiferent daca avem eroare sau nu, nu conteaza daca ajungem in catch sau nu
  }
  console.log("after");
};

handleResponse();



