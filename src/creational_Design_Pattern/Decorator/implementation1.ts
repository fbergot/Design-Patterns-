class User {
   name: string;

   constructor(name: string) {
      this.name = name;
   }
}

type FuncVoid = () => void;
type UserInstWithHello = {
   sayHello?: FuncVoid;
};

// ------------------- Decorator
const userWithSayHello = function (userInstance: User & UserInstWithHello, func: FuncVoid) {
   userInstance["sayHello"] = func;
   return userInstance;
};

const user1 = userWithSayHello(new User("flo"), () => void console.log("Hello !"));
if (user1.sayHello) {
   user1["sayHello"](); // Hello !
}
