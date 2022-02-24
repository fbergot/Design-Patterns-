// ----------------- 1 (old version)
class Calculator {
   operation(n1: number, n2: number, selectOp: string): number {
      switch (selectOp) {
         case "add":
            return n1 + n2;
         case "sub":
            return n1 - n2;
         default:
            throw Error("Bad selectOp");
      }
   }
}

// ----------------- 2 (new version)
class NewCalculator {
   static add(n1: number, n2: number): number {
      return n1 + n2;
   }
   static sub(n1: number, n2: number): number {
      return n1 - n2;
   }
}

// -------------- Adapter (Calc 1 => Calc 2)
class AdapterCalculator {
   operation(n1: number, n2: number, selectOp: string): number {
      switch (selectOp) {
         case "add":
            return NewCalculator.add(n1, n2);
         case "sub":
            return NewCalculator.sub(n1, n2);
         default:
            throw Error("Bad selectOp");
      }
   }
}

const adapterCalc = new AdapterCalculator();

console.log(adapterCalc.operation(10, 20, "add")); // 30
console.log(adapterCalc.operation(20, 10, "sub")); // 10
