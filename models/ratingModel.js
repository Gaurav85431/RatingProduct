const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  buyProduct_id: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  },
});



module.exports = mongoose.model('Rating', ratingSchema);
