// ----------------------------------------- Observer
type Target = () => void;
type Observers<T> = {
   [key: string]: T[];
};

class Subject1 {
   observers: Observers<Target>;

   constructor() {
      this.observers = {
         more10: [],
         less10: [],
      };
   }
   subscribe(target: Target, type: string) {
      if (type in this.observers) {
         this.observers[type].push(target);
         return;
      }
      throw Error("Bad key");
   }
   unsubscribe(target: Target, type: string) {
      if (type in this.observers) {
         this.observers[type] = this.observers[type].filter((obs) => !Object.is(obs, target));
         return;
      }
      throw Error("bad key");
   }
   trigger(type: string) {
      if (type in this.observers) {
         this.observers[type].forEach((observer) => void observer());
         return;
      }
      throw Error("Bad key");
   }
}

function more10() {
   console.log("n1 + n2 is more big than 10");
}
function more10_2() {
   console.log("> 10 !!");
}
function less10() {
   console.log("n1 + n2 is less big than 10");
}

const subject1 = new Subject1();

// add subscribers
subject1.subscribe(more10, "more10");
subject1.subscribe(more10_2, "more10");
subject1.subscribe(less10, "less10");

function compare(n1: number, n2: number, n: number) {
   if (n1 + n2 > n) {
      subject1.trigger("more10");
   } else {
      subject1.trigger("less10");
   }
}

compare(5, 9, 10); // n1 + n2 is more big than 10 ; < 10 !!
compare(1, 2, 10); // n1 + n2 is less big than 10
