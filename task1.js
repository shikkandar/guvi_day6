class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of the class Movie
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Example usage
  console.log("Title:", casinoRoyale.title);
  console.log("Studio:", casinoRoyale.studio);
  console.log("Rating:", casinoRoyale.rating);
  
  // Creating an array of Movie instances
  const movieArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG"),
  ];
  
  // Filtering movies with rating "PG"
  const pgMovies = Movie.getPG(movieArray);
  
  // Displaying PG-rated movies
  console.log("\nPG-rated Movies:");
  pgMovies.forEach(movie => {
    console.log(`Title: ${movie.title}, Studio: ${movie.studio}, Rating: ${movie.rating}`);
  });
  