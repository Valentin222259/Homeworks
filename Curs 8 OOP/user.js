// Constructor
const make = (name, address) => {
  return {
    name,
    address,
    getName,
    getAddress,
  };
};

function getName(){
        return this.name;
    }
function getAddress(){
        return this.address;
    }
//
//
//
//
//
//
//
//
//
//
//
//

const user1 = make("Virgil", "ASD123");
console.log(user1.getName(), user1.getAddress());

const user2 = make("Ana", "ASD321");
console.log(user2.getName(), user2.getAddress());

const user3 = make("Tudor", "ASD");
console.log(user3.getName(), user3.getAddress());