class User {
    constructor(name) {
        this.name = name;
    }
}

// Decorator
const userWithSayHello = function (userInstance) {
    userInstance.sayHello = function () {
        console.log('Hello !');
    }
    return userInstance;
}
const user1 = userWithSayHello(new User('flo'));
user1['sayHello'](); // Hello !