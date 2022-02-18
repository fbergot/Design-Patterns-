// --------------------- Observer
class Subject {
    constructor() {
        this.observers = {
                more10: [],
                less10: []
        }
    }
    subscribe(target, type) {
        this.observers[type].push(target);
    }
    unsubscribe(target, type) {
        this.observers[type] = this.observers[type].filter((subscriber) => !(Object.is(subscriber, target)));
    }
    trigger(type) {
        this.observers[type].forEach((observer) => void observer());
    }
}

function more10() {
    console.log("n1 + n2 is more big than 10");
}
function more10_2() {
    console.log("< 10 !!");
}
function less10() {
    console.log("n1 + n2 is less big than 10");
}

const subject = new Subject;

// add subscribers
subject.subscribe(more10, 'more10');
subject.subscribe(more10_2, 'more10');
subject.subscribe(less10, 'less10');


function compare(n1, n2, n) {
    if (n1 + n2 > n) {
        subject.trigger('more10'); 
    } else {
        subject.trigger('less10');
    }
}

compare(5, 9, 10); // n1 + n2 is more big than 10 ; < 10 !!
compare(1, 2, 10); // n1 + n2 is less big than 10



