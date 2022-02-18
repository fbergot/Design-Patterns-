// --------------------------------- Template Pattern
// Fake data
const moviesData = [
    {
        movieName: "Predator",
        year: '1987'
    },
    {
        movieName: "Terminator",
        year: '1984'
    },
    {
        movieName: "Terminator 2",
        year: '1991'
    },
]
// Template
class Search {
    constructor(movies) {
        this.movies = movies;
    }
    search(query) {
        return this.filterMovies(query);
    }
}

class SearchByName extends Search {
    constructor(movies) {
        super(movies);
    }
    filterMovies(query) {
        return this.movies.filter((movie) => movie.movieName.toLowerCase().startsWith(query.toLowerCase()));
    }
}

class SearchByYear extends Search {
    constructor(movies) {
        super(movies);
    }
    filterMovies(query) {
        return this.movies.filter((movie) => Number.parseInt(movie.year) === query);
    }
}

const searchByYear = new SearchByYear(moviesData);
console.log(searchByYear.search(1991)); // [ { movieName: 'Terminator 2', year: '1991' } ]

const searchByName = new SearchByName(moviesData);
console.log(searchByName.search('pre')); // [ { movieName: 'Predator', year: '1987' } ]