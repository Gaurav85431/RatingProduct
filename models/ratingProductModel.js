const mongoose = require('mongoose');

const ratingProductSchema = mongoose.Schema({

  buy_product_id: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true
  }


});

module.exports = mongoose.model("RateProduct", ratingProductSchema);