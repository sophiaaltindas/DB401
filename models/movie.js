const mongoose = require('mongoose')

module.exports = mongoose.model('Movie', {
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: {
    type: Number,
    index: -1,
  },
  metacritic: Number,
  title: String,
  languages: [String],
  fullplot: String,
  countries: [String],
  released: Date,
  directors: [String],
  writers: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: Date,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
      lastupdated: Date,
    },
  },
})
