function User(name, address) {
  this.name = name;
  this.address = address;

  this.getName = getName;
  this.getAddress = getAddress;
  this.setName = setName;
}

function getName() {
  return this.name;
}

function getAddress() {
  return this.address;
}

function setName(newName) {
  this.name = newName;
}

const user = new User("Virgil", "adresa test");
console.log(user.getName(), user.getAddress());

user.setName("Tudor");
console.log(user.getName());
