// Fake data
const data = [
    {name: 'Petter'},
    {color: 'red'},
]

class Animal { 
    constructor(data) {
        this.name = data.name;
    }
}

class Car {
    constructor(data) {
        this.color = data.color;
    }
}

// -------------------- Factory Pattern
class Factory {
    constructor(data, type) {
        switch (type) {
            case 'car':
                return new Car(data[1]);
            case 'animal':
                return new Animal(data[0]);
        }
    }
}

const animal = new Factory(data, 'animal');
const car = new Factory(data, 'car');

console.log(animal); // Animal { name: 'Petter' }
console.log(car); // Car { color: 'red' }
