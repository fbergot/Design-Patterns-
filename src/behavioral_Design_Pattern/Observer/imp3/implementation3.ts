import FecthData from "./FetchData";

type Subscriber = (arg?: any) => void;

class Observer {
   subscribers: Subscriber[];
   funcInit: (observer: Observer) => void;
   pipe: any;

   constructor(funcInit: (observer: Observer) => void) {
      this.subscribers = [];
      this.funcInit = funcInit;
      this.funcInit(this);
      this.pipe;
   }

   subscribe(observed: Subscriber) {
      this.subscribers.push(observed);
   }

   next<U>(arg: U) {
      this.subscribers.forEach((ob) => {
         this.pipe ? ob(this.pipe(arg)) : ob(arg);
      });
   }

   addPipe<T, R>(funcPipe: (arg: T) => R) {
      this.pipe = funcPipe;
   }
}

const observer1$ = new Observer((observer) => {
   let i = 0;
   setInterval(() => {
      observer.next(i++);
   }, 1000);
});

observer1$.addPipe((arg) => {
   return `count: ${arg}`;
});

observer1$.subscribe((arg) => {
   console.log(arg);
});

// count: 0
// count: 1 ...

const observer2$ = new Observer((observer) => {
   const URL = "http://localhost:3000/api/project/all";
   const fetchData = new FecthData(URL);
   fetchData.fetch(observer);
});

observer2$.subscribe((data) => {
   console.log(`Data loaded: `, data);
});
