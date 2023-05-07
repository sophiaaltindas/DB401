const mongoose = require('mongoose')

module.exports = mongoose.model('Comment', {
  name: String,
  email: String,
  movie_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Movie',
  },
  text: String,
  date: Date,
})
