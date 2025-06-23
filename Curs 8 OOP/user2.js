class User {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  setName(newName) {
    this.name = newName;
  }
}

const user = new User("Virgil", "alta adresa");
console.log(user.getName());
user.setName("Tudor");
console.log(user.getName());
