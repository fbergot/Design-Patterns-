class Singleton {
    _instance;
    constructor() {
        if (Singleton._instance) {
            return Singleton._instance;
        }
        this._time = new Date().getTime();
        Singleton._instance = this;
    }
    get time() {
        return this._time;
    }
}

const inst = new Singleton;
const instBis = new Singleton;

console.log(inst.time); // 1645284670507
console.log(instBis.time); // 1645284670507
console.log(Object.is(inst, instBis)); // true, same object