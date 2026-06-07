// MongoDB Seed Script
// Run with: mongosh "mongodb+srv://<user>:<password>@sandbox.julhhni.mongodb.net/movies-api-db" seed.js
// Or from project root: mongosh "mongodb+srv://aiman120021_db_user:<password>@sandbox.julhhni.mongodb.net/movies-api-db" data/seed.js

db = db.getSiblingDB("movies-api-db");

db.movies.insertMany([
  {
    imdbId: "tt1877830",
    title: "The Batman",
    releaseDate: "2022-03-04",
    trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    genres: ["Action", "Crime", "Drama"],
    backdrops: [
      "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      "https://image.tmdb.org/t/p/original/5P8SmMzik6KRrNZIEXAIXRGShTM.jpg"
    ],
    reviewIds: []
  },
  {
    imdbId: "tt4154796",
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    backdrops: [
      "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "https://image.tmdb.org/t/p/original/qsOJCKioZbHqBvuBxM3vxL3cLGc.jpg"
    ],
    reviewIds: []
  },
  {
    imdbId: "tt0468569",
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genres: ["Action", "Crime", "Drama"],
    backdrops: [
      "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CejMWhWC.jpg"
    ],
    reviewIds: []
  }
]);

print("✅ Seeded 3 movies into movies-api-db.movies");
