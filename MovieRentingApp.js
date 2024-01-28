class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title; 
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        return true;
      } else {
        console.log(`Sorry, ${this.title} is currently out of stock.`);
        return false;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      console.log(`Thank you for returning ${this.title}.`);
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    displayMovies() {
      console.log('\nAvailable Movies:');
      this.movies.forEach(movie => {
        console.log(`${movie.title} (${movie.genre}) - Available Copies: ${movie.availableCopies}`);
      });
    }
  }
  
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentedMovies = [];
    }
  
    rentMovie(movie, movieStore) {
      if (movieStore.movies.includes(movie) && movie.rentMovie()) {
        this.rentedMovies.push(movie);
        console.log(`${this.name} has rented ${movie.title}.`);
      } else {
        console.log(`${this.name}, unable to rent ${movie.title}.`);
      }
    }
  
    returnMovie(movie) {
      if (this.rentedMovies.includes(movie)) {
        movie.returnMovie();
        this.rentedMovies = this.rentedMovies.filter(m => m !== movie);
        console.log(`${this.name} has returned ${movie.title}.`);
      } else {
        console.log(`${this.name}, you did not rent ${movie.title} from our store.`);
      }
    }
  }
  
  // Movie rental app usage:
  const movie1 = new Movie('A Tribe Called Judah', 'Drama', 5);
  const movie2 = new Movie('Gangs Of Lagos', 'Crime Thriller', 3);
  const movie3 = new Movie('Dark Harvest', 'Horror', 2);
  const movie4 = new Movie('Big Love', 'Romance', 4);
  const movie5 = new Movie('Simulant', 'Sci-Fi', 6);
  
  const movieStore = new MovieStore();
  movieStore.addMovie(movie5);
  movieStore.addMovie(movie1);
  movieStore.addMovie(movie4);
  
  const customer1 = new Customer('Chibyke');
  const customer2 = new Customer('Gloria');                                                                                                                                                                                                                                                                                                                                                      
  
  // Display available movies
  movieStore.displayMovies();
  
  // Rent movies
  customer1.rentMovie(movie5, movieStore);
  customer2.rentMovie(movie1, movieStore);
  
  // Display available movies after rentals
  movieStore.displayMovies();
  
  // Return movies
  customer1.returnMovie(movie5);
  
  // Display available movies after returns
  movieStore.displayMovies();