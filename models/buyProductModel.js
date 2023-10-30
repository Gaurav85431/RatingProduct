const mongoose = require('mongoose');

const buyProductsSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  product_id: {
    type: String,
    required: true
  },
  transaction_id: {
    type: String,
    required: true
  },
  vendor_id: {
    type: String,
    required: true
  },
  /**
   store_id:{
      type:String,
      required:true
   },
   */
  // we are not include store in this database we have not enter store_id::::

  customer_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("BuyProduct", buyProductsSchema);





