// 1. SINGLE RESPONSABILITY PRINCIPLE: Software entities should have only one main responsability.

type EmployeeReport = {
  id: number;
  name: string;
  message: string;
  usdExchangeRate: number;
  usdSalary: number;
};
// Function to print the report with all data
function printReport(report: EmployeeReport): void {
  console.log(report);
}
// Function to calculate salary in $COP
function calculateSalaryCop(report: EmployeeReport): number {
  return report.usdExchangeRate * report.usdSalary;
}

const employee1: EmployeeReport = {
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
  id: number;
  nombre: string;
  color: string;

  constructor(id: number, nombre: string, color: string) {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
  }

  getInfo(): void {
    console.log(`${this.id}: ${this.nombre} de color ${this.color}`);
  }

  setColor(color: string): void {
    this.color = color;
  }
}

// New class instance
const manzana = new Comida(1, "manzana", "rojo");
manzana.getInfo();
manzana.setColor("verde");
manzana.getInfo();

class Galleta extends Comida {
  sabor: string;

  constructor(id: number, nombre: string, color: string, sabor: string) {
    super(id, nombre, color);
    this.sabor = sabor;
  }

  setSabor(sabor: string): void {
    this.sabor = sabor;
  }

  getSabor(): void {
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
  makeSound(): void {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

class AnimalShelter {
  private animals: Animal[] = [];

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  makeAllSounds(): void {
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


/* 4. INTERFACE SEGREGATION PRINCIPLE: 
Software entities shouldn't implement interfaces they don't need, insted, only implement interfaces they use. */

interface SoundMakingAnimal {
  makeSound(): void;
}

interface FlyingAnimal {
  fly(): void;
}

interface SwimmingAnimal {
  swim(): void;
}

class Doggy implements SoundMakingAnimal, SwimmingAnimal {
  makeSound(): void {
    console.log("Woof");
  }

  swim(): void {
    console.log("Dog paddling");
  }
}

class Bird implements SoundMakingAnimal, FlyingAnimal {
  makeSound(): void {
    console.log("Chirp");
  }

  fly(): void {
    console.log("Flying high");
  }
}


/* 5. DEPENDENCY INVERSION PRINCIPLE:
High-level modules should not depend on low-level modules. Both should depend on abstractions.
Abstractions should not depend on details. Details should depend on abstractions. */

interface Switchable {
    turnOn(): void;
    turnOff(): void;
}

class LightBulb implements Switchable {
    turnOn(): void {
        console.log("The light bulb is on");
    }

    turnOff(): void {
        console.log("The light bulb is off");
    }
}

class Fan implements Switchable {
    turnOn(): void {
        console.log("The fan is on");
    }

    turnOff(): void {
        console.log("The fan is off");
    }
}

class Switch {
    private device: Switchable;

    constructor(device: Switchable) {
        this.device = device;
    }

    operate(): void {
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


