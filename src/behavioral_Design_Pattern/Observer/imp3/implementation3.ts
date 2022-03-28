import FecthData from "./FetchData";

type Observed = (arg?: any) => void;

class Observer {
   observed: Observed[];
   funcInit: (observer: Observer) => void;
   pipe: any;

   constructor(funcInit: (observer: Observer) => void) {
      this.observed = [];
      this.funcInit = funcInit;
      this.funcInit(this);
      this.pipe;
   }

   subscribe(observed: Observed) {
      this.observed.push(observed);
   }

   next(arg: any) {
      this.observed.forEach((ob) => {
         if (this.pipe) {
            ob(this.pipe(arg));
         } else {
            ob(arg);
         }
      });
   }

   addPipe(funcPipe: (arg: any) => any) {
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

observer1$.subscribe((arg: any) => {
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
