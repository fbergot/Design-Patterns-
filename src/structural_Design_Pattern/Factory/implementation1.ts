const data = [{ name: "Petter" }, { color: "red" }] as const;

type DataType_2 = readonly [{ name: string }, { color: string }];

class Animal {
   name: string;

   constructor(data: DataType_2[0]) {
      this.name = data.name;
   }
}

class Car {
   color: string;

   constructor(data: DataType_2[1]) {
      this.color = data.color;
   }
}

// ---------------------------- Factory Pattern
class Factory {
   constructor(data: DataType_2, type: string) {
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

const animal = new Factory(data, "animal");
const car = new Factory(data, "car");

console.log(animal); // Animal { name: 'Petter' }
console.log(car); // Car { color: 'red' }
