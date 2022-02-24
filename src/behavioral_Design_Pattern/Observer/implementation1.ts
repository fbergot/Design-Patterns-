interface Observer {
   addToWishList(productName: string): void;
}
// ------------------------ Observer
const Subject = class {
   observers: Observer[];
   constructor() {
      this.observers = [];
   }
   subscribe(observer: Observer) {
      this.observers.push(observer);
   }
   unsubscribe(observer: Observer) {
      this.observers = this.observers.filter((obsrv) => obsrv !== observer);
   }
   trigger(productName: string) {
      this.observers.forEach((observer) => {
         observer.addToWishList(productName);
      });
   }
};

const WishList = class {
   products: string[];
   constructor() {
      this.products = [];
   }
   addToWishList(productName: string) {
      console.log(`add ${productName} in products`);
      this.products.push(productName);
   }
};

const Mailer = class {
   email: string;
   constructor(email: string) {
      this.email = email;
   }
   addToWishList(productName: string) {
      console.log(`Send email to ${this.email} with ${productName}`);
   }
};

const subject = new Subject();

const mailer = new Mailer("flo@test.fr");
const wishList = new WishList();

// add subscribers
subject.subscribe(mailer);
subject.subscribe(wishList);

subject.trigger("car"); // Send email to flo@test.fr with car; add car in products
// remove subscriber wishList
subject.unsubscribe(wishList);

subject.trigger("car"); // Send email to flo@test.fr with car;
