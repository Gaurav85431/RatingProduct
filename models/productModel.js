const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  vendor_id: {
    type: String,
    require: true
  },

  store_id: {
    type: String,
    // require: true
  },
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  discount: {
    type: Number,
    require: true
  },
  category_id: {
    type: String,
    require: true
  },
  sub_cat_id: {
    type: String,
    require: true
  },
  images: {
    type: Array,  // hm image ko array ke form me rakhange bcz hme 0 to 7 index pr 
    // total 8 images ko add karna hai.
    require: true,
    validate: [imagesLimit, 'you can pass only 8 images']


  }

});

function imagesLimit(imgCount) {
  return imgCount.length <= 8; // total 8 img 
}


module.exports = mongoose.model("Product", productSchema);