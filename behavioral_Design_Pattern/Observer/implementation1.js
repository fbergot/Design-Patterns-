// ------------------------ Observer
const Subject = class {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obsrv => obsrv !== observer);
    }
    trigger(productName) {
        this.observers.forEach(observer => {
            observer.addToWishList(productName);
        })
    }
}

const WishList = class {
    constructor() {
        this.products = [];
    }
    addToWishList(productName) {
        console.log(`add ${productName} in products`);
        this.products.unshift(productName);
    }
}

const Mailer = class {
    constructor(email) {
        this.email = email;
    }
    addToWishList(productName) {
        console.log(`Send email to ${this.email} with ${productName}`);
    }
}

const subject = new Subject;

const mailer = new Mailer('flo@test.fr');
const wishList = new WishList;

// add subscribers
subject.subscribe(mailer);
subject.subscribe(wishList);

subject.trigger('car'); // Send email to flo@test.fr with car; add car in products
// remove subscriber wishList
subject.unsubscribe(wishList);

subject.trigger('car'); // Send email to flo@test.fr with car;
