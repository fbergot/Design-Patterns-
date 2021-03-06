// --------------------------------- Template Pattern
const moviesData = [
   {
      movieName: "Predator",
      year: "1987",
   },
   {
      movieName: "Terminator",
      year: "1984",
   },
   {
      movieName: "Terminator 2",
      year: "1991",
   },
];

type Movies = { movieName: string; year: string };

// Template
class Search {
   protected filterMovies?: (query: string) => Movies[];
   protected movies: Movies[];

   constructor(movies: Movies[]) {
      this.movies = movies;
   }
   search(query: string): Movies[] | null {
      return this.filterMovies ? this.filterMovies(query) : null;
   }
}

class SearchByName extends Search {
   constructor(movies: Movies[]) {
      super(movies);
      this.filterMovies = (query) => {
         return this.movies.filter((movie) =>
            movie.movieName.toLowerCase().startsWith(query.toLowerCase())
         );
      };
   }
}

class SearchByYear extends Search {
   constructor(movies: Movies[]) {
      super(movies);
      this.filterMovies = (query) => {
         return this.movies.filter((movie) => movie.year === query);
      };
   }
}

const searchByYear = new SearchByYear(moviesData);
console.log(searchByYear.search("1991")); // [ { movieName: 'Terminator 2', year: '1991' } ]

const searchByName = new SearchByName(moviesData);
console.log(searchByName.search("pre")); // [ { movieName: 'Predator', year: '1987' } ]
