//problema 1
const program = (titlu, portii, ingrediente) => {
  const reteta = {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente,
  };
  console.log("Titlu:", reteta.titlu);
  console.log("Portii:", reteta.portii);
  console.log("Ingrediente:", reteta.ingrediente);
};

program("Pizza", 3, ["sunca", "cas", "ketchup"]);

//problema 2
const propr = (obiect, proprietate) => {
  delete obiect[proprietate];
  return obiect;
};

const pr2Obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(propr(pr2Obj, "b"));

//problema 3
const showBooks = (
  Carte1,
  Autor1,
  ok1,
  Carte2,
  Autor2,
  ok2,
  Carte3,
  Autor3,
  ok3
) => {
  const carte = [
    { titlu: Carte1, autor: Autor1, esteCitita: ok1 },
    { titlu: Carte2, autor: Autor2, esteCitita: ok2 },
    { titlu: Carte3, autor: Autor3, esteCitita: ok3 },
  ];
  for (const i in carte) {
    console.log(carte[i].titlu + " de " + carte[i].autor);
    if (carte[i].esteCitita == true)
      console.log("Ai citit deja " + carte[i].titlu + " de " + carte[i].autor);
    else
      console.log(
        "Trebuie sa citesti " + carte[i].titlu + " de " + carte[i].autor
      );
  }
};

showBooks(
  "Amintiri din copilarie",
  "Ion Creanga",
  true,
  "Plubm",
  "George Bacovia",
  false,
  "Moara cu noroc",
  "Ioan Slavici",
  true,
);

