const mongoose = require('mongoose');
// ab hm schema create karenge:::

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  mobile: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  }

});

// mongoose.model('User',userSchema);  // ab is file ko export kr denge

module.exports = mongoose.model('User', userSchema);