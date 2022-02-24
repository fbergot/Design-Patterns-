const moviesDuration = [
   {
      movie: "Predator",
      duration: "107",
   },
   {
      movie: "Total Recall",
      duration: "94",
   },
];

type Movie = { movie: string; duration: string };

// ----------------------------------- Constuctor Pattern
class MyConstructor {
   _movieTitle: string;
   _minutesDuration: string;

   constructor(data: Movie) {
      this._movieTitle = data.movie;
      this._minutesDuration = data.duration;
   }

   get movieTitle() {
      return this._movieTitle;
   }

   get hDuration() {
      const numberMinDur = Number.parseInt(this._minutesDuration);
      const hours = Math.floor(numberMinDur / 60);
      const minutes = numberMinDur % 60;
      return `${hours}h${minutes}m`;
   }
}

const _inst1 = new MyConstructor(moviesDuration[0]);
const inst2 = new MyConstructor(moviesDuration[1]);

console.log(_inst1.hDuration); // 1h47m
console.log(inst2.hDuration); // 1h43m
