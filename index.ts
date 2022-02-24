import AdapterCalculator from "./src/creational_Design_Pattern/Adapter/implementation2";
import { Adapter, logAverageAge, data } from "./src/creational_Design_Pattern/Adapter/implementation1";


const calcInstanceAdapt = new AdapterCalculator;
console.log(calcInstanceAdapt.operation(20, 10, 'add')); // 30

const getUser2Inst = new Adapter(data);
logAverageAge(getUser2Inst.usersAge);// 26.5