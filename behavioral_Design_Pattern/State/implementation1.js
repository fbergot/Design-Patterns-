// ---------------------------------------------- State Pattern
class ContextSeason {
    constructor() {
        this.states = [
            new Season('spring'),
            new Season('summer'),
            new Season('fall'),
            new Season('winter'),
        ];
        this._currentState = this.states[0];
    }

    handleState() {
        const lengthState = this.states.length;
        const currentStateIndex = this.states.findIndex((seasonInst) => seasonInst.season === this._currentState.season);
        if (currentStateIndex < lengthState - 1) {
            this._currentState = this.states[currentStateIndex + 1];
        } else {
            this._currentState = this.states[0];
        }
    }
    get currentSeason() {
        return this._currentState.season;
    }
}

// Generation state
class Season {
    constructor(season) {
        this._season = season;
    }
    get season() {
        return this._season;
    }
}

const context = new ContextSeason;

// 1 ->> 0
console.log(context.currentSeason); // spring

// 2 ->> 1
context.handleState();
console.log(context.currentSeason); // summer

// 3 ->> 2
context.handleState();
console.log(context.currentSeason); // fall

// 4 ->> 3
context.handleState();
console.log(context.currentSeason); // winter

// 5 ->> 0
context.handleState();
console.log(context.currentSeason); // spring ...
