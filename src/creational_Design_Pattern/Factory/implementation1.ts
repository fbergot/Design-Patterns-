const data: DataType_2 = [{ name: "Petter" }, { color: "red" }];

type DataType_2 = readonly [{ name: string }, { color: string }];

class Animal {
   name: string;

   constructor(data: { name: string }) {
      this.name = data.name;
   }
}

class Car {
   color: string;

   constructor(data: { color: string }) {
      this.color = data.color;
   }
}

// ---------------------------- Factory Pattern
class Factory {
   constructor(type: string) {
      switch (type) {
         case "car":
            return new Car(data[1]);
         case "animal":
            return new Animal(data[0]);
         default:
            throw Error("Bad type");
      }
   }
}

const animal = new Factory("animal");
const car = new Factory("car");

console.log(animal); // Animal { name: 'Petter' }
console.log(car); // Car { color: 'red' }
