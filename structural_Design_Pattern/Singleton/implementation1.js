// Fake data
const data = {
    password: new Date().getTime(),
}

// Singleton Pattern
class Singleton {
    static _instance;

    constructor(data) {
        this._password = data.password
    }

    static _getInstance() {
        if (this._instance) return this._instance;
        else {
            this._instance = new Singleton(data);
            return this._instance;
        }
    }

    get password() {
        return this._password;
    }
}

const inst1 = Singleton._getInstance();
const inst1Bis = Singleton._getInstance();

console.log(inst1.password); // 1644960894846
console.log(inst1Bis.password); // 1644960894846
console.log(Object.is(inst1, inst1Bis)); // true, same object
