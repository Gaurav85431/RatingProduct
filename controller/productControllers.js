const Product = require('../models/productModel');

const add_product = async (req, res) => {

  try {

    const arrayImaage = [];
    for (let i = 0; i < req.files.length; i++) {
      arrayImaage[i] = req.files.filename;
    }

    const product = new Product({

      // model me : body me
      vendor_id: req.body.vendor_id,
      store_id: req.body.store_id,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      category_id: req.body.category_id,
      sub_cat_id: req.body.sub_cat_id,
      images: arrayImaage


    });

    const product_data = await product.save();

    res.status(200).send({ success: true, msg: "product Details", data: product_data });

  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }

}

module.exports = {
  add_product
}