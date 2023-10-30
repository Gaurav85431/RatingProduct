const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  },
});

// mongoose.model('Category',categorySchema); // categories collection me categorySchema bane

module.exports = mongoose.model('Category', categorySchema);
