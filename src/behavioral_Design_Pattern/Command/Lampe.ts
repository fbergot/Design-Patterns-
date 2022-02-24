export class Lampe {
    marche() {
        console.log('marche');
    }
    arret() {
        console.log('arret');
    }
}

export class Lampe2 extends Lampe {
    constructor() {
        super();
    }
}
