const RatingProduct = require('../models/ratingProductModel');
const BuyProduct = require('../models/buyProductModel');

const rating_product = async (req, res) => {

  try {

    const rating = req.body.rating;

    const ratingProduct = new RatingProduct({

      buy_product_id: req.body.buy_product_id,
      rating: req.body.rating
    })

    const check_buyer = await BuyProduct.findOne({ _id: req.body.buy_product_id });

    if (check_buyer) {

      if ((rating < 0) || (rating > 10)) {
        res.status(400).send({ success: false, msg: "Rating between 0 to 10" });
      }
      else {
        const ratingProductData = await ratingProduct.save();
        res.status(200).send({ success: true, msg: "Buy Product Details", data: ratingProductData })
      }

    }
    else {
      res.status(400).send({ success: false, msg: "You have not purchased any product yet, please purchase first then rate us" });
    }


  } catch (error) {
    res.status(400).send({ success: false, msg: error.msg });
  }



}

// module.exports = rating_product;  //error will throw

module.exports = {
  rating_product
}
