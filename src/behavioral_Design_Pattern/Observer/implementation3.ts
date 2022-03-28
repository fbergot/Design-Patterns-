type Observed = (arg?: any) => void;

class Observer {
   observed: Observed[];
   funcInit: (observer: Observer) => void;

   constructor(funcInit: (observer: Observer) => void) {
      this.observed = [];
      this.funcInit = funcInit;
      this.funcInit(this);
   }

   subscribe(observed: Observed) {
      this.observed.push(observed);
   }

   next(arg: any) {
      this.observed.forEach((ob) => void ob(arg));
   }
}

let i = 0;

const observer = new Observer((observer) => {
   setInterval(() => {
      observer.next(i++);
   }, 1000);
});

observer.subscribe((i: number) => {
   console.log(i);
});

observer.subscribe((i: number) => {
   console.log(i);
});

// 0 0
// 1 1
// 2 2
// 3 3
// ..
