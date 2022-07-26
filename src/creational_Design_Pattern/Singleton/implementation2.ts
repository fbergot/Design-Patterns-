class Singleton2 {
   static _instance: Singleton2;
   _time: number = 0;

   constructor() {
      if (Singleton2._instance) {
         return Singleton2._instance;
      }
      this._time = new Date().getTime();
      Singleton2._instance = this;
   }
   get time() {
      return this._time;
   }
}

const inst = new Singleton2();
const instBis = new Singleton2();

console.log(inst.time); // 1645284670507
console.log(instBis.time); // 1645284670507
console.log(Object.is(inst, instBis)); // true, same object
