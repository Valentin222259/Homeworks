//problema 1

function pr1(nr) {
  if (nr % 10 == 0) return true;
  return false;
}

let nr = 1000;
if (pr1(nr) == true) console.log("Adevarat");
else console.log("Fals");

nr = 561;
if (pr1(nr) == true) consolr.log("Adevarat");
else console.log("Fals");

//problema 2
function tellFortune(N, Z, Y, X) {
  let propozitie = `Vei fi un ${X} în ${Y}, căsătorit cu ${Z} și vei avea ${N} copii.`;
  return propozitie;
}

console.log(tellFortune("2", "Ana", "Timisoara", "web-developer"));

//problema 3
function days(day) {
  switch (day) {
    case 1:
      console.log("Luni");
      break;
    case 2:
      console.log("Marti");
      break;
    case 3:
      console.log("Miercuri");
      break;
    case 4:
      console.log("Joi");
      break;
    case 5:
      console.log("Vineri");
      break;
    case 6:
      console.log("Sambata");
      break;
    case 7:
      console.log("Duminica");
      break;
    default:
      console.log("Saptamana are 7 zile!!!");
  }
}

console.log(days(1));
console.log(days(2));
console.log(days(3));
console.log(days(4));
console.log(days(5));
console.log(days(6));
console.log(days(7));
console.log(days(8));
