// ---------------------------------------------- State Pattern
class ContextSeason {
    states: Season[];
    _currentState: Season;

    constructor() {
        this.states = [
            new Season('spring'),
            new Season('summer'),
            new Season('fall'),
            new Season('winter'),
        ];
        this._currentState = this.states[0];
    }
    handleState(): void {
        const lengthState = this.states.length;
        const currentStateIndex = this.states.findIndex((seasonInst) => Object.is(seasonInst, this._currentState));
        if (currentStateIndex < lengthState - 1) {
            this._currentState = this.states[currentStateIndex + 1];
        } else {
            this._currentState = this.states[0];
        }
    }
    get currentSeason(): string {
        return this._currentState.season;
    }
}

// Generation state
class Season {
    _season: string;

    constructor(season: string) {
        this._season = season;
    }
    get season(): string {
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
