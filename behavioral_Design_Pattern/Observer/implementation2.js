// --------------------- Observer
class Subject {
    constructor() {
        this.observers = {
                more10: [],
                less10: []
        }
    }
    subscribe(target, type) {
        this.observers[type].unshift(target);
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
function less10() {
    console.log("n1 + n2 is less big than 10");
}

const subject = new Subject;

// add subscriber
subject.subscribe(more10, 'more10');
subject.subscribe(less10, 'less10');


function compare(n1, n2) {
    if (n1 + n2 > 10) {
        subject.trigger('more10'); // n1 + n2 is more big than 10
    } else {
        subject.trigger('less10');
    }
}

compare(5, 12);



