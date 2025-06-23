/*
class Animal {
  animalSound() {
    console.log("The animal makes a sound");
  }
}

class Pig extends Animal {
  animalSound() {
    console.log("The pig says: wee wee");
  }
}

class Dog extends Animal {
  animalSound() {
    console.log("The dog says: bow wow");
  }
}

const myAnimal = new Animal();
const myPig = new Pig();
const myDog = new Dog();

myAnimal.animalSound(); // The animal makes a sound
myPig.animalSound();    // The pig says: wee wee
myDog.animalSound();    // The dog says: bow wow
*/

class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} from ${this.year} is starting...`);
  }
}

class Car extends Vehicle {
  constructor(brand, year, model) {
    super(brand, year); // apelează constructorul din Vehicle
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving.`);
  }
}

class Truck extends Vehicle {
  constructor(brand, year, loadCapacity) {
    super(brand, year);
    this.loadCapacity = loadCapacity;
  }

  load() {
    console.log(`${this.brand} truck is loading up to ${this.loadCapacity} kg.`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
const myTruck = new Truck("Volvo", 2018, 8000);

myCar.start();   // Toyota from 2020 is starting...
myCar.drive();   // Toyota Corolla is driving.

myTruck.start(); // Volvo from 2018 is starting...
myTruck.load();  // Volvo truck is loading up to 8000 kg.
