// ----------------- 1
class Calculator {
    constructor() {
        this.operation = function (n1, n2, selectOp) {
            switch (selectOp) {
                case 'add':
                    return n1 + n2;
                case 'sub':
                    return n1 - n2;
            }
        }
    }
}
// ----------------- 2
class NewCalculator {
    static add(n1, n2) {
        return n1 + n2;
    }
    static sub(n1, n2) {
        return n1 - n2;
    }
}

const calcInstance = new Calculator;
console.log(calcInstance.operation(20, 10, 'add')); // 30

// -------------- Adapter Calc 2 -> Calc 1
class AdapterCalculator {
    constructor() {
        this.operation = function (n1, n2, selectOp) {
            switch (selectOp) {
                case 'add':
                    return NewCalculator.add(n1, n2);
                case 'sub':
                    return NewCalculator.sub(n1, n2);
            }
        }
    }
}
const calcInstanceAdapt = new AdapterCalculator;
console.log(calcInstanceAdapt.operation(20, 10, 'add')); // 30
