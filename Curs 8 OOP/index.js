// encapsulation
// getter/setter
// "this"

const user = {
  name: "Tudor",
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    // ...
    // ...
    // ...
    this.name = name;
  },
  country: {
    name: "Romania",
    getCountryName: function () {
      return this.name;
    },
  },
};

const userName = user.getName();
console.log(userName);
user.setName("Ana");
console.log(user.getName());
console.log(user.country.getCountryName());


const obj = {
  userName: "Virgil",
  f2: function () {
    console.log(this.userName);
  },
};
obj.f2();

// setTimeout(() => {
//   console.log("Dupa timeout");
// }, 2000);

const logger = {
  name: "Virgil",
  print: function (greeting = "hello") {
    console.log(`${greeting}, ${this.name}`);
  },
};

setTimeout(logger.print, 1000);

setTimeout(() => {
  logger.print();
}, 1000);

const bindedPrint = logger.print.bind({ name: "Ana" });
setTimeout(bindedPrint, 1000);
