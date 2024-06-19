"use strict";
// 1. SINGLE RESPONSABILITY PRINCIPLE: Software entities should have only one main responsability.
// Function to print the report with all data
function printReport(report) {
    console.log(report);
}
// Function to calculate salary in $COP
function calculateSalaryCop(report) {
    return report.usdExchangeRate * report.usdSalary;
}
const employee1 = {
    id: 1,
    name: "John Doe",
    message: "June - Salary Report",
    usdExchangeRate: 3840,
    usdSalary: 700,
};
printReport(employee1);
console.log(calculateSalaryCop(employee1));
// 2. OPENED CLOSED PRINCIPLE: Software entities should be opened to extension, but close to modification
class Comida {
    constructor(id, nombre, color) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }
    getInfo() {
        console.log(`${this.id}: ${this.nombre} de color ${this.color}`);
    }
    setColor(color) {
        this.color = color;
    }
}
// New class instance
const manzana = new Comida(1, "manzana", "rojo");
manzana.getInfo();
manzana.setColor("verde");
manzana.getInfo();
class Galleta extends Comida {
    constructor(id, nombre, color, sabor) {
        super(id, nombre, color);
        this.sabor = sabor;
    }
    setSabor(sabor) {
        this.sabor = sabor;
    }
    getSabor() {
        console.log(this.sabor);
    }
}
// Se instancia la clase y se llama a sus métodos
const galleta = new Galleta(2, "oreo", "negro", "chocolate");
galleta.getInfo();
galleta.setColor("blanco");
galleta.getInfo();
galleta.getSabor();
/* 3. LISKOV SUSTITUTION PRINCIPLE:
states that objects of a derived class should be able to substitute objects of the base class without
altering the correct functioning of the program.
 */
class Animal {
    makeSound() {
        console.log("Generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}
class AnimalShelter {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    makeAllSounds() {
        this.animals.forEach((animal) => animal.makeSound());
    }
}
// Class instances
const shelter = new AnimalShelter();
const genericAnimal = new Animal();
const dog = new Dog();
const cat = new Cat();
shelter.addAnimal(genericAnimal);
shelter.addAnimal(dog);
shelter.addAnimal(cat);
shelter.makeAllSounds(); // Woof, Meow, Generic animal sound
class Doggy {
    makeSound() {
        console.log("Woof");
    }
    swim() {
        console.log("Dog paddling");
    }
}
class Bird {
    makeSound() {
        console.log("Chirp");
    }
    fly() {
        console.log("Flying high");
    }
}
class LightBulb {
    turnOn() {
        console.log("The light bulb is on");
    }
    turnOff() {
        console.log("The light bulb is off");
    }
}
class Fan {
    turnOn() {
        console.log("The fan is on");
    }
    turnOff() {
        console.log("The fan is off");
    }
}
class Switch {
    constructor(device) {
        this.device = device;
    }
    operate() {
        // Toggle the device
        console.log("Operating the switch");
        this.device.turnOn();
    }
}
// Class instance and methods calling
const bulb = new LightBulb();
const lightSwitch = new Switch(bulb);
lightSwitch.operate();
const fan = new Fan();
const fanSwitch = new Switch(fan);
fanSwitch.operate();
